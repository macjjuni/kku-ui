import { forwardRef, memo, useCallback, useEffect, useMemo } from 'react';
import { KModalHeaderProps } from './KModal.interface';
import { useModal } from 'legacy/feedback/modal/KModal.context';
import { KIcon } from 'src/components';


const ModalHeader = forwardRef<HTMLDivElement, KModalHeaderProps>((props, ref) => {

  // region [Hooks]
  const { title, children, className, ...restProps } = props;
  const { setTitle, onCloseAction } = useModal();
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

  // region [Templates]
  const CloseButton = useMemo(() => {
    return (<KIcon icon="close" onClick={onCloseAction} size={16} className="k-modal__header__close"/>);
  }, [onCloseAction]);
  // endregion

  // region [Life Cycles]
  useEffect(() => {
    initializeModalTitle();
  }, [title, children]);
  // endregion

  return (
    <div ref={ref} {...restProps} className={rootClass}>
      {title ?? children}
      {CloseButton}
    </div>
  );
});

const KModalHeader = memo(ModalHeader);
KModalHeader.displayName = 'KModalHeader';
ModalHeader.displayName = 'KModalHeader';

export default KModalHeader;
