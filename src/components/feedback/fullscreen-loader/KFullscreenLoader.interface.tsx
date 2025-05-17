export interface KFullscreenLoaderStoreProps {
  isOpen: boolean;
  show: () => void;
  hide: () => void;
  set: (val: boolean) => void;
}