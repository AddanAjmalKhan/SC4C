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
