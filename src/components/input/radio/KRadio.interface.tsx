import { KBaseProp, KSizeProp } from '@/common/base/base.interface';


export interface KRadioProps extends KBaseProp, KSizeProp {

  label: string // ✨ Required ✨
  value: boolean // ✨ Required ✨

  // Types
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


export interface KRadioRefs {
  click: () => void
  focus: () => void
  blur: () => void
  toggle: () => void
}
