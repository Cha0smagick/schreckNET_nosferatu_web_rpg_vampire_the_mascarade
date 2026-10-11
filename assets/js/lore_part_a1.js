// SchreckNET lore expansion — part A1 (Brujah, Gangrel, Malkavian)
// Plain ES5, window.* globals, no imports. See EXPANSION_SCHEMA.md.

window.LORE_PART_A1 = {
  clans: [
    {
      id: "brujah",
      name: "Brujah",
      nickname: "The Rabble",
      disciplines: ["Celerity", "Potence", "Presence"],
      weakness: "Their blood boils with the founder's stolen fury, making them far more prone to frenzy than any other clan.",
      lore_md: "Troile tore the clan into being. The youngest child of Ilyes, third of the third generation, Troile refused to kneel when the Antediluvians divided the night among their get. The old records disagree on what happened in that final meeting. The version the Rabble tell is simple: Troile diablerized Ilyes and took the clan by force, and every Brujah since has carried the founder's fury in the blood. Whether that is history or founding myth, no one alive can prove. What is provable is the temper. Brujah frenzy faster, harder, and more often than any other clan, and the Camarilla has never let them forget it.\n\nCarthage was the dream. For centuries the clan built a city where kindred and kine shared the streets, where the Ventrue's pyramid had no foundation, where Troile's childer ruled by argument instead of fear. Rome burned it in 146 BC, and the Ventrue claim the honor. The Brujah remember it as the first betrayal, and they have been settling the account ever since, one prince at a time.\n\nThe clan joined the Camarilla at the Convention of Thorns in 1493, under protest, and has treated the sect as a landlord treats a bad tenant: pay the rent, keep the receipts, wait for the chance to renegotiate. That chance came in 1944 when Jeremy MacNeil's revolt stripped the Camarilla from the American West Coast and raised the Anarch Free States. Half the clan's modern identity lives in that split. Camarilla Brujah play the idealist inside the machine. Anarch Brujah burn the machine. Both insist they are the true heirs of Carthage.\n\nIn the modern nights the Rabble work the streets: union halls, squats, campuses, precincts, barbershops, any room where someone is angry about the right thing. Elders like Menele and Critias play longer games from Chicago, while archons like Theo Bell prove the clan can wear the Camarilla's colors without choking. The weakness is the same in every era. The Beast sits close to the skin. A Brujah who cannot master the rage becomes a cautionary tale, and the clan has more cautionary tales than any other.",
      chars: [
        {
          id: "brujah01",
          name: "Troile",
          alias: "THE FOUNDER'S BLADE",
          gen: "3rd",
          era: "Antiquity to present",
          location: { city: "Unknown", place: "Beneath the salt of ruined Carthage, some say" },
          threat: "high",
          lore_md: "The third generation's most famous act of violence is also its least documented. Troile, childe of Ilyes, is named in the Book of Nod as the one who drained the clan's founder and claimed the bloodline as a prize. The Erciyes fragments hint the elders saw it coming and did nothing. Registry attributions grow thin here; most of what SchreckNET holds on Troile is secondhand prophecy and clan myth dressed as report.\n\nWhat the reports agree on is the temper. Troile's fury supposedly lives in every Brujah's veins, which is why elders speak the name quietly. The founder's location is unknown. Some anarchs claim Troile sleeps under the salt of ruined Carthage, waiting for the clan to finish what Rome started. Camarilla archivists file that under hope. Either way, no verified sighting exists in the modern nights, and the ones that do circulate are dated, contradictory, and conveniently unverifiable. The clan's oldest ghost remains exactly that.",
          photo: "assets/img/char_brujah01.png"
        },
        {
          id: "brujah02",
          name: "Menele",
          alias: "THE PHILOSOPHER TYRANT",
          gen: "4th",
          era: "Antiquity to present",
          location: { city: "Chicago", place: "Beneath the Loop" },
          threat: "high",
          lore_md: "Menele of Athens came to Carthage as an outsider and stayed as a problem. The registry credits him with helping to arrange the city's destruction, then spending the next two millennia avoiding the clan's judgment for it. He surfaced in the New World and settled beneath Chicago, where he has played the long game ever since, moving pawns through intermediaries and rarely granting audience.\n\nHis feud with Helena is the oldest running war in the city's kindred history. The two elders burned each other's assets for centuries until both went to ground, and Chicago's princes have inherited the ceasefire like a debt. Menele's current status is disputed. Some reports place him in torpor under the Loop. Others insist he wakes for a decade every century to reset the board. What is certain is his influence: Camarilla Chicago votes the way old money points, and old money points at Menele. The anarchs of the city measure every prince by how much of Menele's hand they can see.",
          photo: "assets/img/char_brujah02.png"
        },
        {
          id: "brujah03",
          name: "Helena",
          alias: "THE SLEEPING QUEEN",
          gen: "4th",
          era: "Antiquity to present (torpor)",
          location: { city: "Chicago", place: "Torpor beneath Lake Michigan" },
          threat: "high",
          lore_md: "Helena ruled Carthage's nights as its most beautiful advocate, and the registry's oldest fragments describe a kindred who could hold a crowd with her voice alone. When Rome burned the city she fled, fought, and eventually went to ground beneath what would become Chicago, where she has slept for centuries in torpor.\n\nHer war with Menele predates the city and outlasted every prince who tried to mediate. The last confirmed escalation left both elders wounded and buried, and the city's kindred have treated the ground beneath the lake as cursed real estate ever since. Cults keep forming around her name. The most recent was dismantled by the Sheriff's people in the 1990s, though rumors of a new one surface every few years. Whether Helena dreams or stirs, every faction in Chicago prices her into their plans. A sleeping fourth generation elder is still a fourth generation elder, and the lake keeps its secrets at a premium.",
          photo: "assets/img/char_brujah03.png"
        },
        {
          id: "brujah04",
          name: "Anath",
          alias: "THE CHAMPION OF CARTHAGE",
          gen: "4th",
          era: "Antiquity to present",
          location: { city: "Tunis", place: "Last credible sighting near the old harbor road" },
          threat: "high",
          lore_md: "Anath appears in the Carthaginian fragments as the clan's champion, a warleader who held the walls while the philosophers argued. The registry attribution is weak; most of what survives is carved on stone that has changed hands three times. What is consistent is the reputation: Anath was the blade of the dream, and the dream's enemies learned to fear the name.\n\nAfter the fall, the trail goes cold. Reports place Anath across the Mediterranean for centuries, then silent entirely. One 19th century letter from a Tunisian warren claims a scarred elder matching the description passed through, asking after Troile. No follow-up exists. The Camarilla keeps a standing flag on the name, and the anarchs treat it as a rallying story. If Anath still walks, the clan's oldest soldier is unaccounted for, and both sects find that thought uncomfortable for different reasons. The salt flats keep whatever answer exists.",
          photo: "assets/img/char_brujah04.png"
        },
        {
          id: "brujah05",
          name: "Critias",
          alias: "THE ATHENIAN",
          gen: "5th",
          era: "Antiquity to present",
          location: { city: "Chicago", place: "A Gold Coast townhouse with a private library" },
          threat: "mid",
          lore_md: "Critias of Athens is the clan's philosopher, one of the few Brujah elders the Camarilla can invite to dinner without checking the silverware. The registry traces him to the circle around the historical Critias, though the attribution carries the usual doubt. He has spent two millennia arguing that the clan's rage is a tool, not a curse, and that Carthage failed because it trusted passion over structure.\n\nHe settled in Chicago and operates as the city's quiet conservative, a counterweight to the anarchs who claim his blood. Younger Brujah find him insufferable; princes find him useful. He mentors selectively, writes under pseudonyms, and attends Elysium more reliably than any Ventrue in the city. His current project, per intercepted correspondence, is a history of the clan that contradicts both the anarch and Camarilla versions of Carthage. Neither sect is eager to see it finished, and both have offered him quiet incentives to stop. He has accepted the incentives and kept writing.",
          photo: "assets/img/char_brujah05.png"
        },
        {
          id: "brujah06",
          name: "Tyler",
          alias: "HARDESTADT'S END",
          gen: "5th",
          era: "1400s to present",
          location: { city: "Vienna", place: "Rumored Ventrue custody, unconfirmed" },
          threat: "high",
          lore_md: "Tyler did the thing every elder said was impossible: a fifth generation Brujah hunted down Hardestadt the Elder, a founder of the Camarilla's order, and drank him to nothing. The diablerie lit the fuse of the Anarch Revolt. For a few decades Tyler was the most dangerous kindred in Europe, living proof that the young could eat the old.\n\nThe account came due. The registry's records of Tyler's end disagree: destroyed at the Revolt's suppression, or bound and hidden by the Ventrue as a trophy and a warning. SchreckNET flags the name as unresolved. What is not disputed is the legacy. Every anarch who dreams of eating a prince is quoting Tyler, and every prince who checks the locks at night is remembering. The clan keeps the story alive precisely because both reactions are useful. The Vienna rumor persists because the Ventrue have never once denied it on the record, and silence, in the Jyhad, is a kind of confession.",
          photo: "assets/img/char_brujah06.png"
        },
        {
          id: "brujah07",
          name: "Theo Bell",
          alias: "THE ARCHON'S SHADOW",
          gen: "8th",
          era: "1800s to present",
          location: { city: "London", place: "A Camarilla chancery near Whitehall" },
          threat: "high",
          lore_md: "Theo Bell built his reputation the honest way: as muscle that could think. Sired in the 19th century, he worked as an enforcer and sheriff on the American West Coast, holding the line for princes who never quite trusted a Brujah with a badge. The distrust was mutual and professional. Bell kept the peace, filed the reports, and watched the Camarilla's machinery from the inside.\n\nThe machinery eventually noticed. He rose to archon, the sect's field enforcer at the highest level, and now carries the Justicars' authority across domains that would rather not see him. He is the clan's proof of concept inside the Camarilla: a Rabble who mastered the rage and turned it into a career. Anarchs call him a sellout to his face. He does not argue. The registry notes he files his reports in full, which in the Camarilla is its own kind of rebellion. Domains that ignore his warnings tend to stop appearing in the records.",
          photo: "assets/img/char_brujah07.png"
        },
        {
          id: "brujah08",
          name: "Smiling Jack",
          alias: "THE GRINNING ANARCH",
          gen: "7th",
          era: "1800s to present",
          location: { city: "Los Angeles", place: "An abandoned warehouse district near the river" },
          threat: "high",
          lore_md: "Jack was embraced in the 19th century and has been a problem for authority ever since. The registry's earliest records show him working the docks and rail yards, organizing kindred labor the way his mortal contemporaries organized strikes. By the 20th century he was an anarch icon, the grinning face on every recruitment story the movement tells about itself.\n\nHe fought in the Free States war, survived the purges, and remains active in Los Angeles, where his name still opens doors and closes ranks. He mentors childe by childe, teaches the basics with a crowbar's patience, and disappears for years at a stretch. The Camarilla keeps a file and an open warrant. Neither has produced results. Reports that he has finally been destroyed surface every decade and are wrong every decade. The smile, presumably, remains. Young anarchs are told to find him if they can. The ones who do rarely say what the lesson was.",
          photo: "assets/img/char_brujah08.png"
        },
        {
          id: "brujah09",
          name: "Jeremy MacNeil",
          alias: "THE FREE STATES SPEAKER",
          gen: "8th",
          era: "1900s to present",
          location: { city: "Los Angeles", place: "The barony halls of the Anarch Free States" },
          threat: "high",
          lore_md: "Jeremy MacNeil is the reason the American West Coast flies anarch colors. A Camarilla kindred who ran out of patience, he organized the revolt of 1944 that swept the sect's princes out of California and raised the Anarch Free States in their place. The registry credits him with the strategy and, more importantly, with the restraint: he won the war and then stopped fighting it.\n\nHe served as the Free States' chief statesman for decades, brokering between barons who agreed on nothing except hating princes. His current status is disputed; some reports say he has stepped back, others that he is destroyed, others that he is exactly where he always was, listening. The movement he built has outlived his daily presence, which is the only monument he ever wanted. Every baron who signs the Free States accords is working from his playbook, and every prince on the coast checks the accords before checking anything else.",
          photo: "assets/img/char_brujah09.png"
        },
        {
          id: "brujah10",
          name: "Salvador Garcia",
          alias: "THE BARON OF THE SOUTH",
          gen: "8th",
          era: "1900s to present",
          location: { city: "San Diego", place: "A fortified waystation on the border barony's edge" },
          threat: "mid",
          lore_md: "Salvador Garcia holds the southern border of the anarch map. The registry traces him to the early Free States era, a soldier of MacNeil's revolt who took the border baronies and never gave them back. He runs his territory like a garrison commander: firm borders, clear tribute, no princes, and no debates about any of it.\n\nHis relationship with the rest of the movement is transactional. He attends the grand councils, votes, and goes home. Younger anarchs find him rigid; he finds them expendable, and says so at councils where everyone can hear. The Camarilla has tested his borders twice in living memory and paid for it both times, which bought him a decade of quiet each time. Current reports place him consolidating influence along the smuggling routes, where kindred traffic and mortal traffic blur into one economy. He is not a visionary and has never claimed to be. He is a wall, and the movement needs walls more than it admits.",
          photo: "assets/img/char_brujah10.png"
        },
        {
          id: "brujah11",
          name: "Patricia of Bolingbroke",
          alias: "THE COURT'S THORN",
          gen: "8th",
          era: "1600s to present",
          location: { city: "London", place: "A townhouse salon frequented by both sects' couriers" },
          threat: "mid",
          lore_md: "Patricia of Bolingbroke is the clan's great exception: a Brujah the Camarilla court actually likes. Embraced in the 17th century, she learned early that the Rabble's temper is a liability in a salon and an asset everywhere else. She built a career as the court's honest broker, the harpy who tells princes what their favorites will not.\n\nHer loyalty is to the game, not the sect, and both sides know it. Anarchs use her as a channel when they want a message delivered without blood. Princes use her as a barometer for when the street is about to boil. The registry's file on her is thick with social intelligence and thin on violence, which is exactly how she prefers it. She has survived every purge of the modern nights by being useful to whoever won. That is not cowardice. That is the long game, played in pearls, and she has outlasted every player who sneered at it.",
          photo: "assets/img/char_brujah11.png"
        },
        {
          id: "brujah12",
          name: "Hannibal of Tyre",
          alias: "THE MERCHANT OF BLOOD",
          gen: "5th",
          era: "Antiquity, presumed destroyed 146 BC",
          location: { city: "Carthage", place: "The ruins of the old harbor quarter" },
          threat: "high",
          lore_md: "Hannibal of Tyre was Carthage's quartermaster, the Brujah who kept the dream fed while the philosophers argued about it. Fictional to the registry but consistent with the era's records, he ran the grain routes, the harbor bribes, and the mortal politics that let a city of kindred ideals survive as long as it did.\n\nHe was reportedly destroyed in the fall of 146 BC, holding the harbor while the elders evacuated. The clan's oral tradition keeps him as the patron of practical idealists: the ones who fund the movement, fix the books, and never give the speeches. A Carthaginian coin bearing his seal circulates among anarch cells as a token of trust, passed hand to hand when words would be recorded. Whether any of the story is true is beside the point. The movement runs on people who believe it, and the coin has never once been counterfeited.",
          photo: "assets/img/char_brujah12.png"
        },
        {
          id: "brujah13",
          name: "Zenobia the Unchained",
          alias: "THE BREAKER OF CHAINS",
          gen: "6th",
          era: "Antiquity to present",
          location: { city: "Alexandria", place: "Catacombs beneath the old quarter" },
          threat: "mid",
          lore_md: "Zenobia broke her own chains before anyone offered to. A gladiator in the eastern arenas, she was embraced by a passing Brujah who mistook her fury for potential and was correct. The registry's fragments place her in Alexandria within a decade, freeing slaves by night and recruiting the ones who could keep quiet.\n\nShe has spent two millennia as the clan's conscience on the question of property, kindred and kine alike. Her cells operate on a simple rule: no one owns anyone. Princes find her ideology expensive. Anarchs find her uncompromising. She has outlived both by staying mobile, surfacing wherever the trade in people flares, and vanishing before the response arrives. Current reports place her in North Africa, moving between coastal warrens that owe her favors older than their princes. The registry flags the name on every trafficking watchlist it maintains, and the watchlists are the only place her name appears on schedule.",
          photo: "assets/img/char_brujah13.png"
        },
        {
          id: "brujah14",
          name: "Marcel Duret",
          alias: "THE CITIZEN OF THE TERROR",
          gen: "9th",
          era: "1780s to present",
          location: { city: "Paris", place: "The catacombs below the 5th arrondissement" },
          threat: "mid",
          lore_md: "Marcel Duret was embraced into the Revolution and never really left it. A Parisian printer's son turned kindred agitator, he spent 1793 in the sections, feeding the committees rhetoric and the warrens intelligence. The registry's Paris files describe a kindred who believed the Revolution's promise applied below the waterline too.\n\nThe Terror tested that belief and the Thermidorian reaction broke it. Duret survived the purge that ate his sires and mentors, retreated to the catacombs, and rebuilt as a quieter kind of radical. He has surfaced at every French convulsion since: 1830, 1848, 1871. Each time the Camarilla's Paris court braces, and each time he is gone before the arrests begin. He is old now, by clan standards, and patient in the way only the twice-betrayed manage. The catacombs hold his presses, his archives, and his list of names. The list has never leaked. That is the scariest thing about him.",
          photo: "assets/img/char_brujah14.png"
        },
        {
          id: "brujah15",
          name: "Colette Marchand",
          alias: "THE RED PETAL",
          gen: "10th",
          era: "1870s to present",
          location: { city: "Paris", place: "A Montmartre garret above a shuttered cabaret" },
          threat: "low",
          lore_md: "Colette Marchand came to kindred life out of the Commune's wreckage, embraced in 1871 by a Brujah who wanted one witness to survive the week of blood. She kept the witness's bargain: she remembers everything and repeats the parts that matter.\n\nShe works Montmartre as a fixer and archivist, maintaining the movement's memory in a city that prefers its radicals dead or fashionable. Her haven doubles as a library of suppressed pamphlets, kindred and mortal, and her price for access is a story the collector cannot prove. The Paris court tolerates her because she trades fairly and never organizes. The anarchs trust her because she has never sold a name. Low threat, high value, and exactly as dangerous as her archives. The garret's rent has been paid by three different princes, each believing someone else approved it. She has never corrected the error.",
          photo: "assets/img/char_brujah15.png"
        },
        {
          id: "brujah16",
          name: "Ernst Vogel",
          alias: "THE SPARTACIST",
          gen: "9th",
          era: "1900s to present",
          location: { city: "Berlin", place: "A squatted factory in Wedding" },
          threat: "mid",
          lore_md: "Ernst Vogel was a machinist before he was kindred, and the trade shows. Embraced in Berlin before the Great War, he spent 1919 on the barricades with the Spartacists, the only clan elder in the city fighting for the same side as his mortal comrades. The registry's Weimar files read like a strike bulletin with fangs.\n\nThe Freikorps broke the rising and the kindred court broke the warrens behind it. Vogel survived by being harder to kill than the schedule allowed. He has run Berlin's radical cells through every German government since, adapting tactics and never the goal. The current nights find him in a squatted factory in Wedding, training childer who think the Free States are ancient history. He corrects them with a machinist's precision: history is a weapon you hold, not a story you tell. The Berlin court has stopped scheduling raids on the factory. The last one is still a lesson.",
          photo: "assets/img/char_brujah16.png"
        },
        {
          id: "brujah17",
          name: "Rosa Kellner",
          alias: "THE TYPEWRITER AGITATOR",
          gen: "11th",
          era: "1920s to present",
          location: { city: "Berlin", place: "A print shop behind a Kreuzberg laundrette" },
          threat: "low",
          lore_md: "Rosa Kellner runs the print shop. In the clan's economy of agitators, someone has to produce the paper, and hers is the oldest continuously operating kindred press in Europe. Embraced in Weimar Berlin, she learned the trade from Vogel's generation and improved on it: faster, quieter, better distributed.\n\nHer output ranges from anarch theory to forged Camarilla credentials, and the registry has never traced a press run back to the source. She works alone behind a legitimate commercial front, sells to both sects, and refuses every offer of a title. Her rule is simple: the words move, the printer stays. The Berlin court knows the shop exists. Proving it is another matter, and the one attempt is still a cautionary tale in the city's archives. She keeps a spare press in the catacombs under Vogel's factory. The two have never been seen in the same room. The paper suggests otherwise.",
          photo: "assets/img/char_brujah17.png"
        },
        {
          id: "brujah18",
          name: "Deacon Reyes",
          alias: "THE STREET PREACHER",
          gen: "10th",
          era: "1960s to present",
          location: { city: "Chicago", place: "A South Side community hall" },
          threat: "mid",
          lore_md: "Deacon Reyes was preaching on the South Side in the summer of 1968 when the city burned, and he kept preaching through the smoke. Embraced that decade by a Brujah who wanted the movement to have a voice the neighborhood would actually follow, he built his cell around a community hall and never left.\n\nHis operation is mutual aid with fangs: protection for the block, quiet pressure on the precinct, and a strict rule against feeding on the people you claim to serve. The Chicago court classifies him as contained. The classification is generous. Reyes has survived every purge since the sixties by being indispensable to the streets and invisible to the towers. He is getting old for the work and shows no sign of stopping. The hall is full most nights, the collection plate funds the warren, and the sermons are shorter than they used to be. The point, he says, is the walk afterward.",
          photo: "assets/img/char_brujah18.png"
        },
        {
          id: "brujah19",
          name: "Marla Okafor",
          alias: "THE UNION ORGANIZER",
          gen: "12th",
          era: "1990s to present",
          location: { city: "Chicago", place: "The back room of a West Side bar" },
          threat: "low",
          lore_md: "Marla Okafor organizes. Embraced in the 1990s out of Chicago's labor movement, she brought the toolkit with her: one-on-ones, house meetings, escalation ladders. Her cell runs the West Side's kindred mutual aid network, and the Camarilla's analysts have twice misread it as a gang. It is a union.\n\nShe plays the long game the elders taught her generation to distrust: work inside the structures, document everything, strike only when the vote is counted. Her relationship with the court is professional hostility. She attends the required audiences, files the required forms, and organizes in the gaps between them. The registry's current assessment calls her the most effective young Brujah in the city. She has the file framed, metaphorically, above the bar's back door. The work continues. The dues are paid in blood and favors, and the strike fund has never once been empty.",
          photo: "assets/img/char_brujah19.png"
        },
        {
          id: "brujah20",
          name: "Viktor Havel",
          alias: "THE PRAGUE BRICK",
          gen: "11th",
          era: "1980s to present",
          location: { city: "Prague", place: "A cellar bar under Wenceslas Square" },
          threat: "low",
          lore_md: "Viktor Havel came out of the Prague underground in the years the Wall came down, embraced by an anarch who needed muscle that could read. He kept the reading and lost the patience. Two decades of bar work, door work, and courier work made him the city's reliable brick: not clever, not subtle, always there.\n\nHe holds the cellar bar under Wenceslas Square that serves as Prague's anarch common room, a neutral ground the court tolerates because breaking it would cost more than it buys. His rules are posted by the door and enforced without discussion. Younger kindred mistake his simplicity for softness once, at most. The registry's file is short and accurate: low threat, high reliability, present at every incident that mattered and none that did not. He reads in the empty hours after close, mostly history, mostly the parts about what happens to collaborators. The bar has never been raided. Nobody wants to be the first.",
          photo: "assets/img/char_brujah20.png"
        }
      ]
    },
    {
      id: "gangrel",
      name: "Gangrel",
      nickname: "The Outlanders",
      disciplines: ["Animalism", "Fortitude", "Protean"],
      weakness: "Every frenzy leaves its mark on the body, animal features that never fully fade from their skin.",
      lore_md: "Ennoia walked out of the second city and never came back. The clan's founder is named in the Book of Nod as the one who chose the wild over the walls, and her get have kept the bargain for ten thousand years. The Gangrel are the Outlanders: the kindred who live outside the courts, outside the cities, and outside the patience of everyone who needs paperwork to feel safe. Their disciplines tell the story. Protean reshapes the body into something the night can use. Fortitude shrugs off what should kill. Animalism speaks to the beasts that were here first.\n\nThe clan's relationship with the Camarilla has always been a lease, not a deed. Gangrel served as the sect's scouts, trackers, and enforcers for centuries, valued precisely because they owed the cities nothing. That arrangement ended in 1999 when Justicar Xaviar walked out of a Camarilla conclave and took the clan's formal membership with him. The withdrawal was the largest sect realignment in five centuries, and it happened without a single battle. The Outlanders simply stopped attending.\n\nIndependence did not mean unity. The clan has no princes, no hierarchy, and no meetings it can avoid. Loyalty runs along personal lines: sires, packs, territories, debts. A Gangrel's word is the only contract the clan honors, which is why the clan's word is worth having. Elders like Karsh still fight the Camarilla's wars as contractors. Wanderers like Beckett chase older questions through older libraries. Most just survive, moving along the edges of the map, watching the cities burn and rebuild from a distance they chose.\n\nThe weakness is written on the skin. Every frenzy leaves its mark: eyes, claws, fur, features that never fully return to human. An old Gangrel wears the history of every loss of control like a ledger. In the modern nights the Second Inquisition has made the edges of the map dangerous in new ways, and the clan's answer has been the same as always. Go further out. Get harder to find. Keep walking.",
      chars: [
        {
          id: "gangrel01",
          name: "Ennoia",
          alias: "THE MOTHER OF WOLVES",
          gen: "3rd",
          era: "Antiquity to present",
          location: { city: "Unknown", place: "Wherever the wild runs deepest" },
          threat: "high",
          lore_md: "The Book of Nod gives Ennoia the wild as her inheritance and the silence of the deep woods as her court. The registry's oldest fragments describe the third generation's most private member: no cities, no cults, no recorded decrees. Her childer inherited the absence. The clan has no founder's seat because the founder wanted none.\n\nSightings are rumor by design. The credible reports span continents and centuries and agree on almost nothing except the company: wolves, or something shaped like them. Some Gangrel believe she sleeps beneath the northern ice. Others say she walks the last unmapped places, and that the clan's restlessness is her restlessness, passed down in the blood. The Camarilla files her under myth. The clan files the Camarilla under irrelevant. No verified sighting exists, and the clan considers that the point. The wild does not file reports either.",
          photo: "assets/img/char_gangrel01.png"
        },
        {
          id: "gangrel02",
          name: "Beckett",
          alias: "THE NODDRIST",
          gen: "8th",
          era: "1400s to present",
          location: { city: "Nomadic", place: "Wherever old books are sold" },
          threat: "high",
          lore_md: "Beckett is the clan's scholar, which the clan finds faintly embarrassing and the rest of kindred society finds alarming. A Noddrist of the first rank, he has spent five centuries chasing the Book of Nod's fragments across every archive, tomb, and private collection that will burn or bribe.\n\nThe registry's file on him is one of the thickest in the network: confirmed appearances in Vienna, Cairo, Calcutta, and a dozen cities that no longer keep records. He works alone, pays his debts, and treats the Jyhad as a puzzle someone else is losing. His current obsession, per intercepted correspondence, is the origin of the clans themselves, a question the elders have killed people for asking. He keeps asking. The Camarilla wants him found. The Gangrel want him left alone. He is, as always, somewhere else, and the somewhere else is always one library ahead of the warrant.",
          photo: "assets/img/char_gangrel02.png"
        },
        {
          id: "gangrel03",
          name: "Xaviar",
          alias: "THE JUSTICAR WHO LEFT",
          gen: "8th",
          era: "1800s to present",
          location: { city: "Nomadic", place: "Camarilla courts, when forced" },
          threat: "high",
          lore_md: "Xaviar held the clan's highest office in the Camarilla and used it to end the arrangement. As justicar, he was the sect's field authority, the Outlander who enforced the Traditions across domains that feared him more than their own princes. The registry's accounts of his tenure are consistent: fair, brutal when required, and increasingly absent from the courts that nominally directed him.\n\nIn 1999 he walked into a conclave, announced the clan's withdrawal from the Camarilla, and walked out. The sect's response was paralysis; the clan's response was relief. He has not held a title since and has refused every delegation sent to retrieve him. His current whereabouts are unknown, which for a justicar is a professional habit rather than a disappearance. The withdrawal he led still holds. Every Gangrel who ignores a summons is citing his precedent, and every prince who reads the clan's file reads the same lesson: the Outlanders do not negotiate their own leash.",
          photo: "assets/img/char_gangrel03.png"
        },
        {
          id: "gangrel04",
          name: "Karsh",
          alias: "THE WARLORD",
          gen: "6th",
          era: "Antiquity to present",
          location: { city: "Nomadic", place: "Wherever the Camarilla's borders bleed" },
          threat: "high",
          lore_md: "Karsh is the warlord, the sixth generation Gangrel who never left the Camarilla's payroll and never pretended to be anything but a contractor. The registry traces him to the ancient Near East and a service record that reads like the sect's military history: every major campaign, every border war, every purge where the fighting was real.\n\nHe holds no court and wants none. Princes hire him, justicars defer to him, and the clan's young warriors make pilgrimages to wherever he is currently breaking something. His loyalty is to the fight and to the handful of kindred he calls pack, in that order. Current reports place him training the Camarilla's response to the Second Inquisition, a war he considers overdue. The Outlanders who left with Xaviar call him a sellout. He calls them unemployed. Both are correct, and neither has ever landed a blow on the other, which both consider the real score.",
          photo: "assets/img/char_gangrel04.png"
        },
        {
          id: "gangrel05",
          name: "Ramona Vidal",
          alias: "THE RIDER",
          gen: "9th",
          era: "1900s to present",
          location: { city: "Los Angeles", place: "The hills above Griffith Park" },
          threat: "mid",
          lore_md: "Ramona Vidal rides the Los Angeles hills, and the registry's attribution for her is honest about its doubts: the name appears in West Coast files from the 1970s onward, attached to a kindred who keeps the city's northern edge and answers no baron's summons twice.\n\nShe works as a tracker and courier for whoever pays in favors rather than blood, and her knowledge of the Griffith Park tunnel network is reportedly better than the city's own survey. The anarchs claim her, the Camarilla lists her as unaligned, and she has told both to stay off her ridge. The file's last field note is a decade old and reads, in full: still there, still not talking. For the Outlanders, that is a career summary, not a complaint. The horses she keeps are the only witnesses, and they are not talking either.",
          photo: "assets/img/char_gangrel05.png"
        },
        {
          id: "gangrel06",
          name: "Skoll Andersson",
          alias: "THE LONGSHIP'S SHADOW",
          gen: "7th",
          era: "800s to present",
          location: { city: "Aalborg", place: "A turf-roofed longhouse on the Jutland coast" },
          threat: "mid",
          lore_md: "Skoll Andersson went to sea with the longships and never entirely came ashore. Embraced in the Viking age by a Gangrel who raided as far as the rivers allowed, he spent three centuries working the northern coasts as scout, pilot, and occasionally the thing in the treeline that ended the raid.\n\nThe conversion of the North made his old trade dangerous and his skills permanent. He moved inland, then along the trade roads, then wherever the money for quiet violence went. The registry's modern file places him on the Jutland coast, running salvage and smuggling through a network of harbors he has owned since they were beaches. He trains the clan's young in the old skills: reading weather, reading water, reading men. The last one, he says, is the only literacy that matters. The longhouse has no lock. He says the sea takes what it is owed and so does he.",
          photo: "assets/img/char_gangrel06.png"
        },
        {
          id: "gangrel07",
          name: "Hulda of the Pines",
          alias: "THE FOREST WARDEN",
          gen: "8th",
          era: "1200s to present",
          location: { city: "Freiburg", place: "A hollow beneath the firs, Black Forest" },
          threat: "low",
          lore_md: "Hulda has kept the same forest for eight hundred years. Embraced in the medieval Black Forest by a Gangrel who wanted the wood watched, she watched it, outlived the watch's purpose, and kept watching anyway. The registry's German files treat her as a fixed point: the kindred who is simply there, in the hollow beneath the firs, when the forest matters.\n\nHer role is warden, not hermit. She knows every road through her trees, every poacher's path, every place a body can be left and never found. Both sects pay her in salt, silver, and silence to use the routes. She has refused every invitation to a city and every offer of a title, on the grounds that titles are how the woods get lost. The Second Inquisition's drones have learned to avoid her airspace. The file does not explain how. The file is afraid to ask, and the forest is not answering.",
          photo: "assets/img/char_gangrel07.png"
        },
        {
          id: "gangrel08",
          name: "Marcus Fen",
          alias: "THE LEGION SCOUT",
          gen: "6th",
          era: "Antiquity to present",
          location: { city: "Vienna", place: "Remembers the Danube frontier before the walls" },
          threat: "mid",
          lore_md: "Marcus Fen scouted the frontiers of an empire that no longer exists, and the habit outlived the employer. Embraced on the Danube in the empire's prime, he spent two centuries mapping the barbarian roads for the legions, then kept mapping after the legions stopped paying.\n\nThe registry's fragments follow him across the migrations, the medieval marches, and the colonial frontiers, always one horizon ahead of the settlements. He is the clan's memory of what the map looked like before the map was drawn, and elders consult him when the old routes matter: the tunnels under modern cities that follow older paths, the passes that predate the borders. He answers questions with questions, trades knowledge for knowledge, and has never once been early to a meeting. The frontier taught him that arriving is a kind of surrender. He is still deciding whether to surrender to this one.",
          photo: "assets/img/char_gangrel08.png"
        },
        {
          id: "gangrel09",
          name: "Isabeau Laroche",
          alias: "THE ROAD OUT OF PARIS",
          gen: "9th",
          era: "1780s to present",
          location: { city: "Paris", place: "A hay loft on the old road to Orleans" },
          threat: "low",
          lore_md: "Isabeau Laroche left Paris in a grain cart in 1793, and the registry's file begins there: a newly embraced Gangrel moving through the Terror's checkpoints with forged papers and a dead childe's name. Her sire was destroyed in the purges that ate the Paris warrens that year. She was the part of the lesson that survived.\n\nShe has worked the roads out of the capital ever since, the courier who moves what the cities cannot hold: letters, relics, kindred in transit. Her network of hay lofts, way stations, and paid peasants spans the old royal roads, and both sects use it without ever quite controlling it. She is old now and shows it, which she considers professional advertising. The roads remember her. That is the only court she attends, and its sessions are held at whatever pace the horse decides.",
          photo: "assets/img/char_gangrel09.png"
        },
        {
          id: "gangrel10",
          name: "Dmitri Volkov",
          alias: "THE WINTER WOLF",
          gen: "9th",
          era: "1900s to present",
          location: { city: "Berlin", place: "The rail yards at Spandau" },
          threat: "mid",
          lore_md: "Dmitri Volkov came west with the war and stayed for the wreckage. A Siberian trapper embraced before the Revolution, he arrived in Berlin in 1919 as a courier for the kindred factions feeding on the city's collapse and decided the collapse was more honest than the court.\n\nHe has worked the rail yards ever since, the Outlander who knows every freight line out of the capital and every warren along them. His trade is extraction: getting kindred out of cities that have stopped being safe, quickly and without questions. The price is steep and non-negotiable, and the registry's file notes he has never lost a client. The Second Inquisition has made his services a seller's market. He has raised his rates accordingly and sleeps in the yards, where the trains drown the sound of anything. The winter wolf does not explain his prices. The winter wolf is the price.",
          photo: "assets/img/char_gangrel10.png"
        },
        {
          id: "gangrel11",
          name: "Coyote Bill Harlan",
          alias: "THE DRIFTER",
          gen: "8th",
          era: "1800s to present",
          location: { city: "Tucson", place: "A rusted pickup, no fixed address" },
          threat: "low",
          lore_md: "Coyote Bill has been drifting since the West had more horizon than fence. Embraced in the 1870s by a Gangrel who found him half-dead of thirst and liked his odds, he worked the cattle trails, the rail gangs, and the long empty miles between towns where kindred law had no sheriff.\n\nThe modern map has filled in, and he has adjusted by staying ahead of it: a rusted pickup, a series of unlisted havens, and a reputation as the fixer for problems that need to be lost in country where nothing is paved. Both sects hire him and neither trusts him, which he considers the correct arrangement. The registry's file is a list of unsolved disappearances across four states and a note that the truck was seen near all of them. He calls that his resume. The desert keeps the rest of the paperwork.",
          photo: "assets/img/char_gangrel11.png"
        },
        {
          id: "gangrel12",
          name: "Sarah Whitfield",
          alias: "THE CITY WATCHER",
          gen: "10th",
          era: "1960s to present",
          location: { city: "Chicago", place: "Lincoln Park, after midnight" },
          threat: "low",
          lore_md: "Sarah Whitfield watched Chicago burn in 1968 from a rooftop in Lincoln Park, and the city has had her attention ever since. Embraced that decade by a Gangrel who wanted eyes inside the parks, she learned the green corridors, the drainage tunnels, and the places where the city's grid goes quiet.\n\nShe works as the warrens' outside eye: scouting safe routes, watching for surveillance, and reading the parks the way her sire read the wilderness. The court knows she exists and has never caught her doing anything worth a blood hunt. Her file is a list of near-misses and one standing rule she enforces on her own territory: no hunting in the parks after the second incident of 1968. The young ask what the second incident was. She tells them to keep it that way. The parks stay quiet, which is the only report she files.",
          photo: "assets/img/char_gangrel12.png"
        },
        {
          id: "gangrel13",
          name: "Elias Thorn",
          alias: "THE RAIN COUNTRY HERMIT",
          gen: "11th",
          era: "1980s to present",
          location: { city: "Seattle", place: "A cabin in the Hoh rainforest" },
          threat: "low",
          lore_md: "Elias Thorn went into the rainforest to disappear and succeeded so well that the clan lost him for a decade. Embraced in the 1980s Pacific Northwest, he rejected both sects on principle and built his haven in the Hoh rainforest, in a cabin the survey maps mark as clearcut.\n\nHe re-emerged as the region's quiet utility: the kindred who moves packages up the coast, watches the logging roads for strangers, and sells weather reports to whoever is planning something outdoors. His prices are in supplies and silence. The registry's file is thin because the man is difficult to find and uninterested in being interviewed. The last field report notes that his cabin had moved forty meters since the previous visit. He denies this. The forest, presumably, cooperates. The moss on the roof, one courier noted, is always on the correct side.",
          photo: "assets/img/char_gangrel13.png"
        },
        {
          id: "gangrel14",
          name: "Nadia Petrova",
          alias: "THE TAIGA'S TEETH",
          gen: "10th",
          era: "1900s to present",
          location: { city: "Krasnoyarsk", place: "A trapping cabin on the Yenisei" },
          threat: "mid",
          lore_md: "Nadia Petrova holds a stretch of the taiga the way other kindred hold a city. Embraced in the early Soviet years by a Gangrel fleeing the purges, she learned the old skills from a sire who had learned them from the land itself, and she has applied them to a territory most maps render as blank.\n\nHer trade is passage. The trans-Siberian corridor carries kindred traffic that needs to move without documents, and her network of trapping cabins, river crossings, and paid locals moves it. She has survived the Soviet collapse, the oligarch wars, and three separate attempts by Moscow's court to tax her route. The registry's assessment is blunt: mid threat, high competence, do not enter her territory without a written invitation. The invitations exist. They are rare, and they are never refused twice. The taiga does the accounting.",
          photo: "assets/img/char_gangrel14.png"
        },
        {
          id: "gangrel15",
          name: "Kwame Adjei",
          alias: "THE ROAD WARDEN",
          gen: "11th",
          era: "1990s to present",
          location: { city: "Accra", place: "A lorry park at Tema after close" },
          threat: "low",
          lore_md: "Kwame Adjei works the roads of West Africa, where the kindred map is thin and the distances are honest. Embraced in the 1990s by a wandering Gangrel who valued his eye for country, he has built a passage network from Accra to the Sahel that moves kindred and information across borders that shift more often than the routes.\n\nHis operation runs out of the lorry parks, the shared taxis, and the long-distance networks that already move everything else. He charges in favors and information, keeps no ledger, and has never lost a passenger. The local courts have learned to hire him rather than fight him, an arrangement he prefers. The registry's file notes the Second Inquisition's growing interest in the region's transit hubs. His response, per the last field report, was to add two new routes and delete one contact. The road warden does not argue with the map. He redraws it.",
          photo: "assets/img/char_gangrel15.png"
        },
        {
          id: "gangrel16",
          name: "Bruno Ferreira",
          alias: "THE GREEN INFERNO",
          gen: "9th",
          era: "1900s to present",
          location: { city: "Manaus", place: "A riverbank camp up the Madeira" },
          threat: "mid",
          lore_md: "Bruno Ferreira runs the green inferno, and the inferno runs him back. Embraced in the Amazon's rubber era by a Gangrel who wanted the river system watched, he has spent a century learning the basin's flooded forests, seasonal channels, and the kindred who hide in both.\n\nHis territory is the river country south of the main shipping lanes, and his trade is recovery: finding kindred who went in and did not come out, for a fee paid in advance. The cities' courts consider the interior a death sentence. He considers it a market. The registry's file tracks a steady business and a strict neutrality: he recovers anyone, from any sect, and asks nothing about why. The one rule is that the river keeps what it took. He is merely the negotiator. The negotiator has never once come back empty-handed, which is why the fee is paid in advance.",
          photo: "assets/img/char_gangrel16.png"
        },
        {
          id: "gangrel17",
          name: "Yuki Tanaka",
          alias: "THE MOUNTAIN LISTENER",
          gen: "12th",
          era: "2000s to present",
          location: { city: "Tokyo", place: "A shrine storehouse on Mount Takao" },
          threat: "low",
          lore_md: "Yuki Tanaka listens to mountains. Embraced in Tokyo in the 2000s by a Gangrel who wanted a childe far from the city's courts, she was sent to the ranges above the capital and told to learn the land before learning the politics. She is still on the first lesson, by her own account.\n\nHer territory is the forested slopes west of the city, and her role is the clan's oldest one: watch the approaches. She tracks hikers, surveyors, and the occasional kindred courier moving between Osaka and the capital, and reports anomalies to a network of three contacts she has never met in the same room. The registry's file is short and current: low threat, excellent fieldcraft, one standing request that drones stay out of her valley. The request has been honored. Nobody wants to explain to her why it was not, and the mountain does not need the noise.",
          photo: "assets/img/char_gangrel17.png"
        },
        {
          id: "gangrel18",
          name: "Greta Lindqvist",
          alias: "THE ICE ROADER",
          gen: "10th",
          era: "1900s to present",
          location: { city: "Stockholm", place: "A boathouse in the outer archipelago" },
          threat: "low",
          lore_md: "Greta Lindqvist works the archipelago, the scatter of islands where Stockholm's kindred law thins out into water. Embraced in the early 20th century by a coastal Gangrel, she learned the channels, the ice roads, and the boathouses that make the Baltic a highway for those who read it.\n\nHer trade is ferrying: kindred and cargo moved between the islands and the mainland without touching a checkpoint. She keeps a boathouse on one of the outer islands, a boat for every season, and a rate card that has not changed in thirty years. The Stockholm court uses her and pretends otherwise. The registry's file notes her perfect record and one standing condition: she does not carry anyone fleeing a blood hunt. The condition has been tested once. The test is not discussed, and the boat that was used is not in the boathouse anymore.",
          photo: "assets/img/char_gangrel18.png"
        },
        {
          id: "gangrel19",
          name: "Tomas Aguilar",
          alias: "THE BORDER CROSSER",
          gen: "11th",
          era: "1980s to present",
          location: { city: "Nogales", place: "A dry wash south of the border fence" },
          threat: "low",
          lore_md: "Tomas Aguilar crosses the border the way other kindred cross a street. Embraced in the 1980s in the Sonora borderlands by a Gangrel who worked the same desert, he inherited the route: the dry washes, the culverts, the water caches that turn a killing landscape into a corridor.\n\nHe moves kindred north and south, charges in blood and favors, and has survived the border's militarization by being exactly as invisible as the traffic he moves among. The registry's file calls him the most reliable passage operator on the southern frontier and notes that both sects' couriers use him without either knowing about the other. His one rule is the desert's own: carry water, keep moving, and never travel at noon. The rule has kept him alive longer than any court's protection, and the water caches have never once been dry when he needed them.",
          photo: "assets/img/char_gangrel19.png"
        },
        {
          id: "gangrel20",
          name: "Astrid Kolbein",
          alias: "THE STORM WATCHER",
          gen: "9th",
          era: "1000s to present",
          location: { city: "Reykjavik", place: "A lava field cave east of the city" },
          threat: "mid",
          lore_md: "Astrid Kolbein holds the lava fields east of Reykjavik, a territory the island's court is happy to let someone else have. Embraced in the saga age by a Gangrel who came west with the settlers, she has watched the island's volcanoes, glaciers, and politics with the same expression for a thousand years.\n\nHer role is the clan's oldest: the watcher on the edge. She tracks the island's few kindred, the research stations, and the seismic activity that occasionally rearranges her territory, and she reports what matters to a contact list of two. The registry's file is brief and admiring: mid threat, total territorial control, one recorded incident in the modern era when a Camarilla survey team entered her fields without notice. The team returned. The team does not discuss it. The storm watcher had already filed her report before the team reached the airport.",
          photo: "assets/img/char_gangrel20.png"
        }
      ]
    },
    {
      id: "malkavian",
      name: "Malkavian",
      nickname: "The Lunatics",
      disciplines: ["Auspex", "Dominate", "Obfuscate"],
      weakness: "Every Malkavian is irrevocably insane, a fracture of the clan founder's broken mind that never heals.",
      lore_md: "Malkav broke, and the clan is the shape of the break. The Book of Nod names the third generation's seer, the one who saw too clearly and was never the same. Whether Malkav was destroyed, scattered, or distributed among the childer is a question the clan treats as theology rather than history. What is not disputed is the inheritance. Every Malkavian carries a fracture: an obsession, a certainty, a way of seeing that does not switch off. The clan calls it the cobweb. Everyone else calls it madness, and they are not wrong.\n\nThe disciplines are the curse's tools. Auspex reads what others hide, Dominate writes on other minds, Obfuscate erases the reader from the scene. Together they make the Lunatics the best intelligence network in kindred society, which is the clan's great joke: the madmen see everything, and no one believes them until it is too late.\n\nThe clan sits inside the Camarilla and stands outside it. Malkavians hold seats, attend Elysium, and serve as the sect's oracles, interrogators, and occasional prophets. They also answer to no hierarchy the sect can find, because the clan's only structure is the cobweb itself: the shared certainty that every Malkavian is part of one broken mind, receiving and transmitting on a frequency the sane cannot tune. When the clan moves together, which is rare and terrifying, it is because something on that frequency told them to.\n\nThe Jyhad's elders fear the clan for the oldest reason: Malkavians know things. Anatole prophesied Gehenna's approach decades before the Camarilla admitted the word. Netchurch wired the cobweb into the mortal networks decades before the term existed. The registry's own founding is entangled with clan records that no one admits to writing. The weakness is the price of the sight. The fracture never heals, never quiets, and never quite lies. A Malkavian's delusion is a lens, and the lens is always pointed at something real.",
      chars: [
        {
          id: "malkavian01",
          name: "Malkav",
          alias: "THE BROKEN PROPHET",
          gen: "3rd",
          era: "Antiquity to present",
          location: { city: "Unknown", place: "Inside every Malkavian's head, some say" },
          threat: "high",
          lore_md: "The founder's fate is the clan's central mystery and its favorite heresy. The Book of Nod says Malkav was cursed with sight until sight was all that remained. The registry's fragments, attributed to sources no archivist will name, suggest something stranger: that the founder was not destroyed but distributed, divided among the childer at the moment of the clan's making.\n\nThe theory explains the cobweb, the shared frequency, the way scattered Malkavians sometimes finish each other's prophecies. It also explains the fear. If Malkav is not gone but everywhere, then every Lunatic is a window, and the elders' habit of dismissing the clan as harmless madmen is the Jyhad's longest-running mistake. No verified sighting of the founder exists. The clan's answer to that is consistent across every era: of course not. You are looking with the wrong eye. The registry keeps the file open because closing it would require an opinion, and no archivist wants one.",
          photo: "assets/img/char_malkavian01.png"
        },
        {
          id: "malkavian02",
          name: "Anatole",
          alias: "THE ORACLE OF GEHENNA",
          gen: "5th",
          era: "1100s to 1999, presumed destroyed",
          location: { city: "Jerusalem", place: "A walled crypt on the Mount of Olives" },
          threat: "high",
          lore_md: "Anatole was the clan's prophet, and the registry's records of him are the closest thing the network has to a verified miracle file. Embraced in the medieval period, he spent five centuries delivering prophecies that the sects filed as madness and then quietly implemented as policy. He spoke of Gehenna's approach, of the antediluvians stirring, of a reckoning with a date on it.\n\nThe dates kept being approximately right, which is the most frightening thing in the file. His final confirmed appearance was in 1999, in the region of the Holy Land, delivering a prophecy the Camarilla sealed and the Sabbat leaked. He was presumed destroyed in the events that followed. The registry flags the name as unresolved, because the clan's prophets have a documented habit of being approximately right about their own deaths too. The crypt on the Mount of Olives is checked annually. It has never once been empty of fresh candle wax.",
          photo: "assets/img/char_malkavian02.png"
        },
        {
          id: "malkavian03",
          name: "Netchurch",
          alias: "THE WIRE GHOST",
          gen: "8th",
          era: "1900s to present",
          location: { city: "Unknown", place: "A server room no map admits to" },
          threat: "mid",
          lore_md: "Netchurch saw the network before the network existed. The registry's attribution for this kindred is deliberately uncertain, which is appropriate: the name appears in clan records from the mid-20th century onward, attached to a Malkavian who understood that the cobweb and the telephone system were the same discovery made twice.\n\nThe reports describe a kindred who wired havens into exchanges, routed clan communications through mortal infrastructure decades before the practice spread, and treated the emerging computer networks as an extension of the founder's broken mind. Whether Netchurch still exists as an individual or dissolved into the systems entirely is disputed. The clan's technomancers claim lineage from the name. The registry's own routing tables, one archivist noted, contain entries no one admits to adding. The file is flagged: do not audit those entries. The last archivist who did is no longer assigned to this network.",
          photo: "assets/img/char_malkavian03.png"
        },
        {
          id: "malkavian04",
          name: "Marissa",
          alias: "THE SCHOLAR OF BONES",
          gen: "9th",
          era: "1800s to present",
          location: { city: "Chicago", place: "University library stacks, after hours" },
          threat: "low",
          lore_md: "Marissa is the clan's scholar, the Lunatic who reads everything and organizes it, which the clan considers its own kind of madness. Embraced in the 19th century, she has spent the modern era in Chicago's university stacks, building the closest thing the clan has to a neutral archive of its own history.\n\nHer obsession is the cobweb's structure: mapping which Malkavians hear which fragments, and when. Both sects have tried to acquire her work. She has published fragments, sealed the rest, and trades access for protection and rare texts. The registry's file describes her as low threat and high value, the rare kindred whose danger is entirely in what she knows. Her current project, per the last report, is a complete index of Anatole's prophecies against their dates. The preliminary findings are sealed. The library's night staff know her by name and have stopped asking why the stacks rearrange themselves on Tuesdays.",
          photo: "assets/img/char_malkavian04.png"
        },
        {
          id: "malkavian05",
          name: "Petronius",
          alias: "THE SENATOR'S ECHO",
          gen: "6th",
          era: "Antiquity to present",
          location: { city: "Rome", place: "A sealed villa on the Aventine" },
          threat: "mid",
          lore_md: "Petronius was a senator of the old empire and has never entirely stopped being one. Embraced in Rome's prime by a Malkavian who wanted the court heard from the inside, he spent the imperial centuries as the clan's voice in the halls where the Jyhad's oldest games were played.\n\nThe empire fell and the habit remained. He has served every court that would have him since, as advisor, interrogator, and the kind elder who asks exactly the right question at exactly the wrong moment. His delusion, per the registry's file, is procedural: he believes every kindred interaction is a session of the senate, with minutes, precedents, and adjournments. The courts tolerate it because his minutes are always accurate. The file's last note: he has called a session for the modern nights. No agenda was given. Every court in Europe has sent an observer anyway.",
          photo: "assets/img/char_malkavian05.png"
        },
        {
          id: "malkavian06",
          name: "Cassandra Vex",
          alias: "THE GUILLOTINE'S WITNESS",
          gen: "9th",
          era: "1780s to present",
          location: { city: "Paris", place: "A bone cellar under the Rue de la Huchette" },
          threat: "mid",
          lore_md: "Cassandra Vex watched the guillotine work in 1793 and took notes. Embraced into the Terror by a Malkavian who wanted the Revolution's madness catalogued from inside, she spent the year in the crowds, the tribunals, and the prisons, recording who denounced whom and what it bought them.\n\nThe notebooks survive. The registry's Paris archive considers them the single best record of the kindred purges that ran beneath the mortal Terror, and her price for access has never dropped. She has continued the work through every French convulsion since, cataloguing paranoia as it happens. Her delusion is that she is already dead and the notes are her estate. The courts find the arrangement convenient. The dead, she points out, cannot be bribed, and the estate cannot be inherited by anyone who has not read all of it. Nobody has read all of it.",
          photo: "assets/img/char_malkavian06.png"
        },
        {
          id: "malkavian07",
          name: "Augustin Leclair",
          alias: "THE CLOCKMAKER'S ERROR",
          gen: "10th",
          era: "1800s to present",
          location: { city: "Paris", place: "A stopped-clock shop in the Marais" },
          threat: "low",
          lore_md: "Augustin Leclair repairs clocks that were never broken. Embraced in 19th century Paris by a Malkavian who appreciated the metaphor, he keeps a shop in the Marais where the clocks all show different hours, each one correct for a different client's version of when things happen.\n\nHis delusion is temporal: he believes every kindred in Paris exists slightly out of sync, and that his shop is where the drift is measured. The clan's oracles consult him before acting on prophecies, on the theory that a prophecy delivered at the wrong moment is worse than none. The registry's file is thin and affectionate: low threat, harmless, and the only kindred in the city whose shop has never been raided. The court's unspoken theory is that raiding it would be bad luck. He agrees. Luck is a schedule, and his shop keeps it.",
          photo: "assets/img/char_malkavian07.png"
        },
        {
          id: "malkavian08",
          name: "Wilhelm Fassbinder",
          alias: "THE RADIO ORACLE",
          gen: "9th",
          era: "1900s to present",
          location: { city: "Berlin", place: "A dead frequency from a Wedding attic" },
          threat: "mid",
          lore_md: "Wilhelm Fassbinder broadcasts on a frequency that does not exist. Embraced in Weimar Berlin by a Malkavian chasing the new radio age, he spent 1919 in an attic in Wedding with a transmitter, convinced the cobweb had found its carrier wave. The registry's Weimar files record strange intercepts that year: prophecies in the static, numbers stations before numbers stations.\n\nHe has kept transmitting through every German government since, and the file's intercepts have grown more coherent as the equipment improved. The clan's technomancers treat his signal as a data source. The Camarilla treats it as a nuisance. The Second Inquisition has tried to triangulate it twice and found the source in two different districts. His delusion is that he is not transmitting but receiving, and that the warrens of Berlin are simply where the antenna lives. The intercepts, annoyingly, keep being early. The attic's electricity bill is paid by an account that predates the grid.",
          photo: "assets/img/char_malkavian08.png"
        },
        {
          id: "malkavian09",
          name: "Lotte Kranz",
          alias: "THE NUMBER SEER",
          gen: "11th",
          era: "1920s to present",
          location: { city: "Berlin", place: "A decommissioned telephone exchange in Kreuzberg" },
          threat: "low",
          lore_md: "Lotte Kranz hears numbers. Embraced in Weimar Berlin out of a telephone exchange, she kept the switchboard's habits: connecting calls that were never placed, overhearing conversations across lines that were never wired. The registry's file describes her as the clan's human switchboard for the city, the Lunatic who knows who is talking to whom.\n\nShe works from a decommissioned exchange in Kreuzberg, trading connection intelligence to both sects at rates that have never once been negotiated downward. Her delusion is that the city's kindred are all subscribers on her network, and that missed connections are her professional failure. The courts find her indispensable and slightly unbearable. The file's last note: she has begun refusing certain numbers. She will not say whose. The clan's oracles consider that the most interesting development in Berlin in a decade, and the exchange's dead lines have started ringing again.",
          photo: "assets/img/char_malkavian09.png"
        },
        {
          id: "malkavian10",
          name: "Ezekiel Marsh",
          alias: "THE BAYOU PSALM",
          gen: "8th",
          era: "1800s to present",
          location: { city: "New Orleans", place: "A chapel swallowed by the swamp" },
          threat: "mid",
          lore_md: "Ezekiel Marsh preaches in a chapel the swamp has been reclaiming for a century. Embraced in 19th century New Orleans by a Malkavian who heard something in his sermons, he has spent the modern era as the Gulf coast's oracle, the Lunatic whose prophecies arrive as scripture and are no less accurate for it.\n\nHis congregation is small, mixed, and loyal: kindred and kine who come for the psalms and stay for the readings. The registry's file treats him as the region's early warning system; his predictions of storms, purges, and hunts have a documented hit rate that the local court quietly schedules around. His delusion is that he is merely transcribing. The chapel floods regularly. The psalms, the file notes, are always legible. The swamp keeps the rest of the congregation's secrets, and the psalms keep the swamp's.",
          photo: "assets/img/char_malkavian10.png"
        },
        {
          id: "malkavian11",
          name: "Delia Crane",
          alias: "THE RIOT'S MIRROR",
          gen: "10th",
          era: "1960s to present",
          location: { city: "Chicago", place: "A psychiatric ward, staff side" },
          threat: "low",
          lore_md: "Delia Crane works the ward, and the ward works her back. Embraced in 1960s Chicago by a Malkavian who wanted the clan inside the psychiatric system rather than outside it, she has spent the modern era as a night-shift fixture in the city's institutions, the Lunatic who is professionally insane and personally fine.\n\nHer role is triage: she identifies kindred in crisis, Malkavians whose cobweb has snagged, and mortals who have seen too much, and routes them to the right handler before the wrong people notice. The court considers her a public health service and pays her like one. The registry's file notes her perfect record and one standing rule: she never takes a patient she cannot discharge. The 1968 file, the one summer the city burned, is the only gap in her records. She has never explained it. The ward does not ask, and the mirror in the staff room stays covered.",
          photo: "assets/img/char_malkavian11.png"
        },
        {
          id: "malkavian12",
          name: "Simon Oduya",
          alias: "THE MARKET CRIER",
          gen: "11th",
          era: "1990s to present",
          location: { city: "Nairobi", place: "A stall in the Maasai Market after close" },
          threat: "low",
          lore_md: "Simon Oduya calls the market to order, and the market listens. Embraced in 1990s Nairobi by a Malkavian who valued his voice, he works the city's markets after close as the clan's crier: the Lunatic who announces what the warrens need to hear, in the cadence that makes it stick.\n\nHis intelligence network is the market itself: traders, porters, taxi drivers, the human traffic that sees everything and reports to no one except, somehow, him. The registry's file describes the most effective mortal-facing intelligence operation in East Africa and cannot determine who runs it, because the answer is that everyone does and no one knows. His delusion is that the market is a single organism and he is its voice. The file's assessment: the delusion is operationally accurate. The market has never once been surprised, and neither has he.",
          photo: "assets/img/char_malkavian12.png"
        },
        {
          id: "malkavian13",
          name: "Vera Lindt",
          alias: "THE STATIC SAINT",
          gen: "12th",
          era: "2000s to present",
          location: { city: "Berlin", place: "A U-Bahn maintenance tunnel, closed section" },
          threat: "low",
          lore_md: "Vera Lindt hears the tunnels. Embraced in 2000s Berlin by a Malkavian who wanted the U-Bahn's dead stations mapped, she has spent the modern era in the maintenance corridors beneath the city, listening to the infrastructure the way her sire listened to the cobweb.\n\nHer reports are the warrens' structural intelligence: which tunnels are watched, which stations have new equipment, where the Second Inquisition's sensors have appeared. The clan's couriers route around her warnings and have stopped questioning them. Her delusion is that the city speaks in schedules and she is its translator. The registry's file notes one anomaly: her warnings have recently begun arriving before the equipment she describes is installed. The file is flagged. Nobody wants to know what that means, and the tunnel she lives in does not appear on any map printed after 1994.",
          photo: "assets/img/char_malkavian13.png"
        },
        {
          id: "malkavian14",
          name: "Father Ambrose",
          alias: "THE CONFESSIONAL KEY",
          gen: "9th",
          era: "1700s to present",
          location: { city: "Rome", place: "A side chapel of a minor basilica" },
          threat: "mid",
          lore_md: "Father Ambrose hears confessions in a side chapel of a minor Roman basilica, and the confessions are the point. Embraced in the 18th century by a Malkavian who wanted the clan inside the Church's machinery, he has spent the modern era as the Eternal City's quiet confessor, the Lunatic who knows what the penitents did and what they will do next.\n\nHis clients include kindred from every sect, drawn by the seal of the confessional and his documented indifference to sect politics. The registry's file treats him as the city's intelligence clearinghouse and cannot determine his own allegiance, because the answer appears to be the seal itself. His delusion is that he is still a priest and the embrace was a sacrament. The file's last note: the Vatican's new security detail has started attending. He has started hearing their confessions too. The seal holds. It always has.",
          photo: "assets/img/char_malkavian14.png"
        },
        {
          id: "malkavian15",
          name: "Juno Park",
          alias: "THE NEON DIAGNOSTIC",
          gen: "12th",
          era: "2010s to present",
          location: { city: "Seoul", place: "A PC bang basement in Euljiro" },
          threat: "low",
          lore_md: "Juno Park diagnoses the city. Embraced in 2010s Seoul by a Malkavian who saw the networks closing in, she works from a PC bang basement in Euljiro, reading the capital's digital traffic the way older Lunatics read entrails: for the pattern underneath.\n\nHer specialty is the Second Inquisition's digital footprint: the sensor networks, the data purchases, the quiet contracts that map the city's kindred without knowing it. The warrens' survival planning runs through her reports, and the registry's file rates her the most valuable young Malkavian in East Asia. Her delusion is that the city is a patient and she is the only honest physician. The file's last note: she has begun prescribing. The warrens are following the prescriptions. So far, the outcomes are good, and the basement's electric meter has never once been read.",
          photo: "assets/img/char_malkavian15.png"
        },
        {
          id: "malkavian16",
          name: "Theodora Voss",
          alias: "THE VIENNESE MIRROR",
          gen: "10th",
          era: "1800s to present",
          location: { city: "Vienna", place: "A mirrored salon above the Graben" },
          threat: "mid",
          lore_md: "Theodora Voss keeps a mirrored salon above the Graben, and the mirrors are the security system. Embraced in 19th century Vienna by a Malkavian who understood the city's taste for appearances, she has spent the modern era as the imperial court's memory: the Lunatic who remembers what everyone else agreed to forget.\n\nHer delusion is that the mirrors show the room as it truly is, and the file's field reports suggest the delusion has teeth: visitors have described seeing their own motives reflected, accurately and unwelcome. The court consults her before every major appointment, on the theory that a candidate seen in her salon is a candidate truly known. The registry's file is respectful and brief: mid threat, high value, do not look at the mirrors longer than she does. The salon's lease has been renewed by four different princes. None of them remember signing.",
          photo: "assets/img/char_malkavian16.png"
        },
        {
          id: "malkavian17",
          name: "Malcolm Reyes",
          alias: "THE ORACLE OF THE FREEWAY",
          gen: "11th",
          era: "1980s to present",
          location: { city: "Los Angeles", place: "Under the 110 overpass, mile marker 22" },
          threat: "low",
          lore_md: "Malcolm Reyes reads the freeway. Embraced in 1980s Los Angeles by a Malkavian who understood that the city's true structure is its traffic, he holds court under the 110 overpass, where the sound of the road drowns out everything except what matters.\n\nHis intelligence is the flow: he reads the freeways the way augurs read birds, and his predictions about the city's kindred politics have a documented correlation with traffic patterns that the registry's analysts have given up trying to explain. The anarchs consult him before moving anything large. The file's assessment: low threat, high value, and one standing warning. He has predicted three incidents in advance, each time from the same interchange. The interchange is scheduled for expansion. He has stopped sleeping. The overpass, he says, is not finished telling him why.",
          photo: "assets/img/char_malkavian17.png"
        },
        {
          id: "malkavian18",
          name: "Ingrid Solberg",
          alias: "THE FJORD LISTENER",
          gen: "10th",
          era: "1900s to present",
          location: { city: "Oslo", place: "A boathouse on the fjord's edge" },
          threat: "low",
          lore_md: "Ingrid Solberg listens to the fjord. Embraced in early 20th century Oslo by a Malkavian who wanted the water watched, she keeps a boathouse on the harbor's edge and reads the city's moods in the traffic on the water: the ferries, the freighters, the things that surface where nothing should be.\n\nHer role is the coast's early warning. The registry's file credits her with the only advance notice of two separate incursions into Norwegian waters, both times reported as weather. The court schedules around her forecasts and has never once asked her method, on the grounds that the method works and curiosity is expensive. Her delusion is that the fjord remembers everything that has been dropped in it. The file's last note: she has started asking the fjord about a specific year. She will not say which. The boathouse has two chairs now.",
          photo: "assets/img/char_malkavian18.png"
        },
        {
          id: "malkavian19",
          name: "Ptolemy the Lesser",
          alias: "THE LIBRARY'S GHOST",
          gen: "7th",
          era: "Antiquity to present",
          location: { city: "Alexandria", place: "The drowned stacks of the old library" },
          threat: "mid",
          lore_md: "Ptolemy the Lesser haunts the drowned stacks of the old library, and the registry's Alexandria fragments are his footnotes. Embraced in the ancient city by a Malkavian who served the Mouseion, he spent the centuries after the fires collecting what burned: every text he could remember, reconstruct, or steal, catalogued in a system only he can read.\n\nHis delusion is that the library never burned, and the file's archivists note that his collection has settled several arguments the surviving record could not. Both sects have tried to acquire it. He trades single entries for single answers, and his prices are always exactly what the buyer did not want to pay. The file's assessment: mid threat, irreplaceable, and one standing mystery. His catalogue contains entries dated after the fires. He says the library kept writing. Nobody has proven otherwise, and the divers who checked the harbor came back with pages.",
          photo: "assets/img/char_malkavian19.png"
        },
        {
          id: "malkavian20",
          name: "Ophelia Grant",
          alias: "THE THAMES ORACLE",
          gen: "12th",
          era: "2000s to present",
          location: { city: "London", place: "A night bus that never terminates" },
          threat: "low",
          lore_md: "Ophelia Grant rides the night bus that never terminates. Embraced in 2000s London by a Malkavian who understood the city's arteries, she works the night network as the clan's moving oracle, the Lunatic who sees the city from the window seat and reports what the routes reveal.\n\nHer intelligence is the flow of the streets at three in the morning: who is being moved, which warrens are being watched, where the city's kindred traffic and the Second Inquisition's patterns cross. The registry's file rates her the most reliable street-level source in London and notes that her predictions arrive as bus timetables. Her delusion is that the network is a single vehicle and every passenger has a stop. The file's last note: she has started announcing stops. The warrens have started listening. The bus, the drivers insist, is not in the fleet.",
          photo: "assets/img/char_malkavian20.png"
        }
      ]
    }
  ]
};
