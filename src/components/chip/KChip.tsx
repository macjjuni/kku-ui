import { MouseEvent, KeyboardEvent, FocusEvent, forwardRef, memo, Ref, useCallback,
  useImperativeHandle, useMemo, useRef } from 'react';
import { KChipProps, KChipRef } from '@/components/chip/KChip.interface';
import { initDisabled, initSize, initVariant } from '@/common/util/variation';
import { KIcon } from '@/components';


const KChip = forwardRef((props: KChipProps, ref: Ref<KChipRef>) => {

  if (props.label && props.children) {
    throw Error('Error: label or children attributes cannot be duplicated.');
  }

  // region [Hooks]

  const rootRef = useRef<HTMLDivElement>(null);

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

    initVariant(clazz, 'k-chip', props.variant, props.primary, props.outlined);
    initSize(clazz, 'k-chip', props.size, props.large, props.medium, props.small);
    initDisabled(clazz, 'k-chip', props.disabled);

    return clazz.join(' ');
  }, [props.className, props.size, props.disabled, props.large, props.medium, props.small,
    props.variant, props.primary, props.outlined]);

  const rootStyle = useMemo(() => {

    const style = props.style ? props.style : {};

    if (props.color && (props.variant === 'primary' || props.primary)) {
      style.background = props.color;
    }
    if (props.color && (props.variant === 'outlined' || props.outlined)) {
      style.borderColor = props.color;
      style.color = props.color;
    }
    if (props.fontColor) { style.color = props.fontColor; }

    return style;
  }, [props.style, props.color, props.variant, props.primary, props.outlined]);

  const closeIconColor = useMemo(() => {

    if (props.variant && (props.primary || props.outlined)) {
      throw Error('Error: variant or primary or outlined attributes cannot be duplicated.');
    }
    // scss module 로 색상 정의 해야함!
    if (props.variant === 'primary' || props.primary) {
      return '#ffffff';
    }

  }, [props.color, props.primary, props.outlined, props.variant]);

  const closeIconSize = useMemo(() => {

    if (props.size && (props.large || props.medium || props.small)) {
      throw Error('Error: size and large or medium or small attributes cannot be duplicated.');
    }
    if (props.size === 'large' || props.large) { return 22; }
    if (props.size === 'medium' || props.medium) { return 20; }
    if (props.size === 'small' || props.small) { return 18; }

  }, [props.size, props.large, props.medium, props.small]);

  // endregion


  // region [Events]

  const onClick = useCallback((e: MouseEvent<HTMLDivElement>) => {
    if (props.onClick) { props.onClick(e); }
  }, []);

  const onKeyUp = useCallback((e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === ' ' || e.key === 'Enter') { if (props.onClick) { props.onClick(e); } }
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

  // endregion


  return (
    <div
        ref={rootRef}
        id={props.id}
        className={`k-chip ${rootClass}`}
        style={rootStyle}
        tabIndex={0}
        role='button'
        onClick={onClick}
        onKeyUp={onKeyUp}
        onBlur={onBlur}
        onFocus={onFocus}
        data-testid='k-chip'
    >
      {props.label && props.label}
      {props.children && props.children}

      {props.closeable && (
        <KIcon icon='close' color={closeIconColor} size={closeIconSize} onClick={onClose} />
      )}
    </div>
  );
});

KChip.displayName = 'KChip';
KChip.defaultProps = {
  closeable: false,
};

export default memo(KChip);
