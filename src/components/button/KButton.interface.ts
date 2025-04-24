import { MouseEvent, ReactNode } from 'react';
import { KBaseProp, SizeType, VariantType } from '@/common/base/base.interface';

export interface KButtonProps extends KBaseProp {
  children?: ReactNode
  label?: string

  size?: SizeType
  variant?: VariantType

  disabled?: boolean
  color?: string
  fontColor?: string

  onClick?: (e?: MouseEvent<HTMLButtonElement>) => void
}

export interface KButtonRefs {
  focus: () => void
  click: () => void
}
