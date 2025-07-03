import { forwardRef, KeyboardEvent, memo, MouseEvent, useCallback, useImperativeHandle, useMemo, useRef } from 'react';
import { Button as CoreButton } from '@/core';
import { useRipple } from '@/common/hooks';
import { KButtonProps, KButtonRefs } from '@/components';


const Button = forwardRef<KButtonRefs, KButtonProps>((props, ref) => {

  // region [Hooks]
  const {
    type = 'button', className, label, onClick, disabled,
    size = 'medium', variant = 'default', children,
    onMouseDown, onMouseLeave, onMouseUp, onKeyDown, onKeyUp,
    ...restProps
  } = props;

  const rootRef = useRef<HTMLButtonElement>(null);
  const ripple = useRipple(rootRef);

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

    if (className) {
      clazz.push(className);
    }
    if (disabled) {
      clazz.push('k-button--disabled');
    }
    if (variant) {
      clazz.push(`k-button--${variant}`);
    }

    return clazz.join(' ');
  }, [className, disabled, size, variant]);
  // endregion

  // region [Events]
  const onClickRoot = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    if (!disabled) {
      onClick?.(e);
    }
  }, [disabled, onClick]);

  const onMouseDownRoot = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    onMouseDown?.(e);
    if (!disabled) {
      ripple?.register(e);
    }
  }, [ripple, onMouseDown]);

  const onMouseUpRoot = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    onMouseUp?.(e);
    ripple.remove();
  }, [ripple, onMouseUp]);

  const onMouseLeaveRoot = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    onMouseLeave?.(e);
    if (!rootRef?.current) {
      throw Error('Invalid rootRef.');
    }
    ripple.remove();
  }, [ripple, onMouseLeave]);

  const onKeyDownRoot = useCallback((e: KeyboardEvent<HTMLButtonElement>) => {
    onKeyDown?.(e);
    ripple?.register(e);
  }, [ripple, onKeyDown]);

  const onKeyUpRoot = useCallback((e: KeyboardEvent<HTMLButtonElement>) => {
    onKeyUp?.(e);
    if (e.key === 'Enter' || e.key === ' ') {
      ripple.remove();
    }
  }, [ripple, onKeyUp]);
  // endregion

  return (
    <CoreButton ref={rootRef} {...restProps} type={type} label={label} className={rootClass}
                disabled={disabled} onMouseDown={onMouseDownRoot} onMouseLeave={onMouseLeaveRoot} onClick={onClickRoot}
                onMouseUp={onMouseUpRoot} onKeyDown={onKeyDownRoot} onKeyUp={onKeyUpRoot} />
  );
});

const KButton = memo(Button);
Button.displayName = 'KButton';
KButton.displayName = 'KButton';

export default KButton;
