import {
  CSSProperties, forwardRef, KeyboardEvent, MouseEvent, Ref,
  useCallback, useId, useImperativeHandle, useRef, useMemo, memo,
} from 'react';
import { KIconProps, KIconRefs } from '@/components/icon/KIcon.interface';
import { initDisabled } from '@/common/util/variation';
import { getIcon } from '@/common/icons/icons';
import './KIcon.scss';


const KIcon = forwardRef(({ ...resProps }: KIconProps, ref: Ref<KIconRefs>) => {

  // region [Hooks]

  const { id, className, style }: KIconProps = { ...resProps };
  const { icon, size = 'medium', onClick }: KIconProps = { ...resProps };
  const { color, disabled }: KIconProps = { ...resProps };

  const inputRef = useRef<HTMLButtonElement>(null);
  const uniqueId = `k-icon-${useId()}`;
  const computedTabIndex = useMemo(() => (onClick ? 0 : -1), [onClick])

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
    if (typeof size === 'string') {
      clazz.push(`k-icon--${size}`);
    }
    if (onClick) {
      clazz.push('k-icon--clickable');
    }

    initDisabled(clazz, 'k-icon', disabled);

    return clazz.join(' ');
  }, [className, disabled, size, icon, onClick]);


  const rootStyle = useMemo((): CSSProperties => {
    const styles: CSSProperties = { ...style };

    if (typeof size === 'number') {
      styles.width = size;
      styles.height = size;
      styles.fontSize = size;
    }

    return styles;
  }, [size]);

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

  const onKeyDown = useCallback((e: KeyboardEvent<HTMLSpanElement>) => {
    if (e.key === 'enter' || e.key === ' ') {
      if (!disabled) {
        onClick?.(e);
      }
    }
  }, [disabled, onClick]);

  // endregion


  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <span ref={inputRef} id={id || uniqueId} className={`k-icon ${rootClass}`} style={rootStyle}
          role={onClick ? 'button' : 'img'} tabIndex={computedTabIndex} aria-label={`${icon} icon`}
          onClick={onClickIcon} onKeyDown={onKeyDown}>
      {currentIcon}
    </span>
  );
});

KIcon.displayName = 'KIcon';
export default memo(KIcon);
