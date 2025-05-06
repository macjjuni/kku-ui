import { memo, useCallback, useEffect, useMemo, useRef } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'motion/react';
import { KModalMotion } from '@/components/modal/KModal.motion';
import { KModalProps } from '@/components/modal/KModal.interface';
import { useCleanId } from '@/common/hook/useCleanId';
import { KIcon } from '@/components';
import './KModal.scss';


const Modal = ({ ...restProps }: KModalProps) => {

  // region [Hooks]

  const { id, style, className } = { ...restProps };
  const { content, footer } = { ...restProps };
  const { isOpen, title, width, size = 'medium', setIsOpen, onClose } = { ...restProps };
  const { headerClass = '', contentClass, footerClass, animation = 'fade' } = { ...restProps };
  const { isOverlay = true, overlayOpacity, overlayClosable, escClosable = false }: KModalProps = { ...restProps };

  const modalWrapperRef = useRef<HTMLDivElement | null>(null);
  const headerTitleId = useCleanId('k-modal-header-title');
  const modalMotion = useMemo(() => KModalMotion[animation], [animation]);

  if (setIsOpen === undefined && typeof onClose !== 'function') {
    throw new Error('You must provide at least one of "setIsOpen" or "onClose".');
  }

  // endregion


  // region [Style]

  const rootClass = useMemo(() => {
    const clazz = ['k-modal'];

    if (isOpen) {
      clazz.push('k-modal__container--open');
    }
    if (!isOpen) {
      clazz.push('k-modal__container--close');
    }

    return clazz.join(' ');
  }, [isOpen]);

  const containerClass = useMemo(() => {

    const clazz = ['k-modal__container'];
    
    clazz.push(`k-modal__container--${size}`);

    if (className) { clazz.push(className); }
    if (!title) { clazz.push('k-modal__container--no-title'); }

    return clazz.join(' ');
  }, [size, title]);

  const overlayClass = useMemo(() => {

    const clazz = ['k-modal__overlay'];

    if (isOverlay) {
      clazz.push('k-modal__overlay--active');
    } else {
      clazz.push('k-modal__overlay--transparent');
    }

    return clazz.join(' ');
  }, [isOverlay]);

  // endregion


  // region [Privates]

  const closeModal = useCallback(() => {
    setIsOpen?.(false);
    onClose?.();
  }, [onClose]);

  // endregion


  // region [Events]

  const onCloseModal = useCallback(() => {
    closeModal();
  }, [closeModal]);

  const onClickOverlay = useCallback(() => {
    if (overlayClosable) {
      closeModal();
    }
  }, [onClose, overlayClosable]);

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  }, [closeModal]);

  const addKeyEventListener = useCallback(() => {
    if (escClosable) {
      window.addEventListener('keydown', onKeyDown);
    }
  }, [escClosable]);

  const removeKeyEventListener = useCallback(() => {
    if (escClosable) {
      window.addEventListener('keydown', onKeyDown);
    }
  }, [escClosable]);

  // endregion


  // region [Life Cycles]

  useEffect(() => {
    if (isOpen) {
      addKeyEventListener();
    } else {
      onCloseModal();
    }

    return () => removeKeyEventListener();
  }, [isOpen]);

  // endregion


  // region [Templates]

  const modalHeader = useMemo(() => (
    title
      ? (
        <div className={`k-modal__container__header ${headerClass}`} data-testid='k-modal__header'>
          <h1 id={headerTitleId} className='k-modal__container__header__text'>{title}</h1>
          <KIcon className='k-modal__container__header__close-button' icon='close' size={18} onClick={onCloseModal}/>
        </div>
      ) : null
  ), [headerClass, title, onCloseModal]);

  const modalContent = useMemo(() => (
    <section className={`k-modal__container__content${contentClass ? ` ${contentClass}` : ''}`}
             aria-labelledby={headerTitleId} data-testid='k-modal__container__content'>
      {content}
    </section>
  ), [content, headerTitleId, contentClass]);

  const modalFooter = useMemo(() => (
    footer && (
      <div className={`k-modal__container__footer${footerClass ? ` ${footerClass}` : ''}`} data-testid='k-modal__footer'>
        {footer}
      </div>
    )
  ), [footer, footerClass]);

  // endregion

  return (
    createPortal(
      <AnimatePresence>
        {isOpen && (
          <motion.div ref={modalWrapperRef} id={id} className={rootClass} style={style} role='dialog' {...modalMotion}
                      aria-modal='true' aria-label={`${title}-modal-wrapper`} data-testid='k-modal'>

            <div className={containerClass} style={{ width }} data-testid='k-modal-container'>
              {modalHeader}
              {modalContent}
              {modalFooter}
            </div>

            <div className={overlayClass} onClick={onClickOverlay} style={{ opacity: overlayOpacity }}
                 aria-hidden='true' data-testid='k-modal-overlay'/>

          </motion.div>
        )}
      </AnimatePresence>,
      document.body,
    )
  );
};

const KModal = memo(Modal);
Modal.displayName = 'KModal';
KModal.displayName = 'KModal';

export default KModal;
