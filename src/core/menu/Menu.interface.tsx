import { ReactNode } from 'react';

export type MenuElementType = 'ul' | 'div';

export interface MenuElementTypeMap {
  ul: HTMLUListElement;
  div: HTMLDivElement;
}

export interface MenuProps {
  as?: MenuElementType;
  children?: ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}