import { ElementType, ReactNode } from 'react';
import { MotionProps } from 'motion/react';

export type MotionType = Pick<MotionProps, 'initial' | 'animate' | 'exit' | 'transition'>;

export interface MotionComponentProps extends MotionProps {
  id?: string;
  className?: string;
  element?: ElementType;

  isOpen?: boolean;
  children: ReactNode;

  role?: string;
  ariaDescribedby?: string;
}
