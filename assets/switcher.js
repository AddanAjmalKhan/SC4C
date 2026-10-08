/* Floating design switcher — bottom-right toggle linking all four designs. */
(function () {
  var designs = [
    { href: 'index.html', name: 'Night Shift', note: 'Cinematic dark, full-bleed hero' },
    { href: 'variation-2-editorial.html', name: 'Editorial', note: 'Magazine layout, bold type' },
    { href: 'variation-3-dispatch.html', name: 'Dispatch', note: 'Tow-desk ticket & quote wizard' },
    { href: 'variation-4.html', name: 'Fresh Start', note: 'Clean, light & compact' }
  ];
  var file = location.pathname.split('/').pop() || 'index.html';
  if (!/\.html$/.test(file)) file += '.html';
  var current = 0;
  designs.forEach(function (d, i) { if (d.href === file) current = i; });
  var pad = function (n) { return (n < 10 ? '0' : '') + n; };
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var root = document.createElement('div');
  root.className = 'dsw';
  root.innerHTML =
    '<nav class="dsw-panel design-review" id="dsw-panel" aria-label="Homepage design options">' +
      '<div class="dsw-head"><span>Explore the designs</span><i aria-hidden="true"></i></div>' +
      designs.map(function (d, i) {
        return '<a href="' + d.href + '" data-design="' + (i + 1) + '"' + (i === current ? ' aria-current="page"' : '') + '>' +
          '<span class="dsw-num">' + pad(i + 1) + '</span>' +
          '<span class="dsw-txt"><b>' + d.name + '</b><small>' + d.note + '</small></span>' +
          '<svg class="dsw-go" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>';
      }).join('') +
      '<div class="dsw-hint"><kbd>[</kbd> <kbd>]</kbd> to flip designs</div>' +
    '</nav>' +
    '<button class="dsw-btn" type="button" aria-expanded="false" aria-controls="dsw-panel">' +
      '<span class="dsw-ico" aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="7" rx="2"/><rect x="3" y="14" width="7" height="7" rx="2"/><rect x="14" y="14" width="7" height="7" rx="2"/></svg></span>' +
      '<span class="dsw-label">Designs <span class="dsw-count">' + pad(current + 1) + '/' + pad(designs.length) + '</span></span>' +
    '</button>';

  var btn = root.querySelector('.dsw-btn');
  var links = [].slice.call(root.querySelectorAll('.dsw-panel a'));

  function setOpen(open, focusBtn) {
    root.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', String(open));
    btn.setAttribute('aria-label', (open ? 'Close' : 'Open') + ' design switcher');
    if (open) setTimeout(function () { links[current].focus({ preventScroll: true }); }, 60);
    else if (focusBtn) btn.focus({ preventScroll: true });
  }
  function go(href) {
    if (reduce) { location.href = href; return; }
    document.body.classList.add('dsw-leaving');
    setTimeout(function () { location.href = href; }, 300);
  }

  btn.addEventListener('click', function () { setOpen(!root.classList.contains('open')); });
  links.forEach(function (a, i) {
    a.addEventListener('click', function (e) {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.button) return;
      e.preventDefault();
      if (i === current) { setOpen(false, true); return; }
      go(a.getAttribute('href'));
    });
  });
  document.addEventListener('click', function (e) { if (root.classList.contains('open') && !root.contains(e.target)) setOpen(false); });
  document.addEventListener('keydown', function (e) {
    var open = root.classList.contains('open');
    if (e.key === 'Escape' && open) { setOpen(false, true); return; }
    if (open && (e.key === 'ArrowDown' || e.key === 'ArrowUp')) {
      var at = links.indexOf(document.activeElement);
      if (at > -1) { e.preventDefault(); links[(at + (e.key === 'ArrowDown' ? 1 : links.length - 1)) % links.length].focus(); }
      return;
    }
    var t = e.target, tag = t && t.tagName;
    if (e.altKey || e.ctrlKey || e.metaKey || tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || (t && t.isContentEditable)) return;
    if (e.key === ']') go(designs[(current + 1) % designs.length].href);
    if (e.key === '[') go(designs[(current + designs.length - 1) % designs.length].href);
  });
  window.addEventListener('pageshow', function () { document.body.classList.remove('dsw-leaving'); });

  /* Sit above any fixed bottom bar or floating button that occupies the bottom-right corner. */
  var raf = 0;
  function place() {
    raf = 0;
    var vh = window.innerHeight, vw = window.innerWidth, top = vh;
    var els = document.querySelectorAll('.mbar,.mobile-cta,.fab,.wa-fab,.float-wa,.sticky-cta,[data-dsw-avoid]');
    for (var i = 0; i < els.length; i++) {
      var el = els[i];
      if (root.contains(el)) continue;
      var cs = getComputedStyle(el);
      if (cs.position !== 'fixed' || cs.display === 'none' || cs.visibility === 'hidden' || +cs.opacity === 0) continue;
      var r = el.getBoundingClientRect();
      if (!r.width || !r.height || r.right < vw - 140) continue;
      /* Use the resting layout position so slide-in transforms don't skew the measurement. */
      var b = parseFloat(cs.bottom);
      var restTop = isNaN(b) ? r.top : vh - b - el.offsetHeight;
      if (restTop + el.offsetHeight < vh - 160) continue;
      top = Math.min(top, restTop);
    }
    root.style.setProperty('--dsw-bottom', (vh - top + (top < vh ? 12 : 24)) + 'px');
  }
  function queue() { if (!raf) raf = requestAnimationFrame(place); }

  function mount() {
    document.body.appendChild(root);
    place();
    window.addEventListener('resize', queue);
    window.addEventListener('scroll', queue, { passive: true });
    document.addEventListener('animationend', queue);
    document.addEventListener('transitionend', queue);
    setTimeout(place, 800);
    setTimeout(place, 2500);
  }
  if (document.body) mount(); else document.addEventListener('DOMContentLoaded', mount);
})();
