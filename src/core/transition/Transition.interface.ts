import { MotionProps } from 'motion/react'
import { HTMLAttributes, ReactNode } from 'react'

export type MotionTag = keyof HTMLElementTagNameMap

export type MotionType = Pick<MotionProps, 'initial' | 'animate' | 'exit' | 'transition'>

export interface CTransitionProps<Tag extends MotionTag = 'div'>
  extends MotionType, HTMLAttributes<MotionTag> {
  isOpen?: boolean
  as?: Tag
  children?: ReactNode
}