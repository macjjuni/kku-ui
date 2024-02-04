import { KeyboardEvent } from 'react';
import { KBaseProp, KSizeProp } from '@/common/base/base.interface';

export interface KTextFieldProps extends KBaseProp, KSizeProp {

  label?: string
  value: string

  disabled?: boolean

  onChange?: (value: string) => void
  onFocus?: () => void
  onBlur?: () => void
  onKeyDown?: (e?: KeyboardEvent<HTMLInputElement>) => void
  onKeyUp?: (e?: KeyboardEvent<HTMLInputElement>) => void

  color?: string
  width?: string
}

export interface KTextFieldRefs {
  focus: () => void
  blur: () => void
  validate: () => void
}
