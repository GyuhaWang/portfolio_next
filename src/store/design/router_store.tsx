import { create } from 'zustand';

interface IndexState {
  index: number;
  setIndex: (index: number) => void;
}

const useIndexStore = create<IndexState>((set) => ({
  index: 4,
  setIndex: (index) => set({ index }),
}));

export default useIndexStore;
