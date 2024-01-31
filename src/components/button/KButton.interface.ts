import { ReactElement, MouseEvent } from 'react';
import { KBaseProp, KSizeProp, KVariantProp } from '@/common/base/base.interface.ts';

export interface KButtonProps extends KBaseProp, KSizeProp, KVariantProp {
  children?: ReactElement
  label?: string

  disabled?: boolean

  onClick?: (e?: MouseEvent<HTMLButtonElement>) => void

  color?: string


}

export interface KButtonRefs {
  focus: ()=> void
  click: (e: MouseEvent<HTMLButtonElement>) => void
}
