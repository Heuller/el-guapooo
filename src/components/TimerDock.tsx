import React, { useState } from 'react';
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
            : "bg-paper border-line text-ink"
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
            className="fixed bottom-28 right-8 z-[110] w-80 bg-paper-light border border-line rounded-2xl shadow-2xl overflow-hidden font-body"
          >
            <div className="p-4 border-b border-line bg-paper flex items-center justify-between">
              <h3 className="font-disp italic text-lg text-ink">Timers Ativos</h3>
              <button onClick={() => setIsAdding(!isAdding)} className="text-ink-soft hover:text-terra p-1">
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
                  className="p-4 bg-sand/30 border-b border-line"
                >
                  <div className="flex gap-2 mb-3">
                    <input
                      type="number"
                      value={newMinutes}
                      onChange={e => setNewMinutes(e.target.value)}
                      className="w-20 bg-paper border border-line rounded-md px-2 py-1 text-ink focus:outline-none focus:border-terra"
                      min="1"
                    />
                    <span className="text-ink-soft self-center text-sm">min</span>
                  </div>
                  <input
                    type="text"
                    value={newLabel}
                    onChange={e => setNewLabel(e.target.value)}
                    placeholder="Nome (ex: Forno)"
                    className="w-full bg-paper border border-line rounded-md px-2 py-1 mb-3 text-ink focus:outline-none focus:border-terra text-sm"
                  />
                  <button type="submit" className="w-full bg-ink text-paper py-2 rounded-md text-sm uppercase tracking-widest hover:bg-terra transition-colors">
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
                    "p-4 border-b border-line last:border-b-0 flex items-center justify-between transition-colors",
                    timer.done ? "bg-terra/10" : ""
                  )}
                >
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-ink-soft mb-1">{timer.label}</span>
                    <span className={cn(
                      "font-disp text-2xl leading-none",
                      timer.done ? "text-terra font-medium" : "text-ink"
                    )}>
                      {timer.done ? "00:00" : formatTime(timer.remaining)}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {!timer.done && (
                      <button
                        onClick={() => timer.paused ? resumeTimer(timer.id) : pauseTimer(timer.id)}
                        className="w-8 h-8 rounded-full border border-line flex items-center justify-center text-ink hover:text-terra hover:border-terra transition-colors"
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
