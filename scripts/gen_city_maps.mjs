// SCHRECKNET — procedural underground maps per city.
// Reads assets/js/cities_data.js (window.CITIES_DB) and writes assets/maps/<id>.svg.
// Deterministic: same city id -> same map, forever. Usage: node scripts/gen_city_maps.mjs [--force]
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = join(HERE, '..');
const FORCE = process.argv.includes('--force');

// tiny seeded PRNG (mulberry32) — deterministic per city id
function hash(s) { let h = 2166136261; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
function rng(seed) { let a = seed; return () => { a |= 0; a = (a + 0x6D2B79F5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }

const W = 1000, H = 700;
function cityMap(city) {
  const r = rng(hash(city.id));
  const lines = [`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" font-family="Courier New, monospace">`,
    `<rect width="${W}" height="${H}" fill="#06120C"/>`,
    `<rect x="10" y="10" width="${W - 20}" height="${H - 20}" fill="none" stroke="#16352A" stroke-width="2"/>`,
    `<text x="28" y="44" fill="#39FF14" font-size="24">SEWER & TUNNEL SURVEY — ${city.name.toUpperCase()}</text>`,
    `<text x="28" y="68" fill="#63755F" font-size="13">${city.country} · ${city.sect} · node survey ${new Date().getFullYear()}</text>`];
  // collector grid: winding main sewers
  const nodes = [];
  for (let i = 0; i < 7; i++) {
    let x = 60 + r() * (W - 140), y = 100 + r() * (H - 160);
    let d = `M ${x.toFixed(0)} ${y.toFixed(0)}`;
    for (let s = 0; s < 6; s++) {
      x += (r() - 0.5) * 260; y += (r() - 0.5) * 170;
      x = Math.max(50, Math.min(W - 50, x)); y = Math.max(95, Math.min(H - 50, y));
      d += ` L ${x.toFixed(0)} ${y.toFixed(0)}`;
    }
    lines.push(`<path d="${d}" fill="none" stroke="#2E5B44" stroke-width="${3 + (r() * 4 | 0)}" stroke-linecap="round"/>`);
    nodes.push([x, y]);
  }
  // tunnels: dashed thinner lines between random nodes
  for (let i = 0; i < 9; i++) {
    const a = nodes[(r() * nodes.length) | 0], b = nodes[(r() * nodes.length) | 0];
    lines.push(`<path d="M ${a[0].toFixed(0)} ${a[1].toFixed(0)} Q ${(a[0] + b[0]) / 2 + (r() - 0.5) * 120} ${(a[1] + b[1]) / 2 + (r() - 0.5) * 120} ${b[0].toFixed(0)} ${b[1].toFixed(0)}" fill="none" stroke="#3E7A5B" stroke-width="1.5" stroke-dasharray="5 7"/>`);
  }
  // stations / access points
  nodes.forEach((n, i) => {
    lines.push(`<circle cx="${n[0].toFixed(0)}" cy="${n[1].toFixed(0)}" r="6" fill="#06120C" stroke="#39FF14" stroke-width="2"/>`);
    if (i % 2 === 0) lines.push(`<text x="${(n[0] + 10).toFixed(0)}" y="${(n[1] + 4).toFixed(0)}" fill="#8A93B8" font-size="11">ACCESS ${String(i + 1).padStart(2, '0')}</text>`);
  });
  // warren (Nosferatu core)
  const wn = nodes[(r() * nodes.length) | 0];
  lines.push(`<circle cx="${wn[0].toFixed(0)}" cy="${wn[1].toFixed(0)}" r="14" fill="none" stroke="#B0562F" stroke-width="2.5"/>`,
    `<text x="${(wn[0] + 18).toFixed(0)}" y="${(wn[1] - 8).toFixed(0)}" fill="#B0562F" font-size="13">WARREN (HIVE)</text>`);
  // metro ghost line
  lines.push(`<path d="M 30 ${H - 90} Q ${W / 2} ${H - 160} ${W - 30} ${H - 90}" fill="none" stroke="#A78BFA" stroke-width="2" opacity="0.6"/>`,
    `<text x="34" y="${H - 100}" fill="#A78BFA" font-size="11">ABANDONED METRO LINE (verified)</text>`);
  lines.push(`<text x="28" y="${H - 28}" fill="#63755F" font-size="11">SCHRECKNET · VLA-7 survey · ${city.kindred_est ?? '?'} kindred est. · classify before trusting</text>`,
    `</svg>`);
  return lines.join('\n');
}

// load CITIES_DB without executing window.* — eval the file in a shim
function loadCities() {
  const src = readFileSync(join(ROOT, 'assets', 'js', 'cities_data.js'), 'utf8');
  const sandbox = {};
  const fn = new Function('window', src + '\nreturn window.CITIES_DB;');
  return fn(sandbox).cities;
}

const cities = loadCities();
mkdirSync(join(ROOT, 'assets', 'maps'), { recursive: true });
let made = 0, skipped = 0;
for (const c of cities) {
  const out = join(ROOT, 'assets', 'maps', c.id + '.svg');
  if (!FORCE && existsSync(out)) { skipped++; continue; }
  writeFileSync(out, cityMap(c));
  made++;
}
console.log(`maps: ${made} written, ${skipped} skipped, ${cities.length} cities`);
