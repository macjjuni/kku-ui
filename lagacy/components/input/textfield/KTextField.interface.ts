import { KeyboardEvent, ReactNode } from 'react';
import { KBaseProp, KSizeProp } from '@/common/base/base.interface';


const labelDirection = { column: 'column', row: 'row' } as const;
type LabelDirectionType = typeof labelDirection[keyof typeof labelDirection];

export interface KTextFieldProps extends KBaseProp, KSizeProp {

  // Value
  value: string

  // Label
  label?: string
  labelDirection?: LabelDirectionType
  column?: boolean
  row?: boolean

  // Options
  placeholder?: string
  maxLength?: number

  // Types
  disabled?: boolean
  required?: boolean
  clearable?: boolean
  password?: boolean
  search?: boolean

  // Custom
  rightAction?: ReactNode

  // Event
  onChange?: (value: string) => void
  onFocus?: () => void
  onBlur?: () => void
  onKeyDownEnter?: (e?: KeyboardEvent<HTMLInputElement>) => void
  onSearch?: () => void

  // Styles
  width?: string
  fullWidth?: boolean
}

export interface KTextFieldRefs {
  focus: () => void
  blur: () => void
  validate: () => void
  value: string
}
