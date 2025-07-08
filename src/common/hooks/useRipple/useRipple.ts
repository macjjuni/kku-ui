import { CSSProperties, KeyboardEvent, MouseEvent, RefObject, useRef } from 'react';
import lodashUtil from '@/common/util/lodashUtil';
import styles from '@/common/util/style';


const rippleElementTag = 'span';
const rippleIdentityClass = 'k-ripple';
const rippleAnimationName = 'ripple-effect';
const rippleCreateAnimationTime = 400;
const rippleRemoveAnimationTime = 240;


export default function useRipple(elementRef: RefObject<HTMLElement | null>) {

  // region [Hooks]
  const rippleTaskRef = useRef<Promise<string>>(null);
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

    const uniqueRippleId = lodashUtil.uniqueId('k-ripple-');

    rippleTaskRef.current = new Promise((resolve) => {

      const { x, y, width, height } = elementRef.current!.getBoundingClientRect();

      const { // Default values for Keyboard event
        clientX = x + (width / 2),
        clientY = y + (height / 2),
      } = event as MouseEvent;
      const radius = Math.sqrt(width * width + height * height);

      const ripple = document.createElement(rippleElementTag);
      ripple.classList.add(rippleIdentityClass);
      ripple.classList.add(uniqueRippleId);

      const computedStyle = window.getComputedStyle(elementRef.current!);
      const textColor = computedStyle.color || 'rgb(0, 0, 0)';

      const rgbMatch = textColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
      let rippleTextColor = 'rgba(0, 0, 0, 0.1)'; // 기본값
      if (rgbMatch) {
        const [, r, g, b] = rgbMatch;
        rippleTextColor = `rgba(${r}, ${g}, ${b}, 0.4)`;
      }

      const rippleStyle: CSSProperties = {
        top: `${((clientY - y - radius) / height) * 100}%`,
        left: `${((clientX - x - radius) / width) * 100}%`,
        width: `${radius * 2}px`,
        height: `${radius * 2}px`,
        animation: `${rippleCreateAnimationTime / 1000}s ${rippleAnimationName} ease`,
        background: rippleTextColor,
      };

      styles.setStyleElement(ripple, rippleStyle);
      elementRef.current!.append(ripple);

      setTimeout(() => {

        resolve(uniqueRippleId);
      }, rippleCreateAnimationTime);
    });
  };

  const remove = () => {

    rippleTaskRef.current?.then((rippleId) => {

      const rippleElements = elementRef.current?.getElementsByClassName(rippleId);
      const el = rippleElements?.[0];
      if (el && el instanceof HTMLElement) {
        styles.setStyleElement(el, {
          animation: `${rippleRemoveAnimationTime / 1000}s ripple-hide-effect ease`,
        })
        setTimeout(() => {
          rippleElements[0]?.remove();
        }, rippleRemoveAnimationTime)
      }
    });
  };
  // endregion

  return { register, remove };
}
