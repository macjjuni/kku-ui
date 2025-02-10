import { CSSProperties, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { KIcon } from '@/components';
import { initSize } from '@/common/util/variation';
import { KModalProps } from '@/components/modal/KModal.interface';
import { useCleanId } from '@/common/hook/useCleanId';


const rootTestId = 'k-modal-test-id';
const headerTestId = 'k-modal__header-test-id';
const containerTestId = 'k-modal__container-test-id';
const closeButtonTestId = 'k-modal__close-button-test-id';


function KModal({ ...restProps }: KModalProps) {


  // region [Hooks]

  const {
    id,
    style,
    isOpen,
    onClose,
    title,
    content,
    footer,
    size,
    className,
    isOverlay = true,
    overlayOpacity,
    overlayClosable,
    headerClass = '',
    contentClass,
    footerClass,
    escClosable = false,
    width,
  }: KModalProps = { ...restProps };
  const modalWrapperRef = useRef<HTMLDivElement | null>(null);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const headerTitleId = useCleanId('k-modal-header-title');

  // endregion


  // region [Style]

  const rootClass = useMemo(() => {

    const clazz: string[] = [];

    initSize(clazz, 'k-modal__container', size);

    if (className) {
      clazz.push(className);
    }

    return clazz.join(' ');
  }, [size]);

  const overlayClass = useMemo(() => {

    if (isOverlay) {
      return 'k-modal-wrapper__overlay--active';
    }

    return 'k-modal-wrapper__overlay--transparent';
  }, [isOverlay]);

  const containerStyle = useMemo(() => {

    const styles: CSSProperties = {};

    if (width) {
      styles.width = width;
    }

    return styles;
  }, [width]);

  const overlayStyle = useMemo(() => {

    const styles: CSSProperties = {};

    if (overlayOpacity) {
      styles.opacity = overlayOpacity.toString();
    }

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
    }, 160);
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
      <h1 id={headerTitleId} className='k-modal__container__header__text'>{title}</h1>
      <KIcon className='k-modal__container__header__close-button' icon='close' size={16}
             onClick={onCloseModal}/>
    </div>
  ), [headerClass, title, onCloseModal, headerTitleId, closeButtonTestId]);

  const modalContent = useMemo(() => (
    <section className={`k-modal__container__content${contentClass ? ` ${contentClass}` : ''}`}
             aria-labelledby={headerTitleId}>
      {content}
    </section>
  ), [content, headerTitleId]);

  const modalFooter = useMemo(() => (
    footer && (<div className={`k-modal__container__footer ${footerClass}`}>{footer}</div>)
  ), [footer, footerClass]);

  // endregion


  if (!isOpenModal) {
    return null;
  }

  return (
    createPortal(
      <div ref={modalWrapperRef} id={id} className='k-modal__wrapper' style={style}
           role='dialog' tabIndex={-1} aria-modal='true' aria-label={`${title}-modal-wrapper`}
           data-testid={rootTestId}>

        <div className={`k-modal__container ${rootClass}`} style={containerStyle} data-testid={containerTestId}>
          {modalHeader}
          {modalContent}
          {modalFooter}
        </div>
        <div style={overlayStyle} className={`k-modal-wrapper__overlay ${overlayClass}`} onClick={onClickOverlay}
             aria-hidden='true' data-testid='k-modal-overlay-test-id'/>
      </div>,
      document.body,
    )
  );
}

KModal.displayName = 'KModal';
export default KModal;
