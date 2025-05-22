import { ButtonHTMLAttributes, MouseEvent, ReactNode } from 'react';
import { KBaseProp, SizeType } from '@/common/base/base.interface';

export const BUTTON_VARIANTS = {
  default: 'default',
  outlined: 'outlined',
  primary: 'primary',
  success: 'success',
  warning: 'warning',
  error: 'error',
} as const;
export type KButtonVariantType = keyof typeof BUTTON_VARIANTS;
export const KButtonVariantList = Object.values(BUTTON_VARIANTS);

export interface KButtonProps extends KBaseProp, ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  label?: string;

  size?: SizeType;
  variant?: KButtonVariantType;

  disabled?: boolean;
  color?: string;
  fontColor?: string;

  onClick?: (e?: MouseEvent<HTMLButtonElement>) => void;
}

export interface KButtonRefs {
  focus: () => void;
  blur: () => void;
  click: () => void;
}
