import { ReactNode } from 'react';
import { KBaseProp } from '@/common/base/base.interface';

export interface AnimationType {
  x?: number;
  y?: number;
  opacity?: number;
}

export interface CSSTransitionProps extends KBaseProp {
  children: ReactNode;
  className?: string;
  show: boolean;
  timeout: number;
  startAnimation?: AnimationType;
  endAnimation?: AnimationType;
  easing?: 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out';
}
