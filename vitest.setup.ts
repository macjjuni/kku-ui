import '@testing-library/jest-dom';

class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

Object.defineProperty(globalThis, 'ResizeObserver', {
  writable: true,
  configurable: true,
  value: ResizeObserver,
});

// Mock Pointer Capture API for vaul (Drawer) - jsdom does not implement these
HTMLElement.prototype.setPointerCapture = () => {};
HTMLElement.prototype.releasePointerCapture = () => {};
HTMLElement.prototype.hasPointerCapture = () => false;

// Mock getComputedStyle().transform for vaul's getTranslate() - jsdom returns '' (falsy)
// which causes vaul to fall through to webkitTransform (undefined), then crash on .match()
const _getComputedStyle = window.getComputedStyle.bind(window);
window.getComputedStyle = (element: Element, pseudoElement?: string | null) => {
  const style = _getComputedStyle(element, pseudoElement);
  return new Proxy(style, {
    get(target, prop) {
      if (prop === 'transform' || prop === 'webkitTransform' || prop === 'mozTransform') return 'none';
      const value = target[prop as keyof typeof target];
      return typeof value === 'function' ? value.bind(target) : value;
    },
  });
};

// Mock matchMedia for components that use it (e.g., sonner/KToast)
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {}, // deprecated
    removeListener: () => {}, // deprecated
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => true,
  }),
});
