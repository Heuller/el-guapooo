import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface KitchenState {
  isActive: boolean;
  recipeName: string;
  recipeId: string | null;
  multiplier: number;
  steps: React.ReactNode[];
  currentStepIndex: number;
  lowPowerMode: boolean;
  openKitchenMode: (recipeName: string, steps: React.ReactNode[], recipeId: string, multiplier: number) => void;
  closeKitchenMode: () => void;
  nextStep: () => void;
  prevStep: () => void;
  toggleLowPowerMode: () => void;
}

export const useKitchenStore = create<KitchenState>()(
  persist(
    (set) => ({
      isActive: false,
      recipeName: "",
      recipeId: null,
      multiplier: 1,
      steps: [],
      currentStepIndex: 0,
      lowPowerMode: false,

      openKitchenMode: (recipeName, steps, recipeId, multiplier) => {
        if (steps.length === 0) return;
        set({ isActive: true, recipeName, steps, currentStepIndex: 0, recipeId, multiplier });
      },
      
      closeKitchenMode: () => set({ isActive: false, recipeName: "", steps: [], currentStepIndex: 0, recipeId: null, multiplier: 1 }),
      
      nextStep: () => set((state) => {
        if (state.currentStepIndex < state.steps.length - 1) {
          return { currentStepIndex: state.currentStepIndex + 1 };
        }
        // If it's the last step, we can either close it or do nothing.
        return state;
      }),
      
      prevStep: () => set((state) => {
        if (state.currentStepIndex > 0) {
          return { currentStepIndex: state.currentStepIndex - 1 };
        }
        return state;
      }),

      toggleLowPowerMode: () => set((state) => ({ lowPowerMode: !state.lowPowerMode })),
    }),
    {
      name: 'el-guapo-kitchen-storage',
      partialize: (state) => ({ lowPowerMode: state.lowPowerMode }),
    }
  )
);
