import { useState, memo, useMemo, useCallback, useRef, forwardRef, useImperativeHandle,
  Ref, MouseEvent, KeyboardEvent, MutableRefObject, CSSProperties } from 'react';
import useRipple from '@/common/hook/useRipple';
import { initSize } from '@/common/util/variation';
import colorUtil from '@/common/util/color';
import { KButtonProps, KButtonRefs } from '@/components';

const KButton = forwardRef((props: KButtonProps, ref: Ref<KButtonRefs>) => {

  if (props.label && props.children) {
    throw Error('Error: label and children attributes cannot be duplicated.');
  }

  // region [Hooks]

  const rootRef = useRef() as MutableRefObject<HTMLButtonElement>;
  const [isLoad, setIsLoad] = useState<boolean>(false);
  const ripple = useRipple(rootRef);

  useImperativeHandle(ref, () => ({

    focus() { rootRef.current?.focus(); },
    click() { if (!props.disabled && !isLoad && props.onClick) { props.onClick(); } },
    startLoading() { setIsLoad(true); },
    stopLoading() { setIsLoad(false); },
  }));

  // endregion

  // region [Styles]

  const rootClass = useMemo(
    () => {

      const clazz = [];

      if (props.variant && (props.outlined || props.contained)) {
        throw Error('Error: variant and contained or outlined attributes cannot be duplicated.');
      }
      if (props.className) { clazz.push(props.className); }
      if (isLoad) { clazz.push('k-button--loading'); }
      if (props.disabled && props.color && (props.contained || props.variant === 'contained')) {
        clazz.push('k-button--disabled');
      }
      if (props.variant === 'contained' || props.contained) { clazz.push('k-button--contained'); }
      if (props.variant === 'outlined' || props.outlined) { clazz.push('k-button--outlined'); }
      if ((props.variant === 'default' || !props.variant) && (!props.contained && !props.outlined)) {
        clazz.push('k-button--default');
      }
      if (!props.variant && !props.outlined && !props.contained) { clazz.push('k-button--default'); }

      initSize(clazz, 'k-button', props.size, props.large, props.medium, props.small);

      return clazz.join(' ');
    },
    [isLoad, props.className, props.variant, props.contained, props.disabled, props.outlined,
      props.large, props.medium, props.small, props.size, props.color],
  );

  const rootStyle = useMemo(() => {

    const styles: CSSProperties = props.style || {};

    if (props.variant === 'contained' || props.contained) {
      if (props.color) {
        styles.background = props.color;
        styles.borderColor = props.color;
      }
    } else if (props.color) {
      styles.color = props.color;
      styles.borderColor = props.color;
    }
    return styles;
  }, [props.style, props.color, props.variant]);

  const loadStyle = useMemo(() => {

    if (!isLoad) return {};

    if (props.color) {
      return { border: '3px solid #fff', borderBottomColor: props.color || '#fff' };
    }
  }, [isLoad]);

  // endregion


  // region [Events]

  const onMouseDown = useCallback((e: MouseEvent<HTMLButtonElement>): void => {

    if (!props.disabled && !isLoad) { ripple?.register(e); }
  }, [props.disabled, isLoad, ripple]);

  const onMouseUp = useCallback((e: MouseEvent<HTMLButtonElement>): void => {

    ripple.remove();
    if (!props.disabled && !isLoad && props?.onClick) {
      props.onClick(e);
    }
  }, [props, ripple]);

  const onMouseEnter = useCallback((): void => {

    if ((props.variant === 'contained' || props.contained) && props.color) {
      const hoverColor = colorUtil.shadeColor(props.color, 10);
      rootRef.current.style.background = hoverColor;
      rootRef.current.style.borderColor = hoverColor;
    }
  }, [props.variant, props.contained, props.color]);

  const onMouseLeave = useCallback((): void => {

    ripple.remove();
    if ((props.variant === 'contained' || props.contained) && props.color) {
      rootRef.current.style.background = props.color;
    }
  }, [props.variant, props.contained, props.outlined, props.color, ripple]);

  const onKeyDown = useCallback((e: KeyboardEvent<HTMLButtonElement>): void => {

    ripple?.register(e);
  }, [ripple]);

  const onKeyUp = useCallback((e: KeyboardEvent<HTMLButtonElement>): void => {

    if (e.key === 'Enter' || e.key === ' ') {
      ripple.remove();
      if (props.onClick) { props?.onClick(); }
    }
  }, [props, ripple]);

  // endregion

  return (
    <button
      ref={rootRef}
      id={props.id}
      className={`k-button ${rootClass}`}
      style={rootStyle}
      type='button'
      disabled={props.disabled}
      onMouseDown={onMouseDown}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseUp={onMouseUp}
      onKeyDown={onKeyDown}
      onKeyUp={onKeyUp}
      aria-busy={isLoad}
    >
      {
        (props.children || props.label)
          && (<span className='k-button__content'>{props.children || props.label}</span>)
      }
      {
        isLoad && (
          <span className='k-button__loading__container'>
            <span style={loadStyle} className='k-spinner--loading' />
          </span>
        )
      }
    </button>
  );
});

KButton.defaultProps = {};
KButton.displayName = 'KButton';

export default memo(KButton);
