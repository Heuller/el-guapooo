import { RecipeProps, NutritionalInfo } from "../types/recipe";

const VD = {
  calories: 2000,
  carbs: 300,
  proteins: 50,
  totalFats: 65,
  saturatedFats: 20,
  fibers: 25,
  sodium: 2000,
};

export interface CalculatedNutrition {
  per100g: NutritionalInfo & { vds: NutritionalInfo };
  perPortion: NutritionalInfo & { vds: NutritionalInfo };
  totalRecipe: NutritionalInfo;
  portionSize: number;
  portionLabel: string;
  totalWeightGrams: number;
  totalPortions: number;
}

export function calculateNutrition(recipe: RecipeProps, multiplier: number): CalculatedNutrition | null {
  if (!recipe.nutritionConfig) return null;

  let totalWeightGrams = 0;
  const totalNutrition: NutritionalInfo = {
    calories: 0,
    carbs: 0,
    proteins: 0,
    totalFats: 0,
    saturatedFats: 0,
    fibers: 0,
    sodium: 0,
  };

  recipe.ingredients.forEach(group => {
    group.items.forEach(item => {
      if (!item.nutrition) return;

      let grams = item.weightInGrams;
      if (grams === undefined) {
        const match = item.qty.match(/(\d+(?:[.,]\d+)?)\s*g/i);
        if (match) {
          grams = parseFloat(match[1].replace(',', '.'));
        } else {
          grams = 0;
        }
      }

      // Aplicar o multiplicador no peso do ingrediente
      const scaledGrams = grams * multiplier;
      totalWeightGrams += scaledGrams;

      const factor = scaledGrams / 100;
      totalNutrition.calories += item.nutrition.calories * factor;
      totalNutrition.carbs += item.nutrition.carbs * factor;
      totalNutrition.proteins += item.nutrition.proteins * factor;
      totalNutrition.totalFats += item.nutrition.totalFats * factor;
      totalNutrition.saturatedFats += item.nutrition.saturatedFats * factor;
      totalNutrition.fibers += item.nutrition.fibers * factor;
      totalNutrition.sodium += item.nutrition.sodium * factor;
    });
  });

  if (totalWeightGrams === 0) return null;

  const calculatePerWeight = (targetWeight: number): NutritionalInfo => {
    const factor = targetWeight / totalWeightGrams;
    return {
      calories: totalNutrition.calories * factor,
      carbs: totalNutrition.carbs * factor,
      proteins: totalNutrition.proteins * factor,
      totalFats: totalNutrition.totalFats * factor,
      saturatedFats: totalNutrition.saturatedFats * factor,
      fibers: totalNutrition.fibers * factor,
      sodium: totalNutrition.sodium * factor,
    };
  };

  const per100g = calculatePerWeight(100);
  const perPortion = calculatePerWeight(recipe.nutritionConfig.portionSize);

  const calculateVDs = (info: NutritionalInfo): NutritionalInfo => ({
    calories: (info.calories / VD.calories) * 100,
    carbs: (info.carbs / VD.carbs) * 100,
    proteins: (info.proteins / VD.proteins) * 100,
    totalFats: (info.totalFats / VD.totalFats) * 100,
    saturatedFats: (info.saturatedFats / VD.saturatedFats) * 100,
    fibers: (info.fibers / VD.fibers) * 100,
    sodium: (info.sodium / VD.sodium) * 100,
  });

  return {
    per100g: { ...per100g, vds: calculateVDs(per100g) },
    perPortion: { ...perPortion, vds: calculateVDs(perPortion) },
    totalRecipe: totalNutrition,
    portionSize: recipe.nutritionConfig.portionSize,
    portionLabel: recipe.nutritionConfig.portionLabel || "porção",
    totalWeightGrams,
    totalPortions: totalWeightGrams / recipe.nutritionConfig.portionSize,
  };
}
