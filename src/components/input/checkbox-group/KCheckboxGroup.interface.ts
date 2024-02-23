import { KCheckboxSharp } from '@/components/input/checkbox/KCheckbox.interface';

export interface KCheckboxGroupItem {
  ['label']: string
  ['value']: string
  disabled?: boolean
  defaultCheck?: boolean
}

export interface KCheckboxGroupProps {
  items: KCheckboxGroupItem[]
  value: string[]

  sharp?: KCheckboxSharp,
  color?: string,

  onChange: (value: string[]) => void
}
