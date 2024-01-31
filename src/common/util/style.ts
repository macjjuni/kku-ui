import { CSSProperties } from 'react';

const setStyleElement = (element: HTMLElement, style: CSSProperties): void => {
  Object.entries(style).forEach(([property, value]) => {
    element.style.setProperty(property, value as string);
  });
};

export default { setStyleElement };
