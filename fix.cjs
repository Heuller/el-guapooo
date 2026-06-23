const fs = require('fs');
let content = fs.readFileSync('src/data/recipes.tsx', 'utf-8');
content = content.replaceAll('"/images/', '"images/');
fs.writeFileSync('src/data/recipes.tsx', content);
console.log('Fixed images');
