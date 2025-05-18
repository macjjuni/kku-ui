import { create } from 'zustand/react';
import { KFullscreenLoaderStoreProps } from '@/components';

const useFullLoader = create<KFullscreenLoaderStoreProps>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
  set: (open) => set({ isOpen: open }),
}));

export default useFullLoader;