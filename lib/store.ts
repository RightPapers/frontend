import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Result } from '@/lib/types';

interface ResultState {
  results: { id: string; data: Result }[];
  addResult: (video_id: string, data: Result) => void;
}

export const useResultStore = create<ResultState>()(
  persist(
    (set) => ({
      results: [],
      addResult: (video_id: string, data: Result) =>
        set((state) => {
          const existingIndex = state.results.findIndex(
            (item) => item.id === video_id
          );
          if (existingIndex !== -1) {
            const updatedResults = [...state.results];
            updatedResults[existingIndex] = { id: video_id, data };
            return { results: updatedResults };
          } else {
            return { results: [...state.results, { id: video_id, data }] };
          }
        }),
    }),
    {
      name: 'youtube-results-storage',
    }
  )
);
