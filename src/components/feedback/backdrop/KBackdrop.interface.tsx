import { HTMLAttributes, MouseEvent, ReactNode } from 'react';

export interface KBackdropProps extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  zIndex?: number;
  opacity?: number;

  onClick?: (e?: MouseEvent<HTMLDivElement>) => void
  container?: HTMLElement;
  children?: ReactNode;
}
