import { useCallback } from 'react'
import KButtonProps from './KButton.type'

// Start - [TailWindCSS]
const defaultStyle = `relative flex justify-center items-center rounded-xs transition duration-100 overflow-hidden`
const pseudoStyle = `after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:z-[-1] hover:after:brightness-90`
const originHoverStyle = 'hover:shadow-button'
const focusStyle = 'focus:outline-1 focus:opacity-[0.95]'
const activeStyle = 'active:scale-[1.028] active:rotate-[1deg]'
const buttonStyle = `${defaultStyle} ${pseudoStyle} ${originHoverStyle} ${focusStyle} ${activeStyle}`

const sizeStyle = {
  lg: 'px-4xl py-xs text-xl',
  md: 'px-xl py-xs text-md',
  sm: 'px-sm py-1/4 text-sm',
}

const bgStyle = {
  primary: `after:bg-primary active:after:bg-primary`,
  success: `after:bg-success active:after:bg-success`,
  warning: `after:bg-warning active:after:bg-warning`,
  error: `after:bg-error active:after:bg-error`,
  default: `after:bg-BLG500 active:after:bg-BLG500`,
}
const colorStyle = {
  origin: 'text-white',
  outlined: '',
}
const outlinedStyle = {
  primary: `border border-primary text-primary after:content-[]`,
  success: `border border-success text-success after:content-[]`,
  warning: `border border-warning text-warning after:content-[]`,
  error: `border border-error text-error after:content-[]`,
  default: 'border border-BLG500 text-BLG500 after:content-[]',
}

// End - [TailWindCSS]

function KButton({ children, label, variant = 'default', outlined = false, size = 'md', className = '', onClick, onMouseEnter, onMouseLeave, onKeyDown, onKeyUp }: KButtonProps) {
  // 커스텀 여부 반환
  const isCustomStyle = useCallback(() => className?.includes('bg') || className?.includes('text'), [className])

  // 사이즈 계산
  const selectSize = useCallback(() => sizeStyle[size], [size])

  // variant별 글자 색상 계산
  const selectTextColor = useCallback(() => {
    if (isCustomStyle()) return ''
    if (outlined) return colorStyle.outlined
    return colorStyle.origin
  }, [variant, className])

  // variant별 스타일 계산
  const selectVarinat = useCallback(() => {
    if (isCustomStyle()) return ''
    if (outlined) return outlinedStyle[variant]
    return bgStyle[variant]
  }, [outlined, variant, className])

  return (
    <button
      className={`${buttonStyle} ${selectSize()} ${selectVarinat()} ${selectTextColor()} ${className}`}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onKeyDown={onKeyDown}
      onKeyUp={onKeyUp}
    >
      {children ? children : label}
    </button>
  )
}

export default KButton
