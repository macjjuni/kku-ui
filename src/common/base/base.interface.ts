import { CSSProperties } from 'react';

// 🦴 - Base Properties
export interface KBaseProp {
  id?: string
  className?: string
  style?: CSSProperties
}

// 🎁 - Size Properties
export const sizes = { large: 'large', medium: 'medium', small: 'small' } as const;
export type SizeType = (typeof sizes)[keyof typeof sizes];


export interface KSizeProp {
  size?: SizeType

  large?: boolean
  medium?: boolean
  small?: boolean
}

// 🍭 - Variant Properties
export const variants = { primary: 'primary', outlined: 'outlined' } as const;
export type VariantType = (typeof variants)[keyof typeof variants];

export interface KVariantProp {
  variant?: VariantType

  primary?: boolean
  outlined?: boolean
}
