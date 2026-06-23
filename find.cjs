const fs = require('fs');
const content = fs.readFileSync('src/data/recipes.tsx', 'utf-8');
const ids = content.match(/id:\s*"([^"]+)"/g);
console.log(ids);
