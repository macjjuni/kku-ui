import { CSSProperties, KeyboardEvent, MouseEvent, MutableRefObject, useRef, useState } from 'react';
import colorUtil from '@/common/util/color.ts';
import styles from '@/common/util/style.ts';
import loadsh from '@/common/util/lodashUtil.ts';

type RippleStatus = 'on' | 'off';

const rippleElementTag = 'span';
const rippleAnimationName = 'ripple-effect';

const useRipple = (elementRef: MutableRefObject<HTMLElement>) => {

  // region [Hooks]

  const [status, setStatus] = useState<RippleStatus>('off');
  const rippleTaskRef = useRef<Promise<string>>();

  // endregion


  const register = (event: MouseEvent | KeyboardEvent<HTMLButtonElement>) => {

    // 키보드 이벤트 제어
    const KBEvent = event as KeyboardEvent;
    if (event.type.includes('key')) {
      if (KBEvent.key !== 'Enter' && KBEvent.key !== ' ') return;

      const buttonElement = event.target as HTMLElement;
      const rippleRefs = buttonElement.getElementsByClassName('ripple');
      if (rippleRefs?.length > 0) return;
    }

    setStatus('on');
    const uniqueRippleId = loadsh.uniqueId('k-ripple-');

    rippleTaskRef.current = new Promise((resolve) => {

      const { x, y, width, height } = elementRef.current.getBoundingClientRect();

      const { // Default values for Keyboard event
        clientX = x + (width / 2),
        clientY = y + (height / 2),
      } = event as MouseEvent;
      const radius = Math.sqrt(width * width + height * height);

      const ripple = document.createElement(rippleElementTag);
      ripple.classList.add(uniqueRippleId);
      ripple.classList.add('ripple');

      const baseColor = window.getComputedStyle(elementRef.current)
        .getPropertyValue('color');

      const rippleStyle: CSSProperties = {
        top: `${((clientY - y - radius) / height) * 100}%`,
        left: `${((clientX - x - radius) / width) * 100}%`,
        width: `${radius * 2}px`,
        height: `${radius * 2}px`,
        background: colorUtil.shadeColor(baseColor, 0),
        animation: `0.35s ${rippleAnimationName} linear`,
      };


      styles.setStyleElement(ripple, rippleStyle);

      elementRef.current.append(ripple);

      setTimeout(() => {
        resolve(uniqueRippleId);
      }, 350);
    });

  };

  const remove = () => {

    rippleTaskRef.current?.then((rippleId) => {

      const rippleElement = elementRef.current?.getElementsByClassName(rippleId);
      rippleElement[0]?.remove();
      setStatus('off');
    });
  };


  return { status, register, remove };
};

export default useRipple;
