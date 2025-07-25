import { forwardRef, memo, useMemo } from 'react';
import { KButton, KButtonRefs } from '@/components';
import { KToggleButtonProps } from "./KToggleButton.interface";


const ToggleButton = forwardRef<KButtonRefs, KToggleButtonProps>((props, ref) => {

  // region [Hooks]
  const { value, className, ...restProps } = props;

  // endregion

  // region [Styles]
  const rootClass = useMemo(() => {
    const clazz = ['k-toggle-button'];
    if (className) { clazz.push(className) }
    return clazz.join(' ');
  }, [className]);

  // endregion


  return (
    <KButton ref={ref} className={rootClass} {...restProps} />
  );
});

const KToggleButton = memo(ToggleButton);
ToggleButton.displayName = 'KToggleButton';
KToggleButton.displayName = 'KToggleButton';

export default KToggleButton;
