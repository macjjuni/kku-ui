import { CSSProperties, KeyboardEvent, MouseEvent, MutableRefObject, useRef } from 'react';
import colorUtil from '@/common/util/color';
import loadashUtil from '@/common/util/lodashUtil';
import styles from '@/common/util/style';

const rippleElementTag = 'span';
const rippleIdentityClass = 'k-ripple';
const rippleAnimationName = 'ripple-effect';
const rippleAnimationTime = 400;

const useRipple = (elementRef: MutableRefObject<HTMLElement>) => {

  // region [Hooks]

  const rippleTaskRef = useRef<Promise<string>>();

  // endregion

  // region [Privates]

  const register = (event: MouseEvent | KeyboardEvent<HTMLElement>) => {

    // 키보드 이벤트 제어
    if (event.type.includes('key')) {
      const keyboardEvent = event as KeyboardEvent;
      if (keyboardEvent.key !== 'Enter' && keyboardEvent.key !== ' ') return;

      const targetElement = event.target as HTMLElement;
      const rippleElements = targetElement.getElementsByClassName(rippleIdentityClass);
      if (rippleElements?.length > 0) return;
    }

    const uniqueRippleId = loadashUtil.uniqueId('k-ripple-');

    rippleTaskRef.current = new Promise((resolve) => {

      const { x, y, width, height } = elementRef.current.getBoundingClientRect();

      const { // Default values for Keyboard event
        clientX = x + (width / 2),
        clientY = y + (height / 2),
      } = event as MouseEvent;
      const radius = Math.sqrt(width * width + height * height);

      const ripple = document.createElement(rippleElementTag);
      ripple.classList.add(rippleIdentityClass);
      ripple.classList.add(uniqueRippleId);

      const baseColor = window.getComputedStyle(elementRef.current)
        .getPropertyValue('color');

      const rippleStyle: CSSProperties = {
        top: `${((clientY - y - radius) / height) * 100}%`,
        left: `${((clientX - x - radius) / width) * 100}%`,
        width: `${radius * 2}px`,
        height: `${radius * 2}px`,
        background: colorUtil.tintColor(baseColor, 26),
        animation: `${rippleAnimationTime / 1000}s ${rippleAnimationName} ease`,
      };

      styles.setStyleElement(ripple, rippleStyle);
      elementRef.current.append(ripple);

      setTimeout(() => {

        resolve(uniqueRippleId);
      }, rippleAnimationTime);
    });

  };

  const remove = () => {

    rippleTaskRef.current?.then((rippleId) => {

      const rippleElements = elementRef.current?.getElementsByClassName(rippleId);
      if (rippleElements) { rippleElements[0]?.remove(); }
    });
  };

  // endregion

  return { register, remove };
};

export default useRipple;
