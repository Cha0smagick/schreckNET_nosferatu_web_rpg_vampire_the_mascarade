# SCHRECKNET — Nosferatu Information Network

> *"The Network is not a place. The Network is a promise made by people who
> still believe the night has teeth."*

A lore-faithful (V5) reconstruction of the Nosferatu's internal information
network, published as a static GitHub Pages site. Pure HTML/CSS/JavaScript — no
framework, no build step, no runtime dependencies in the browser.

---

## What this is

Clan Nosferatu does not "surf the web." They run an **analog shadow network**
of encrypted terminals and drop-box node servers hidden in the warrens of every
major city. This site is that network, as a player-facing artifact.

It is fiction. Names, lineages, disciplines, sects and the Second Inquisition
are drawn from the World of Darkness / **Vampire: The Masquerade 5th edition**
sourcebook canon. The people are not.

## Features

| Area | Contents |
|---|---|
| **Access gate** | Hackable login, leaked credentials in an HTML comment, brute-force animation, and a guest terminal for the curious |
| **NETWORK** | Node-status dashboard, Second Inquisition alert feed, traffic sparkline, recent uploads |
| **CLAN** | Absimiliard, the Curse, disciplines, culture, glossary, sect history |
| **DOSSIERS** | Classified files with AI-generated portraits, MOST WANTED, FAMOUS, and a searchable database of 200+ Nosferatu |
| **KINDRED INDEX** | A cross-clan registry of 500+ vampires — every clan, sect, generation and rank — plus ghouls and childer |
| **FORUMS** | The OPEN SEWER, six live threads |
| **BLOGS** | Three in-fiction Nosferatu blogs |
| **ARCHIVES** | A real file server: 30 downloadable documents and maps |
| **MAPS** | Interactive SVG warren maps |
| **GAMES** | Four vanilla minigames |
| **RED ROOMS** | The index of what is down here that the Cabal pretends does not exist |

## Rules of engagement

This site is built to five hard rules, and they are not negotiable:

1. **Lore accuracy.** Every clan, discipline, sect, generation title and
   antagonist is canon-checked against V5. No invented lore presented as real.
2. **Palette discipline.** Sewer black, phosphor green, bile, rust, bone, blood
   red. Nothing else.
3. **Zero slop.** No filler copy, no dead links, no stray build artifacts.
4. **Vanilla only.** HTML, CSS and ES5-compatible JavaScript. No frameworks.
5. **100% English.** Every visible string on every page.

## Local development

There is no build. Serve the directory over HTTP (required — `file://` will
break `localStorage`-based auth and module-free script loading).

```bash
# Python
python -m http.server 8000

# or Node
npx serve .
```

Then open <http://localhost:8000/>.

### Credentials

```
username: ratking
password: sewer123
```

Guest access is also available without credentials, at reduced clearance.

## Regenerating the lore corpus

The database files are generated, not hand-written.

```bash
npm install        # node-fetch is the only dependency, and only for scripts
npm run gen:lore   # or: node scripts/gen_network.mjs
```

This rewrites `assets/js/dossiers_data.js` (`window.NOSFERATU_DB`),
`assets/js/kindred_data.js` (`window.KINDRED_DB`) and the lore documents under
`downloads/`. Output is deterministic, so re-running produces no diff unless
you change the generator.

### Regenerating image plates

Portraits and backdrops come from NVIDIA **Flux.2 Klein 4B**.

```bash
cp .env.example .env   # then set NVIDIA_API_KEY
node scripts/gen_images.mjs
```

The script is **idempotent** — it skips any plate that already exists. To
regenerate a specific plate, pass its filename:

```bash
node scripts/gen_images.mjs redroom.png
node scripts/gen_images.mjs --force          # regenerate everything
```

`NVIDIA_API_KEY` lives only in `.env`, which is gitignored. It is never
committed and never appears in the deployed artifact.

> **Prompt rule:** no image prompt may request text, lettering or watermarks.
> Every heading, label and caption is rendered in the DOM, where it belongs.

## Deploying to GitHub Pages

```bash
git init
git add .
git commit -m "SchreckNET: initial commit"
git branch -M main
git remote add origin git@github.com:<you>/schrecknet.git
git push -u origin main
```

Then in the repository:

1. **Settings → Pages → Build and deployment → Source:** choose
   **GitHub Actions**.
2. Push to `main`. `.github/workflows/deploy.yml` publishes the site.

The workflow uploads the repository root as a Pages artifact and explicitly
excludes `node_modules`, `.env`, `scripts/`, `image_prompts.json`,
`package.json` and the agent/tooling directories. Nothing secret is ever
served.

## Repository layout

```
.
├── .github/workflows/deploy.yml   # GitHub Pages publish
├── assets/
│   ├── css/style.css              # the entire stylesheet
│   ├── img/                       # 22 AI-generated plates
│   └── js/
│       ├── main.js                # auth gate, nav injection, boot sequence
│       ├── games.js               # the four minigames
│       ├── dossiers_data.js       # generated — window.NOSFERATU_DB
│       └── kindred_data.js        # generated — window.KINDRED_DB
├── downloads/                     # 30 in-fiction documents, served for real
├── scripts/
│   ├── gen_images.mjs             # NVIDIA Flux.2 plate generation
│   ├── gen_lore.mjs               # lore document generation
│   └── gen_network.mjs            # database generation
├── index.html                     # portal + login
├── network.html  clan.html  dossiers.html  kindred.html
├── forums.html   blogs.html  archives.html
├── maps.html     games.html  redrooms.html
├── image_prompts.json             # 22 prompts, no text allowed
└── package.json
```

## Licence and disclaimer

Fan work. *Vampire: The Masquerade* and the World of Darkness are trademarks of
White Wolf Publishing LLC / CCP. This project is unaffiliated with and
unendorsed by them.

Nosferatu says: *the night keeps no records. Neither do we.*