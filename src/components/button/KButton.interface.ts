import { ReactElement, MouseEvent } from 'react';
import { KBaseProp, KSizeProp, KVariantProp } from '@/common/base/base.interface.ts';

export default interface KButtonProps extends KBaseProp, KSizeProp, KVariantProp {
  children?: ReactElement
  label?: string

  disabled?: boolean

  onClick?: (e?: MouseEvent<HTMLButtonElement | HTMLElement>) => void
}
