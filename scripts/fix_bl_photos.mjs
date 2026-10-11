// fix_bl_photos.mjs — insert missing photo field into inline char literals (harbingers, kiasyd)
// Usage: node scripts/fix_bl_photos.mjs
import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const files = [
  join(HERE, '..', 'assets', 'js', 'lore_part_bl_harbingers.js'),
  join(HERE, '..', 'assets', 'js', 'lore_part_bl_kiasyd.js'),
];

for (const f of files) {
  const src = readFileSync(f, 'utf8');
  let fixed = 0;
  const out = src.split('\n').map((line) => {
    const m = line.match(/^(\s*\{ id: '((?:harbingers|kiasyd)\d+)')(,.*)$/);
    if (m && !line.includes('photo:')) {
      fixed++;
      return m[1] + ", photo: 'assets/img/char_" + m[2] + ".png'" + m[3];
    }
    return line;
  }).join('\n');
  if (fixed) writeFileSync(f, out, 'utf8');
  console.log(f.split(/[\\/]/).pop() + ': photo inserted in ' + fixed + ' chars');
}
