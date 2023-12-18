import { VariantType, SizeType } from '@/types/component'
import { ReactElement, MouseEvent, KeyboardEvent } from 'react'

export default interface KButtonProps {
  children?: ReactElement
  label?: string
  variant?: VariantType
  size?: SizeType
  outlined?: boolean
  className?: string
  color?: string
  fontWeight?: string
  onClick?: (e?: MouseEvent<HTMLElement>) => void
  onMouseLeave?: (e?: MouseEvent<HTMLElement>) => void
  onMouseEnter?: (e?: MouseEvent<HTMLElement>) => void
  onKeyUp?: (e?: KeyboardEvent<HTMLElement>) => void
  onKeyDown?: (e?: KeyboardEvent<HTMLElement>) => void
}
