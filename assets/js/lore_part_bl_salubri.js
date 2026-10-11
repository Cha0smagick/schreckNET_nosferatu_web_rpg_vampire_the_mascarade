// lore_part_bl_salubri.js — Salubri bloodline (Sisyphus build, lore from canon + registry doubt)
// window.LORE_PART_BL_SALUBRI = { bloodlines: [salubri] }
(function (window) {
  'use strict';

  function char(id, name, alias, gen, era, city, place, threat, lore_md) {
    return { id: id, name: name, alias: alias, gen: gen, era: era, location: { city: city, place: place }, threat: threat, lore_md: lore_md, photo: 'assets/img/char_' + id + '.png' };
  }

  var salubri = {
    id: 'salubri',
    name: 'Salubri',
    nickname: 'The Unicorns',
    disciplines: ['Auspex', 'Obeah', 'Valeren'],
    weakness: 'The Salubri can only feed safely from a willing vessel, and the third eye marks them for every hunter in the modern nights.',
    lore_md: [
      'The Salubri were the healers of the First City, and Saulot their founder was the gentlest of the Antediluvians — which is, the archives note drily, exactly why he was the easiest to eat. In 1133 the warlock Tremere diablerized Saulot and stole the clan for himself. The Salubri have been hunted ever since: first by the Tremere who needed the cover story of "soul-thieving demons," later by the Second Inquisition, which files them under the same heading as everything else it cannot explain.',
      'They come in two castes. Healers carry Obeah, the arts of truce between body and soul: they close wounds, walk the sick through dying, and read the state of a soul by pressing a thumb to the forehead. Warriors carry Valeren, the harder discipline — protection sharpened into a weapon. Both castes share the third eye, and both share the weakness that damns them: the Blood of a Salubri is only clean when it is given, and nobody gives blood to a monster. So the healers work hospices, shelters, the places where consent is at least plausible, and they starve beautifully.',
      'SchreckNET files the Salubri under VAL-HEALER and, uniquely, under a soft flag. Node doctrine says a confirmed healer may be logged, not hunted — the healers have never burned a node. The Tremere dispute this. The Tremere dispute most things. Analysts are reminded that the last person who promised the network the Salubri were extinct was a Tremere source, in 1998, one year before three separate hospices reappeared on the wire.'
    ].join('\n\n'),
    chars: [
      char('salubri01', 'Saulot', 'THE THIRD EYE', '3rd', 'First City to 1133 (and after?)', 'unknown', 'the stolen body of a founder', 'high',
        'The founder of the Salubri, diablerized by Tremere in 1133 — the founding theft of the Usurpers. Canon holds him dead; the archives hold him disputed. His dreams leak. Tremeres report a third eye opening in their sorcery at the worst possible moments, and at least one chantry fire has been blamed on "a dream with a patient face." Whether any fragment of Saulot persists inside the man who ate him is the oldest open question in the files. Registry status: disputed, ancestral. Analysts who report Saulot dreams are rotated off the Tremere desk for their own safety.'),
      char('salubri02', 'Samuel', 'THE WANDERING HEALER', '7th', 'Crusades to present', 'Jerusalem', 'a hospice off the Via Dolorosa', 'mid',
        'An elder healer who has worked the same few streets of Jerusalem since the Crusades, through every flag that ever flew there. Samuel treats kindred and kine without asking sect, and his hospice is one of three buildings in the world both the Camarilla and the SI leave alone by mutual cowardice. He taught half the working healers on the network, and the debts are real. His rule, quoted in three dossiers: "I will treat your enemy. I will not treat your ambition."'),
      char('salubri03', 'Adonai', 'THE REFUSER', '6th', 'Roman era to present', 'Mount Gerizim', 'caves above the old threshing floors', 'mid',
        'A warrior-caste elder who refused both the Camarilla and every offer of vengeance against the Tremere, on the grounds that vengeance is a feeding style. Adonai fights only to break sieges: he has ended four blood hunts by walking into them unarmed and being the last thing standing. The SI lost a full strike team on Gerizim in 2016 and reported the engagement as a landslide. SchreckNET keeps his file thin on purpose. Some mountains stay mountains.'),
      char('salubri04', 'Zao-Lat', 'THE SLEEPING PHYSICIAN', '4th', 'Antiquity to present', 'under the Yangtze', 'a sealed river-cavern, location salted', 'high',
        'The oldest confirmed Salubri still on the board, asleep somewhere along the Yangtze since before the Han, tended by a chain of mortal families who have kept the appointment for two thousand years. Zao-Lat heals through dreams when he can be bothered to dream at all. Three dynasties have tried to wake him for war; all three are footnotes. The file exists mostly as coordinates that are wrong on purpose, and one instruction: do not accept any invitation to a healing that arrives before you are sick.'),
      char('salubri05', 'Miriam of Bethany', 'THE BALM', '7th', '1700s to present', 'Haifa', 'a hospice above the port', 'mid',
        'Miriam runs a hospice where dying kindred go to end cleanly — Final Death with witness, without diablerie, without the archive learning anything it should not. Her price is a memory: the patient surrenders one true memory of their worst act, and Miriam carries the ledger nobody may read. The Camarilla sends difficult elders to her quietly. The Tremere send spies; they come back lighter, and refuse to say what was taken.'),
      char('salubri06', 'Ilya Volkov', 'THE WALKING REMEDY', '8th', '1917 to present', 'Kyiv', 'a metro-side clinic two levels down', 'low',
        'A field medic Embraced in the winter the city changed hands four times. Ilya keeps a clinic in the metro, treats whatever walks in — kindred, kine, wounded SI contractors at least twice, because triage does not read badges. His presence is the reason node doctrine lists VAL-HEALER as soft flag: he has salvaged three SchreckNET terminals from raid damage and never once asked what was on them. Invoice: one favor, uncashed, eighteen years.'),
      char('salubri07', 'Dr. Esther Nwosu', 'THE TRIAGE SAINT', '8th', '1960s to present', 'Lagos', 'an under-bridge clinic that moves', 'mid',
        'A mortal trauma surgeon Embraced mid-shift and mid-decision — she was holding a wound closed when her sire\'s hand shook. She finished the shift first. Esther runs a mobile clinic under the bridges, unaffiliated, and treats the blood-diseased as well as the blood-drunk. Her third eye makes cameras useless, which she calls the only modern luxury. The Tremere have tried to purchase her twice. Both envoys were treated, free of charge, for pride.'),
      char('salubri08', 'Chen Ruolan', 'THE ACUPUNCTURE OF SOULS', '9th', '1890s to present', 'Chengdu', 'a teahouse with a back room', 'low',
        'Ruolan practices Obeah the way her mortal family practiced medicine for nine generations: slowly, with needles and patience. She specializes in kindred whose Humanity is failing — not redemption, she is careful to say, only maintenance. The Camarilla considers her harmless because she treats everyone; the SI considers her a rumor because no footage survives her teahouse; the network considers her a fixture and files her tea receipts under operating costs.'),
      char('salubri09', 'Father Marcos Alvarez', 'THE CONFESSIONAL PHYSICIAN', '8th', '1521 to present', 'Seville', 'a hospital chapel, consecrated twice', 'mid',
        'A priest Embraced the year his cathedral finished — he has been "the dying priest" of Seville for five centuries, replaced by his own legend every generation. Marcos hears the confessions of the kindred who are about to do something the Camarilla cannot sanction, and the confessions of the ones already done. His shrine collects objects, not names. The archive is permitted to know he exists, and nothing else. He has healed exactly one Tremere, in 1961, and refuses to say why.'),
      char('salubri10', 'The Fourth Eye', 'THE ONE WHO SEES BACK', 'unknown', 'unknown', 'unknown', 'mirrors, occasionally', 'high',
        'There is a file with no name, no city, and eleven corroborated sightings. In each, a kindred being healed by a Salubri reports — independently, in different languages, centuries apart — that the healer\'s third eye was not looking at them. It was looking past them, at whatever was standing behind. The file notes that every archive photograph processed through node maintainers acquires a third watermark dot that no one added. The protocol is one line long: if the dot opens, close the node. Analysts are not required to believe the file. They are required to keep it.')
    ]
  };

  window.LORE_PART_BL_SALUBRI = { bloodlines: [salubri] };
})(typeof window !== 'undefined' ? window : globalThis);
