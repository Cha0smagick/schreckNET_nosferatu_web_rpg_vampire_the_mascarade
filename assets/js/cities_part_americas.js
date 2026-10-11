// cities_part_americas.js — Americas (Sisyphus build, sewer-network flavored)
// window.CITIES_PART_AMERICAS = { cities: [...] }
(function (window) {
  'use strict';
  function C(id, name, country, pop_m, sect, prince, kindred_est, notes_md) {
    return { id: id, name: name, country: country, continent: 'Americas', pop_m: pop_m, sect: sect, prince: prince, kindred_est: kindred_est, notes_md: notes_md };
  }

  var cities = [
    C('newyork', 'New York', 'United States', 19.6, 'Camarilla', 'Prince Alexander Moran', 32, 'Subway decommission platforms host the court; the abandoned City Hall loop is a records haven (Silas Greer).'),
    C('losangeles', 'Los Angeles', 'United States', 12.5, 'Anarch', 'Baron Council (Free States)', 24, 'The Warrens under Hollywood are a sovereign Nosferatu state; flood channels stretch 7 is not on any city map.'),
    C('chicago', 'Chicago', 'United States', 9.4, 'Camarilla', 'Prince Kevin Jackson', 21, 'The freight tunnels were "sealed" in 1992; the seals are polite fiction. Tommy Hinds collects rent.'),
    C('houston', 'Houston', 'United States', 7.3, 'Anarch', 'Baron Refugio', 9, 'Bayou drainage system doubles as the barony\'s border; oil-money kindred keep the flood maps expensive.'),
    C('miami', 'Miami', 'United States', 6.1, 'Camarilla', 'Victoria Ash (nominal)', 14, 'Camera capital of the coast; the court meets below sea level, where lenses fog and witnesses do not.'),
    C('philadelphia', 'Philadelphia', 'United States', 6.2, 'Camarilla', 'Prince Edwin Church', 11, 'Reading Railroad tunnels and abandoned stations; the First Emancipation archives are a leverage goldmine.'),
    C('dallas', 'Dallas', 'United States', 7.9, 'Camarilla', 'Prince Anne Joste', 10, 'Pedestrian tunnel network downtown is a private hunting preserve; a Nosferatu toll booth operates at Commerce & Lamar.'),
    C('atlanta', 'Atlanta', 'United States', 6.3, 'Camarilla', 'Prince Benison', 13, 'Storm-drain system older than the sewer commission; Theo Bell keeps a standing invitation here.'),
    C('washington', 'Washington DC', 'United States', 6.4, 'Camarilla', 'Prince Marcus Vitel (disputed)', 18, 'The Prince claims a senator\'s face; the SI counts three embassies as friendly. Steam tunnels everywhere; nothing is filed honestly.'),
    C('boston', 'Boston', 'United States', 4.9, 'Camarilla', 'Prince Joyce Holleed', 9, 'Big Dig galleries are the youngest tunnels in the network; Father Malachi Rowe preaches to a packed basement.'),
    C('phoenix', 'Phoenix', 'United States', 5.0, 'Anarch', 'Baron Ibarra-Free Zone', 6, 'Sun-blasted court that moves at 3am; flood-control channels are the only cool routes between havens.'),
    C('denver', 'Denver', 'United States', 3.0, 'Camarilla', 'Prince Jonas Hall', 8, 'Airport conspiracy tunnels are a tourist joke; the real network runs under the old Union Pacific sidings.'),
    C('seattle', 'Seattle', 'United States', 4.0, 'Anarch', 'Baron of the Under-Level', 10, 'The buried first city — Pioneer Square storefronts — is a pedestrian mall by day and a border by night.'),
    C('portland', 'Portland', 'United States', 2.5, 'Anarch', 'Baron Shanghai Tunnels', 7, 'Shanghai tunnels: shanghai-era cellars still connect six blocks. Hospitality is mandatory; the rats enforce it.'),
    C('sanfrancisco', 'San Francisco', 'United States', 4.7, 'Anarch', 'Baron Vannevar Compromise', 12, 'Vannevar Thomas holds the north; the Anarchs hold everything the hills hide. Sewer grid is seismic-retrofit chaos — perfect.'),
    C('montreal', 'Montreal', 'Canada', 4.3, 'Camarilla', 'Prince Pierre Faubert', 14, 'The Underground City is 32 km of legal tunnels; the illegal layer beneath it is where the court actually votes.'),
    C('toronto', 'Toronto', 'Canada', 6.4, 'Camarilla', 'Prince factional council', 13, 'PATH system 30+ km; the city hall gargoyle patch hosts a wounded veteran of the 1918 revolts.'),
    C('vancouver', 'Vancouver', 'Canada', 2.7, 'Anarch', 'Baron Salish Coast', 8, 'Steam-line network downtown; rain scrubs witnesses, drones, and grudges at the same rate.'),
    C('mexicocity', 'Mexico City', 'Mexico', 22.0, 'Independent', 'The Court of Tenochtitlan', 28, 'The Gran Canal drains a sinking metropolis; Nocturna holds the lower levels, and the drain-saint offerings are real.'),
    C('guadalajara', 'Guadalajara', 'Mexico', 5.3, 'Camarilla', 'Prince Severiano', 8, 'Colonial cistern network intact below the historic center; the Inquisition raids the wrong aqueducts.'),
    C('monterrey', 'Monterrey', 'Mexico', 5.1, 'Camarilla', 'Prince Madero', 7, 'Industrial grit, mountain caves, and a princely grudge against the drain-saint who files everything.'),
    C('havana', 'Havana', 'Cuba', 2.1, 'Sabbat', 'Bishop of the Malecón', 9, 'The malecón seawall is a siege line; necropolis galleries hold a fragile truce between bishop and Padre Arcángel.'),
    C('santodomingo', 'Santo Domingo', 'Dominican Republic', 3.5, 'Sabbat', 'Archbishop Calle', 8, 'Colonial-zone cisterns predate the republic; the Sabbat uses them as a school for pack tactics.'),
    C('sanjuan', 'San Juan', 'Puerto Rico', 3.2, 'Camarilla', 'Prince Vargas', 6, 'Fortress walls, one functional storm system, and a princely obsession with census accuracy.'),
    C('kingston', 'Jamaica', 'Jamaica', 1.2, 'Independent', 'Jimmy the Wound (de facto)', 4, 'Scar brokers and gully networks; the "gullies" are drainage channels with opinions.'),
    C('portauprince', 'Port-au-Prince', 'Haiti', 2.9, 'Independent', 'The Cabinet (Doctor Ferreau)', 7, 'Earthquake-chewed infrastructure; the Cabinet keeps the only reliable map of what still stands.'),
    C('bogota', 'Bogota', 'Colombia', 11.0, 'Camarilla', 'Prince Vásquez de Cisternos', 15, 'Altitude thins the Blood\'s patience; cisterns below La Candelaria hold confessions Diego Salas never repeats.'),
    C('medellin', 'Medellin', 'Colombia', 4.1, 'Anarch', 'Baron of the Metrocable', 8, 'Comuna 13 escaleras and storm culverts; the barony is vertical, and the rats own the elevators.'),
    C('caracas', 'Caracas', 'Venezuela', 2.9, 'Anarch', 'Barón Sin Príncipe', 6, 'Blackout economy extends to Blood; when the grid fails, the tunnels light up with trade.'),
    C('quito', 'Quito', 'Ecuador', 2.0, 'Camarilla', 'Prince Atahualpa Line', 5, 'Colonial aqueducts below the equator line; the court files everything under "equatorial exemption."'),
    C('lima', 'Lima', 'Peru', 10.7, 'Camarilla', 'Prince de la Riva', 12, 'Monastery catacombs host a cooperative Harbinger archivist; the princes pretend not to file with him.'),
    C('lapaz', 'La Paz', 'Bolivia', 2.3, 'Independent', 'Council of the Altiplano', 4, 'Thin air, thin Blood; the court conducts business in mine tunnels at 4,000m and does not apologize for the acoustics.'),
    C('santiago', 'Santiago', 'Chile', 6.8, 'Camarilla', 'Prince Mapocho', 11, 'The Mapocho storm channel is the city\'s spine; the prince\'s court has a standing map-correction treaty with the rats.'),
    C('buenosaires', 'Buenos Aires', 'Argentina', 15.4, 'Camarilla', 'Prince Arzobispo Line', 17, 'Recoleta catacombs, plaza tunnels, and a widow\'s consulate that answers to Venice; the toilets of Café Tortoni connect to history.'),
    C('montevideo', 'Montevideo', 'Uruguay', 1.8, 'Anarch', 'Barón Rambla', 5, 'A city that sleeps early; the barony keeps ledger-books older than the republic\'s constitution.'),
    C('saopaulo', 'Sao Paulo', 'Brazil', 22.4, 'Anarch', 'Barão das Gálerias', 22, 'The flooded Pinheiros galleries are a cardinal\'s cathedral (Elda Cailean); the "spill" in her title is literal.'),
    C('riodejaneiro', 'Rio de Janeiro', 'Brazil', 13.6, 'Camarilla', 'Prince Carioca Line', 16, 'Carnival is the city\'s real surveillance state; Cosima Vidal files the aftermath by samba school.'),
    C('brasilia', 'Brasilia', 'Brazil', 4.8, 'Camarilla', 'Prince Utopia', 6, 'A capital built in 1960 with modernist under-crofts; the court insists on symmetry. The rats insist otherwise.'),
    C('salvador', 'Salvador', 'Brazil', 3.9, 'Independent', 'The Terreiro Compact', 7, 'Elevator city — the Ladeira da Barra funiculars connect the upper and lower courts; necromantic truce holds.'),
    C('fortaleza', 'Fortaleza', 'Brazil', 4.1, 'Anarch', 'Barón de las Dunas', 5, 'Coastal dune aquifers; the barony holds the water table and therefore the leverage.'),
    C('manaus', 'Manaus', 'Brazil', 2.2, 'Independent', 'The Floating Court', 4, 'River-boat court on the Rio Negro; the "haven" moves, and the SI sonar keeps losing it among the igarapés.'),
    C('georgetown', 'Georgetown', 'Guyana', 0.9, 'Independent', 'The Canal Council', 3, 'Below sea level, defended by Dutch-era canals; the council files everything and irrigates nothing.'),
    C('paramaribo', 'Paramaribo', 'Suriname', 0.6, 'Independent', 'The Plantation Audit', 3, 'Silas Blackwood keeps the books; the audit never closes.'),
    C('guayaquil', 'Guayaquil', 'Ecuador', 3.0, 'Camarilla', 'Prince Estero', 5, 'The estero salado estuary is the court\'s moat; the prince owns the pump stations.'),
    C('asuncion', 'Asuncion', 'Paraguay', 3.4, 'Independent', 'The Chaco Compact', 4, 'River-port tunnels and a compact older than the war that emptied the country.'),
    C('panama', 'Panama City', 'Panama', 1.9, 'Independent', 'The Canal Registry', 6, 'Every ship, every container, every manifest — the Registry files them all; the canal locks are a border in themselves.'),
    C('sanjose', 'San Jose', 'Costa Rica', 1.4, 'Anarch', 'Barón Sin Fronteras', 4, 'No army, no prince, no pretense; storm drains under the national theater host a very polite anarchy.'),
    C('managua', 'Managua', 'Nicaragua', 1.5, 'Sabbat', 'Bishop Volcán', 5, 'Earthquake-ruined grid; the Sabbat claims the cathedral ruins, the rats claim everything beneath them.'),
    C('tegucigalpa', 'Tegucigalpa', 'Honduras', 1.4, 'Independent', 'The Mine Compact', 3, 'Silver-mine galleries under the old city; the compact is one page and never violated.'),
    C('sansalvador', 'San Salvador', 'El Salvador', 1.8, 'Camarilla', 'Prince Volcan Line', 4, 'Volcanic fault lines dictate haven law; the prince\'s court moves every seven years by custom.'),
    C('belize', 'Belize City', 'Belize', 0.6, 'Independent', 'The Caye Court', 3, 'Caye-hopping court; the network here is a boat schedule and a rumor.'),
    C('kingstoncayman', 'George Town', 'Cayman Islands', 0.07, 'Independent', 'The Ledger Court', 3, 'Banking havens deserve banking vampires; the court files nothing and remembers everything.'),
    C('nassau', 'Nassau', 'Bahamas', 0.4, 'Independent', 'The Privateer Line', 4, 'Abigail Halbrook\'s inheritance; letters of marque still hang, framed, in the harbor tunnel office.'),
    C('havana-adjacent', 'Santiago de Cuba', 'Cuba', 0.5, 'Sabbat', 'Bishop Oriente', 3, 'The revolutionary south; the bishop keeps the Sierra tunnels as a seminary.'),
    C('santo', 'Port-au-Prince Annex', 'Haiti', 0.3, 'Independent', 'The Second Burial', 2, 'File a sighting, file a date, file a discrepancy; the ground here rejects claimants.'),
    C('fortde france', 'Fort-de-France', 'Martinique', 0.4, 'Independent', 'Tante Zabel', 3, 'The coffin ledger has a branch office; Mount Pelée\'s 1902 lesson is the founding law.'),
    C('bridgetown', 'Bridgetown', 'Barbados', 0.3, 'Independent', 'The Plantation Audit (branch)', 3, 'Sugar-money architecture; the audit is not a metaphor.'),
    C('guadalajara-alt', 'Puebla', 'Mexico', 3.3, 'Camarilla', 'Prince Talavera', 6, 'Talavera-tiled facades and a tunnel network rediscovered in 2015; the prince had been using it since 1915.'),
    C('tijuana', 'Tijuana', 'Mexico', 2.2, 'Anarch', 'Barón de la Frontera', 6, 'Storm-channel corridors under the border fence; the baron charges tolls in both directions and files none of it.'),
    C('ciudadjuarez', 'Ciudad Juarez', 'Mexico', 1.5, 'Anarch', 'Barón del Bravo', 4, 'River culverts, maquila shifts, and a barony that runs on the clock of the factories.'),
    C('merida', 'Merida', 'Mexico', 1.1, 'Independent', 'The Cenote Court', 3, 'Cenote water-table tunnels; the court\'s law is older than the Spanish and wetter than the sewer grid.')
  ];

  window.CITIES_PART_AMERICAS = { cities: cities };
})(typeof window !== 'undefined' ? window : globalThis);
