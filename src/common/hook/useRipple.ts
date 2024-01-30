import { CSSProperties, KeyboardEvent, MouseEvent, MutableRefObject, useRef, useState } from 'react';
import { uniqueId } from 'lodash';
import colorUtil from '@/common/util/color.ts';
import styles from '@/common/util/style.ts';

type RippleStatus = 'on' | 'off';

const rippleElementTag = 'span';

const useRipple = (elementRef: MutableRefObject<HTMLElement>) => {

  // region [Hooks]

  const [status, setStatus] = useState<RippleStatus>('off');
  const rippleTaskRef = useRef<Promise<string>>();

  // endregion


  const register = (event: MouseEvent | KeyboardEvent) => {

    setStatus('on');
    const uniqueRippleId = uniqueId('k-ripple-1');

    rippleTaskRef.current = new Promise((resolve) => {

      const { x, y, width, height } = elementRef.current.getBoundingClientRect();

      const { // Default values for Keyboard event
        clientX = x + (width / 2),
        clientY = y + (height / 2),
      } = event as MouseEvent;
      const radius = Math.sqrt(width * width + height * height);

      const ripple = document.createElement(rippleElementTag);
      ripple.classList.add(uniqueRippleId);

      const baseColor = window.getComputedStyle(elementRef.current)
        .getPropertyValue('background-color');

      const rippleStyle: CSSProperties = {
        position: 'absolute',
        top: `${((clientY - y - radius) / height) * 100}%`,
        left: `${((clientX - x - radius) / width) * 100}%`,
        width: `${radius * 2}px`,
        height: `${radius * 2}px`,
        opacity: '0.1',
        background: colorUtil.shadeColor(baseColor, 100),
        borderRadius: '50%',
        animation: '0.35s ripple linear',
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
