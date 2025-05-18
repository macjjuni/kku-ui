export interface KFullscreenLoaderStoreProps {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  set: (val: boolean) => void;
}