import { CSSProperties, memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { initSize } from '@/common/util/variation';
import { KModalProps } from '@/components/modal/KModal.interface';

const rootTestId = 'k-modal-test-id';
const headerTestId = 'k-modal__header-test-id';
const containerTestId = 'k-modal__container-test-id';
const closeButtonTestId = 'k-modal__close-button-test-id';


function KModal({
  id, style, isOpen, onClose, title, content, footer, size, large, medium, small,
  className, isOverlay = true, overlayOpacity, overlayClosable, rounded, borderRadius = '8px',
  headerClass, contentClass, footerClass, animation = 'updown', escClosable = false,
}: KModalProps) {


  // region [Hooks]

  const modalWrapperRef = useRef<HTMLDivElement | null>(null);
  const [isOpenModal, setIsOpenModal] = useState(false);

  // endregion


  // region [Style]

  const rootClass = useMemo(() => {

    const clazz: string[] = [];

    initSize(clazz, 'k-modal__container', size, large, medium, small);

    if (className) { clazz.push(className); }
    if (animation) { clazz.push(`k-modal__container--${animation}`); }

    return clazz.join(' ');
  }, [size, animation]);

  const overlayClass = useMemo(() => {

    if (isOverlay) { return 'k-modal-wrapper__overlay--active'; }

    return 'k-modal-wrapper__overlay--transparent';
  }, [isOverlay]);

  const containerStyle = useMemo(() => {

    const styles: CSSProperties = {};

    if (rounded) { styles.borderRadius = borderRadius; }

    return styles;
  }, [rounded, borderRadius]);

  const overlayStyle = useMemo(() => {

    const styles: CSSProperties = {};

    if (overlayOpacity) { styles.opacity = overlayOpacity.toString(); }

    return styles;
  }, [overlayOpacity]);

  // endregion


  // region [Privates]

  const addCloseAnimation = useCallback(() => {
    modalWrapperRef.current?.classList.add('k-modal__wrapper--close');
  }, []);

  const closeModal = useCallback(() => {
    addCloseAnimation();
    setTimeout(() => {
      onClose();
      setIsOpenModal(false);
    }, 300);
  }, [addCloseAnimation]);

  // endregion


  // region [Events]

  const onOpenModal = useCallback(() => {
    setIsOpenModal(true);
  }, []);

  const onCloseModal = useCallback(() => {
    closeModal();
  }, [onClose, closeModal]);

  const onClickOverlay = useCallback(() => {
    if (overlayClosable) {
      closeModal();
    }
  }, [onClose, overlayClosable]);

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.keyCode === 27) {
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
      onOpenModal();
      addKeyEventListener();
    } else {
      onCloseModal();
    }

    return () => removeKeyEventListener();
  }, [isOpen]);

  // endregion


  // region [Templates]

  const modalHeader = useMemo(() => (
    <div className={`k-modal__container__header ${headerClass}`} data-testid={headerTestId}>
      <p className='k-modal__container__header__text'>{title}</p>
      <button type='button' onClick={onCloseModal} className='k-modal__container__header__close-button'
          data-testid={closeButtonTestId}>
        close
      </button>
    </div>
  ), [headerClass, title, onCloseModal, closeButtonTestId]);

  const modalContent = useMemo(() => (
    <div className={`k-modal__container__content ${contentClass}`}>
      {content}
    </div>
  ), [content]);

  const modalFooter = useMemo(() => (
    footer && (<div className={`k-modal__container__footer ${footerClass}`}>{footer}</div>)
  ), [footer, footerClass]);

  // endregion


  if (!isOpenModal) {
    return null;
  }

  return (
    <div ref={modalWrapperRef} id={id} className='k-modal__wrapper' style={style}
        role='dialog' tabIndex={-1} aria-modal='true' aria-labelledby={`${title}-modal`}
        aria-describedby={`${title}-modal`} data-testid={rootTestId}>

      <div className={`k-modal__container ${rootClass}`} style={containerStyle} data-testid={containerTestId}>
        {modalHeader}
        {modalContent}
        {modalFooter}
      </div>
      <div style={overlayStyle} className={`k-modal-wrapper__overlay ${overlayClass}`} onClick={onClickOverlay}
          aria-hidden='true' data-testid='k-modal-overlay-test-id' />
    </div>
  );
}


export default memo(KModal);
