import { KBaseProp, KSizeProp } from '@/common/base/base.interface';


// export type KCheckboxShape = 'circle' | 'square';

export interface KCheckboxProps extends KBaseProp, KSizeProp {

  label: string // ✨ Required ✨
  value: boolean // ✨ Required ✨

  // Types
  // shape?: KCheckboxShape
  // circle?: boolean
  // square?: boolean
  color?: string

  defaultCheck?: boolean
  disabled?: boolean

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
}
