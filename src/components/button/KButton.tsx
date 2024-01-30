// eslint-disable-next-line max-len
import { memo, useMemo, useCallback, useRef, forwardRef, useImperativeHandle, Ref, MouseEvent, KeyboardEvent, MutableRefObject } from 'react';
import { initSize, initVariant, initDisabled } from '@/common/util/variation.ts';
import useRipple from '@/common/hook/useRipple.ts';
import './TButton.scss';
import { KButtonProps, KButtonRefs } from '@/components';

const KButton = forwardRef((props: KButtonProps, ref: Ref<KButtonRefs>) => {

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

    return props.style || {};
  }, [props.style]);


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

  const onMouseLeave = useCallback((): void => {

    if (ripple.status === 'on') { ripple.remove(); }
  }, [ripple]);

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
            id={props.id}
            className={`k-button ${rootClass}`}
            style={rootStyle}
            type='button'
            onMouseDown={onMouseDown}
            onMouseLeave={onMouseLeave}
            onMouseUp={onMouseUp}
            onKeyDown={onKeyDown}
            onKeyUp={onKeyUp}
            ref={rootRef}
    >
      {
        (props.label || props.children)
                && (
                  <>
                    {props.label && <div className='k-button-content'>{props.label}</div>}
                    {props.children && props.children}
                  </>
                )
      }
    </button>
  );
});

KButton.defaultProps = {};
KButton.displayName = 'KButton';

export default memo(KButton);
