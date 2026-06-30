import { recipes } from './src/data/recipes';
import { calculateNutrition } from './src/utils/calculateNutrition';

const focaccia = recipes.find(r => r.id === "focaccia-massa-base");
if (focaccia) {
  const result = calculateNutrition(focaccia, 1);
  console.log("Focaccia result:", result);
} else {
  console.log("Focaccia not found");
}

const pizza = recipes.find(r => r.id === "pizza-massa-base");
if (pizza) {
  const result = calculateNutrition(pizza, 1);
  console.log("Pizza result:", result);
}
