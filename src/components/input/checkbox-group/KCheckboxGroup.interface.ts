import { KCheckboxShape } from '@/components/input/checkbox/KCheckbox.interface';

export interface KCheckboxGroupItem {
  ['label']: string
  ['value']: string
  disabled?: boolean
  defaultCheck?: boolean
}

export interface KCheckboxGroupProps {
  items: KCheckboxGroupItem[]
  value: string[]

  shape?: KCheckboxShape,
  color?: string,

  onChange: (value: string[]) => void
}
