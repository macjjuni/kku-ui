import { ReactNode, MouseEvent } from 'react';
import { KBaseProp, KSizeProp, VariantType } from '@/common/base/base.interface';

export interface KButtonProps extends KBaseProp, KSizeProp {
  children?: ReactNode
  label?: string

  disabled?: boolean

  variant?: VariantType
  onClick?: (e?: MouseEvent<HTMLButtonElement>) => void
}

export interface KButtonRefs {
  focus: () => void
  click: () => void
}
