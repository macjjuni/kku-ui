import { ReactNode } from 'react';
import { SizeType } from '@/common/base/base.interface';
import { ButtonProps } from '@/core';

export const BUTTON_VARIANTS = ['outlined', 'solid', 'primary', 'subtle', 'plain'] as const;
export type KButtonVariantType = (typeof BUTTON_VARIANTS)[number];


export interface KButtonProps extends ButtonProps {
  children?: ReactNode;
  size?: SizeType;
  variant?: KButtonVariantType;
  isDanger?: boolean;

  width?: number | string
  height?: number | string
}

export interface KButtonRefs {
  focus: () => void;
  blur: () => void;
  click: () => void;
}
