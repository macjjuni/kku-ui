import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { CSSTransitionProps } from '@/components/css-transition/CSSTransition.interface';


const CSSTransition = ({
  children,
  className,
  show,
  easing = 'ease-out',
  timeout,
  startAnimation,
  endAnimation,
}: CSSTransitionProps) => {

  // region [Hooks]

  const [isLoad, setIsLoad] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

  // endregion


  // region [Styles]

  const rootClass = useMemo(() => {
    const clazz = ['k-css-transition'];
    if (className) {
      clazz.push(className);
    }
    return clazz.join(' ');
  }, [className]);

  // endregion


  // region [Privates]

  const startAnimationEffect = useCallback(() => {
    requestAnimationFrame(() => {
      elementRef.current?.animate(
        [
          {
            opacity: startAnimation?.opacity || 0,
            transform: `translate(${startAnimation?.x || 0}px, ${startAnimation?.y || 0}px)`,
          },
          { opacity: 1, transform: `translate(${endAnimation?.x || 0}px, ${endAnimation?.y || 0}px)` },
        ],
        { duration: timeout, easing, fill: 'forwards' },
      );
    });
  }, []);

  const initializeAnimation = useCallback((visible: boolean) => {
    if (visible) {
      setIsLoad(true);
    } else {
      const animation = elementRef.current?.animate(
        [
          {
            opacity: startAnimation?.opacity || 1,
            transform: `translate(${endAnimation?.x || 0}px, ${endAnimation?.y || 0}px)`,
          },
          {
            opacity: endAnimation?.opacity || 0,
            transform: `translate(${startAnimation?.x || 0}px, ${startAnimation?.y || 0}px)`,
          },
        ],
        { duration: timeout, easing, fill: 'forwards' },
      );
      if (animation) {
        animation.onfinish = () => setIsLoad(false);
      }
    }
  }, []);

  // endregion


  // region [Life Cycles]

  useEffect(() => {
    initializeAnimation(show);
  }, [show, initializeAnimation]);

  useEffect(() => {
    if (isLoad) {
      startAnimationEffect();
    }
  }, [isLoad, startAnimationEffect]);

  // endregion


  return isLoad ? <div className={rootClass} ref={elementRef}>{children}</div> : null;
};


export default memo(CSSTransition);
