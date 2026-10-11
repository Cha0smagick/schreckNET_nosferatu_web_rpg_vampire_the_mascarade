/**
 * fix_quotes.mjs — one-shot repair: inside assets/js/lore_part_*.js, object-literal
 * string values written with single quotes that CONTAIN raw apostrophes are
 * re-quoted with double quotes (escaping any inner double quotes).
 * Usage: node scripts/fix_quotes.mjs
 */
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const JS = join(HERE, '..', 'assets', 'js');

for (const f of readdirSync(JS).filter((x) => /^lore_part_.*\.js$/.test(x))) {
  const p = join(JS, f);
  const lines = readFileSync(p, 'utf8').split('\n');
  let fixed = 0;
  const out = lines.map((line) => {
    const m = line.match(/^(\s*[A-Za-z_]+:\s*)'(.*)'(,?)\s*$/);
    if (!m) return line;
    const body = m[2];
    const unescaped = (body.match(/(?<!\\)'/g) || []).length;
    if (unescaped === 0) return line; // already clean
    const safe = body.replace(/(?<!\\)'/g, "\\'");
    fixed++;
    return m[1] + "'" + safe + "'" + m[3];
  });
  if (fixed) { writeFileSync(p, out.join('\n')); console.log(f + ': fixed ' + fixed + ' lines'); }
}
console.log('done');
