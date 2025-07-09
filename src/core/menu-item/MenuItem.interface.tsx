import { ReactNode } from 'react';
import { PanelProps } from "@/core";

export type MenuItemElementType = 'li' | 'div';

export interface MenuItemProps<T extends MenuItemElementType = 'li'> extends Omit<PanelProps<T>, 'ratio' | 'children'> {
  as?: T;
  disabled?: boolean;
  children?: ReactNode;
}
