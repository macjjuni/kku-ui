import { forwardRef, memo, useMemo } from 'react';
import { KModalFooterProps } from './KModal.interface';


const ModalFooter = forwardRef<HTMLDivElement, KModalFooterProps>((props, ref) => {

  // region [Hooks]
  const { children, className, align = 'center', ...restProps } = props;
  // endregion

  // region [Style]
  const rootClass = useMemo(() => {
    const clazz = ['k-modal__footer', `k-modal__footer--${align}`];
    if (className) { clazz.push(className); }
    return clazz.join(' ');
  }, [className]);
  // endregion


  return (
    <div ref={ref} {...restProps} className={rootClass}>
      {children}
    </div>
  );
});

const KModalFooter = memo(ModalFooter);
KModalFooter.displayName = 'KModalFooter';
ModalFooter.displayName = 'KModalFooter';

export default KModalFooter;
