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
export const variants = { outlined: 'outlined', contained: 'contained', default: 'default' } as const;
export type VariantType = (typeof variants)[keyof typeof variants];

export interface KVariantProp {
  variant?: VariantType

  contained?: boolean
  outlined?: boolean
}
