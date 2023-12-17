import { VariantType, SizeType } from '@/types/component'
import { ReactElement } from 'react'

export default interface KButtonProps {
  children?: ReactElement
  label?: string
  variant?: VariantType
  size?: SizeType
  outlined?: boolean
  className?: string
  onClick?: () => void
  onHover?: () => void
}
