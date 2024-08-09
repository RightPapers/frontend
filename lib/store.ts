import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Result } from '@/lib/types';

interface ResultState {
  results: { id: string; result: Result }[];
  addResult: (videoId: string, result: Result) => void;
}

export const useResultStore = create<ResultState>()(
  persist(
    (set) => ({
      results: [],
      addResult: (videoId: string, result: Result) =>
        set((state) => {
          const existingIndex = state.results.findIndex(
            (item) => item.id === videoId
          );
          if (existingIndex !== -1) {
            const updatedResults = [...state.results];
            updatedResults[existingIndex] = { id: videoId, result };
            return { results: updatedResults };
          } else {
            return { results: [...state.results, { id: videoId, result }] };
          }
        }),
    }),
    {
      name: 'youtube-results-storage',
    }
  )
);
