import { create } from 'zustand';

interface KitchenState {
  isActive: boolean;
  recipeName: string;
  steps: React.ReactNode[];
  currentStepIndex: number;
  openKitchenMode: (recipeName: string, steps: React.ReactNode[]) => void;
  closeKitchenMode: () => void;
  nextStep: () => void;
  prevStep: () => void;
}

export const useKitchenStore = create<KitchenState>((set) => ({
  isActive: false,
  recipeName: "",
  steps: [],
  currentStepIndex: 0,

  openKitchenMode: (recipeName, steps) => {
    if (steps.length === 0) return;
    set({ isActive: true, recipeName, steps, currentStepIndex: 0 });
  },
  
  closeKitchenMode: () => set({ isActive: false, recipeName: "", steps: [], currentStepIndex: 0 }),
  
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
}));
