import { ReactNode } from 'react';
import { PanelProps } from "@/core";

export type MenuItemElementType = 'li' | 'div';

export type MenuItemProps<T extends MenuItemElementType = 'li'> = Omit<PanelProps<T>, 'ratio' | 'children'> & {
  as?: T;
  disabled?: boolean;
  children?: ReactNode;
}
