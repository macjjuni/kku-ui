import { ElementType, HTMLAttributes, ReactNode } from 'react';

type RatioString = `${number}/${number}`;

export interface PanelProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  ratio?: RatioString;
  children?: ReactNode;
}