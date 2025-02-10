import { CSSProperties, forwardRef, Ref, useCallback, useImperativeHandle, useMemo, useRef } from 'react';
import { initDisabled, initSize } from '@/common/util/variation';
import { KSwitchProps, KSwitchRefs } from '@/components/input/switch/KSwitch.interface';


const KSwitch = forwardRef(({ ...restProps }: KSwitchProps, ref: Ref<KSwitchRefs>) => {

  // region [Hooks]

  const { id, style, className, toggleColor, bgColor, onChange, disabled, value, size }:KSwitchProps = { ...restProps };
  const inputRef = useRef<HTMLButtonElement | null>(null);

  useImperativeHandle(ref, () => ({
    toggle() {
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
    if (value) {
      clazz.push('k-switch--on');
    } else {
      clazz.push('k-switch--off');
    }

    initSize(clazz, 'k-switch', size);
    initDisabled(clazz, 'k-switch', disabled);

    return clazz.join(' ');
  }, [value, className, size, disabled]);


  const rootStyle = useMemo(() => ({ ...style }), [style]);
  const backgroundStyle = useMemo(() => (bgColor ? { background: bgColor } : {}), [bgColor]);
  const toggleColorStyle = useMemo((): CSSProperties => ({ backgroundColor: toggleColor }), [toggleColor]);

  // endregion


  // region [Events]

  const onClick = useCallback(() => {
    onChange(!value);
  }, [onChange, value]);

  // endregion


  // region [Life Cycles]

  // endregion


  // region [Template]

  // endregion


  return (
    <button ref={inputRef} id={id} role='switch' style={rootStyle}
            type='button' aria-checked={value} aria-label='switch' disabled={disabled}
            tabIndex={!disabled ? 0 : -1} className={`k-switch ${rootClass}`} onClick={onClick}
            data-testid='k-switch'>

      <span className='k-switch__active-background' style={backgroundStyle} data-testid='k-switch-active-background'/>
      <span className='k-switch__default-background'/>
      <span className='k-switch__toggle' style={toggleColorStyle} data-testid='k-switch-toggle'/>

    </button>
  );
});


KSwitch.displayName = 'KSwitch';
export default KSwitch;
