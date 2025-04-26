import { MouseEvent, KeyboardEvent } from 'react';
import { KBaseProp } from '@/common/base/base.interface';

type KIconSize = 'small' | 'medium' | 'large';


export interface KIconProps extends KBaseProp {
  icon: string
  size?: KIconSize | number

  clickable?: boolean
  disabled?: boolean
  color?: string

  onClick?: (e: MouseEvent<HTMLSpanElement> | KeyboardEvent<HTMLSpanElement>) => void
}

export interface KIconRefs {
  click: () => void
}
