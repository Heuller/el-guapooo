const fs = require('fs');
const content = fs.readFileSync('c:/Users/bibli/Documents/el-guapooo/src/data/recipes.tsx', 'utf-8');
const ids = [];
const regex = /id: "([^"]+)"/g;
let match;
while ((match = regex.exec(content)) !== null) {
  ids.push(match[1]);
}
console.log(ids);
