import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Info, Scale, ChefHat, X } from "lucide-react";
import { cn } from "../lib/utils";
import { useRecipeScaler } from "../hooks/useRecipeScaler";
import { useKitchenStore } from "../store/useKitchenStore";
import { handleAskSousChef } from "../utils/sousChef";

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
  const dialogRef = useRef<HTMLDialogElement>(null);

  const handleOpenKitchenMode = (e: React.MouseEvent) => {
    e.stopPropagation();
    openKitchenMode(recipe.title, recipe.method.map(m => m.text), recipe.id, multiplier);
  };


  return (
    <article
      id={recipe.id}
      className={cn(
        "border border-line dark:border-line-invert mb-6 bg-gradient-to-b from-paper-light dark:from-paper-invert-light to-paper dark:to-paper-invert rounded-[22px] overflow-hidden shadow-[0_24px_70px_rgba(27,18,12,0.08)] transition-colors duration-500",
        isOpen ? "border-l-4 border-l-terra" : "border-l-4 border-l-transparent"
      )}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-8 py-8 flex items-center gap-8 hover:bg-terra-dim/30 transition-colors text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-terra"
        aria-expanded={isOpen}
      >
        <div className="flex-1 min-w-0">
          <span role="heading" aria-level={3} className="block font-disp text-3xl md:text-4xl font-medium italic leading-tight text-ink dark:text-ink-invert group-hover:text-terra dark:group-hover:text-terra-light transition-colors pr-4">
            {recipe.title}
          </span>
          <div className="flex flex-wrap gap-2 mt-3">
            {recipe.chips.map((chip, i) => (
              <span
                key={i}
                className={cn(
                  "text-[0.58rem] tracking-[0.14em] uppercase px-3 py-1 border rounded-md whitespace-nowrap transition-colors duration-500",
                  chip.accent
                    ? "border-terra text-terra bg-terra/5"
                    : "border-line dark:border-line-invert text-ink-soft dark:text-ink-invert-soft bg-paper-cream/60 dark:bg-paper-invert-light"
                )}
              >
                {chip.label}
              </span>
            ))}
          </div>
        </div>

        <div className="hidden md:flex gap-8 lg:gap-10 flex-shrink-0 max-w-[40%] justify-end">
          {recipe.meta.map((m, i) => (
            <div key={i} className="text-right flex flex-col items-end">
              <span className="block text-[0.57rem] tracking-[0.22em] uppercase text-ink-soft dark:text-ink-invert-soft mb-1 transition-colors duration-500">
                {m.label}
              </span>
              <span className="font-disp text-lg font-medium text-ink dark:text-ink-invert transition-colors duration-500 max-w-[180px] leading-tight">
                {m.value}
              </span>
            </div>
          ))}
        </div>

        <div className="w-10 h-10 flex-shrink-0 border border-line dark:border-line-invert rounded-md flex items-center justify-center text-ink-soft dark:text-ink-invert-soft bg-paper-light dark:bg-paper-invert-light transition-colors duration-500 ml-4">
          {isOpen ? <Minus size={20} strokeWidth={1} /> : <Plus size={20} strokeWidth={1} />}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <>
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
                  <div className="mt-8 rounded-2xl overflow-hidden border border-line dark:border-line-invert shadow-sm relative bg-paper-light dark:bg-paper-invert-light transition-colors duration-500">
                    <img 
                      src={recipe.image} 
                      alt={recipe.title} 
                      className="w-full h-auto max-h-[500px] object-cover cursor-pointer hover:opacity-95 transition-opacity" 
                      onClick={() => dialogRef.current?.showModal()}
                    />
                  </div>
                )}

                {/* Toolbar Premium */}
                <div className="flex flex-col gap-2 mt-8">
                  <div className="flex flex-wrap items-center justify-between gap-4 p-2 bg-paper dark:bg-paper-invert rounded-2xl border border-line dark:border-line-invert shadow-sm transition-colors duration-500">
                    
                    {/* Scale Controls */}
                    <div className="flex items-center bg-paper-light dark:bg-paper-invert-light rounded-xl p-1 border border-line dark:border-line-invert transition-colors duration-500">
                      <span className="text-[0.6rem] uppercase tracking-widest text-ink-soft dark:text-ink-invert-soft px-3 hidden sm:inline transition-colors duration-500">Escala</span>
                      {[0.5, 1, 1.5, 2].map(m => (
                        <button
                          key={m}
                          onClick={() => setMultiplier(m)}
                          className={cn(
                            "px-4 py-2 rounded-lg text-sm transition-all font-disp italic font-medium duration-500",
                            multiplier === m 
                              ? "bg-terra text-white shadow-md" 
                              : "text-ink dark:text-ink-invert hover:bg-line dark:hover:bg-line-invert"
                          )}
                        >
                          {m === 0.5 ? '½' : m}×
                        </button>
                      ))}
                    </div>

                    {/* Unit Toggle & Kitchen Mode */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleAskSousChef(recipe, multiplier)}
                        className="flex items-center gap-2 px-4 py-2 bg-terra/10 border border-terra/30 text-terra rounded-xl text-xs uppercase tracking-widest hover:bg-terra/20 transition-colors shadow-sm"
                      >
                        <ChefHat size={16} strokeWidth={2} />
                        <span className="hidden sm:inline">SousChef IA</span>
                      </button>

                      <button
                        onClick={() => setUnitMode(prev => prev === 'grams' ? 'home' : 'grams')}
                        className={cn(
                          "flex items-center gap-2 px-4 py-2 rounded-xl text-xs uppercase tracking-widest transition-colors duration-500 border",
                          unitMode === 'home'
                            ? "bg-ink dark:bg-ink-invert border-ink dark:border-ink-invert text-paper dark:text-paper-invert"
                            : "bg-paper-light dark:bg-paper-invert-light border-line dark:border-line-invert text-ink dark:text-ink-invert hover:border-ink-soft dark:hover:border-ink-invert-soft"
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

                  {/* Rótulo de Privacidade */}
                  <div className="text-center w-full px-2">
                    <span className="text-[0.6rem] text-ink-soft/70 dark:text-ink-invert-soft/70">
                      🔒 O contexto da receita é compartilhado apenas com o assistente que você escolher.
                    </span>
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
                        <h5 className="font-disp italic text-xl text-ink-soft dark:text-ink-invert-soft mb-4 transition-colors duration-500">{group.name}</h5>
                        <ul className="space-y-4">
                          {group.items.map((item, iIdx) => (
                            <li key={iIdx}>
                              <div className="flex justify-between items-baseline mb-2">
                                <span className="text-sm font-medium text-ink dark:text-ink-invert transition-colors duration-500">
                                  {item.name}
                                  {item.pct !== undefined && (
                                    <span className="text-xs text-ink-soft dark:text-ink-invert-soft font-light ml-2 transition-colors duration-500">{item.pct}%</span>
                                  )}
                                </span>
                                <span className="text-sm font-disp font-medium text-terra bg-terra/5 px-2 py-0.5 rounded transition-colors duration-500">
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
                          <span className="font-disp text-2xl text-line-dark dark:text-line-invert italic leading-none shrink-0 mt-1 transition-colors duration-500">
                            {String(sIdx + 1).padStart(2, '0')}
                          </span>
                          <p className="text-sm text-ink-soft dark:text-ink-invert-soft leading-relaxed transition-colors duration-500">
                            {scaleText(step.text)}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {recipe.notes && recipe.notes.length > 0 && (
                  <div className="mt-12 bg-sand/30 dark:bg-paper-invert-light/30 rounded-xl p-8 border border-line-faint dark:border-line-invert transition-colors duration-500">
                    <h4 className="text-xs tracking-[0.25em] uppercase text-terra-light mb-6 flex items-center gap-2">
                      <Info size={14} /> Notas Técnicas
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {recipe.notes.map((note, nIdx) => (
                        <div key={nIdx} className="border-l-2 border-terra/30 pl-4">
                          <span className="block text-sm font-disp italic text-ink dark:text-ink-invert font-medium mb-1 transition-colors duration-500">{note.title}</span>
                          <span className="text-[0.8rem] text-ink-soft dark:text-ink-invert-soft leading-relaxed transition-colors duration-500">{note.content}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            </motion.div>

            <dialog
              ref={dialogRef}
              className="bg-transparent backdrop:bg-black/90 p-0 m-auto max-w-full max-h-full overflow-hidden outline-none"
              onClick={(e) => {
                if (e.target === dialogRef.current) dialogRef.current?.close();
              }}
            >
              <div className="relative flex items-center justify-center w-screen h-screen p-4 md:p-12" onClick={(e) => {
                if (e.target === e.currentTarget) dialogRef.current?.close();
              }}>
                <button 
                  onClick={() => dialogRef.current?.close()}
                  className="absolute top-6 right-6 text-white bg-black/50 hover:bg-black/80 rounded-full p-2 transition-colors z-50 focus:outline-none"
                  aria-label="Close"
                >
                  <X size={24} />
                </button>
                <img 
                  src={recipe.image} 
                  alt={recipe.title} 
                  className="max-w-full max-h-full object-contain drop-shadow-2xl rounded-sm"
                />
              </div>
            </dialog>
          </>
        )}
      </AnimatePresence>
    </article>
  );
};
