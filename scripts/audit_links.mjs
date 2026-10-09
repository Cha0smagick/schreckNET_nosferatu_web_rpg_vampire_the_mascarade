// Phase 8 audit — internal link + asset integrity check.
// Resolves every relative href/src on every page against the filesystem,
// following the same rules the browser uses for a relative URL on a Pages
// site (no leading slash, no extension -> .html, directory -> index.html).
// Run: node scripts/audit_links.mjs
import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');

const htmlFiles = readdirSync(ROOT)
  .filter((f) => f.endsWith('.html'))
  .sort();

const problems = [];
const checked = new Set();

function resolveFrom(pageFile, rawUrl) {
  let u = rawUrl.trim();
  if (!u || u.startsWith('#')) return null; // pure fragment
  if (/^(https?:|mailto:|tel:|data:|javascript:)/i.test(u)) return null; // external
  u = u.split('#')[0].split('?')[0];
  if (!u) return null;

  // Pages-compatible: everything is relative. A leading slash would break
  // project-site hosting, so flag it rather than resolve it.
  if (u.startsWith('/')) return { error: 'absolute path breaks Pages subpath hosting' };

  const base = join(ROOT, dirname(pageFile));
  let target = resolve(base, decodeURIComponent(u));

  const candidates = [target];
  if (!existsSync(target)) {
    if (!/\.[a-z0-9]+$/i.test(u)) candidates.push(target + '.html');
    candidates.push(join(target, 'index.html'));
  }
  for (const c of candidates) {
    if (existsSync(c) && statSync(c).isFile()) return { target: c };
  }
  return { error: 'does not exist' };
}

for (const page of htmlFiles) {
  const src = readFileSync(join(ROOT, page), 'utf8');

  // href="..." and src="..." (single and double quoted).
  // A value followed by `' + ...` is a JS concatenation expression, not a
  // literal URL — the real targets are checked separately by the data audit.
  const attrRe = /(?:href|src)\s*=\s*["']([^"']+)["']/gi;
  let m;
  while ((m = attrRe.exec(src)) !== null) {
    const url = m[1];
    const after = src.slice(m.index + m[0].length);
    if (/^\s*\+/.test(after)) continue;
    if (/^\s*\{\{/.test(after)) continue; // template placeholder
    const r = resolveFrom(page, url);
    if (!r) continue;
    const key = page + ' -> ' + url;
    if (checked.has(key)) continue;
    checked.add(key);
    if (r.error) problems.push(`[BROKEN] ${page}: "${url}" — ${r.error}`);
    else checked.add(key + ' OK');
  }

  // Every page must load main.js (auth gate + nav)
  if (!/assets\/js\/main\.js/.test(src)) {
    problems.push(`[MISSING] ${page}: does not load assets/js/main.js`);
  }
  // Every page must reference the stylesheet
  if (!/assets\/css\/style\.css/.test(src)) {
    problems.push(`[MISSING] ${page}: does not load assets/css/style.css`);
  }
  // Rule 6: 100% English. Spanish is simply not a language here.
  const spanish = src.match(/\blang\s*=\s*["']es/i);
  if (spanish) problems.push(`[I18N] ${page}: lang="es" — rule 6 requires English only`);
}

// Downloaded lore files must all be non-trivial.
const dl = join(ROOT, 'downloads');
if (existsSync(dl)) {
  for (const f of readdirSync(dl)) {
    const size = statSync(join(dl, f)).size;
    if (size < 200) problems.push(`[THIN] downloads/${f}: only ${size} bytes`);
  }
}

// Dynamic links: any literal `downloads/<name>` mentioned anywhere in a page
// — including inside JS string concatenation — must exist on disk. This is
// where a generated archive row can silently point at a file that was never
// written.
const referenced = new Map(); // filename -> set(pages)
for (const page of htmlFiles) {
  const src = readFileSync(join(ROOT, page), 'utf8');
  const re = /downloads\/([A-Za-z0-9_.-]+\.(?:txt|svg|jpg|png|pdf))/g;
  let m;
  while ((m = re.exec(src)) !== null) {
    if (!referenced.has(m[1])) referenced.set(m[1], new Set());
    referenced.get(m[1]).add(page);
  }
}
for (const [name, pages] of referenced) {
  if (!existsSync(join(dl, name))) {
    problems.push(`[BROKEN] downloads/${name} linked from ${[...pages].join(', ')} — file does not exist`);
  }
}

const okCount = [...checked].filter((k) => k.endsWith(' OK')).length;

console.log(`pages: ${htmlFiles.length}`);
console.log(`internal href/src resolved: ${okCount}`);
console.log(`problems: ${problems.length}`);
if (problems.length) {
  for (const p of problems) console.log(p);
  process.exit(1);
}
console.log('\nAUDIT CLEAN');