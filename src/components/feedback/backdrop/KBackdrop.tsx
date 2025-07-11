import { createPortal } from 'react-dom';
import { KeyboardEvent, memo, MouseEvent, useCallback, useId, useMemo } from 'react';
import { KBackdropProps } from './KBackdrop.interface';
import KBackdropMotion from './KBackdrop.motion';
import { useSafePortalContainer } from '@/common/hooks';
import { Transition } from '@/core';
import { handleKeyInteraction } from '@/common/util/keyboard';


const Backdrop = (props: KBackdropProps) => {

  // region [Hooks]
  const uniqueId = useId();
  const {
    id = `k-backdrop-${uniqueId}`, className, style, children,
    open, opacity = 1, zIndex, onClick, onKeyDown, container,
  } = props;
  const defaultContainer = useSafePortalContainer(container);
  // endregion

  // region [Styles]
  const rootClass = useMemo(() => {
    const clazz = ['k-backdrop'];
    if (className) {
      clazz.push(className);
    }
    return clazz.join(' ');
  }, [className]);

  const rootStyle = useMemo(() => {
    return { ...style, opacity, zIndex };
  }, [style, opacity, zIndex]);

  const BackdropMotion = useMemo(() => {
    if (typeof opacity === 'number') {
      return { ...KBackdropMotion, animate: { opacity, zIndex } };
    }
    return KBackdropMotion;
  }, [opacity, zIndex]);
  // endregion

  // region [Events]
  const onClickRoot = useCallback((e: MouseEvent<HTMLDivElement>) => {
    onClick?.(e);
  }, [onClick]);

  const onKeyDownRoot = useCallback((e: KeyboardEvent<HTMLDivElement>) => {
    handleKeyInteraction(e, onClick)
    onKeyDown?.(e);
  }, [onKeyDown]);
  // endregion

  // region [Templates]
  const a11yProps = useMemo(() => {
    if (children) {
      return {}; // children 있을 땐 aria-hidden, role 제거
    }
    return { role: 'presentation', 'aria-hidden': true };
  }, [children]);
  // endregion


  if (!defaultContainer) {
    return null;
  }

  return (
    createPortal(
      <>
        <Transition as="div" id={id} isOpen={open} className={rootClass} style={rootStyle} {...{ ...BackdropMotion, ...a11yProps }}>
          <div role="button" aria-label="backdrop" tabIndex={0} className="k-backdrop__container"
               onClick={onClickRoot} onKeyDown={onKeyDownRoot} />
          {children}
        </Transition>
      </>,
      defaultContainer,
    )
  );
};


const KBackdrop = memo(Backdrop);
KBackdrop.displayName = 'KBackdrop';
Backdrop.displayName = 'KBackdrop';

export default KBackdrop;