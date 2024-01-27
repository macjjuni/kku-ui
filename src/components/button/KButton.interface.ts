import { ReactElement, MouseEvent } from 'react';
import { KBaseProp, KSizeProp } from '@/common/type/base.interface.ts';

export default interface KButtonProps extends KBaseProp, KSizeProp {
  children?: ReactElement
  label?: string

  outlined?: boolean

  onClick?: (e?: MouseEvent<HTMLButtonElement | HTMLElement>) => void
}
