/* ============================================================================
 * SCHRECKNET // node VLA-7 — archive generator
 * ----------------------------------------------------------------------------
 * Emits the two data bundles the mirror serves to the browser:
 *
 *   assets/js/dossiers_data.js  ->  window.NOSFERATU_DB
 *   assets/js/kindred_data.js   ->  window.KINDRED_DB
 *
 * Deterministic. Same seed, same archive, forever — a mirror that reshuffles
 * its own records is a mirror nobody can trust, which is the whole joke.
 *
 * Hand-written entries first (the ones the site quotes by name), procedural
 * filler after. Filler is filed as filler: every generated record carries a
 * real clan, a real discipline spread, a real city and a real sanction.
 *
 *   node scripts/gen_network.mjs
 * ==========================================================================*/

import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const UPDATED = '2026-10-09';

/* ---------------------------------------------------------------- random --- */

function mulberry32(a) {
  return function () {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const rnd = mulberry32(0x5c11ec);
const int = (a, b) => a + Math.floor(rnd() * (b - a + 1));
const pick = (arr) => arr[Math.floor(rnd() * arr.length)];
const chance = (p) => rnd() < p;
function sample(arr, n) {
  const copy = arr.slice();
  const out = [];
  while (out.length < n && copy.length) out.push(copy.splice(Math.floor(rnd() * copy.length), 1)[0]);
  return out;
}
function weighted(table) {
  const keys = Object.keys(table);
  const total = keys.reduce((s, k) => s + table[k], 0);
  let r = rnd() * total;
  for (const k of keys) { r -= table[k]; if (r <= 0) return k; }
  return keys[keys.length - 1];
}

/* ------------------------------------------------------------------ clans --- */

const CLANS = [
  { name: 'Ventrue', threat: 5, disc: ['Dominate', 'Fortitude', 'Presence'],
    natures: ['commanding', 'immaculate', 'patient', 'formal', 'hierarchical', 'cold-blooded'],
    cities: ['PARIS', 'LONDON', 'VIENNA', 'ROME', 'MADRID', 'PRAGUE', 'BRUSSELS', 'GENEVA'],
    sectors: ['the Prefecture', 'the Court of Two Hundred', 'the Masquerade', 'old money'] },
  { name: 'Tremere', threat: 4, disc: ['Auspex', 'Dominate', 'Blood Sorcery'],
    natures: ['precise', 'obsessive', 'methodical', 'proud', 'unforgiving'],
    cities: ['PRAGUE', 'VIENNA', 'BUDAPEST', 'LONDON', 'PARIS', 'MILANO', 'BERLIN'],
    sectors: ['the Coven', 'the Convocation', 'the University', 'the Laboratory'] },
  { name: 'Toreador', threat: 3, disc: ['Auspex', 'Celerity', 'Presence'],
    natures: ['seductive', 'artistic', 'amoral', 'elegant', 'melancholic'],
    cities: ['PARIS', 'MILANO', 'VENICE', 'NEW YORK', 'LOS ANGELES', 'ROME', 'BUDAPEST'],
    sectors: ['the Salon', 'the Studio', 'the Annex', 'the Salon Rouge'] },
  { name: 'Nosferatu', threat: 4, disc: ['Animalism', 'Obfuscate', 'Potence'],
    natures: ['patient', 'ancient', 'ceremonious', 'inhuman', 'watchful'],
    cities: ['PRAGUE', 'VIENNA', 'KRAKOW', 'BUDAPEST', 'KYIV', 'CAMAGUEY', 'ODESSA'],
    sectors: ['the Warren', 'the Deep Warrens', 'the Old Net', 'the Compact'] },
  { name: 'Brujah', threat: 4, disc: ['Celerity', 'Potence', 'Presence'],
    natures: ['belligerent', 'honour-bound', 'direct', 'proud', 'tactical'],
    cities: ['PRAGUE', 'BERLIN', 'CHICAGO', 'DETROIT', 'NEW YORK', 'GLASGOW', 'BARCELONA'],
    sectors: ['the Gang', 'the Commune', 'the Street', 'the Barracks'] },
  { name: 'Gangrel', threat: 3, disc: ['Animalism', 'Fortitude', 'Protean'],
    natures: ['feral', 'survivor', 'solitary', 'patient', 'storm-touched'],
    cities: ['PRAGUE', 'EDINBURGH', 'MONTREAL', 'SYDNEY', 'ATLANTA', 'PORTO', 'LIMA', 'BOGOTA'],
    sectors: ['the Pack', 'the Wyrm', 'the Trail', 'the Hollow'] },
  { name: 'Malkavian', threat: 4, disc: ['Auspex', 'Dominate', 'Obfuscate'],
    natures: ['fractured', 'unpredictable', 'compulsive', 'sorrowful', 'shrewd'],
    cities: ['PRAGUE', 'LONDON', 'BUDAPEST', 'CHICAGO', 'LOS ANGELES', 'BEOGRAD', 'ZURICH'],
    sectors: ['the Moon', 'the Asylum', 'the Clinic', 'the Court of Night'] },
  { name: 'Ravnos', threat: 3, disc: ['Animalism', 'Chimerstry', 'Fortitude'],
    natures: ['demonic', 'provocative', 'mischievous', 'wounded', 'amoral'],
    cities: ['PRAGUE', 'LJUBLJANA', 'SARAJEVO', 'TIRANA', 'RIO DE JANEIRO', 'NEW YORK', 'SKOPJE'],
    sectors: ['the Flock', 'the Bazaar', 'the Fire', 'the Cart'] },
  { name: 'Tzimisce', threat: 4, disc: ['Animalism', 'Dominate', 'Vicissitude'],
    natures: ['calculating', 'ancient', 'frozen', 'unblinking', 'patient to a fault'],
    cities: ['PRAGUE', 'MOSCOW', 'ST PETERSBURG', 'BUDAPEST', 'KYIV', 'NEWARK', 'ISTANBUL'],
    sectors: ['the Jyeshin', 'the Horde', 'the Cartel', 'the Nest'] },
  { name: 'Assamite', threat: 4, disc: ['Celerity', 'Obfuscate', 'Quietus'],
    natures: ['zealous', 'ascetic', 'strategic', 'relentless', 'devout'],
    cities: ['CAIRO', 'BAGHDAD', 'RIYADH', 'TEHRAN', 'KARACHI', 'DELHI', 'JEDDAH'],
    sectors: ['the Order', 'the Market', 'the Cell', 'the Bazaar'] },
  { name: 'Followers of Set', threat: 3, disc: ['Obfuscate', 'Presence', 'Serpentis'],
    natures: ['disciplined', 'intense', 'austere', 'patient', 'inhuman'],
    cities: ['CAIRO', 'LOS ANGELES', 'CARACAS', 'MEXICO CITY', 'NEW ORLEANS', 'MUMBAI', 'LIMA', 'BOGOTA'],
    sectors: ['the Paradigm', 'the Temple', 'the Cult', 'the University'] },
  { name: 'Lasombra', threat: 4, disc: ['Dominate', 'Oblivion', 'Potence'],
    natures: ['regal', 'calculating', 'shadowed', 'ambitious', 'predatory'],
    cities: ['TOKYO', 'PRAGUE', 'NEW YORK', 'SAO PAULO', 'MADRID', 'GENOA', 'DUBLIN', 'BOGOTA'],
    sectors: ['the Court', 'the Cathedral', 'the Chancel', 'the Boardroom'] },
  { name: 'Salubri', threat: 2, disc: ['Auspex', 'Fortitude', 'Valeren'],
    natures: ['honourable', 'driven', 'protective', 'restless', 'compassionate'],
    cities: ['PRAGUE', 'LYON', 'MONTREAL', 'BUCHAREST', 'DELHI', 'EDINBURGH', 'MUNICH'],
    sectors: ['the Order', 'the Sanctuary', 'the Hospital', 'the Flock'] },
];
const CLAN_BY_NAME = Object.fromEntries(CLANS.map((c) => [c.name, c]));
const CLAN_NAMES = CLANS.map((c) => c.name);

/* --------------------------------------------------------------- factions --- */

const SECTS = ['Camarilla', 'Sabbat', 'Anarch', 'Independent', 'Autarkis', 'Free States'];
const SECT_WEIGHT = { Camarilla: 26, Sabbat: 14, Anarch: 24, Independent: 19, Autarkis: 14, 'Free States': 3 };

const STATUSES = ['active', 'active', 'active', 'active', 'active', 'missing', 'fallen', 'destroyed'];

/* ------------------------------------------------------------- place bits --- */

const PLACES = [
  'the Zlabani Drop', 'the Halda cistern', 'the Old Fondery', 'the Chapel cellar',
  'the Bone Store', 'the Overflow Hall', 'the Smichov embankment', 'the Liben culvert',
  'the Karlin pumping station', 'the Vysocany sidings', 'the Letna embankment',
  'the Nusle tram depot', 'the Bohnice settling tank', 'the Hostivar incinerator',
  'the Modrany substation',
];
const RELAYS = ['VLA-7', 'NYC-2', 'LAX-5', 'CMQ-3', 'SAO-1', 'CRL-4', 'LON-9', 'BER-6', 'PAR-8', 'TKY-1', 'VIE-0'];
const ALL_CITIES = Array.from(new Set(CLANS.flatMap((c) => c.cities)));

const SURNAMES = [
  'KORVATH', 'MALEVICH', 'DRAGAN', 'VISHNYAK', 'OSTROWSKI', 'ZEMAN', 'RUSKIN', 'BARAN',
  'HALUN', 'MIREK', 'SEDLAK', 'KOVAC', 'RUZICKA', 'BAROS', 'NOVAK', 'PETRAN', 'SARN',
  'ZRINSKI', 'VETREN', 'DOLEN', 'KUBIN', 'RADOVAN', 'HAVEL', 'OSTROV', 'VRBAN', 'ZALAR',
  'SIMEK', 'BRAZDA', 'TUSKA', 'VASKO', 'NEMEC', 'SKLAR', 'DOVGAN', 'ZILBER', 'ORBAN',
  'TRNKA', 'VAVRA', 'CHOROS', 'WOZNIAK', 'JELENC', 'KVAS', 'NEDVED', 'HRUSKA', 'BENES',
  'MACEK', 'LISAK', 'DVORAK', 'KUNZ', 'STERN', 'FEINBERG', 'MARKOVIC', 'PAVELIC', 'RASK',
];
const FIRSTS = [
  'ALEKSANDR', 'MIHAILO', 'DRAGAN', 'ZBIGNIEW', 'VOJTA', 'KAREL', 'MIROSLAV', 'LADISLAV',
  'OSKAR', 'EMIL', 'BORIS', 'TOMAS', 'JANEK', 'RUSLAN', 'DARKO', 'PETAR', 'ANDREJ',
  'VINKO', 'STJEPAN', 'GORAN', 'ZORAN', 'NIKO', 'MILOS', 'JANOS', 'LUKAS', 'OTTO',
  'SIGMUND', 'VILHELM', 'KAZIMIERZ', 'RYSZARD', 'ANATOL', 'LEONID', 'FEDOR', 'HENRYK',
];
const HANDLES = [
  'NUL', 'VOID', 'GRIM', 'SIXFINGER', 'THINMAN', 'KOSTA', 'HOLT', 'BRANDT', 'LOWTIDE',
  'SEVER', 'ZLATY', 'KREMLIK', 'MYCELIUM', 'OSSUARY', 'CARRION', 'SALT', 'TAR', 'RUST',
  'ASHGLASS', 'PALE', 'GRAVEWAX', 'NIGHTJAR', 'SILT', 'MAGPIE', 'CROWSPINE', 'BONEWIND',
  'LICHEN', 'SPORE', 'MOTH', 'WORMWOOD', 'PITCH', 'ANVIL', 'SPLINTER', 'GRAVEL', 'TIN',
  'FLINT', 'CHALK', 'MARROW', 'SOOT', 'BRINE', 'CARRION-2', 'HALLOW', 'KETTLE', 'MULCH',
];
const EPITHETS = [
  'the Undersigned', 'the Patient', 'of the Ninth Stair', 'the Second Copy', 'the Quiet One',
  'the Long Answer', 'the Undertaker', 'the Copyist', 'the Second Voice', 'the Toll',
  'the Salt Road', 'the Long Sleep', 'the Ledger', 'the Wrong Door', 'the Black Thread',
];

/* --------------------------------------------------------------- grounds --- */

const GROUNDS = {
  bloodgoth: [
    'held a bloodgoth inside a Camarilla domain with no licence from the prince',
    'fed the host eleven times in one night and told no one',
    'left the host breathing, which is not mercy, it is unfinished business',
    'kept a private host in a fourth-floor flat above a launderette',
  ],
  war: [
    'broke the Masquerade in front of four hundred witnesses',
    'moved a bloodline into a city already under a prince\'s notice',
    'refused a challenge and answered with the host instead',
    'took ground in the pumping station warren without a word to the Compact',
  ],
  heresy: [
    'published a sire\'s name on a node that indexes',
    'taught Dominate to the unaffiliated without sanction',
    'let a hunter keep a copy of the ledger and then let him walk',
    'signed a name into the old net and refused to say whose',
  ],
  debt: [
    'drew on the war chest without a quorum',
    'forged a warden\'s seal on a reclamation notice',
    'sold wordlock formulae on the old net for a crate of medical grade',
    'borrowed against the Compact and did not file the interest',
  ],
  breach: [
    'opened a domain to an unaffiliated childe without the sire\'s word',
    'let a ghoul keep a second patron',
    'hosted a conclave above a floor of sleeping civilians',
    'passed ground rights to a house that does not exist on paper',
  ],
  hunt: [
    'kept a Second Inquisition team as a personal guard',
    'answered a summons twice and filed neither report',
    'bought a hunter\'s silence with blood instead of coin',
    'let the Inquisition walk a domain and never asked for the bill',
  ],
  mask: [
    'was Embraced twice and told the wrong sire about it',
    'claimed a fourth discipline and sold the notes',
    'burned a warden\'s ledger and let the Inquisition take the blame',
    'wears a name that belonged to someone else for eleven years',
  ],
};
const GROUND_KEYS = Object.keys(GROUNDS);

const DISPOSITIONS = [
  'Final Death authorised. Warden dispatched.',
  'Word-bond enforced. Surveillance indefinite.',
  'Revoked. Blood-bond forfeit. Watch for the third dawn.',
  'Struck from the Compact. Ground rights suspended seven years.',
  'Custody pending. Do not approach.',
  'Sanction suspended, conditional on producing the ledger.',
  'Sanction doubled. The Compact does not ask twice.',
  'Final Death authorised and carried out. File closed.',
  'Ground rights suspended pending audit. Handle through the clerk.',
];

const NOTE_OPEN = [
  'Third sighting since the Vienna burn.',
  'Held ground under {place} for eleven years and lost it in a night.',
  'Confirmed twice, then only once.',
  'Ran quiet for four years, then answered a summons it should not have.',
  'Kept the ledger. Burned the names.',
  'Signed for the Warren three times and filed nothing.',
];
const NOTE_BODY = [
  'Witnesses place them near {place} on the nights the pumping station runs.',
  'The only photograph recovered is nine seconds long and shows nothing.',
  'Every relay that has seen them reports the same thing: a call answered on the third ring.',
  'The bloodgoth ledger on file is complete and has never once balanced.',
  'Attended three funerals for people who were not dead.',
  'Moved a warren four times in one season and salted the tunnels each time.',
  'Their sire\'s name is in the file. Two words. Redacted since 1988.',
  'Has never once spoken the Word to a childe and has four of them.',
  'The old net copy and the local copy disagree by one paragraph.',
];
const NOTE_TAIL = [
  'Do not attempt contact.',
  'Handle through the Compact clerk only.',
  'If you find them, you did not find them.',
  'Observe and report. Do not speak the Word.',
  'Burn this page after reading it.',
  'The warden of the day signed this and left the city the same night.',
];

/* --------------------------------------------------------------- portraits --- */

const PORTRAITS = new Set([
  'nergal', 'stitches', 'thing_well', 'kosta', 'sewer_witch', 'ratking',
]);

function lastSeen(city) {
  const d = int(1, 96);
  return `${city} — ${d} day${d === 1 ? '' : 's'} ago`;
}
function fill(tpl, ctx) {
  return tpl.replace(/\{(\w+)\}/g, (_, k) => ctx[k] || '');
}
function makeName(used) {
  for (let i = 0; i < 400; i++) {
    const n = `${pick(FIRSTS)} ${pick(SURNAMES)}`;
    if (!used.has(n)) { used.add(n); return n; }
  }
  const n = `${pick(FIRSTS)} ${pick(SURNAMES)}-${used.size}`;
  used.add(n);
  return n;
}
function makeAlias(used) {
  for (let i = 0; i < 400; i++) {
    const a = chance(0.72) ? pick(HANDLES) : `${pick(HANDLES)}/${pick(HANDLES)}`;
    if (!used.has(a)) { used.add(a); return a; }
  }
  return `${pick(HANDLES)}-${used.size}`;
}

/* ============================================================== DOSSIERS === */

const usedNames = new Set();
const usedAliases = new Set();

const WANTED = [
  {
    name: 'NERGAL THE PLAGUE-BEARER', alias: 'NERGAL', clan: 'Nosferatu', sect: 'Independent',
    generation: 7, status: 'active', threat: 5, portrait: 'nergal.png',
    grounds: [
      'poured a septic ledger into the Karlin pumping station and let the district flood with it',
      'wrote the Vienna node\'s custodian list into a node that indexes',
      'has not fed in nineteen days and has not aged a day',
      'answered a Warden\'s summons by summoning the Warden',
    ],
    disposition: 'Final Death authorised. Three wardens assigned. Two have returned.',
    notes: 'He carries plague the way other people carry regalia — as an argument. Whatever he is feeding on down there, it is not human and it is not enough. Two wardens went into the Karlin station in March. One came out. The one that came out has not spoken since.',
    lastSeen: 'PRAGUE — 2 days ago',
  },
  {
    name: 'STITCHES', alias: 'STITCHES', clan: 'Nosferatu', sect: 'Autarkis',
    generation: 6, status: 'active', threat: 4, portrait: 'stitches.png',
    grounds: [
      'runs the sixth floor above the hardware store as a neutral ground without a charter',
      'moved nine crates of medical grade through a toll road that has never asked for cash',
      'signed the Free Blooms manifest with a name that is not his own',
      'holds the best-informed room in Prague and has never once been asked to testify',
    ],
    disposition: 'Sanction suspended, conditional on producing the ledger.',
    notes: 'Crew leader. Eleven of them, no flag, no regalia, and a better read on this city than the Prefecture has managed in a decade. WARDEN KOSTA filed four orders against him in one night and has stopped filing the fifth. Whatever the sixth floor is, it is not a gang. It is worse: it is a room everybody can walk into and nobody can take.',
    lastSeen: 'PRAGUE — yesterday, 22:40',
  },
  {
    name: 'alias-REDACTED', alias: 'THING IN THE WELL', clan: 'Nosferatu', sect: 'Autarkis',
    generation: 5, status: 'missing', threat: 5, portrait: 'thing_well.png',
    grounds: [
      'left a warren unclaimed and the Wardens buried the entrance anyway',
      'answered a bloodgoth in the Bone Store with a name that belonged to a dead childe',
      'appeared on four relays at once and has never appeared in the same place twice',
      'was seen leaving a domain the Second Inquisition had not yet sealed',
    ],
    disposition: 'Custody pending. Do not approach.',
    notes: 'We do not have a name. We have a shape in relay logs, a pressure reading in the Overflow Hall, and four hundred words of rumour from people who were not there. What we have is consistent: it answers the third ring, it never arrives on foot, and it has been in the Warren longer than the Warren has had a name.',
    lastSeen: 'PRAGUE — the Overflow Hall, 41 days ago',
  },
];

const FAMOUS = [
  ['RATKING', 'RATKING', 'Nosferatu', 'Independent', 6, 'active', 4, 'ratking.png', 'source mirror', 'Custodian of node VLA-7. Hates the word "operator" and uses the word "custodian" instead, at length, in writing.'],
  ['SEWER_WITCH', 'SEWER_WITCH', 'Nosferatu', 'Anarch', 8, 'active', 3, 'sewer_witch.png', 'OPEN SEWER', 'Anarch of sector four. Writes the counting discipline the node still argues about.'],
  ['WARDEN KOSTA', 'KOSTA', 'Nosferatu', 'Independent', 9, 'active', 4, 'kosta.png', 'PRAHA-SEVER', 'Warden of the Prague sector. Has opened every sweep since 2019 and lost four wardens doing it.'],
  ['ARCHIVIST HOLT', 'HOLT', 'Nosferatu', 'Independent', 7, 'active', 2, 'holt.png', 'VLA-7', 'Keeper of the only clean copy of the Vienna letters. Sleeps in the archive.'],
  ['NULLPOINTER', 'NULLPOINTER', 'Nosferatu', 'Independent', 5, 'active', 3, 'nullpointer.png', 'VLA-7', 'Clerk of the Compact. Signs threads closed without ever explaining why.'],
  ['ILSE BRANDT', 'BRANDT', 'Nosferatu', 'Anarch', 6, 'active', 4, null, 'Free Blooms', 'Sole surviving signatory of the Free Blooms charter. Trades in blood, never in favours.'],
  ['DOC. FEUER', 'FEUER', 'Nosferatu', 'Independent', 7, 'active', 3, null, 'BER-6', 'Blood-discipline theorist. The only one of his four published papers survives unburned.'],
  ['MOLOTOV SAINT', 'SAINT', 'Nosferatu', 'Anarch', 6, 'fallen', 4, null, 'BEOGRAD', 'Burned at a barricade in 2023 taking four hunters with him. The wardens have still not agreed on the file.'],
  ['GRAEFIN VON HALL', 'VON HALL', 'Nosferatu', 'Camarilla', 11, 'active', 5, null, 'the Court', 'Oldest blood the Compact still acknowledges. Has outlived four cities and is bored by all of them.'],
  ['THE SURGEON', 'THE SURGEON', 'Nosferatu', 'Independent', 8, 'missing', 4, null, 'no relay', 'Removes memory cleanly, in one to four hour windows, and bills the bloodline. Nobody has paid in full.'],
];

function pad(n, w) { return String(n).padStart(w, '0'); }

function buildDossiers() {
  const entries = [];
  let n = 0;
  const push = (e) => {
    n += 1;
    entries.push(Object.assign({ id: `VLA-${pad(n, 4)}`, wanted: false, famous: false, portrait: null }, e, { id: `VLA-${pad(n, 4)}` }));
  };

  for (const w of WANTED) {
    push({
      name: w.name, alias: w.alias, clan: w.clan, sect: w.sect, generation: w.generation,
      status: w.status, threat: w.threat, grounds: w.grounds, disposition: w.disposition,
      notes: w.notes, lastSeen: w.lastSeen, portrait: w.portrait, wanted: true, famous: true,
    });
  }

  for (const f of FAMOUS) {
    const [name, alias, clan, sect, gen, status, threat, portrait, sector, notes] = f;
    push({
      name, alias, clan, sect, generation: gen, status, threat,
      grounds: sample(GROUNDS[GROUND_KEYS[n % GROUND_KEYS.length]], int(2, 3)),
      disposition: pick(DISPOSITIONS),
      notes: `${sector}. ${notes}`,
      lastSeen: lastSeen(pick(CLAN_BY_NAME[clan].cities)),
      portrait, wanted: false, famous: true,
    });
  }

  const total = 208;
  while (entries.length < total) {
    const clan = pick(CLANS);
    const city = pick(clan.cities);
    const ctx = { place: pick(PLACES), city };
    const grounds = sample(GROUNDS[GROUND_KEYS[entries.length % GROUND_KEYS.length]], int(2, 4));
    const notes = `${fill(pick(NOTE_OPEN), ctx)} ${fill(pick(NOTE_BODY), ctx)} ${pick(NOTE_TAIL)}`;
    const threat = clampThreat(clan.threat + int(-2, 1));
    const gen = weighted({ 2: 1, 3: 3, 4: 6, 5: 10, 6: 14, 7: 15, 8: 14, 9: 12, 10: 8, 11: 6, 12: 4, 13: 3, 14: 2, 15: 2 });
    push({
      name: makeName(usedNames),
      alias: makeAlias(usedAliases),
      clan: clan.name,
      sect: weighted(SECT_WEIGHT),
      generation: gen,
      status: weighted({ active: 62, missing: 15, fallen: 12, destroyed: 11 }),
      threat,
      grounds,
      disposition: pick(DISPOSITIONS),
      notes,
      lastSeen: lastSeen(city),
      portrait: null,
      wanted: false,
      famous: false,
    });
  }
  return entries;
}
function clampThreat(t) { return Math.max(1, Math.min(5, t)); }

/* =============================================================== KINDRED === */

function buildKindred(dossiers) {
  const vampires = [];
  const ghouls = [];
  const childer = [];
  const usedNames = new Set();
  const usedAliases = new Set();
  const wantedNames = new Set(['NERGAL THE PLAGUE-BEARER', 'STITCHES', 'alias-REDACTED', 'RATKING', 'SEWER_WITCH', 'WARDEN KOSTA']);

  for (const d of dossiers) {
    vampires.push({
      id: d.id,
      name: d.name,
      alias: d.alias,
      clan: d.clan,
      sect: d.sect,
      generation: d.generation,
      status: d.status,
      threat: d.threat,
      city: d.lastSeen.split(' — ')[0],
      nature: pick(CLAN_BY_NAME[d.clan].natures),
      sire: 'unrecorded',
      portrait: d.portrait,
      wanted: d.wanted || wantedNames.has(d.name),
    });
  }

  /* top up to 520 so every clan has real depth */
  let vn = vampires.length;
  while (vampires.length < 520) {
    vn += 1;
    const clan = pick(CLANS);
    const gen = weighted({ 3: 2, 4: 6, 5: 12, 6: 18, 7: 20, 8: 18, 9: 12, 10: 7, 11: 4, 12: 1 });
    const name = makeName(usedNames);
    const status = weighted({ active: 74, missing: 11, fallen: 8, destroyed: 7 });
    vampires.push({
      id: `VLA-${pad(5000 + vn, 4)}`,
      name,
      alias: makeAlias(usedAliases),
      clan: clan.name,
      sect: weighted(SECT_WEIGHT),
      generation: gen,
      status,
      threat: clampThreat(clan.threat + int(-2, 1)),
      city: pick(clan.cities),
      nature: pick(clan.natures),
      sire: vampires.length && chance(0.72) ? pick(vampires).name : 'unrecorded',
      portrait: null,
      wanted: false,
    });
  }

  let gn = 0;
  while (ghouls.length < 96) {
    gn += 1;
    const clan = pick(CLANS);
    const nature = chance(0.5)
      ? pick(['a dockhand', 'a night nurse', 'a locksmith', 'a railway clerk', 'a projectionist', 'a sewer inspector', 'a violinist', 'a demolition foreman', 'a translator', 'a chemist', 'a truck driver', 'a court stenographer'])
      : pick(['a warren-guard', 'a courier', 'a lookout', 'a gravedigger', 'an archivist', 'a scavenger', 'a debt-collector', 'a signal-repeater']);
    ghouls.push({
      id: `GH-${pad(gn, 4)}`,
      name: chance(0.55) ? makeName(usedNames) : pick(['MAREK', 'JANA', 'TOBIAS', 'LENA', 'RUDY', 'SILVA', 'PETRA', 'ONDREJ', 'KATRIN', 'BORIS', 'EVA', 'MILOS']),
      clan: clan.name,
      generation: chance(0.6) ? 1 : chance(0.7) ? 2 : 3,
      status: weighted({ active: 70, missing: 12, fallen: 9, destroyed: 9 }),
      city: pick(clan.cities),
      nature,
      bondedTo: vampires.length ? pick(vampires).name : 'unrecorded',
    });
  }

  let cn = 0;
  while (childer.length < 64) {
    cn += 1;
    const clan = pick(CLANS);
    const name = makeName(usedNames);
    childer.push({
      id: `CH-${pad(cn, 4)}`,
      name,
      clan: clan.name,
      generation: weighted({ 2: 26, 3: 30, 4: 24, 5: 12, 6: 6, 7: 2 }),
      city: pick(clan.cities),
      sire: vampires.length ? pick(vampires).name : 'unrecorded',
      progress: pick(['un-Embraced', 'un-Embraced', 'first month', 'three months', 'one year', 'two years', 'five years']),
      threat: clampThreat(int(1, 3)),
    });
  }

  const tally = (arr, key) => {
    const out = {};
    for (const r of arr) out[r[key]] = (out[r[key]] || 0) + 1;
    return out;
  };
  const byClan = {};
  for (const c of CLAN_NAMES) byClan[c] = 0;
  for (const v of vampires) byClan[v.clan] = (byClan[v.clan] || 0) + 1;
  const byGeneration = tally(vampires, 'generation');
  const byStatus = tally(vampires, 'status');

  return {
    meta: {
      total: vampires.length + ghouls.length + childer.length,
      vampireCount: vampires.length,
      ghoulCount: ghouls.length,
      childerCount: childer.length,
      updated: UPDATED,
    },
    vampires,
    ghouls,
    childer,
    stats: { byClan, byGeneration, byStatus },
  };
}

/* ================================================================ EMIT === */

function banner(objName) {
  return `/* ${objName} — generated by scripts/gen_network.mjs. Do not hand-edit.
 * Deterministic: the same seed produces this exact archive. Seed 0x5c11ec.
 * If a node's copy of this file disagrees with another's, one of you is
 * being lied to, and it is not us.
 */\n`;
}

const dossiers = buildDossiers();
const kindred = buildKindred(dossiers);

mkdirSync(resolve(ROOT, 'assets/js'), { recursive: true });

writeFileSync(
  resolve(ROOT, 'assets/js/dossiers_data.js'),
  banner('window.NOSFERATU_DB') +
  `window.NOSFERATU_DB = ${JSON.stringify({
    meta: {
      total: dossiers.length,
      updated: UPDATED,
      issuingAuthority: 'SchreckNET Registry // node VLA-7 (Prague)',
      classification: 'EYES ONLY — DO NOT MIRROR OUTSIDE THE NET',
    },
    entries: dossiers,
  }, null, 1)};\n`,
  'utf8'
);

writeFileSync(
  resolve(ROOT, 'assets/js/kindred_data.js'),
  banner('window.KINDRED_DB') +
  `window.KINDRED_DB = ${JSON.stringify(kindred, null, 1)};\n`,
  'utf8'
);

console.log(`dossiers_data.js : ${dossiers.length} files (${dossiers.filter((d) => d.wanted).length} wanted, ${dossiers.filter((d) => d.famous).length} famous)`);
console.log(`kindred_data.js  : ${kindred.vampires.length} vampires / ${kindred.ghouls.length} ghouls / ${kindred.childer.length} childer`);
console.log('by clan          :', Object.entries(kindred.stats.byClan).map(([k, v]) => `${k}:${v}`).join('  '));
