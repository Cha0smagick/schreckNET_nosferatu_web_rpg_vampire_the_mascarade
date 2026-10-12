# SCHRECKNET // NOSFERATU NODE

**A free, non-commercial browser RPG companion for Vampire: The Masquerade tabletop chronicles — built by [cha0smagicklabs.com](https://cha0smagicklabs.com) for the players of VTM Nosferatu.**

> *"We were here before the wire. We will be here after it falls."*

---

## What is this?

SchreckNET is the Nosferatu clan's secret network — a dark-web of terminals, ciphers, dossiers and warrens hidden inside the sewers of the World of Darkness. This project is a **playable web emulation** of that network: a complete in-browser companion for Storytellers and players running a Vampire: The Masquerade chronicle (V5 and V20 friendly).

It is a **pure static site** — no backend, no accounts, no tracking. Everything runs client-side and persists in your browser's `localStorage`. Open `index.html` and you are on the net.

**100% non-profit.** No ads, no payments, no monetization. It is offered free to all VTM Nosferatu players, forever.

---

## Getting Started (SPOILERS BELOW — Storytellers read freely, players: enter at your own risk)

1. Open `index.html` (or serve the folder with any static server).
2. You will be greeted by the **ENTER THE WARREN** terminal. This is the login gate.
3. Credentials (SPOILER):
   - Username: `guest` (password can be empty) — **or** leave **both fields empty** and press enter. The Old Net trusts no one but lets everyone in.
   - There is **one hidden operator account**: `ratking` / `sewer123`.
4. On success you are redirected to `NETWORK STATUS`, the hub of the node.

### The Pages (21 total)

| Page | Purpose |
|---|---|
| `index.html` | Login gate / boot terminal |
| `network.html` | Network status hub |
| `news.html` | SCHRECKNET WIRE — in-world news feed + wire archive |
| `kindred.html` | **Kindred Index** — 680 fully-searchable Kindred records (vampires, ghouls, childer) with portraits |
| `dossiers.html` | **NOSFERATU DOSSIERS** — 208 classified VLA files, clickable names open full personal dossiers with lore + cipher-locked classified sections |
| `clan.html` | THE CLAN — Nosferatu lore |
| `lore` content | 906 KB of clan, bloodline and antitribu lore (`lore_data.js`) |
| `maps.html` | CITY SEWER SURVEYS — 209 hand-drawn SVG sewer maps of real-world cities |
| `registry.html` | THE REGISTRY — 350 registry files, 209 city maps, bestiary of 25 hostiles |
| `wod.html` | THE GREATER DARK — World of Darkness primer |
| `forums.html` | OPEN SEWER — in-world forum |
| `blogs.html` | NODE BLOGS |
| `archives.html` | Node archives |
| `redrooms.html` | RED ROOMS — restricted amenities |
| `tools.html` | **MECHANICS** — V5/V20 dice roller (hunger dice, messy criticals, bestial failures), damage resolver with torpor rules, 17-discipline reference |
| `sheets.html` | **CELL FILES** — full PC character sheets (attributes, disciplines, humanity, hunger, health, willpower, XP) saved in your browser |
| `chronicle.html` | **WARREN LEDGER** — the Storyteller cockpit: session log, XP ledger, boons, edit/update, global search, PC autocomplete, JSON export/import backup |
| `comms.html` | **DARKLINE** — encrypted Caesar-cipher comms between players, with dead-drops you can crack or burn |
| `domain.html` | **DOMAINS** — feeding-ground manager over the 209 cities: claim grounds, track blood supply, risk and draws |
| `commendations.html` | **COMMENDATIONS** — all 666 achievements, your rank and progress |
| `games.html` | Node minigames |
| `404.html` | A node that should not exist |
| `legal.html` | Legal notice (non-commercial, fan project) |

---

## FULL SPOILERS — Secrets of the Node

### Classified dossier cipher codes

Every wanted/famous dossier hides a **CLASSIFIED** section behind a 4-digit cipher lock (terminal in the dossier sheet: 3 attempts, `TRACE HINT` helps). The codes:

| Dossier | Character | Code |
|---|---|---|
| — | Any other entry | `1993` |
| VLA-0001 | NERGAL THE PLAGUE-BEARER | `1349` |
| VLA-0002 | STITCHES | `1967` |
| VLA-0003 | [alias-REDACTED] | `7734` |
| VLA-0004 | RATKING | `0666` |
| VLA-0005 | SEWER_WITCH | `3131` |
| VLA-0006 | WARDEN KOSTA | `1945` |
| VLA-0007 | ARCHIVIST HOLT | `1888` |
| VLA-0008 | NULLPOINTER | `4040` |
| VLA-0009 | ILSE BRANDT | `1954` |
| VLA-0010 | DOC. FEUER | `3141` |
| VLA-0011 | MOLOTOV SAINT | `1917` |
| VLA-0012 | GRAEFIN VON HALL | `1848` |
| VLA-0013 | THE SURGEON | `1044` |

### Egg keywords (type anywhere on the site)

The site watches what you type (keybuffer). Type these words:

- `orlok` — ORLOK PROTOCOL
- `nullpointer` — NULLPOINTER EXCEPTION
- `666` — console homage

### The dead node

Try to reach a page that does not exist. If you find `404.html`, it unlocks **PAGE NOT FOUND PAGE FOUND**.

### Minigames (games.html + in-page games)

- **Brute force** packet cracker — exact match of 4
- **Memory grid** — match all 8
- **Caesar shift** — decode the text
- **Dossier cipher locks** — see the code table above
- **Darkline intercepts** — try keys or brute-force all 26 shifts

### The 666 Commendations

The achievement engine (`assets/js/achievements_data.js`, generated by `scripts/gen_achievements.mjs`) tracks **exactly 666 commendations** across 11 categories (DICE, SHEETS, CHRONICLE, COMMS, ARCHIVE, CARTOGRAPHY, OPS, DOMAIN, DARKNET, LORE, PATROL). Ten ranks:

CHILDE OF THE WIRE → LURKER → SIGNAL SEEKER → WARREN RUNNER → NODE ARCHIVIST → WHISPER BROKER → WARREN WARDEN → OLDNET SPIDER → NOSFERATU PARAGON → **THE 666TH SEAL** (unlock all 665 and the seal opens itself).

Handcrafted uniques exist (ORLOK PROTOCOL, ALL THIRTEEN SEALS, NODE ATLAS COMPLETE, DEBT COLLECTOR, ETERNAL THIRST…). Actions on every page feed the engine; toasts announce unlocks.

---

## Storyteller Toolkit

- **Mechanics console**: V5 dice pools with hunger dice, messy criticals and bestial failures; V20 again-on-10 rule; damage overflow into aggravated and torpor checks; 17-discipline quick reference with original wording.
- **Cell Files**: create and store unlimited PC sheets (15 clans, 9 attributes, disciplines, humanity/hunger tracks, derived health and willpower, XP).
- **Warren Ledger (chronicle)**: log sessions, XP grants and boons (Trivial/Minor/Major/Blood/Life with SETTLE), edit any entry, filter everything, autocomplete PC names from your sheets, and export/import a full JSON backup (`schrecknet_chronicle_backup.json`) to carry between tables.
- **Darkline**: hand your players a cipher key and watch them traffic secrets. Dead-drops persist until burned.
- **Domains**: claim feeding grounds on the real city map, manage blood-supply meters, draws and losses.

---

## Technical Notes

- **Stack**: plain HTML/CSS/JS. Zero dependencies, zero build step. Works offline.
- **Persistence**: all state is in `localStorage`:

| Key | Holds |
|---|---|
| `schrecknet_auth` | login flag |
| `schrecknet_achv` | achievement progress |
| `schrecknet_sheets` | PC character sheets |
| `schrecknet_chron_sessions` / `_xp` / `_boons` | chronicle ledgers |
| `schrecknet_darkline` | comms dead-drops |
| `schrecknet_domains` | feeding grounds |

- **Generators** (`scripts/*.mjs`, run with `node`): `merge_lore.mjs` (fuses lore parts into `lore_data.js` + derives NVIDIA portrait prompts), `gen_city_maps.mjs` (renders the 209 SVG sewer maps), `gen_achievements.mjs` (rebuilds the 666 commendations; asserts the count), `merge_cities.mjs`, and the rest of the `gen_*` family.
- **Portraits**: all 680 Kindred portraits are wired (511 `kvla*` vampires, 96 `kgh0*` ghouls, 64 `kch0*` childer + legacy files). Dossier portraits fall back to a name/alias map against the Kindred DB — every one of the 208 dossiers shows a face.
- **Translation**: the Google Translate widget (powered by Google) is injected on every page via `main.js`, so the whole node reads in any language.
- **Map SVGs are strict XML**: text is escaped at generation time so they render inside `<img>` tags.

---

## Legal

This is a **non-commercial fan project**, developed free of charge by **cha0smagicklabs.com** for the VTM Nosferatu community. It is not affiliated with, endorsed by, or sponsored by White Wolf Entertainment AB or Paradox Interactive. *Vampire: The Masquerade* and the *World of Darkness* are trademarks of their respective owners; all game content here is original fan work. Full notice: `legal.html`. Translations by Google Translate.

---

*cha0smagicklabs.com — free tools for the children of the wire.*
