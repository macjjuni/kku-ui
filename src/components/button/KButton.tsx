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
  CSSProperties,
} from 'react';
import { initSize, initVariant, initDisabled } from '@/common/util/variation.ts';
import useRipple from '@/common/hook/useRipple.ts';
import './TButton.scss';
import { KButtonProps, KButtonRefs } from '@/components';
import colorUtil from '@/common/util/color.ts';

const KButton = forwardRef((props: KButtonProps, ref: Ref<KButtonRefs>) => {

  // region [Hooks]

  const rootRef = useRef() as MutableRefObject<HTMLButtonElement>;
  const ripple = useRipple(rootRef);

  useImperativeHandle(ref, () => ({

    focus() { rootRef.current?.focus(); },
    click() { if (!props.disabled && props.onClick) { props.onClick(); } },
  }));


  const rootClass = useMemo(
    () => {

      const clazz = [];

      if (props.className) { clazz.push(props.className); }

      initSize(clazz, props.size, props.large, props.medium, props.small);
      initVariant(clazz, props.variant, props.primary, props.outlined);
      initDisabled(clazz, props.disabled);

      return clazz.join(' ');
    },
    [props.className, props.variant, props.primary, props.outlined, props.large, props.medium, props.small, props.size],
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

  // endregion


  // region [Events]

  const onMouseDown = useCallback((e: MouseEvent<HTMLButtonElement>): void => {

    if (!props.disabled) {
      ripple?.register(e);
    }
  }, [props.disabled, ripple]);

  const onMouseUp = useCallback((e: MouseEvent<HTMLButtonElement>): void => {

    ripple.remove();
    if (!props.disabled && props?.onClick) {
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
    >
      {
        props.children
          ? props.children
          : (props.label && <span className='k-button-label'>{props.label}</span>)
      }


    </button>
  );
});

KButton.defaultProps = {};
KButton.displayName = 'KButton';

export default memo(KButton);
