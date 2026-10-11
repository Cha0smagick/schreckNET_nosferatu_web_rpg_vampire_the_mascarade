// lore_part_bl_samedi.js — Samedi bloodline (Sisyphus build, lore from canon + registry doubt)
// window.LORE_PART_BL_SAMEDI = { bloodlines: [samedi] }
(function (window) {
  'use strict';

  function char(id, name, alias, gen, era, city, place, threat, lore_md) {
    return { id: id, name: name, alias: alias, gen: gen, era: era, location: { city: city, place: place }, threat: threat, lore_md: lore_md, photo: 'assets/img/char_' + id + '.png' };
  }

  var samedi = {
    id: 'samedi',
    name: 'Samedi',
    nickname: 'The Rotting Kindred',
    disciplines: ['Fortitude', 'Oblivion', 'Thanatosis'],
    weakness: 'The Samedi wear their death openly — rotting flesh no masquerade survives, and society treats them with raw revulsion that no Presence can fully mask.',
    lore_md: [
      'The Samedi are the death-clan nobody adopted. Their origin is filed as a fight: one school calls them a Caribbean offshoot of the Cappadocian line that escaped Augustus Giovanni\'s 1444 purge by running south and getting strange; another school insists the Baron made them from scratch, out of graveyard soil and spite. The archives refuse to referee. What is documented is the result: kindred whose bodies rot on a schedule they choose, who smell of turned earth and old flowers, and who cannot pass a single night among the living without a disguise and a funeral.',
      'They work two trades. The first is murder-for-hire of a very specific grade — a Samedi killing is untraceable because the corpse arrives pre-decomposed, outside every forensic window. The second is prophecy: a Samedi reads death the way an accountant reads columns, and their predictions of who dies next are correct at rates that make analysts nervous. The Baron Samedi sits at the head of both trades, if he sits anywhere at all; every Caribbean crossroads claims him and every file declines to confirm.',
      'The Second Inquisition hates them for a new reason: Samedi corpses do not match any living person in any database, which should be an advantage for the SI and is instead an insult — their biometric dragnet simply returns nothing. SchreckNET flags ROT-CLOCK: a Samedi can age or heal its own putrefaction at will, so any morgue timeline touching one is treated as fabricated evidence. Node doctrine adds a smaller note, under folklore: file them by their manners. The rotting are, as a rule, the politest visitors a node ever logs.'
    ].join('\n\n'),
    chars: [
      char('sam01', 'Baron Samedi', 'THE FIRST TO ROT', 'unknown', 'unknown to present', 'the Caribbean', 'every crossroads, briefly', 'high',
        'The figure at the head of the bloodline, if "figure" is the right word for something every graveyard from Haiti to Trinidad claims and no photograph survives. The Baron takes payment in funerals performed correctly, answers questions in the voice of whoever asks, and has — the file is careful here — attended the funerals of at least six kindred the network had listed as alive. Registry status: apocryphal, load-bearing. The file closes with the only instruction it contains: do not invite the Baron to a wake you expect to survive.'),
      char('sam02', 'Doctor Ferreau', 'THE CABINET', '8th', '1790s to present', 'Port-au-Prince', 'a clinic that predates the state', 'high',
        'Ferreau has kept a clinic in Port-au-Prince since before the country existed, through every government, occupation and earthquake, treating the sick in the front rooms and arranging permanent cures in the back. His cabinet of instruments is older than several navies. He trained half the bloodline\'s working killers and all of its surgeons, and his ledger of debts — kept in a hand nobody else can read — is the closest thing the Samedi have to law. The SI raided once, in 2019, and reported finding only a clean, empty clinic that smelled of lilies.'),
      char('sam03', 'Madame Loa', 'THE VEVE WIDOW', '7th', '1700s to present', 'New Orleans', 'the above-ground tombs of St. Louis No. 1', 'mid',
        'She has buried the same city for three centuries and attends every funeral of consequence in the crescent — kindred and kine alike — in widow\'s black that predates the fashion by a hundred years. Madame Loa reads death in the veves she chalks on tomb walls, and her readings come with a price the living consider obscene: a true grief, freely given, in person. Three princes have owed her. Two paid. The third is filed under Final Death, cause pending.'),
      char('sam04', 'Cornelius Brace', 'THE TAXIDERMIST', '8th', '1850s to present', 'Miami', 'a body shop off the Tamiami Trail', 'mid',
        'Brace made his name restoring corpses to lifelike dignity — first for bereaved families, later for kindred who needed their victims to stay buried as who they were. His workshop ships worldwide and the paperwork is immaculate. He is the bloodline\'s quiet diplomat: every faction has shipped something through Brace, and he has never once opened a crate that was not addressed to him. The file notes his only rule, spoken once: "I do not ask what died. I ask what shape it leaves in."'),
      char('sam05', 'Padre Arcángel', 'THE LAST RITES', '9th', '1800s to present', 'Havana', 'a necropolis chapel, Cristo del Buen Viaje', 'mid',
        'A priest Embraced mid-sermon who finished the sermon — then walked out of his own funeral and into the necropolis, where he has been saying last rites for two centuries of Havana\'s dead, mortal and otherwise. The Samedi of the Caribbean treat him as their confessor: even killers sit with him, and what is said in his chapel has never once reached an archive. The SI surveilled his chapel for a year and filed the report as inconclusive; the cameras recorded only services, well attended, nobody visible.'),
      char('sam06', 'Tante Zabel', 'THE COFFIN LEDGER', '9th', '1700s to present', 'Guadeloupe', 'a coffin workshop above the mangroves', 'low',
        'Zabel builds coffins to measure, and every measurement is a prophecy: she builds for people years before they die, and the workshop ships nothing. The ledger of completed coffins is the bloodline\'s quiet oracle — when a name moves from the shelf to the ledger, somebody\'s file moves with it. She has been asked to sell the ledger three times, by three princes. The third inquiry arrived as a full strike team and left as a note: the coffins were ready, none were theirs.'),
      char('sam07', 'Jimmy the Wound', 'THE SCAR BROKER', '10th', '1900s to present', 'Kingston', 'a sound-system yard, off-season', 'low',
        'A low-generation nobody with a high-generation reputation: Jimmy buys and sells the evidence of deaths — wounds, weapons, last words — and stores them in his own flesh, reopening each scar to play a memory back for a fee. He remembers forty suicides that were murders and nine murders that were mercy. The network files him as an archive, not a threat: Jimmy sells nothing twice, and the second buyer is always the funeral.'),
      char('sam08', 'Odalys Ferrer', 'THE DRY SEASON', '10th', '1930s to present', 'Mexico City', 'the catacombs under the Sacramente', 'mid',
        'Odalys keeps the city\'s oldest catacombs as her parish, and her gift is timing: she knows, to the day, when a death that has been put off will stop being negotiable. She sells that calendar quietly — princes buy weeks, elders buy years, and one Tremere bought a decade and received exactly the decade asked for, ending punctually. The file\'s only open question is her own ledger: every client\'s entry is closed except one, and the name is smudged.'),
      char('sam09', 'Silas Blackwood', 'THE PLANTATION AUDIT', '8th', '1730s to present', 'Barbados', 'a ruined sugar-house, second floor intact', 'mid',
        'Blackwood was an estate auditor in life and never stopped: he audits debts that outlived their debtors, and the bloodline\'s oldest families consult him before any bargain that touches the dead. His books balance to the soul. Two Giovanni foundries and one Harbinger have tried to buy his archive; all three offers are recorded, politely declined, and — the file adds, without comment — all three offerors are now filed under Final Death, audited.'),
      char('sam10', 'The Second Burial', 'THE ONE THE GROUND REJECTED', 'unknown', 'unknown', 'varies', 'graves that refuse to stay shut', 'high',
        'There is a pattern in the mortuary paperwork that only appears in Samedi territory: bodies buried once, exhumed by nothing, and buried again — with the second funeral always attended by one extra mourner the guest list cannot account for. The archive\'s photographs of known Samedi, when re-processed years later, come back one day more decomposed than the day they were taken. The protocol appended to the file is a single line, in a hand nobody recognizes: file the discrepancy, attend nothing, and let the ground keep what it keeps.')
    ]
  };

  window.LORE_PART_BL_SAMEDI = { bloodlines: [samedi] };
})(typeof window !== 'undefined' ? window : globalThis);
