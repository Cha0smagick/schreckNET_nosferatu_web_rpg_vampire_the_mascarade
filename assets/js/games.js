/* ============================================================
   SCHRECKNET — minigames runtime
   4 vanilla games: BRUTE FORCE, NODE MEMORY, PACKET ON THE RUN,
   DECRYPT. No frameworks. Lore-framed VtM / Nosferatu.
   ============================================================ */
(function () {
  'use strict';

  var DECRYPT_KEY = 'schrecknet_decrypt';
  var tabsEl = document.getElementById('game-tabs');
  var panelsEl = document.getElementById('game-panels');
  if (!tabsEl || !panelsEl) { return; }

  function refreshBadges() {
    if (window.SCHRECKNET && typeof window.SCHRECKNET.refreshBadges === 'function') {
      window.SCHRECKNET.refreshBadges();
    }
  }

  function storeFlag(val) {
    try {
      localStorage.setItem(DECRYPT_KEY, val);
      return true;
    } catch (e) {
      return false;
    }
  }

  function el(tag, cls, text) {
    var node = document.createElement(tag);
    if (cls) { node.className = cls; }
    if (text !== undefined) { node.textContent = text; }
    return node;
  }

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  /* ============================================================
     GAME 1 — BRUTE FORCE (Mastermind against the firewall)
     ============================================================ */
  function buildBruteForce(root) {
    var POOL = ['▲', '◆', '●', '■', '✦', '✚'];
    var CODE = [];
    var i;
    for (i = 0; i < 4; i++) { CODE.push(POOL[Math.floor(Math.random() * POOL.length)]); }

    var slots = [];
    var guess = [null, null, null, null];
    var slotIndex = 0;
    var attempts = 0;
    var MAX = 8;
    var locked = false;

    var msg = el('p', 'game-msg', 'The firewall holds a 4-symbol vector. Crack it in 8 probes or burn.');
    var row = el('div', 'code-row');
    for (i = 0; i < 4; i++) {
      var slot = el('span', 'code-slot', '_');
      slots.push(slot);
      row.appendChild(slot);
    }

    var pad = el('div', 'pad');
    POOL.forEach(function (sym) {
      var b = el('button', 'pad-btn', sym);
      b.type = 'button';
      b.addEventListener('click', function () {
        if (locked) { return; }
        guess[slotIndex] = sym;
        slots[slotIndex].textContent = sym;
        slotIndex = (slotIndex + 1) % 4;
      });
      pad.appendChild(b);
    });

    var clearBtn = el('button', 'btn btn-ghost', 'CLEAR');
    clearBtn.type = 'button';
    clearBtn.addEventListener('click', function () {
      if (locked) { return; }
      guess = [null, null, null, null];
      slotIndex = 0;
      slots.forEach(function (s) { s.textContent = '_'; });
    });

    var submit = el('button', 'btn', 'PROBE FIREWALL');
    submit.type = 'button';
    var log = el('div', 'attempt-log');

    function paint(code, exact, misplaced, absent) {
      var line = code.join('') + ' → ' + exact + ' exact, ' + misplaced + ' misplaced, ' + absent + ' absent';
      var cls = (exact === 4) ? 'hit' : (exact > 0 || misplaced > 0) ? 'near' : 'miss';
      var entry = el('div', cls, line);
      log.insertBefore(entry, log.firstChild);
    }

    function evaluate() {
      if (locked) { return; }
      if (guess.indexOf(null) !== -1) {
        msg.textContent = 'Incomplete vector. Fill all four symbols.';
        return;
      }
      attempts++;
      var exact = 0, misplaced = 0, absent = 0;
      var used = [];
      var k;
      for (k = 0; k < 4; k++) {
        if (guess[k] === CODE[k]) { exact++; used.push(k); }
      }
      for (k = 0; k < 4; k++) {
        if (used.indexOf(k) !== -1) { continue; }
        if (CODE.indexOf(guess[k]) !== -1 && CODE.indexOf(guess[k]) !== k && CODE.lastIndexOf(guess[k]) !== k) {
          misplaced++;
        } else if (CODE.indexOf(guess[k]) !== -1) {
          var seen = false;
          for (var m = 0; m < 4; m++) { if (guess[m] === guess[k] && used.indexOf(m) !== -1) { seen = true; } }
          if (seen) { misplaced++; } else { misplaced++; }
        } else {
          absent++;
        }
      }
      paint(guess, exact, misplaced, absent);
      if (exact === 4) {
      if (window.ACH) { window.ACH.act('game_win'); }
        locked = true;
        msg.textContent = 'FIREWALL BREACHED in ' + attempts + ' probes. The terminal opens for you.';
        return;
      }
      if (attempts >= MAX) {
        locked = true;
        msg.textContent = 'FIREWALL HELD. Session burned. The vector was ' + CODE.join(' ') + '.';
        return;
      }
      msg.textContent = 'Probe ' + attempts + '/' + MAX + ' logged. Adjust the vector.';
      guess = [null, null, null, null];
      slotIndex = 0;
      slots.forEach(function (s) { s.textContent = '_'; });
    }
    submit.addEventListener('click', evaluate);

    var again = el('button', 'btn btn-ghost', 'NEW SESSION');
    again.type = 'button';
    again.addEventListener('click', function () { buildBruteForce(root); });

    var actions = el('div', 'user-actions');
    actions.appendChild(submit);
    actions.appendChild(clearBtn);
    actions.appendChild(again);

    root.appendChild(msg);
    root.appendChild(row);
    root.appendChild(pad);
    root.appendChild(actions);
    root.appendChild(log);
  }

  /* ============================================================
     GAME 2 — NODE MEMORY (4x4 glyph pairs)
     ============================================================ */
  function buildMemory(root) {
    var GLYPHS = ['☠', '⌂', '◉', '▤', '⛧', '▣', '✎', '⛁'];
    var deck = shuffle(GLYPHS.concat(GLYPHS));
    var grid = el('div', 'glyph-grid');
    var msg = el('p', 'game-msg', 'Eight nodes, each remembered twice. The network forgets nothing.');
    var first = null;
    var lock = false;
    var moves = 0;
    var matched = 0;
    var started = false;
    var seconds = 0;
    var timer = null;

    var hud = el('p', 'hud', '');
    function paintHud() {
      hud.textContent = 'MOVES: ' + moves + ' — TIME: ' + seconds + 's — MATCHED: ' + matched + '/8';
    }
    paintHud();

    function stopTimer() {
      if (timer) { clearInterval(timer); timer = null; }
    }

    deck.forEach(function (sym) {
      var cell = el('button', 'glyph-cell', '?');
      cell.type = 'button';
      cell.dataset.sym = sym;
      cell.addEventListener('click', function () {
        if (lock || cell.classList.contains('revealed') || cell.classList.contains('done')) { return; }
        if (!started) {
          started = true;
          timer = setInterval(function () {
            seconds++;
            paintHud();
          }, 1000);
        }
        cell.classList.add('revealed');
        cell.textContent = sym;
        if (!first) {
          first = cell;
          return;
        }
        moves++;
        paintHud();
        if (first.dataset.sym === sym) {
          first.classList.add('done');
          cell.classList.add('done');
          first = null;
          matched++;
          paintHud();
          if (matched === 8) {
        if (window.ACH) { window.ACH.act('game_win'); }
            stopTimer();
            msg.textContent = 'ALL NODES REMEMBERED — ' + moves + ' moves, ' + seconds + 's. The network nods.';
          }
        } else {
          lock = true;
          var a = first;
          first = null;
          setTimeout(function () {
            a.classList.remove('revealed');
            a.textContent = '?';
            cell.classList.remove('revealed');
            cell.textContent = '?';
            lock = false;
          }, 650);
        }
      });
      grid.appendChild(cell);
    });

    var again = el('button', 'btn btn-ghost', 'FORGET AND RESTART');
    again.type = 'button';
    again.addEventListener('click', function () {
      stopTimer();
      root.innerHTML = '';
      buildMemory(root);
    });

    root.appendChild(msg);
    root.appendChild(hud);
    root.appendChild(grid);
    root.appendChild(again);
  }

  /* ============================================================
     GAME 3 — PACKET ON THE RUN (canvas dodge & collect)
     ============================================================ */
  function buildPacket(root) {
    var W = 640, H = 400;
    var wrap = el('div', 'game-canvas-wrap');
    var canvas = document.createElement('canvas');
    canvas.width = W;
    canvas.height = H;
    wrap.appendChild(canvas);
    var ctx = canvas.getContext('2d');

    var msg = el('p', 'game-msg', 'You are the packet. Dodge the red probes, collect the green fragments.');
    var hud = el('p', 'hud', 'SCORE: 0');

    var player = { x: W / 2 - 9, y: H - 40, w: 18, h: 18 };
    var probes = [];
    var fragments = [];
    var score = 0;
    var speed = 2.2;
    var spawn = 0;
    var alive = true;
    var held = {};
    var raf = null;
    var last = 0;

    function spawnProbe() {
      probes.push({ x: Math.random() * (W - 22), y: -20, w: 16, h: 16 });
    }
    function spawnFragment() {
      fragments.push({ x: Math.random() * (W - 18), y: -16, w: 14, h: 18 });
    }

    function step(ts) {
      if (!alive) { return; }
      var dt = Math.min(ts - last, 50) / 16.67;
      last = ts;

      if (held.ArrowLeft) { player.x -= 5 * dt; }
      if (held.ArrowRight) { player.x += 5 * dt; }
      if (held.ArrowUp) { player.y -= 5 * dt; }
      if (held.ArrowDown) { player.y += 5 * dt; }
      player.x = Math.max(0, Math.min(W - player.w, player.x));
      player.y = Math.max(0, Math.min(H - player.h, player.y));

      spawn += dt;
      if (spawn > 26) {
        spawn = 0;
        if (Math.random() < 0.75) { spawnProbe(); } else { spawnFragment(); }
      }

      var i;
      for (i = probes.length - 1; i >= 0; i--) {
        var p = probes[i];
        p.y += speed * dt;
        if (p.y > H) { probes.splice(i, 1); continue; }
        if (p.x < player.x + player.w && p.x + p.w > player.x && p.y < player.y + player.h && p.y + p.h > player.y) {
          alive = false;
        }
      }
      for (i = fragments.length - 1; i >= 0; i--) {
        var f = fragments[i];
        f.y += (speed * 0.55) * dt;
        if (f.y > H) { fragments.splice(i, 1); continue; }
        if (f.x < player.x + player.w && f.x + f.w > player.x && f.y < player.y + player.h && f.y + f.h > player.y) {
          score += 10;
          speed = Math.min(6, speed + 0.15);
          fragments.splice(i, 1);
          hud.textContent = 'SCORE: ' + score;
        }
      }

      ctx.fillStyle = '#060A08';
      ctx.fillRect(0, 0, W, H);

      ctx.fillStyle = 'rgba(70,232,131,0.08)';
      for (var gy = 0; gy < H; gy += 32) { ctx.fillRect(0, gy, W, 1); }
      for (var gx = 0; gx < W; gx += 32) { ctx.fillRect(gx, 0, 1, H); }

      ctx.fillStyle = '#FF4D4D';
      for (i = 0; i < probes.length; i++) {
        ctx.fillRect(probes[i].x, probes[i].y, probes[i].w, probes[i].h);
      }

      ctx.fillStyle = '#46E883';
      for (i = 0; i < fragments.length; i++) {
        ctx.save();
        ctx.translate(fragments[i].x + 7, fragments[i].y + 9);
        ctx.rotate(Math.PI / 4);
        ctx.fillRect(-6, -6, 12, 12);
        ctx.restore();
      }

      ctx.fillStyle = '#C6F24E';
      ctx.fillRect(player.x, player.y, player.w, player.h);

      if (!alive) {
        if (window.ACH) { window.ACH.act('game_loss'); }
          msg.textContent = 'PROBE CONTACT — packet burned. Score: ' + score + '.';
      }
      raf = requestAnimationFrame(step);
    }

    function start() {
      player = { x: W / 2 - 9, y: H - 40, w: 18, h: 18 };
      probes = [];
      fragments = [];
      score = 0;
      speed = 2.2;
      spawn = 0;
      alive = true;
      last = performance.now();
      hud.textContent = 'SCORE: 0';
      msg.textContent = 'You are the packet. Dodge the red probes, collect the green fragments.';
      if (raf) { cancelAnimationFrame(raf); }
      raf = requestAnimationFrame(step);
    }

    document.addEventListener('keydown', function (ev) {
      if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].indexOf(ev.key) !== -1) {
        held[ev.key] = true;
        ev.preventDefault();
      }
    });
    document.addEventListener('keyup', function (ev) {
      held[ev.key] = false;
    });

    var pads = el('div', 'pad');
    [['◀', 'ArrowLeft'], ['▲', 'ArrowUp'], ['▼', 'ArrowDown'], ['▶', 'ArrowRight']].forEach(function (pair) {
      var b = el('button', 'pad-btn', pair[0]);
      b.type = 'button';
      b.addEventListener('mousedown', function () { held[pair[1]] = true; });
      b.addEventListener('mouseup', function () { held[pair[1]] = false; });
      b.addEventListener('mouseleave', function () { held[pair[1]] = false; });
      b.addEventListener('touchstart', function (ev) { ev.preventDefault(); held[pair[1]] = true; }, { passive: false });
      b.addEventListener('touchend', function () { held[pair[1]] = false; });
      pads.appendChild(b);
    });

    var again = el('button', 'btn', 'RESTART PACKET');
    again.type = 'button';
    again.addEventListener('click', start);

    root.appendChild(msg);
    root.appendChild(hud);
    root.appendChild(wrap);
    root.appendChild(pads);
    root.appendChild(again);
    start();
  }

  /* ============================================================
     GAME 4 — DECRYPT (Caesar cipher, infernal offset)
     ============================================================ */
  function buildDecrypt(root) {
    var PLAIN = 'THE ANTIDILUVIAN SLEEPS BENEATH THE MEDITERRANEAN. THE CENTRAL WELL OF PRAGUE IS A DOOR. DO NOT DRINK.';
    var TRUE_OFFSET = 7;

    function shift(text, off) {
      var out = '';
      for (var i = 0; i < text.length; i++) {
        var c = text.charAt(i);
        if (c >= 'A' && c <= 'Z') {
          var code = text.charCodeAt(i) - 65;
          code = ((code + off) % 26 + 26) % 26;
          out += String.fromCharCode(65 + code);
        } else {
          out += c;
        }
      }
      return out;
    }

    var cipher = shift(PLAIN, TRUE_OFFSET);

    var msg = el('p', 'game-msg', 'Intercepted packet, Caesar-shifted infernal cipher. Find the offset.');
    var cipherBox = el('pre', 'boot-lines', cipher);
    var sliderWrap = el('div', 'slider-row');

    var label = el('label', null, 'OFFSET: ');
    var val = el('strong', null, '0');
    label.appendChild(val);

    var slider = document.createElement('input');
    slider.type = 'range';
    slider.min = '0';
    slider.max = '25';
    slider.value = '0';

    var decoded = el('pre', 'boot-lines', cipher);
    var verified = false;

    slider.addEventListener('input', function () {
      var off = parseInt(slider.value, 10);
      val.textContent = String(off);
      var plainCandidate = shift(cipher, -off);
      decoded.textContent = plainCandidate;
      if (!verified && off === TRUE_OFFSET) {
        verified = true;
        msg.textContent = 'OFFSET CRACKED — 7. The secret is yours. Badge upgraded: DECRYPTION VERIFIED.';
        storeFlag('1');
        refreshBadges();
        decoded.classList.add('ok-text');
          if (window.ACH) { window.ACH.act('game_win'); }
      }
    });

    sliderWrap.appendChild(label);
    sliderWrap.appendChild(slider);

    root.appendChild(msg);
    root.appendChild(cipherBox);
    root.appendChild(sliderWrap);
    root.appendChild(decoded);
  }

  /* ============================================================
     Tabs + panels wiring
     ============================================================ */
  var GAMES = [
    { id: 'brute-force', label: 'BRUTE FORCE', init: buildBruteForce },
    { id: 'node-memory', label: 'NODE MEMORY', init: buildMemory },
    { id: 'packet', label: 'PACKET ON THE RUN', init: buildPacket },
    { id: 'decrypt', label: 'DECRYPT', init: buildDecrypt }
  ];

  GAMES.forEach(function (g, idx) {
    var tab = el('button', 'tab' + (idx === 0 ? ' active' : ''), g.label);
    tab.type = 'button';
    tab.dataset.target = g.id;
    tabsEl.appendChild(tab);

    var panel = el('section', 'game-panel' + (idx === 0 ? ' active' : ''));
    panel.id = g.id;
    g.init(panel);
    panelsEl.appendChild(panel);
  });

  tabsEl.addEventListener('click', function (ev) {
    var target = ev.target;
    if (!target || !target.classList.contains('tab')) { return; }
    var id = target.dataset.target;
    var tabs = tabsEl.querySelectorAll('.tab');
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].classList.toggle('active', tabs[i].dataset.target === id);
    }
    var panels = panelsEl.querySelectorAll('.game-panel');
    for (var j = 0; j < panels.length; j++) {
      panels[j].classList.toggle('active', panels[j].id === id);
    }
  });
})();
