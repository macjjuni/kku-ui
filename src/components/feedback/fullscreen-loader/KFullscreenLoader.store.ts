import { create } from 'zustand/react';
import { KFullscreenLoaderStoreProps } from '@/components';

const useFullLoader = create<KFullscreenLoaderStoreProps>((set) => ({
  isOpen: false,
  show: () => set({ isOpen: true }),
  hide: () => set({ isOpen: false }),
  set: (open) => set({ isOpen: open }),
}));

export default useFullLoader;