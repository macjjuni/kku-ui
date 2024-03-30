import { KBaseProp, KSizeProp } from '@/common/base/base.interface';


export interface KSwitchProps extends KBaseProp, KSizeProp {

  value: boolean // ✨ Required ✨

  // Types
  toggleColor?: string
  bgColor?: string

  disabled?: boolean

  // Event
  onChange: (value: boolean) => void // ✨ Required ✨
}


export interface KSwitchRefs {
  toggle: () => void
}
