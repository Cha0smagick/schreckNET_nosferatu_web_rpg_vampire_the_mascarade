// GENERATED SCHRECKNET BATCH FILE - do not hand-edit without re-merge
window.LORE_PART_AT_NOSFERATU = (function(){
  var P = 'assets/img/';
  function char(id,name,alias,gen,era,city,place,threat,lore_md){
    return {id:id,name:name,alias:alias,gen:gen,era:era,location:{city:city,place:place},threat:threat,lore_md:lore_md,photo:P+'char_'+id+'.png'};
  }
  var c = [
    char('nosferatuat1','The Mold Count','SPORE LEDGER','7th','1800s','New Orleans','flooded cistern gallery 6','high','Counts spore colonies the way bankers count interest. His file predates the antitribu split; the network is unsure which side he kept. Flag SPORE-INTEREST: colonies he charts double on a schedule matching SI raid cycles. Do not breathe in the gallery.'),
    char('nosferatuat2','Sister Raw','THE SKIN ARCHIVIST','9th','1970s','Detroit','Packard plant tanning room','mid','Tans information into hides. Antitribu because she sells to whoever pays in secrets the Camarilla would bury. Flag HIDE-CATALOG: 41 skins indexed, 3 match missing operators. Fee: a fact you would burn a node to protect.'),
    char('nosferatuat3','Old Grin','THE TOOTH BROKER','8th','1950s','Glasgow','subway maintenance spur 4','mid','Extracts teeth, keeps records in them. The Sword trusts him because he has never once lied, only omitted. Flag DENTAL-INDEX: recovered teeth transcribe to confession transcripts. Do not smile in his tunnel.'),
    char('nosferatuat4','Wretch of the Weir','THE DAM SENTINEL','6th','19th c','Budapest','weir sluice control vault','high','Guards a water gate nobody uses. Antitribu courier: what passes his sluice does not exist upstream. Flag FLOW-NULL: barges listed inbound never register outbound. He knows what the network is. He has said so once.'),
    char('nosferatuat5','The Boilerman','PRESSURE KEEP','10th','1990s','Kaohsiung','boiler sublevel 2','low','Maintains pressure in a shipyard that closed in 1989. The gauges read something other than steam. Antitribu signal relay: his pipes carry voice further than radio. Flag PSI-CLIMB: do not open valve 7. The last operator who did is listed as recovered.'),
    char('nosferatuat6','Mama Cull','THE TALLY OF FLESH','9th','1940s','Kingston','abattoir cold corridor','mid','Counts what enters her corridor and what leaves, and the difference is a message. The Sword uses her floor for accounting that cannot survive paper. Flag CULL-DELTA: numbers always favor the Sword by exactly what they needed that month.'),
    char('nosferatuat7','Gutter-Prophet','THE STORM RELAY','8th','1990s','Manila','drainage junction 19','mid','Predicts storms and the raids that ride with them. Antitribu weather service. Accuracy 91 percent, refusing improvement. Flag STORM-COUNT: he has named the exact hour of four SI operations. Three were correct to the minute.'),
    char('nosferatuat8','The Root Network','WHAT THE SEWER KNOWS','unknown','unknown','varies','every outfall at once','high','Meta entry. Nosferatu antitribu cells share one informant no operator has met: the sewers themselves. Eight city files describe the same voice at the same depth. Directive: if the drains answer a question you did not ask, close the valve, log the depth, and do not repeat the question.')
  ];
  return {antitribu:[{
    id:'nosferatu_antitribu', name:'Nosferatu Antitribu', nickname:'The Crawling Handlers',
    disciplines:['Animalism','Obfuscate','Potence'],
    weakness:'Monstrosity beyond the clan curse: their forms grow toward deliberate horror, and the network they serve rewards betrayal of every confidence but its own.',
    lore_md:'The Nosferatu antitribu kept everything that made the clan feared and surrendered everything that made it trusted. Within the Sabbat they run vermin, disease and dread the way their Camarilla cousins run information: as an economy.\n\nSchreckNET treats them as a separate threat class. Where a Nosferatu broker wants to be paid, an antitribu handler wants leverage, and the registry has logged handlers who spent decades cultivating a single informant. The monstrous frames are identical. The intent is not.\n\nEight confirmed handlers operate from North America to East Asia. Their methods are analog, their patience is architectural, and their files in this registry are flagged to never share a channel with their Camarilla counterparts.\n\nSTANDING DIRECTIVE: their photographs are on file and they are not for the faint. If a handler offers information unasked, it is bait. Log the offer, decline the bait, and check whether the offer mentions a place you have transmitted from.'
  ,chars:c}] };
})();
