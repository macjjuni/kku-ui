import { PanelProps } from '@/core';

export type MenuElementType = 'ul' | 'ol' | 'div'

export type MenuProps<T extends MenuElementType = 'ul'> = Omit<PanelProps<T>, 'ratio'> & {
  as?: T;
}
