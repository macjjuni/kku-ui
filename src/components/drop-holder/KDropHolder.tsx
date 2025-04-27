import {
  CSSProperties, forwardRef, KeyboardEvent, Ref, useCallback, useEffect,
  useImperativeHandle, useMemo, useRef, useState, memo, useId,
} from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { KDropHolderProps, KDropHolderRefs } from '@/components/drop-holder/KDropHolder.interface';
import useClickOutside from '@/common/hook/useClickOutside';
import KDropHolderMotion from '@/components/drop-holder/KDropHolder.motion';
import './KDropHolder.scss';


const DropHolder = forwardRef(({ ...restProp }: KDropHolderProps, ref: Ref<KDropHolderRefs>) => {

  // region [Hooks]

  const { id, className, style, content, children } = { ...restProp };
  const { trigger = 'click', position = 'top', offset = { x: 0, y: 0 } } = { ...restProp };
  const { openDelay = 0, closeDelay, contentWidth } = { ...restProp };
  const { initial, animate, exit, transition } = { ...restProp, ...KDropHolderMotion };
  const { onClick, onHover } = { ...restProp };

  const rootRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const openTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [isOpen, setOpen] = useState<boolean>(false);
  const [dropHolderStyle, setDropHolderStyle] = useState<CSSProperties>({ width: contentWidth || 'auto' });

  const uniqueId = useId();

  const computedTabIndex = useMemo(() => (trigger === 'click' ? 0 : -1), [trigger]);
  const computedCloseDelay = useMemo(() => {

    if (closeDelay === 0 && trigger === 'click') {
      throw Error('Set closeDelay > 0 when using click trigger.');
    }
    if (typeof closeDelay === 'number') {
      return closeDelay;
    }
    return trigger === 'hover' ? 0 : 2400;
  }, [closeDelay, trigger]);

  // endregion


  // region [Class]

  const rootClass = useMemo(() => {

    const clazz = ['k-drop-holder'];

    if (className) {
      clazz.push(className);
    }
    if (position) {
      clazz.push(`k-drop-holder--${position}`);
    }

    return clazz.join(' ');
  }, [className, position]);

  // endregion


  // region [Privates]

  const clearTimers = useCallback(() => {

    if (openTimer.current) {
      clearTimeout(openTimer.current);
      openTimer.current = null;
    }
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }, []);

  const openAfterDelay = useCallback(() => {

    clearTimers();
    openTimer.current = setTimeout(() => {
      setOpen(true);
    }, openDelay);
  }, [openDelay]);

  const closeAfterDelay = useCallback((delay?: number) => {

    clearTimers();
    const customDelay = typeof delay === 'number' ? delay : computedCloseDelay;

    closeTimer.current = setTimeout(() => {
      setOpen(false);
    }, customDelay);
  }, [computedCloseDelay]);

  const calculateTooltipPosition = useCallback(() => {

    if (!rootRef.current || !contentRef.current) { return; }

    const styles: CSSProperties = {};
    const triggerRect = rootRef.current?.getBoundingClientRect();
    const dropHolderRect = contentRef.current?.getBoundingClientRect();
    const offsetX = offset.x || 0;
    const offsetY = offset.y || 0;

    let x = 0;
    let y = 0;

    switch (position) {
      case 'top-start':
        x = (dropHolderRect.width - triggerRect.width) / 2 + offsetX
        y = -((dropHolderRect.height / 2) + (triggerRect.height / 2)) + offsetY;
        break;
      case 'top':
        x = offsetX;
        y = -((dropHolderRect.height / 2) + (triggerRect.height / 2)) + offsetY;
        break;
      case 'top-end':
        x = (triggerRect.width - dropHolderRect.width) / 2 + offsetX;
        y = -((dropHolderRect.height / 2) + (triggerRect.height / 2)) + offsetY;
        break;
      case 'bottom-start':
        x = (dropHolderRect.width - triggerRect.width) / 2 + offsetX;
        y = ((dropHolderRect.height / 2) + (triggerRect.height / 2)) + offsetY;
        break;
      case 'bottom':
        x = offsetX;
        y = ((dropHolderRect.height / 2) + (triggerRect.height / 2)) + offsetY;
        break;
      case 'bottom-end':
        x = (triggerRect.width - dropHolderRect.width) / 2 + offsetX;
        y = ((dropHolderRect.height / 2) + (triggerRect.height / 2)) + offsetY;
        break;
      case 'left-start':
        x = -(dropHolderRect.width / 2 + (triggerRect.width / 2)) + offsetX;
        y = ((dropHolderRect.height / 2) - (triggerRect.height / 2)) + offsetY;
        break;
      case 'left':
        x = -(dropHolderRect.width / 2 + (triggerRect.width / 2)) + offsetX;
        y = offsetY;
        break;
      case 'left-end':
        x = -(dropHolderRect.width / 2 + (triggerRect.width / 2)) + offsetX;
        y = -((dropHolderRect.height / 2) - (triggerRect.height / 2)) + offsetY;
        break;
      case 'right-start':
        x = (dropHolderRect.width / 2 + (triggerRect.width / 2)) + offsetX;
        y = ((dropHolderRect.height / 2) - (triggerRect.height / 2)) + offsetY;
        break;
      case 'right':
        x = (dropHolderRect.width / 2 + (triggerRect.width / 2)) + offsetX;
        y = offsetY;
        break;
      case 'right-end':
        x = (dropHolderRect.width / 2 + (triggerRect.width / 2)) + offsetX;
        y = -((dropHolderRect.height / 2) - (triggerRect.height / 2)) + offsetY;
        break;
    }

    styles.transform = `translate(${x}px, ${y}px)`;
    setDropHolderStyle((prev) => ({ ...styles, width: prev.width }));
  }, [offset, position, isOpen]);

  // endregion


  // region [Style]

  const rootStyle = useMemo((): CSSProperties => (style || {}), [style]);

  // endregion


  // region [Events]

  const onClickRoot = useCallback(() => {
    if (trigger === 'click') {
      openAfterDelay();
      onClick?.();
    }
  }, [openAfterDelay, trigger, onClick]);

  const onKeyUpRoot = useCallback((e: KeyboardEvent<HTMLDivElement>) => {
    if ((e.key === ' ' || e.key === 'Enter') && trigger === 'click') {
      setOpen(true);
      onClick?.();
    }
  }, [trigger, onClick]);

  const onMouseEnterRoot = useCallback(() => {
    if (trigger === 'hover') {
      setOpen(true);
    }
    onHover?.();
  }, [trigger, onHover]);

  const onMouseLeaveRoot = useCallback(() => {
    if (trigger === 'hover') {
      closeAfterDelay();
    }
  }, [trigger, closeAfterDelay]);

  const onFocusRoot = useCallback(() => {
    if (trigger === 'hover') {
      openAfterDelay();
    }
  }, [trigger, openAfterDelay]);

  const onBlurRoot = useCallback(() => {
    if (trigger === 'hover') {
      closeAfterDelay();
    }
  }, [trigger, closeAfterDelay]);

  // endregion


  // region [LifeCycles]

  useEffect(() => {
    if (isOpen) {
      calculateTooltipPosition();
    }
  }, [isOpen]);

  // endregion


  // region [APIs]

  useImperativeHandle(ref, () => ({
    open: openAfterDelay,
    close: closeAfterDelay,
  }));

  // endregion


  // region [Hooks]

  useClickOutside(contentRef, () => {
    closeAfterDelay(0);
  }, rootRef);

  // endregion


  return (
    <div ref={rootRef} id={id || uniqueId} className={rootClass} tabIndex={computedTabIndex} style={rootStyle}
         role='button' onClick={onClickRoot} onKeyUp={onKeyUpRoot} onMouseEnter={onMouseEnterRoot}
         onMouseLeave={onMouseLeaveRoot} onFocus={onFocusRoot} onBlur={onBlurRoot} data-testid='k-drop-holder'>
      {children}
      <AnimatePresence>
        { isOpen && (
          <motion.div ref={contentRef} className='k-drop-holder__content' style={dropHolderStyle} role='tooltip'
                      initial={initial} animate={animate} exit={exit} transition={transition} aria-hidden={!isOpen}>
            {content}
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
});


const KDropHolder = memo(DropHolder);

DropHolder.displayName = 'KDropHolder';
KDropHolder.displayName = 'KDropHolder';


export default KDropHolder;
