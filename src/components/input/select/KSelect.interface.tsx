import { KeyboardEvent } from 'react';
import { KBaseProp, KSizeProp } from '@/common/base/base.interface';


export interface KSelectItemType {
  ['value']: string
  ['title']: string
}


export interface KSelectProps extends KBaseProp, KSizeProp {
  // Value
  value: string // ✨ Required ✨
  items: KSelectItemType[]
  // Label
  // label?: string
  placeholder?: string
  noDataText?: string

  // Types
  disabled?: boolean
  // required?: boolean

  // Event
  onChange: (value: string) => void // ✨ Required ✨
  onFocus?: () => void
  onBlur?: () => void

  // Styles
  width?: string
}


export interface KSelectRefs {
  open: () => void
  close: () => void
}

export interface KSelectListProps {
  id: string // ✨ Required ✨
  open: boolean
  items: KSelectItemType[]
  noDataText?: string
  onFocus: () => void
  onClick: (item: KSelectItemType | null) => void
  onKeyDown: (e: KeyboardEvent<HTMLLIElement>, item: KSelectItemType | null, idx: number) => void
}
