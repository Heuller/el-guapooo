const fs = require('fs');
const cheerio = require('cheerio');

const html = fs.readFileSync('legacy/index.html', 'utf-8');
const $ = cheerio.load(html);

const recipes = [];

$('article.recipe-card').each((_, el) => {
  const $el = $(el);
  const id = $el.attr('id');

  if (id === 'pizza-massa-base' || id === 'focaccia-massa-base') {
    return; // Already migrated
  }

  const title = $el.find('.rc-name').text().trim();

  const tags = [];
  $el.find('.rc-tag, .rc-chip').each((_, tagEl) => {
    tags.push({
      label: $(tagEl).text().trim(),
      accent: $(tagEl).hasClass('rc-tag--accent') || $(tagEl).hasClass('rc-chip--accent')
    });
  });

  const metaList = [];
  $el.find('.rc-meta-item').each((_, metaEl) => {
    metaList.push({
      label: $(metaEl).find('.rc-meta-label').text().trim(),
      value: $(metaEl).find('.rc-meta-value, .rc-meta-val').text().trim()
    });
  });

  const ingredients = [];
  $el.find('.rc-ing-group').each((_, groupEl) => {
    let groupName = $(groupEl).find('.rc-ing-group-name').text().trim() || 'Ingredientes';
    
    const items = [];
    $(groupEl).find('.rc-ing-item').each((_, itemEl) => {
      const $row = $(itemEl).find('.rc-ing-row');
      const nameClone = $row.find('span').first().clone();
      
      // Get the baker percentage if exists
      const $pctSpan = nameClone.find('.ing-pct, .rc-ing-pct');
      let pctStr = $pctSpan.text().trim();
      $pctSpan.remove();
      
      let cleanName = nameClone.text().replace(/<[^>]+>/g, '').trim();
      let qty = $row.find('.rc-ing-qty').text().trim();
      
      let pct;
      if (pctStr) {
        let match = pctStr.match(/(\d+(?:,\d+)?)/);
        if (match) {
          pct = parseFloat(match[1].replace(',', '.'));
        }
      }

      items.push({ name: cleanName, qty, pct });
    });
    ingredients.push({ name: groupName, items });
  });

  const method = [];
  $el.find('.rc-step-text').each((_, stepEl) => {
    let stepHtml = $(stepEl).html().trim();
    stepHtml = stepHtml.replace(/class="/g, 'className="');
    method.push(stepHtml);
  });

  const notes = [];
  $el.find('.rc-notes-item').each((_, noteEl) => {
    let nTitle = $(noteEl).find('.rc-notes-title, strong').text().trim().replace(/:$/, '');
    let nText = $(noteEl).find('.rc-notes-text, p').text().trim();
    if(nTitle || nText) {
       notes.push({ title: nTitle, content: nText });
    }
  });

  let image = '/images/el-guapo-img-01.webp';
  if (id.includes('cuca')) image = '/images/el-guapo-img-03.webp';
  else if (id.includes('bolo') || id.includes('panetone')) image = '/images/el-guapo-img-04.webp';
  else if (id.includes('pao')) image = '/images/el-guapo-img-05.webp';

  recipes.push({
    id, title, chips: tags, meta: metaList, image, ingredients, method, notes
  });
});

let output = '';
for (const r of recipes) {
  output += `  {
    id: "${r.id}",
    title: "${r.title}",
    chips: ${JSON.stringify(r.chips)},
    meta: ${JSON.stringify(r.meta)},
    image: "${r.image}",
    ingredients: ${JSON.stringify(r.ingredients, null, 2).replace(/"([^"]+)":/g, '$1:').replace(/\n/g, '\n    ')},
    method: [
${r.method.map(m => `      { text: <>${m}</> },`).join('\n')}
    ],
    notes: ${JSON.stringify(r.notes, null, 2).replace(/"([^"]+)":/g, '$1:').replace(/\n/g, '\n    ')}
  },
`;
}

fs.writeFileSync('scratch-recipes-2.tsx', output, 'utf-8');
console.log('Parsed ' + recipes.length + ' recipes with Cheerio');
