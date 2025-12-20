import { Children, ForwardRefExoticComponent, isValidElement, memo, ReactElement, ReactNode, useCallback, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { useEscapeKey, useSafePortalContainer } from 'src/common/hooks';
import { KModalProps } from './KModal.interface';
import { ModalContext } from './KModal.context';
import { KModalMotion } from './KModal.motion';
import KModalHeader from './KModalHeader';
import KModalContent from './KModalContent';
import KModalFooter from './KModalFooter';
import { KBackdrop } from 'src/components';
import { Transition } from 'src/core';


const Modal = (props: KModalProps) => {

  // region [Hooks]

  const {
    isOpen, width, height, size = 'medium', setIsOpen, onClose, className, style,
    animation = 'fade', isOverlay = true, overlayOpacity, overlayClosable,
    escClosable = false, children, container,
  } = props;
  const defaultContainer = useSafePortalContainer(container);
  const [title, setTitle] = useState<string | null>(null);

  const modalMotion = useMemo(() => KModalMotion[animation], [animation]);

  if (setIsOpen === undefined && typeof onClose !== 'function') {
    throw new Error('You must provide at least one of "setIsOpen" or "onClose".');
  }

  // endregion


  // region [Style]
  const rootStyle = useMemo(() => ({ ...style, width, height }), [style, width, height]);

  const rootClass = useMemo(() => {
    const clazz = ['k-modal', `k-modal--${size}`];
    if (isOpen) {
      clazz.push('k-modal--open');
    }
    if (!isOpen) {
      clazz.push('k-modal--close');
    }
    if (className) {
      clazz.push(className);
    }
    return clazz.join(' ');
  }, [isOpen, size, className]);
  // endregion


  // region [Privates]
  const onCloseAction = useCallback(() => {
    onClose?.();
    setIsOpen?.(false);
  }, [onClose, setIsOpen]);
  // endregion


  // region [Events]
  const onClickOverlay = useCallback(() => {
    if (overlayClosable) {
      onCloseAction();
    }
  }, [overlayClosable, onCloseAction]);

  // endregion

  // region [Templates]
  const { modalHeader, modalContent, modalFooter } = useMemo(() => {
    let modalHeader: ReactElement | null = null;
    let modalContent: ReactElement | null = null;
    let modalFooter: ReactElement | null = null;

    Children.forEach(children, (child: ReactNode) => {
      if (!isValidElement(child)) return;
      if (child.type === KModalHeader) {
        modalHeader = child;
      }
      if (child.type === KModalContent) {
        modalContent = child;
      }
      if (child.type === KModalFooter) {
        modalFooter = child;
      }
    });

    return { modalHeader, modalContent, modalFooter };
  }, [children]);
  // endregion


  const ContextValue = useMemo(() => ({
    isOpen, title, setTitle, onCloseAction,
  }), [isOpen, title, onCloseAction]);

  useEscapeKey(() => {
    if (escClosable) {
      onCloseAction();
    }
  });


  if (!defaultContainer) {
    return null;
  }

  return (
    <>
      {
        createPortal(
          <ModalContext.Provider value={ContextValue}>
            <Transition isOpen={isOpen} className={rootClass} style={rootStyle} {...modalMotion}
                        role="dialog" aria-modal="true" aria-label={title ?? undefined}>
              {modalHeader}
              {modalContent}
              {modalFooter}
            </Transition>
          </ModalContext.Provider>,
          defaultContainer,
        )
      }
      {isOverlay && <KBackdrop isOpen={isOpen} onClick={onClickOverlay} opacity={overlayOpacity}/>}
    </>
  );
};

interface KModalNamespace extends ForwardRefExoticComponent<KModalProps> {
  Header: typeof KModalHeader;
  Content: typeof KModalContent;
  Footer: typeof KModalFooter;
}

const KModal = memo(Modal) as unknown as KModalNamespace;
KModal.displayName = 'KModal';
Modal.displayName = 'KModal';


KModal.Header = KModalHeader;
KModal.Content = KModalContent;
KModal.Footer = KModalFooter;

export default KModal;
