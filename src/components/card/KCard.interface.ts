import { KeyboardEvent, MouseEvent, ReactNode } from 'react';
import { KBaseProp } from '@/common/base/base.interface';

export interface KCardProps extends KBaseProp {

  title?: string
  subTitle?: string
  children?: ReactNode

  rounded?: boolean
  clickable?: boolean

  onClick?: (e:MouseEvent<HTMLDivElement> | KeyboardEvent<HTMLDivElement>) => void
}
