// eslint-disable-next-line max-len
import {
  memo,
  useMemo,
  useCallback,
  useRef,
  forwardRef,
  useImperativeHandle,
  Ref,
  MouseEvent,
  KeyboardEvent,
  MutableRefObject,
  CSSProperties, useState,
} from 'react';
import { initSize, initVariant, initDisabled } from '@/common/util/variation.ts';
import useRipple from '@/common/hook/useRipple.ts';
import './TButton.scss';
import { KButtonProps, KButtonRefs } from '@/components';
import colorUtil from '@/common/util/color.ts';
import { getIdentityName, baseName } from '@/common/base/base.ts';

const identity = getIdentityName('button');


const KButton = forwardRef((props: KButtonProps, ref: Ref<KButtonRefs>) => {

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

      if (props.className) { clazz.push(props.className); }
      if (isLoad) { clazz.push(`${identity}--loading`); }

      initVariant(clazz, identity, props.variant, props.primary, props.outlined);
      initSize(clazz, identity, props.size, props.large, props.medium, props.small);
      initDisabled(clazz, identity, props.disabled);

      return clazz.join(' ');
    },
    [isLoad, props.className, props.variant, props.primary, props.outlined, props.large, props.medium, props.small, props.size],
  );

  const rootStyle = useMemo(() => {
    const styles: CSSProperties = props.style || {};

    if (props.variant === 'primary' || props.primary) {
      if (props.color) {
        styles.background = props.color;
        styles.borderColor = props.color;
      }
    } else if (props.color) {
      styles.color = props.color;
      styles.borderColor = props.color;
    }


    return styles;
  }, [props.style, props.color]);

  const loadStyle = useMemo(() => {
    if (!isLoad) return {};

    if (props.color) {
      return { border: '3px solid #fff', borderBottomColor: props.color || '#fff' };
    }
  }, [isLoad]);

  // endregion


  // region [Events]

  const onMouseDown = useCallback((e: MouseEvent<HTMLButtonElement>): void => {

    if (!props.disabled) {
      ripple?.register(e);
    }
  }, [props.disabled, ripple]);

  const onMouseUp = useCallback((e: MouseEvent<HTMLButtonElement>): void => {

    ripple.remove();
    if (!props.disabled && !isLoad && props?.onClick) {
      props.onClick(e);
    }
  }, [props, ripple]);

  const onMouseEnter = useCallback((): void => {

    if ((props.variant === 'primary' || props.primary) && props.color) {
      rootRef.current.style.background = colorUtil.shadeColor(props.color, 20);
    }
  }, [props.variant, props.primary, props.color]);

  const onMouseLeave = useCallback((): void => {

    if (ripple.status === 'on') { ripple.remove(); }
    if ((props.variant === 'primary' || props.primary) && props.color) {
      rootRef.current.style.background = props.color;
    }
  }, [props.variant, props.primary, props.color, ripple]);

  const onKeyDown = useCallback((e: KeyboardEvent<HTMLButtonElement>): void => {

    if ((e.key === 'Enter' || e.key === ' ') && ripple.status === 'off') {
      ripple?.register(e);
    }
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
                && (props.label && (
                  <span className={`${identity}__content`}>
                    {props.children || props.label}
                  </span>
                ))
      }
      {
        isLoad && (
          <span className={`${identity}__loading__container`}>
            <span style={loadStyle} className={`${baseName}-spinner--loading`} />
          </span>
        )
      }
    </button>
  );
});

KButton.defaultProps = {};
KButton.displayName = 'KButton';

export default memo(KButton);
