import { ReactNode } from 'react';


interface AnimationType {
  x?: number;
  y?: number;
  opacity?: number;
  easing?: 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out';
}


export interface CSSTransitionProps {
  children: ReactNode;
  className?: string;
  show: boolean;
  timeout: number;
  startAnimation: AnimationType;
  endAnimation: AnimationType;
}
