'use strict';

const menuButton = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('#mobile-menu');
function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open menu');
  mobileMenu.hidden = true;
}
menuButton.addEventListener('click', () => {
  const opening = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(opening));
  menuButton.setAttribute('aria-label', opening ? 'Close menu' : 'Open menu');
  mobileMenu.hidden = !opening;
});
mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !mobileMenu.hidden) {
    closeMenu();
    menuButton.focus();
  }
});
matchMedia('(min-width: 960px)').addEventListener('change', event => {
  if (event.matches) closeMenu();
});

const form = document.querySelector('#quote-form');
const vehicle = document.querySelector('#vehicle');
const year = document.querySelector('#year');
const city = document.querySelector('#city');
const dialog = document.querySelector('#quote-dialog');
const summary = document.querySelector('#quote-summary');
const condition = document.querySelector('#condition');
const whatsapp = document.querySelector('#whatsapp-request');
const email = document.querySelector('#email-request');
let request = null;

year.max = String(new Date().getFullYear() + 1);
[vehicle, city].forEach(input => {
  input.addEventListener('input', () => {
    input.setCustomValidity(input.value.trim() ? '' : 'Please enter your ' + (input === vehicle ? 'car’s make and model.' : 'pickup city.'));
  });
});

function updateRequestLinks() {
  if (!request) return;
  const message = [
    'Hi Scrap Cars 4 Cash, I’d like a free, no-obligation quote.',
    '',
    `Vehicle: ${request.year} ${request.vehicle}`,
    `Pickup city: ${request.city}`,
    ...(condition.value.trim() ? [`Condition / details: ${condition.value.trim()}`] : []),
    '',
    'Please let me know your offer and pickup availability.'
  ].join('\n');
  whatsapp.href = 'https://wa.me/14372696321?text=' + encodeURIComponent(message);
  email.href = 'mailto:gtascrapyards@gmail.com?subject=' + encodeURIComponent('Scrap car quote: ' + request.year + ' ' + request.vehicle) + '&body=' + encodeURIComponent(message);
}

form.addEventListener('submit', event => {
  event.preventDefault();
  for (const input of [vehicle, city]) {
    if (!input.value.trim()) {
      input.setCustomValidity('Please enter a value.');
      input.reportValidity();
      return;
    }
  }
  if (!form.reportValidity()) return;
  request = { vehicle: vehicle.value.trim(), year: year.value, city: city.value.trim() };
  summary.replaceChildren(document.createTextNode(`${request.year} ${request.vehicle}`));
  const location = document.createElement('span');
  location.textContent = `Pickup in ${request.city}`;
  summary.append(location);
  updateRequestLinks();
  dialog.showModal();
  document.body.classList.add('dialog-open');
});
condition.addEventListener('input', updateRequestLinks);
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  const rect = dialog.getBoundingClientRect();
  if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
});
dialog.addEventListener('close', () => document.body.classList.remove('dialog-open'));

document.querySelectorAll('[data-city]').forEach(link => {
  link.addEventListener('click', () => {
    city.value = link.dataset.city;
    city.setCustomValidity('');
    vehicle.focus({ preventScroll: true });
  });
});
document.querySelectorAll('[data-vehicle]').forEach(link => {
  link.addEventListener('click', () => {
    condition.value = 'Vehicle type: ' + link.dataset.vehicle;
    vehicle.focus({ preventScroll: true });
  });
});

// Keep answers readable without requiring scripts for basic disclosure behavior.
document.querySelectorAll('.faq-list details').forEach(detail => {
  detail.addEventListener('toggle', () => {
    if (detail.open) document.querySelectorAll('.faq-list details').forEach(other => {
      if (other !== detail) other.open = false;
    });
  });
});

// ===== Motion layer: reveals, split headings, counters, parallax, pointer effects =====
(() => {
  const root = document.documentElement;
  const reduceMQ = matchMedia('(prefers-reduced-motion: reduce)');
  const fineMQ = matchMedia('(hover: hover) and (pointer: fine)');
  const animate = root.classList.contains('js-anim') && !reduceMQ.matches;
  if (reduceMQ.matches) root.classList.remove('js-anim');

  /* --- smooth in-page jumps (scoped so programmatic scrolling stays instant) --- */
  let smoothTimer = 0;
  document.addEventListener('click', event => {
    const link = event.target.closest && event.target.closest('a[href^="#"]');
    if (!link || reduceMQ.matches) return;
    root.classList.add('smooth-scroll');
    clearTimeout(smoothTimer);
    smoothTimer = setTimeout(() => root.classList.remove('smooth-scroll'), 1200);
  }, true);

  /* --- scroll-linked: progress bar, header state, hero parallax, marquee skew (one rAF) --- */
  const header = document.querySelector('.site-header');
  const bar = document.querySelector('.scroll-progress span');
  const heroPhoto = document.querySelector('.hero-photo');
  const heroImg = heroPhoto && heroPhoto.querySelector('img');
  const marquee = document.querySelector('.marquee');
  let photoRange = 0;
  let marqueeVisible = false;
  let lastY = window.scrollY;
  let skew = 0;
  let ticking = false;

  function measure() {
    photoRange = heroPhoto ? heroPhoto.offsetHeight * 0.05 : 0;
  }
  function frame() {
    ticking = false;
    const y = window.scrollY;
    const max = root.scrollHeight - window.innerHeight;
    if (bar) bar.style.transform = 'scaleX(' + (max > 0 ? Math.min(1, Math.max(0, y / max)) : 0).toFixed(4) + ')';
    if (header) header.classList.toggle('is-scrolled', y > 8);
    if (animate) {
      if (heroImg && y < window.innerHeight * 1.5) {
        heroImg.style.translate = '0 ' + Math.min(y * 0.08, photoRange).toFixed(1) + 'px';
      }
      if (marquee && marqueeVisible) {
        const target = Math.max(-7, Math.min(7, (y - lastY) * 0.18));
        skew += (target - skew) * 0.22;
        if (Math.abs(skew) < 0.02) skew = 0;
        marquee.style.setProperty('--sk', skew.toFixed(2) + 'deg');
        if (skew !== 0) requestTick();
      }
    }
    lastY = y;
  }
  function requestTick() {
    if (!ticking) { ticking = true; requestAnimationFrame(frame); }
  }
  measure();
  window.addEventListener('scroll', requestTick, { passive: true });
  window.addEventListener('resize', () => { measure(); requestTick(); }, { passive: true });
  requestTick();

  /* --- desktop nav scrollspy --- */
  if ('IntersectionObserver' in window) {
    const links = new Map();
    document.querySelectorAll('.desktop-nav a[href^="#"]').forEach(a => {
      const section = document.querySelector(a.getAttribute('href'));
      if (section) links.set(section, a);
    });
    const spy = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const link = links.get(entry.target);
        if (link) link.classList.toggle('is-active', entry.isIntersecting);
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    links.forEach((_, section) => spy.observe(section));
    if (marquee) {
      new IntersectionObserver(entries => { marqueeVisible = entries[0].isIntersecting; }).observe(marquee);
    }
  }

  if (!animate) return;

  /* --- split headings into masked words --- */
  function splitWords(el) {
    const walk = node => {
      Array.from(node.childNodes).forEach(child => {
        if (child.nodeType === 3) {
          const frag = document.createDocumentFragment();
          child.textContent.split(/(\s+)/).forEach(part => {
            if (!part) return;
            if (/^\s+$/.test(part)) { frag.append(document.createTextNode(part)); return; }
            const outer = document.createElement('span');
            const inner = document.createElement('span');
            outer.className = 'w';
            inner.className = 'wi';
            inner.textContent = part;
            outer.append(inner);
            frag.append(outer);
          });
          child.replaceWith(frag);
        } else if (child.nodeType === 1 && child.tagName !== 'BR') {
          walk(child);
        }
      });
    };
    walk(el);
    el.querySelectorAll('.wi').forEach((wi, i) => wi.style.setProperty('--i', i));
    el.classList.add('split');
  }

  const h1 = document.querySelector('.hero h1');
  if (h1) {
    splitWords(h1);
    requestAnimationFrame(() => requestAnimationFrame(() => h1.classList.add('is-in')));
  }
  const splitHeadings = document.querySelectorAll('.section-heading h2, .local-copy h2, .reviews-grid h2, .area-heading h2, .faq-grid h2, .final-cta h2, .quote-intro h2');
  splitHeadings.forEach(splitWords);

  /* --- stars: pop in one by one --- */
  document.querySelectorAll('.review .stars').forEach(stars => {
    const chars = Array.from(stars.textContent.trim());
    stars.textContent = '';
    chars.forEach((c, i) => {
      const s = document.createElement('span');
      s.textContent = c;
      s.setAttribute('aria-hidden', 'true');
      s.style.setProperty('--i', i);
      stars.append(s);
    });
  });

  /* --- assign reveal styles --- */
  const plan = [
    ['.section-heading .eyebrow, .local-copy .eyebrow, .reviews-grid .eyebrow, .area-heading .eyebrow, .faq-grid .eyebrow, .final-cta .eyebrow, .quote-intro .eyebrow', 'wipe'],
    ['.section-heading > p, .heading-aside, .local-copy > p:not(.eyebrow), .area-heading > p:not(.eyebrow), .faq-grid > div > p:not(.eyebrow), .final-cta p:not(.eyebrow), .quote-intro p', 'blur'],
    ['.quote-form', 'up'],
    ['.benefit', 'up', 0.09],
    ['.step', 'up', 0.12],
    ['.vehicle-card', 'up', 0.12],
    ['.vehicle-bottom', 'blur'],
    ['.local-main', 'clip'],
    ['.local-photo-bottom > img', 'clip', 0.12],
    ['.local-photo-caption', 'wipe', 0.2],
    ['.check-list li', 'left', 0.1],
    ['.local-copy > .button', 'up'],
    ['.review', 'scale', 0.12],
    ['.reviews-grid .text-link, .area-heading > .text-link, .faq-grid .text-link', 'up'],
    ['.area-service', 'up'],
    ['.area-panel', 'scale'],
    ['.city-grid a', 'up', 0.035],
    ['.faq-list details', 'up', 0.06],
    ['.final-actions', 'up'],
    ['.footer-main > div', 'up', 0.08],
    ['.footer-bottom', 'blur']
  ];
  const targets = new Set();
  plan.forEach(([selector, type, step]) => {
    const counts = new Map();
    document.querySelectorAll(selector).forEach(el => {
      if (el.hasAttribute('data-reveal')) return;
      el.setAttribute('data-reveal', type);
      if (step) {
        const n = counts.get(el.parentNode) || 0;
        counts.set(el.parentNode, n + 1);
        if (n) el.style.setProperty('--rd', Math.min(n * step, 0.6).toFixed(2) + 's');
      }
      targets.add(el);
    });
  });
  splitHeadings.forEach(el => targets.add(el));

  /* --- counters on step numbers --- */
  function countUp(el) {
    const end = parseInt(el.textContent, 10);
    if (!end) return;
    const start = performance.now();
    const dur = 900;
    const tick = now => {
      const t = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - t, 3);
      el.textContent = String(Math.round(end * eased)).padStart(2, '0');
      if (t < 1) requestAnimationFrame(tick);
    };
    el.textContent = '00';
    requestAnimationFrame(tick);
  }

  const ordered = Array.from(targets).sort((a, b) =>
    a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1);
  const pending = new Set(ordered);

  function reveal(el, io) {
    if (!pending.has(el)) return;
    pending.delete(el);
    if (io) io.unobserve(el);
    el.classList.add('is-in');
    const num = el.matches('.step') && el.querySelector('.step-number');
    if (num) countUp(num);
    if (el.hasAttribute('data-reveal')) {
      const delay = parseFloat(el.style.getPropertyValue('--rd')) || 0;
      setTimeout(() => {
        el.removeAttribute('data-reveal');
        el.style.removeProperty('--rd');
      }, 1300 + delay * 1000);
    }
  }

  if (!('IntersectionObserver' in window)) {
    ordered.forEach(el => reveal(el));
    return;
  }
  const io = new IntersectionObserver(entries => {
    let hit = false;
    entries.forEach(entry => {
      if (entry.isIntersecting) { reveal(entry.target, io); hit = true; }
    });
    // Anything already scrolled past (e.g. after an anchor jump) is revealed too.
    if (hit) pending.forEach(el => { if (el.getBoundingClientRect().bottom < 0) reveal(el, io); });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0 });
  ordered.forEach(el => io.observe(el));

  /* --- pointer effects: fine pointers only --- */
  if (!fineMQ.matches) return;

  document.querySelectorAll('.button, .header-phone').forEach(btn => {
    let raf = 0;
    btn.addEventListener('pointermove', event => {
      const r = btn.getBoundingClientRect();
      const x = (event.clientX - r.left - r.width / 2) / r.width;
      const y = (event.clientY - r.top - r.height / 2) / r.height;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        btn.style.translate = (x * 10).toFixed(1) + 'px ' + (y * 8).toFixed(1) + 'px';
      });
    }, { passive: true });
    btn.addEventListener('pointerleave', () => {
      cancelAnimationFrame(raf);
      btn.style.translate = '';
    }, { passive: true });
  });

  document.querySelectorAll('.vehicle-card, .review').forEach(card => {
    let raf = 0;
    card.addEventListener('pointermove', event => {
      const r = card.getBoundingClientRect();
      const px = (event.clientX - r.left) / r.width;
      const py = (event.clientY - r.top) / r.height;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        card.style.setProperty('--mx', (px * 100).toFixed(1) + '%');
        card.style.setProperty('--my', (py * 100).toFixed(1) + '%');
        card.style.setProperty('--rx', ((0.5 - py) * 6).toFixed(2) + 'deg');
        card.style.setProperty('--ry', ((px - 0.5) * 8).toFixed(2) + 'deg');
      });
    }, { passive: true });
    card.addEventListener('pointerleave', () => {
      cancelAnimationFrame(raf);
      card.style.removeProperty('--rx');
      card.style.removeProperty('--ry');
    }, { passive: true });
  });
})();
