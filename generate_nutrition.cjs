const fs = require('fs');
const path = require('path');

const INGREDIENTS_DB = {
  // 100g values
  "Farinha": { calories: 364, carbs: 76.3, proteins: 10.3, totalFats: 1.0, saturatedFats: 0.2, fibers: 2.7, sodium: 2, source: "TBCA BR201108" },
  "Leite fluido": { calories: 60, carbs: 4.7, proteins: 3.2, totalFats: 3.3, saturatedFats: 2.1, fibers: 0, sodium: 44, source: "TBCA BR201407" },
  "Manteiga": { calories: 717, carbs: 0.1, proteins: 0.8, totalFats: 81.1, saturatedFats: 51.4, fibers: 0, sodium: 11, source: "TBCA BR201314" },
  "Ovo": { calories: 143, carbs: 1.6, proteins: 13, totalFats: 8.9, saturatedFats: 2.7, fibers: 0, sodium: 168, source: "TBCA BR201416" },
  "Gema": { calories: 322, carbs: 3.6, proteins: 15.9, totalFats: 26.5, saturatedFats: 9.5, fibers: 0, sodium: 48, source: "TBCA BR201415" },
  "Açúcar": { calories: 387, carbs: 100, proteins: 0, totalFats: 0, saturatedFats: 0, fibers: 0, sodium: 1, source: "TBCA BR201309" },
  "Açúcar mascavo": { calories: 369, carbs: 94, proteins: 0.8, totalFats: 0, saturatedFats: 0, fibers: 0, sodium: 12, source: "TBCA BR201103" },
  "Azeite": { calories: 884, carbs: 0, proteins: 0, totalFats: 100, saturatedFats: 14, fibers: 0, sodium: 2, source: "TBCA BR201304" },
  "Óleo": { calories: 884, carbs: 0, proteins: 0, totalFats: 100, saturatedFats: 15, fibers: 0, sodium: 0, source: "TBCA BR201323" },
  "Sal": { calories: 0, carbs: 0, proteins: 0, totalFats: 0, saturatedFats: 0, fibers: 0, sodium: 38758, source: "TBCA BR201326" },
  "Fermento biológico fresco": { calories: 105, carbs: 18.1, proteins: 8.4, totalFats: 1.9, saturatedFats: 0.3, fibers: 2.7, sodium: 51, source: "TBCA BR201111" },
  "Fermento biológico seco": { calories: 315, carbs: 54.3, proteins: 25.2, totalFats: 5.7, saturatedFats: 0.9, fibers: 8.1, sodium: 153, source: "Calculado a partir do fresco (x3) - TBCA BR201111" },
  "Fermento químico": { calories: 53, carbs: 24.3, proteins: 0, totalFats: 0, saturatedFats: 0, fibers: 0, sodium: 14234, source: "TACO Pág 74" },
  "Bicarbonato": { calories: 0, carbs: 0, proteins: 0, totalFats: 0, saturatedFats: 0, fibers: 0, sodium: 27360, source: "USDA 18369" },
  "Cacau": { calories: 228, carbs: 58, proteins: 20, totalFats: 14, saturatedFats: 8, fibers: 33, sodium: 21, source: "TBCA BR201306" },
  "Chocolate": { calories: 536, carbs: 62.7, proteins: 5.2, totalFats: 29.8, saturatedFats: 18.2, fibers: 8.2, sodium: 15, source: "TBCA BR201311" },
  "Aveia": { calories: 394, carbs: 66.6, proteins: 13.9, totalFats: 8.5, saturatedFats: 1.6, fibers: 9.1, sodium: 5, source: "TBCA BR201105" },
  "Banana": { calories: 98, carbs: 26, proteins: 1.3, totalFats: 0.1, saturatedFats: 0, fibers: 2, sodium: 0, source: "TBCA BR201107" },
  "Cenoura": { calories: 41, carbs: 9.6, proteins: 0.9, totalFats: 0.2, saturatedFats: 0, fibers: 3.2, sodium: 69, source: "TBCA BR201114" },
  "Coco": { calories: 663, carbs: 23.7, proteins: 6.9, totalFats: 64.5, saturatedFats: 57, fibers: 16.3, sodium: 37, source: "TBCA BR201117" },
  "Creme de leite": { calories: 223, carbs: 4.5, proteins: 2.3, totalFats: 22, saturatedFats: 13, fibers: 0, sodium: 47, source: "TBCA BR201403" },
  "Doce de leite": { calories: 315, carbs: 60.1, proteins: 6.3, totalFats: 5.5, saturatedFats: 3.1, fibers: 0, sodium: 122, source: "TBCA BR201312" },
  "Iogurte": { calories: 61, carbs: 4.7, proteins: 4.1, totalFats: 3, saturatedFats: 1.9, fibers: 0, sodium: 50, source: "TBCA BR201406" },
  "Leite condensado": { calories: 321, carbs: 57.3, proteins: 7.7, totalFats: 8.1, saturatedFats: 5, fibers: 0, sodium: 127, source: "TBCA BR201313" },
  "Leite em pó": { calories: 496, carbs: 38, proteins: 26, totalFats: 26.7, saturatedFats: 16.7, fibers: 0, sodium: 371, source: "TBCA BR201408" },
  "Polvilho": { calories: 353, carbs: 87.2, proteins: 0.4, totalFats: 0.1, saturatedFats: 0, fibers: 0, sodium: 1, source: "TBCA BR201124" },
  "Queijo Meia Cura": { calories: 318, carbs: 1.5, proteins: 21.2, totalFats: 25.1, saturatedFats: 16, fibers: 0, sodium: 477, source: "TBCA BR201420" },
  "Queijo Parmesão": { calories: 431, carbs: 3.2, proteins: 38.5, totalFats: 28.6, saturatedFats: 18.2, fibers: 0, sodium: 1528, source: "TBCA BR201421" },
  "Mel": { calories: 304, carbs: 82.4, proteins: 0.3, totalFats: 0, saturatedFats: 0, fibers: 0.2, sodium: 4, source: "TBCA BR201315" },
  "Melado": { calories: 290, carbs: 75, proteins: 0, totalFats: 0, saturatedFats: 0, fibers: 0, sodium: 15, source: "TBCA BR201316" },
  "Noz": { calories: 654, carbs: 13.7, proteins: 15.2, totalFats: 65.2, saturatedFats: 6.1, fibers: 6.7, sodium: 2, source: "TBCA BR201123" },
  "Agua": { calories: 0, carbs: 0, proteins: 0, totalFats: 0, saturatedFats: 0, fibers: 0, sodium: 0, source: "TBCA BR201400" },
  "Zero": { calories: 0, carbs: 0, proteins: 0, totalFats: 0, saturatedFats: 0, fibers: 0, sodium: 0, source: "dado não disponível / quantia insignificante" }
};

const VD = { calories: 2000, carbs: 300, proteins: 50, totalFats: 65, saturatedFats: 20, fibers: 25, sodium: 2000 };

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
  if (name.includes('Doce de leite')) return "Doce de leite"; // Use original case for Doce de leite firmer
  if (n.includes('iogurte')) return "Iogurte";
  if (n.includes('polvilho')) return "Polvilho";
  if (n.includes('meia cura') || n.includes('canastra')) return "Queijo Meia Cura";
  if (n.includes('parmesão')) return "Queijo Parmesão";
  if (n.includes('melado')) return "Melado";
  if (n.includes('mel ')) return "Mel";
  if (n === 'mel' || n.includes('mel ou açúcar')) return "Mel";
  if (n.includes('nozes') || n.includes('pecãs')) return "Noz";
  if (n.includes('água') || n.includes('suco de laranja') || n.includes('café solúvel')) return "Agua"; // Cafe is approx 0
  if (n.includes('tangzhong') || n.includes('esponja')) return "Sub-receita"; // ignorar
  return "Zero"; // Default to 0 for unrecognized like spices
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
    g = 100; // approx 1 banana
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
    else g = mult * 120; // farinha etc
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

// Regex patterns to find recipes
const recipeBlocks = [];
let idx = 0;

while(true) {
  const start = code.indexOf('{', idx);
  if (start === -1) break;
  const idMatch = code.substring(start, start + 100).match(/id:\s*"([^"]+)"/);
  if (idMatch) {
    // find end of this recipe object
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
      recipeBlocks.push({ id: idMatch[1], start, end, titleMatch: code.substring(start, start + 200).match(/title:\s*"([^"]+)"/) });
      idx = end;
    } else {
      idx = start + 1;
    }
  } else {
    idx = start + 1;
  }
}

let report = `# Relatório Nutricional Completo
Gerado a partir das fontes oficiais TBCA/TACO/USDA.

## TABELA DE CONVERSÃO APLICADA
- 1 ovo inteiro = 50g
- 1 gema = 18g
- 1 xícara (chá) de farinha de trigo = 120g
- 1 xícara (chá) de açúcar refinado = 180g
- 1 xícara (chá) de açúcar mascavo = 150g
- 1 xícara (chá) de cacau em pó = 90g
- 1 colher (sopa) de manteiga = 20g
- 1 colher (sopa) de azeite / óleo = 12g
- 1 colher (sopa) de cacau = 10g
- 1 colher (chá/café) = 5g
- 1 banana extra = 100g
- Fermento biológico seco = calculado como 3x a concentração do fresco (base TBCA).

`;

// We will process backwards so indices don't shift when we replace!
for (let i = recipeBlocks.length - 1; i >= 0; i--) {
  let block = recipeBlocks[i];
  let blockCode = code.substring(block.start, block.end);
  const title = block.titleMatch ? block.titleMatch[1] : block.id;
  
  // Strip out old nutritionConfig if it exists
  blockCode = blockCode.replace(/\n\s*nutritionConfig:\s*{[^}]*},?/g, '');
  
  // Inject default nutritionConfig before image or ingredients
  blockCode = blockCode.replace(/image:\s*"/, `nutritionConfig: { portionSize: 80, portionLabel: "fatia (80g)" },\n    image: "`);

  let currentRecipeReport = `--- RECEITA: ${title} ---\n\nINGREDIENTES PESQUISADOS:\n`;
  let totalRecipe = { calories: 0, carbs: 0, proteins: 0, totalFats: 0, saturatedFats: 0, fibers: 0, sodium: 0, weight: 0 };

  // Parse items
  const itemRegex = /{\s*name:\s*"([^"]+)",\s*qty:\s*"([^"]+)"([^}]*?)}/g;
  
  blockCode = blockCode.replace(itemRegex, (match, name, qty, rest) => {
    // Remove old nutrition and weightInGrams from rest
    let cleanRest = rest.replace(/,\s*weightInGrams:\s*\d+(?:\.\d+)?/g, '');
    cleanRest = cleanRest.replace(/,\s*nutrition:\s*{[^}]*}/g, '');
    
    // Ignore commented out items or weird ones
    if (name.includes('//')) return match;

    const key = identifyIngredient(name);
    const dbItem = INGREDIENTS_DB[key];
    const grams = parseQty(qty, name);
    
    if (grams === 0 && key !== "Zero" && key !== "Sub-receita") {
        // e.g. a gosto
    }
    
    let addition = "";
    if (key !== "Sub-receita") {
      let calc = {
        calories: Number((dbItem.calories * (grams / 100)).toFixed(1)),
        carbs: Number((dbItem.carbs * (grams / 100)).toFixed(1)),
        proteins: Number((dbItem.proteins * (grams / 100)).toFixed(1)),
        totalFats: Number((dbItem.totalFats * (grams / 100)).toFixed(1)),
        saturatedFats: Number((dbItem.saturatedFats * (grams / 100)).toFixed(1)),
        fibers: Number((dbItem.fibers * (grams / 100)).toFixed(1)),
        sodium: Number((dbItem.sodium * (grams / 100)).toFixed(1))
      };
      
      currentRecipeReport += `- Ingrediente: ${name} | Quantidade na receita: ${grams}g | Fonte: ${dbItem.source} | kcal/100g: ${dbItem.calories} | Carbo/100g: ${dbItem.carbs} | Proteína/100g: ${dbItem.proteins} | Gorduras/100g: ${dbItem.totalFats} | Sat/100g: ${dbItem.saturatedFats} | Fibras/100g: ${dbItem.fibers} | Sódio/100g: ${dbItem.sodium}mg\n`;
      
      totalRecipe.weight += grams;
      totalRecipe.calories += calc.calories;
      totalRecipe.carbs += calc.carbs;
      totalRecipe.proteins += calc.proteins;
      totalRecipe.totalFats += calc.totalFats;
      totalRecipe.saturatedFats += calc.saturatedFats;
      totalRecipe.fibers += calc.fibers;
      totalRecipe.sodium += calc.sodium;

      const needsWeight = !qty.match(/(\d+(?:[.,]\d+)?)\s*g/i);
      if (needsWeight && grams > 0) {
        addition += `, weightInGrams: ${grams}`;
      }
      
      addition += `, nutrition: { calories: ${dbItem.calories}, carbs: ${dbItem.carbs}, proteins: ${dbItem.proteins}, totalFats: ${dbItem.totalFats}, saturatedFats: ${dbItem.saturatedFats}, fibers: ${dbItem.fibers}, sodium: ${dbItem.sodium} }`;
    }

    return `{ name: "${name}", qty: "${qty}"${cleanRest}${addition} }`;
  });
  
  if (totalRecipe.weight > 0) {
    const factor100 = 100 / totalRecipe.weight;
    const factorPortion = 80 / totalRecipe.weight; // standardizing to 80g for report as requested

    currentRecipeReport += `\nTOTAIS DA RECEITA:\n`;
    currentRecipeReport += `- Peso total: ${totalRecipe.weight.toFixed(1)}g\n`;
    currentRecipeReport += `- Valor energético total: ${totalRecipe.calories.toFixed(1)} kcal\n`;
    currentRecipeReport += `- Carboidratos totais: ${totalRecipe.carbs.toFixed(1)} g\n`;
    currentRecipeReport += `- Proteínas totais: ${totalRecipe.proteins.toFixed(1)} g\n`;
    currentRecipeReport += `- Gorduras totais: ${totalRecipe.totalFats.toFixed(1)} g\n`;
    currentRecipeReport += `- Gorduras saturadas: ${totalRecipe.saturatedFats.toFixed(1)} g\n`;
    currentRecipeReport += `- Fibras: ${totalRecipe.fibers.toFixed(1)} g\n`;
    currentRecipeReport += `- Sódio: ${totalRecipe.sodium.toFixed(1)} mg\n\n`;

    const c100 = totalRecipe.calories * factor100, cb100 = totalRecipe.carbs * factor100, p100 = totalRecipe.proteins * factor100, f100 = totalRecipe.totalFats * factor100, s100 = totalRecipe.saturatedFats * factor100, fi100 = totalRecipe.fibers * factor100, so100 = totalRecipe.sodium * factor100;
    
    currentRecipeReport += `TABELA FINAL POR 100g:\n`;
    currentRecipeReport += `- kcal: ${c100.toFixed(1)} | Carbo: ${cb100.toFixed(1)}g | Proteína: ${p100.toFixed(1)}g | Gord: ${f100.toFixed(1)}g | Sat: ${s100.toFixed(1)}g | Fibras: ${fi100.toFixed(1)}g | Sódio: ${so100.toFixed(1)}mg\n\n`;

    const cP = totalRecipe.calories * factorPortion, cbP = totalRecipe.carbs * factorPortion, pP = totalRecipe.proteins * factorPortion, fP = totalRecipe.totalFats * factorPortion, sP = totalRecipe.saturatedFats * factorPortion, fiP = totalRecipe.fibers * factorPortion, soP = totalRecipe.sodium * factorPortion;

    currentRecipeReport += `TABELA FINAL POR PORÇÃO DE 80g:\n`;
    currentRecipeReport += `- kcal: ${cP.toFixed(1)} (%VD: ${((cP/VD.calories)*100).toFixed(1)}%) | Carbo: ${cbP.toFixed(1)}g (%VD: ${((cbP/VD.carbs)*100).toFixed(1)}%) | Proteína: ${pP.toFixed(1)}g (%VD: ${((pP/VD.proteins)*100).toFixed(1)}%) | Gord: ${fP.toFixed(1)}g (%VD: ${((fP/VD.totalFats)*100).toFixed(1)}%) | Sat: ${sP.toFixed(1)}g (%VD: ${((sP/VD.saturatedFats)*100).toFixed(1)}%) | Fibras: ${fiP.toFixed(1)}g (%VD: ${((fiP/VD.fibers)*100).toFixed(1)}%) | Sódio: ${soP.toFixed(1)}mg (%VD: ${((soP/VD.sodium)*100).toFixed(1)}%)\n\n`;
  }
  
  report += currentRecipeReport;

  // Replace block in code
  code = code.substring(0, block.start) + blockCode + code.substring(block.end);
}

fs.writeFileSync('./src/data/recipes.tsx', code, 'utf8');
const brainPath = 'C:/Users/bibli/.gemini/antigravity/brain/8c97eddf-2840-453b-a2bb-7f64cfda8ddb/relatorio_nutricional.md';
fs.writeFileSync(brainPath, report, 'utf8');
console.log('Script concluded. Processed', recipeBlocks.length, 'recipes.');
