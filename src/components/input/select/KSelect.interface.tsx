import { KeyboardEvent } from 'react';
import { KBaseProp, KSizeProp } from '@/common/base/base.interface';


export interface KSelectItemType {
  ['value']: string
  ['title']: string
}


export interface KSelectProps extends KBaseProp, KSizeProp {
  // Value
  value: string // ✨ Required ✨
  items: KSelectItemType[]
  // Label
  label?: string
  placeholder?: string

  // Types
  disabled?: boolean
  required?: boolean
  noClearable?: boolean

  // Event
  onChange: (value: string) => void // ✨ Required ✨
  onFocus?: () => void
  onBlur?: () => void
  onKeyDown?: (e?: KeyboardEvent<HTMLInputElement>) => void
  onKeyUp?: (e?: KeyboardEvent<HTMLInputElement>) => void

  // Styles
  width?: string
}


export interface KSelectRefs {
  onClick?: () => void
  value?: string
  focus?: () => void
  blur?: () => void
}
