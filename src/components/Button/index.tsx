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

function KButton({
  children,
  label,
  variant = 'default',
  outlined = false,
  size = 'md',
  className = '',
  color,
  fontWeight,
  onClick,
  onMouseEnter,
  onMouseLeave,
  onKeyDown,
  onKeyUp,
}: KButtonProps) {
  // 사이즈 계산
  const selectSize = useCallback(() => sizeStyle[size], [size])
  // variant별 글색 계산
  const selectTextColor = useCallback(() => (outlined ? colorStyle.outlined : colorStyle.origin), [variant])
  // variant별 스타일 계산
  const selectVarinat = useCallback(() => {
    if (outlined) return outlinedStyle[variant]
    else if (!color) return bgStyle[variant]
  }, [outlined, variant])

  // 커스텀 컬러 계산 함수
  const setBg = useCallback(() => (outlined ? 'none' : color), [outlined, color])
  const setColor = useCallback(() => (outlined ? color : '#fff'), [outlined, color])
  const setBorderColor = useCallback(() => (outlined ? color : 'none'), [outlined, color])

  return (
    <button
      className={`${buttonStyle} ${selectSize()} ${selectVarinat()} ${selectTextColor()} ${className}`}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onKeyDown={onKeyDown}
      onKeyUp={onKeyUp}
      style={{ background: setBg(), color: setColor(), borderColor: setBorderColor(), fontWeight }}
    >
      {children ? children : label}
    </button>
  )
}

export default KButton
