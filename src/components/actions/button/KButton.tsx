import { forwardRef, KeyboardEvent, memo, MouseEvent, useCallback, useImperativeHandle, useMemo, useRef } from 'react';
import { Button as CoreButton } from '@/core';
import { useRipple } from '@/common/hooks';
import { KButtonProps, KButtonRefs } from '@/components';
import { handleEnterOrSpacePress } from '@/common/util/keyboard';


const Button = forwardRef<KButtonRefs, KButtonProps>((props, ref) => {

  // region [Hooks]
  const {
    type = 'button', className, label, disabled, isDanger,
    size = 'medium', variant = 'outlined', width, height, style,
    onClick, onMouseDown, onMouseLeave, onMouseUp, onKeyDown, onKeyUp,
    ...restProps
  } = props;

  const rootRef = useRef<HTMLButtonElement>(null);
  const ripple = useRipple(rootRef);
  const isNoRipple = useMemo(() => (
    variant === 'plain'
  ), [variant]);

  useImperativeHandle(ref, () => ({
    focus() {
      rootRef.current?.focus();
    },
    blur() {
      rootRef.current?.blur();
    },
    click() {
      if (!disabled) {
        rootRef.current?.click();
      }
    },
  }));
  // endregion

  // region [Styles]
  const rootClass = useMemo(() => {

    const clazz = ['k-button', `k-button--${size}`];

    if (className) { clazz.push(className); }
    if (disabled) { clazz.push('k-button--disabled'); }
    if (variant) { clazz.push(`k-button--${variant}`); }
    if (isDanger) { clazz.push(`k-button--danger`); }

    return clazz.join(' ');
  }, [className, disabled, size, variant, isDanger]);

  const rootStyle = useMemo(() => ({ ...style, width, height }), [])
  // endregion

  // region [Events]
  const onClickRoot = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    if (!disabled) {
      onClick?.(e);
    }
  }, [disabled, onClick]);

  const onMouseDownRoot = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    onMouseDown?.(e);
    if (!disabled && !isNoRipple) {
      ripple?.register(e);
    }
  }, [ripple, isNoRipple, onMouseDown]);

  const onMouseUpRoot = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    onMouseUp?.(e);
    if (!isNoRipple) {
      ripple.remove();
    }
  }, [ripple, isNoRipple, onMouseUp]);

  const onMouseLeaveRoot = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    onMouseLeave?.(e);
    if (!rootRef?.current) {
      throw Error('Invalid rootRef.');
    }
    if (!isNoRipple) {
      ripple.remove();
    }
  }, [ripple, isNoRipple, onMouseLeave]);

  const onKeyDownRoot = useCallback((e: KeyboardEvent<HTMLButtonElement>) => {
    onKeyDown?.(e);
    if (!isNoRipple) {
      ripple?.register(e);
    }
  }, [ripple, onKeyDown]);

  const onKeyUpRoot = useCallback((e: KeyboardEvent<HTMLButtonElement>) => {
    onKeyUp?.(e);
    if (!isNoRipple) {
      handleEnterOrSpacePress(e, () => ripple.remove())
    }
  }, [ripple, onKeyUp]);
  // endregion

  return (
    <CoreButton ref={rootRef} {...restProps} type={type} label={label} className={rootClass} style={rootStyle}
                disabled={disabled} onMouseDown={onMouseDownRoot} onMouseLeave={onMouseLeaveRoot} onClick={onClickRoot}
                onMouseUp={onMouseUpRoot} onKeyDown={onKeyDownRoot} onKeyUp={onKeyUpRoot}/>
  );
});

const KButton = memo(Button);
Button.displayName = 'KButton';
KButton.displayName = 'KButton';

export default KButton;
