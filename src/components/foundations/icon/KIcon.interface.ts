import { MouseEvent, KeyboardEvent } from 'react';
import { KBaseProp } from '@/common/base/base.interface';


export const ICON_SIZES = ['xsmall', 'small', 'medium', 'large', 'xlarge'] as const;
export type KIconSize = (typeof ICON_SIZES)[number]
export const KIconSizeList = Object.values(ICON_SIZES);

export interface KIconProps extends KBaseProp {
  icon: string;
  size?: KIconSize | number;

  disabled?: boolean;
  color?: string;

  onClick?: (e: MouseEvent<HTMLSpanElement> | KeyboardEvent<HTMLSpanElement>) => void;
}

export interface KIconRefs {
  click: () => void;
}
