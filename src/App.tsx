import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { TOC } from './components/TOC';
import { RecipeCard } from './components/RecipeCard';
import { KitchenMode } from './components/KitchenMode';
import { TimerDock } from './components/TimerDock';
import { recipes } from './data/recipes';

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
          {/* Section 01 */}
          <section id="pizzas" className="pt-32">
            <div className="flex items-end gap-8 border-b border-line pb-10 mb-12">
              <span className="font-disp text-[5rem] font-light text-line-dark leading-none">01</span>
              <div>
                <h2 className="font-disp text-[clamp(3rem,7vw,6rem)] font-medium leading-none mb-4">Pizzas</h2>
                <span className="text-[0.67rem] tracking-[0.2em] uppercase text-ink-soft">Massas · Molhos · Montagem</span>
              </div>
            </div>
            
            <div className="flex items-center gap-6 mb-12">
              <span className="flex-1 h-[1px] bg-line" />
              <span className="text-[0.65rem] tracking-[0.42em] uppercase text-terra font-light">Massas</span>
              <span className="flex-1 h-[1px] bg-line" />
            </div>

            <div className="space-y-6">
              <RecipeCard recipe={recipes[0]} />
            </div>
          </section>

          {/* Section 02 */}
          <section id="focaccias" className="pt-32">
            <div className="flex items-end gap-8 border-b border-line pb-10 mb-12">
              <span className="font-disp text-[5rem] font-light text-line-dark leading-none">02</span>
              <div>
                <h2 className="font-disp text-[clamp(3rem,7vw,6rem)] font-medium leading-none mb-4">Focaccias</h2>
                <span className="text-[0.67rem] tracking-[0.2em] uppercase text-ink-soft">Salgadas & Doces</span>
              </div>
            </div>

            <div className="space-y-6">
              <RecipeCard recipe={recipes[1]} />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
