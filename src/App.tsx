import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { TOC } from './components/TOC';
import { RecipeCard } from './components/RecipeCard';
import { KitchenMode } from './components/KitchenMode';
import { TimerDock } from './components/TimerDock';
import { recipes } from './data/recipes';

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
  return (
    <div className="bg-paper min-h-screen text-ink font-body selection:bg-terra/20">
      <Navigation />
      <KitchenMode />
      <TimerDock />
      <main id="main-content">
        <Hero />
        <TOC />
        
        <div className="max-w-5xl mx-auto px-8 pb-32">
          {categories.map((cat) => {
            const catRecipes = recipes
              .filter(r => cat.filter(r.id))
              .sort((a, b) => getTypeWeight(a.id) - getTypeWeight(b.id));
            if (catRecipes.length === 0) return null;

            return (
              <section key={cat.id} id={cat.id} className="pt-32">
                <div className="flex items-end gap-8 border-b border-line pb-10 mb-12">
                  <span className="font-disp text-[5rem] font-light text-line-dark leading-none">{cat.num}</span>
                  <div>
                    <h2 className="font-disp text-[clamp(3rem,7vw,6rem)] font-medium leading-none mb-4">{cat.name}</h2>
                    <span className="text-[0.67rem] tracking-[0.2em] uppercase text-ink-soft">{cat.sub}</span>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {catRecipes.map(recipe => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
