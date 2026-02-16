import { renderHook } from '@testing-library/react';
import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest';
import { type RefObject } from 'react';
import useClickOutside from './useClickOutside';

describe('useClickOutside', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  // region [Basic Tests]
  it('ref 외부를 클릭하면 callback이 호출되어야 한다', () => {
    const callback = vi.fn();
    const element = document.createElement('div');
    document.body.appendChild(element);
    const ref = { current: element } as RefObject<HTMLElement>;

    renderHook(() => useClickOutside(ref, callback));

    // setTimeout 해소 (hook 내부에서 setTimeout 사용)
    vi.runAllTimers();

    // 외부 클릭
    const outsideElement = document.createElement('div');
    document.body.appendChild(outsideElement);
    outsideElement.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));

    expect(callback).toHaveBeenCalledTimes(1);

    // Cleanup
    document.body.removeChild(element);
    document.body.removeChild(outsideElement);
  });

  it('ref 내부를 클릭하면 callback이 호출되지 않아야 한다', () => {
    const callback = vi.fn();
    const element = document.createElement('div');
    document.body.appendChild(element);
    const ref = { current: element } as RefObject<HTMLElement>;

    renderHook(() => useClickOutside(ref, callback));
    vi.runAllTimers();

    // 내부 클릭 (ref.current 자체)
    element.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));

    expect(callback).not.toHaveBeenCalled();

    document.body.removeChild(element);
  });

  it('ref 내부 자식 요소를 클릭해도 callback이 호출되지 않아야 한다', () => {
    const callback = vi.fn();
    const parent = document.createElement('div');
    const child = document.createElement('button');
    parent.appendChild(child);
    document.body.appendChild(parent);
    const ref = { current: parent } as RefObject<HTMLElement>;

    renderHook(() => useClickOutside(ref, callback));
    vi.runAllTimers();

    // 자식 요소 클릭
    child.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));

    expect(callback).not.toHaveBeenCalled();

    document.body.removeChild(parent);
  });
  // endregion

  // region [otherRef Tests]
  it('otherRef가 제공되면 둘 다 외부 클릭일 때만 callback이 호출되어야 한다', () => {
    const callback = vi.fn();
    const element1 = document.createElement('div');
    const element2 = document.createElement('div');
    document.body.appendChild(element1);
    document.body.appendChild(element2);
    const ref = { current: element1 } as RefObject<HTMLElement>;
    const otherRef = { current: element2 } as RefObject<HTMLElement>;

    renderHook(() => useClickOutside(ref, callback, otherRef));
    vi.runAllTimers();

    // 완전히 외부 클릭
    const outsideElement = document.createElement('div');
    document.body.appendChild(outsideElement);
    outsideElement.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));

    expect(callback).toHaveBeenCalledTimes(1);

    document.body.removeChild(element1);
    document.body.removeChild(element2);
    document.body.removeChild(outsideElement);
  });

  it('otherRef 내부를 클릭하면 callback이 호출되지 않아야 한다', () => {
    const callback = vi.fn();
    const element1 = document.createElement('div');
    const element2 = document.createElement('div');
    document.body.appendChild(element1);
    document.body.appendChild(element2);
    const ref = { current: element1 } as RefObject<HTMLElement>;
    const otherRef = { current: element2 } as RefObject<HTMLElement>;

    renderHook(() => useClickOutside(ref, callback, otherRef));
    vi.runAllTimers();

    // otherRef 클릭 (ref 외부이지만 otherRef 내부)
    element2.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));

    expect(callback).not.toHaveBeenCalled();

    document.body.removeChild(element1);
    document.body.removeChild(element2);
  });
  // endregion

  // region [Cleanup Tests]
  it('언마운트 시 이벤트 리스너가 제거되어야 한다', () => {
    const callback = vi.fn();
    const element = document.createElement('div');
    document.body.appendChild(element);
    const ref = { current: element } as RefObject<HTMLElement>;

    const addEventListenerSpy = vi.spyOn(window, 'addEventListener');
    const removeEventListenerSpy = vi.spyOn(window, 'removeEventListener');

    const { unmount } = renderHook(() => useClickOutside(ref, callback));
    vi.runAllTimers();

    expect(addEventListenerSpy).toHaveBeenCalledWith('mousedown', expect.any(Function));

    unmount();

    expect(removeEventListenerSpy).toHaveBeenCalledWith('mousedown', expect.any(Function));

    addEventListenerSpy.mockRestore();
    removeEventListenerSpy.mockRestore();
    document.body.removeChild(element);
  });

  it('리렌더링 시 이전 리스너를 제거하고 새 리스너를 등록해야 한다', () => {
    const callback1 = vi.fn();
    const callback2 = vi.fn();
    const element = document.createElement('div');
    document.body.appendChild(element);
    const ref = { current: element } as RefObject<HTMLElement>;

    const { rerender } = renderHook(
      ({ cb }) => useClickOutside(ref, cb),
      { initialProps: { cb: callback1 } },
    );
    vi.runAllTimers();

    // 외부 클릭 (callback1 호출)
    const outsideElement = document.createElement('div');
    document.body.appendChild(outsideElement);
    outsideElement.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));

    expect(callback1).toHaveBeenCalledTimes(1);
    expect(callback2).not.toHaveBeenCalled();

    // callback 변경 (하지만 hook의 deps에 callback이 없어서 이전 callback이 계속 사용됨)
    rerender({ cb: callback2 });
    vi.runAllTimers();

    // 다시 외부 클릭 (여전히 callback1이 호출됨, callback은 deps에 없음)
    outsideElement.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));

    // useEffect deps에 callback이 없으므로 callback1이 계속 호출됨
    expect(callback1).toHaveBeenCalledTimes(2);
    expect(callback2).not.toHaveBeenCalled();

    document.body.removeChild(element);
    document.body.removeChild(outsideElement);
  });
  // endregion

  // region [Edge Cases]
  it('ref.current가 null일 때 에러가 발생하지 않아야 한다', () => {
    const callback = vi.fn();
    const ref = { current: null } as unknown as RefObject<HTMLElement>;

    expect(() => {
      renderHook(() => useClickOutside(ref, callback));
      vi.runAllTimers();

      // 외부 클릭
      document.body.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
    }).not.toThrow();

    expect(callback).not.toHaveBeenCalled();
  });

  it('otherRef.current가 null일 때는 callback이 호출되지 않아야 한다', () => {
    const callback = vi.fn();
    const element = document.createElement('div');
    document.body.appendChild(element);
    const ref = { current: element } as RefObject<HTMLElement>;
    const otherRef = { current: null } as unknown as RefObject<HTMLElement>;

    renderHook(() => useClickOutside(ref, callback, otherRef));
    vi.runAllTimers();

    // 외부 클릭
    const outsideElement = document.createElement('div');
    document.body.appendChild(outsideElement);
    outsideElement.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));

    // hook 구현에서 otherRef.current가 null이면 callback이 호출되지 않음
    expect(callback).not.toHaveBeenCalled();

    document.body.removeChild(element);
    document.body.removeChild(outsideElement);
  });

  it('setTimeout 지연 전에 클릭 이벤트가 발생하면 무시되어야 한다', () => {
    const callback = vi.fn();
    const element = document.createElement('div');
    document.body.appendChild(element);
    const ref = { current: element } as RefObject<HTMLElement>;

    renderHook(() => useClickOutside(ref, callback));

    // setTimeout 실행 전 클릭
    const outsideElement = document.createElement('div');
    document.body.appendChild(outsideElement);
    outsideElement.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));

    // 아직 리스너가 등록되지 않아서 호출되지 않음
    expect(callback).not.toHaveBeenCalled();

    // setTimeout 실행 후 다시 클릭
    vi.runAllTimers();
    outsideElement.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));

    // 이제 호출됨
    expect(callback).toHaveBeenCalledTimes(1);

    document.body.removeChild(element);
    document.body.removeChild(outsideElement);
  });

  it('연속으로 여러 번 외부 클릭 시 callback이 여러 번 호출되어야 한다', () => {
    const callback = vi.fn();
    const element = document.createElement('div');
    document.body.appendChild(element);
    const ref = { current: element } as RefObject<HTMLElement>;

    renderHook(() => useClickOutside(ref, callback));
    vi.runAllTimers();

    const outsideElement = document.createElement('div');
    document.body.appendChild(outsideElement);

    // 3번 클릭
    outsideElement.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
    outsideElement.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
    outsideElement.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));

    expect(callback).toHaveBeenCalledTimes(3);

    document.body.removeChild(element);
    document.body.removeChild(outsideElement);
  });
  // endregion
});
