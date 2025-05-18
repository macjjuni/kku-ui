import { createPortal } from 'react-dom';
import { KeyboardEvent, memo, useCallback, useId, useMemo } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { KBackdropProps } from '@/components/feedback/backdrop/KBackdrop.interface';
import KBackdropMotion from '@/components/feedback/backdrop/KBackdrop.motion';


const Backdrop = ({ ...restProps }: KBackdropProps) => {

  // region [Hooks]

  const uniqueId = useId();
  const { id = `k-backdrop-${uniqueId}`, className, style, children } = { ...restProps };
  const { open, opacity, zIndex, onClick } = { ...restProps };
  const tabIndex = useMemo(() => (onClick ? 0 : -1), [onClick]);

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

  const onClickBackdrop = useCallback(() => {
    onClick?.();
  }, [onClick]);

  const onkeydown = useCallback((e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      onClick?.();
    }
  }, [onClick]);

  // endregion


  return (
    createPortal(
      <>
        <AnimatePresence>
          {
            open && (
              <>
                <motion.div id={id} className={rootClass} style={rootStyle} onClick={onClickBackdrop} onKeyDown={onkeydown}
                            tabIndex={tabIndex} {...BackdropMotion} role="presentation" aria-hidden="true"/>
                {children}
              </>
            )
          }
        </AnimatePresence>
      </>,
      document.body,
    )
  );
};


const KBackdrop = memo(Backdrop);
KBackdrop.displayName = 'KBackdrop';

export default KBackdrop;