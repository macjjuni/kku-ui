import { CSSProperties } from 'react';

const setStyleElement = (element: HTMLElement, attrs: CSSProperties): void => {
  if (attrs !== undefined) {
    Object.keys(attrs).forEach((key: keyof attrs) => {
      element.style[key] = attrs[key];
    });
  }
};

export default { setStyleElement };
