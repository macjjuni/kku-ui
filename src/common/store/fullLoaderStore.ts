import { create } from 'zustand/react';

interface FullLoaderState {
  isOpen: boolean;
  show: () => void;
  hide: () => void;
  set: (val: boolean) => void;
}

const useFullLoader = create<FullLoaderState>((set) => ({
  isOpen: false,
  show: () => set({ isOpen: true }),
  hide: () => set({ isOpen: false }),
  set: (open) => set({ isOpen: open }),
}));

export default useFullLoader;