import { renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import useStableId from './useStableId';

describe('useStableId', () => {
  // region [Basic Tests]
  it('고유한 ID를 생성해야 한다', () => {
    const { result: result1 } = renderHook(() => useStableId());
    const { result: result2 } = renderHook(() => useStableId());

    expect(result1.current).toBeTruthy();
    expect(result2.current).toBeTruthy();
    // 각 호출마다 다른 ID 생성
    expect(result1.current).not.toBe(result2.current);
  });

  it('prefix가 없으면 React의 기본 ID 형식을 반환해야 한다', () => {
    const { result } = renderHook(() => useStableId());

    // React 18+ useId는 _r_로 시작하거나 :r로 시작하는 형식
    expect(result.current).toMatch(/^(_r_|:r)/);
  });
  // endregion

  // region [Prefix Tests]
  it('prefix가 제공되면 "prefix-id" 형식으로 ID를 생성해야 한다', () => {
    const { result } = renderHook(() => useStableId('input'));

    expect(result.current).toMatch(/^input-(_r_|:r)/);
    expect(result.current).toContain('input-');
  });

  it('다양한 prefix를 지원해야 한다', () => {
    const { result: result1 } = renderHook(() => useStableId('dialog'));
    const { result: result2 } = renderHook(() => useStableId('popover'));
    const { result: result3 } = renderHook(() => useStableId('menu-item'));

    expect(result1.current).toContain('dialog-');
    expect(result2.current).toContain('popover-');
    expect(result3.current).toContain('menu-item-');
  });
  // endregion

  // region [Stability Tests]
  it('리렌더링 시에도 동일한 ID를 유지해야 한다 (stable)', () => {
    const { result, rerender } = renderHook(() => useStableId('stable'));

    const firstId = result.current;
    rerender();
    rerender();
    rerender();

    expect(result.current).toBe(firstId);
  });

  it('prefix가 변경되어도 기본 ID는 안정적이어야 한다', () => {
    const { result, rerender } = renderHook(
      ({ prefix }) => useStableId(prefix),
      { initialProps: { prefix: 'first' } },
    );

    const firstId = result.current;
    expect(firstId).toContain('first-');

    // prefix 변경
    rerender({ prefix: 'second' });

    // ID의 기본 부분은 동일하지만 prefix만 변경됨
    expect(result.current).toContain('second-');
    // 기본 ID 추출 (prefix 제거)
    const firstBaseId = firstId.replace('first-', '');
    const secondBaseId = result.current.replace('second-', '');
    expect(firstBaseId).toBe(secondBaseId);
  });
  // endregion

  // region [SSR Safety Tests]
  it('여러 컴포넌트가 동일한 prefix를 사용해도 고유한 ID를 생성해야 한다', () => {
    const { result: result1 } = renderHook(() => useStableId('input'));
    const { result: result2 } = renderHook(() => useStableId('input'));
    const { result: result3 } = renderHook(() => useStableId('input'));

    // prefix는 동일하지만 ID는 모두 다름
    expect(result1.current).not.toBe(result2.current);
    expect(result2.current).not.toBe(result3.current);
    expect(result1.current).not.toBe(result3.current);

    // 모두 같은 prefix 포함
    expect(result1.current).toContain('input-');
    expect(result2.current).toContain('input-');
    expect(result3.current).toContain('input-');
  });
  // endregion

  // region [Edge Cases]
  it('빈 문자열 prefix는 prefix 없는 동작과 동일해야 한다', () => {
    const { result } = renderHook(() => useStableId(''));

    // 빈 문자열은 falsy이므로 prefix 없이 반환
    expect(result.current).toMatch(/^(_r_|:r)/);
  });

  it('숫자, 하이픈, 언더스코어를 포함한 prefix를 지원해야 한다', () => {
    const { result: result1 } = renderHook(() => useStableId('input-123'));
    const { result: result2 } = renderHook(() => useStableId('field_name'));
    const { result: result3 } = renderHook(() => useStableId('item-1_sub'));

    expect(result1.current).toContain('input-123-');
    expect(result2.current).toContain('field_name-');
    expect(result3.current).toContain('item-1_sub-');
  });

  it('undefined prefix는 prefix 없는 동작과 동일해야 한다', () => {
    const { result: result1 } = renderHook(() => useStableId());
    const { result: result2 } = renderHook(() => useStableId(undefined));

    // 둘 다 prefix 없는 형식
    expect(result1.current).toMatch(/^(_r_|:r)/);
    expect(result2.current).toMatch(/^(_r_|:r)/);
  });
  // endregion
});
