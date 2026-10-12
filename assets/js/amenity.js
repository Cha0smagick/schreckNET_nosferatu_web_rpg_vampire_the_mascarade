// SCHRECKNET VLA-7 // amenity.js — hover image preview + name autolinking
// include on any page: hovering any <img> shows an enlarged floating preview.
// registry.html additionally calls AMENITY.buildIndex(GROUPS) and AMENITY.autolink(el, groupKey):
// known kindred names inside rendered lore become clickable links that open the file.
(function () {
  // --- hover preview ---
  var pv = null, pvImg = null;
  function ensure() {
    if (pv) return;
    pv = document.createElement('div');
    pv.id = 'img-preview';
    pvImg = document.createElement('img');
    pvImg.alt = 'enlarged preview';
    var cap = document.createElement('div');
    cap.className = 'ip-cap';
    cap.textContent = 'enlarged archive plate // hover to inspect';
    pv.appendChild(pvImg);
    pv.appendChild(cap);
    document.body.appendChild(pv);
  }
  function move(e) {
    if (!pv) return;
    var w = 440, pad = 16;
    var x = Math.min(e.clientX + pad, window.innerWidth - w - pad);
    pv.style.left = Math.max(8, x) + 'px';
    pv.style.top = Math.min(e.clientY + pad, window.innerHeight - 80) + 'px';
  }
  document.addEventListener('mouseover', function (e) {
    var t = e.target;
    if (!t || t.tagName !== 'IMG') return;
    if (t.closest && t.closest('#img-preview')) return;
    if (!t.src || /\/(aero|egg_)[\w.-]*\.png/i.test(t.src)) return;
    ensure();
    if (pvImg.src !== t.src) pvImg.src = t.src;
    pv.className = 'show';
    move(e);
  });
  document.addEventListener('mousemove', function (e) { if (pv && pv.className === 'show') move(e); });
  document.addEventListener('mouseout', function (e) {
    if (pv && pv.className === 'show' && e.target && e.target.tagName === 'IMG') pv.className = '';
  });

  // --- autolinking ---
  var INDEX = []; // {nm, rx, key, id}
  function escRe(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
  var AM = {
    buildIndex: function (groups) {
      INDEX = [];
      (groups || []).forEach(function (g) {
        var chars = (g.clan && g.clan.chars) || [];
        chars.forEach(function (ch) {
          var nm = ch.name;
          if (!nm || nm.length < 5 || nm.indexOf(' ') === -1) return;
          INDEX.push({ nm: nm, rx: new RegExp(escRe(nm), 'g'), key: g.key, id: ch.id });
        });
      });
      INDEX.sort(function (a, b) { return b.nm.length - a.nm.length; });
    },
    onNavigate: null,
    autolink: function (el, curGroupKey) {
      if (!el || !INDEX.length) return;
      var html = el.innerHTML, store = [];
      INDEX.forEach(function (it) {
        if (it.key === curGroupKey) return;
        html = html.replace(it.rx, function (m) {
          store.push('<a class="lore-link" data-g="' + it.key + '" data-id="' + it.id + '" href="#" title="open file ' + it.id.toUpperCase() + '">' + m + '</a>');
          return '\u0001' + (store.length - 1) + '\u0001';
        });
      });
      el.innerHTML = html.replace(/\u0001(\d+)\u0001/g, function (_, i) { return store[+i]; });
    }
  };
  document.addEventListener('click', function (e) {
    var a = e.target && e.target.closest ? e.target.closest('.lore-link') : null;
    if (!a) return;
    e.preventDefault();
    if (AM.onNavigate) AM.onNavigate(a.getAttribute('data-g'), a.getAttribute('data-id'));
  });

  var css = document.createElement('style');
  css.textContent =
    '#img-preview{display:none;position:fixed;z-index:997;max-width:440px;pointer-events:none;border:1px solid var(--line,#16352A);background:#0a0f0d;padding:6px;box-shadow:0 10px 34px rgba(0,0,0,.65)}' +
    '#img-preview.show{display:block}' +
    '#img-preview img{width:100%;display:block}' +
    '#img-preview .ip-cap{font-family:monospace;font-size:10px;color:var(--muted,#63755F);padding-top:5px;letter-spacing:1px}' +
    '.lore-link{color:var(--acid,#CCFF33);text-decoration:underline dotted;cursor:pointer}' +
    '.lore-link:hover{color:#fff}';
  if (document.head) document.head.appendChild(css);

  window.AMENITY = AM;
})();
