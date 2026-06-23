const fs = require('fs');
const cheerio = require('cheerio');
const $ = cheerio.load(fs.readFileSync('legacy/index.html'));
console.log('basico:', $('#cuca-crumble-basico').find('.rc-image img').attr('src'));
console.log('chocolate:', $('#cuca-crumble-chocolate').find('.rc-image img').attr('src'));
