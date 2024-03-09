import { MouseEvent, KeyboardEvent } from 'react';
import { KBaseProp } from '@/common/base/base.interface';


export type KIconType = 'outlined' | 'rounded';
export type KIconSize = 'small' | 'medium' | 'large';

export interface KIconProps extends KBaseProp {

  icon: string
  type?: KIconType
  size?: KIconSize | number

  clickable?: boolean
  disabled?: boolean
  color?: string

  tabIndex?: number

  onClick?: (e: MouseEvent<HTMLSpanElement> | KeyboardEvent<HTMLSpanElement>) => void
}

export interface KIconRefs {
  click: () => void
}
