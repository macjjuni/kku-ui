/* eslint-disable jsx-a11y/no-static-element-interactions,jsx-a11y/click-events-have-key-events */
import {
  CSSProperties,
  forwardRef,
  KeyboardEvent,
  Ref,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import { KDropHolderProps, KDropHolderRefs } from '@/components/drop-holder/KDropHolder.interface';
import useClickOutside from '@/common/hook/useClickOutside';
import CSSTransition from '@/components/css-transition/CSSTransition';


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

    if (className) {
      clazz.push(className);
    }
    if (position) {
      clazz.push(`k-drop-holder--${position}`);
    }

    return clazz.join(' ');
  }, [className, position]);

  // endregion


  // region [Style]

  const rootStyle = useMemo(() => {
    return style || {};
  }, [style]);


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

  // const onClickAnchor = useCallback((e: MouseEvent<HTMLDivElement>) => {
  //   e.stopPropagation();
  // }, []);

  // endregion


  // region [templates]

  // endregion


  // region [Privates]
  const open = useCallback(() => {
    setOpen(true);
  }, []);
  const close = useCallback(() => {
    setOpen(false);
  }, []);

  const AnchorRootStyle = useMemo(() => {

    const { width, height, top, left } = rootRef.current?.getBoundingClientRect() || {
      top: 0,
      left: 0,
      height: 0,
      width: 0,
    };
    const styles: CSSProperties = {
      position: 'fixed',
      zIndex: '9999',
      left: `${left}px`,
    };

    let translateX = '0';
    let translateY = '0';

    if (position?.includes('bottom')) {
      styles.top = `calc(${top + height}px + ${offset})`;
    }
    if (position?.includes('top')) {
      translateY = `calc(-100% -  ${height}px - ${offset})`;
    }
    if (position.includes('center')) {
      translateX = `calc(-50% + ${width / 2}px)`;
    }
    if (position.includes('right')) {
      translateX = `calc(-100% + ${width}px)`;
    }

    styles.transform = `translate(${translateX}, ${translateY})`;

    return styles;
  }, [position, offset, isOpen]);

  // const observerAnchorRoot = useCallback(() => {
  //   close();
  // }, []);


  // const removeAnchorRoot = useCallback(() => {
  //   const dropHolderWrap = document.body.getElementsByClassName(anchorClass.wrapper);
  //   dropHolderWrap[0]?.remove();
  //   window.removeEventListener('scroll', observerAnchorRoot);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // endregion


  // region [LifeCycles]

  // useEffect(() => {
  //   // if (!isOpen) {
  //   //   removeAnchorRoot();
  //   // }
  // }, [isOpen]);

  useEffect(() => {
    // return () => removeAnchorRoot();
  }, []);

  // endregion


  // region [APIs]

  useImperativeHandle(ref, () => ({ open, close }));

  // endregion


  return (
    <>
      <div ref={rootRef} id={id} className={`k-drop-holder ${rootClass}`} tabIndex={0}
           role='button' onClick={onClickRoot} onKeyUp={onKeyUpRoot} style={rootStyle}
           data-testid='k-drop-holder'>
        {children}
        <div ref={contentRef} style={AnchorRootStyle}>
          <CSSTransition show={isOpen} className='k-drop-holder__anchor__wrapper' timeout={400}>
            {content}
          </CSSTransition>
        </div>
      </div>

    </>
  );
});


KDropHolder.displayName = 'KDropHolder';
export default KDropHolder;
