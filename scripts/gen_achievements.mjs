/* ============================================================
   gen_achievements.mjs — SchreckNET COMMENDATIONS generator
   Source of truth for assets/js/achievements_data.js (666).
   Run: node scripts/gen_achievements.mjs
   ============================================================ */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');

/* ---------- core action keys (site-wide behaviour counters) ---------- */
const CORE = [
  { key: 'dice_roll',      cat: 'DICE',         label: 'FIELD ROLL' },
  { key: 'dice_crit',      cat: 'DICE',         label: 'CRITICAL SUCCESS' },
  { key: 'dice_botch',     cat: 'DICE',         label: 'BESTIAL FAILURE' },
  { key: 'dice_hunger',    cat: 'DICE',         label: 'HUNGER DICE POOL' },
  { key: 'dmg_calc',       cat: 'DICE',         label: 'DAMAGE RESOLVED' },
  { key: 'sheet_create',   cat: 'SHEETS',       label: 'KINDRED FILED' },
  { key: 'sheet_save',     cat: 'SHEETS',       label: 'FILE UPDATED' },
  { key: 'xp_log',         cat: 'CHRONICLE',    label: 'XP AWARDED' },
  { key: 'session_log',    cat: 'CHRONICLE',    label: 'NIGHT LOGGED' },
  { key: 'boon_log',       cat: 'CHRONICLE',    label: 'BOON RECORDED' },
  { key: 'comm_send',      cat: 'COMMS',        label: 'DARKLINE PACKET SENT' },
  { key: 'comm_crack',     cat: 'COMMS',        label: 'PACKET DECODED' },
  { key: 'dossier_open',   cat: 'ARCHIVE',      label: 'DOSSIER PULLED' },
  { key: 'dossier_crack',  cat: 'ARCHIVE',      label: 'CIPHER CRACKED' },
  { key: 'registry_file',  cat: 'ARCHIVE',      label: 'REGISTRY FILE OPENED' },
  { key: 'map_view',       cat: 'CARTOGRAPHY',  label: 'NODE SURVEY VIEWED' },
  { key: 'game_win',       cat: 'OPS',          label: 'MINIGAME CLEARED' },
  { key: 'game_loss',      cat: 'OPS',          label: 'TRACE SURVIVED' },
  { key: 'domain_claim',   cat: 'DOMAIN',       label: 'GROUND CLAIMED' },
  { key: 'domain_feed',    cat: 'DOMAIN',       label: 'BLOOD DRAWN' },
  { key: 'redroom_visit',  cat: 'DARKNET',      label: 'RED ROOM ENTRY' },
  { key: 'wod_read',       cat: 'LORE',         label: 'DARK CODEX READ' },
  { key: 'search',         cat: 'LORE',         label: 'QUERY EXECUTED' },
  { key: 'egg',            cat: 'DARKNET',      label: 'BURIED SIGNAL FOUND' },
];
const CORE_TIERS = [1, 3, 7, 12, 20, 30, 45, 60];
const ROMAN = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII'];

/* ---------- page visit keys ---------- */
const PAGES = [
  'index', 'network', 'news', 'clan', 'dossiers', 'registry', 'redrooms',
  'kindred', 'wod', 'forums', 'blogs', 'archives', 'maps', 'games', 'legal',
  'tools', 'sheets', 'chronicle', 'comms', 'domain', 'commendations',
];
const PAGE_TIERS = [1, 2, 5, 10, 20, 35];
const PAGE_LABEL = {
  index: 'PORTAL', network: 'NETWORK', news: 'WIRE', clan: 'THE CLAN',
  dossiers: 'DOSSIERS', registry: 'REGISTRY', redrooms: 'RED ROOMS',
  kindred: 'KINDRED', wod: 'GREATER DARK', forums: 'FORUMS', blogs: 'NODE BLOGS',
  archives: 'ARCHIVES', maps: 'SURVEYS', games: 'MINIGAMES', legal: 'LEGAL CODEX',
  tools: 'MECHANICS', sheets: 'CELL FILES', chronicle: 'CHRONICLE', comms: 'DARKLINE',
  domain: 'DOMAINS', commendations: 'COMMENDATIONS',
};

/* ---------- clans + disciplines (keys fired by sheets) ---------- */
const CLANS = ['Ventrue', 'Tremere', 'Toreador', 'Nosferatu', 'Brujah', 'Gangrel',
  'Malkavian', 'Ravnos', 'Tzimisce', 'Assamite', 'Followers of Set', 'Lasombra', 'Salubri'];
const CLAN_TIERS = [1, 3, 7, 12];
const DISCIPLINES = ['Animalism', 'Auspex', 'Celerity', 'Dominate', 'Fortitude',
  'Obfuscate', 'Potence', 'Presence', 'Protean', 'Blood Sorcery', 'Obtenebration',
  'Chimerstry', 'Necromancy', 'Serpentis', 'Quietus', 'Vicissitude', 'Dementation'];
const DISC_TIERS = [1, 3, 7];

/* ---------- city keys (fired by maps + domain) ---------- */
const citiesPath = path.join(ROOT, 'assets', 'js', 'cities_data.js');
const citiesSrc = fs.readFileSync(citiesPath, 'utf8');
const cityIds = [...citiesSrc.matchAll(/["']?id["']?\s*:\s*["']([^"']+)["']/g)].map(m => m[1]);
if (cityIds.length < 200) throw new Error('cities_data.js: only ' + cityIds.length + ' ids parsed');

/* ---------- unique handcrafted commendations ---------- */
const UNIQUES = [
  { id: 'u_egg_orlok',    act: 'egg_orlok',     need: 1,  cat: 'DARKNET', name: 'ORLOK PROTOCOL',           desc: 'Found the buried Count. Some signals should stay dead.' },
  { id: 'u_egg_null',     act: 'egg_null',      need: 1,  cat: 'DARKNET', name: 'NULLPOINTER EXCEPTION',    desc: 'Woke the ghost in the machine. Segfault in the Blood.' },
  { id: 'u_egg_oldnet',   act: 'egg_oldnet',    need: 1,  cat: 'DARKNET', name: 'OLDNET GHOST',             desc: 'Logged into the 1993 shell. It remembered you.' },
  { id: 'u_egg_crt',      act: 'egg_crt',       need: 1,  cat: 'DARKNET', name: 'PHOSPHOR BURN',            desc: 'Stared into the tube until it stared back.' },
  { id: 'u_egg_404',      act: 'egg_404',       need: 1,  cat: 'DARKNET', name: 'PAGE NOT FOUND, PAGE FOUND', desc: 'Reached a node that the net denies existing.' },
  { id: 'u_egg_console',  act: 'egg_console',   need: 1,  cat: 'DARKNET', name: 'INSPECTOR OF THE ABYSS',   desc: 'Opened the console. The console opened you.' },
  { id: 'u_dice_gold',    act: 'dice_crit',     need: 7,  cat: 'DICE',    name: 'GOLDEN FANG',              desc: 'Seven criticals. The dice fear your hunger.' },
  { id: 'u_dice_botch',   act: 'dice_botch',    need: 7,  cat: 'DICE',    name: 'BESTIAL SPECTACLE',        desc: 'Seven botches. The Beast is laughing with you.' },
  { id: 'u_dice_cent',    act: 'dice_roll',     need: 100, cat: 'DICE',   name: 'CENTURION OF THE POOL',    desc: 'One hundred field rolls. Statistically inevitable. Emotionally earned.' },
  { id: 'u_dice_shatter', act: 'dice_crit',     need: 25, cat: 'DICE',    name: 'SHATTERED LUCK',           desc: 'Twenty-five criticals. Luck is a renewable resource when you take it.' },
  { id: 'u_xp_elder',     act: 'xp_log',        need: 100, cat: 'CHRONICLE', name: 'ELDER POTENCE',         desc: 'A century of growth, expedited.' },
  { id: 'u_chron_year',   act: 'session_log',   need: 12, cat: 'CHRONICLE', name: 'A YEAR ON THE WIRE',     desc: 'Twelve nights chronicled. The warren keeps count.' },
  { id: 'u_boon_col',     act: 'boon_log',      need: 10, cat: 'CHRONICLE', name: 'DEBT COLLECTOR',         desc: 'Ten boons on the ledger. Nobody welshes twice.' },
  { id: 'u_comm_crypt',   act: 'comm_crack',    need: 20, cat: 'COMMS',   name: 'CRYPTOGRAPHER OF THE WARREN', desc: 'Twenty packets decoded. Darkline speaks to you in plain text.' },
  { id: 'u_comm_spider',  act: 'comm_send',     need: 50, cat: 'COMMS',   name: 'SPIDER IN THE WIRE',       desc: 'Fifty packets sent. You are the network now.' },
  { id: 'u_doss_obsess',  act: 'dossier_open',  need: 100, cat: 'ARCHIVE', name: 'REGISTRY OBSESSED',       desc: 'One hundred files pulled. The Kindred have names. You have hobbies.' },
  { id: 'u_doss_thirteen', act: 'dossier_crack', need: 13, cat: 'ARCHIVE', name: 'ALL THIRTEEN SEALS',      desc: 'Every classified dossier decrypted. VLA-7 salutes you.' },
  { id: 'u_map_atlas',    act: 'map_view',      need: 209, cat: 'CARTOGRAPHY', name: 'NODE ATLAS COMPLETE', desc: 'All 209 surveys charted. The tunnels hold no secrets.' },
  { id: 'u_game_warm',    act: 'game_win',      need: 50, cat: 'OPS',     name: 'MACHINE-WARM',             desc: 'Fifty minigames cleared. The terminal hums your name.' },
  { id: 'u_game_fail',    act: 'game_loss',     need: 25, cat: 'OPS',     name: 'GLORIOUS FAILURE',         desc: 'Twenty-five traces. Getting caught is data too.' },
  { id: 'u_domain_lord',  act: 'domain_claim',  need: 25, cat: 'DOMAIN',  name: 'FEUDAL LORD OF THE DARK',  desc: 'Twenty-five grounds claimed. Feed rent is due.' },
  { id: 'u_domain_thirst', act: 'domain_feed',  need: 50, cat: 'DOMAIN',  name: 'ETERNAL THIRST',           desc: 'Fifty draws logged. The Beast approves. The Beast always approves.' },
  { id: 'u_sheet_factory', act: 'sheet_create', need: 10, cat: 'SHEETS',  name: 'CHILDE FACTORY',           desc: 'Ten Kindred filed. The Prince was not consulted.' },
  { id: 'u_blood_first',  act: 'blood_first',   need: 1,  cat: 'DARKNET', name: 'FIRST DROP',               desc: 'Entered a red room. Some doors only open inward.' },
  { id: 'u_bestiary',     act: 'bestiary_view', need: 10, cat: 'ARCHIVE', name: 'BESTIARY CLEARANCE',       desc: 'Ten hostiles studied. Know what hunts below.' },
  { id: 'u_wire_arch',    act: 'archive_wire',  need: 25, cat: 'LORE',    name: 'WIRE ARCHIVIST',           desc: 'Twenty-five wire articles combed. Truth is a sediment.' },
  { id: 'u_kindred_all',  act: 'kindred_scan',  need: 100, cat: 'ARCHIVE', name: 'READ THE WHOLE ROSTER',   desc: 'One hundred kindred records scanned. Six hundred eighty and counting.' },
  { id: 'u_forum_lurk',   act: 'forum_read',    need: 30, cat: 'LORE',    name: 'FORUM LURKER',             desc: 'Thirty threads absorbed. Lurkers inherit the sewers.' },
  { id: 'u_blogger',      act: 'blog_read',     need: 30, cat: 'LORE',    name: 'NODE BLOGGER',             desc: 'Thirty node blogs read. Parasocial with the dead.' },
  { id: 'u_network',      act: 'network_check', need: 20, cat: 'DARKNET', name: 'PULSE TAKER',              desc: 'Twenty network checks. Paranoia is situational awareness.' },
  { id: 'u_clan_lore',    act: 'clan_read',     need: 15, cat: 'LORE',    name: 'KEEPER OF BLOODLINES',     desc: 'Fifteen clan codices read. Know the blood you borrow.' },
  { id: 'u_portal',       act: 'portal_return', need: 10, cat: 'DARKNET', name: 'KEEPER OF THE GATE',       desc: 'Ten returns to the portal. The warren always takes you back.' },
  { id: 'u_legal',        act: 'legal_read',    need: 5,  cat: 'LORE',    name: 'LEGAL MIND',               desc: 'Read the codex five times. Even the dead respect paperwork.' },
  { id: 'u_hunger',       act: 'sheet_hunger',  need: 20, cat: 'SHEETS',  name: 'THE HUNGER GROWS',         desc: 'Twenty hunger marks logged. It never stops growing.' },
  { id: 'u_humanity',     act: 'sheet_humanity', need: 20, cat: 'SHEETS', name: "HUMANITY'S EDGE",          desc: 'Twenty humanity marks logged. Hold the line. Or do not.' },
];
/* The final seal — awarded automatically when 665 of 666 are held. */
const SEAL = { id: 'u_seal666', act: '__seal__', need: 1, cat: 'DARKNET', pts: 666, name: 'THE 666TH SEAL', desc: 'Unlocked everything. SchreckNET has no more secrets from you. The Beast bows.' };

/* ---------- assembly ---------- */
const list = [];
const seen = new Set();
function push(a) {
  if (seen.has(a.id)) throw new Error('duplicate id ' + a.id);
  seen.add(a.id);
  list.push(a);
}
let pts = 0;

CORE.forEach(c => CORE_TIERS.forEach((need, i) => {
  push({
    id: 'c_' + c.key + '_' + (i + 1), act: c.key, need,
    cat: c.cat, pts: (i + 1) * 10,
    name: c.label + ' ' + ROMAN[i + 1],
    desc: c.label + ' — performed ' + need + ' time' + (need > 1 ? 's' : '') + ' on SchreckNET.',
  });
}));

PAGES.forEach(p => PAGE_TIERS.forEach((need, i) => {
  push({
    id: 'p_' + p + '_' + (i + 1), act: 'page_' + p, need,
    cat: 'PATROL', pts: (i + 1) * 5,
    name: 'PATROL — ' + PAGE_LABEL[p] + ' ' + ROMAN[i + 1],
    desc: 'Visit the ' + PAGE_LABEL[p] + ' node ' + need + ' time' + (need > 1 ? 's' : '') + '. The net remembers footprints.',
  });
}));

CLANS.forEach(cl => CLAN_TIERS.forEach((need, i) => {
  push({
    id: 'cl_' + cl.toLowerCase().replace(/\s+/g, '_') + '_' + (i + 1),
    act: 'clan_' + cl.toLowerCase().replace(/\s+/g, '_'), need,
    cat: 'SHEETS', pts: (i + 1) * 10,
    name: 'VETERAN OF HOUSE ' + cl.toUpperCase() + ' ' + ROMAN[i + 1],
    desc: 'File ' + need + ' Kindred of clan ' + cl + '. ' + cl + ' blood runs deeper than pride.',
  });
}));

DISCIPLINES.forEach(d => DISC_TIERS.forEach((need, i) => {
  const k = d.toLowerCase().replace(/\s+/g, '_');
  push({
    id: 'd_' + k + '_' + (i + 1), act: 'disc_' + k, need,
    cat: 'SHEETS', pts: (i + 1) * 10,
    name: 'PRACTITIONER — ' + d.toUpperCase() + ' ' + ROMAN[i + 1],
    desc: 'Record ' + d + ' ' + need + ' time' + (need > 1 ? 's' : '') + ' across cell files.',
  });
}));

cityIds.forEach((cid, idx) => {
  push({
    id: 'ct_' + cid, act: 'city_' + cid, need: 1,
    cat: 'CARTOGRAPHY', pts: 15,
    name: 'CHARTED — ' + cid.toUpperCase(),
    desc: 'Pulled the sewer survey of node ' + cid + ' (' + (idx + 1) + ' of ' + cityIds.length + ').',
  });
});

UNIQUES.forEach(u => {
  u.pts = 100;
  push(u);
});

if (list.length !== 665) {
  throw new Error('expected 665 entries before the seal, got ' + list.length);
}
push(SEAL);
if (list.length !== 666) throw new Error('expected 666 total, got ' + list.length);

const cats = {};
list.forEach(a => { cats[a.cat] = (cats[a.cat] || 0) + 1; });

const out = {
  total: list.length,
  generated: new Date().toISOString().slice(0, 10),
  cats,
  list,
};
const body = '/* AUTO-GENERATED by scripts/gen_achievements.mjs — DO NOT EDIT BY HAND.\n'
  + '   666 SchreckNET commendations. Source of truth: the generator. */\n'
  + 'window.ACHV_DB = ' + JSON.stringify(out, null, 1) + ';\n';
fs.writeFileSync(path.join(ROOT, 'assets', 'js', 'achievements_data.js'), body);
console.log('achievements: ' + list.length + ' written | cats: ' + JSON.stringify(cats));
