import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, TableProperties } from "lucide-react";
import { RecipeProps } from "../types/recipe";
import { calculateNutrition } from "../utils/calculateNutrition";


export const NutritionTable: React.FC<{ recipe: RecipeProps; multiplier: number; defaultOpen?: boolean }> = ({ recipe, multiplier, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const nutrition = calculateNutrition(recipe, multiplier);

  if (!nutrition) return null;

  const nutrients = [
    { label: "Valor energético", unit: "kcal", key: "calories" as const },
    { label: "Carboidratos", unit: "g", key: "carbs" as const },
    { label: "Proteínas", unit: "g", key: "proteins" as const },
    { label: "Gorduras totais", unit: "g", key: "totalFats" as const },
    { label: "Gorduras saturadas", unit: "g", key: "saturatedFats" as const },
    { label: "Fibra alimentar", unit: "g", key: "fibers" as const },
    { label: "Sódio", unit: "mg", key: "sodium" as const },
  ];

  const formatNumber = (num: number) => {
    if (num < 1 && num > 0) return "< 1";
    return Math.round(num).toString();
  };

  return (
    <div className="mt-8 border border-line dark:border-line-invert rounded-2xl bg-paper dark:bg-paper-invert overflow-hidden transition-colors duration-500 shadow-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 hover:bg-paper-light dark:hover:bg-paper-invert-light transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="p-2 bg-terra/10 rounded-lg text-terra">
            <TableProperties size={20} />
          </div>
          <span className="font-disp italic text-lg text-ink dark:text-ink-invert font-medium">Informação Nutricional</span>
        </div>
        <div className="text-ink-soft dark:text-ink-invert-soft">
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="p-5 pt-0 border-t border-line dark:border-line-invert">
              <div className="mb-4 mt-4 text-center">
                <p className="text-sm text-ink dark:text-ink-invert font-medium">
                  Porção: {nutrition.portionSize}g ({nutrition.portionLabel})
                </p>
                <p className="text-xs text-ink-soft dark:text-ink-invert-soft mt-1">
                  Rendimento total: {formatNumber(nutrition.totalWeightGrams)}g ({formatNumber(nutrition.totalPortions)} porções)
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead>
                    <tr className="border-b-2 border-line dark:border-line-invert text-ink-soft dark:text-ink-invert-soft uppercase text-[0.65rem] tracking-widest">
                      <th className="py-3 px-2 font-semibold">Nutriente</th>
                      <th className="py-3 px-2 font-semibold text-right">100g</th>
                      <th className="py-3 px-2 font-semibold text-right">{nutrition.portionSize}g</th>
                      <th className="py-3 px-2 font-semibold text-right">%VD*</th>
                    </tr>
                  </thead>
                  <tbody>
                    {nutrients.map((n) => (
                      <tr key={n.key} className="border-b border-line dark:border-line-invert last:border-b-0 hover:bg-paper-light dark:hover:bg-paper-invert-light transition-colors">
                        <td className="py-3 px-2 font-medium text-ink dark:text-ink-invert">
                          {n.label}
                        </td>
                        <td className="py-3 px-2 text-right text-ink dark:text-ink-invert">
                          {formatNumber(nutrition.per100g[n.key])}{n.unit}
                        </td>
                        <td className="py-3 px-2 text-right text-ink dark:text-ink-invert font-semibold">
                          {formatNumber(nutrition.perPortion[n.key])}{n.unit}
                        </td>
                        <td className="py-3 px-2 text-right text-terra font-semibold">
                          {formatNumber(nutrition.perPortion.vds[n.key])}%
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-4 pt-4 border-t border-line dark:border-line-invert text-[0.65rem] text-ink-soft dark:text-ink-invert-soft leading-relaxed text-justify">
                * Percentual de valores diários fornecidos pela porção. Referência: RDC nº 429/2020. Valores baseados em uma dieta de 2.000 kcal. Seus valores diários podem ser maiores ou menores dependendo de suas necessidades energéticas. 
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
