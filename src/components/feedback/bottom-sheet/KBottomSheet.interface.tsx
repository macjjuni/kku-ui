import { ReactNode } from 'react';
import { KBaseProp } from '@/common/base/base.interface';

export interface KBottomSheetProps extends KBaseProp {
  children?: ReactNode;

  defaultOpen: boolean;
  overlayClosable?: boolean;

  // Styles
  overlayOpacity?: number;
  height?: string | number;
}

export interface KBottomSheetRefs {
  open: () => void
  close: () => void
}