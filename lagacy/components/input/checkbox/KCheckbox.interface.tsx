import { KBaseProp, KSizeProp } from '@/common/base/base.interface';

export interface KCheckboxProps extends KBaseProp, KSizeProp {

  label: string // ✨ Required ✨
  value: boolean // ✨ Required ✨

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
  toggle: () => void
}
