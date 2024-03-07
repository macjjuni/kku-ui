import { MouseEvent, ReactNode } from 'react';
import { KBaseProp, KSizeProp, KVariantProp } from '@/common/base/base.interface';

export interface KChipProps extends KBaseProp, KSizeProp, KSizeProp, KVariantProp {

  disabled?: boolean

  children?: ReactNode

  onClick?: (e?:MouseEvent<HTMLDivElement>) => void
  onFocus?: () => void
  onBlur?: () => void
}


export interface KChipRef {
  click: () => void
  onFocus?: () => void
  onBlur?: () => void
}
