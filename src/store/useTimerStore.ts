import { create } from 'zustand';
import confetti from 'canvas-confetti';

export interface Timer {
  id: string;
  label: string;
  totalSeconds: number;
  remaining: number;
  paused: boolean;
  done: boolean;
}

interface TimerState {
  timers: Timer[];
  addTimer: (seconds: number, label: string) => void;
  pauseTimer: (id: string) => void;
  resumeTimer: (id: string) => void;
  removeTimer: (id: string) => void;
  tick: () => void;
}

export const useTimerStore = create<TimerState>((set, get) => {
  // Setup global tick
  if (typeof window !== 'undefined') {
    setInterval(() => {
      get().tick();
    }, 1000);
  }

  const playBell = () => {
    try {
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
      const ctx = new AudioContext();
      const notes = [523.25, 659.25, 783.99];
      notes.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.type = "sine";
        osc.frequency.value = freq;
        const t0 = ctx.currentTime + i * 0.18;
        gain.gain.setValueAtTime(0, t0);
        gain.gain.linearRampToValueAtTime(0.22, t0 + 0.04);
        gain.gain.exponentialRampToValueAtTime(0.001, t0 + 1.4);
        osc.start(t0);
        osc.stop(t0 + 1.5);
      });
    } catch (_) {}
  };

  return {
    timers: [],
    
    addTimer: (seconds, label) => set((state) => {
      // Prevent duplicates by label, if it exists, toggle pause
      const existing = state.timers.find(t => t.label === label);
      if (existing) {
        return {
          timers: state.timers.map(t => 
            t.label === label ? { ...t, paused: !t.paused } : t
          )
        };
      }

      const newTimer: Timer = {
        id: `t${Date.now()}`,
        label,
        totalSeconds: seconds,
        remaining: seconds,
        paused: false,
        done: false,
      };
      return { timers: [...state.timers, newTimer] };
    }),

    pauseTimer: (id) => set((state) => ({
      timers: state.timers.map(t => t.id === id ? { ...t, paused: true } : t)
    })),

    resumeTimer: (id) => set((state) => ({
      timers: state.timers.map(t => t.id === id ? { ...t, paused: false } : t)
    })),

    removeTimer: (id) => set((state) => ({
      timers: state.timers.filter(t => t.id !== id)
    })),

    tick: () => set((state) => {
      let hasDone = false;
      const newTimers = state.timers.map(t => {
        if (t.paused || t.done) return t;
        const next = t.remaining - 1;
        if (next <= 0) {
          hasDone = true;
          return { ...t, remaining: 0, done: true };
        }
        return { ...t, remaining: next };
      });

      if (hasDone) {
        playBell();
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.8 },
          colors: ['#9a521a', '#ccb594', '#5f4d43']
        });
      }

      return { timers: newTimers };
    }),
  };
});
