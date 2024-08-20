import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ResultData } from '@/lib/types';

interface ResultState {
  results: { id: string; data: ResultData }[];
  addResult: (video_id: string, data: ResultData) => void;
  deleteResult: (video_id: string) => void;
  deleteAllResults: () => void;
}

export const useResultStore = create<ResultState>()(
  persist(
    (set) => ({
      results: [],
      addResult: (video_id: string, data: ResultData) =>
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
      deleteResult: (video_id: string | undefined) =>
        set((state) => ({
          results: state.results.filter((item) => item.id !== video_id),
        })),
      deleteAllResults: () => set({ results: [] }),
    }),
    {
      name: 'youtube-results-storage',
    }
  )
);
