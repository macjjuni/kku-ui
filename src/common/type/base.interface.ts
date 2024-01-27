import { CSSProperties } from 'react';

export interface KBaseProp {
  id?: string
  className?: string
  style?: CSSProperties

  disabled?: boolean
}

export const sizes = { large: 'large', medium: 'medium', small: 'small' };
export type SizeType = (typeof sizes)[keyof typeof sizes];

export interface KSizeProp {
  size?: SizeType

  large?: boolean
  medium?: boolean
  small?: boolean
}
