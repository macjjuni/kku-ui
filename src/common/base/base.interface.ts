import { CSSProperties } from 'react';

// 🦴 - Base Properties
export interface KBaseProp {
  id?: string
  className?: string
  style?: CSSProperties
}

// 🎁 - Size Properties
export const sizes = { medium: 'medium', small: 'small' } as const;
export type SizeType = (typeof sizes)[keyof typeof sizes];

export interface KSizeProp {
  size?: SizeType
}
