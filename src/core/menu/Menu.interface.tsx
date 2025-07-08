import { ReactNode } from 'react';
import { PanelProps } from "@/core";

export type MenuElementType = 'ul' | 'ol' | 'div'

export interface MenuProps<T extends MenuElementType = 'ul'> extends Omit<PanelProps<T>, 'ratio' | 'children'> {
  as?: T;
  children?: ReactNode;
}
