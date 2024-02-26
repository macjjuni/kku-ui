/* eslint-disable jsx-a11y/no-static-element-interactions,jsx-a11y/click-events-have-key-events */
import {
  forwardRef, useState, useMemo, memo, Ref, useImperativeHandle, useCallback, KeyboardEvent,
  useEffect, useRef, createElement, CSSProperties, MouseEvent,
} from 'react';
import { createRoot } from 'react-dom/client';
import { KDropHolderProps, KDropHolderRefs } from '@/components/drop-holder/KDropHolder.interface';

const anchorClass = {
  wrapper: 'k-drop-holder__anchor__wrapper',
  container: 'k-drop-holder__anchor__container',
};

const KDropHolder = forwardRef((props: KDropHolderProps, ref: Ref<KDropHolderRefs>) => {


  // region [Hooks]

  const rootRef = useRef<HTMLDivElement>(null);
  const [isOpen, setOpen] = useState<boolean>(false);
  const [scrollY, setScrollY] = useState<number>(0);

  // endregion

  // region [Class]

  const rootClass = useMemo(() => {
    const clazz = [];

    if (props.position) {
      clazz.push(`k-drop-holder--${props.position}`);
    }

    return clazz.join(' ');
  }, [props.className, props.position]);


  // endregion

  // region [Style]

  const rootStyle = useMemo(() => {
    return props.style ? props.style : {};
  }, [props.style]);

  const anchorContainerStyle = useCallback((): CSSProperties => {
    const { width, height } = rootRef.current?.getBoundingClientRect() ?? { width: 0, height: 0 };
    console.log(width, height);
    if (props.position === 'top-left') {
      return { transform: `translateY(calc(-100% - ${height}px)) translateX(0)` };
    }
    if (props.position === 'top-center') {
      return { transform: `translateY(calc(-100% - ${height}px)) translateX(calc(-50% + ${width / 2}px))` };
    }
    if (props.position === 'top-right') {
      return { transform: `translateY(calc(-100% - ${height}px)) translateX(calc(-100% + ${width}px)` };
    }
    if (props.position === 'bottom-left') {
      return { transform: 'translateX(0)' };
    }
    if (props.position === 'bottom-center') {
      return { transform: `translateX(calc(-50% + ${width / 2}px))` };
    }
    if (props.position === 'bottom-right') {
      return { transform: `translateX(calc(-100% + ${width}px)` };
    }

    return { transform: `translateX(calc(-50% + ${width / 2}px))` }; // bottom-center
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.position, scrollY]);

  // endregion


  // region [Events]

  const onClickRoot = useCallback(() => {
    setOpen(true);
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

  const KDropHolderAnchor = useMemo(
    () => (<>props.content</>),
    [props.content],
  );


  // endregion


  // region [Privates]

  const open = useCallback(() => {
    setOpen(true);
  }, []);

  const close = useCallback(() => {
    setOpen(false);
  }, []);

  const setAnchorRootStyle = useCallback((anchorRoot: HTMLDivElement) => {
    const { top, left, height } = rootRef.current.getBoundingClientRect();

    anchorRoot.style.setProperty('position', 'fixed');
    anchorRoot.style.setProperty('zIndex', '9999');
    if (props.position.includes('bottom')) {
      anchorRoot.style.setProperty('top', `calc(${top + height}px + ${props.offset})`);
    }
    if (props.position.includes('top')) {
      anchorRoot.style.setProperty('top', `calc(${top + height}px - ${props.offset})`);
    }

    anchorRoot.style.setProperty('left', `${left}px`);
  }, [props.position, props.offset]);

  const observerAnchorRoot = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  const createAnchorRoot = useCallback(() => {

    const dropHolderWrap = document.createElement('div');

    dropHolderWrap.classList.add(anchorClass.wrapper);
    setAnchorRootStyle(dropHolderWrap);
    document.body.appendChild(dropHolderWrap);

    const anchorParentElement = createElement(
      'div',
      { className: anchorClass.container, style: anchorContainerStyle(), onClick: onClickAnchor },
      KDropHolderAnchor,
    );
    createRoot(dropHolderWrap).render(anchorParentElement);
    window.addEventListener('scroll', observerAnchorRoot, { passive: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [KDropHolderAnchor, setAnchorRootStyle]);

  const removeAnchorRoot = useCallback(() => {
    const dropHolderWrap = document.body.getElementsByClassName(anchorClass);
    dropHolderWrap[0]?.remove();
    window.removeEventListener('scroll', observerAnchorRoot);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useImperativeHandle(ref, () => ({
    open: () => { open(); },
    close: () => { close(); },
  }));

  // endregion


  // region [LifeCycles]

  useEffect(() => {
    if (isOpen) {
      createAnchorRoot();
    } else {
      removeAnchorRoot();
    }
  }, [isOpen]);


  // endregion


  return (
    <div ref={rootRef} className={`k-drop-holder ${rootClass}`} style={rootStyle}>
      <div className='k-drop-holder__container' tabIndex={0} role='button' onClick={onClickRoot} onKeyUp={onKeyUpRoot}>
        {props.children}
      </div>
      {isOpen}
    </div>
  );
});

KDropHolder.defaultProps = {
  position: 'bottom-center',
  offset: '4px',
};
KDropHolder.displayName = 'KDropHolder';
export default memo(KDropHolder);
