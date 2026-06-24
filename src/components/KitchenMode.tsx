import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Check, Timer as TimerIcon, Leaf, ChefHat } from 'lucide-react';
import { useKitchenStore } from '../store/useKitchenStore';
import { useTimerStore } from '../store/useTimerStore';
import { recipes } from '../data/recipes';
import { handleAskSousChef } from '../utils/sousChef';
import { extractTimers } from '../lib/extractTimers';
import { cn } from '../lib/utils';
import confetti from 'canvas-confetti';
import { useWakeLock } from '../hooks/useWakeLock';

export const KitchenMode = () => {
  const { isActive, recipeName, steps, currentStepIndex, closeKitchenMode, nextStep, prevStep, lowPowerMode, toggleLowPowerMode, recipeId, multiplier } = useKitchenStore();
  useWakeLock();

  const currentRecipe = recipes.find(r => r.id === recipeId);

  // Prevent scroll when active
  useEffect(() => {
    if (isActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isActive]);

  const handleNext = () => {
    if (currentStepIndex === steps.length - 1) {
      // Last step -> Finish!
      confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.6 },
        colors: ['#9a521a', '#ccb594', '#5f4d43']
      });
      setTimeout(() => {
        closeKitchenMode();
      }, 1500);
    } else {
      nextStep();
    }
  };

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          initial={{ opacity: 0, y: "100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed inset-0 z-[100] bg-dark text-paper flex flex-col font-body"
        >
          {/* Header */}
          <header className="flex items-center justify-between p-6 border-b border-dark-warm bg-dark-warm/50">
            <div>
              <span className="text-[0.6rem] tracking-[0.2em] uppercase text-terra-light block mb-1">
                Modo Cozinha
              </span>
              <h2 className="font-disp italic text-2xl text-sand leading-none">
                {recipeName}
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={toggleLowPowerMode}
                className={cn(
                  "flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-colors border",
                  lowPowerMode 
                    ? "bg-terra/20 text-terra-light border-terra/50" 
                    : "text-line-dark border-transparent hover:bg-dark-warm hover:text-sand"
                )}
                title="Modo Economia de Energia"
              >
                <Leaf size={16} />
                <span className="hidden md:inline">Eco</span>
              </button>
              <button
                onClick={closeKitchenMode}
                className="p-3 text-line-dark hover:text-terra transition-colors rounded-full hover:bg-dark-warm"
              >
                <X size={28} strokeWidth={1.5} />
              </button>
            </div>
          </header>

          {/* Main Content Area */}
          <main className="flex-1 overflow-y-auto relative flex flex-col justify-center px-8 md:px-20 py-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStepIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="max-w-4xl mx-auto w-full"
              >
                <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start">
                  <span className="font-disp text-7xl md:text-[8rem] leading-none text-dark-warm italic shrink-0">
                    {String(currentStepIndex + 1).padStart(2, '0')}
                  </span>
                  <div className="flex-1">
                    <div className="text-xl md:text-3xl leading-relaxed font-light text-paper-light mt-4 [&_.text-ink]:text-sand [&_strong]:text-sand">
                      {steps[currentStepIndex]}
                    </div>
                    {/* Render Timers */}
                    {extractTimers(steps[currentStepIndex]).length > 0 && (
                      <div className="mt-8 flex flex-wrap gap-3">
                        {extractTimers(steps[currentStepIndex]).map((timer, i) => (
                          <button
                            key={i}
                            onClick={() => useTimerStore.getState().addTimer(timer.seconds, `${recipeName} - Passo ${currentStepIndex + 1} (${timer.timeLabel})`)}
                            className="flex items-center gap-2 bg-terra/20 hover:bg-terra/40 border border-terra/50 text-terra-light px-4 py-2 rounded-full text-sm font-medium transition-colors"
                          >
                            <TimerIcon size={16} />
                            <span>ativar timer: {timer.timeLabel}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </main>

          {/* Footer Controls */}
          <footer className="p-6 border-t border-dark-warm bg-dark-warm/30 flex items-center justify-between">
            <div className="flex gap-4">
              {currentRecipe && (
                 <button
                   onClick={() => {
                     if (!currentRecipe) return;
                     handleAskSousChef(currentRecipe, multiplier);
                   }}
                   className="p-3 text-terra-light border border-terra/30 hover:bg-terra/20 transition-colors rounded-full"
                   title="SousChef IA • O contexto da receita é compartilhado apenas com o assistente que você escolher"
                 >
                   <ChefHat size={24} strokeWidth={1.5} />
                 </button>
              )}
              <button
                onClick={prevStep}
                disabled={currentStepIndex === 0}
                className={cn(
                  "flex items-center gap-2 px-6 py-4 rounded-full transition-all border",
                  currentStepIndex === 0
                    ? "opacity-50 cursor-not-allowed border-dark-warm text-line-dark"
                    : "border-line-dark text-sand hover:bg-dark-warm hover:border-terra"
                )}
              >
                <ChevronLeft size={24} strokeWidth={1.5} />
                <span className="uppercase text-xs tracking-widest hidden md:inline">Anterior</span>
              </button>
            </div>

            <div className="text-sm font-disp italic text-line-dark">
              Passo {currentStepIndex + 1} de {steps.length}
            </div>

            <div className="flex gap-4">
              <button
                onClick={handleNext}
                className={cn(
                  "flex items-center gap-2 px-8 py-4 rounded-full transition-all border",
                  currentStepIndex === steps.length - 1
                    ? "bg-terra border-terra text-paper shadow-[0_0_30px_rgba(154,82,26,0.4)]"
                    : "bg-paper-light border-paper-light text-dark hover:bg-white"
                )}
              >
                <span className="uppercase text-xs tracking-widest font-semibold">
                  {currentStepIndex === steps.length - 1 ? "Concluir" : "Próximo"}
                </span>
                {currentStepIndex === steps.length - 1 ? (
                  <Check size={24} strokeWidth={2} />
                ) : (
                  <ChevronRight size={24} strokeWidth={1.5} />
                )}
              </button>
            </div>
          </footer>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
