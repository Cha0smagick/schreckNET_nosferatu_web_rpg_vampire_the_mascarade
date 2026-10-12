// SCHRECKNET VLA-7 // censor.js — sealed-fragment decryption minigame
// wraps REDACTED tokens in clickable locks; shift-cipher challenge; 3 fails = 60s lockout.
// include on any page; scan(document.body) runs on an interval, safe to call again.
(function () {
  var PHRASES = ['OCTAVIO', 'ERCIYES', 'NICTUKU', 'ALAMUT', 'TORPOR', 'DIABLERIE', 'AMARANTH', 'ELYSIUM', 'NODDIST', 'CAMARILLA', 'JYHAD', 'ABSIMILIARD'];
  var REVEALS = [
    'Beckoning ledger correction: 42 elders eastbound, not 41. One left without being called.',
    'Vienna ash sweep note: a third chantry vault was sealed, not burned. Inventory below ground.',
    'Week of Nightmares appendix: two Ravnos filed sightings in Dhaka that night. Both files are still open.',
    'D-6 transit log: station K-7 recorded 11 arrivals in one hour. The platform has one exit.',
    'Hecata addendum: the Thirteenth Ledger lists the node itself as a debtor. Amount pending.',
    'Leopold field page: blankbody census requires a photograph. It must be taken by the blankbody.',
    'Impaler file margin, 1976: he still answers letters. Do not write back.',
    'Salubri triage column: the name counted out was YOURS. Column filed under UNHEALED.',
    'Gargoyle census 1480: 13 made. 14 woke. Do not audit the difference.',
    'Giovanni vial note: Japheth speaks when the family sleeps. Transcripts forbidden above tier 4.',
    'True Brujah addendum: the missing 11 minutes concluded with a vote. No motion is on record.',
    'Node protocol section X: the network reads its own readers. This line is the trap.'
  ];
  function hash(s) {
    var h = 2166136261;
    for (var i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
    return h >>> 0;
  }
  function caesar(txt, sh) {
    return txt.replace(/[A-Z]/g, function (c) {
      var b = (c.charCodeAt(0) - 65 - sh + 260) % 26;
      return String.fromCharCode(65 + b);
    });
  }
  function isLocked() { return (+(localStorage.getItem('censor_lock') || 0)) > Date.now(); }
  function lockSeconds() { return Math.max(0, Math.ceil(((+(localStorage.getItem('censor_lock') || 0)) - Date.now()) / 1000)); }

  var ov = null, ctEl = null, rotEl = null, inEl = null, msgEl = null, attEl = null;
  var st = null; // { phrase, reveal, rot, attempts, span }

  function ensureOverlay() {
    if (ov) return;
    ov = document.createElement('div');
    ov.id = 'censor-ov';
    ov.innerHTML =
      '<div class="ce-box">' +
      '<div class="ce-title">SECURITY LOCK // DECIPHER REQUIRED</div>' +
      '<div class="ce-ct" id="ce-ct"></div>' +
      '<div class="ce-hint">shift cipher — rotate the ring until the word reads true, then type it below.</div>' +
      '<div class="ce-row"><button id="ce-minus" type="button">ROTATE \u22121</button>' +
      '<span class="ce-rot" id="ce-rot"></span>' +
      '<button id="ce-plus" type="button">ROTATE +1</button></div>' +
      '<div class="ce-row"><input id="ce-in" type="text" maxlength="24" autocomplete="off" spellcheck="false" placeholder="decrypted word">' +
      '<button id="ce-go" type="button">DECODE</button></div>' +
      '<div class="ce-msg" id="ce-msg"></div>' +
      '<div class="ce-foot"><span id="ce-att"></span><button id="ce-abort" type="button">ABORT</button></div>' +
      '</div>';
    document.body.appendChild(ov);
    ctEl = document.getElementById('ce-ct');
    rotEl = document.getElementById('ce-rot');
    inEl = document.getElementById('ce-in');
    msgEl = document.getElementById('ce-msg');
    attEl = document.getElementById('ce-att');
    document.getElementById('ce-minus').addEventListener('click', function () { st.rot = (st.rot + 25) % 26; render(); });
    document.getElementById('ce-plus').addEventListener('click', function () { st.rot = (st.rot + 1) % 26; render(); });
    document.getElementById('ce-abort').addEventListener('click', close);
    document.getElementById('ce-go').addEventListener('click', tryDecode);
    inEl.addEventListener('keydown', function (e) { if (e.key === 'Enter') tryDecode(); if (e.key === 'Escape') close(); });
    ov.addEventListener('click', function (e) { if (e.target === ov) close(); });
  }
  function render() {
    ctEl.textContent = st.rot === 0 ? st.phrase : caesar(st.phrase, st.rot);
    rotEl.textContent = 'rotation ' + st.rot;
    attEl.textContent = 'attempts left: ' + st.attempts;
    msgEl.textContent = '';
  }
  function tryDecode() {
    if (!st) return;
    if (inEl.value.toUpperCase().trim() === st.phrase) {
      st.span.textContent = '[' + st.reveal + ']';
      st.span.className = 'censor-open';
      st.span.title = 'decrypted — handle per protocol';
      close();
      return;
    }
    st.attempts--;
    if (st.attempts <= 0) {
      localStorage.setItem('censor_lock', String(Date.now() + 60000));
      msgEl.textContent = 'THREE FAILURES — channel sealed for 60 seconds.';
      attEl.textContent = '';
      inEl.disabled = true;
      setTimeout(close, 2200);
      return;
    }
    msgEl.textContent = 'REJECTED — the lock remembers.';
    render();
  }
  function open(span) {
    if (isLocked()) {
      ensureOverlay();
      ov.className = 'show';
      ctEl.textContent = '\u2014 \u2014 \u2014';
      rotEl.textContent = '';
      msgEl.textContent = 'CHANNEL SEALED — ' + lockSeconds() + 's remaining.';
      attEl.textContent = '';
      inEl.disabled = true;
      return;
    }
    var h = +span.getAttribute('data-h') || 0;
    ensureOverlay();
    st = { phrase: PHRASES[h % PHRASES.length], reveal: REVEALS[h % REVEALS.length], rot: (h % 24) + 1, attempts: 3, span: span };
    inEl.disabled = false;
    inEl.value = '';
    ov.className = 'show';
    render();
    inEl.focus();
  }
  function close() { if (ov) { ov.className = ''; } st = null; }

  function nearestLock(el) {
    while (el && el !== document) {
      if (el.classList && el.classList.contains('censor-lock')) return el;
      el = el.parentNode;
    }
    return null;
  }
  document.addEventListener('click', function (e) {
    var s = nearestLock(e.target);
    if (s) { e.preventDefault(); open(s); }
  });

  function scan(root) {
    if (!root || !document.createTreeWalker) return;
    var w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null, false);
    var hits = [], n;
    while ((n = w.nextNode())) {
      if (n.nodeValue && /REDACTED/i.test(n.nodeValue) && !nearestLock(n.parentNode)) hits.push(n);
    }
    hits.forEach(function (t) {
      var parts = t.nodeValue.split(/(REDACTED)/i);
      var frag = document.createDocumentFragment();
      parts.forEach(function (p) {
        if (!p) return;
        if (/^redacted$/i.test(p)) {
          var s = document.createElement('span');
          s.className = 'censor-lock';
          s.setAttribute('data-h', hash((t.nodeValue || '').slice(0, 48)));
          s.setAttribute('tabindex', '0');
          s.textContent = p;
          s.title = 'sealed fragment — click to run decryption';
          frag.appendChild(s);
        } else {
          frag.appendChild(document.createTextNode(p));
        }
      });
      t.parentNode.replaceChild(frag, t);
    });
  }

  var css = document.createElement('style');
  css.textContent =
    '.censor-lock{cursor:pointer;background:rgba(176,86,47,.22);border-bottom:1px dashed var(--rust,#B0562F);padding:0 3px;color:var(--rust,#B0562F);letter-spacing:1px}' +
    '.censor-open{color:var(--amber,#FFB03A);border-bottom:1px dotted var(--amber,#FFB03A)}' +
    '#censor-ov{display:none;position:fixed;inset:0;z-index:998;background:rgba(0,0,0,.88);align-items:center;justify-content:center}' +
    '#censor-ov.show{display:flex}' +
    '.ce-box{width:min(520px,92vw);background:#0a0f0d;border:1px solid var(--line,#16352A);padding:22px 24px;font-family:inherit}' +
    '.ce-title{color:var(--rust,#B0562F);font-size:12px;letter-spacing:3px;margin-bottom:14px}' +
    '.ce-ct{font-size:26px;letter-spacing:8px;color:var(--bone,#fff);text-align:center;padding:12px 0;border:1px solid var(--line,#16352A);margin-bottom:10px}' +
    '.ce-hint{color:var(--muted,#63755F);font-size:11px;margin-bottom:12px}' +
    '.ce-row{display:flex;gap:8px;align-items:center;justify-content:center;margin-bottom:10px;flex-wrap:wrap}' +
    '.ce-rot{color:var(--acid,#CCFF33);font-size:12px;letter-spacing:2px;min-width:90px;text-align:center}' +
    '.ce-box button{background:transparent;border:1px solid var(--line,#16352A);color:var(--bone,#fff);font-family:inherit;font-size:11px;letter-spacing:2px;padding:6px 12px;cursor:pointer}' +
    '.ce-box button:hover{border-color:var(--acid,#CCFF33);color:var(--acid,#CCFF33)}' +
    '.ce-box input{background:#060b09;border:1px solid var(--line,#16352A);color:var(--bone,#fff);font-family:inherit;padding:7px 10px;width:200px;letter-spacing:3px;text-transform:uppercase}' +
    '.ce-msg{color:var(--blood,#B02222);font-size:11px;min-height:16px;text-align:center}' +
    '.ce-foot{display:flex;justify-content:space-between;align-items:center;color:var(--muted,#63755F);font-size:11px;margin-top:8px}';
  if (document.head) document.head.appendChild(css);

  window.CENSOR = { scan: scan };
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { scan(document.body); });
  } else { scan(document.body); }
  setInterval(function () { scan(document.body); }, 2500);
})();
