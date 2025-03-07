/* eslint-disable jsx-a11y/no-static-element-interactions,jsx-a11y/click-events-have-key-events */
import {
  createElement,
  CSSProperties,
  forwardRef,
  KeyboardEvent,
  MouseEvent,
  Ref,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import { createRoot } from 'react-dom/client';
import { KDropHolderProps, KDropHolderRefs } from '@/components/drop-holder/KDropHolder.interface';
import useClickOutside from '@/common/hook/useClickOutside';


const anchorClass = {
  wrapper: 'k-drop-holder__anchor__wrapper',
  container: 'k-drop-holder__anchor__container',
};


const KDropHolder = forwardRef(({
  id,
  className,
  style,
  ...restProps
}: KDropHolderProps, ref: Ref<KDropHolderRefs>) => {


  // region [Hooks]

  const { content, children, onClick, offset = '4px', position = 'bottom-center' } = { ...restProps };
  const rootRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setOpen] = useState<boolean>(false);

  useClickOutside(contentRef, () => {
    setOpen(false);
  }, rootRef);

  // endregion


  // region [Class]

  const rootClass = useMemo(() => {

    const clazz = [];

    if (className) { clazz.push(className); }
    if (position) { clazz.push(`k-drop-holder--${position}`); }

    return clazz.join(' ');
  }, [className, position]);

  // endregion


  // region [Style]

  const rootStyle = useMemo(() => {
    return style || {};
  }, [style]);

  const anchorContainerStyle = useCallback((): CSSProperties => {
    const { width, height } = rootRef.current?.getBoundingClientRect() ?? { width: 0, height: 0 };

    if (position === 'top-left') {
      return { transform: `translateY(calc(-100% - ${height}px)) translateX(0)` };
    }
    if (position === 'top-center') {
      return { transform: `translateY(calc(-100% - ${height}px)) translateX(calc(-50% + ${width / 2}px))` };
    }
    if (position === 'top-right') {
      return { transform: `translateY(calc(-100% - ${height}px)) translateX(calc(-100% + ${width}px)` };
    }
    if (position === 'bottom-left') {
      return { transform: 'translateX(0)' };
    }
    if (position === 'bottom-center') {
      return { transform: `translateX(calc(-50% + ${width / 2}px))` };
    }
    if (position === 'bottom-right') {
      return { transform: `translateX(calc(-100% + ${width}px)` };
    }

    return { transform: `translateX(calc(-50% + ${width / 2}px))` }; // bottom-center
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [position]);

  // endregion


  // region [Events]

  const onClickRoot = useCallback(() => {
    setOpen(true);
    onClick?.();
  }, []);

  const onKeyUpRoot = useCallback((e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === ' ' || e.key === 'Enter') {
      setOpen(true);
    }
  }, []);

  const onClickAnchor = useCallback((e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  }, []);

  // endregion


  // region [templates]

  const KDropHolderAnchor = useMemo(() => (<>{content}</>), [content]);

  // endregion


  // region [Privates]
  const open = useCallback(() => {
    setOpen(true);
  }, []);
  const close = useCallback(() => {
    setOpen(false);
  }, []);

  const setAnchorRootStyle = useCallback((anchorRoot: HTMLDivElement) => {
    const { top, left, height } = rootRef.current?.getBoundingClientRect() || { top: 0, left: 0, height: 0 };

    anchorRoot.style.setProperty('position', 'fixed');
    anchorRoot.style.setProperty('zIndex', '9999');
    if (position?.includes('bottom')) {
      anchorRoot.style.setProperty('top', `calc(${top + height}px + ${offset})`);
    }
    if (position?.includes('top')) {
      anchorRoot.style.setProperty('top', `calc(${top + height}px - ${offset})`);
    }

    anchorRoot.style.setProperty('left', `${left}px`);
  }, [position, offset]);

  const observerAnchorRoot = useCallback(() => {
    close();
  }, []);

  const createAnchorRoot = useCallback(() => {

    const dropHolderWrap = document.createElement('div');

    dropHolderWrap.classList.add(anchorClass.wrapper);
    setAnchorRootStyle(dropHolderWrap);
    document.body.appendChild(dropHolderWrap);

    const anchorParentElement = createElement(
      'div',
      { ref: contentRef, className: anchorClass.container, style: anchorContainerStyle(), onClick: onClickAnchor },
      KDropHolderAnchor,
    );
    createRoot(dropHolderWrap).render(anchorParentElement);
    window.addEventListener('scroll', observerAnchorRoot, { passive: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [KDropHolderAnchor, setAnchorRootStyle]);

  const removeAnchorRoot = useCallback(() => {
    const dropHolderWrap = document.body.getElementsByClassName(anchorClass.wrapper);
    dropHolderWrap[0]?.remove();
    window.removeEventListener('scroll', observerAnchorRoot);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // endregion


  // region [LifeCycles]

  useEffect(() => {
    if (isOpen) {
      createAnchorRoot();
    } else {
      removeAnchorRoot();
    }
  }, [isOpen]);

  useEffect(() => {
    return () => removeAnchorRoot();
  }, []);

  // endregion


  // region [APIs]

  useImperativeHandle(ref, () => ({ open, close }));

  // endregion


  return (
    <div ref={rootRef} id={id} className={`k-drop-holder ${rootClass}`} tabIndex={0}
         role='button' onClick={onClickRoot} onKeyUp={onKeyUpRoot} style={rootStyle}
         data-testid='k-drop-holder'>
      {children}
    </div>
  );
});


KDropHolder.displayName = 'KDropHolder';
export default KDropHolder;
