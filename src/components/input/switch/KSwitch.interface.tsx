import { KBaseProp, KSizeProp } from '@/common/base/base.interface';


export interface KSwitchProps extends KBaseProp, KSizeProp {

  value: boolean // ✨ Required ✨

  // Types
  color?: string
  bgColor?: string

  disabled?: boolean

  // Event
  onChange: (value: boolean) => void // ✨ Required ✨
}


export interface KSwitchRefs {
  on: () => void
  off: () => void
  toggle: () => void
}
