import { useState, useMemo } from 'react';

type UnitMode = 'grams' | 'home';

export const useRecipeScaler = (initialMultiplier = 1) => {
  const [multiplier, setMultiplier] = useState(initialMultiplier);
  const [unitMode, setUnitMode] = useState<UnitMode>('grams');

  const scaleText = (text: string | React.ReactNode): React.ReactNode => {
    if (typeof text !== 'string') return text; // If it's already a React Node, we'd need a more complex parser for children, but for our simple data structure we assume strings in ingredients.

    // Regex to find things like "500g", "2.5kg", "3 un."
    return text.replace(/(\d+(?:[.,]\d+)?)\s*(g|kg|ml|l|un\.)/gi, (match, p1, p2) => {
      let num = parseFloat(p1.replace(',', '.'));
      let unit = p2.toLowerCase();
      
      // Scale by multiplier
      num = num * multiplier;

      // Unit conversions if in home mode
      if (unitMode === 'home') {
        if (unit === 'g') {
          // Approximation for home baking (1 cup ~ 120g of flour)
          // This is a naive conversion to showcase the feature
          if (num > 50) {
            const cups = (num / 120).toFixed(1).replace('.0', '');
            return `${cups} xícara(s)`;
          } else if (num > 10) {
            const spoons = (num / 15).toFixed(1).replace('.0', '');
            return `${spoons} colher(es) de sopa`;
          } else {
            const tsp = (num / 5).toFixed(1).replace('.0', '');
            return `${tsp} colher(es) de chá`;
          }
        }
      }

      // Formatting back
      let formattedNum = Number.isInteger(num) ? num.toString() : num.toFixed(1);
      return `${formattedNum}${unit}`;
    });
  };

  return { multiplier, setMultiplier, unitMode, setUnitMode, scaleText };
};
