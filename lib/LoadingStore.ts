import { create } from 'zustand';
import { Loading } from './types';

interface LoadingState {
  loading: Loading;
  setLoading: (loading: Loading) => void;
}

export const useLoadingStore = create<LoadingState>((set) => ({
  loading: Loading.before,
  setLoading: (newLoading: Loading) => {
    set({ loading: newLoading });
  },
}));
