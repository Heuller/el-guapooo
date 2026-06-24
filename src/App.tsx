import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { TOC } from './components/TOC';
import { RecipeCard } from './components/RecipeCard';
import { KitchenMode } from './components/KitchenMode';
import { TimerDock } from './components/TimerDock';
import { recipes } from './data/recipes';
import { MotionConfig } from 'framer-motion';
import { useBatterySaver } from './hooks/useBatterySaver';
import { useTheme } from './hooks/useTheme';
import { useSearchStore } from './store/useSearchStore';

const categories = [
  { id: "pizzas", num: "01", name: "Pizzas", sub: "massas · molhos · montagem", filter: (id: string) => id.startsWith('pizza') },
  { id: "focaccias", num: "02", name: "Focaccias", sub: "salgadas & doces", filter: (id: string) => id.startsWith('focaccia') },
  { id: "cucas", num: "03", name: "Cucas", sub: "massas & coberturas", filter: (id: string) => id.startsWith('cuca') },
  { id: "bolos", num: "04", name: "Bolos", sub: "massas & recheios", filter: (id: string) => id.startsWith('bolo') && !id.includes('panetone') && !id.includes('banana-bread') },
  { id: "quitanda", num: "05", name: "Quitanda", sub: "padaria brasileira artesanal", filter: (id: string) => id.startsWith('pao') },
  { id: "especiais", num: "06", name: "Especiais", sub: "receitas premium & sazonais", filter: (id: string) => id.includes('panetone') || id.includes('banana-bread') },
];

const getTypeWeight = (id: string) => {
  if (id.includes('recheio') || id.includes('brigadeiro')) return 2;
  if (id.includes('crumble') || id.includes('cobertura')) return 3;
  return 1;
};

function App() {
  const isLowPowerActive = useBatterySaver();
  useTheme();
  const { query, results } = useSearchStore();

  return (
    <MotionConfig reducedMotion={isLowPowerActive ? "always" : "user"}>
      <div className="bg-paper dark:bg-paper-invert min-h-screen text-ink dark:text-ink-invert font-body selection:bg-terra/20 transition-colors duration-500">
      <Navigation />
      <KitchenMode />
      <TimerDock />
      <main id="main-content">
        <Hero />
        <TOC />
        
        {query ? (
          <div className="max-w-5xl mx-auto px-8 pb-32">
            <h2 className="font-disp text-[clamp(2.5rem,5vw,4rem)] font-medium leading-none mb-4 text-ink dark:text-ink-invert">
              Resultados da Busca
            </h2>
            <p className="text-ink-soft dark:text-ink-invert-soft mb-12">
              {results.length} {results.length === 1 ? 'receita encontrada' : 'receitas encontradas'} para "{query}"
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
              {results.map(r => {
                const recipe = recipes.find(x => x.id === r.id);
                return recipe ? <RecipeCard key={recipe.id} recipe={recipe} /> : null;
              })}
            </div>
          </div>
        ) : (
          <div className="max-w-5xl mx-auto px-8 pb-32">
            {categories.map((cat) => {
              const catRecipes = recipes
                .filter(r => cat.filter(r.id))
                .sort((a, b) => getTypeWeight(a.id) - getTypeWeight(b.id));
              if (catRecipes.length === 0) return null;

              return (
                <section key={cat.id} id={cat.id} className="pt-32">
                  <div className="flex items-end gap-8 border-b border-line dark:border-line-invert pb-10 mb-12 transition-colors duration-500">
                    <span className="font-disp text-[5rem] font-light text-line-dark dark:text-line-invert leading-none transition-colors duration-500">{cat.num}</span>
                    <div>
                      <h2 className="font-disp text-[clamp(3rem,7vw,6rem)] font-medium leading-none mb-4 text-ink dark:text-ink-invert transition-colors duration-500">{cat.name}</h2>
                      <span className="text-[0.67rem] tracking-[0.2em] uppercase text-ink-soft dark:text-ink-invert-soft transition-colors duration-500">{cat.sub}</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                    {catRecipes.map(recipe => (
                      <RecipeCard key={recipe.id} recipe={recipe} />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        )}
      </main>
      </div>
    </MotionConfig>
  );
}

export default App;
