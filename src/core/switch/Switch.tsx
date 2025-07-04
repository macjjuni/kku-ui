import { forwardRef, memo, MouseEvent, useCallback, useMemo } from 'react';
import { SwitchProps } from './Switch.interface';

const Switch = forwardRef<HTMLButtonElement, SwitchProps>((props, ref) => {
  // region [Hooks]
  const {
    value,
    disabled,
    onClick,
    onChange,
    children,
    ...restProps
  } = props;
  const tabIndex = useMemo(() => (disabled ? -1 : 0), [disabled])
  // endregion

  // region [Events]
  const onClickRoot = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
    onChange?.(!value);
  }, [value, onChange, onClick])
  // endregion

  return (
    <button ref={ref} type="button" role="switch" {...restProps} aria-checked={value} aria-label="switch"
            disabled={disabled} aria-disabled={disabled} tabIndex={tabIndex} onClick={onClickRoot}>
      {children}
    </button>
  );
});

Switch.displayName = 'Switch';

const MemoizedSwitch = memo(Switch);
MemoizedSwitch.displayName = 'Switch';

export default MemoizedSwitch;
