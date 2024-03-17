import {
  FocusEvent,
  forwardRef,
  KeyboardEvent,
  memo,
  MouseEvent,
  MutableRefObject,
  Ref,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
} from 'react';
import { KChipProps, KChipRef } from '@/components/chip/KChip.interface';
import { initDisabled, initSize, initVariant } from '@/common/util/variation';
import { KIcon } from '@/components';
import useRipple from '@/common/hook/useRipple';


const KChip = forwardRef((props: KChipProps, ref: Ref<KChipRef>) => {

  if (props.label && props.children) {
    throw Error('Error: label or children attributes cannot be duplicated.');
  }

  // region [Hooks]

  const rootRef = useRef() as MutableRefObject<HTMLDivElement>;
  const ripple = useRipple(rootRef);

  useImperativeHandle(ref, () => ({
    click: () => { rootRef.current?.click(); },
    focus: () => { rootRef.current?.focus(); },
    blur: () => { rootRef.current?.blur(); },
  }));

  // endregion


  // region [Styles]

  const rootClass = useMemo(() => {

    const clazz = [];

    if (props.className) { clazz.push(props.className); }
    if (props.closeable) { clazz.push('k-chip--closeable'); }
    if (props.rounded) { clazz.push('k-chip--rounded'); }

    initVariant(clazz, 'k-chip', props.variant, props.contained, props.outlined);
    initSize(clazz, 'k-chip', props.size, props.large, props.medium, props.small);
    initDisabled(clazz, 'k-chip', props.disabled);

    return clazz.join(' ');
  }, [
    props.className, props.size, props.disabled, props.large, props.medium, props.small,
    props.variant, props.contained, props.outlined]);

  const rootStyle = useMemo(() => {

    const style = props.style ? props.style : {};

    if (props.color && (props.variant === 'contained' || props.contained)) {
      style.background = props.color;
    }
    if (props.color && (props.variant === 'outlined' || props.outlined
        || (!props.variant && !props.contained))) {
      style.borderColor = props.color;
      style.color = props.color;
    }
    if (props.fontColor) { style.color = props.fontColor; }

    return style;
  }, [props.style, props.color, props.variant, props.contained, props.outlined]);

  const closeIconSize = useMemo(() => {

    if (props.size && (props.large || props.medium || props.small)) {
      throw Error('Error: size and large or medium or small attributes cannot be duplicated.');
    }
    if (props.size === 'large' || props.large) { return 12; }
    if (props.size === 'medium' || props.medium) { return 12; }
    if (props.size === 'small' || props.small) { return 10; }

  }, [props.size, props.large, props.medium, props.small]);

  const closeIconColor = useMemo(() => {

    if ((props.variant === 'outlined' || props.outlined
        || (!props.variant && !props.contained)) && props.color) {
      return props.color;
    }

    return undefined;
  }, [props.color, props.variant, props.outlined]);

  // endregion


  // region [Events]

  const onClick = useCallback((e: MouseEvent<HTMLDivElement>) => {
    if (props.onClick && !props.disabled) { props.onClick(e); }
  }, []);

  const onKeyUp = useCallback((e: KeyboardEvent<HTMLDivElement>) => {

    if (e.key === ' ' || e.key === 'Enter') {
      if (props.onClick && !props.disabled) {
        ripple.remove();
        props.onClick(e);
      }
    }
  }, []);

  const onClose = useCallback((e: MouseEvent<HTMLSpanElement> | KeyboardEvent<HTMLSpanElement>) => {

    e.stopPropagation();
    if (props.onClose) { props.onClose(e); }
  }, [props.onClose]);

  const onBlur = useCallback((e: FocusEvent<HTMLDivElement>) => {

    e.stopPropagation();
    if (props.onBlur) { props.onBlur(e); }
  }, [props.onBlur]);

  const onFocus = useCallback((e: FocusEvent<HTMLDivElement>) => {

    e.stopPropagation();
    if (props.onFocus) { props.onFocus(e); }
  }, [props.onFocus]);

  const onMouseDown = useCallback((e: MouseEvent<HTMLDivElement>): void => {

    if (!props.disabled) { ripple?.register(e); }
  }, [props.disabled, ripple]);

  const onMouseUp = useCallback((): void => {

    ripple.remove();
  }, [props, ripple]);

  const onMouseLeave = useCallback((): void => {

    ripple.remove();
    if ((props.variant === 'contained' || props.contained) && props.color) {
      rootRef.current.style.background = props.color;
    }
  }, [props.variant, props.contained, props.outlined, props.color, ripple]);

  const onKeyDown = useCallback((e: KeyboardEvent<HTMLDivElement>): void => {

    if (!props.disabled) { ripple?.register(e); }
  }, [ripple]);

  // endregion


  return (
    <div
            ref={rootRef}
            id={props.id}
            className={`k-chip ${rootClass}`}
            style={rootStyle}
            tabIndex={!props.disabled ? props.tabIndex : -1}
            role='button'
            onClick={onClick}
            onKeyUp={onKeyUp}
            onBlur={onBlur}
            onFocus={onFocus}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseLeave}
            onKeyDown={onKeyDown}
            data-testid='k-chip'
    >
      <span className='k-chip__label'>
        {props.label && props.label}
        {props.children && props.children}
      </span>


      {props.closeable && (
        <KIcon
                    className='k-chip__close-icon'
                    icon='close'
                    color={closeIconColor}
                    size={closeIconSize}
                    onClick={onClose}
                    tabIndex={-1}
        />
      )}
    </div>
  );
});

KChip.displayName = 'KChip';
KChip.defaultProps = {
  closeable: false,
  tabIndex: 0,
};

export default memo(KChip);
