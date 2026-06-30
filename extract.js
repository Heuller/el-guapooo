const fs = require('fs');

const code = fs.readFileSync('./src/data/recipes.tsx', 'utf8');

// Match recipes
const recipeMatches = [...code.matchAll(/id:\s*"([^"]+)"/g)];

console.log(`Found ${recipeMatches.length} recipes.`);

// Try to parse items. 
const itemRegex = /{[\s\S]*?name:\s*"([^"]+)",\s*qty:\s*"([^"]+)"/g;
const items = [...code.matchAll(itemRegex)];

const uniqueIngredients = new Set();
const map = new Map();

for (const match of items) {
  const name = match[1];
  const qty = match[2];
  uniqueIngredients.add(name);
  if (!map.has(name)) map.set(name, new Set());
  map.get(name).add(qty);
}

const list = Array.from(uniqueIngredients).sort();
list.forEach(item => {
  console.log(`- ${item} (Quantities: ${Array.from(map.get(item)).join(', ')})`);
});
