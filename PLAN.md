# PLAN — SchreckNET: Nosferatu Information Network

A GitHub Pages website simulating the SchreckNET information network of clan Nosferatu
(Vampire: The Masquerade, V5 era). Vanilla HTML/CSS/JS. GitHub Actions deploy.
ALL content in English, 100% of the time. No AI slop. One step = one verifiable action.

## Master rules
- [x] R1: 100% VtM/V5 lore accuracy (SchreckNET, Second Inquisition, fall of the Vienna node)
- [x] R2: Nosferatu palette (sewer black, phosphor green, bile, rust, bone, blood red)
- [x] R3: No AI slop anywhere (no filler text, no broken links, no stray artifacts)
- [x] R4: Vanilla HTML/CSS/JS only — no frameworks, no build step
- [x] R5: Images via NVIDIA Flux.2 klein 4B — NO text inside images; API key only in `.env` (gitignored)
- [x] R6: ALL content in English, 100% of the time
- [x] R7: Relative paths everywhere (GitHub Pages compatible)

## Phase 1 — Scaffolding
- [x] 1.1: Remove stray tool artifact `undefined/` directory
- [x] 1.2: Create `package.json` (private, node-fetch dep for image script only)
- [x] 1.3: Create `.gitignore` (`.env`, `node_modules/`)
- [x] 1.4: Create `.env` with NVIDIA_API_KEY (never committed)
- [x] 1.5: Create folder structure: `assets/css`, `assets/js`, `assets/img`, `downloads/`, `scripts/`, `.github/workflows/`

## Phase 2 — Design system
- [x] 2.1: `assets/css/style.css` — palette CSS vars, reset, monospace typography
- [x] 2.2: Shared chrome: terminal sidebar nav, glitch headers, footer
- [x] 2.3: CRT overlay: scanlines, vignette, noise, flicker
- [x] 2.4: Components: panels with corner brackets, badges, buttons, status dots, tables, classified paper dossiers, forum posts, blog entries
- [x] 2.5: Responsive mobile collapsible nav

## Phase 3 — Shared JS
- [x] 3.1: `assets/js/main.js` — auth gate (localStorage `schrecknet_auth`), sidebar injection, user badge, logout, boot/typing effects, DECRYPTION VERIFIED badge
- [x] 3.2: `assets/js/games.js` — 4 vanilla minigames

## Phase 4 — Pages (ALL IN ENGLISH)
- [x] 4.1: `index.html` — Portal + hackable login (creds ratking/sewer123, HTML comment leak, brute-force animation, guest access, boot sequence)
- [x] 4.2: `network.html` — Dashboard: node statuses, Second Inquisition alert feed, traffic sparkline, recent uploads
- [x] 4.3: `clan.html` — Clan history (Absimiliard, the curse), disciplines (6 canon cards), culture, SchreckNET glossary, sects
- [x] 4.4: `dossiers.html` — MOST WANTED (portraits) + FAMOUS + FULL DATABASE rendered from dossiers_data.js (208 entries)
- [x] 4.5: `forums.html` — "OPEN SEWER" board, 6 threads, verified signals
- [x] 4.6: `blogs.html` — 3 Nosferatu blogs
- [x] 4.7: `archives.html` — File server "FTP://SEWER" with real downloadable files
- [x] 4.8: `maps.html` — 2 interactive SVG maps (Prague Warren, Global Node Network)
- [x] 4.9: `games.html` — 4-game hub

## Phase 5 — Downloads
- [x] 5.1: Real downloadable files in `/downloads` — 30 files (29 .txt + 1 .svg), superset of the original list

## Phase 6 — Images
- [x] 6.1: `image_prompts.json` (22 English prompts, dramatic, NO text, varied seeds)
- [x] 6.2: `scripts/gen_images.mjs` (node-fetch import, .env reader, idempotent, defensive response handling)
- [x] 6.3: Generate images; retry failures — 22/22 plates generated, 0 failed
- [x] 6.4: Pages degrade gracefully if an image is missing (background-color fallback)

## Phase 7 — Deploy
- [x] 7.1: `.github/workflows/deploy.yml` (official Pages flow, permissions, push→main + workflow_dispatch)
- [x] 7.2: `README.md` with push/deploy steps
- [x] 7.3: git init + initial commit

## Phase 8 — Final audit
- [x] 8.1: `node --check` on all JS files
- [x] 8.2: Internal link checker (all hrefs resolve to existing files)
- [x] 8.3: Local HTTP server + HTTP 200 on all pages
- [x] 8.4: Login flow review (hackable login works: ratking/sewer123, guest)
- [x] 8.5: Content checklist (lore-accurate, dramatic, no slop)

## Phase 9 — Delivery
- [x] 9.1: Final summary + GitHub push instructions


## ADDED SCOPE (user request, in-universe English content)
- [x] 4.10 redrooms.html - THE RED ROOMS dark-web index page: vampire snuff sites, red rooms, diablerie/ghoul-cannibal boards, punk crew hangouts; chronicle-style macabre content
- [x] 4.11 dossiers.html MOST WANTED section: full dossier per most-wanted Nosferatu (add Nergal the Plague-Bearer, punk-crew leader Stitches, Thing in the Well alias-REDACTED; existing 9 remain)
- [x] 6.5 image prompts +3: redroom.png, diablerie.png, punk_gang.png (NO text in images)
- [x] 5.2 download redroom_index.txt
- [x] 7.0 nav entry RED ROOMS added to sidebar on all 10 pages
## EXPANDED SCOPE (m0050)

- [x] 10.1 scripts/gen_network.mjs: curated canonical entries (lore-accurate) + procedural generation to reach >=200 Nosferatu dossiers and >=500 total vampires of all clans/sects/ranks + ghouls + childer; outputs assets/js/dossiers_data.js (window.NOSFERATU_DB) + assets/js/kindred_data.js (window.KINDRED_DB) + ~30 English lore files in downloads/
- [x] 10.2 New page kindred.html (THE KINDRED INDEX): all-clan searchable/filterable vampire database + ghouls + revenants tabs; nav entry added to main.js PAGES
- [x] 10.3 dossiers.html renders from dossiers_data.js: MOST WANTED section with portraits + FAMOUS + FULL DATABASE (search + generation/status/threat filters), 200+ entries
- [x] 10.4 archives.html lists all ~30 downloads; image prompts +4 (redroom.png, diablerie.png, punk_gang.png, kindred_index.png); ALL content 100% English
