/* ============================================================
   SCHRECKNET — shared runtime
   Auth gate, sidebar injection, user badge, boot effects.
   No frameworks. No dependencies. Lore: VtM / Nosferatu.
   ============================================================ */
(function () {
  'use strict';

  var AUTH_KEY = 'schrecknet_auth';
  var DECRYPT_KEY = 'schrecknet_decrypt';
  var OLDNET_KEY = 'schrecknet_oldnet';

  var PAGES = [
    { file: 'index.html',    label: 'PORTAL',     icon: '⌂' },
    { file: 'network.html',  label: 'NETWORK',    icon: '◉' },
    { file: 'news.html',     label: 'WIRE',       icon: '⚡' },
    { file: 'clan.html',     label: 'THE CLAN',   icon: '☠' },
    { file: 'dossiers.html', label: 'DOSSIERS',   icon: '▤' },
    { file: 'redrooms.html', label: 'RED ROOMS',  icon: '⛧', blood: true },
    { file: 'kindred.html',  label: 'KINDRED',    icon: '☰' },
    { file: 'wod.html',      label: 'GREATER DARK', icon: '✦' },
    { file: 'forums.html',   label: 'FORUMS',     icon: '▣' },
    { file: 'blogs.html',    label: 'BLOGS',      icon: '✎' },
    { file: 'archives.html', label: 'ARCHIVES',   icon: '⛁' },
    { file: 'maps.html',     label: 'MAPS',       icon: '⌖' },
    { file: 'games.html',    label: 'MINIGAMES',  icon: '▚' }
  ];

  var page = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  if (page.indexOf('.html') === -1) { page = 'index.html'; }

  /* ---------- helpers ---------- */
  function store(key, val) {
    try {
      if (val === undefined) { return localStorage.getItem(key); }
      localStorage.setItem(key, val);
      return val;
    } catch (e) {
      return null;
    }
  }

  function authenticated() {
    return store(AUTH_KEY) === '1';
  }

  /* ---------- auth gate ----------
     index.html is the login portal: it renders the gate UI instead
     of redirecting. Every other page bounces unauthenticated rats. */
  if (page !== 'index.html' && !authenticated()) {
    location.replace('index.html');
    return;
  }

  /* ---------- sidebar ---------- */
  function badgeHtml() {
    var out = '';
    if (store(DECRYPT_KEY) === '1') {
      out += '<span class="badge badge-decrypt">DECRYPTION VERIFIED</span> ';
    }
    if (store(OLDNET_KEY) === '1') {
      out += '<span class="badge badge-acid">THE OLD NET</span>';
    }
    return out;
  }

  function navHtml() {
    var out = '';
    for (var i = 0; i < PAGES.length; i++) {
      var p = PAGES[i];
      var active = (p.file === page) ? ' class="active"' : '';
      var bloodCls = p.blood ? ' nav-blood' : '';
      out += '<a href="' + p.file + '"' + active + ' data-page="' + p.file + '">' +
        '<span class="nav-icon' + bloodCls + '">' + p.icon + '</span> ' + p.label + '</a>';
    }
    return out;
  }

  function renderSidebar() {
    var root = document.getElementById('sidebar-root');
    if (!root) { return; }
    root.innerHTML =
      '<div class="logo-block">' +
        '<a class="logo" href="index.html">' +
          '<span class="logo-mark"><svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><g stroke="currentColor" stroke-width="2.5" fill="none"><circle cx="50" cy="50" r="13"/><circle cx="50" cy="50" r="29"/><circle cx="50" cy="50" r="46"/><line x1="50" y1="4" x2="50" y2="96"/><line x1="4" y1="50" x2="96" y2="50"/><line x1="17" y1="17" x2="83" y2="83"/><line x1="83" y1="17" x2="17" y2="83"/></g><circle cx="50" cy="50" r="4.5" fill="currentColor"/></svg></span>' +
          '<span>SCHRECKNET<span class="logo-sub">nosferatu information network // node VLA-7</span></span>' +
        '</a>' +
      '</div>' +
      '<nav class="nav" aria-label="Network sections">' + navHtml() + '</nav>' +
      '<div class="user-badge">' +
        '<span class="handle">WIRE-RAT</span>' +
        '<span class="rank">Clearance — Verified Signal</span>' +
        '<div class="badge-row" id="badge-row">' + badgeHtml() + '</div>' +
        '<div class="user-actions">' +
          '<button class="btn btn-danger" id="logout-btn" type="button">DISCONNECT</button>' +
        '</div>' +
      '</div>' +
      '<div class="sidebar-foot">' +
        'TRUST NO NODE. BURN WHAT YOU READ.' +
        '<span class="sig">— a mirror, bouncing your signal</span>' +
      '</div>';

    var btn = document.getElementById('logout-btn');
    if (btn) {
      btn.addEventListener('click', function () {
        try {
          localStorage.removeItem(AUTH_KEY);
        } catch (e) { /* storage unavailable: nothing to clear */ }
        location.replace('index.html');
      });
    }
  }

  /* ---------- mobile nav toggle ---------- */
  function wireNavToggle() {
    var toggle = document.querySelector('.nav-toggle');
    var sidebar = document.querySelector('.sidebar');
    if (!toggle || !sidebar) { return; }
    toggle.addEventListener('click', function () {
      sidebar.classList.toggle('open');
    });
  }

  /* ---------- CRT overlay ---------- */
  function injectCrt() {
    if (document.getElementById('crt-overlay')) { return; }
    var div = document.createElement('div');
    div.id = 'crt-overlay';
    div.setAttribute('aria-hidden', 'true');
    document.body.appendChild(div);
  }

  /* ---------- portal: boot sequence + login ---------- */
  var BOOT_LINES = [
    'SCHRECKNET SECURE SHELL v0.13 — unwelcome, probably.',
    'establishing mirror handshake ... OK',
    'spoofing source node ................ VLA-7 (PRAGUE)',
    'checking the old net for watchers ... 3 FOUND. ignored.',
    'mounting /sewer ..................... OK',
    'warning: vienna node silent since the burn. trust nothing.',
    'welcome back, rat.'
  ];

  function typeBoot(target, lines, done) {
    if (!target) {
      if (typeof done === 'function') { done(); }
      return;
    }
    var li = 0;
    var ci = 0;
    var buf = '';
    var timer = setInterval(function () {
      if (li >= lines.length) {
        clearInterval(timer);
        target.classList.remove('caret');
        if (typeof done === 'function') { done(); }
        return;
      }
      var line = lines[li];
      if (ci < line.length) {
        buf += line.charAt(ci);
        ci++;
      } else {
        buf += '\n';
        li++;
        ci = 0;
      }
      target.textContent = buf;
    }, 14);
  }

  function wireLogin() {
    var box = document.getElementById('login-box');
    if (!box) { return; }

    var user = document.getElementById('login-user');
    var pass = document.getElementById('login-pass');
    var err = document.getElementById('login-error');
    var reveal = document.getElementById('reveal-btn');

    function fail(msg) {
      if (!err) { return; }
      err.textContent = msg;
      err.classList.add('show');
    }

    function tryLogin() {
      if (err) { err.classList.remove('show'); }
      var u = (user && user.value || '').trim().toLowerCase();
      var p = (pass && pass.value || '').trim().toLowerCase();
      if (u === 'guest' || (u === '' && p === '')) {
        store(AUTH_KEY, '1');
        location.replace('network.html');
        return;
      }
      if (u === 'ratking' && p === 'sewer123') {
        store(AUTH_KEY, '1');
        location.replace('network.html');
        return;
      }
      fail('ACCESS DENIED — unknown handle or bad passphrase. try harder.');
    }

    var form = box.querySelector('form');
    if (form) {
      form.addEventListener('submit', function (ev) {
        ev.preventDefault();
        tryLogin();
      });
    }

    if (reveal) {
      reveal.addEventListener('click', function () {
        if (!err) { return; }
        err.classList.remove('show');
        var probe = ['probing hash ...', 'brute-forcing 4-digit salt ...', 'dictionary: sewer.txt ...', 'CRACKED.'];
        var i = 0;
        var t = setInterval(function () {
          err.textContent = probe[i];
          err.classList.add('show');
          i++;
          if (i >= probe.length) {
            clearInterval(t);
            err.textContent = 'CRACKED. handle: RATKING — passphrase: sewer123 (this node was never secure.)';
          }
        }, 420);
      });
    }
  }

  /* ---------- easter egg: type "oldnet" anywhere ---------- */
  function wireEgg() {
    var buf = '';
    document.addEventListener('keydown', function (ev) {
      if (!ev.key || ev.key.length !== 1) { return; }
      buf = (buf + ev.key.toLowerCase()).slice(-6);
      if (buf === 'oldnet' && store(OLDNET_KEY) !== '1') {
        store(OLDNET_KEY, '1');
        renderSidebar();
      }
      if (buf.slice(-4) === 'aero') { showAero(); }
    });
  }

  /* ---------- easter egg: type "aero" — cached fragment of the surface ---------- */
  function showAero() {
    if (document.getElementById('aero-egg')) { return; }
    var ov = document.createElement('div');
    ov.id = 'aero-egg';
    ov.setAttribute('role', 'dialog');
    ov.setAttribute('aria-label', 'Archived fragment of the surface');
    ov.innerHTML =
      '<div class="aero-frame">' +
        '<img src="assets/img/aero.png" alt="A glass sphere above green grass and blue sky — a cached memory of the surface, before the embrace.">' +
        '<p>surface cache // fragment recovered // pre-embrace // click or ESC to return</p>' +
      '</div>';
    function close() {
      if (ov.parentNode) { ov.parentNode.removeChild(ov); }
      document.removeEventListener('keydown', esc, true);
    }
    function esc(e) { if (e.key === 'Escape') { close(); } }
    ov.addEventListener('click', close);
    document.addEventListener('keydown', esc, true);
    document.body.appendChild(ov);
  }

  /* ---------- boot ---------- */
  function boot() {
    renderSidebar();
    wireNavToggle();
    injectCrt();
    wireLogin();
    wireEgg();

    if (page === 'index.html') {
      var lines = document.querySelector('.boot-lines');
      typeBoot(lines, BOOT_LINES);
    }
  }

  window.SCHRECKNET = { refreshBadges: renderSidebar };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
