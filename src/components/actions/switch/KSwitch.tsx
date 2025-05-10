import { forwardRef, memo, Ref, useCallback, useId, useImperativeHandle, useMemo, useRef } from 'react';
import { KSwitchProps, KSwitchRefs } from '@/components/actions/switch/KSwitch.interface';
import './KSwitch.scss';

const Switch = forwardRef(({ ...restProps }: KSwitchProps, ref: Ref<KSwitchRefs>) => {

  // region [Hooks]

  const uniqueId = `k-switch${useId()}`;
  const { id = uniqueId, style, className }: KSwitchProps = { ...restProps };
  const { value, disabled, size = 'medium' }: KSwitchProps = { ...restProps };
  const { onChange, onClick }: KSwitchProps = { ...restProps };
  const rootRef = useRef<HTMLDivElement | null>(null);

  // endregion


  // region [Styles]

  const rootClass = useMemo(() => {

    const clazz = ['k-switch'];

    if (className) {
      clazz.push(className);
    }
    if (value) {
      clazz.push('k-switch--on');
    } else {
      clazz.push('k-switch--off');
    }
    if (size) {
      clazz.push(`k-switch--${size}`);
    }
    if (disabled) {
      clazz.push('k-switch--disabled');
    }

    return clazz.join(' ');
  }, [value, className, size, disabled]);


  const rootStyle = useMemo(() => ({ ...style }), [style]);

  // endregion


  // region [Events]

  const onClickSwitch = useCallback(() => {
    onChange(!value);
    onClick?.();
  }, [onChange, value]);

  // endregion


  // region [Life Cycles]

  // endregion


  // region [APIs]

  useImperativeHandle(ref, () => ({
    toggle() {
      onClickSwitch();
    },
  }));

  // endregion


  return (
    <div ref={rootRef} className={rootClass}>
      <button id={id} type='button' role='switch' style={rootStyle} aria-checked={value} aria-label='switch'
              disabled={disabled} className='k-switch__input' onClick={onClickSwitch}/>
      <label htmlFor={id} className='k-switch__label' tabIndex={disabled ? -1 : 0}>
        <span className='k-switch__label__ball'/>
      </label>
    </div>
  );
});

const KSwitch = memo(Switch);
Switch.displayName = 'KSwitch';
KSwitch.displayName = 'KSwitch';

export default KSwitch;
