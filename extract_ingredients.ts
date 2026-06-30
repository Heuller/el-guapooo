import { recipes } from './src/data/recipes';

const uniqueIngredients = new Set<string>();

recipes.forEach(r => {
  r.ingredients.forEach(g => {
    g.items.forEach(i => {
      uniqueIngredients.add(i.name);
    });
  });
});

console.log(Array.from(uniqueIngredients).sort().join('\n'));
