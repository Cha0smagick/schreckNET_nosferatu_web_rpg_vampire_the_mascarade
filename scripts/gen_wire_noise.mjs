// GENERATED SCHRECKNET script - builds procedural pre-crash wire archive (window.WIRE_ARCHIVE)
// deterministic: same run = same output. Merge in news.html AFTER wire_special.js.
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

function loadWin(rel) {
  const w = {};
  const code = fs.readFileSync(path.join(root, rel), 'utf8');
  new Function('window', code)(w);
  return w;
}
const cities = loadWin('assets/js/cities_data.js').CITIES_DB.cities;
const LORE = loadWin('assets/js/lore_data.js').LORE_DB;
const ALLCH = [];
[...(LORE.clans || []), ...(LORE.bloodlines || []), ...(LORE.antitribu || [])].forEach(g => (g.chars || []).forEach(c => ALLCH.push(c.name)));

function hashStr(s) { let h = 2166136261; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619) >>> 0; } return h >>> 0; }
function mulberry32(a) { return function () { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }

const FLAGS = ['DRAIN-TAIL', 'TIDE-LEDGER', 'WAKE-COUNT', 'BONE-LEDGER', 'SPORE-INTEREST', 'TALLY-CADENCE', 'PLOT-SALE', 'WANT-INDEX', 'COIL-DEPTH', 'MOUNTAIN-DEBT', 'OATH-DUPLICATION', 'MIRROR-DEBT', 'LIE-INTEREST', 'WICK-CLOCK', 'TUNING-CADENCE', 'HUM-TOLL', 'IRON-INDEX', 'DOOR-DELTA', 'PLUMB-SKEW', 'CHOIR-COUNT', 'TRAP-ROOM', 'FRESCO-LAYER', 'TIME-OFFSET', 'OSSUARY-PING', 'FLESH-LEDGER', 'ROT-CLOCK', 'ANGLE-ANOMALY', 'SKULL-SURPLUS', 'GRAFT-PAIR', 'TITHE-SHELF', 'UNCLAIMED-HOLD', 'TAB-OPEN', 'CENSUS-INFLATION', 'PENDING-CASE', 'SALT-VIGIL', 'TIDE-RITE', 'NINE-COUNTS', 'WINGSPAN-NULL', 'BOOK-TALLY', 'QUARRY-CALL'];
const SOURCES = ['archive pull', 'node relay VLA-7 mirror', 'dead drop 3', 'acoustic tap, main collector', 'courier pouch, unopened', 'burned line, last buffer', 'tunnel census delta', 'whisper net fragment', 'salvage disk', 'operator log, recovered'];
const CATS = ['INTEL', 'INTEL', 'INTEL', 'GOSSIP', 'GOSSIP', 'ALERT', 'RATLINE', 'OBIT'];
const VERBS = ['unconfirmed', 'corroborated twice', 'flagged by two nodes', 'logged and closed', 'pending verification', 'disputed', 'entered without review', 'stamped nodes-only'];

function fmt(ts) { const d = new Date(ts); return d.getUTCFullYear() + '-' + String(d.getUTCMonth() + 1).padStart(2, '0') + '-' + String(d.getUTCDate()).padStart(2, '0'); }
const T0 = Date.UTC(2023, 0, 4), T1 = Date.UTC(2026, 2, 1);

// arcs: multi-part storylines tied to real roster entries (city, char, parts[])
const ARCS = [
  { city: 'New Orleans', name: 'Sadie LaRue', parts: ['SIGNAL-30 dropped a half-song at 03:11. The missing verse matches a hymn scheduled for a wake that has not happened yet.', 'Second night: the half-song repeats one bar earlier. Counting backwards puts the wake eleven days out.', 'SIGNAL-30 went silent mid-phrase. The unfinished note is holding. Do not hum it back.'] },
  { city: 'Los Angeles', name: 'Mitnick', parts: ['A shadow login moved through node LA-4 with perfect credentials and zero keystroke sound.', 'The intruder left a receipt: one file copied, timestamped before the operator pulled it.', 'Mitnick signature confirmed by packet cadence. Message reads: CHARGE IT TO THE FILE THAT ASKED.'] },
  { city: 'Chicago', name: 'The Census Taker', parts: ['Kindred census for Chicago arrived one entry short. The missing slot is pre-filled with a question mark.', 'Resubmission arrived with TWO question marks. The city has not grown.', 'A third census arrived. It counts the operators.'] },
  { city: 'Chicago', name: 'Tommy Hinds', parts: ['Freight tunnel tally below Congress came back with one lantern lit that no one reports owning.', 'The lantern moved three hundred yards toward the lake over six weeks. Steady, deliberate.', 'Lantern stopped at the old postal tunnel and went out. Tommy Hinds filed no report. That is the report.'] },
  { city: 'London', name: 'The Whispered Ledger', parts: ['A ratline under the Fleet offered passage for a fee paid in names. Two operators took the deal.', 'Both operators now appear as ENTRIES in the ledger rather than clients.', 'The ledger is accepting new applicants. Fee unchanged. Seats available.'] },
  { city: 'Cairo', name: 'The Debt Clock', parts: ['Cairo clock tower struck thirteen. Log says twelve. The gap is 2041-shaped.', 'A second strike recorded from inside the tower. The clock was empty when checked.', 'The Debt Clock now runs one minute behind every authority in the city. It is gaining.'] },
  { city: 'New York', name: 'Silas Greer', parts: ['City Hall station logged a maintenance crew at 04:00. MTA has no crew assigned and no keys issued.', 'Crew signed the log with a name that matches a 1932 work order.', 'Log page torn out. Greer filed the tear itself as evidence. Clever rat.'] },
  { city: 'Mexico City', name: 'Nocturna', parts: ['Gran Canal outfall 22 recorded choir residue at a depth the survey says is solid.', 'Choir residue now appears at three more outfalls. All at the same depth. All solid.', 'The survey has been corrected to match the singing. Nocturna asks which is the lie.'] },
  { city: 'varies', name: 'The Weeping Blade', parts: ['A tribunal fee was paid in a city where no tribunal sits.', 'Second payment same night, different city, same witness name.', 'The Weeping Blade is holding court on a schedule. The schedule is not ours.'] },
  { city: 'Moscow', name: 'Vera Chernaya', parts: ['Metro-2 listening vault picked up breathing on a platform closed since 1986.', 'Breathing keeps time with a chime that does not exist on any D-6 schematic.', 'Schematic reissued WITH the chime. Vera Chernaya filed the old one as the forgery.'] },
  { city: 'Port-au-Prince', name: 'Doctor Ferreau', parts: ['Cabinet inventory shows one jar too many. The extra jar is labeled in advance.', 'Label now carries a date. It is next week.', 'Jar is gone. The space it occupied is still cold.'] },
  { city: 'varies', name: 'The Blind Scale', parts: ['A file on VLA-7 gained one kilobyte between reads. No edits recorded.', 'Second read: one more kilobyte. The increment is constant.', 'The Blind Scale is weighing us. Directive stands: file the weight, do not offset it.'] }
];

// generic headline/body builders (r = rng, c = city, flag, name = random roster char)
function generic(r, c, flag, name) {
  const pick = (a) => a[Math.floor(r() * a.length)];
  const prince = c.prince || 'court unnamed';
  const kindred = c.kindred_est || 'count disputed';
  const roll = Math.floor(r() * 14);
  switch (roll) {
    case 0: return { h: c.name + ': tunnel census off by one', b: 'Sewer census for ' + c.name + ' returned ' + (typeof kindred === 'number' ? kindred - 1 : 'one short') + ' against the standing count. Flag ' + flag + '. ' + pick(VERBS) + '. Recount scheduled; previous recount opened a file of its own.' };
    case 1: return { h: 'Toll demanded at ' + c.name + ' collector', b: 'Passage under ' + c.name + ' now requires a fee: one memory of a street that no longer exists. Court of ' + prince + ' denies authorizing it. Flag ' + flag + '.' };
    case 2: return { h: c.name + ': SI sweep metadata found in dead drop', b: 'Blankbody probe signatures harvested from a drop three days after its last use. Sweep pattern precedes next census by ' + (2 + Math.floor(r() * 9)) + ' nights. Flag ' + flag + '.' };
    case 3: return { h: 'Blood hunt lifted in ' + c.name + ' without decree', b: 'The hunt on ' + name + ' ended quietly; no decree, no ash. ' + prince + ' ' + pick(VERBS) + '. Flag ' + flag + '. Treat as trap until second source.' };
    case 4: return { h: c.name + ': diablerie residue at collector junction ' + (1 + Math.floor(r() * 40)), b: 'Ash-and-chill readings at junction ' + (1 + Math.floor(r() * 40)) + ' match diablerie of an elder. Generation of the victim unknown; appetite was not. Flag ' + flag + '.' };
    case 5: return { h: 'Masquerade breach rumor, ' + c.name, b: 'Security footage described but not attached: a figure that films wrong. Court of ' + prince + ' buying every copy. Flag ' + flag + '. ' + pick(VERBS) + '.' };
    case 6: return { h: c.name + ': ratline fee changed', b: 'The tunnel toll into ' + c.name + ' now accepts payment in corrections to our own maps. Two paid. Their copies differ from ours in one street each.' };
    case 7: return { h: 'Elder movements, ' + c.name, b: 'A pallid cortège crossed ' + c.name + ' under river level, preceded by a rain that fell upward for one second. Flag ' + flag + '. The court denies the cortège and the second.' };
    case 8: return { h: c.name + ': haven lease transferred', b: 'A haven under ' + c.name + ' changed hands for a consideration that is not money. New tenant listed as ' + name + '. Prior tenant not listed at all.' };
    case 9: return { h: 'Tribunal rumor, ' + c.name, b: 'The judges of ' + c.name + ' sat in a room our acoustics cannot reach. Verdict leaked as a single word: ' + pick(['PAID', 'STAYED', 'ESCHEWED', 'COUNTED']) + '. Flag ' + flag + '.' };
    case 10: return { h: c.name + ': vitae ledger irregularity', b: 'Basin counts at ' + c.name + ' show surplus ' + (1 + Math.floor(r() * 12)) + ' pints with no donor line. Surplus persists across recounts. Flag ' + flag + '.' };
    case 11: return { h: 'Second Inquisition census form found pre-filled', b: 'A blankbody census for ' + c.name + ' arrived completed, including a count of ' + kindred + ' and one field marked: WAITING. Do not return the form.' };
    case 12: return { h: c.name + ': abandoned station relit for one night', b: 'A station closed ' + (30 + Math.floor(r() * 90)) + ' years drew power for a single night. Platform clock ran forward. Flag ' + flag + '.' };
    default: return { h: 'Whisper net fragment, ' + c.name, b: 'Partial transmission: "...if the ' + pick(FLAGS).toLowerCase() + ' holds, tell them the count was right the first time..." Origin node unresolved. Court of ' + prince + ' denies sending. ' + pick(VERBS) + '.' };
  }
}

const items = [];
const seenH = new Set();
let idn = 1;
function push(ts, cat, city, h, b, src, prio) {
  if (seenH.has(h)) return false;
  seenH.add(h);
  items.push({ id: 'WA-' + String(idn++).padStart(4, '0'), ts: fmt(ts), cat, city, headline: h, body: b, source: src, priority: prio || 0 });
  return true;
}

// arcs first (3 items each, chronological)
ARCS.forEach((a, ai) => {
  const base = T0 + Math.floor(hashStr('arc:' + a.name) % ((T1 - T0 - 40 * 86400000)));
  a.parts.forEach((p, pi) => {
    const cat = pi === 2 ? 'ALERT' : 'INTEL';
    push(base + pi * 3 * 86400000 + Math.floor(hashStr('arcpart:' + ai + pi) % 86400000), cat, a.city, a.name.toUpperCase() + ' [' + a.city + '] \u2014 update ' + (pi + 1) + '/3', p, 'operator log, recovered', 0);
  });
});

// generic fill
const TARGET = 1000;
let guard = 0;
while (items.length < TARGET && guard < 60000) {
  guard++;
  const seed = hashStr('wire-noise:' + guard);
  const r = mulberry32(seed);
  const c = cities[Math.floor(r() * cities.length)];
  const flag = FLAGS[Math.floor(r() * FLAGS.length)];
  const name = ALLCH[Math.floor(r() * ALLCH.length)];
  const g = generic(r, c, flag, name);
  const ts = T0 + Math.floor(r() * (T1 - T0));
  const cat = CATS[Math.floor(r() * CATS.length)];
  push(ts, cat, c.name, '[' + flag + '] ' + g.h, g.b, SOURCES[Math.floor(r() * SOURCES.length)], 0);
}

items.sort((x, y) => (x.ts < y.ts ? -1 : x.ts > y.ts ? 1 : x.id < y.id ? -1 : 1));
items.forEach((it, i) => { it.id = 'WA-' + String(i + 1).padStart(4, '0'); });

const banner = '// GENERATED SCHRECKNET FILE - procedural pre-crash wire archive (gen_wire_noise.mjs), do not hand-edit\n';
const body = 'window.WIRE_ARCHIVE = (function () {\n  return { updated: "2026-10-11", note: "pre-crash records, LOW PRIORITY ARCHIVE, provenance mixed", items: ' + JSON.stringify(items, null, 0) + ' };\n})();\n';
fs.writeFileSync(path.join(root, 'assets/js/wire_archive.js'), banner + body, 'utf8');

// verify parse
const w2 = {};
new Function('window', fs.readFileSync(path.join(root, 'assets/js/wire_archive.js'), 'utf8'))(w2);
console.log('items=' + w2.WIRE_ARCHIVE.items.length, 'first=' + w2.WIRE_ARCHIVE.items[0].id, 'last=' + w2.WIRE_ARCHIVE.items[w2.WIRE_ARCHIVE.items.length - 1].id, 'cats=' + [...new Set(w2.WIRE_ARCHIVE.items.map(i => i.cat))].join('/'), 'bytes=' + (banner + body).length);
