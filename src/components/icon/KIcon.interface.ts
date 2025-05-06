import { MouseEvent, KeyboardEvent } from 'react';
import { KBaseProp } from '@/common/base/base.interface';


export const ICON_SIZES = { large: 'large', medium: 'medium', small: 'small' } as const;
export type KIconSize = keyof typeof ICON_SIZES;
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
