import { createPortal } from 'react-dom';
import { KeyboardEvent, memo, MouseEvent, useCallback, useMemo } from 'react';
import { handleKeyInteraction } from '@/common/util/keyboard';
import { useSafePortalContainer } from '@/common/hooks';
import { KBackdropProps } from './KBackdrop.interface';
import KBackdropMotion from './KBackdrop.motion';
import { Transition } from '@/core';


const Backdrop = (props: KBackdropProps) => {

  // region [Hooks]
  const {
    isOpen, className, style, children, role, opacity = 1, zIndex,
    onClick, onKeyDown, container, ...restProps
  } = props;
  const defaultContainer = useSafePortalContainer(container);
  const TabIndex = useMemo(() => (onClick ? 0 : undefined), [onClick]);
  const RoleAndLabel = useMemo(() => {
    if (onClick) {
      return { role: 'button', 'aria-label': 'backdrop' };
    }
    return { role, 'aria-label': restProps['aria-label'] };
  }, [onClick, role]);
  // endregion

  // region [Styles]
  const rootClass = useMemo(() => {
    const clazz = ['k-backdrop__container'];
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
    handleKeyInteraction(e, () => {
      onClick?.();
    });
    onKeyDown?.(e);
  }, [onKeyDown]);
  // endregion

  // region [Templates]
  const a11yProps = useMemo(() => {
    if (children) {
      return {}; // children 있을 땐 aria-hidden, role 제거
    }
    return { role: 'presentation' };
  }, [children]);
  // endregion


  if (!defaultContainer) {
    return null;
  }

  return (
    createPortal(
      <>
        <Transition as="div" isOpen={isOpen} className="k-backdrop" {...{ ...BackdropMotion, ...a11yProps }}>
          {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
          <div {...RoleAndLabel} className={rootClass} style={rootStyle} {...restProps} tabIndex={TabIndex}
               onClick={onClickRoot} onKeyDown={onKeyDownRoot}/>
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