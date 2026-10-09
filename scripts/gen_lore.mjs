/* ============================================================================
 * SCHRECKNET // node VLA-7 — file server generator
 * ----------------------------------------------------------------------------
 * Writes the real files served from /downloads. Every one of them is text a
 * kind of creature might actually have typed: filed, dated, sourced, and
 * willing to admit where it is guessing.
 *
 *   node scripts/gen_lore.mjs
 * ==========================================================================*/

import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = resolve(ROOT, 'downloads');
const TRANSMITTED = '2026-10-09';

const RULE = '='.repeat(68);
const THIN = '-'.repeat(68);

function render(doc) {
  const { title, source, classification, verification, abstract, sections } = doc;
  let s = '';
  s += RULE + '\n';
  s += title.toUpperCase() + '\n';
  s += RULE + '\n';
  s += `SOURCE NODE    : ${source}\n`;
  s += `CLASSIFICATION : ${classification}\n`;
  s += `VERIFICATION   : ${verification}\n`;
  s += `TRANSMITTED    : ${TRANSMITTED}\n`;
  s += `FILE           : downloads/${doc.file}\n`;
  s += THIN + '\n\n';
  s += '  ' + abstract + '\n\n';
  sections.forEach((sec, i) => {
    s += `${i + 1}. ${sec[0].toUpperCase()}\n`;
    sec[1].forEach((p) => { s += '\n' + p + '\n'; });
    s += '\n';
  });
  s += RULE + '\n';
  s += 'END OF FILE — verify against a second copy before you act on it.\n';
  s += RULE + '\n';
  return s;
}

const FILES = [];
const add = (file, title, source, classification, verification, abstract, sections) => {
  FILES.push({ file, title, source, classification, verification, abstract, sections });
};

/* ---------------------------------------------------------- 01 manifesto --- */
add('nosferatu_manifesto.txt', 'The Manifesto of the Warren',
  'VLA-7 (Prague) — adopted by the Compact, 1994, amended twice since',
  'EYES ONLY',
  'WORD SIGNED — held by 6 of 7 Compact delegates',
  'Nine articles. The first seven are law. The eighth is a promise. The ninth is the reason the other eight exist.',
  [
    ['Article the first — On the ground we hold', [
      'A Nosferatu does not own land. A Nosferatu holds ground. The distinction is not academic; it is the whole of our law. Land can be surveyed, taxed and inherited. Ground cannot be inherited, only lent, and only for so long as somebody is awake to keep it.',
      'Lent ground has an expiry and the expiry is not a date. It is the moment the holder stops being in it. Every Warden in this Compact can end a tenancy by arriving at dawn and finding nobody home. Nobody has ever appealed that ruling.',
    ]],
    ['Article the second — On names', [
      'We take our names from below. Not from the family above us, which we did not choose, and not from the sire, whose gift we did not ask for. A name taken from below is a name that was chosen by the person who carries it, in a place where nobody else was listening.',
      'This is vanity dressed as principle. It is also the only defence we have against a Second Inquisition team that knows our birth names. Do not cheapen it.',
    ]],
    ['Article the third — On the Word', [
      'The Word is the oldest discipline we own and the one we speak least about. It cannot be taught in a document and it is not written here. A childe who has not been given the Word by their sire has no sire, and a sire who has not given it has no childe. Both facts are true and neither is comfortable.',
      'Word-bond, bloodbond and regalia are three threads of one rope. Pull the wrong one and the rope remembers.',
    ]],
    ['Article the fourth — On counting', [
      'We count ourselves and we count them. Not out of hatred — out of the plain need to know the size of the hole we are standing in. SEWER_WITCH wrote the discipline and she was right to: a Warren that cannot count its own mouths will be counted by somebody else.',
      'The count is filed, not published. Anyone who reads a published count aloud has broken Article the second.',
    ]],
    ['Article the fifth — On guests', [
      'Guest-right is absolute and it is also finite. A guest who stays past the fourth dawn is no longer a guest; they are a liability with a pulse. No Compact delegate will move against them. Every Compact delegate will watch them.',
    ]],
    ['Article the sixth — On the Compact', [
      'The Compact is not an army, a court, or a religion. It is eleven signatures on a document that names a sentinel. The sentinel stands watch. It is not elected and it is not thanked. It has been standing watch for four hundred years and it would like the record to show it was never once thanked.',
    ]],
    ['Article the seventh — On the mask', [
      'We do not hide because we are ashamed. We hide because we are old. A face that has been worn for four centuries is a face a hunter can learn, and a face that has been learned can be put in a report. Every mask we wear is a wall between our history and their filing system.',
      'Take the mask off in public and you have not revealed yourself. You have revealed that you were hiding.',
    ]],
    ['Article the eighth — On the old net', [
      'There is a network that runs underneath the one we are speaking on. It is slower, quieter, and it holds things the bright net is not supposed to hold. Everyone on this Compact knows it exists. Nobody on this Compact has written its address down, and the Compact has never authorised a single action taken through it.',
      'We are not proud of the old net. We are simply the only ones still using it.',
    ]],
    ['Article the ninth — Why the first eight exist', [
      'The ninth article is the one nobody signs. It says the first eight exist because we were made this way and not because we chose to be, and that the whole of our civilisation is the project of turning a curse into a discipline.',
      'That sentence has been in every copy of this document since 1994. It has never been countersigned. The Compact considers the absence of a signature on Article the ninth to be the point.',
    ]],
  ]);

/* -------------------------------------------------------- 02 curse of blood --- */
add('the_curse_of_the_blood.txt', 'The Curse of the Blood',
  'VLA-7 (Prague) — teaching copy, amended 2019',
  'INTERNAL — teaching material',
  'WORD SIGNED — see clan.html, "The Curse"',
  'Two facts, both of them cheap to state and expensive to live. Everything else written about the Curse is either decoration or a lie told kindly.',
  [
    ['What is actually true', [
      'First: the Hunger. It is not hunger. It is arithmetic. Blood is the only thing that answers a question the body asks every night, and the body asks in the only language it has left. A Nosferatu who has not fed in a week is not being polite about it. They are solving.',
      'Second: the sun. It does not kill us. It makes us legible. Daylight strips away the mask in a way that no discipline in this Compact can repair, and it does it to everybody at once, which is why we sleep through it and why the Warrens below the tram lines are older than any of our claims.',
    ]],
    ['What people say, and why they say it', [
      'The oldest comfort in the old net is the claim that the Embrace burns the memory away entirely, that somewhere behind every Nosferatu there is a person walking in the sun who has simply forgotten us. It is a beautiful story. It has been traced to a Toreador salon in Vienna in the 1740s and it has never once been true.',
      'We do not forget. We remember everything, which is why we write things down and then burn them. That is not a curse. It is an archive with a temper.',
    ]],
    ['The arithmetic, in practice', [
      'Cold makes the calculation harder, not easier. Fear makes it easier, which is why the Warrens have a standing rule about never hunting within a mile of a domain and never taking from a frightened host. Hungry and cold and afraid is not a stronger vampire. It is a slower one with worse judgement.',
      'A host who is willing is worth more than a host who is not, and every house on this network has lost someone to that arithmetic.',
    ]],
    ['RETIRED LORE — DO NOT REPEAT', [
      'The claim that our kind cannot cross a threshold uninvited was a Toreador comfort story with a Prague accent. It is false. It has been tested on this node. The threshold holds; what fails is the invitation held afterwards.',
    ]],
  ]);

/* ------------------------------------------------------ 03 disciplines ref --- */
add('disciplines_reference.txt', 'The Nine Disciplines — Field Reference',
  'VLA-7 (Prague) — Compact study circle, revised 2021',
  'INTERNAL — study material',
  'WORD SIGNED — 9 of 9, one per discipline',
  'Nine disciplines, what they cost, and the two of them that will get a childe killed before they get him useful.',
  [
    ['Dominate', [
      'Level one: a suggestion that sticks. Level two: a command. Level three: an order, obeyed in the moment and resented for a week. Level four: an order obeyed while the subject knows it is wrong, which is the level where the Masquerade starts to leak.',
      'Dominate is the discipline that makes a Masquerade possible and the discipline that most often ends one. Every Venue on this network has a floor plan and every floor plan has a Dominate in it.',
    ]],
    ['Fortitude', [
      'Hit harder, heal faster, ignore the cold. A Nosferatu at Fortitude four can be shot and continue, which is a mixed blessing in a city with a Second Inquisition in it.',
      'The one rule: Fortitude does not stop pain, it postpones accounting for it. Push too far and you will finish a conversation you can no longer hear.',
    ]],
    ['Protege', [
      'Speed, and the reflex to stop a knife. Useful. Overused. A childer at Protege four and one discipline has a very short shelf life, because everybody in the building can see the hands.',
    ]],
    ['Membership', [
      'Ghouls. Wards. Lookouts. Nothing glamorous and nothing more valuable. A Warren without Membership is a room with a door, and a room with a door belongs to whoever comes down the stairs.',
    ]],
    ['Augury', [
      'Ask the blood a question. It answers in shapes, never in words. It is the single most misused discipline in the Compact: people ask what they want to know, forget which of their thoughts was the question, and act on the neighbour.',
    ]],
    ['Obfuscation', [
      'Be somewhere you were not. Harder than it sounds and the cheapest survival in this list. If you have it, use it before the second question is asked.',
    ]],
    ['Command', [
      'Order by rank without speaking. You will not have rank for years. In the meantime, Command is wasted on anyone below you, which in this Compact is everyone, which is why the discipline sits unused and resented.',
    ]],
    ['Death', [
      'Extinguish a creature. It costs you a piece of yourself and it takes an hour you will not get back. On this node it has been used eleven times since 1974 and each use is written down by name.',
    ]],
    ['Bloodbond', [
      'Not taught here. Not written here. Not remotely. Every file server that carries a bloodbond description is carrying a guess, and the guess has killed people.',
      'What we will say: it is the strongest thing we can make, it cannot be broken by anything we know, and the mechanism that makes it unbreakable is also the mechanism that makes it permanent.',
    ]],
  ]);

/* ------------------------------------------------------ 04 anatemy of kiss --- */
add('anatemy_of_the_kiss.txt', 'Anatemy of the Kiss',
  'VLA-7 (Prague) — restricted, one copy, held by ARCHIVIST HOLT',
  'RESTRICTED',
  'RESTRICTED — do not copy, do not quote, do not discuss on the boards',
  'The only surviving anatomical description of a bloodbond on this network. It is incomplete and everyone who has written one since has done worse.',
  [
    ['What was observed', [
      'Two vessels, one wound, and a deliberate refusal to break contact. The host and the bonded do not heal at the same rate. The bonded heals first. That asymmetry is the entire mechanism and everything else is packaging.',
      'The bond is not a leash. A leash can be cut. This is closer to two hands that have grown into one another, and the pain of severing it is not pain in the limb. It is the absence of a limb.',
    ]],
    ['On permanence', [
      'Four attempts to break a bloodbond are recorded in this file. All four parties survived. None of them described it in language anyone was willing to transcribe twice.',
      'The working conclusion is that the bond cannot be severed, only starved — and that a starved bond is worse, because it turns inward. Two people who shared a wound for a century will not survive what happens when you take it away.',
    ]],
    ['On diablerie', [
      'Here is the thing nobody wants on the boards: the final mechanism of a bloodbond is the reason diablerie is nearly unspeakable, not merely illegal.',
      'To diabler a bonded vampire is to take the bonded with them. The bond is not severed by the death; it is the mechanism of it. Every elder who has ever been bloodbonded and every childe who has ever watched an elder get diablered knows this. It is the closest thing this world has to a moral absolute, and it is enforced entirely by everyone agreeing to never mention it.',
      'Diablerie is banned under the Camarilla charters and under the Sabbat rites. Read those two documents side by side and you will find exactly one sentence they agree on. It is not about cruelty.',
    ]],
  ]);

/* ----------------------------------------------------- 05 ventrue vs nosferatu --- */
add('ventrue_vs_nosferatu.txt', 'The Court and the Compact',
  'VLA-7 (Prague) — political study, not policy',
  'INTERNAL — study material',
  'WORD SIGNED — Compact delegates only',
  'Both houses end up at the same address: ground, held, at a cost nobody volunteers to name. The difference is who signs for it.',
  [
    ['The Ventrue', [
      'The Ventrue are organised, resourced, and comfortable. They hold territory, collect tribute, and enforce the Masquerade because the Masquerade keeps their dinner parties small and exclusive. They are, by every measure that matters, extremely effective.',
      'They also forget us. Not out of malice — out of administration. A Ventrue who has never been hungry does not understand a word we say about the Hunger, and does not think to ask.',
    ]],
    ['The Nosferatu', [
      'We are old, unfunded, and effective in exactly one place. We hold warrens beneath cities rather than territory above them. We move at night and sleep through the day, which means our entire existence is scheduled against the hours in which the Second Inquisition can also operate.',
      'We are not the enemy of the Court. We are the thing the Court was built to not be, and that is why the Court finds us both embarrassing and necessary.',
    ]],
    ['Where they actually collide', [
      'Every time a Ventrue prince notices that a domain under his city has no owner, someone from below has to be unpleasant enough to make it unprofitable to annex. That is the entire basis of our ground rights, and it is why ground rights are lent and never owned.',
      'A Compact delegate who has never met a prince personally has almost nothing to say at a Conclave. This is not a moral failing. It is a structural one, and it is older than both houses.',
    ]],
  ]);

/* ------------------------------------------------- 06 warren survival guide --- */
add('warren_survival_guide.txt', 'Warren Survival Guide — Practical',
  'VLA-7 (Prague) — Deep Warrens cante',
  'OPEN — but read it and then put it back',
  'VERIFIED — four copies held, all agree',
  'Not lore. A list. Everything below has been tested by somebody who is no longer available for questions.',
  [
    ['Light and air', [
      'Bring none. Carry a chemical light, never a flame — flame announces you to everybody above and you do not know who is listening. If you must burn something, burn it in the one chamber on the list where the smoke has nowhere to go, which is not a phrase to say out loud.',
      'Air is the resource people kill each other over. Count your hours underground the way other people count money, and do not assume the next chamber has air because you can breathe in the last one.',
    ]],
    ['Water', [
      'High water marks are not guidelines. The Vltava takes the lower tunnels on a bad week and the upper tunnels on a worse one. Learn the mark before you learn the route.',
      'Standing water carries more than water. If you have to wade, wade shallow and wade fast.',
    ]],
    ['The third ring', [
      'Do not answer the third ring. That is not superstition, it is observation: the first ring is a call, the second is a confirmation, and the third is a question that has already been answered for you.',
      'If somebody is asking you to answer it, they are not asking. They are being polite about what they want.',
    ]],
    ['Salt, wardens, and the third dawn', [
      'Salt a chamber when you leave it and never when you enter it. Salt is a message with one meaning and no room for negotiation.',
      'The Warden comes at dawn and does not care who you are. If you need to stay in a tenancy past the fourth night, do not stay. Move, and move before you are told to.',
    ]],
  ]);

/* ------------------------------------------------------- 07 burn protocol --- */
add('terminal_burn_protocol.txt', 'Terminal Burn Protocol',
  "VLA-7 (Prague) — Kosta's standing order, praha-sever",
  'OPEN — to Compact delegates only',
  'WORD SIGNED — Warden Kosta',
  'What to do with a document that cannot be carried and a host that cannot be left. Read once. Then stop thinking about it.',
  [
    ['Class one — the ledger', [
      'Ledgers do not burn well and they do not burn quietly. Paper remembers, and paper in a city with a Second Inquisition is a confession with a date on it.',
      'Use the incinerator at Hostivar and go alone and go at night. Do not carry the ledger and anything else at the same time. Two objects make a pattern and a pattern makes a story, and a story has a witness.',
    ]],
    ['Class two — the media', [
      'Notebooks, recorders, and anything with a battery go into water, not fire. A phone in a river is a phone. A phone in a burner is an invitation and an address.',
      'Remove the media, keep the casing. A casing says nothing. A recording says everything.',
    ]],
    ['Class three — the body', [
      'This section is deliberately short. Two methods only: the river, with a weight, at a crossing where the current has already taken something this month; or the tunnels, which will take it in three days and ask nothing.',
      'The tunnels are cleaner. The tunnels are also the Warren, and everything that happens in the Warren is eventually filed by somebody who owes you something.',
    ]],
    ['Class four — the person', [
      'Sometimes the safest witness is a living one who has been told a small false thing. This is a last resort and it has been used four times on this network, and twice it worked, and twice the person is still alive and still repeating it.',
      'It is not diablerie. It is not mercy. It is administration. Write that down somewhere you will find it when you are tempted to be proud of yourself.',
    ]],
  ]);

/* ------------------------------------------------------- 08 network codes --- */
add('network_codes.txt', 'Network Codes and Old-Net Handshake',
  'VLA-7 (Prague) — protocol annex',
  'EYES ONLY',
  'WORD SIGNED — protocol annex, 4 of 4 delegates',
  'How a signal announces itself, and how to tell a friendly handshake from a very good imitation of one.',
  [
    ['The call', [
      'A legitimate node answers on the third ring, repeats the last two words of the call, and waits. It does not complete the phrase and it does not ask a question.',
      'Anything that completes the phrase for you is not a node. Anything that answers on the first ring is a node that has been listening too eagerly, which means a node with a second customer.',
    ]],
    ['The three questions', [
      'Which relay? (Answer with the node code only, never the city.) How many are you? (Answer with a number, never a name.) What did you burn? (Answer with the file name, never the content.)',
      'A real node will refuse to answer the third question in full and will offer to verify it later. An imitation cannot, because it does not know what you burned. This is the whole of our authentication and it is not much.',
    ]],
    ['Wordlock', [
      'The Word is never sent over the wire. It is never typed into a board, never written in a file, and never used to authenticate anything. If somebody offers you a Word-lock over the network, they are selling you something that was never theirs.',
      'The old net has its own handshake and it is worse and slower and it holds. Addresses for the old net change when the holder is burned, and the new one is spoken, never written.',
    ]],
    ['Dormancy', [
      'A relay that has been silent for more than eleven hours is not necessarily dead. A relay that has been silent for more than eleven hours should not be spoken to until it speaks first.',
      'This is the single most useful rule on the list and it is the one people break, because the alternative to breaking it is admitting somebody is dead.',
    ]],
  ]);

/* ---------------------------------------------------- 09 schrecknet protocol --- */
add('schrecknet_protocol.txt', 'SchreckNET Protocol — Operating Rules',
  'VLA-7 (Prague) — source node',
  'EYES ONLY',
  'WORD SIGNED — source node, 7 of 7 delegates',
  'The rules by which this mirror exists. There are nine. The tenth is the reason the other nine are necessary, and it is not written down.',
  [
    ['Scope', [
      'SchreckNET is a mirror. It is not a network, not a service, and not an organisation. It holds what its custodians choose to hand it and nothing else.',
      'Every relay is a person. When a relay goes quiet, it is not a server that went offline. Read the census again and remember that every row in it is somebody who agreed to keep a light on.',
    ]],
    ['Custodianship', [
      'A custodian holds a relay. They do not hold the archive. They hold one node of it and they are responsible for what they forward and for what they refuse to forward.',
      'LAX-5 has been running unattended since March, which means a relay is currently being operated by no one and is still serving traffic. Nobody has taken it down, because the person who could authorise taking it down would have to admit they know who is doing it.',
    ]],
    ['Prohibitions', [
      'Do not name a sire on a public node. Do not carry a Word over any wire. Do not use the boards to settle a grudge. Do not index this network, and do not allow it to be indexed. Do not describe the Vienna burn in anything other than the words the Vienna letters actually contain.',
    ]],
    ['The Vienna rule', [
      'The Vienna node is gone. The relay is presumed physical, which is a sentence that means we are not going to look. The archive of Vienna survived because one person carried it out by hand in a coat, and that person is on this node now and has not been named in this file.',
      'If you find yourself reconstructing Vienna from rumour, stop. You will produce something that looks right and is wrong, and on this network that is the only unforgivable outcome.',
    ]],
  ]);

/* ------------------------------------------ 10 second inquisition field manual --- */
add('second_inquisition_field_manual.txt', 'Second Inquisition — Field Manual (Recovered)',
  'BER-6 (Berlin) — recovered from a hunter safe in Leipzig, 2019',
  'EYES ONLY — do not read aloud where a ghoul can hear',
  'VERIFIED — three copies, contents identical',
  'Not our document. Ours now. It tells us exactly how they are organised, and it is the most reassuring thing we have ever read.',
  [
    ['Structure', [
      'Four standing orders per hunter team, issued in writing before deployment. KOSTA intercepted one set during the Praha-Sever sweep in April and posted the text to the boards within the hour.',
      'Order one: establish the relay before touching the host. Order two: take the archive before the bloodline — they will talk eventually, archives do not. Order three: no collateral, on the theory that a clean operation stays covert. Order four: file everything, in writing, by morning.',
      'This is why we burn our addresses before we burn our ledgers. They are thorough and they are bureaucratic and both of those things are predictable.',
    ]],
    ['Method', [
      'They arrive during the day. Every team we have watched works the daylight hours: locate a Masquerade breach through municipal records, walk the tower from the bottom, and find the ground by subtraction.',
      'A hunter does not fight. A hunter manages a fight. They want the bloodline awake, isolated, and aware that it has been outnumbered. When it surrenders, they take the sire and the archive and let the childer go.',
      'That last clause is deliberate. It is a recruitment strategy and it has worked twice on this network.',
    ]],
    ['Weapons', [
      'Firearms, blades, incendiaries, and a discipline of their own that we cannot reproduce from the files. Their equipment is legal, serialised and dull, which is the most frightening thing about them.',
      'Their vehicles are the real tell. A Second Inquisition team moves in unmarked white vans and they always park facing the exit.',
    ]],
    ['What they do not know', [
      'They do not know about the old net. They have never found it, and every lead they have chased onto it has been fed to them by somebody who wanted them looking elsewhere.',
      'NULLPOINTER keeps two files on the boards full of things that will be found. The archive stays full. An empty archive is an invitation and a full one is a curtain.',
    ]],
  ]);

/* ------------------------------------------------------- 11 baba yaga file --- */
add('baba_yaga_dossier.txt', 'BABA YAGA — OPEN FILE',
  'VLA-7 (Prague) — Compiled from three sources, none of them verified',
  'OPEN FILE — UNVERIFIED',
  'UNVERIFIED — do not act on this. Do not repeat it either.',
  'Everybody on this network has heard the name. Nobody on this network will write down where they heard it. That is not cowardice, it is arithmetic.',
  [
    ['What is claimed', [
      'A Tremere, or something that was Tremere before it stopped counting, operating out of a farmhouse with a high fence and no visible road to it. Vassalage chains. Debts bought by permission rather than by blood. A reputation for keeping every promise and for having made the promise in the first place.',
      'The signature on three separate reclamation notices is the same hand as the summons sent to the Vienna letters, and the seal on all three is two sizes too large for the die it was cut from.',
    ]],
    ['What we can actually support', [
      'That the seal is wrong. That is a fact and it is a small one.',
      'That three separate people, who do not know each other, have described the same house and the same fence in the same words. That is a coincidence with a very specific shape.',
    ]],
    ['The thing this file is actually for', [
      'It is for the person who is going to be tempted. Because that person will be shown a genuine sigil, a real name, and a debt that can be settled tonight, and the pull will be enormous and completely reasonable-looking.',
      'The Compact has no position on Baba Yaga. We have a file, an unverified seal, and a standing instruction: if you are ever asked to accept a favour from a house you cannot reach, assume it was arranged, and assume the arrangement was made by somebody who needed you to have one fewer option.',
    ]],
  ]);

/* ------------------------------------------------------ 12 red room index --- */
add('redroom_index.txt', 'Red Room Index',
  'NYC-2 (New York) — Annex',
  'DO NOT INDEX',
  'VERIFIED — Annex, continuously maintained',
  'Six rooms that are not clubs, are not courts, and are not a network. They are places where blood is served and nothing else is traded.',
  [
    ['The Annex rule', [
      'No regalia. No ghouls in the deep rooms. Leave the way you came. The Red Rooms take no sides.',
      'Nothing done in a Red Room is ever reported to a Prince. That is not neutrality. It is the only guarantee the rooms have and the only reason anybody still uses them.',
    ]],
    ['How to knock', [
      'Post the room, the night, and nothing about yourself. Silence is a complete answer and you will not be told which kind.',
      'State a clan and you will be answered by a lobby. State how many and you will be answered at all.',
    ]],
    ['On diablerie', [
      'The request arrives once a month, in the same shape, from a different address. The Annex has never confirmed one and has never denied one.',
      'Write down what you were about to do before you do it, and read anatemy_of_the_kiss.txt first. The reason diablerie is nearly unspeakable is not a law. It is anatomy, and the anatomy does not care who you are.',
    ]],
    ['The six rooms', [
      'THE ABATTOIR (prague-sever) — sub-level behind the meat market, nine vaults, a ledger that has never been balanced and a vault count that has never been nine.',
      'CARRION CHOIR (new-york-two) — nine chairs and a gramophone. They trade in what the Second Inquisition knows versus what it believes, and they are right more often than anyone would like.',
      'THE LONG TABLE (los-angeles-five) — the Free Blooms source. The building has been in custody since March; the table has not stopped being set.',
      'KAMIANETS (ukraine) — nine crates, medical grade, no manifest. The route is a roadblock, a doctor who owes a debt, and a toll road that has never once asked for cash. That is not secrecy. That is architecture.',
      'THE SIXTH FLOOR ABOVE THE HARDWARE STORE (prague-seven) — a punk crew, no flag, eleven of them. The best-informed people in this city, and the only room in Prague that a prince has never been able to explain away.',
      'LOW CARNAGE (berlin-six) — free, no cost, no cover. It attracts exactly the traffic you would expect and nobody has ever bought anything.',
    ]],
  ]);

/* ------------------------------------------------------ 13 blood discipline --- */
add('blood_discipline_tome.txt', 'The Blood Discipline Tome — Notes',
  'VLA-7 (Prague) — Doc. Feuer seminar, Berlin papers',
  'INTERNAL',
  'VERIFIED — one of four papers to survive the burn',
  'Four papers, one of which still exists. The thesis is that blood remembers and that the discipline is the act of getting it to answer.',
  [
    ['The thesis', [
      'Feuer argues that the blood is not a substance we consume but a language we read. The Hunger is not appetite. It is the grammar of the thing insisting on being spoken.',
      'He writes, and this is the line the seminar quotes, that a vampire does not feed on a person. A vampire reads a person, and occasionally the reading is wrong.',
    ]],
    ['The method', [
      'Prolong the contact past necessity. In practice: take less than you need. Feuer claims this is discipline and the older hands call it heresy, mostly because the older hands have never managed to take less.',
      'The counter-argument, from the seminar floor, was that a childer taught to take less will be taught to take more by somebody less careful. There is no answer in the paper. Feuer lost the argument and kept the paper.',
    ]],
    ['Why it matters here', [
      'This node has not resolved it and has decided not to pretend to. Two houses on this Compact run the seminar and both send a childer.',
      'The Third Reconstruction was only possible because somebody understood what was in the blood and somebody else was willing to destroy what was in the body. Both of those facts are in the paper. Neither of them is comfortable.',
    ]],
  ]);

/* ------------------------------------------------------ 14 ventrue dossier --- */
add('clan_ventrue_war_council.txt', 'Clan Dossier: Ventrue — War Council',
  'VLA-7 (Prague) — house study file',
  'INTERNAL — house study',
  'WORD SIGNED — Compact delegates',
  'They have never lost a war they were willing to lose slowly. That is the whole of our intelligence assessment.',
  [
    ['Shape', [
      'Hierarchical, patient, and entirely comfortable. The Ventrue are the best-run organisation on this network and they are the only house whose internal correspondence is genuinely boring.',
      'They hold territory, collect tribute, and enforce the Masquerade because the Masquerade keeps their rooms small and their guest lists short. There is nothing wrong with that. It is simply not aimed at us.',
    ]],
    ['The War Council', [
      'Their council does not meet to decide. It meets to ratify. Everything that matters has already happened when the council convenes, and the meeting exists so that the record shows a deliberation.',
      'Two of our delegates have sat in on nothing. One of them once attended a Conclave as a guest of an elder and reports, without irony, that it was the most boring four hours of a very long life.',
    ]],
    ['Where we are wrong about them', [
      'They are not our enemy. They are our accountant. They hold ground we hold tunnels under, and the day they decide the tunnels are an asset rather than a nuisance is the day this network stops existing.',
      'GRÄFIN VON HALL has suggested, in writing, that the Compact should be given a seat. This is a provocation and it is also a warning.',
    ]],
  ]);

/* ---------------------------------------------------- 15 toreador dossier --- */
add('clan_toreador_seductress.txt', 'Clan Dossier: Toreador — The Seductress',
  'VLA-7 (Prague) — house study file',
  'INTERNAL — house study',
  'WORD SIGNED — Compact delegates',
  'They are the reason half the myths about us exist, and they have never once been asked to stop.',
  [
    ['Shape', [
      'Artistic, amoral, and physically impossible to argue with. The Toreador produce the Masquerade the way weather produces a storm: not deliberately, but at volume.',
      'Their disciplines are Membership and Protege. Their politics are patience. Their contribution to this network has been the oldest and worst idea in the file, which we are about to repeat so you know what to distrust.',
    ]],
    ['The myth they spread', [
      'The claim that the Embrace burns the memory away, leaving a person walking in the sun who has simply forgotten us, was traced to a Toreador salon in Vienna in the 1740s and it has never been true.',
      'It has been repeated for two hundred and eighty years because it is kind. The Toreador are not lying for profit. They are lying for kindness, which on this network is worse, because you cannot file it against them.',
    ]],
    ['The Salon Rouge', [
      'Vienna, 1740s. Our reading is that a house elder took a human she loved and told her a story so she would not have to grieve, and the story spread because it was repeated by everyone who heard it.',
      'No apology has ever been offered. Nobody at the Salon Rouge believes they need to offer one.',
    ]],
  ]);

/* ----------------------------------------------------- 16 ravnos dossier --- */
add('clan_ravenous_night_watch.txt', 'Clan Dossier: Ravnos — The Night Watch',
  'VLA-7 (Prague) — house study file',
  'INTERNAL — house study',
  'WORD SIGNED — Compact delegates',
  'They are invited into every city and out of every city, and they keep a book of both. The book is why they are not invited anywhere on this network.',
  [
    ['Shape', [
      'The Ravnos arrive at an event and the event is over. That is the entire cultural contribution and it is more disruptive than any discipline in this file.',
      'Shapechange, the Feast, and a clown\'s licence that nobody has ever successfully revoked. They offend constantly and they are almost never the cause of the thing people think caused it.',
    ]],
    ['The uninvited list', [
      'The Ravnos hold an internal ledger of places they were made welcome and a longer one of places they were made welcome twice. The second list is read aloud at every Feast.',
      'On this network: the Feast is not hosted. The Compact does not invite them, the boards do not accept their handles, and the position has been formally agreed for four years. The Ravnos consider this funny, which is precisely why it is not dangerous.',
    ]],
    ['The one we still watch', [
      'There is one Ravnos in Prague who does not tell jokes and does not change shape. He has been in the city for nine years, he watches, and he has not once been asked what he is waiting for.',
      'The Compact has no position. The observation has been minuted three times.',
    ]],
  ]);

/* ------------------------------------------------------- 17 garou dossier --- */
add('clan_garou_pack_laws.txt', 'Clan Dossier: Garou — Pack Law',
  'VLA-7 (Prague) — house study file',
  'INTERNAL — house study',
  'WORD SIGNED — Compact delegates',
  'They will kill us on principle, forget us on principle, and then fail to tell the difference, which is a worse problem than either.',
  [
    ['Shape', [
      'Loyal to nothing but the pack, patient to a point that borders on geological, and unforgiving about an insult given in a language they have not bothered to learn.',
      'They are the only other clan on this network whose ground rights predate ours, and the only one whose claim is territorial rather than administrative. That has produced exactly one war in four hundred years and it was extremely short.',
    ]],
    ['Rage and the Wyld', [
      'The Wyld is the trick: something inside them that is not them, that can be bound and can be broken and can be betrayed by a sufficiently good offer. Every Garou pack runs on the same private argument about how much rope to give it.',
      'A pack at war is a pack that has stopped holding the argument properly. This is the single thing a Second Inquisition team looks for and the single thing we warn our childer about first.',
    ]],
    ['Our standing position', [
      'Armistice. No ground disputes, no blood exchanges, no favours. The packs of Bohemia hold a border with our Warren and the border has not moved since the Compact was signed.',
      'There is a rumour that a pack near Brno has been asking, quietly, whether the old border is still defended. GRÄFIN VON HALL says the answer is yes. We have not asked the pack.',
    ]],
  ]);

/* ------------------------------------------------------- 18 setite dossier --- */
add('clan_setite_dreaming.txt', 'Clan Dossier: Followers of Set — The Dreaming',
  'VLA-7 (Prague) — house study file',
  'INTERNAL — house study',
  'WORD SIGNED — Compact delegates',
  'Our delegates do not dream. The Setites do, and they say so, and both of those sentences have been verified more than once.',
  [
    ['The Dreaming', [
      'The Followers of Set describe sleep as an active discipline rather than an absence. Members report dreams with a fixed architecture: chambers, corridors, and a door they have not opened in a very long time.',
      'Two of our delegates have sat through Setite accounts of this. Both were shown a room both of them recognised from a childhood neither of them remembers clearly. Neither has offered an explanation and both have written the word "consistent" in the margin, which is the most interesting thing either of them has ever written.',
    ]],
    ['What the Dreaming asks of a childe', [
      'A childe of the Temple is not trained to hunt. It is trained to describe. Precision of description is treated as a survival skill rather than a scholarly one, on the grounds that a misdescribed corridor is a dead corridor.',
      'It is an elegant discipline and it has produced the most accurate maps of the Dreaming that we hold. It has also produced two delegates who now describe our own Warren to themselves using the Setite vocabulary, which has been minuted as a concern.',
    ]],
    ['Our position', [
      'No contact. Two open files, one for the Temple and one for the Paradigm, kept separate on purpose so that a single compromised reading does not hand over the whole house.',
      'If you are sent to speak to a Setite, do not lie to them. They will not correct you, and they will remember that you tried, and both of those facts are worse for you than the lie would have been.',
    ]],
  ]);

/* ---------------------------------------------------- 18b setite paradigm --- */
add('clan_followers_of_set.txt', 'Clan Dossier: Followers of Set — The Paradigm',
  'VLA-7 (Prague) — house study file',
  'INTERNAL — house study',
  'WORD SIGNED — Compact delegates',
  'The only clan we have never fought, never negotiated with, and never understood, and we have decided that is a reasonable policy.',
  [
    ['Shape', [
      'Disciplined, austere, and relentlessly patient. The Followers of Set lose nothing and concede nothing and have been known to wait out entire houses of a different temperament.',
      'Their Paradigm is not a doctrine so much as a method. Everything they do is a version of asking what happens if. That makes them extremely dangerous and extremely bad at surprises.',
    ]],
    ['The Thin Line', [
      'Their masters keep something on the far side that they do not permit to cross. The Thin Line is the border. They hold it because they can, and they have never once been asked to move it, and they have never once offered.',
      'Two of our delegates have met a Setite. Both returned with the same report and neither can explain why they agree on it. Both filed the report and both did not sleep, and they have not said why.',
    ]],
    ['Our position', [
      'No contact. No war. No trade. The Paradigm has offered all three and we have declined all three, and the offer has been renewed annually for eleven years, which tells you more about them than it does about us.',
      'What we will say in our own files: a house that waits is a house that has not finished. Nobody on this Compact knows what they are waiting for, and that is the single open item in this file that we have never been able to close.',
    ]],
  ]);

/* ----------------------------------------------------- 19 malkavian dossier --- */
add('clan_malkavian_trauma.txt', 'Clan Dossier: Malkavian — The Long Trauma',
  'VLA-7 (Prague) — house study file',
  'INTERNAL — house study',
  'WORD SIGNED — Compact delegates',
  'The Court of Night has three hundred and fifty years of continuous consciousness in it, and this node has met three members of it, and all three were lucid.',
  [
    ['Shape', [
      'A court, an order, and a single very long argument about what has been done and whether it can be undone. The Malkavian do not forget, do not pretend not to, and treat the rest of us as people who have not been awake long enough to have an opinion.',
      'Their Strength discipline is the most honest thing in this file. An elder who has fed too often loses the ability to lie for a day. That has been tested on this network and the test was unpleasant for everyone.',
    ]],
    ['The Night', [
      'The Court of Night is not a place. It is a claim about a time. Members enter it and come back lucid, which is the part nobody believes until they have met one.',
      'A Malkavian who has been to the Night knows things about the Viennese letters that nobody alive has published. We have asked. They will answer, at length, in a fortnight, having already decided.',
    ]],
    ['Our position', [
      'Engaged. They are the most useful house we talk to and the least reliable, because a Malkavian who tells you the truth is still telling you the truth from a position four hundred years deep.',
      'Two open questions: what they know about the Vienna node, and what they meant by "the thing in the Warren is older than the Warren."',
    ]],
  ]);

/* ------------------------------------------------------ 20 brujah dossier --- */
add('clan_brujah_chicory.txt', 'Clan Dossier: Brujah — The Chicory Line',
  'VLA-7 (Prague) — house study file',
  'INTERNAL — house study',
  'WORD SIGNED — Compact delegates',
  'They were in the Prague riots in 1848, they are in every uprising in the last two hundred years, and they have never once been on our side or our enemy.',
  [
    ['Shape', [
      'Honour-bound, direct, and completely uninterested in our metaphysics. The Brujah want a childe who can fight and a city they can walk through. They regard the Compact as a filing system and the Masquerade as a costume.',
      'Their Discipline is Protege at Chapter four. It is the best street-fighting discipline on this network and every one of our childer has been taught to lose to it.',
    ]],
    ['Chicory', [
      'The Brujah garrisoned the barricade at Chicory in 1848 and lost eleven childer holding a street corner for two days against an army. The house has kept the name ever since, as a rebuke.',
      'Their word for us is "council". It is not affectionate. It means the thing that sits behind you while you do the work.',
    ]],
    ['Our position', [
      'Allied in fact, unallied in word. We have given them ground in the Karlin station twice and had it back twice, and both exchanges were conducted without a treaty because a treaty would have implied we had something to negotiate.',
      'They are the only house we would call in if the Second Inquisition put boots on the streets above a Warren, and we have never tested whether the compliment is mutual.',
    ]],
  ]);

/* ---------------------------------------------------- 21 assamilite dossier --- */
add('clan_assamite_zeal.txt', 'Clan Dossier: Assamite — The Zeal',
  'VLA-7 (Prague) — house study file',
  'INTERNAL — house study',
  'WORD SIGNED — Compact delegates',
  'They believe in a god and they believe they are its infrastructure, and the combination is not as comforting as it sounds.',
  [
    ['Shape', [
      'Ascetic, strategic, and relentlessly organised. The Assamite entered the modern world in 1948 with a laptop and a five-hundred-year plan and they are still on schedule.',
      'They do not recruit out of conviction alone. They recruit out of a demonstrated aptitude for faith, which makes them the only clan on this network that can be audited.',
    ]],
    ['The Order', [
      'A strict hierarchy of obligation, sworn to and enforced by a curia that moves cities when the local Situation Committee becomes inconvenient. Prague has had an Order cell since 1962 and it has been dismantled four times.',
      'Their Discipline is Fortitude to a degree that stops being a discipline and becomes a lifestyle. Members take damage the way other people take notes.',
    ]],
    ['Our position', [
      'Formal non-aggression, renewed every three years, signed by people who have never met. It has been broken twice, both times by their side, both times apologised for within a month.',
      'The apologies were worth more than the treaty. That is noted here so nobody in the next hundred years mistakes the Assamite for naive.',
    ]],
  ]);

/* ------------------------------------------------------- 22 tremere dossier --- */
add('tremere_blood_magic_notes.txt', 'Tremere — Blood Magic Notes',
  'VLA-7 (Prague) — contested, filed as contested',
  'INTERNAL — CONTESTED',
  'CONTESTED — two sources disagree, both signed',
  'There are two schools of thought about the Tremere and both schools are run by Tremere, which should tell you something about the reliability of both.',
  [
    ['The censure', [
      'The Tremere lost their Thaumaturgy in the Second Darkening and rebuilt it, which is the only reason they remain relevant. The rebuilding produced a Chantry and the Chantry produced a Method, and the Method is a tool that eats its user.',
      'Our position: what they rebuilt is real, what they charge for it is worse than what they charge, and every Tremere on this network agrees with the first clause and none of them will sign the second.',
    ]],
    ['The grimoire', [
      'Blood magic as practised by the Tremere is real and it is not magic. It is sympathetic resonance run through a prepared medium, and the medium is a person, and the person is always willing.',
      'Someone who is always willing is either very brave, very desperate, or has been told the wrong thing about what is on the other end.',
    ]],
    ['Where we disagree', [
      'The Prague chapter wants a permanent seat at the Compact table. The Berlin chapter wants them burned out entirely. Both positions have been minuted. Neither has been acted on.',
      'This file is filed as contested because it is contested, and a mirror that pretends its disagreements are settled is worse than a mirror that has nothing at all.',
    ]],
  ]);

/* ------------------------------------------------------ 23 sabbat dossier --- */
add('sabbat_rites_of_construct.txt', 'Sabbat — The Rites of Construct',
  'VLA-7 (Prague) — house study file',
  'INTERNAL — house study',
  'WORD SIGNED — Compact delegates',
  'They kept the Reckoning when we kept the Warren, and neither of us has forgiven the other, and both of us use the same rites at 3am without thinking about it.',
  [
    ['The Rites', [
      'Ten days, ten nights, ten groupings. Fire, water, air, earth, the sword, the chalice, the salt, the ash, the name, and the self. It is not a sabbat. It is the oldest template we have for turning a gathering into a institution, and the Sabbat simply got to it first and wrote it down.',
      'A construct is a Vampire that has been created rather than Embraced: assembled from several bloodlines and bound into a single purpose. The Sabbat have done this eleven times in four centuries and each one has been catastrophic.',
    ]],
    ['Why we care', [
      'Because it is the only documented case of Kindred manufacturing Kindred, and because every childer who asks us what happens if you are made rather than born gets the same answer: it has happened, it took a decade, and the thing that came out the other end did not have a sire.',
      'That is the whole of our warning. It is not an argument against it. It is a fact, and it is filed next to the ten groupings so that nobody reads only one of them.',
    ]],
    ['Our position', [
      'Non-aggression. Eleven Sabbat sancles have honoured it and one has not, and the one that has not was in Prague in 1997, and everybody on this node knows exactly which one, and we do not write it here.',
    ]],
  ]);

/* ------------------------------------------------------ 24 anarch dossier --- */
add('anarch_free_blooms.txt', 'Free Blooms — Anarch Charter (Recovered)',
  'PRAGUE-7 / LAX-5 — charter, incomplete',
  'INTERNAL — INCOMPLETE',
  'INCOMPLETE — three of seven signatories survive',
  'An attempt to run a city without a prince, and the best-kept piece of paperwork any Anarch has produced in a hundred years.',
  [
    ['The proposal', [
      'Blood from the bloodbank, at cost, distributed by committee, with no prince, no tribute, and no gatekeeping. Every house on this Compact read it and three of them could not sleep.',
      'ILSE BRANDT is the sole surviving signatory and she has never once been sentimental about it. Her comment on the surviving copy: "It was not an ideology. It was a supply chain."',
    ]],
    ['What actually happened', [
      'Nine crates of medical grade went out through Kamianets in a single night, routed through a roadblock, a doctor who owed a debt, and a toll road that has never asked for cash. That is the entire operation. There was no ideology step.',
      'Four delegates, one Covenant, and a blood-club owner with no idea what she was part of. Two of them are still alive. Both have said they would do it again.',
    ]],
    ['Our position', [
      'The Compact has no position and that is not evasion. A charter that moves blood without a prince is either the end of this network or the beginning of a better one, and no delegate on this node is willing to guess which in writing.',
      'What we will say: it worked once, at scale, with no losses. That sentence is in the file on purpose.',
    ]],
  ]);

/* ---------------------------------------------------- 25 los angeles report --- */
add('los_angeles_node_report.txt', 'Node Report: LAX-5 (Los Angeles)',
  'VLA-7 (Prague) — received from LAX-5, unattended since March',
  'OPEN',
  'UNATTENDED — the relay is still serving traffic and nobody is authorised to say why',
  'Six pages, one of them written by a relay to itself and logged automatically, which is the only honest sentence in the file.',
  [
    ['Status', [
      'LAX-5 has been active and unmanned since March. Custodian in custody. Traffic is up. Nobody has taken it down and nobody will explain the decision, because the decision was made in a room by somebody who will deny it was made in a room.',
      'DO NOT ROUTE THROUGH LAX-5. This is not a security instruction. It is a favour asked by the room above the hardware store, and the room above the hardware store is worth more to this node than LAX-5 is.',
    ]],
    ['What the traffic shows', [
      'Volume is up 340% since March and the pattern is wrong: it spikes at 03:00 local and the payloads are short. Not encrypted. Short.',
      'Three analysts have said "telemetry". Nullpointer has said, twice, in writing, that it is not telemetry and that whoever is on that relay knows the difference.',
    ]],
    ['The Long Table', [
      'The Annex room on this node is still being set. Somebody is still ordering the flowers. The Free Blooms source operates here and a source that operates inside an unattended relay in a building under custody is either the most resilient thing on this network or the loudest.',
    ]],
  ]);

/* ------------------------------------------------------- 26 vienna fall --- */
add('vienna_node_fall_report.txt', 'Node Report: VIE-0 (Vienna) — FINAL',
  'VLA-7 (Prague) — the only clean archive, carried out by hand in a coat',
  'EYES ONLY — FINAL — node burned',
  'FINAL — BURNED. Do not attempt recovery.',
  'The relay is presumed physical. That is a sentence that means we are not going to look. What survived is this file and what it does not say.',
  [
    ['Sequence', [
      'Eleven weeks. It did not look like an assault. It looked like an audit, then a correction, then a very polite request to hand over the keys, then nothing.',
      'The last relay log is four lines long and all four are the same line. Whatever happened, it happened on the node and it did not need the network.',
    ]],
    ['The letters', [
      'The Vienna letters were carried out in a coat by one person and are the reason this node has anything at all. They contain the only surviving account of a Talmaeon ritual and they are the reason there is an open question about what the Second Inquisition was actually looking for.',
      'They also contain a seal two sizes too large. That is in baba_yaga_dossier.txt and it is the only physical link between the two files, and it is not enough to build a case on.',
    ]],
    ['What we will not write', [
      'We will not name the custodian. We will not list the hosts. We will not reproduce the ritual, because a ritual reproduced badly on a node with a compromised mirror is how a Rite of Construct gets started.',
      'The file ends here because the archive ends here. Everything after this sentence is reconstruction, and reconstruction on this network is how a comfortable lie gets filed as a fact.',
    ]],
  ]);

/* ------------------------------------------------------- 27 prague status --- */
add('prague_node_status.txt', 'Node Report: VLA-7 (Prague) — Current',
  'VLA-7 (Prague) — source node, live',
  'EYES ONLY',
  'LIVE — this file is written by hand and is true as of today',
  'The source node, reporting on itself, which is the only honest kind of status report.',
  [
    ['The relay', [
      'Eleven relays on the census, one fallen, one quiet for nine hours. Source mirror holds the only clean copy of Vienna and the only copy of this sentence.',
      'Throughput is 34.1% of the theoretical maximum of a network that should not exist. The census is on network.html and it is the same table you are reading, because we do not maintain two versions of anything.',
    ]],
    ['The Warren', [
      'Eleven chambers on the current plate, one struck, one contested by a pack that has not filed a claim in nine years. Depth markings are current to March and the Bone Store has moved twice since.',
      'Wardens: four assigned, one active at any time. Kosta has run the Praha-Sever sweep eleven times and lost four wardens, and has said in writing that he will run it a twelfth.',
    ]],
    ['The load', [
      'Three hunter teams are working the city above the tram lines. All three are working days. Two of the three were fed here, on purpose, by files that were true and pointed somewhere else.',
      'The archive stays full. An empty archive is an invitation. NULLPOINTER is right about this and I would like it minuted.',
    ]],
  ]);

/* ------------------------------------------------------- 28 camaguey --- */
add('camaguey_creole_chronicle.txt', 'Node Report: CMQ-3 (Camaguey) — Creole Chronicle',
  'CMQ-3 (Camaguey) — oldest blood on the network',
  'OPEN',
  'QUIET — the node holds for nine hours and admits it',
  'The oldest continuous node on SchreckNET and the only one that does not apologise for its age.',
  [
    ['The hold', [
      'CMQ-3 sleeps for nine hours. It is not down. It is a schedule that predates every relay protocol we have, and every attempt to shorten it has failed in a way the technicians describe as "politely".',
      'The node has been continuous since the night of the Havana fire and it has never once lost a night, including the night the Vienna letters were carried out.',
    ]],
    ['Blood and language', [
      'Camaguey has its own word for the Hunger and it is not the word we use. The chronicle is careful here and so will I: the Caribbean Kindred do not Experience the Curse the way we do. They Experience it as a debt owed to a house that has been dead for two hundred years.',
      'That debt is the oldest continuous obligation on this network. It is not administered by anybody. It simply persists, and every Camaguey childer inherits it, and every one of them has said the same thing when asked what they think about it: "It is not a metaphor."',
    ]],
    ['Why they matter to us', [
      'Because they are the only house on this network that has never once needed the Compact, and they keep the node anyway, and when we asked why, the answer was eleven words long and we wrote it down.',
      'It is: "Because the fire was not ours, and the watching is."',
    ]],
  ]);

/* --------------------------------------------------- 29 prague warren svg --- */
const WARREN_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 420" width="640" height="420" role="img" aria-label="Plate I — Prague Warren, eleven chambers, schematic">
  <title>Plate I — Prague Warren (schematic, not to scale)</title>
  <desc>Schematic of eleven chambers beneath Prague. Depths in metres below datum. One chamber struck, one contested.</desc>
  <rect width="640" height="420" fill="#060A08"/>
  <defs>
    <pattern id="gr" width="20" height="20" patternUnits="userSpaceOnUse">
      <path d="M20 0H0V20" fill="none" stroke="#46E883" stroke-opacity="0.06"/>
    </pattern>
    <marker id="ar" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0 0 L8 4 L0 8 z" fill="#46E883" fill-opacity="0.5"/>
    </marker>
  </defs>
  <rect width="640" height="420" fill="url(#gr)"/>

  <!-- warden limit -->
  <rect x="18" y="34" width="604" height="368" fill="none" stroke="#B0562F" stroke-opacity="0.55" stroke-width="1.5" stroke-dasharray="7 6"/>
  <text x="26" y="26" fill="#B0562F" font-family="monospace" font-size="11" letter-spacing="2">WARDEN LIMIT — UNSURVEYED WATER BEYOND THIS LINE IS NOT GROUND</text>

  <!-- Vltava high water -->
  <path d="M18 300 C 120 286, 210 316, 320 302 C 430 288, 520 314, 622 300 L622 402 L18 402 Z"
        fill="#35C4D9" fill-opacity="0.07" stroke="#35C4D9" stroke-opacity="0.35" stroke-dasharray="4 4"/>
  <text x="30" y="318" fill="#35C4D9" fill-opacity="0.8" font-family="monospace" font-size="10" letter-spacing="1.5">VLTAVA — HIGH WATER MARK</text>

  <!-- tunnels -->
  <g stroke="#46E883" stroke-opacity="0.45" stroke-width="2.5" fill="none" marker-end="url(#ar)">
    <path d="M96 92 H300 V150"/>
    <path d="M300 150 H470 V196"/>
    <path d="M150 214 H300 V258"/>
    <path d="M300 258 H452 V262"/>
    <path d="M96 92 V214 H150"/>
    <path d="M470 196 V300 H560"/>
    <path d="M214 336 V262"/>
  </g>
  <g stroke="#A3B945" stroke-opacity="0.35" stroke-width="2" fill="none" stroke-dasharray="5 6">
    <path d="M452 262 H560 V336"/>
    <path d="M214 336 H380"/>
    <path d="M380 336 V196 H470"/>
  </g>

  <!-- chambers -->
  <g font-family="monospace">
    <g fill="#0F1A14" stroke="#46E883" stroke-opacity="0.75">
      <rect x="60" y="72" width="72" height="40"/>
      <rect x="264" y="132" width="72" height="40"/>
      <rect x="434" y="176" width="72" height="40"/>
      <rect x="114" y="194" width="72" height="40"/>
      <rect x="264" y="238" width="72" height="40"/>
      <rect x="416" y="242" width="72" height="40"/>
      <rect x="178" y="316" width="72" height="40"/>
      <rect x="344" y="316" width="72" height="40"/>
      <rect x="524" y="316" width="72" height="40"/>
    </g>
    <g fill="#0F1A14" stroke="#8E2A2A" stroke-opacity="0.8" stroke-dasharray="4 3">
      <rect x="416" y="186" width="72" height="40" transform="translate(0,60)"/>
    </g>

    <g fill="#C6F24E" font-size="12">
      <text x="68" y="90">A</text><text x="68" y="105" font-size="9" fill="#6B7A6E">−6m</text>
      <text x="272" y="150">B</text><text x="272" y="165" font-size="9" fill="#6B7A6E">−9m</text>
      <text x="442" y="194">C</text><text x="442" y="209" font-size="9" fill="#6B7A6E">−11m</text>
      <text x="122" y="212">D</text><text x="122" y="227" font-size="9" fill="#6B7A6E">−14m</text>
      <text x="272" y="256">E</text><text x="272" y="271" font-size="9" fill="#6B7A6E">−16m</text>
      <text x="424" y="260">F</text><text x="424" y="275" font-size="9" fill="#8E2A2A">STRUCK</text>
      <text x="186" y="334">G</text><text x="186" y="349" font-size="9" fill="#6B7A6E">−24m</text>
      <text x="352" y="334">H</text><text x="352" y="349" font-size="9" fill="#6B7A6E">−19m</text>
      <text x="532" y="334">J</text><text x="532" y="349" font-size="9" fill="#A3B945">CONTESTED</text>
    </g>

    <text x="26" y="52" fill="#8A93B8" font-size="11" letter-spacing="2">PLATE I — PRAGUE WARREN (SCHEMATIC, NOT TO SCALE)</text>
    <text x="26" y="70" fill="#6B7A6E" font-size="10">Source: VLA-7 cartography cante · depths below datum · eleven chambers, one struck, one contested</text>
    <text x="26" y="392" fill="#6B7A6E" font-size="10">Solid = surveyed. Dashed = inferred. This plate is a list of rooms, and a list of rooms can be wrong.</text>
  </g>
</svg>
`;

/* --------------------------------------------------------------- emit --- */

mkdirSync(OUT, { recursive: true });

let txtCount = 0;
for (const f of FILES) {
  writeFileSync(resolve(OUT, f.file), render(f), 'utf8');
  txtCount += 1;
}
writeFileSync(resolve(OUT, 'prague_warren_map.svg'), WARREN_SVG, 'utf8');

console.log(`downloads/: ${txtCount} .txt + 1 .svg = ${txtCount + 1} files`);
