import { renderHook, act } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import useDynamicRefs from './useDynamicRefs';

describe('useDynamicRefs', () => {
  // region [Basic Tests]
  it('초기 상태에서 빈 refs 배열을 반환해야 한다', () => {
    const { result } = renderHook(() => useDynamicRefs<HTMLDivElement>());

    expect(result.current.refs).toEqual([]);
  });

  it('handleRef 함수를 반환해야 한다', () => {
    const { result } = renderHook(() => useDynamicRefs<HTMLDivElement>());

    expect(result.current.handleRef).toBeDefined();
    expect(typeof result.current.handleRef).toBe('function');
  });
  // endregion

  // region [Ref Registration Tests]
  it('새로운 ref를 등록할 수 있어야 한다', () => {
    const { result } = renderHook(() => useDynamicRefs<HTMLDivElement>());

    const element = document.createElement('div');

    act(() => {
      const refCallback = result.current.handleRef('item-1');
      refCallback(element);
    });

    expect(result.current.refs).toHaveLength(1);
    expect(result.current.refs[0]).toBe(element);
  });

  it('여러 개의 ref를 순차적으로 등록할 수 있어야 한다', () => {
    const { result } = renderHook(() => useDynamicRefs<HTMLDivElement>());

    const element1 = document.createElement('div');
    const element2 = document.createElement('div');
    const element3 = document.createElement('div');

    act(() => {
      result.current.handleRef('item-1')(element1);
      result.current.handleRef('item-2')(element2);
      result.current.handleRef('item-3')(element3);
    });

    expect(result.current.refs).toHaveLength(3);
    expect(result.current.refs[0]).toBe(element1);
    expect(result.current.refs[1]).toBe(element2);
    expect(result.current.refs[2]).toBe(element3);
  });

  it('동일한 key로 다시 등록하면 기존 ref를 업데이트해야 한다', () => {
    const { result } = renderHook(() => useDynamicRefs<HTMLDivElement>());

    const element1 = document.createElement('div');
    const element2 = document.createElement('div');

    act(() => {
      // 첫 번째 등록
      result.current.handleRef('item-1')(element1);
    });

    expect(result.current.refs).toHaveLength(1);
    expect(result.current.refs[0]).toBe(element1);

    act(() => {
      // 같은 key로 업데이트
      result.current.handleRef('item-1')(element2);
    });

    // 길이는 그대로, 요소만 변경
    expect(result.current.refs).toHaveLength(1);
    expect(result.current.refs[0]).toBe(element2);
  });
  // endregion

  // region [Key Management Tests]
  it('각 key에 해당하는 ref를 올바른 위치에 저장해야 한다', () => {
    const { result } = renderHook(() => useDynamicRefs<HTMLDivElement>());

    const element1 = document.createElement('div');
    const element2 = document.createElement('div');
    const element3 = document.createElement('div');

    act(() => {
      result.current.handleRef('first')(element1);
      result.current.handleRef('second')(element2);
      result.current.handleRef('third')(element3);
    });

    // 등록 순서대로 저장
    expect(result.current.refs[0]).toBe(element1);
    expect(result.current.refs[1]).toBe(element2);
    expect(result.current.refs[2]).toBe(element3);

    // 중간 key 업데이트
    const newElement2 = document.createElement('div');
    act(() => {
      result.current.handleRef('second')(newElement2);
    });

    // 순서 유지, 해당 인덱스만 변경
    expect(result.current.refs[0]).toBe(element1);
    expect(result.current.refs[1]).toBe(newElement2);
    expect(result.current.refs[2]).toBe(element3);
  });

  it('순서에 관계없이 key로 ref를 찾아 업데이트해야 한다', () => {
    const { result } = renderHook(() => useDynamicRefs<HTMLDivElement>());

    const element1 = document.createElement('div');
    const element2 = document.createElement('div');
    const element3 = document.createElement('div');

    act(() => {
      result.current.handleRef('a')(element1);
      result.current.handleRef('b')(element2);
      result.current.handleRef('c')(element3);
    });

    // 역순으로 업데이트
    const newA = document.createElement('div');
    const newB = document.createElement('div');
    const newC = document.createElement('div');

    act(() => {
      result.current.handleRef('c')(newC);
      result.current.handleRef('a')(newA);
      result.current.handleRef('b')(newB);
    });

    // 원래 순서 유지
    expect(result.current.refs[0]).toBe(newA);
    expect(result.current.refs[1]).toBe(newB);
    expect(result.current.refs[2]).toBe(newC);
  });
  // endregion

  // region [Callback Stability Tests]
  it('handleRef 함수는 리렌더링 시에도 안정적이어야 한다 (useCallback)', () => {
    const { result, rerender } = renderHook(() => useDynamicRefs<HTMLDivElement>());

    const firstHandleRef = result.current.handleRef;

    rerender();
    rerender();
    rerender();

    expect(result.current.handleRef).toBe(firstHandleRef);
  });

  it('handleRef로 생성된 callback 함수들은 독립적이어야 한다', () => {
    const { result } = renderHook(() => useDynamicRefs<HTMLDivElement>());

    const callback1 = result.current.handleRef('item-1');
    const callback2 = result.current.handleRef('item-2');

    expect(callback1).not.toBe(callback2);

    const element1 = document.createElement('div');
    const element2 = document.createElement('div');

    act(() => {
      callback1(element1);
      callback2(element2);
    });

    expect(result.current.refs[0]).toBe(element1);
    expect(result.current.refs[1]).toBe(element2);
  });
  // endregion

  // region [Type Safety Tests]
  it('제네릭 타입을 올바르게 처리해야 한다', () => {
    const { result } = renderHook(() => useDynamicRefs<HTMLButtonElement>());

    const button = document.createElement('button');

    act(() => {
      result.current.handleRef('btn-1')(button);
    });

    expect(result.current.refs[0]).toBe(button);
    expect(result.current.refs[0].tagName).toBe('BUTTON');
  });

  it('다양한 HTML 요소 타입을 지원해야 한다', () => {
    const { result: divResult } = renderHook(() => useDynamicRefs<HTMLDivElement>());
    const { result: inputResult } = renderHook(() => useDynamicRefs<HTMLInputElement>());
    const { result: buttonResult } = renderHook(() => useDynamicRefs<HTMLButtonElement>());

    const div = document.createElement('div');
    const input = document.createElement('input');
    const button = document.createElement('button');

    act(() => {
      divResult.current.handleRef('div-1')(div);
      inputResult.current.handleRef('input-1')(input);
      buttonResult.current.handleRef('btn-1')(button);
    });

    expect(divResult.current.refs[0]).toBe(div);
    expect(inputResult.current.refs[0]).toBe(input);
    expect(buttonResult.current.refs[0]).toBe(button);
  });
  // endregion

  // region [Edge Cases]
  it('null ref를 등록해도 에러가 발생하지 않아야 한다', () => {
    const { result } = renderHook(() => useDynamicRefs<HTMLDivElement | null>());

    expect(() => {
      act(() => {
        result.current.handleRef('item-1')(null);
      });
    }).not.toThrow();

    expect(result.current.refs).toHaveLength(1);
    expect(result.current.refs[0]).toBeNull();
  });

  it('빈 문자열 key도 허용해야 한다', () => {
    const { result } = renderHook(() => useDynamicRefs<HTMLDivElement>());

    const element = document.createElement('div');

    act(() => {
      result.current.handleRef('')(element);
    });

    expect(result.current.refs).toHaveLength(1);
    expect(result.current.refs[0]).toBe(element);
  });

  it('대량의 ref를 처리할 수 있어야 한다', () => {
    const { result } = renderHook(() => useDynamicRefs<HTMLDivElement>());

    const elements = Array.from({ length: 100 }, () => document.createElement('div'));

    act(() => {
      elements.forEach((element, i) => {
        result.current.handleRef(`item-${i}`)(element);
      });
    });

    expect(result.current.refs).toHaveLength(100);
    expect(result.current.refs[0]).toBe(elements[0]);
    expect(result.current.refs[50]).toBe(elements[50]);
    expect(result.current.refs[99]).toBe(elements[99]);
  });

  it('동일한 key를 여러 번 빠르게 업데이트해도 안정적이어야 한다', () => {
    const { result } = renderHook(() => useDynamicRefs<HTMLDivElement>());

    const elements = Array.from({ length: 10 }, () => document.createElement('div'));

    act(() => {
      // 같은 key로 10번 업데이트
      elements.forEach((element) => {
        result.current.handleRef('same-key')(element);
      });
    });

    // 마지막 요소만 저장됨
    expect(result.current.refs).toHaveLength(1);
    expect(result.current.refs[0]).toBe(elements[9]);
  });

  it('특수문자가 포함된 key도 처리해야 한다', () => {
    const { result } = renderHook(() => useDynamicRefs<HTMLDivElement>());

    const element1 = document.createElement('div');
    const element2 = document.createElement('div');
    const element3 = document.createElement('div');

    act(() => {
      result.current.handleRef('item-1@test')(element1);
      result.current.handleRef('item#2$test')(element2);
      result.current.handleRef('item[3]test')(element3);
    });

    expect(result.current.refs).toHaveLength(3);
    expect(result.current.refs[0]).toBe(element1);
    expect(result.current.refs[1]).toBe(element2);
    expect(result.current.refs[2]).toBe(element3);
  });
  // endregion

  // region [Real World Use Case]
  it('동적 리스트 렌더링 시나리오를 시뮬레이션해야 한다', () => {
    const { result } = renderHook(() => useDynamicRefs<HTMLDivElement>());

    // 초기 3개 아이템
    const items = ['item-1', 'item-2', 'item-3'];
    const elements: Record<string, HTMLDivElement> = {};

    act(() => {
      items.forEach((id) => {
        const element = document.createElement('div');
        element.id = id;
        elements[id] = element;
        result.current.handleRef(id)(element);
      });
    });

    expect(result.current.refs).toHaveLength(3);

    // 아이템 추가
    act(() => {
      const newElement = document.createElement('div');
      newElement.id = 'item-4';
      elements['item-4'] = newElement;
      result.current.handleRef('item-4')(newElement);
    });

    expect(result.current.refs).toHaveLength(4);

    // 중간 아이템 업데이트 (재렌더링)
    act(() => {
      const updatedElement = document.createElement('div');
      updatedElement.id = 'item-2-updated';
      elements['item-2'] = updatedElement;
      result.current.handleRef('item-2')(updatedElement);
    });

    expect(result.current.refs).toHaveLength(4);
    expect(result.current.refs[1].id).toBe('item-2-updated');
  });
  // endregion
});
