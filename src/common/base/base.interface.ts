import { CSSProperties } from 'react';
import { MotionProps } from 'motion/react';

// 🦴 - Base Properties
export interface KBaseProp {
  id?: string
  className?: string
  style?: CSSProperties
}

// 🎁 - Size Properties
export const SIZES = { medium: 'medium', small: 'small' } as const;
export type SizeType = (typeof SIZES)[keyof typeof SIZES];

export interface KSizeProp {
  size?: SizeType
}

// 🎁 - Variant Properties
export const variants = { primary: 'primary', default: 'default' } as const;
export type VariantType = (typeof variants)[keyof typeof variants];

// 🌸 - Motion Properties
export type MotionType = Pick<MotionProps, 'initial' | 'animate' | 'exit' | 'transition'>;
