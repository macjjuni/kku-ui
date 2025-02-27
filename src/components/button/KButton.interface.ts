import { MouseEvent, ReactNode } from 'react';
import { KBaseProp, KSizeProp } from '@/common/base/base.interface';

export interface KButtonProps extends KBaseProp, KSizeProp {
  children?: ReactNode
  label?: string

  disabled?: boolean

  onClick?: (e?: MouseEvent<HTMLButtonElement>) => void
  color?: string
  fontColor?: string
}

export interface KButtonRefs {
  focus: () => void
  click: () => void
}
