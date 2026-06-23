const fs = require('fs');
const cheerio = require('cheerio');

const html = fs.readFileSync('legacy/index.html', 'utf-8');
const $ = cheerio.load(html);

const images = {};
$('article.recipe-card').each((_, el) => {
  const id = $(el).attr('id');
  const img = $(el).find('.rc-image img').attr('src');
  if (id && img) {
    images[id] = img;
  }
});

console.log(JSON.stringify(images, null, 2));
