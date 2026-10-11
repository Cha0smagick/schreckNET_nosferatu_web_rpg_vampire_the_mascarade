// lore_part_bl_nagaraja.js — Nagaraja bloodline (Sisyphus build, lore from canon + registry doubt)
// window.LORE_PART_BL_NAGARAJA = { bloodlines: [nagaraja] }
(function (window) {
  'use strict';

  function char(id, name, alias, gen, era, city, place, threat, lore_md) {
    return { id: id, name: name, alias: alias, gen: gen, era: era, location: { city: city, place: place }, threat: threat, lore_md: lore_md, photo: 'assets/img/char_' + id + '.png' };
  }

  var nagaraja = {
    id: 'nagaraja',
    name: 'Nagaraja',
    nickname: 'The Flesh-Eaters',
    disciplines: ['Auspex', 'Dominate', 'Oblivion'],
    weakness: 'The Nagaraja must eat raw flesh — vitae alone does not sustain them, and the hunger is dual and impossible to disguise for long.',
    lore_md: [
      'The Nagaraja are what happens when sorcerers try to make vampires from first principles and succeed too well. The canonical story, fragmented across three archives, says they were mages of the Vimala Konta — scholars of death — who forged themselves into kindred through rites that crossed the Shroud, and got stuck: half in this world, half owed to the other one. They are refugees of their own experiment, and their home territory was never a city but a catastrophe: the Shadowlands they fled from broke behind them, and every Nagaraja alive carries the memory of the door they came through closing.',
      'Their condition is the flaw in the ritual. Vitae alone does not feed them; they must consume raw flesh, which makes them the only bloodline whose feeding leaves a forensic trail no cover story survives. Mortuary freezers empty. Seafood markets under-count. The elders are surgical about sourcing; the young are the reason the bloodline has a reputation. In exchange they carry Oblivion in its oldest working form — the Nagaraja were using the Dark Arts before the Hecata standardized them, and they treat the underworld less as a kingdom than as a debt they are still paying.',
      'SchreckNET files them under FLESH-LEDGER: cold-storage facilities emptied with the doors sealed and the access logs intact — the logs say the door never opened. The Second Inquisition classifies them as biological hazards rather than blankbodies, which the Nagaraja find flattering in a way the network declines to record. Node doctrine is two lines: do not trade with them hungry, and if a shipment of meat moves itself, log the truck number and stop following it.'
    ].join('\n\n'),
    chars: [
      char('nag01', 'Vasuki the Pale', 'THE FIRST TO EAT', 'unknown', 'unknown to present', 'unknown', 'the crossed threshold', 'high',
        'The founder-figure of the bloodline: the mage who led the rite that made them, or the first thing the rite produced — the archives split on which. Vasuki is credited with the bloodline\'s discipline of eating memory along with meat: those who share his table wake having forgotten one true thing. He crossed the Shroud last, holding the door. Registry status: apocryphal, but his tableware keeps showing up in modern auctions, and the buyers keep vanishing between the paddle and the payment.'),
      char('nag02', 'Doctor Iyengar', 'THE ANATOMY LECTURER', '7th', '1830s to present', 'Kolkata', 'the sealed vaults of a medical college', 'high',
        'Iyengar teaches anatomy in a college his family founded, to mortuary students who never see him in daylight and remember less of the lectures than they should. His true classroom is the college\'s sealed vaults, where he dissects things that died elsewhere than here — specimens the network cannot source and cannot request. He trades identifications for silence, and his identifications are always correct. The SI has a standing file on three Kolkata cold cases; all three closed the week Iyengar was seen buying chalk.'),
      char('nag03', 'Sharadha Kael', 'THE CHARNEL LIBRARIAN', '8th', '1700s to present', 'Kathmandu', 'a charnel temple above the valley', 'mid',
        'Kael maintains the bloodline\'s true archive: a charnel temple where the dead of six centuries are sorted — not by name, but by what they were owed. She is the Nagaraja\'s memory of the door they lost, and she sells coordinates into the Shadowlands the way a banker sells foreign currency: at rates designed to discourage tourism. Two Hecata delegations and one Harbinger have left her temple lighter than they arrived. The file notes her terms, chalked above the lintel: what you take out, you owe in kind.'),
      char('nag04', 'Pema Dorje', 'THE COLD PRAYER', '9th', '1600s to present', 'Lhasa', 'ruins above the pilgrim road', 'low',
        'A monk Embraced by accident of ritual and left to make sense of it, Dorje has spent four centuries in the ruins above Lhasa praying for things that do not die. He eats almost nothing — the smallest possible amount, sourced from bodies already claimed by the sky — and his discipline is a kind of reverse hunger: kindred who sit with him come away less hungry, for weeks, for everything. The network files him under folklore and sends burned-out analysts anyway. It is the only leave the budget allows.'),
      char('nag05', 'Ravi Chandrasekar', 'THE FREEZER TOLL', '8th', '1900s to present', 'Chennai', 'the fish-market freezers, before the ice trucks', 'mid',
        'Ravi runs the bloodline\'s supply chain with a logistics man\'s decency: cold-storage contracts, ice-plant schedules, a toll paid to every morgue family that looks the other way. Nothing in his operation is stolen, which he considers the whole point — the flesh is bought, the ledgers are honest, and the hunger is fed without one unnecessary grave. He was the model for the FLESH-LEDGER file\'s observation that the door never opened: Ravi has keys, and the logs are true.'),
      char('nag06', 'Madam Yang Xue', 'THE BONE LANTERN', '9th', '1500s to present', 'Chengdu', 'a lantern-shop with a back stair', 'mid',
        'Yang Xue makes lanterns of bone paper — thin as vellum, bright as memory — and hangs them along the routes the dead take through her city. Where her lanterns hang, wraiths pass politely; where they are taken down, the Shadowlands press through. She is the bloodline\'s border-keeper: half the Nagaraja alive owe her passage, and every one of them owes it twice, because nobody crosses her line without paying a toll they only remember after. The lanterns, the file notes, are not decoration. They are fencing.'),
      char('nag07', 'Ashok the Hollow', 'THE QUIET MORTUARY', '10th', '1950s to present', 'Mumbai', 'a mortuary rail between two cities', 'low',
        'Ashok works the night mortuary train — he rode it as a mortal porter, died on it, and has ridden it since, moving the bloodline\'s cargo in coffins marked as unclaimed mail. He speaks perhaps forty words a year and never the same forty twice. The network has three photographs of him, each showing a slightly emptier man. The mortuary that employs him has filed the same missing-porter report every twenty years since 1955, and each time the report is filed by someone who has never met him.'),
      char('nag08', 'Kali Sundaram', 'THE CANAL PSALM', '9th', '1700s to present', 'Colombo', 'the canal tombs, below the tide gates', 'mid',
        'Sundaram keeps the canal tombs and sings to what is in them — a psalm in a dead liturgical language that, the file admits under folklore, the drowned actually answer. He mediates between the Nagaraja and the restless dead of the harbor: when the bloodline\'s feeding offends a ghost, Sundaram settles the account. His psalms have prevented four hauntings that would have drawn the SI, which makes him, by the arithmetic of the network, one of the cheapest defensive assets on file.'),
      char('nag09', 'Ila Bhattacharya', 'THE DHAKA SCAR', '10th', '1999 to present', 'Dhaka', 'the quarter still marked by the Week of Nightmares', 'mid',
        'Embraced in 1999, in the shadow of the Week of Nightmares — she was in the streets when Zapathasura burned the sky above Bengal, and she carries the week like a scar: one eye that sees the Ravnos founder\'s mirages still hanging over certain blocks of the city. Ila is the bloodline\'s youngest and most public face: she runs an NGO that documents disappearances, and uses its casework to feed precisely. The network flags her file MUTUAL — she has traded intel on thin-bloods twice, and both trades were honored.'),
      char('nag10', 'The Hunger That Speaks', 'THE THIRD MEAL', 'unknown', 'unknown', 'varies', 'freezers with sealed doors', 'high',
        'The file is a single pattern, repeated across nine cities in twenty years: cold-storage emptied, doors sealed, logs intact, and in each case one detail the local investigators suppressed — the empty freezers were not empty. Something inside each one had been eaten from within, and every inventory, corrected for weight, comes out one item heavier than it started. The protocol is one line: the logs say the door never opened; believe the logs, and stop auditing the meat.')
    ]
  };

  window.LORE_PART_BL_NAGARAJA = { bloodlines: [nagaraja] };
})(typeof window !== 'undefined' ? window : globalThis);
