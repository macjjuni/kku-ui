import { forwardRef, memo, useMemo } from 'react';
import { KSpinnerProps } from '@/components';


const Spinner = forwardRef<HTMLDivElement, KSpinnerProps>((props, ref) => {

  // region [Hooks]
  const { className, style, size = 'medium', color = 'currentColor', ...restProps } = props;
  // endregion


  // region [Styles]
  const rootClass = useMemo(() => {
    const clazz = ['k-spinner'];

    if (className) {
      clazz.push(className);
    }
    if (typeof size === 'string') {
      clazz.push(`k-spinner--${size}`);
    }

    return clazz.join(' ');
  }, [className, size]);

  const rootStyle = useMemo(() => {
    const styles = { ...style };

    if (typeof size === 'number') {
      styles.width = size;
      styles.height = size;
    }
    return styles;
  }, [style]);

  // endregion

  return (
    <div ref={ref} {...restProps} className={rootClass} style={rootStyle} role="status" aria-live="polite"
         aria-label="Loading">
      <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" className="k-spinner__body" xmlns="http://www.w3.org/2000/svg">
        <circle className="k-spinner__body__circle" cx="12" cy="12" r="10" fill="none" stroke={color}
                strokeWidth="3" strokeLinecap="round" strokeDasharray="60" strokeDashoffset="15"/>
      </svg>
    </div>
  );
});


const KSpinner = memo(Spinner);
Spinner.displayName = 'KSpinner';
KSpinner.displayName = 'KSpinner';

export default KSpinner;