import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Info, Maximize2, Scale, ChefHat } from "lucide-react";
import { cn } from "../lib/utils";
import { useRecipeScaler } from "../hooks/useRecipeScaler";
import { useKitchenStore } from "../store/useKitchenStore";

export interface Ingredient {
  name: string;
  qty: string;
  pct?: number; // Baker's percentage
}

export interface IngredientGroup {
  name: string;
  items: Ingredient[];
}

export interface RecipeStep {
  text: React.ReactNode;
}

export interface RecipeNote {
  title: string;
  content: React.ReactNode;
}

export interface RecipeProps {
  id: string;
  title: string;
  chips: { label: string; accent?: boolean }[];
  meta: { label: string; value: string }[];
  image: string;
  ingredients: IngredientGroup[];
  method: RecipeStep[];
  notes?: RecipeNote[];
}

export const RecipeCard: React.FC<{ recipe: RecipeProps }> = ({ recipe }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { multiplier, setMultiplier, unitMode, setUnitMode, scaleText } = useRecipeScaler(1);
  const { openKitchenMode } = useKitchenStore();

  const handleOpenKitchenMode = (e: React.MouseEvent) => {
    e.stopPropagation();
    openKitchenMode(recipe.title, recipe.method.map(m => m.text));
  };


  return (
    <article
      id={recipe.id}
      className={cn(
        "border border-line mb-6 bg-gradient-to-b from-paper-light to-paper rounded-[22px] overflow-hidden shadow-[0_24px_70px_rgba(27,18,12,0.08)] transition-colors duration-500",
        isOpen ? "border-l-4 border-l-terra" : "border-l-4 border-l-transparent"
      )}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-8 py-8 flex items-center gap-8 hover:bg-terra-dim/30 transition-colors text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-terra"
        aria-expanded={isOpen}
      >
        <div className="flex-1 min-w-0">
          <span role="heading" aria-level={3} className="block font-disp text-3xl md:text-4xl font-medium italic leading-tight text-ink group-hover:text-terra transition-colors pr-4">
            {recipe.title}
          </span>
          <div className="flex flex-wrap gap-2 mt-3">
            {recipe.chips.map((chip, i) => (
              <span
                key={i}
                className={cn(
                  "text-[0.58rem] tracking-[0.14em] uppercase px-3 py-1 border rounded-md whitespace-nowrap",
                  chip.accent
                    ? "border-terra text-terra bg-terra/5"
                    : "border-line text-ink-soft bg-paper-cream/60"
                )}
              >
                {chip.label}
              </span>
            ))}
          </div>
        </div>

        <div className="hidden md:flex gap-10 flex-shrink-0">
          {recipe.meta.map((m, i) => (
            <div key={i} className="text-right">
              <span className="block text-[0.57rem] tracking-[0.22em] uppercase text-ink-soft mb-1">
                {m.label}
              </span>
              <span className="font-disp text-lg font-medium text-ink">
                {m.value}
              </span>
            </div>
          ))}
        </div>

        <div className="w-10 h-10 flex-shrink-0 border border-line rounded-md flex items-center justify-center text-ink-soft bg-paper-light">
          {isOpen ? <Minus size={20} strokeWidth={1} /> : <Plus size={20} strokeWidth={1} />}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="p-8 pt-0 border-t border-line/50">
              
              {/* Recipe Image */}
              {recipe.image && (
                <div className="mt-8 rounded-2xl overflow-hidden border border-line shadow-sm relative aspect-[21/9] bg-paper-light">
                  <img src={recipe.image} alt={recipe.title} className="w-full h-full object-cover" />
                </div>
              )}

              {/* Toolbar Premium */}
              <div className="flex flex-wrap items-center justify-between gap-4 mt-8 p-2 bg-paper rounded-2xl border border-line shadow-sm">
                
                {/* Scale Controls */}
                <div className="flex items-center bg-paper-light rounded-xl p-1 border border-line">
                  <span className="text-[0.6rem] uppercase tracking-widest text-ink-soft px-3 hidden sm:inline">Escala</span>
                  {[0.5, 1, 1.5, 2].map(m => (
                    <button
                      key={m}
                      onClick={() => setMultiplier(m)}
                      className={cn(
                        "px-4 py-2 rounded-lg text-sm transition-all font-disp italic font-medium",
                        multiplier === m 
                          ? "bg-terra text-white shadow-md" 
                          : "text-ink hover:bg-line"
                      )}
                    >
                      {m === 0.5 ? '½' : m}×
                    </button>
                  ))}
                </div>

                {/* Unit Toggle & Kitchen Mode */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setUnitMode(prev => prev === 'grams' ? 'home' : 'grams')}
                    className={cn(
                      "flex items-center gap-2 px-4 py-2 rounded-xl text-xs uppercase tracking-widest transition-colors border",
                      unitMode === 'home'
                        ? "bg-ink border-ink text-paper"
                        : "bg-paper-light border-line text-ink hover:border-ink-soft"
                    )}
                  >
                    <Scale size={14} strokeWidth={2} />
                    <span className="hidden sm:inline">{unitMode === 'home' ? 'Caseiro' : 'Profissional'}</span>
                  </button>

                  <button
                    onClick={handleOpenKitchenMode}
                    className="flex items-center gap-2 px-5 py-2 bg-terra border border-terra text-white rounded-xl text-xs uppercase tracking-widest hover:bg-terra-dark hover:border-terra-dark transition-colors shadow-sm"
                  >
                    <ChefHat size={16} strokeWidth={2} />
                    <span className="hidden sm:inline">Modo Cozinha</span>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-10">
                {/* Ingredients Column */}
                <div>
                  <h4 className="text-xs tracking-[0.25em] uppercase text-terra mb-6 flex items-center gap-2">
                    <span className="w-4 h-[1px] bg-terra" /> Fórmulas
                  </h4>
                  
                  {recipe.ingredients.map((group, gIdx) => (
                    <div key={gIdx} className="mb-8 last:mb-0">
                      <h5 className="font-disp italic text-xl text-ink-soft mb-4">{group.name}</h5>
                      <ul className="space-y-4">
                        {group.items.map((item, iIdx) => (
                          <li key={iIdx}>
                            <div className="flex justify-between items-baseline mb-2">
                              <span className="text-sm font-medium text-ink">
                                {item.name}
                                {item.pct !== undefined && (
                                  <span className="text-xs text-ink-soft font-light ml-2">{item.pct}%</span>
                                )}
                              </span>
                              <span className="text-sm font-disp font-medium text-terra bg-terra/5 px-2 py-0.5 rounded">
                                {scaleText(item.qty)}
                              </span>
                            </div>
                            {item.pct !== undefined && (
                              <div className="h-1 bg-line-faint rounded-full overflow-hidden">
                                <motion.div 
                                  initial={{ width: 0 }}
                                  animate={{ width: `${Math.min(item.pct, 100)}%` }}
                                  transition={{ duration: 1, delay: 0.2 + (iIdx * 0.1) }}
                                  className="h-full bg-terra"
                                />
                              </div>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Method Column */}
                <div>
                  <h4 className="text-xs tracking-[0.25em] uppercase text-terra mb-6 flex items-center gap-2">
                    <span className="w-4 h-[1px] bg-terra" /> Preparo
                  </h4>
                  
                  <div className="space-y-8">
                    {recipe.method.map((step, sIdx) => (
                      <div key={sIdx} className="flex gap-4">
                        <span className="font-disp text-2xl text-line-dark italic leading-none shrink-0 mt-1">
                          {String(sIdx + 1).padStart(2, '0')}
                        </span>
                        <p className="text-sm text-ink-soft leading-relaxed">
                          {scaleText(step.text)}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {recipe.notes && recipe.notes.length > 0 && (
                <div className="mt-12 bg-sand/30 rounded-xl p-8 border border-line-faint">
                  <h4 className="text-xs tracking-[0.25em] uppercase text-terra-light mb-6 flex items-center gap-2">
                    <Info size={14} /> Notas Técnicas
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {recipe.notes.map((note, nIdx) => (
                      <div key={nIdx} className="border-l-2 border-terra/30 pl-4">
                        <span className="block text-sm font-disp italic text-ink font-medium mb-1">{note.title}</span>
                        <span className="text-[0.8rem] text-ink-soft leading-relaxed">{note.content}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
};
