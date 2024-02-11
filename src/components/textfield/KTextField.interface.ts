import { KeyboardEvent, ReactNode } from 'react';
import { KBaseProp, KSizeProp } from '@/common/base/base.interface';


const labelDirection = { column: 'column', row: 'row' } as const;
type LabelDirectionType = typeof labelDirection[keyof typeof labelDirection];

export interface KTextFieldProps extends KBaseProp, KSizeProp {

  value: string

  label?: string
  labelDirection?: LabelDirectionType
  column?: boolean
  row?: boolean

  disabled?: boolean
  placeholder?: string
  maxLength?: number
  required?: boolean

  rightAction?: ReactNode

  onChange?: (value: string) => void
  onFocus?: () => void
  onBlur?: () => void
  onKeyDown?: (e?: KeyboardEvent<HTMLInputElement>) => void
  onKeyUp?: (e?: KeyboardEvent<HTMLInputElement>) => void

  color?: string
  width?: string

  password?: boolean
}

export interface KTextFieldRefs {
  focus: () => void
  blur: () => void
  validate: () => void
  value: string
}
