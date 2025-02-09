import { ReactNode } from 'react';
import { KBaseProp } from '@/common/base/base.interface';

// eslint-disable-next-line max-len
type KDropHolderPositionType = 'bottom-center' | 'bottom-left' | 'bottom-right' | 'top-left' | 'top-center' | 'top-right';

export interface KDropHolderProps extends KBaseProp {

  position?: KDropHolderPositionType
  offset?: string

  children: ReactNode
  content: ReactNode

  onClick?: () => void
}

export interface KDropHolderRefs {
  open: () => void
  close: () => void
}
