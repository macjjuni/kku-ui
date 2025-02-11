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
  useMemo,
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

    initDisabled(clazz, 'k-icon', disabled);

    return clazz.join(' ');
  }, []);


  const rootStyle = useMemo(() => {

    const styles: CSSProperties = style || {};

    if (color) {
      styles.fill = color;
      styles.color = color;
    }

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
  }, [color, size, onClick]);

  // endregion


  // region [Privates]

  const currentIcon = useMemo(() => {
    const targetIcon = getIcon(icon);

    if (!targetIcon) {
      throw Error('Not Found icon');
    }
    return targetIcon;
  }, [icon]);

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

export default KIcon;
