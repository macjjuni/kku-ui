import { KeyboardEvent, ReactNode } from 'react';
import { KBaseProp, KSizeProp } from '@/common/base/base.interface';


export interface KTextFieldProps extends KBaseProp, KSizeProp {

  // Value
  value: string

  // Label
  label?: string

  // Options
  placeholder?: string
  maxLength?: number

  // Types
  disabled?: boolean
  required?: boolean
  clearable?: boolean
  password?: boolean

  // Custom
  leftAction?: ReactNode
  rightAction?: ReactNode

  // Event
  onChange?: (value: string) => void
  onFocus?: () => void
  onBlur?: () => void
  onKeyDownEnter?: (e?: KeyboardEvent<HTMLInputElement>) => void

  // Styles
  width?: string
  fullWidth?: boolean
  align?: 'left' | 'center' | 'right';
}

export interface KTextFieldRefs {
  focus: () => void
  blur: () => void
  validate: () => void
  value: string
}
