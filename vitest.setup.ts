/* eslint-disable class-methods-use-this, @typescript-eslint/no-unused-vars, @typescript-eslint/lines-between-class-members */
import '@testing-library/jest-dom'

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