import { MouseEvent, KeyboardEvent } from 'react';
import { KBaseProp } from '@/common/base/base.interface';


export type KIconSize = 'small' | 'medium' | 'large';

export interface KIconProps extends KBaseProp {

  icon: string
  size?: KIconSize | number
  large?: boolean
  medium?: boolean
  small?: boolean

  clickable?: boolean
  disabled?: boolean
  color?: string

  tabIndex?: number

  onClick?: (e: MouseEvent<HTMLSpanElement> | KeyboardEvent<HTMLSpanElement>) => void
}

export interface KIconRefs {
  click: () => void
}
