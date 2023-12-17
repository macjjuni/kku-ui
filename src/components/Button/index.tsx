import { useCallback } from 'react'
import KButtonProps from './KButton.type'

// Start - [TailWindCSS]
const defaultStyle = `flex justify-center items-center rounded-xs transition duration-300 overflow-hidden`
const originHoverStyle = 'hover:shadow-button'
const focusStyle = 'focus:outline-1 focus:opacity-[0.95]'
const activeStyle = 'active:scale-[1.028]'
const buttonStyle = `${defaultStyle} ${originHoverStyle} ${focusStyle} ${activeStyle}`

const sizeStyle = {
  lg: 'px-4xl py-xs text-xl',
  md: 'px-xl py-xs text-md',
  sm: 'px-sm py-1/4 text-sm',
}
const originStyle = {
  primary: `bg-primary text-white hover:bg-primaryHover active:bg-primary`,
  success: `bg-success text-white hover:bg-successHover active:bg-success`,
  warning: `bg-warning text-white hover:bg-warningHover active:bg-warning`,
  error: `bg-error text-white hover:bg-errorHover active:bg-error`,
  default: `bg-BLG500 text-white hover:bg-BLG600 active:bg-BLG500`,
}
const outlinedStyle = {
  primary: `border border-primary text-primary`,
  success: `border border-success text-success`,
  warning: `border border-warning text-warning`,
  error: `border border-error text-error`,
  default: 'border border-BLG500 text-BLG500',
}

// End - [TailWindCSS]

function KButton({ children, label, variant = 'default', outlined = false, size = 'md', className = '', onClick }: KButtonProps) {
  const selectVarinat = useCallback(() => {
    if (outlined) return outlinedStyle[variant]
    else return originStyle[variant]
  }, [variant])

  const selectSize = useCallback(() => {
    return sizeStyle[size]
  }, [size])

  return (
    <button className={`${buttonStyle} ${selectVarinat()} ${selectSize()} ${className}`} onClick={onClick}>
      {children ? children : label}
    </button>
  )
}

export default KButton
