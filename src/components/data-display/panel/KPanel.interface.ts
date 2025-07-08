import { ElementType } from "react";
import { PanelProps } from '@/core/panel';

export interface KPanelProps<T extends ElementType = 'div'> extends PanelProps<T> {
  width?: number;
  height?: number;
}
