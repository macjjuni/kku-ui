import {
  KeyboardEvent,
  MouseEvent,
  forwardRef,
  useImperativeHandle,
  useRef, useMemo, useCallback, memo,
} from 'react';
import useRipple from '@/common/hook/useRipple';
import { initSize } from '@/common/util/variation';
import { KButtonProps, KButtonRefs } from '@/components';


const Button = forwardRef<KButtonRefs, KButtonProps>(({ ...restProps }, ref) => {

  // region [Hooks]

  const { id, className, style, children, label } = { ...restProps };
  const { onClick, disabled, size, color, fontColor, variant = 'default' } = { ...restProps };

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

    if (className) { clazz.push(className); }
    if (color) { clazz.push('k-button--colorful'); }
    if (disabled) { clazz.push('k-button--disabled'); }
    if (variant) { clazz.push(`k-button--${variant}`); }

    initSize(clazz, 'k-button', size);

    return clazz.join(' ');
  }, [className, disabled, size, color, variant]);

  const rootStyle = useMemo(() => {

    const styles = { ...style };

    if (color) {
      styles.borderColor = color;
      styles.backgroundColor = color;

      if (!fontColor) { styles.color = '#fff'; }
    }
    if (fontColor) { styles.color = fontColor; }

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

    if (!disabled) {
      ripple?.register(e);
    }
  }, [ripple]);

  const onMouseUp = useCallback(() => {

    ripple.remove();
  }, [ripple]);

  const onMouseLeave = useCallback(() => {

    if (!rootRef?.current) {
      throw Error('Invalid rootRef.');
    }

    ripple.remove();
  }, [ripple]);

  const onKeyDown = useCallback((e: KeyboardEvent<HTMLButtonElement>) => {

    ripple?.register(e);
  }, [ripple]);

  const onKeyUp = useCallback((e: KeyboardEvent<HTMLButtonElement>) => {

    if (e.key === 'Enter' || e.key === ' ') {
      ripple.remove();
      onClick?.();
    }
  }, [ripple, onClick]);

  // endregion

  return (
    <button ref={rootRef} id={id} className={`k-button ${rootClass}`} style={rootStyle}
            type="button" aria-label={label} disabled={disabled}
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
