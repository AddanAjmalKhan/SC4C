const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const output = path.join(root, 'dist');
if (path.dirname(output) !== root || path.basename(output) !== 'dist') throw new Error('Invalid build output');
fs.rmSync(output, { recursive: true, force: true });
fs.mkdirSync(output, { recursive: true });
for (const page of ['index.html', 'variation-2-editorial.html', 'variation-3-dispatch.html', 'variation-4.html']) {
  fs.copyFileSync(path.join(root, page), path.join(output, page));
}
fs.cpSync(path.join(root, 'assets'), path.join(output, 'assets'), { recursive: true });
console.log('Built 4 designs and their assets in dist/');
