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

const KDropHolder = forwardRef((props: KDropHolderProps, ref: Ref<KDropHolderRefs>) => {


  // region [Hooks]

  const rootRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setOpen] = useState<boolean>(false);

  useClickOutside(rootRef, () => { setOpen(false); });

  useImperativeHandle(ref, () => ({
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    open: () => { open(); },
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    close: () => { close(); },
  }));

  // endregion


  // region [Class]

  const rootClass = useMemo(() => {
    const clazz = [];

    if (props.className) { clazz.push(props.className); }

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
  }, [props.position]);

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

  const KDropHolderAnchor = useMemo(() => (<>{props.content}</>), [props.content]);

  // endregion


  // region [Privates]

  const open = useCallback(() => { setOpen(true); }, []);
  const close = useCallback(() => { setOpen(false); }, []);

  const setAnchorRootStyle = useCallback((anchorRoot: HTMLDivElement) => {
    const { top, left, height } = rootRef.current?.getBoundingClientRect() || { top: 0, left: 0, height: 0 };

    anchorRoot.style.setProperty('position', 'fixed');
    anchorRoot.style.setProperty('zIndex', '9999');
    if (props.position?.includes('bottom')) {
      anchorRoot.style.setProperty('top', `calc(${top + height}px + ${props.offset})`);
    }
    if (props.position?.includes('top')) {
      anchorRoot.style.setProperty('top', `calc(${top + height}px - ${props.offset})`);
    }

    anchorRoot.style.setProperty('left', `${left}px`);
  }, [props.position, props.offset]);

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
      { className: anchorClass.container, style: anchorContainerStyle(), onClick: onClickAnchor },
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

  return (
    <div ref={rootRef} id={props.id} className={`k-drop-holder ${rootClass}`} tabIndex={0}
        role='button' onClick={onClickRoot} onKeyUp={onKeyUpRoot} style={rootStyle}
        data-testid='k-drop-holder'>
      {props.children}
    </div>
  );
});

KDropHolder.defaultProps = {
  position: 'bottom-center',
  offset: '4px',
};
KDropHolder.displayName = 'KDropHolder';
export default KDropHolder;
