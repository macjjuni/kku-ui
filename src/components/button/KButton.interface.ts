import { ReactNode, MouseEvent } from 'react';
import { KBaseProp, KSizeProp } from '@/common/base/base.interface';

export const buttonVariants = { container: 'contained', outlined: 'outlined', default: 'default' } as const;
export type ButtonVariantType = (typeof buttonVariants)[keyof typeof buttonVariants];

export interface KButtonVariantProp {
  variant?: ButtonVariantType

  contained?: boolean
  outlined?: boolean
}

export interface KButtonProps extends KBaseProp, KSizeProp, KButtonVariantProp {
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
