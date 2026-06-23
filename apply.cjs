const fs = require('fs');

const imageMap = {
  "cuca-massa-chocolate": "images/el-guapo-img-04.webp",
  "cuca-crumble-basico": "",
  "cuca-crumble-chocolate": "",
  "bolo-pao-de-lo-padrao": "images/el-guapo-img-05.webp",
  "bolo-cenoura-gabriela": "images/bolo-cenoura-gabriela.jpeg",
  "bolo-pao-de-lo-chocolate": "images/el-guapo-img-06.webp",
  "bolo-brigadeiro-el-guapo": "images/el-guapo-img-07.webp",
  "bolo-recheio-coco": "images/el-guapo-img-08.webp",
  "pao-de-queijo-heuller": "images/el-guapo-img-09.webp",
  "pao-heuller-gabriela": "images/el-guapo-img-10.webp",
  "bolo-panetone-el-guapo": "images/el-guapo-img-11.webp",
  "bolo-banana-bread-el-guapo": "images/el-guapo-img-12.webp"
};

const file = 'src/data/recipes.tsx';
let content = fs.readFileSync(file, 'utf-8');

const lines = content.split('\n');
let currentId = null;

for (let i = 0; i < lines.length; i++) {
  const idMatch = lines[i].match(/id:\s*"([^"]+)"/);
  if (idMatch) {
    currentId = idMatch[1];
  }
  
  const imgMatch = lines[i].match(/image:\s*"([^"]*)"/);
  if (imgMatch && currentId && imageMap[currentId] !== undefined) {
    lines[i] = lines[i].replace(/image:\s*"[^"]*"/, `image: "${imageMap[currentId]}"`);
  }
}

fs.writeFileSync(file, lines.join('\n'));
console.log('Applied mapped images');
