import { KeyboardEvent, MouseEvent, FocusEvent, ReactNode } from 'react';
import { KBaseProp, KSizeProp, KVariantProp } from '@/common/base/base.interface';

export interface KChipProps extends KBaseProp, KSizeProp, KSizeProp, KVariantProp {

  label?: string
  children?: ReactNode

  disabled?: boolean

  // Styles
  color?: string
  fontColor?: string

  closeable?: boolean

  onClose?: (e:MouseEvent<HTMLSpanElement> | KeyboardEvent<HTMLSpanElement>) => void
  onClick?: (e:MouseEvent<HTMLDivElement> | KeyboardEvent<HTMLDivElement>) => void
  onFocus?: (e:FocusEvent<HTMLDivElement>) => void
  onBlur?: (e:FocusEvent<HTMLDivElement>) => void
}


export interface KChipRef {
  click: () => void
  focus?: () => void
  blur?: () => void
}
