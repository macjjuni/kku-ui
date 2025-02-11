import { MouseEvent, KeyboardEvent } from 'react';
import { KBaseProp } from '@/common/base/base.interface';


export interface KIconProps extends KBaseProp {

  icon: string
  size?: number | string

  clickable?: boolean
  disabled?: boolean
  color?: string

  tabIndex?: number

  onClick?: (e: MouseEvent<HTMLSpanElement> | KeyboardEvent<HTMLSpanElement>) => void
}

export interface KIconRefs {
  click: () => void
}
