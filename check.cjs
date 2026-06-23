const fs = require('fs');
const content = fs.readFileSync('src/data/recipes.tsx', 'utf-8');
const lines = content.split('\n');

const mapping = {};
let currentId = null;

for (const line of lines) {
  const idMatch = line.match(/id:\s*"([^"]+)"/);
  if (idMatch) {
    currentId = idMatch[1];
  }
  const imgMatch = line.match(/image:\s*"([^"]*)"/);
  if (imgMatch && currentId) {
    mapping[currentId] = imgMatch[1];
  }
}

console.log(JSON.stringify(mapping, null, 2));
