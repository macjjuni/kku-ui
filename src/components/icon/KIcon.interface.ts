import { MouseEvent, KeyboardEvent } from 'react';
import { KBaseProp } from '@/common/base/base.interface';


export const ICON_SIZE = { medium: 'medium', small: 'small' } as const;
export type KIconSize = (typeof ICON_SIZE)[keyof typeof ICON_SIZE];


export interface KIconProps extends KBaseProp {
  icon: string
  size?: KIconSize | number

  disabled?: boolean
  color?: string

  onClick?: (e: MouseEvent<HTMLSpanElement> | KeyboardEvent<HTMLSpanElement>) => void
}

export interface KIconRefs {
  click: () => void
}
