import { create } from 'zustand';

interface AccuracyState {
  accuracy: number;
  setAccuracy: (accuracy: number) => void;
}

export const useAccuracyStore = create<AccuracyState>((set) => ({
  accuracy: 0,
  setAccuracy: (newAccuracy: number) => {
    set({ accuracy: newAccuracy });
  },
}));
