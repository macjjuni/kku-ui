import { ReactNode } from 'react';

export type MenuItemElementType = 'li' | 'div';

export interface MenuItemElementTypeMap {
  li: HTMLLIElement;
  div: HTMLDivElement;
}

export interface MenuItemProps {
  as?: MenuItemElementType;
  disabled?: boolean;
  children?: ReactNode;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}