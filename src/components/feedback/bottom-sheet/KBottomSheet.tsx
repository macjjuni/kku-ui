import { forwardRef, memo, MouseEvent, useCallback, useEffect, useId, useImperativeHandle, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'motion/react';
import { KBackdrop, KBottomSheetProps } from '@/components';
import { KBottomSheetRefs } from '@/components/feedback/bottom-sheet/KBottomSheet.interface';
import KBottomSheetMotion from '@/components/feedback/bottom-sheet/KBottomSheet.motion';


const BottomSheet = forwardRef<KBottomSheetRefs, KBottomSheetProps>(({ ...restProps }, ref) => {

  // region [Hooks]

  const uniqueId = useId();
  const { id = `k-backdrop-${uniqueId}`, className, style, children } = { ...restProps };
  const { defaultOpen = false, overlayOpacity = 0.56, height } = { ...restProps };
  const { overlayClosable = false, escClosable = false } = { ...restProps };

  const [isOpen, setIsOpen] = useState(defaultOpen);

  // endregion


  // region [Styles]

  const rootClass = useMemo(() => {
    const clazz = ['k-bottom-sheet'];

    if (className) {
      clazz.push(className);
    }

    return clazz.join(' ');
  }, [className]);

  const rootStyle = useMemo(() => ({ ...style, height }), [style, height]);

  // endregion


  // region [Privates]

  const onOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  const onClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  // endregion


  // region [Events]

  const onClickBackdrop = useCallback(() => {
    if (overlayClosable) {
      onClose();
    }
  }, [overlayClosable]);

  const onClickBody = useCallback((e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  }, []);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  }, []);

  // endregion


  // region [Life Cycles]

  useEffect(() => {
    if (!isOpen || !escClosable) return;

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, escClosable]);

  // endregion


  // region [APIs]

  useImperativeHandle(ref, () => ({
    open: () => {
      onOpen();
    },
    close: () => {
      onClose();
    },
  }));

  // endregion


  return (
    <>
      <KBackdrop open={isOpen} className="k-bottom-sheet__backdrop" opacity={overlayOpacity} onClick={onClickBackdrop}/>
      {
        createPortal(
          <AnimatePresence>
            {
              isOpen && (
                <motion.div id={id} className={rootClass} style={rootStyle} onClick={onClickBody} {...KBottomSheetMotion}
                            role="dialog">
                  {children}
                </motion.div>
              )
            }
          </AnimatePresence>,
          document.body,
        )
      }
    </>
  );
});


const KBottomSheet = memo(BottomSheet);
BottomSheet.displayName = 'KBottomSheet';
KBottomSheet.displayName = 'KBottomSheet';

export default KBottomSheet;