import React from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useThemeStore } from '../store/useThemeStore';
import { motion, AnimatePresence } from 'framer-motion';

export const ThemeToggle = () => {
  const { theme, setTheme } = useThemeStore();

  const cycleTheme = () => {
    if (theme === 'system') setTheme('light');
    else if (theme === 'light') setTheme('dark');
    else setTheme('system');
  };

  return (
    <button
      onClick={cycleTheme}
      className="p-2 text-ink-soft dark:text-ink-invert-soft hover:text-terra dark:hover:text-terra-light transition-colors rounded-full relative w-10 h-10 flex items-center justify-center overflow-hidden focus:outline-none"
      aria-label="Alternar tema"
      title={`Tema atual: ${theme}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute"
        >
          {theme === 'light' && <Sun size={20} strokeWidth={1.5} />}
          {theme === 'dark' && <Moon size={20} strokeWidth={1.5} />}
          {theme === 'system' && <Monitor size={20} strokeWidth={1.5} />}
        </motion.div>
      </AnimatePresence>
    </button>
  );
};
