import { create } from 'zustand';

interface SearchState {
  isReady: boolean;
  isFallback: boolean;
  progress: number;
  query: string;
  results: { id: string; score: number }[];
  isIndexing: boolean;
  setQuery: (query: string) => void;
  setResults: (results: { id: string; score: number }[]) => void;
  setProgress: (progress: number) => void;
  setReady: (ready: boolean) => void;
  setFallback: (fallback: boolean) => void;
  setIndexing: (indexing: boolean) => void;
}

export const useSearchStore = create<SearchState>((set) => ({
  isReady: false,
  isFallback: false,
  progress: 0,
  query: '',
  results: [],
  isIndexing: false,
  setQuery: (query) => set({ query }),
  setResults: (results) => set({ results }),
  setProgress: (progress) => set({ progress }),
  setReady: (isReady) => set({ isReady }),
  setFallback: (isFallback) => set({ isFallback }),
  setIndexing: (isIndexing) => set({ isIndexing }),
}));
