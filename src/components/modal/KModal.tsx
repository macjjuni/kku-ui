import * as ReactDOM from 'react-dom/client';
import { memo, useCallback, useEffect, useMemo } from 'react';
import { KModalProps } from '@/components/modal/KModal.interface';
import { initSize } from '@/common/util/variation';

const modalWrapperClass = 'k-modal__wrapper';


function KModal({ isOpen, title, content, footer, size, large, medium, small }: KModalProps) {

  // region [Style]

  const rootClass = useMemo(() => {
    const clazz: string[] = [];

    initSize(clazz, 'k-modal__container', size, large, medium, small);

    return clazz.join(' ');
  }, [size]);

  // endregion


  // region [Templates]

  const modalComponent = useCallback(() => (
    <>
      <div className={`k-modal__container ${rootClass}`}>

        <div className='k-modal__container__header'>
          {title}
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
      <div className='k-modal-wrapper__overlay' />
    </>
  ), [title, content, footer]);

  // endregion


  // region [Privates]

  const initializeModal = useCallback(() => {

    const modalWrapper = document.createElement('div');
    modalWrapper.className = modalWrapperClass;

    document.body.appendChild(modalWrapper);

    const modalWrapperElement = document.querySelector(`.${modalWrapperClass}`) as HTMLDivElement;
    const modalWrapperRoot = ReactDOM.createRoot(modalWrapperElement);

    modalWrapperRoot.render(modalComponent());
  }, []);

  const removeModal = useCallback(() => {
    const modalWrapperElement = document.querySelector(`.${modalWrapperClass}`) as HTMLDivElement;

    if (modalWrapperElement) {
      modalWrapperElement.classList.add('fade-out');
      setTimeout(() => {
        modalWrapperElement.remove();
      }, 2000);
    }
  }, []);

  // endregion


  // region [Effects]

  useEffect(() => {
    if (isOpen) {
      initializeModal();
    } else {
      removeModal();
    }
  }, [isOpen]);

  // endregion

  return null;

}

export default memo(KModal);
