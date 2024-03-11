// import { KCheckboxShape } from '@/components/input/checkbox/KCheckbox.interface';
import { KBaseProp, KSizeProp } from '@/common/base/base.interface';

export interface KCheckboxGroupItem {
  ['label']: string
  ['value']: string
  disabled?: boolean
  defaultCheck?: boolean
}

export interface KCheckboxGroupProps extends KBaseProp, KSizeProp {
  items: KCheckboxGroupItem[] // ✨ Required ✨
  value: string[] // ✨ Required ✨

  // Styles
  // shape?: KCheckboxShape
  color?: string
  direction?: 'column' | 'row'
  gap?: string

  onChange: (value: string[]) => void // ✨ Required ✨
}
