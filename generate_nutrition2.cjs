const fs = require('fs');

const INGREDIENTS_DB = {
  // 100g values
  "Farinha": { calories: 364, carbs: 76.3, proteins: 10.3, totalFats: 1.0, saturatedFats: 0.2, fibers: 2.7, sodium: 2 },
  "Leite fluido": { calories: 60, carbs: 4.7, proteins: 3.2, totalFats: 3.3, saturatedFats: 2.1, fibers: 0, sodium: 44 },
  "Manteiga": { calories: 717, carbs: 0.1, proteins: 0.8, totalFats: 81.1, saturatedFats: 51.4, fibers: 0, sodium: 11 },
  "Ovo": { calories: 143, carbs: 1.6, proteins: 13, totalFats: 8.9, saturatedFats: 2.7, fibers: 0, sodium: 168 },
  "Gema": { calories: 322, carbs: 3.6, proteins: 15.9, totalFats: 26.5, saturatedFats: 9.5, fibers: 0, sodium: 48 },
  "Açúcar": { calories: 387, carbs: 100, proteins: 0, totalFats: 0, saturatedFats: 0, fibers: 0, sodium: 1 },
  "Açúcar mascavo": { calories: 369, carbs: 94, proteins: 0.8, totalFats: 0, saturatedFats: 0, fibers: 0, sodium: 12 },
  "Azeite": { calories: 884, carbs: 0, proteins: 0, totalFats: 100, saturatedFats: 14, fibers: 0, sodium: 2 },
  "Óleo": { calories: 884, carbs: 0, proteins: 0, totalFats: 100, saturatedFats: 15, fibers: 0, sodium: 0 },
  "Sal": { calories: 0, carbs: 0, proteins: 0, totalFats: 0, saturatedFats: 0, fibers: 0, sodium: 38758 },
  "Fermento biológico fresco": { calories: 105, carbs: 18.1, proteins: 8.4, totalFats: 1.9, saturatedFats: 0.3, fibers: 2.7, sodium: 51 },
  "Fermento biológico seco": { calories: 315, carbs: 54.3, proteins: 25.2, totalFats: 5.7, saturatedFats: 0.9, fibers: 8.1, sodium: 153 },
  "Fermento químico": { calories: 53, carbs: 24.3, proteins: 0, totalFats: 0, saturatedFats: 0, fibers: 0, sodium: 14234 },
  "Bicarbonato": { calories: 0, carbs: 0, proteins: 0, totalFats: 0, saturatedFats: 0, fibers: 0, sodium: 27360 },
  "Cacau": { calories: 228, carbs: 58, proteins: 20, totalFats: 14, saturatedFats: 8, fibers: 33, sodium: 21 },
  "Chocolate": { calories: 536, carbs: 62.7, proteins: 5.2, totalFats: 29.8, saturatedFats: 18.2, fibers: 8.2, sodium: 15 },
  "Aveia": { calories: 394, carbs: 66.6, proteins: 13.9, totalFats: 8.5, saturatedFats: 1.6, fibers: 9.1, sodium: 5 },
  "Banana": { calories: 98, carbs: 26, proteins: 1.3, totalFats: 0.1, saturatedFats: 0, fibers: 2, sodium: 0 },
  "Cenoura": { calories: 41, carbs: 9.6, proteins: 0.9, totalFats: 0.2, saturatedFats: 0, fibers: 3.2, sodium: 69 },
  "Coco": { calories: 663, carbs: 23.7, proteins: 6.9, totalFats: 64.5, saturatedFats: 57, fibers: 16.3, sodium: 37 },
  "Creme de leite": { calories: 223, carbs: 4.5, proteins: 2.3, totalFats: 22, saturatedFats: 13, fibers: 0, sodium: 47 },
  "Doce de leite": { calories: 315, carbs: 60.1, proteins: 6.3, totalFats: 5.5, saturatedFats: 3.1, fibers: 0, sodium: 122 },
  "Iogurte": { calories: 61, carbs: 4.7, proteins: 4.1, totalFats: 3, saturatedFats: 1.9, fibers: 0, sodium: 50 },
  "Leite condensado": { calories: 321, carbs: 57.3, proteins: 7.7, totalFats: 8.1, saturatedFats: 5, fibers: 0, sodium: 127 },
  "Leite em pó": { calories: 496, carbs: 38, proteins: 26, totalFats: 26.7, saturatedFats: 16.7, fibers: 0, sodium: 371 },
  "Polvilho": { calories: 353, carbs: 87.2, proteins: 0.4, totalFats: 0.1, saturatedFats: 0, fibers: 0, sodium: 1 },
  "Queijo Meia Cura": { calories: 318, carbs: 1.5, proteins: 21.2, totalFats: 25.1, saturatedFats: 16, fibers: 0, sodium: 477 },
  "Queijo Parmesão": { calories: 431, carbs: 3.2, proteins: 38.5, totalFats: 28.6, saturatedFats: 18.2, fibers: 0, sodium: 1528 },
  "Mel": { calories: 304, carbs: 82.4, proteins: 0.3, totalFats: 0, saturatedFats: 0, fibers: 0.2, sodium: 4 },
  "Melado": { calories: 290, carbs: 75, proteins: 0, totalFats: 0, saturatedFats: 0, fibers: 0, sodium: 15 },
  "Noz": { calories: 654, carbs: 13.7, proteins: 15.2, totalFats: 65.2, saturatedFats: 6.1, fibers: 6.7, sodium: 2 },
  "Agua": { calories: 0, carbs: 0, proteins: 0, totalFats: 0, saturatedFats: 0, fibers: 0, sodium: 0 },
  "Zero": { calories: 0, carbs: 0, proteins: 0, totalFats: 0, saturatedFats: 0, fibers: 0, sodium: 0 }
};

function identifyIngredient(name) {
  const n = name.toLowerCase();
  if (n.includes('farinha de trigo') || n.includes('farinha w300')) return "Farinha";
  if (n.includes('leite em pó')) return "Leite em pó";
  if (n.includes('leite condensado')) return "Leite condensado";
  if (n.includes('leite integral')) return "Leite fluido";
  if (n.includes('manteiga')) return "Manteiga";
  if (n.includes('gema')) return "Gema";
  if (n.includes('ovos') || n.includes('ovo')) return "Ovo";
  if (n.includes('açúcar mascavo')) return "Açúcar mascavo";
  if (n.includes('açúcar') || n.includes('cristal') || n.includes('demerara')) return "Açúcar";
  if (n.includes('azeite')) return "Azeite";
  if (n.includes('óleo') || n.includes('gordura')) return "Óleo";
  if (n.includes('sal')) return "Sal";
  if (n.includes('fermento biológico seco')) return "Fermento biológico seco";
  if (n.includes('fermento biológico fresco')) return "Fermento biológico fresco";
  if (n.includes('fermento químico') || n.includes('fermento em pó')) return "Fermento químico";
  if (n.includes('bicarbonato')) return "Bicarbonato";
  if (n.includes('cacau')) return "Cacau";
  if (n.includes('chocolate') || n.includes('ganache') || n.includes('gotas de chocolate')) return "Chocolate";
  if (n.includes('aveia')) return "Aveia";
  if (n.includes('banana')) return "Banana";
  if (n.includes('cenoura')) return "Cenoura";
  if (n.includes('coco')) return "Coco";
  if (n.includes('creme de leite')) return "Creme de leite";
  if (name.includes('Doce de leite')) return "Doce de leite";
  if (n.includes('iogurte')) return "Iogurte";
  if (n.includes('polvilho')) return "Polvilho";
  if (n.includes('meia cura') || n.includes('canastra')) return "Queijo Meia Cura";
  if (n.includes('parmesão')) return "Queijo Parmesão";
  if (n.includes('melado')) return "Melado";
  if (n.includes('mel ') || n === 'mel' || n.includes('mel ou açúcar')) return "Mel";
  if (n.includes('nozes') || n.includes('pecãs')) return "Noz";
  if (n.includes('água') || n.includes('suco de laranja') || n.includes('café solúvel')) return "Agua";
  if (n.includes('tangzhong') || n.includes('esponja')) return "Sub-receita";
  return "Zero";
}

function parseQty(qty, name) {
  let g = 0;
  let q = String(qty).toLowerCase();
  if (name.toLowerCase().includes('tangzhong preparado') || name.toLowerCase().includes('esponja')) return 0;

  const gMatch = q.match(/(\d+(?:[.,]\d+)?)\s*(?:g|ml)/i);
  if (gMatch) {
    g = parseFloat(gMatch[1].replace(',', '.'));
  } else if (name.toLowerCase().includes('ovo')) {
    const num = parseFloat(q.match(/(\d+)/)?.[1] || 1);
    g = num * 50;
  } else if (name.toLowerCase().includes('gema')) {
    const num = parseFloat(q.match(/(\d+)/)?.[1] || 1);
    g = num * 18; 
  } else if (name.toLowerCase().includes('banana')) {
    g = 100;
  } else if (q.includes('xícara')) {
    const isHalf = q.includes('½') || q.includes('1/2');
    const isOneAndHalf = q.includes('1½') || q.includes('1 1/2');
    let mult = 1;
    if (isOneAndHalf) mult = 1.5;
    else if (isHalf) mult = 0.5;
    else mult = parseFloat(q.match(/(\d+)/)?.[1] || 1);
    if (name.toLowerCase().includes('açúcar mascavo')) g = mult * 150;
    else if (name.toLowerCase().includes('açúcar')) g = mult * 180;
    else if (name.toLowerCase().includes('cacau')) g = mult * 90;
    else g = mult * 120;
  } else if (q.includes('col. sopa') || q.includes('colher (sopa)') || q.includes('colher de sopa')) {
    const num = parseFloat(q.match(/(\d+)/)?.[1] || 1);
    if (name.toLowerCase().includes('manteiga')) g = num * 20;
    else if (name.toLowerCase().includes('azeite') || name.toLowerCase().includes('óleo')) g = num * 12;
    else if (name.toLowerCase().includes('cacau')) g = num * 10;
    else g = num * 15;
  } else if (q.includes('col. chá') || q.includes('col. café') || q.includes('colher (chá)')) {
    const num = parseFloat(q.match(/(\d+)/)?.[1] || 1);
    g = num * 5;
  } else {
    g = 0;
  }
  return g;
}

let code = fs.readFileSync('./src/data/recipes.tsx', 'utf8');

// First, aggressively clean up any existing nutrition, nutritionConfig, weightInGrams
code = code.replace(/,\s*nutrition:\s*{[^}]+}/g, '');
code = code.replace(/,\s*weightInGrams:\s*\d+(?:\.\d+)?/g, '');
code = code.replace(/nutritionConfig:\s*{[^}]+},?\s*/g, '');

const recipeBlocks = [];
let idx = 0;
while(true) {
  const start = code.indexOf('{', idx);
  if (start === -1) break;
  const idMatch = code.substring(start, start + 100).match(/id:\s*"([^"]+)"/);
  if (idMatch) {
    let depth = 0;
    let end = -1;
    for(let i = start; i < code.length; i++) {
      if (code[i] === '{') depth++;
      else if (code[i] === '}') {
        depth--;
        if (depth === 0) {
          end = i + 1;
          break;
        }
      }
    }
    if (end !== -1) {
      recipeBlocks.push({ id: idMatch[1], start, end });
      idx = end;
    } else {
      idx = start + 1;
    }
  } else {
    idx = start + 1;
  }
}

for (let i = recipeBlocks.length - 1; i >= 0; i--) {
  let block = recipeBlocks[i];
  let blockCode = code.substring(block.start, block.end);
  
  // Inject default nutritionConfig before image
  blockCode = blockCode.replace(/image:\s*"/, `nutritionConfig: { portionSize: 80, portionLabel: "fatia (80g)" },\n    image: "`);

  // Parse items with robust regex
  // Find objects with name and qty
  const itemRegex = /({[^{}]*name:\s*"([^"]+)"[^{}]*qty:\s*"([^"]+)"[^{}]*})/g;
  
  blockCode = blockCode.replace(itemRegex, (match, fullObj, name, qty) => {
    if (name.includes('//')) return match;

    const key = identifyIngredient(name);
    const dbItem = INGREDIENTS_DB[key];
    const grams = parseQty(qty, name);
    
    let addition = "";
    if (key !== "Sub-receita") {
      const needsWeight = !qty.match(/(\d+(?:[.,]\d+)?)\s*g/i);
      if (needsWeight && grams > 0) {
        addition += `, weightInGrams: ${grams}`;
      }
      addition += `, nutrition: { calories: ${dbItem.calories}, carbs: ${dbItem.carbs}, proteins: ${dbItem.proteins}, totalFats: ${dbItem.totalFats}, saturatedFats: ${dbItem.saturatedFats}, fibers: ${dbItem.fibers}, sodium: ${dbItem.sodium} }`;
    }

    // Insert addition right before the closing brace
    return fullObj.replace(/}\s*$/, `${addition} }`);
  });
  
  code = code.substring(0, block.start) + blockCode + code.substring(block.end);
}

fs.writeFileSync('./src/data/recipes.tsx', code, 'utf8');
console.log('Script concluded. File rewritten perfectly.');
