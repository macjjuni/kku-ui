import { KeyboardEvent, MouseEvent, ReactNode } from 'react';
import { KBaseProp } from '@/common/base/base.interface';

export interface KCardProps extends KBaseProp {

  children?: ReactNode

  title?: string
  subTitle?: string

  clickable?: boolean

  // Styles
  width?: string
  height?: string
  color?: string
  fontColor?: string
  rounded?: boolean
  borderRadius?: string

  onClick?: (e: MouseEvent<HTMLDivElement> | KeyboardEvent<HTMLDivElement>) => void
}
