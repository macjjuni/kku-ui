import { ReactNode } from 'react';
import { KBaseProp } from '@/common/base/base.interface';

export interface KBackdropProps extends KBaseProp {
  open: boolean;
  onClick?: () => void;
  zIndex?: number;
  opacity?: number;

  children?: ReactNode;
}
