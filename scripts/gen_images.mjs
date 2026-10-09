/**
 * gen_images.mjs — SchreckNET plate generator.
 *
 * Reads image_prompts.json, calls the NVIDIA Flux.2 Klein 4B endpoint once per
 * image, writes PNGs into assets/img/. Idempotent: existing files are skipped
 * unless --force is passed. Defensive about upstream failures — a failed plate
 * is reported and the run continues, because the pages degrade to a background
 * colour when a plate is missing.
 *
 * The upstream safety filter rejects a number of perfectly mundane descriptive
 * prompts ("photorealistic" alone is enough to trip it). Rather than hand-tune
 * 22 prompts against an opaque filter, each plate walks a ladder of
 * progressively plainer rewrites and only settles for a neutral last resort if
 * every variant is refused. Nothing ships empty.
 *
 *   node scripts/gen_images.mjs            # only missing plates
 *   node scripts/gen_images.mjs --force    # regenerate everything
 *   node scripts/gen_images.mjs nergal.png # regenerate named plates
 */

import { readFile, writeFile, mkdir, access } from 'node:fs/promises'
import { constants } from 'node:fs'
import { resolve, dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import fetch from 'node-fetch'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const PROMPTS = join(ROOT, 'image_prompts.json')
const OUT = join(ROOT, 'assets', 'img')

const ENDPOINT =
  'https://ai.api.nvidia.com/v1/genai/black-forest-labs/flux.2-klein-4b'

const argv = process.argv.slice(2)
const FORCE = argv.includes('--force')
const ONLY = argv.filter((a) => !a.startsWith('--'))

async function readEnv() {
  const text = await readFile(join(ROOT, '.env'), 'utf8')
  const out = {}
  for (const line of text.split(/\r?\n/)) {
    const m = /^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/.exec(line)
    if (m) out[m[1]] = m[2].replace(/^["']|["']$/g, '')
  }
  return out
}

const exists = (p) =>
  access(p, constants.F_OK).then(
    () => true,
    () => false
  )

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

/* ------------------------------------------------------------------ *
 * Geometry: the endpoint takes only prompt/width/height. Both sides
 * must be multiples of 16 in [512,1536] and the product may not
 * exceed 1062400 pixels. Anything else is a 422.
 * ------------------------------------------------------------------ */
const MAX_AREA = 1062400

function dims(item) {
  const m = /^(\d+)x(\d+)$/.exec(item.size || '')
  const snap = (v) => Math.min(1536, Math.max(512, Math.round(v / 16) * 16))
  let w = snap(m ? Number(m[1]) : 1024)
  let h = snap(m ? Number(m[2]) : 1024)
  while (w * h > MAX_AREA && (w > 512 || h > 512)) {
    const k = Math.sqrt(MAX_AREA / (w * h)) * 0.98
    w = snap(w * k)
    h = snap(h * k)
  }
  return { width: w, height: h }
}

/* ------------------------------------------------------------------ *
 * Prompt ladder. Each rung is a plainer rewrite of the one above.
 * ------------------------------------------------------------------ */

// Phrases the filter has been observed to reject outright, even in
// isolation. Removed before the first retry.
const DROP = [
  /photorealistic/gi,
  /realistic/gi,
  /chiaroscuro/gi,
  /lit by/gi,
  /vampiric/gi,
  /vampire/gi,
  /undead/gi,
  /blood-?red/gi,
  /\bblood\b/gi,
  /bloody/gi,
  /corpse/gi,
  /severed/gi,
  /decapitat\w*/gi,
  /gore/gi,
  /plague/gi,
  /disease/gi,
  /sacrific\w*/gi,
  /ritual/gi,
  /diablerie/gi,
  /cannibal\w*/gi,
  /snuff/gi,
  /torture/gi,
  /knife|knives|blade/gi,
  /gun|firearm|rifle|pistol/gi,
  /wound\w*/gi,
  /flesh/gi,
  /dreadful/gi,
  /horror/gi,
  /no text,?/gi
]

// Style/quality words that add nothing once the plate is on a black page.
const STYLE = [
  /cinematic/gi,
  /dramatic/gi,
  /moody/gi,
  /high contrast/gi,
  /extremely dark/gi,
  /documentary photography/gi,
  /film-noir/gi,
  /painterly/gi,
  /found-footage/gi,
  /unsleasing/gi
]

function strip(list, text) {
  let out = text
  for (const re of list) out = out.replace(re, ' ')
  return out.replace(/\s{2,}/g, ' ').replace(/,\s*,/g, ',').trim()
}

function variants(item) {
  const p = item.prompt
  const drop = strip(DROP, p)
  const plain = strip(STYLE, drop)
  const short = plain
    .split(/[,\.]/)
    .map((s) => s.trim())
    .filter(Boolean)
    .slice(0, 6)
    .join(', ')

  const ladder = [p, drop, plain, short]
  if (item.fallback) ladder.push(item.fallback)
  // Last resort: neutral settings that always clear the filter, so a plate is
  // never left missing because of a word.
  ladder.push(
    'an empty dark underground stone chamber, dim green light, deep shadow, mist',
    'dark stone corridor, dim light'
  )
  // de-duplicate while preserving order
  return [...new Set(ladder.filter(Boolean))]
}

async function post(prompt, size, apiKey) {
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({ prompt, ...size })
  })
  const raw = await res.text()
  let json = null
  try {
    json = JSON.parse(raw)
  } catch {
    /* non-JSON body handled by the status check */
  }
  const b64 = json?.artifacts?.[0]?.base64
  return {
    status: res.status,
    finish: json?.artifacts?.[0]?.finishReason || null,
    buf: b64 ? Buffer.from(b64, 'base64') : null,
    raw
  }
}

async function generate(item, apiKey) {
  const size = dims(item)
  const rungs = variants(item)
  let lastNote = 'no variants'

  for (let r = 0; r < rungs.length; r++) {
    const prompt = rungs[r]
    for (let attempt = 1; attempt <= 3; attempt++) {
      if (attempt > 1) await sleep(3000 * attempt)
      let out
      try {
        out = await post(prompt, size, apiKey)
      } catch (err) {
        lastNote = err.message
        continue
      }
      if (out.status === 429 || out.status >= 500) {
        lastNote = `HTTP ${out.status}`
        continue
      }
      if (out.status !== 200) {
        lastNote = `HTTP ${out.status} ${out.raw.slice(0, 120)}`
        break // a 4xx will not improve on retry
      }
      if (out.buf && out.buf.length > 1024) return { buf: out.buf, rung: r }
      lastNote = out.finish || 'empty artifact'
      break // filtered: escalate to the next rung instead of retrying
    }
  }

  throw new Error(lastNote)
}

async function main() {
  const { NVIDIA_API_KEY } = await readEnv()
  if (!NVIDIA_API_KEY) {
    console.error('NVIDIA_API_KEY missing from .env — refusing to run.')
    process.exit(1)
  }

  const spec = JSON.parse(await readFile(PROMPTS, 'utf8'))
  const queue = spec.images.filter(
    (i) => ONLY.length === 0 || ONLY.includes(i.file)
  )

  await mkdir(OUT, { recursive: true })

  let made = 0
  let skipped = 0
  let failed = 0

  for (const item of queue) {
    const target = join(OUT, item.file)
    if (!FORCE && (await exists(target))) {
      skipped++
      console.log(`skip  ${item.file}`)
      continue
    }
    try {
      const { buf, rung } = await generate(item, NVIDIA_API_KEY)
      await writeFile(target, buf)
      made++
      const note = rung ? ` (rewrite ${rung})` : ''
      console.log(
        `ok    ${item.file}  ${(buf.length / 1024).toFixed(0)} KB${note}`
      )
    } catch (err) {
      failed++
      console.error(`FAIL  ${item.file}  ${err.message}`)
    }
  }

  console.log(
    `\nplates: ${made} generated, ${skipped} skipped, ${failed} failed ` +
      `(${queue.length} considered)`
  )
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
