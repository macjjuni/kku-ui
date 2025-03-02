/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import {
  CSSProperties,
  forwardRef,
  KeyboardEvent,
  MouseEvent,
  Ref,
  useCallback,
  useId,
  useImperativeHandle,
  useRef,
  useMemo, memo,
} from 'react';
import { KIconProps, KIconRefs } from '@/components/icon/KIcon.interface';
import { initDisabled } from '@/common/util/variation';
import { getIcon } from '@/common/base/icon';


const KIcon = forwardRef(({ ...resProps }: KIconProps, ref: Ref<KIconRefs>) => {

  // region [Hooks]

  const {
    id,
    className,
    style,
    icon,
    size = 24,
    onClick,
    disabled,
    tabIndex = 0,
    color,
    clickable,
  }: KIconProps = { ...resProps };
  const inputRef = useRef<HTMLButtonElement>(null);
  const uniqueId = `k-icon-${useId()}`;

  if (!icon) {
    throw Error('Error: icon is required and must be provided.');
  }

  useImperativeHandle(ref, () => ({
    click: () => {
      inputRef.current?.click();
    },
  }));

  // endregion


  // region [Styles]

  const rootClass = useMemo(() => {
    const clazz = [];

    if (className) {
      clazz.push(className);
    }
    if (clickable) {
      clazz.push('k-icon--clickable');
    }
    if (icon) {
      clazz.push(`k-icon--${icon}`);
    }

    initDisabled(clazz, 'k-icon', disabled);

    return clazz.join(' ');
  }, [className, clickable, disabled, icon]);


  const rootStyle = useMemo(() => {

    const styles: CSSProperties = style || {};

    if (typeof size === 'number') {
      styles.width = `${size}px`;
      styles.height = `${size}px`;
      styles.fontSize = `${size}px`;
    }
    if (typeof size === 'string') {
      styles.width = size;
      styles.height = size;
      styles.fontSize = size;
    }

    if (onClick) {
      styles.cursor = 'pointer';
    }

    return styles;
  }, [size, onClick]);

  // endregion


  // region [Privates]

  const currentIcon = useMemo(() => {
    const targetIcon = getIcon(icon, color);

    if (!targetIcon) {
      throw Error(`Not Found icon. icon: ${icon}`);
    }
    return targetIcon;
  }, [icon, color]);

  // endregion


  // region [Events]

  const onClickIcon = useCallback((e: MouseEvent<HTMLSpanElement>) => {
    if (!disabled) {
      onClick?.(e);
    }
  }, [onClick, disabled]);

  const onKeyUp = useCallback((e: KeyboardEvent<HTMLSpanElement>) => {
    if (e.key === 'enter' || e.key === ' ') {
      if (!disabled) {
        onClick?.(e);
      }
    }
  }, [disabled, onClick]);

  // endregion


  return (
    <span ref={inputRef} id={id || uniqueId} className={`k-icon ${rootClass}`}
          style={rootStyle} data-testid='k-icon' onClick={onClickIcon} onKeyUp={onKeyUp}
          role={onClick ? 'button' : 'img'}
          tabIndex={onClick ? tabIndex : -1}>
      {currentIcon}
    </span>
  );
});

KIcon.displayName = 'KIcon';
export default memo(KIcon);
