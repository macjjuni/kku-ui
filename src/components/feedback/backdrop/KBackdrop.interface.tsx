import { KBaseProp } from '@/common/base/base.interface';
import { ReactNode } from 'react';

export interface KBackdropProps extends KBaseProp {
  open: boolean;
  onClick?: () => void;
  zIndex?: number;
  opacity?: number;

  children?: ReactNode;
}
