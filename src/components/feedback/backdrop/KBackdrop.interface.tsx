import { HTMLAttributes, MouseEvent, ReactNode } from 'react';

export interface KBackdropProps extends HTMLAttributes<HTMLDivElement> {
  open: boolean;
  zIndex?: number;
  opacity?: number;

  onClick: (e?: MouseEvent<HTMLDivElement>) => void
  container?: HTMLElement;
  children?: ReactNode;
}
