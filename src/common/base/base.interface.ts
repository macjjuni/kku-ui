import { CSSProperties } from 'react';
import { MotionProps } from 'motion/react';

// 🦴 - Base Properties
export interface KBaseProp {
  id?: string
  className?: string
  style?: CSSProperties
}

// 🎁 - Size Properties
export const SIZES = ['small', 'medium'];
export type SizeType = (typeof SIZES)[number];

export interface KSizeProp {
  size?: SizeType
}

// 🌸 - Motion Properties
export type MotionType = Pick<MotionProps, 'initial' | 'animate' | 'exit' | 'transition'>;