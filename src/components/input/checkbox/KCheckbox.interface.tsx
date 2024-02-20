import { KBaseProp, KSizeProp } from '@/common/base/base.interface';


type KCheckboxSharp = 'circle' | 'square';

export interface KCheckboxProps extends KBaseProp, KSizeProp {

  label: string // ✨ Required ✨
  checked: boolean // ✨ Required ✨

  // Types
  type?: KCheckboxSharp
  circle?: boolean
  square?: boolean
  color?: string

  defaultCheck?: boolean
  disabled?: boolean
  required?: boolean

  // Event
  onChange: (value: boolean) => void // ✨ Required ✨
  onFocus?: () => void
  onBlur?: () => void

  // Styles
  width?: string
}


export interface KCheckboxRefs {
  click: () => void
  focus: () => void
  blur: () => void
  toggle: () => void
  checked: boolean
}