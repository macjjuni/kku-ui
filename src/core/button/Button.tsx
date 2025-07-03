import { forwardRef, memo, useMemo } from 'react';
import { ButtonProps } from './Button.interface';

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {

  const { type, label, disabled, children, ...rest } = props;

  if (label && children) {
    throw new Error('Button 컴포넌트에 label과 children을 동시에 넣을 수 없습니다.');
  }

  const AriaLabel = useMemo(() => (!children && label ? label : undefined), [children, label]);
  const TabIndex = useMemo(() => (disabled ? -1 : 0), [disabled])

  return (
    // eslint-disable-next-line react/button-has-type
    <button ref={ref} type={type ?? 'button'} {...rest} disabled={disabled}
            aria-label={AriaLabel} aria-disabled={disabled} tabIndex={TabIndex}>
      {label || children}
    </button>
  );
});

const MemoizedButton = memo(Button);
Button.displayName = 'Button';
MemoizedButton.displayName = 'Button';

export default MemoizedButton;