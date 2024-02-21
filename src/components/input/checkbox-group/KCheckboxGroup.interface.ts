
export interface KCheckboxGroupItem {
  ['label']: string
  ['value']: string
}

export interface KCheckboxGroupProps {
  items: KCheckboxGroupItem[]
  value: string[]

  onChange: (value: string[]) => void
}
