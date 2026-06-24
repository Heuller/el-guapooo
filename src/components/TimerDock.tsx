import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Timer as TimerIcon, Play, Pause, X, Plus } from 'lucide-react';
import { useTimerStore } from '../store/useTimerStore';
import { cn } from '../lib/utils';

const formatTime = (totalSeconds: number) => {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
};

export const TimerDock = () => {
  const { timers, addTimer, pauseTimer, resumeTimer, removeTimer } = useTimerStore();
  const [isOpen, setIsOpen] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [newMinutes, setNewMinutes] = useState('15');
  const [newLabel, setNewLabel] = useState('Autólise');

  const activeCount = timers.filter(t => !t.done).length;

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    const mins = parseInt(newMinutes);
    if (!isNaN(mins) && mins > 0) {
      addTimer(mins * 60, newLabel || `Timer ${timers.length + 1}`);
      setIsAdding(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-8 right-8 z-[110] w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-colors border",
          activeCount > 0
            ? "bg-terra border-terra text-white animate-pulse-slow"
            : "bg-paper dark:bg-paper-invert border-line dark:border-line-invert text-ink dark:text-ink-invert"
        )}
      >
        <TimerIcon size={24} strokeWidth={1.5} />
        {activeCount > 0 && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-ink text-paper text-[10px] rounded-full flex items-center justify-center font-bold">
            {activeCount}
          </span>
        )}
      </motion.button>

      {/* Dock Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-28 right-4 sm:right-8 z-[110] w-[calc(100vw-2rem)] sm:w-80 max-w-[320px] bg-paper-light dark:bg-paper-invert-light border border-line dark:border-line-invert rounded-2xl shadow-2xl overflow-hidden font-body transition-colors"
          >
            <div className="p-4 border-b border-line dark:border-line-invert bg-paper dark:bg-paper-invert flex items-center justify-between transition-colors">
              <h3 className="font-disp italic text-lg text-ink dark:text-ink-invert transition-colors">Timers Ativos</h3>
              <button onClick={() => setIsAdding(!isAdding)} className="text-ink-soft dark:text-ink-invert-soft hover:text-terra p-1 transition-colors">
                {isAdding ? <X size={18} /> : <Plus size={18} />}
              </button>
            </div>

            <AnimatePresence mode="popLayout">
              {isAdding && (
                <motion.form
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  onSubmit={handleAdd}
                  className="p-4 bg-sand/30 dark:bg-paper-invert/50 border-b border-line dark:border-line-invert transition-colors"
                >
                  <div className="flex gap-2 mb-3">
                    <input
                      type="number"
                      value={newMinutes}
                      onChange={e => setNewMinutes(e.target.value)}
                      className="w-20 bg-paper dark:bg-paper-invert border border-line dark:border-line-invert rounded-md px-2 py-1 text-ink dark:text-ink-invert focus:outline-none focus:border-terra transition-colors"
                      min="1"
                    />
                    <span className="text-ink-soft dark:text-ink-invert-soft self-center text-sm transition-colors">min</span>
                  </div>
                  <input
                    type="text"
                    value={newLabel}
                    onChange={e => setNewLabel(e.target.value)}
                    placeholder="Nome (ex: Forno)"
                    className="w-full bg-paper dark:bg-paper-invert border border-line dark:border-line-invert rounded-md px-2 py-1 mb-3 text-ink dark:text-ink-invert focus:outline-none focus:border-terra text-sm transition-colors"
                  />
                  <button type="submit" className="w-full bg-ink dark:bg-ink-invert text-paper dark:text-paper-invert py-2 rounded-md text-sm uppercase tracking-widest hover:bg-terra dark:hover:bg-terra-light transition-colors">
                    Iniciar
                  </button>
                </motion.form>
              )}
            </AnimatePresence>

            <div className="max-h-60 overflow-y-auto">
              {timers.length === 0 && !isAdding && (
                <div className="p-8 text-center text-ink-soft text-sm italic">
                  Nenhum timer ativo.
                </div>
              )}
              {timers.map(timer => (
                <motion.div
                  layout
                  key={timer.id}
                  className={cn(
                    "p-4 border-b border-line dark:border-line-invert last:border-b-0 flex items-center justify-between transition-colors",
                    timer.done ? "bg-terra/10" : ""
                  )}
                >
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-ink-soft dark:text-ink-invert-soft mb-1">{timer.label}</span>
                    <span className={cn(
                      "font-disp text-2xl leading-none transition-colors",
                      timer.done ? "text-terra font-medium" : "text-ink dark:text-ink-invert"
                    )}>
                      {timer.done ? "00:00" : formatTime(timer.remaining)}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {!timer.done && (
                      <button
                        onClick={() => timer.paused ? resumeTimer(timer.id) : pauseTimer(timer.id)}
                        className="w-8 h-8 rounded-full border border-line dark:border-line-invert flex items-center justify-center text-ink dark:text-ink-invert hover:text-terra hover:border-terra transition-colors"
                      >
                        {timer.paused ? <Play size={14} fill="currentColor" /> : <Pause size={14} fill="currentColor" />}
                      </button>
                    )}
                    <button
                      onClick={() => removeTimer(timer.id)}
                      className="w-8 h-8 rounded-full flex items-center justify-center text-ink-soft hover:text-red-500 transition-colors"
                    >
                      <X size={18} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
