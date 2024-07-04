import { KeyboardEvent, MouseEvent, FocusEvent, ReactNode } from 'react';
import { KBaseProp, KSizeProp, KVariantProp } from '@/common/base/base.interface';

export interface KChipProps extends KBaseProp, KSizeProp, KVariantProp {

  label?: string
  children?: ReactNode

  disabled?: boolean
  tabIndex?: number

  // Styles
  color?: string
  fontColor?: string

  rounded?: boolean
  closeable?: boolean

  onClose?: (e:MouseEvent<HTMLSpanElement> | KeyboardEvent<HTMLSpanElement>) => void
  onClick?: (e:MouseEvent<HTMLDivElement> | KeyboardEvent<HTMLDivElement>) => void
  onFocus?: (e:FocusEvent<HTMLDivElement>) => void
  onBlur?: (e:FocusEvent<HTMLDivElement>) => void
}


export interface KChipRef {
  click: () => void
  focus: () => void
  blur: () => void
}
