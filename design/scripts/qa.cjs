const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const { chromium } = require(process.env.PLAYWRIGHT_PATH || 'playwright');
const output = path.resolve(__dirname, '../preview');
fs.mkdirSync(output, { recursive: true });
const pages = ['index', 'variation-2-editorial', 'variation-3-dispatch', 'variation-4'];
(async () => {
 const browser = await chromium.launch({ channel: 'chrome', headless: true });
 const context = await browser.newContext({ reducedMotion: 'reduce', deviceScaleFactor: 1 });
 const results = [];
 try {
  for (const name of pages) {
   const page = await context.newPage();
   await page.setViewportSize({ width: 1440, height: 1000 });
   const errors = [];
   page.on('pageerror', error => errors.push(error.message));
   await page.addInitScript(() => { window.open = url => { window.__lastOpenedUrl = url; return null; }; });
   await page.goto('http://127.0.0.1:4173/' + (name === 'index' ? '' : name), { waitUntil: 'domcontentloaded', timeout: 60000 });
   await page.evaluate(async () => {
    await document.fonts.ready;
    document.querySelectorAll('img[loading="lazy"]').forEach(image => image.loading = 'eager');
    await Promise.all([...document.images].filter(image => image.getAttribute('src')).map(image => image.decode().catch(() => {})));
   });
   for (const width of [1440, 1024, 390, 320]) {
   await page.setViewportSize({ width, height: 1000 });
   await page.evaluate(() => scrollTo(0,0));
   const state = await page.evaluate(() => ({
    width: innerWidth, scrollWidth: document.documentElement.scrollWidth,
    missingImages: [...document.images].filter(image => image.getAttribute('src') && (!image.complete || !image.naturalWidth)).map(image => image.src),
    fonts: [...document.fonts].filter(font => font.status === 'error').map(font => font.family),
    bodyFont: getComputedStyle(document.body).fontSize,
    headingFont: getComputedStyle(document.querySelector('h1')).fontSize,
    reviewLinks: [...document.querySelectorAll('.design-review a')].map(link => link.getAttribute('href')),
    internalBroken: [...document.querySelectorAll('a[href^="#"]')].filter(link => link.hash && !document.getElementById(link.hash.slice(1))).map(link => link.hash)
   }));
   assert.equal(state.scrollWidth, width, `${name}: overflow at ${width}`);
   assert.deepEqual(state.missingImages, [], `${name}: missing images`);
   assert.equal(state.reviewLinks.length, 4);
   assert.deepEqual(state.internalBroken, [], `${name}: internal links`);
   assert.deepEqual(state.fonts, [], `${name}: fonts`);
   assert.deepEqual(errors, [], `${name}: runtime errors`);
   await page.screenshot({ path: path.join(output, `${name}-${width}.png`), fullPage: true });
   if (width === 1440 || width === 390) await page.screenshot({ path: path.join(output, `${name}-${width}-hero.png`) });
   if (width === 390) {
    if (name === 'variation-4') { await page.locator('.menu-toggle').click(); assert.equal(await page.locator('#mobile-menu').isVisible(), true); await page.keyboard.press('Escape'); }
    else { await page.locator('.burger').click(); assert.equal(await page.locator('.burger').getAttribute('aria-expanded'), 'true'); if (name === 'variation-3-dispatch') await page.locator('#drawer .close').click(); else if (name === 'index') await page.locator('.nav-close').click(); else await page.locator('.burger').click(); }
   }
   if (width === 320) {
    if (name === 'index' || name === 'variation-2-editorial') {
     const form = page.locator(name === 'index' ? '#quote' : '#quoteForm');
     for (const [field,value] of Object.entries({make:'Honda',model:'Civic',year:'2012',phone:'4165550100'})) await form.locator(`[name="${field}"]`).fill(value);
     await form.locator('button[type="submit"]').click();
     const url = await page.evaluate(() => window.__lastOpenedUrl);
     assert.ok(url && url.startsWith('https://wa.me/14372696321?text='));
     assert.match(new URL(url).searchParams.get('text'), /Honda/);
    } else if (name === 'variation-3-dispatch') {
     await page.locator('#tnext').click(); assert.notEqual(await page.locator('#terr').textContent(), '');
     await page.locator('#q-year').selectOption('2012'); await page.locator('#q-make').fill('Honda'); await page.locator('#q-model').fill('Civic');
     await page.locator('#tnext').click(); await page.locator('.chips[data-group="cond"] .chip').first().click();
     await page.locator('#q-phone').fill('4165550100'); await page.locator('#tsubmit').click();
     assert.match(await page.evaluate(() => window.__lastOpenedUrl || ''), /^https:\/\/wa.me\/14372696321/);
    } else {
     await page.locator('#vehicle').fill('Honda Civic'); await page.locator('#year').fill('2012'); await page.locator('#city').fill('Toronto');
     await page.locator('#quote-form button').click(); assert.equal(await page.locator('#quote-dialog').isVisible(), true);
     await page.keyboard.press('Escape'); await page.waitForFunction(() => !document.querySelector('dialog').open);
    }
    if (name === 'index') {
     const faq = page.locator('.qa button').first(); const before = await faq.getAttribute('aria-expanded');
     await faq.click(); assert.notEqual(await faq.getAttribute('aria-expanded'), before);
     await page.locator('#bento button').first().click(); assert.match(await page.locator('#lb').getAttribute('class'), /open/); await page.keyboard.press('Escape');
    } else {
     const details = page.locator(name === 'variation-2-editorial' ? '.faq details' : name === 'variation-3-dispatch' ? '.folder' : '.faq-list details').first();
     if (await details.count()) { const before = await details.evaluate(e=>e.open); await details.locator('summary').click(); assert.equal(await details.evaluate(e=>e.open),!before); }
    }
   }
   results.push({ name, ...state, errors });
   console.log(`PASS ${name} ${width}px | body ${state.bodyFont}, hero ${state.headingFont}`);
   }
   await page.close();
  }
  const page = await context.newPage();
  for (const name of pages) assert.equal((await page.request.get('http://127.0.0.1:4173/' + (name==='index'?'':name))).status(),200);
  fs.writeFileSync(path.join(output,'qa-results.json'),JSON.stringify(results,null,2));
  console.log('All 16 responsive checks and four routes passed.');
 } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
