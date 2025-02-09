import {
  CSSProperties,
  forwardRef,
  KeyboardEvent, memo,
  ReactNode,
  Ref,
  useCallback, useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import { KDropHolderProps, KDropHolderRefs } from '@/components/drop-holder/KDropHolder.interface';
import useClickOutside from '@/common/hook/useClickOutside';

interface KDropHolderPopupProps {
  style: CSSProperties;
  close: () => void;
  children: ReactNode;
}

function KDropHolderPopup({ style, children, close }: KDropHolderPopupProps) {

  const rootRef = useRef<HTMLDivElement>(null);

  useClickOutside(rootRef, () => { close(); });

  return (
    <div ref={rootRef} className='k-drop-holder__popup__wrapper' style={style}>
      {children}
    </div>
  );
}

const OptimizedKDropHolderPopup = memo(KDropHolderPopup);

const KDropHolder = forwardRef((props: KDropHolderProps, ref: Ref<KDropHolderRefs>) => {

  const {
    position = 'bottom-center', offset = '4px', style, id,
    className, content, children,
  } = props;

  // region [Hooks]

  const rootRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [popupStyle, setPopupStyle] = useState<CSSProperties>({});

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

    if (className) { clazz.push(className); }

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


  // region [templates]
  // endregion


  // region [Privates]

  const open = useCallback(() => { setIsOpen(true); }, []);
  const close = useCallback(() => { setIsOpen(false); }, []);

  const initializePopup = useCallback(() => {
    const { top, left, width, height } = rootRef.current?.getBoundingClientRect() || { top: 0, left: 0, width: 0, height: 0 };

    const styles: CSSProperties = { position: 'fixed', zIndex: '9999' };

    if (position?.includes('bottom')) { styles.top = `calc(${top + height}px + ${offset})`; }
    if (position?.includes('top')) { styles.top = `calc(${top + height}px - ${offset})`; }
    styles.left = `${left}px`;

    if (position === 'top-left') {
      styles.transform = `translateY(calc(-100% - ${height}px)) translateX(0)`;
    }
    if (position === 'top-center') {
      styles.transform = `translateY(calc(-100% - ${height}px)) translateX(calc(-50% + ${width / 2}px))`;
    }
    if (position === 'top-right') {
      styles.transform = `translateY(calc(-100% - ${height}px)) translateX(calc(-100% + ${width}px)`;
    }
    if (position === 'bottom-left') {
      styles.transform = 'translateX(0)';
    }
    if (!position || position === 'bottom-center') {
      styles.transform = `translateX(calc(-50% + ${width / 2}px))`;
    }
    if (position === 'bottom-right') {
      styles.transform = `translateX(calc(-100% + ${width}px)`;
    }

    setPopupStyle(styles);
    open();
  }, [position, offset]);

  const observePopupScroll = useCallback(() => {
    close();
  }, []);

  // endregion


  // region [Events]

  const onClickRoot = useCallback(() => {
    initializePopup();
  }, [initializePopup]);

  const onKeyUpRoot = useCallback((e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === ' ' || e.key === 'Enter') {
      setIsOpen(true);
    }
  }, []);

  // endregion


  // region [Life Cycles]

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('scroll', observePopupScroll, { passive: true });
    } else {
      window.removeEventListener('scroll', observePopupScroll);
    }
  }, [isOpen]);

  // endregion


  return (
    <>
      <div ref={rootRef} id={id} className={`k-drop-holder ${rootClass}`} tabIndex={0}
          role='button' onClick={onClickRoot} onKeyUp={onKeyUpRoot} style={rootStyle}
          data-testid='k-drop-holder'>
        {children}
      </div>
      {isOpen && (
        <OptimizedKDropHolderPopup style={popupStyle} close={close}>
          {content}
        </OptimizedKDropHolderPopup>
      )}
    </>
  );
});


KDropHolder.displayName = 'KDropHolder';
export default KDropHolder;
