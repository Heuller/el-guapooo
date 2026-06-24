import { useState, isValidElement, cloneElement, Children, Fragment, createElement } from 'react';

type UnitMode = 'grams' | 'home';

export const useRecipeScaler = (initialMultiplier = 1) => {
  const [multiplier, setMultiplier] = useState(initialMultiplier);
  const [unitMode, setUnitMode] = useState<UnitMode>('grams');

  const scaleText = (text: string | React.ReactNode): React.ReactNode => {
    if (typeof text === 'string') {
      return text.replace(/(\d+(?:[.,]\d+)?)\s*(g|kg|ml|l|un\.)/gi, (_match, p1, p2) => {
        let num = parseFloat(p1.replace(',', '.'));
        let unit = p2.toLowerCase();
        
        num = num * multiplier;

        if (unitMode === 'home') {
          if (unit === 'g') {
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

        let formattedNum = Number.isInteger(num) ? num.toString() : num.toFixed(1);
        return `${formattedNum}${unit}`;
      });
    }

    if (isValidElement(text)) {
      const props = text.props as any;
      if (props.children) {
        const newChildren = Children.map(props.children, (child: React.ReactNode) =>
          scaleText(child)
        );
        return cloneElement(text, {}, ...(newChildren || []));
      }
      return text;
    }

    if (Array.isArray(text)) {
      return text.map((item, i) => createElement(Fragment, { key: i }, scaleText(item)));
    }

    if (typeof text === 'number') {
      return text;
    }

    return text;
  };

  return { multiplier, setMultiplier, unitMode, setUnitMode, scaleText };
};
