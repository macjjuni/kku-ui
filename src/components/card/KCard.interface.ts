import { KeyboardEvent, MouseEvent, ReactNode } from 'react';
import { KBaseProp, KVariantProp } from '@/common/base/base.interface';

export interface KCardProps extends KBaseProp, KVariantProp {

  children?: ReactNode

  title?: string
  subTitle?: string

  clickable?: boolean

  // Styles
  width?: string
  height?: string
  color?: string
  fontColor?: string
  padding?: string
  borderRadius?: string


  onClick?: (e: MouseEvent<HTMLDivElement> | KeyboardEvent<HTMLDivElement>) => void
}
