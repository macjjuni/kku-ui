import { ReactNode } from 'react';
import { KBaseProp } from '@/common/base/base.interface';


type KDropHolderPositionType = 'bottom-center' | 'bottom-left' | 'bottom-right';

export interface KDropHolderProps extends KBaseProp {

  position?: KDropHolderPositionType

  children: ReactNode

  onClick?: () => void
}

export interface KDropHolderRefs {
  open: () => void
  close: () => void
}
