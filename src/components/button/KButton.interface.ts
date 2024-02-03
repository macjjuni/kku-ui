import { ReactNode, MouseEvent } from 'react';
import { KBaseProp, KSizeProp, KVariantProp } from '@/common/base/base.interface';

export interface KButtonProps extends KBaseProp, KSizeProp, KVariantProp {
  children?: ReactNode
  label?: string

  disabled?: boolean

  onClick?: (e?: MouseEvent<HTMLButtonElement>) => void

  color?: string
}

export interface KButtonRefs {
  focus: ()=> void
  click: () => void
  startLoading: () => void
  stopLoading: () => void
}
