#!/usr/bin/env node
/**
 * gen_news.mjs — SCHRECKNET WIRE generator.
 *
 * Produces assets/js/news_data.js exposing window.SCHRECKNET_WIRE:
 *   { meta, items[] }
 * Items: { id, ts, cat, city, headline, body, source, priority }
 *   cat: INTEL | ALERT | GOSSIP | OBIT | RATLINE
 *   priority: 1 (flash) .. 3 (routine)
 *
 * Deterministic: curated lore anchors + index-based procedural filler.
 * No randomness — the same run always yields the same wire.
 * 100% English (R6). Vanilla output consumed by news.html (R4).
 */
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';

const OUT = join(process.cwd(), 'assets', 'js', 'news_data.js');

/* ------------------------------------------------------------------ */
/* Pools (lore-accurate)                                               */
/* ------------------------------------------------------------------ */

const CITIES = [
  'PRAGUE', 'VIENNA', 'LONDON', 'BOGOTA', 'NEW YORK', 'LOS ANGELES',
  'TOKYO', 'BERLIN', 'PARIS', 'CAIRO', 'MEXICO CITY', 'CHICAGO',
  'ISTANBUL', 'MOSCOW', 'ROME', 'MADRID', 'BRUSSELS', 'SYDNEY',
];

const CLANS = [
  'Nosferatu', 'Ventrue', 'Tremere', 'Toreador', 'Brujah', 'Gangrel',
  'Malkavian', 'Ravnos', 'Tzimisce', 'Assamite', 'Followers of Set',
  'Lasombra', 'Salubri',
];

/* ------------------------------------------------------------------ */
/* Curated anchors — the wire's load-bearing lore (V5 canon framing)    */
/* ------------------------------------------------------------------ */

const CURATED = [
  {
    cat: 'ALERT', city: 'VIENNA', priority: 1,
    headline: 'VIENNA NODE CONFIRMED BURNED — SECOND INQUISITION HOLDS THE CORPSE',
    body: 'Nothing has answered on the Vienna relay since the burn. Confirmations from two independent rats: the node\'s physical site was raided in force, and the Inquisition now runs a poisoned mirror on the old frequency. Do NOT trust anything that answers as Vienna. The database they seized is months stale — assume every haven named in it is already compromised. If you appear in the seized index, move tonight.',
    source: 'node VLA-7 // signal analysis cell',
  },
  {
    cat: 'ALERT', city: 'PRAGUE', priority: 1,
    headline: 'THIS MIRROR REMAINS SECURE — AIR-GAPPED, HAND-CARRIED UPLINKS ONLY',
    body: 'Prague (node VLA-7) continues to operate on the old protocol: no persistent uplink, no cloud relay, hand-carried storage exchanged at dead drops. The Inquisition\'s tools hunt always-on networks. We built this mirror to be a ghost. Keep it that way. Report any new node that claims VLA-7 lineage without the handshake phrase.',
    source: 'node VLA-7 // custodian',
  },
  {
    cat: 'INTEL', city: 'BOGOTA', priority: 2,
    headline: 'BOG-1 "CANDLELIGHT" ONLINE — LA CANDELARIA WARREN AIR-GAPPED AND GROWING',
    body: 'The Bogotá node reports for the first time on the wire. Primary warren sits beneath La Candelaria in the old Spanish-colonial waterworks, with secondary tunnels running along the Río Bogotá and Tunjuelito storm drains. Status: SECURE, air-gapped, hostile to visitors. The local Kindred adapted faster than the Inquisition expected — a city that has been burned before does not trust always-on light.',
    source: 'node BOG-1 // callsign CANDLELIGHT',
  },
  {
    cat: 'INTEL', city: 'LONDON', priority: 2,
    headline: 'LONDON RELAY GOING DARK BY SCHEDULE — SABBAT PUSH IN THE EAST END',
    body: 'The London custodian announced a rolling blackout: the relay drops to weekly bursts while the east end warrens are consolidated. Sabbat packs have been probing the dock tunnels. Rats needing extraction should use the Dover ratline until the burst schedule is lifted.',
    source: 'node LDN-3 // custodian broadcast',
  },
  {
    cat: 'INTEL', city: 'PRAGUE', priority: 3,
    headline: 'THE BECKONING CONTINUES — ELDERS STILL WALKING EAST',
    body: 'Fourth- and fifth-generation elders keep abandoning their havens and walking east. The Beckoning did not stop with the fall of the Sabbats eastern holds. War widows and abandoned domains continue to surface across the old map. If your sire left, the sire left the network too. Update your lineage records or the index misfiles you.',
    source: 'registry // node VLA-7',
  },
  {
    cat: 'GOSSIP', city: 'VIENNA', priority: 3,
    headline: 'WHAT THE INQUISITION FOUND IN VIENNA — RUMORS ONLY, WEIGHT ACCORDINGLY',
    body: 'Three rumors cross the wire about the seized Vienna archive: that it contained the true names of elders of the Third Generation; that a captured elder gave it up willingly; and that the archive was itself a trap, salted with false havens. Only the third rumor has corroboration, and it comes from a rat who has been right before.',
    source: 'anonymous relay // unverified',
  },
  {
    cat: 'OBIT', city: 'BERLIN', priority: 2,
    headline: 'FINAL DIARY ENTRY PUBLISHED — ELDER "THE CARTOGRAPHER" DESTROYED',
    body: 'The Berlin node publishes the last known diary of the elder known as the Cartographer, destroyed during a daylight raid on a haven listed in the seized Vienna index. The diary is a lesson in what happens when a haven moves into the light before its records move out. Full text mirrored in ARCHIVES.',
    source: 'node BER-2 // obituary desk',
  },
  {
    cat: 'ALERT', city: 'NEW YORK', priority: 1,
    headline: 'SECOND INQUISITION FIELD TEAM IDENTIFIED IN THE OUTER BOROUGHS',
    body: 'A four-person field team operating with federal-shaped credentials has been mapped working out of self-storage facilities in the outer boroughs. Signature: signal-mirroring equipment of the same manufacture seized in Vienna. All rats in the metro area: rotate havens, kill always-on devices, assume the team has your face.',
    source: 'node NYC-5 // watch desk',
  },
  {
    cat: 'RATLINE', city: 'PARIS', priority: 2,
    headline: 'PARIS RATLINE OPEN — CATACOMB ROUTE WESTBOUND ONLY',
    body: 'The Paris catacomb ratline is open for westbound extraction only, two nights per week, escort provided by the Nosferatu of the undercity. Fees are negotiable in boons; currency is not accepted. Approach through the disused maintenance shaft, not the tourist entrances. Do not bring your own light source — the escorts will provide.',
    source: 'node PAR-4 // ratline operator',
  },
  {
    cat: 'INTEL', city: 'CAIRO', priority: 3,
    headline: 'THE MINISTRY HOLDS THE OLD CHANNELS — SETITE ARCHIVES PARTIALLY MIRRORED',
    body: 'The Followers of Set — the Ministry, in the Camarilla\'s polite vocabulary — continue to hold the oldest continuously operated archive in the network. Partial mirrors have been obtained. What they contain: river-lore, temple contacts, and a complete map of the old Nile warrens. What they cost: everything. Negotiations ongoing.',
    source: 'node CAI-1 // acquisition desk',
  },
  {
    cat: 'GOSSIP', city: 'TOKYO', priority: 3,
    headline: 'LASOMBRA COURTING THE YAKUZA WARRENS — OR SO THE RATS SAY',
    body: 'The Lasombra have been seen in the Tokyo undercity, negotiating with gangs that control the freight tunnels. Whether this is recruitment, conquest, or theater is unclear. What is clear: the Lasombra do not visit. They annex.',
    source: 'node TYO-2 // gossip column',
  },
  {
    cat: 'INTEL', city: 'BOGOTA', priority: 2,
    headline: 'BOG-1 REQUESTS ARCHIVE MIRROR — WARRENS CONSTRUCTION DOSSIER WANTED',
    body: 'The Bogotá node requests the full warrens-construction dossier for the archive at CANDLELIGHT. Colonial waterworks age differently than the modern storm grid — the Bogotá custodian wants the old construction standards before expanding the secondary tunnels along Tunjuelito. Send via dead drop, not burst uplink.',
    source: 'node BOG-1 // custodian request',
  },
  {
    cat: 'ALERT', city: 'MOSCOW', priority: 2,
    headline: 'MOSCOW NODE SILENT FOR 11 NIGHTS — STATUS UNKNOWN',
    body: 'The Moscow relay has not answered in eleven nights. Last handshake was clean; no distress burst was sent. Either the custodian went dark on purpose — which the protocol permits — or the node was found — which the protocol does not prevent. Approach any Moscow-adjacent rat with caution until status resolves.',
    source: 'node VLA-7 // watch desk',
  },
  {
    cat: 'GOSSIP', city: 'CHICAGO', priority: 3,
    headline: 'MALKAVIAN ORACLE SENDS UNSOLICITED PROPHECY TO THE WIRE',
    body: 'An oracle of the Malkavian clan transmitted a single line to every node simultaneously: "the sewers remember what the city forgets." Interpretation is ongoing. The Malkavians have not clarified. They rarely do.',
    source: 'node CHI-6 // unsorted inbox',
  },
  {
    cat: 'RATLINE', city: 'MEXICO CITY', priority: 2,
    headline: 'MEXICO CITY RATLINE REOPENED — STORM DRAIN ROUTE SOUTHBOUND',
    body: 'After three weeks closed for sweeping, the Mexico City storm-drain ratline reopens southbound. The sweep found nothing — or reported finding nothing, which in the current climate amounts to the same statement. Escorts provided. The Bogotá ratline connects downstream.',
    source: 'node MEX-3 // ratline operator',
  },
  {
    cat: 'INTEL', city: 'PRAGUE', priority: 3,
    headline: 'REGISTRY UPDATE — 208 DOSSIERS INDEXED, MOST WANTED LIST REVISED',
    body: 'The SchreckNET registry now carries 208 Nosferatu dossiers, with the Most Wanted list revised for the current quarter: Nergal the Plague-Bearer, Stitches (punk-crew leader, the Tunnel Wars), and the Thing in the Well (alias REDACTED). Full database mirrored under DOSSIERS. Submit updates through your local custodian only.',
    source: 'registry // node VLA-7',
  },
  {
    cat: 'ALERT', city: 'ISTANBUL', priority: 2,
    headline: 'ASHIRRA CONTACTS THE WIRE — FIRST FORMAL APPROACH ON RECORD',
    body: 'The Ashirra — the Islamic sect that keeps its own courts — have made formal contact with the network for the first time on record. They request access to the Second Inquisition monitoring feeds. What they offer in return: the oldest continuously mapped cistern network in the world. The custodians are deliberating.',
    source: 'node IST-2 // diplomatic pouch',
  },
  {
    cat: 'OBIT', city: 'ROME', priority: 3,
    headline: 'FIFTH-GENERATION ELDER LOST TO THE SUN — HAVEN COORDINATES LEAKED',
    body: 'The Rome node reports the loss of a fifth-generation elder to a sunrise ambush. The haven coordinates were leaked through a compromised courier, not a compromised node. The courier has been dealt with. The lesson stands: the protocol is only as strong as the weakest pair of hands that carries it.',
    source: 'node ROM-1 // obituary desk',
  },
  {
    cat: 'INTEL', city: 'LONDON', priority: 3,
    headline: 'THE OLD NET FRAGMENT RECOVERED — PRE-BURN ARCHIVE PARTIALLY RESTORED',
    body: 'A fragment of the pre-burn Vienna archive has been recovered and cross-checked against independent sources. What survived: node maps, handshake phrases of the old protocol, and a partial index of havens now known to be compromised. The fragment is mirrored under ARCHIVES for those with clearance. Handle with gloves.',
    source: 'node LDN-3 // restoration cell',
  },
  {
    cat: 'GOSSIP', city: 'LOS ANGELES', priority: 3,
    headline: 'ANARCH FREE STATES BICKERING OVER THE OLD TUNNELS AGAIN',
    body: 'The Anarch free states of the West Coast continue to bicker over custody of the old storm tunnels. The Nosferatu hold the practical map; the Brujah hold the enthusiasm; the Ventrue hold the lawsuits. The tunnels hold everyone, as always, whether they like it or not.',
    source: 'node LA-4 // gossip column',
  },
];

/* ------------------------------------------------------------------ */
/* Procedural filler — deterministic, index-based                      */
/* ------------------------------------------------------------------ */

const TEMPLATES = [
  {
    cat: 'INTEL',
    head: (c, g) => `${g.toUpperCase()} MOVEMENT MAPPED IN ${c} — ${Math.floor(3 + (c.length * 7) % 9)} HAVENS SHIFTED`,
    body: (c, g) => `The ${c} watch desk maps ${g} movement across the undercity: ${Math.floor(3 + (c.length * 7) % 9)} havens shifted in the last quarter, most into deeper ground. The pattern is consistent with pre-burn doctrine — go down, go quiet, go off the grid. Haven indices updated in the registry.`,
  },
  {
    cat: 'ALERT',
    head: (c) => `SIGNAL MIRROR DETECTED NEAR ${c} — PRESUME HOSTILE`,
    body: (c) => `A signal mirror of the manufacture seized in Vienna has been detected operating near ${c}. It answers on an old frequency and asks the questions the real protocol never asks. Presume hostile. Kill always-on devices. Report the mirror's location through your custodian, not through the wire.`,
  },
  {
    cat: 'GOSSIP',
    head: (c, g) => `${g} AND ${CLANS[(c.length + 4) % CLANS.length]} SPOTTED IN THE SAME TUNNEL — COINCIDENCE?`,
    body: (c, g) => `Rats in ${c} report ${g} and ${CLANS[(c.length + 4) % CLANS.length]} Kindred sharing the same freight tunnel without violence. Whether this is alliance, diplomacy, or the calm before something worse is anyone's guess. The rats, as always, are watching and saying nothing.`,
  },
  {
    cat: 'RATLINE',
    head: (c) => `${c} RATLINE STATUS: OPEN, ESCORT REQUIRED`,
    body: (c) => `The ${c} ratline remains open with escort provided. Approach through the maintenance shafts, not the public entrances. Fees negotiable in boons. Do not bring a light source — the escort provides. The route changes weekly; the phrase changes nightly.`,
  },
  {
    cat: 'INTEL',
    head: (c) => `${c}: SECOND INQUISITION ACTIVITY DOWNSHIFTING — OR LYING LOW`,
    body: (c) => `Second Inquisition activity in ${c} has downshifted over the last month: fewer raids, fewer captures, more silence. The watch desk reads this two ways — the enemy is overextended, or the enemy is learning to be quiet like we are. Both readings recommend the same doctrine: stay dark.`,
  },
  {
    cat: 'OBIT',
    head: (c, g) => `${g} ELDER MISSING, PRESUMED DESTROYED — ${c} CELL`,
    body: (c, g) => `An elder of the ${g} clan has been listed missing out of ${c} and is now presumed destroyed. The haven was empty when the cell arrived; the signs are consistent with a daylight raid. Lineage records updated. The index remembers so the names are not lost — that is the whole point of this network.`,
  },
  {
    cat: 'GOSSIP',
    head: (c) => `${c} WARREN POLITICS: CUSTODIAN CHALLENGED, SURVIVES`,
    body: (c) => `The ${c} custodian survived a challenge from the warren floor this quarter. Details are sparse and the parties involved prefer it that way. The challenge was settled in the old fashion — underneath, in the dark, where such things have always been settled.`,
  },
  {
    cat: 'INTEL',
    head: (c) => `${c} AQUEDUCT SURVEY COMPLETE — OLD WATERWORKS MAPPED`,
    body: (c) => `The ${c} aqueduct survey is complete: the old waterworks beneath the city are now fully mapped and added to the tunnel index. Colonial-era brick, pre-war concrete, and the modern storm grid all connect in ways the city's own engineers have forgotten. We have not.`,
  },
];

const FILLER = [];
for (let i = 0; i < CITIES.length; i += 1) {
  const city = CITIES[i];
  const clan = CLANS[i % CLANS.length];
  for (let t = 0; t < TEMPLATES.length; t += 1) {
    // ~36 filler items: two templates per city, staggered.
    if ((i + t) % 3 !== 0) continue;
    const tpl = TEMPLATES[t];
    FILLER.push({
      cat: tpl.cat,
      city,
      priority: tpl.cat === 'ALERT' ? 2 : 3,
      headline: tpl.head(city, clan),
      body: tpl.body(city, clan),
      source: `node ${city.slice(0, 3)}-${(i % 7) + 1} // watch desk`,
    });
  }
}

/* ------------------------------------------------------------------ */
/* Assemble + write                                                    */
/* ------------------------------------------------------------------ */

const BASE = new Date('2026-10-09T03:14:00Z');
const items = [];
let id = 0;
const push = (e) => {
  id += 1;
  const d = new Date(BASE.getTime() - id * 43200000); // 12h apart, newest first
  items.push({
    id: `W${String(id).padStart(3, '0')}`,
    ts: d.toISOString().replace('T', ' ').slice(0, 16) + ' UTC',
    cat: e.cat,
    city: e.city,
    headline: e.headline,
    body: e.body,
    source: e.source,
    priority: e.priority,
  });
};

// Interleave curated anchors with filler so the wire reads as one stream.
const pool = [...CURATED, ...FILLER];
const anchors = pool.slice(0, CURATED.length);
const fillerRest = pool.slice(CURATED.length);
for (let i = 0; i < Math.max(anchors.length, fillerRest.length); i += 1) {
  if (i % 2 === 0 && anchors[i]) push(anchors[i]);
  if (fillerRest[i]) push(fillerRest[i]);
  if (i % 2 === 1 && anchors[i]) push(anchors[i]);
}

const meta = {
  count: items.length,
  updated: '2026-10-09',
  node: 'node VLA-7 (Prague) // wire desk',
  classification: 'EYES ONLY — DO NOT MIRROR OUTSIDE THE NET',
};

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(
  OUT,
  '// GENERATED by scripts/gen_news.mjs — do not edit by hand.\n'
  + '// SCHRECKNET WIRE — Nosferatu news feed (100% English).\n'
  + `window.SCHRECKNET_WIRE = ${JSON.stringify({ meta, items }, null, 2)};\n`,
);

console.log(`news_data.js   : ${items.length} wire items (${CURATED.length} curated, ${items.length - CURATED.length} procedural)`);
