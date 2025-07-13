import { forwardRef, memo, useMemo } from 'react';
import { KModalContentProps } from './KModal.interface';


const ModalContent = forwardRef<HTMLDivElement, KModalContentProps>((props, ref) => {

  // region [Hooks]
  const { children, className, ...restProps } = props;
  // endregion


  // region [Style]
  const rootClass = useMemo(() => {
    const clazz = ['k-modal__content'];
    if (className) {
      clazz.push(className);
    }
    return clazz.join(' ');
  }, [className]);
  // endregion


  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
    <div ref={ref} {...restProps} className={rootClass} tabIndex={0}>
      {children}
    </div>
  );
});

const KModalContent = memo(ModalContent);
KModalContent.displayName = 'KModalContent';
ModalContent.displayName = 'KModalContent';

export default KModalContent;
