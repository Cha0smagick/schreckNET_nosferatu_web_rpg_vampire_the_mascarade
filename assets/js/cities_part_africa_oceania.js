// cities_part_africa_oceania.js — Africa + Oceania (Sisyphus build)
// window.CITIES_PART_AFROCEA = { cities: [...] }
(function (window) {
  'use strict';
  function C(id, name, country, pop_m, sect, prince, kindred_est, notes_md) {
    return { id: id, name: name, country: country, continent: 'Africa & Oceania', pop_m: pop_m, sect: sect, prince: prince, kindred_est: kindred_est, notes_md: notes_md };
  }
  var cities = [
    C('cairo', 'Cairo', 'Egypt', 21.8, 'Independent', 'Ankla (nominal)', 14, 'The Keeper of Names reads the city from a kiosk above the Metro line 2 river crossing. Every newcomer is introduced to the Nile within one night; those who refuse are not logged.'),
    C('alexandria', 'Alexandria', 'Egypt', 5.5, 'Independent', 'Rania Farouk (claim)', 6, 'Festival city three nights a year; the Ministry keeps the lamps lit and the ledgers thin. The drowned library has a reading room, entry by lottery.'),
    C('lagos', 'Lagos', 'Nigeria', 16.6, 'Anarch', 'The Bridge Barons', 12, 'Nine overlapped courts under the bridges; Dr. Nwosu holds truce rights at any clinic. The lagoon causeway keeps its own census and never misses a count.'),
    C('accra', 'Accra', 'Ghana', 5.7, 'Independent', 'Nadia Osei', 4, 'A court of judgments rather than territory — disputes arrive by envelope and leave as verdicts. The harbormaster schedules by tide, not hour.'),
    C('nairobi', 'Nairobi', 'Kenya', 5.6, 'Camarilla', 'Father Emeka Obi (advisory)', 5, 'The Abyss scholar holds no throne and answers no challenge; the court functions because nobody wants the chair. National park fencing hides a warren older than the city.'),
    C('addisababa', 'Addis Ababa', 'Ethiopia', 5.5, 'Independent', 'Idris Aman', 5, 'The Addis keeper trades in beginnings — every Bloodline in the region claims descent through his ledgers. Espresso is served to visitors; none has ever seen him drink.'),
    C('johannesburg', 'Johannesburg', 'South Africa', 6.2, 'Camarilla', 'The Mine Court', 11, 'Ezekiel Mokoena keeps the deep levels; the gold seams run farther than any survey admits. Abandoned shafts are registered as addresses in three dossiers.'),
    C('capetown', 'Cape Town', 'South Africa', 4.8, 'Camarilla', 'Prince Adriana Vosloo', 8, 'A court of shipwrights and storm-readers under Table Mountain. The storm drains of Green Point were catalogued by The Cartographer in 1974 and never since.'),
    C('casablanca', 'Casablanca', 'Morocco', 4.4, 'Independent', 'Sana Harbi', 5, 'The net-judge runs the court from a switching office older than the telephone. Smugglers describe the medina as "honest streets, dishonest doors."'),
    C('algiers', 'Algiers', 'Algeria', 3.4, 'Sabbat (fringe)', 'The Casbah Pack', 4, 'A pack city of staircases and dead ends; Montano\'s old name is still painted in three doorways. Sieges here end by agreement, never by assault.'),
    C('tunis', 'Tunis', 'Tunisia', 2.5, 'Independent', 'The Medina Ledger', 4, 'Sabine of the Long Hour sells from here — hours, not information. The souk closes one alley every winter; the ledger knows which.'),
    C('tripoli', 'Tripoli', 'Libya', 1.3, 'Contested', 'vacant', 3, 'Courts claim it from three seas away; none keep residence. The harbor Ottoman tunnels are the only census anyone agrees on.'),
    C('kinshasa', 'Kinshasa', 'DR Congo', 17.0, 'Anarch', 'The River Parliament', 9, 'A parliament that convenes on barges and dissolves by morning. The Congo keeps the corridors; the kindred keep the minutes.'),
    C('luanda', 'Luanda', 'Angola', 9.3, 'Camarilla', 'Prince Domingos Kiala', 5, 'A port court funded by shipping manifests; the saline fire of 1991 still burns in one file as "ongoing."'),
    C('khartoum', 'Khartoum', 'Sudan', 6.3, 'Contested', 'The Two Niles Court', 4, 'Ruled where the rivers meet: judges sit on opposite banks and verdicts must be read across the water.'),
    C('bamako', 'Bamako', 'Mali', 3.0, 'Independent', 'The Griot of Sands', 3, 'The griot holds the region\'s oral registry — names are true only when he repeats them. His ledger has never once been wrong.'),
    C('abidjan', 'Abidjan', 'Ivory Coast', 5.6, 'Camarilla', 'Prince Kouassi Yao', 4, 'Lagoon plateaus, stilt courts; the plateaus themselves are contested between two towers of the same clan.'),
    C('dakar', 'Dakar', 'Senegal', 3.3, 'Anarch', 'The Ferry Barons', 4, 'Goree ferries run every hour; so does the city\'s oldest information line. Freedom Isle is a neutral ground by standing treaty.'),
    C('dar', 'Dar es Salaam', 'Tanzania', 7.8, 'Independent', 'The Harbour Court', 4, 'The court moves with the harbor clock; welcome is a function of cargo, not clan.'),
    C('maputo', 'Maputo', 'Mozambique', 1.2, 'Independent', 'vacant (neutral port)', 2, 'A declared open port: no diablerie, no hunts, no questions. The gas company basements are mapped by nobody officially.'),
    C('harare', 'Harare', 'Zimbabwe', 1.6, 'Camarilla', 'Prince Tendai Moyo', 3, 'A quiet court of stone birds — the balances are counted every solstice and never found unequal.'),
    C('lusaka', 'Lusaka', 'Zambia', 3.3, 'Independent', 'The Copper Ledger', 2, 'Copper receipts double as Elysium tokens; the mines run their own court two kilometers down.'),
    C('kampala', 'Kampala', 'Uganda', 3.8, 'Contested', 'Seven Hills Council', 4, 'One court per hill; the eighth hill is not spoken of. Lake Victoria\'s tunnels predate the city and refuse surveying.'),
    C('mogadishu', 'Mogadishu', 'Somalia', 2.9, 'Anarch', 'The Harbor Committee', 3, 'A committee of ship-owners keeps the port free; the old town caves are unlit and unlisted.'),
    C('sydney', 'Sydney', 'Australia', 5.4, 'Camarilla', 'Prince Alice Morrow', 8, 'The Tank Stream keeps the court; stormwater gates are the only legal midnight border. Opera House basements are logged as Elysium-adjacent.'),
    C('melbourne', 'Melbourne', 'Australia', 5.2, 'Anarch', 'The Laneway Barons', 7, 'A barony of arcades and laneways that re-map themselves every decade by common law. The sewers of 1890 still carry traffic.'),
    C('brisbane', 'Brisbane', 'Australia', 2.7, 'Camarilla', 'Prince Harold Kellerman', 4, 'Flood memory rules the city: havens are rated by 1893, 1974, 2011 waterlines. The flood tunnels are three cities deep.'),
    C('perth', 'Perth', 'Australia', 2.2, 'Independent', 'The Westgate Court', 3, 'The most isolated court on the board; visitors arrive by sea or not at all. The Maze of the Swan is genuinely a maze.'),
    C('adelaide', 'Adelaide', 'Australia', 1.4, 'Camarilla', 'Prince Eleanor Grey', 3, 'A planned city with planned catacombs — the only grid the Cartographer ever signed and dated.'),
    C('auckland', 'Auckland', 'New Zealand', 1.7, 'Camarilla', 'Prince Waimarie Ngata', 4, 'Volcanic warrens under fifty hills; the council of iwi liaison keeps node access honest. The Sky Tower has a thirteenth floor.'),
    C('wellington', 'Wellington', 'New Zealand', 0.4, 'Anarch', 'The Wind Barons', 2, 'A city of wind, stairs and cables; the cable-car runs to a tunnel the maps disown.'),
    C('suva', 'Suva', 'Fiji', 0.1, 'Independent', 'The Reef Court', 2, 'Reef channels are the roads; high tide is curfew. The court keeps one lighthouse and one grudge.'),
    C('honiara', 'Honiara', 'Solomon Islands', 0.1, 'Independent', 'vacant (open sea-road)', 2, 'War wrecks line the harbor; kindred traffic is registered by the tides, not by any prince.'),
    C('papeete', 'Papeete', 'French Polynesia', 0.03, 'Independent', 'The Lagoon Ledger', 2, 'A ledger kept by moon phases; the court convenes on outriggers, and adjourns when the swell changes.'),
    C('honiara2', 'Port Moresby', 'Papua New Guinea', 0.4, 'Contested', 'Two rival consulates', 2, 'Two consulates share one harbor and ignore each other by treaty. The jungle holds paths older than both.'),
    C('honolulu', 'Honolulu', 'USA', 1.0, 'Camarilla', 'Prince David Kahale', 5, 'Tidal courts under Waikiki; the storm drains were catalogued 1946 and left exactly as found.'),
    C('ankorage', 'Anchorage', 'USA', 0.3, 'Anarch', 'The Long Dark Court', 3, 'A court that rules by season: the court dissolves during the winter dark and re-forms at first thaw. The heated tunnels are the true border.'),
    C('portmoresby2', 'Noumea', 'New Caledonia', 0.1, 'Independent', 'The Nickel Ledger', 2, 'Nickel receipts finance a court smaller than its ledger. The lagoon blue holes are marked forbidden on every chart.'),
    C('portvila', 'Port Vila', 'Vanuatu', 0.05, 'Independent', 'The Land Divers', 2, 'The court measures its years by land dives; a kindred who witnesses the jump is entered in the ledger as "new."'),
    C('suva2', 'Tonga (Nukuʻalofa)', 'Tonga', 0.02, 'Independent', 'The Ancient Court', 2, 'The oldest continuous court in Oceania claims unbroken line to the First City through oral registry; the network logs it with respect and no annotation.')
  ];
  window.CITIES_PART_AFROCEA = { cities: cities };
})(typeof window !== 'undefined' ? window : globalThis);
