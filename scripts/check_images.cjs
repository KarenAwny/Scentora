const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat && stat.isDirectory()) results = results.concat(walk(full));
    else if (full.endsWith('.jsx') || full.endsWith('.js') || full.endsWith('.css')) results.push(full);
  });
  return results;
}

const files = walk('src');
const imgRegex = /['"](\/(images|perfumes|assets)[^'"]+\.(?:jpg|jpeg|png|webp|svg))['"]/gi;
const missing = [];
const found = new Set();

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  let match;
  while ((match = imgRegex.exec(content)) !== null) {
    const imgPath = match[1];
    found.add(imgPath);
    const local = path.join('public', imgPath.replace(/^\//, ''));
    if (!fs.existsSync(local)) {
      missing.push({ imgPath, in: f });
    }
  }
});

console.log('Checked', found.size, 'unique image references.');
console.log('Missing count:', missing.length);
missing.forEach(m => console.log('MISSING:', m.imgPath, 'in', m.in));

