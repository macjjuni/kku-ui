import {
  KeyboardEvent,
  MouseEvent,
  forwardRef,
  useImperativeHandle,
  useRef, useMemo, useCallback, memo,
} from 'react';
import { useRipple } from '@/common/hooks';
import { initSize } from '@/common/util/variation';
import { KButtonProps, KButtonRefs } from '@/components';


const Button = forwardRef<KButtonRefs, KButtonProps>((props, ref) => {

  // region [Hooks]

  const { type = 'button', className, style, label, onClick, disabled,
    size, color, fontColor, variant = 'default', children, ...restProps } = props;

  if (label && children) {
    throw Error('Error: label and children attributes cannot be duplicated.');
  }

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

    const clazz = [];

    if (className) {
      clazz.push(className);
    }
    if (color) {
      clazz.push('k-button--colorful');
    }
    if (disabled) {
      clazz.push('k-button--disabled');
    }
    if (variant) {
      clazz.push(`k-button--${variant}`);
    }

    initSize(clazz, 'k-button', size);

    return clazz.join(' ');
  }, [className, disabled, size, color, variant]);

  const rootStyle = useMemo(() => {

    const styles = { ...style };

    if (color) {
      styles.borderColor = color;
      styles.backgroundColor = color;

      if (!fontColor) {
        styles.color = '#fff';
      }
    }
    if (fontColor) {
      styles.color = fontColor;
    }

    return styles;
  }, [style, color, fontColor]);

  // endregion


  // region [Events]

  const onClickButton = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    if (!disabled) {
      onClick?.(e);
    }
  }, [disabled, onClick]);

  const onMouseDown = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    restProps?.onMouseDown?.(e);
    if (!disabled) {
      ripple?.register(e);
    }
  }, [ripple, restProps.onMouseDown]);

  const onMouseUp = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    restProps?.onMouseUp?.(e);
    ripple.remove();
  }, [ripple, restProps.onMouseUp]);

  const onMouseLeave = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    restProps?.onMouseLeave?.(e);
    if (!rootRef?.current) {
      throw Error('Invalid rootRef.');
    }

    ripple.remove();
  }, [ripple, restProps.onMouseLeave]);

  const onKeyDown = useCallback((e: KeyboardEvent<HTMLButtonElement>) => {
    restProps?.onKeyDown?.(e);
    ripple?.register(e);
  }, [ripple, restProps.onKeyDown]);

  const onKeyUp = useCallback((e: KeyboardEvent<HTMLButtonElement>) => {
    restProps?.onKeyUp?.(e);
    if (e.key === 'Enter' || e.key === ' ') {
      ripple.remove();
      onClick?.();
    }
  }, [ripple, onClick, restProps.onKeyUp]);

  // endregion

  return (
    // eslint-disable-next-line react/button-has-type
    <button ref={rootRef} type={type} {...restProps} className={`k-button ${rootClass}`}
            style={rootStyle} aria-label={label} disabled={disabled}
            onMouseDown={onMouseDown} onMouseLeave={onMouseLeave} onClick={onClickButton}
            onMouseUp={onMouseUp} onKeyDown={onKeyDown} onKeyUp={onKeyUp}>
      {(children || label) && (
        <span className="k-button__content">{children || label}</span>)}
    </button>
  );
});

const KButton = memo(Button);
Button.displayName = 'KButton';
KButton.displayName = 'KButton';

export default KButton;
