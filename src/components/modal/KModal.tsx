import * as ReactDOM from 'react-dom/client';
import { memo, useCallback, useEffect, useMemo } from 'react';
import { KModalProps } from '@/components/modal/KModal.interface';


function KModal({ isOpen, title, content, footer }: KModalProps) {

  // region [Templates]

  const modalComponent = useMemo(() => (
    <>
      <div className='k-modal__container'>

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

  const initialize = useCallback(() => {
    const modalWrapperClass = 'k-modal__wrapper';
    const modalWrapper = document.createElement('div');
    modalWrapper.className = modalWrapperClass;

    document.body.appendChild(modalWrapper);

    const modalWrapperElement = document.querySelector(`.${modalWrapperClass}`) as HTMLDivElement;
    const modalWrapperRoot = ReactDOM.createRoot(modalWrapperElement);

    modalWrapperRoot.render(modalComponent);
  }, []);

  // endregion


  // region [Effects]

  useEffect(() => {
    initialize();
  }, [isOpen]);

  // endregion

  return null;

}

export default memo(KModal);
