import { CSSProperties, forwardRef, memo, Ref, useCallback, useImperativeHandle, useMemo, useRef } from 'react';
import { initDisabled, initSize } from '@/common/util/variation';
import { KSwitchProps, KSwitchRefs } from '@/components/input/switch/KSwitch.interface';

const KSwitch = forwardRef((props: KSwitchProps, ref: Ref<KSwitchRefs>) => {

  // region [Hooks]

  const inputRef = useRef<HTMLButtonElement>(null);

  useImperativeHandle(ref, () => ({
    toggle() { inputRef.current?.click(); },
  }));

  // endregion


  // region [Styles]

  const rootClass = useMemo(() => {

    const clazz = [];

    if (props.className) { clazz.push(props.className); }
    if (props.value) { clazz.push('k-switch--on'); } else { clazz.push('k-switch--off'); }

    initSize(clazz, 'k-switch', props.size, props.large, props.medium, props.small);
    initDisabled(clazz, 'k-switch', props.disabled);

    return clazz.join(' ');
  }, [props.value, props.className, props.size, props.small, props.medium, props.large, props.disabled]);


  const rootStyle = useMemo(() => {

    const style: CSSProperties = { ...props.style };

    return style;
  }, [props.style]);


  const backgroundStyle = useMemo(() => {

    return props.bgColor ? { background: props.bgColor } : {};
  }, [props.bgColor]);


  const toggleColor = useMemo((): CSSProperties => {

    return { backgroundColor: props.toggleColor };
  }, [props.toggleColor]);

  // endregion


  // region [Events]

  const onClick = useCallback(() => {
    props.onChange(!props.value);
  }, [props.onChange, props.value]);

  // endregion


  // region [Life Cycles]

  // endregion


  // region [Template]

  // endregion


  return (
  // eslint-disable-next-line react/button-has-type
    <button
            ref={inputRef}
            id={props.id}
            role='switch'
            style={rootStyle}
            aria-checked={props.value}
            aria-label='switch'
            disabled={props.disabled}
            tabIndex={!props.disabled ? 0 : -1}
            className={`k-switch ${rootClass}`}
            onClick={onClick}
            data-testid='k-switch'
    >
      <span
          className='k-switch__active-background'
          style={backgroundStyle}
          data-testid='k-switch-active-background'
      />
      <span className='k-switch__default-background' />
      <span className='k-switch__toggle' style={toggleColor} data-testid='k-switch-toggle' />
    </button>
  );
});


KSwitch.defaultProps = {};
KSwitch.displayName = 'KSwitch';

export default memo(KSwitch);
