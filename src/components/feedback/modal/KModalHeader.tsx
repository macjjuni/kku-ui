import { forwardRef, memo, useCallback, useEffect, useMemo } from 'react';
import { KModalHeaderProps } from './KModal.interface';
import { useModal } from '@/components/feedback/modal/KModal.context';


const ModalHeader = forwardRef<HTMLDivElement, KModalHeaderProps>((props, ref) => {

  // region [Hooks]
  const { title, children, className, ...restProps } = props;
  const { setTitle } = useModal();
  // endregion

  // region [Style]
  const rootClass = useMemo(() => {
    const clazz = ['k-modal__header'];
    if (className) {
      clazz.push(className);
    }
    return clazz.join(' ');
  }, [className]);
  // endregion

  // region [Privates]
  const initializeModalTitle = useCallback(() => {
    if (typeof title === 'string') {
      setTitle(title);
    }
    if (typeof children === 'string') {
      setTitle(children);
    }
  }, [title, children]);
  // endregion

  useEffect(() => {
    initializeModalTitle();
  }, [title, children]);

  return (
    <div ref={ref} {...restProps} className={rootClass}>
      {title ?? children}
    </div>
  );
});

const KModalHeader = memo(ModalHeader);
KModalHeader.displayName = 'KModalHeader';
ModalHeader.displayName = 'KModalHeader';

export default KModalHeader;
