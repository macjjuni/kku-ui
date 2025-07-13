import { forwardRef, memo, useImperativeHandle, useMemo, useRef } from 'react';
import { Switch as CoreSwitch } from '@/core/switch';
import { KSwitchProps, KSwitchRefs } from '@/components/actions/switch/KSwitch.interface';


const Switch = forwardRef<KSwitchRefs, KSwitchProps>((props, ref) => {

  // region [Hooks]
  const { className, value, disabled, size = 'medium', ...restProps } = props;
  const rootRef = useRef<HTMLButtonElement>(null);
  // endregion

  // region [Styles]
  const rootClass = useMemo(() => {

    const clazz = ['k-switch', `k-switch--${value ? 'on' : 'off'}`];

    if (className) { clazz.push(className); }
    if (size) { clazz.push(`k-switch--${size}`); }
    if (disabled) { clazz.push('k-switch--disabled'); }

    return clazz.join(' ');
  }, [value, className, size, disabled]);
  // endregion

  // region [APIs]
  useImperativeHandle(ref, () => ({
    toggle: () => rootRef.current?.click(),
  }));
  // endregion


  return (
    <CoreSwitch ref={rootRef} {...restProps} value={value} className={rootClass} disabled={disabled}>
      <span className="k-switch__toggle"/>
    </CoreSwitch>
  );
});

const KSwitch = memo(Switch);
Switch.displayName = 'KSwitch';
KSwitch.displayName = 'KSwitch';

export default KSwitch;
