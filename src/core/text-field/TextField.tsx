import { forwardRef, memo, useMemo } from 'react';
import { TextFieldProps } from './TextField.interface';

const TextField = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
  const { label, disabled, ...rest } = props;

  const AriaLabel = useMemo(() => (label || undefined), [label]);

  return (
    <input ref={ref} {...rest} disabled={disabled} aria-label={AriaLabel} aria-disabled={disabled} />
  );
});

const MemoizedTextField = memo(TextField);
TextField.displayName = 'TextField';
MemoizedTextField.displayName = 'TextField';

export default MemoizedTextField;