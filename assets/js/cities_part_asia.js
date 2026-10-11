// cities_part_asia.js — Asia + Middle East city registry (Sisyphus build)
// window.CITIES_PART_ASIA = { cities: [...] }
// ids are ascii lowercase and are the MAP SEED for gen_city_maps.mjs — never change an id.
(function (window) {
  'use strict';
  function C(id, name, country, pop_m, sect, prince, kindred_est, notes_md) {
    return { id: id, name: name, country: country, continent: 'Asia', pop_m: pop_m, sect: sect, prince: prince, kindred_est: kindred_est, notes_md: notes_md };
  }
  window.CITIES_PART_ASIA = { cities: [
    C('tokyo', 'Tokyo', 'Japan', 37.4, 'Camarilla (nominal)', 'Tsurumai Shigekuni', 19, 'Tameike-Sanno deep loop is the only confirmed haven street; the Regent of the Shinjuku data-center pays the network in uptime.'),
    C('osaka', 'Osaka', 'Japan', 19.0, 'Camarilla', 'Doi Bunkichi', 9, 'Drowned canal district under the amusement rides; planetarium lessee unknown.'),
    C('kyoto', 'Kyoto', 'Japan', 1.5, 'Independent', 'The Temple Registrar', 6, 'Kindred counted per temple, not per district. Nobody has ever listed the Registrar\'s own temple.'),
    C('seoul', 'Seoul', 'South Korea', 25.6, 'Camarilla', 'Baek In-su', 14, 'Subway line 9 ends two stations past the last public station.'),
    C('busan', 'Busan', 'South Korea', 3.4, 'Camarilla', 'Madam Ok', 5, 'Underground shopping arcades make honest warrens; the port tunnels do not appear on port maps.'),
    C('beijing', 'Beijing', 'China', 21.5, 'Independent (Kuei-jin border)', 'The Ledger Master', 11, 'Western kindred hold leases, not the city. Everyone files the same warning: the sewers have landlords.'),
    C('shanghai', 'Shanghai', 'China', 29.2, 'Independent', 'Qian Longwei', 13, 'The Bund vaults predate the skyline. Flood tunnels from 1937 still run, still occupied.'),
    C('shenzhen', 'Shenzhen', 'China', 17.6, 'Independent', 'Wei Lang', 8, 'Ministry corporate haven; the "incubator floors" are exactly what they sound like.'),
    C('guangzhou', 'Guangzhou', 'China', 18.7, 'Independent', 'Old Yu', 7, 'Qing-era drainage under the garment district; Court of Tenochtitlan sends observers, is sent home.'),
    C('hongkong', 'Hong Kong', 'China', 7.5, 'Contested', 'The Jade Auditor (claim)', 12, 'Kuei-jin flats, Giovanni consulates, and one police station nobody raids.'),
    C('taipei', 'Taipei', 'Taiwan', 7.0, 'Independent', 'Lin Meiyu', 6, 'Ximending tunnels from the Japanese era; the Independent court files taxes.'),
    C('chengdu', 'Chengdu', 'China', 16.3, 'Independent', 'Madam Yang Xue', 5, 'Teahouse diplomacy only. Loud kindred do not get second meetings.'),
    C('xian', 'Xi\'an', 'China', 12.9, 'Independent', 'The Terracotta Court', 4, 'The court has not confirmed or denied the necropolis rumor since 1987.'),
    C('mumbai', 'Mumbai', 'India', 20.7, 'Camarilla (franchise)', 'The Monsoon Broker', 12, 'Storm drains run the monsoon ledger; the Broker has never lost a resident to a flood.'),
    C('delhi', 'Delhi', 'India', 32.9, 'Camarilla (franchise)', 'Sahib-e-Naqsh', 15, 'Tughlaq-era baoli stepwells serve as havens; the deep well under Feroz Shah Kotla is listed DO NOT DRAIN.'),
    C('kolkata', 'Kolkata', 'India', 15.0, 'Independent', 'The Charnel Chapter', 8, 'Nagaraja-adjacent. The anatomy college keeps its own registry and does not share.'),
    C('chennai', 'Chennai', 'India', 11.2, 'Camarilla (franchise)', 'Ravi Chandrasekar', 6, 'Fish-market freezers honor an old toll. The port authority stopped asking.'),
    C('bengaluru', 'Bengaluru', 'India', 13.2, 'Camarilla (franchise)', 'The Pipeline Investor', 7, 'Tech corridor: the most surveilled city on the network with the least verified footage.'),
    C('hyderabad', 'Hyderabad', 'India', 10.3, 'Camarilla (franchise)', 'The Qutb Regent', 5, 'Charminar cellars connect by a line the Nizam\'s engineers never filed.'),
    C('karachi', 'Karachi', 'Pakistan', 16.8, 'Contested', 'no confirmed prince', 9, 'Three courts claim it; all three use the same storm drains and pretend otherwise.'),
    C('lahore', 'Lahore', 'Pakistan', 13.1, 'Camarilla (franchise)', 'The Walled City Elder', 6, 'Mughal cisterns under the old city; the elder has not been seen since 1997 and still answers mail.'),
    C('dhaka', 'Dhaka', 'Bangladesh', 22.5, 'Independent', 'The Ash Court', 7, 'The Week of Nightmares scarred the whole district. Ila Bhattacharya files from the edge and pays in warnings.'),
    C('kathmandu', 'Kathmandu', 'Nepal', 1.5, 'Independent', 'The Charnel Librarian', 4, 'Sharadha Kael shelves the dead by nation of origin. Do not request shelf access.'),
    C('colombo', 'Colombo', 'Sri Lanka', 2.4, 'Independent', 'Kali Sundaram', 3, 'Canal tombs sing on Equinox nights. The file is audio-only and 41 minutes long.'),
    C('bangkok', 'Bangkok', 'Thailand', 10.7, 'Contested', 'no confirmed prince', 10, 'Canal khlongs, shrine politics, and a court that changes its name with the tide.'),
    C('hochiminh', 'Ho Chi Minh City', 'Vietnam', 9.3, 'Camarilla (franchise)', 'The Cu Chi Tenant', 5, 'The tenant has never confirmed the tunnel network and never left.'),
    C('hanoi', 'Hanoi', 'Vietnam', 8.1, 'Independent', 'Old Comrade Tran', 4, 'The elder files his reports in carbon copy. They are always accurate.'),
    C('singapore', 'Singapore', 'Singapore', 5.9, 'Camarilla', 'Catherine Yong', 9, 'The Sovereign runs the tightest registry in Asia; the storm system is a second city she owns the deeds to.'),
    C('jakarta', 'Jakarta', 'Indonesia', 10.6, 'Independent', 'The Flood Prince', 8, 'A city sinking faster than its court can lie about. The Flood Prince is literal.'),
    C('surabaya', 'Surabaya', 'Indonesia', 3.0, 'Independent', 'The Dock Elder', 3, 'Dutch-era canals; the elder trades in shipping manifests nobody else can read.'),
    C('manila', 'Manila', 'Philippines', 14.4, 'Camarilla (franchise)', 'The Intramuros Regent', 11, 'Walled-city dungeons, North Cemetery undertakers, and a drainage system the war built.'),
    C('cebu', 'Cebu', 'Philippines', 3.2, 'Camarilla (franchise)', 'The Strait tenant', 3, 'Spanish-era fortifications make the best havens; the tenant is polite about it.'),
    C('kualalumpur', 'Kuala Lumpur', 'Malaysia', 8.4, 'Camarilla', 'The Twin Tenant', 6, 'The towers have basements the fire marshal has never inspected.'),
    C('tashkent', 'Tashkent', 'Uzbekistan', 2.6, 'Independent', 'The Silk Warden', 3, 'One of the deepest metro systems on earth. The warden knows which platforms are lies.'),
    C('almaty', 'Almaty', 'Kazakhstan', 2.0, 'Independent', 'The Steppe Tenant', 2, 'Soviet-era heating galleries run for kilometers. The tenant walks them in winter.'),
    C('baku', 'Baku', 'Azerbaijan', 2.3, 'Independent', 'Anton Grigoriev', 5, 'The oil catechist holds the Old City. Flame fronts from the petroleum era still gutter in the stones.'),
    C('tehran', 'Tehran', 'Iran', 9.5, 'Independent', 'The Qanat Keeper', 7, 'Firuzeh Alavi keeps the thousand-year water galleries and the law that no rite be transcribed.'),
    C('baghdad', 'Baghdad', 'Iraq', 7.5, 'Contested', 'no confirmed prince', 8, 'The Laughing Blade claims jurisdiction every few decades and withdraws. The drains remember every siege.'),
    C('jerusalem', 'Jerusalem', 'Israel', 0.9, 'Contested (closed city)', 'no prince on file', 6, 'Samuel\'s hospice is the only address anyone will confirm. All courts file the same treaty: no embraces within the walls.'),
    C('haifa', 'Haifa', 'Israel', 0.3, 'Neutral', 'Miriam of Bethany (host)', 3, 'The hospice above the port accepts all courts and serves no one twice.'),
    C('riyadh', 'Riyadh', 'Saudi Arabia', 7.7, 'Independent', 'The Empty Prince', 4, 'The prince has not been seen. His court insists this is normal. The dry wells disagree.'),
    C('dubai', 'Dubai', 'UAE', 3.5, 'Independent', 'The Serpent Under Glass', 7, 'The vault below the marina draws triple power three nights a year. Nobody schedules maintenance those nights.'),
    C('doha', 'Doha', 'Qatar', 2.4, 'Independent', 'The Pearl Tenant', 3, 'Pre-oil pearl-diving wells under the old quarter; the tenant sells silence by the weight.'),
    C('kuwaitcity', 'Kuwait City', 'Kuwait', 3.1, 'Independent', 'The Oil Ledger', 3, 'Burning wells, 1991: the elder filed the only first-person account and sealed it.'),
    C('amman', 'Amman', 'Jordan', 4.0, 'Neutral', 'The Crossing Elder', 3, 'Roman cisterns under the citadel; the elder sells passage to all courts and never sets price twice.'),
    C('beirut', 'Beirut', 'Lebanon', 2.4, 'Contested', 'no confirmed prince', 5, 'Power cuts make honest dark. Three courts share the grid and the grudges.'),
    C('damascus', 'Damascus', 'Syria', 2.5, 'Independent (sealed)', 'The Old House', 4, 'The Old House has held the old city since before the list of things it predates ran out.'),
    C('ankara', 'Ankara', 'Turkey', 5.7, 'Camarilla (Ankara line)', 'The Ataturk Regent', 5, 'The regent keeps the mausoleum perimeter. Nobody has asked why, and he has not offered.'),
    C('yerevan', 'Yerevan', 'Armenia', 1.1, 'Independent', 'The Winter Mourner', 3, 'Nane Sarma tends crypts older than the city\'s name and corrects the network\'s dossiers by mail.'),
    C('tbilisi', 'Tbilisi', 'Georgia', 1.2, 'Independent', 'The Sulphur Tenant', 2, 'Bath-district tunnels; the tenant pays the sulphur tax in warnings.')
  ] };
})(typeof window !== 'undefined' ? window : globalThis);
