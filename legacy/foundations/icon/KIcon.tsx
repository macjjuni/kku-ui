import {
  CSSProperties,
  forwardRef,
  KeyboardEvent,
  memo,
  MouseEvent,
  Ref,
  useCallback,
  useId,
  useImperativeHandle,
  useMemo,
  useRef,
} from 'react';
import { KIconProps, KIconRefs } from 'legacy/foundations/icon/KIcon.interface';
import { getIcon } from 'src/common/icons/icons';


const Icon = forwardRef((props: KIconProps, ref: Ref<KIconRefs>) => {

  // region [Hooks]

  const {
    id, className, style, icon, size = 'medium',
    onClick, color, disabled, ...restProps
  }: KIconProps = props;

  const inputRef = useRef<HTMLButtonElement>(null);
  const uniqueId = `k-icon-${useId()}`;
  const computedTabIndex = useMemo(() => (onClick ? 0 : undefined), [onClick]);

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
    if (disabled) {
      clazz.push(`k-icon--${disabled}`);
    }

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
          onClick={onClickIcon} onKeyDown={onKeyDown} {...restProps}>
      {currentIcon}
    </span>
  );
});

const KIcon = memo(Icon);
KIcon.displayName = 'KIcon';
Icon.displayName = 'KIcon';

export default KIcon;
