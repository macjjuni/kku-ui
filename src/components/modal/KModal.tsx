import { CSSProperties, memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { initSize } from '@/common/util/variation';
import { KModalProps } from '@/components/modal/KModal.interface';


function KModal({
  id, style, isOpen, onClose, title, content, footer, size, large, medium, small,
  className, overlay, overlayClosable, rounded, borderRadius = '8px',
  overlayOpacity,
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

    return clazz.join(' ');
  }, [size]);

  const overlayClass = useMemo(() => {
    if (overlay) {
      return 'k-modal-wrapper__overlay--active';
    }
    return 'k-modal-wrapper__overlay--transparent';
  }, [overlay]);

  const containerStyle = useMemo(() => {
    const styles: CSSProperties = { ...style };
    if (rounded) {
      styles.borderRadius = borderRadius;
    }
    return styles;
  }, [rounded, borderRadius]);

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

  // endregion


  // region [Life Cycles]

  useEffect(() => {
    if (isOpen) {
      onOpenModal();
    } else {
      onCloseModal();
    }
  }, [isOpen]);

  // endregion

  if (!isOpenModal) {
    return null;
  }

  return (
    <div ref={modalWrapperRef} id={id} className='k-modal__wrapper' data-testid='k-modal-test-id'>
      <div className={`k-modal__container ${rootClass}`} style={containerStyle} data-testid='k-modal__container-test-id'>

        <div className='k-modal__container__header'>
          <p className='k-modal__container__header__text'>
            {title}
          </p>
          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <button
            type='button'
            onClick={onCloseModal}
            className='k-modal__container__header__close-button'
            data-testid='k-modal__close-button-test-id'
          />
        </div>

        <div className='k-modal__container__content'>
          {content}
        </div>

        {footer && (
          <div className='k-modal__container__footer'>
            {footer}
          </div>
        )}
      </div>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <div style={overlayStyle} onClick={onClickOverlay} className={`k-modal-wrapper__overlay ${overlayClass}`} />
    </div>
  );
}


export default memo(KModal);
