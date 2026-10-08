const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
require('./build.cjs');
const root = path.resolve(__dirname, '../dist');
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.png': 'image/png' };
const publicFiles = new Set(['index.html', 'variation-2-editorial.html', 'variation-3-dispatch.html', 'variation-4.html', 'assets/review.css', 'assets/variation-4.css', 'assets/variation-4.js', 'assets/switcher.css', 'assets/switcher.js']);
http.createServer((req, res) => {
  let name;
  try { name = decodeURIComponent(new URL(req.url, 'http://localhost').pathname).replace(/^\/+/, '') || 'index.html'; }
  catch { res.writeHead(400); res.end('Invalid URL'); return; }
  if (name === 'variation-1-night-shift' || name === 'variation-1-night-shift.html') { res.writeHead(308, { Location: '/' }); res.end(); return; }
  if (!path.extname(name)) name += '.html';
  if (!publicFiles.has(name)) { res.writeHead(404); res.end('Not found'); return; }
  fs.readFile(path.join(root, name), (err, data) => {
    if (err) { res.writeHead(404); res.end('Not found'); return; }
    res.writeHead(200, { 'Content-Type': types[path.extname(name)] || 'application/octet-stream', 'Cache-Control': 'no-store' });
    res.end(data);
  });
}).listen(4173, '127.0.0.1', () => console.log('Homepage preview: http://127.0.0.1:4173'));
