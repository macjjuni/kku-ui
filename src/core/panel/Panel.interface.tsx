import { ElementType, HTMLAttributes, ReactNode } from 'react';

type RatioString = `${number}/${number}`;

export interface PanelProps<T extends ElementType = 'div'> extends HTMLAttributes<T> {
  as?: T;
  ratio?: RatioString;
  children?: ReactNode;
}
