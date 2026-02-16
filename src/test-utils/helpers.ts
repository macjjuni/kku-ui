import { render, waitFor, type RenderOptions } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { ReactElement } from 'react';

/**
 * userEvent.setup()과 render()를 통합한 헬퍼
 * 모든 테스트에서 일관되게 사용 가능
 *
 * @example
 * const { user, getByText } = renderWithUser(<MyComponent />);
 * await user.click(getByText('Button'));
 */
export function renderWithUser(
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>,
) {
  return {
    user: userEvent.setup(),
    ...render(ui, options),
  };
}

/**
 * Portal로 렌더링된 비동기 요소를 기다리는 헬퍼
 * Radix UI 컴포넌트(Dialog, Popover 등)에서 사용
 *
 * @param queryFn - screen.findByText, screen.queryByRole 등
 * @param timeout - 대기 시간 (기본 3000ms)
 *
 * @example
 * await waitForPortalRender(() => screen.findByText('Dialog Content'));
 */
export async function waitForPortalRender<T>(
  queryFn: () => Promise<T>,
  timeout = 3000,
): Promise<T> {
  return waitFor(queryFn, { timeout });
}

/**
 * 접근성 속성을 일괄 검증하는 헬퍼
 * ARIA 속성, role 등을 한 번에 확인
 *
 * @param element - 검증할 DOM 요소
 * @param attributes - 기대하는 속성들 (key-value)
 *
 * @example
 * expectA11yAttributes(button, {
 *   role: 'button',
 *   'aria-label': 'Close dialog',
 *   'aria-pressed': 'false',
 * });
 */
export function expectA11yAttributes(
  element: HTMLElement,
  attributes: Record<string, string | null>,
) {
  Object.entries(attributes).forEach(([key, value]) => {
    if (value === null) {
      expect(element).not.toHaveAttribute(key);
    } else {
      expect(element.getAttribute(key)).toBe(value);
    }
  });
}

/**
 * Portal 요소가 사라질 때까지 대기하는 헬퍼
 * Dialog, Popover 닫힘 확인에 사용
 *
 * @param queryFn - screen.queryByText 등
 * @param timeout - 대기 시간 (기본 1000ms)
 *
 * @example
 * await waitForPortalDisappear(() => screen.queryByText('Dialog Content'));
 */
export async function waitForPortalDisappear(
  queryFn: () => HTMLElement | null,
  timeout = 1000,
) {
  await waitFor(
    () => {
      expect(queryFn()).not.toBeInTheDocument();
    },
    { timeout },
  );
}

/**
 * 여러 클래스가 동시에 적용되었는지 검증
 * CVA variants 테스트에 유용
 *
 * @param element - 검증할 DOM 요소
 * @param classes - 기대하는 클래스 배열
 *
 * @example
 * expectClasses(button, ['h-8', 'px-3', 'text-sm']); // size="sm"
 */
export function expectClasses(element: HTMLElement, classes: string[]) {
  classes.forEach((className) => {
    expect(element).toHaveClass(className);
  });
}

/**
 * 특정 클래스들이 모두 없는지 검증
 *
 * @param element - 검증할 DOM 요소
 * @param classes - 없어야 하는 클래스 배열
 *
 * @example
 * expectNoClasses(button, ['border-destructive', 'text-destructive']);
 */
export function expectNoClasses(element: HTMLElement, classes: string[]) {
  classes.forEach((className) => {
    expect(element).not.toHaveClass(className);
  });
}

/**
 * 요소가 비활성화 상태인지 확인
 * disabled 속성 + aria-disabled 모두 검증
 *
 * @param element - 검증할 DOM 요소
 *
 * @example
 * expectDisabled(button);
 */
export function expectDisabled(element: HTMLElement) {
  expect(element).toBeDisabled();
  // Radix UI는 aria-disabled도 사용
  if (element.hasAttribute('aria-disabled')) {
    expect(element).toHaveAttribute('aria-disabled', 'true');
  }
}

/**
 * 요소가 활성화 상태인지 확인
 *
 * @param element - 검증할 DOM 요소
 *
 * @example
 * expectEnabled(button);
 */
export function expectEnabled(element: HTMLElement) {
  expect(element).toBeEnabled();
  if (element.hasAttribute('aria-disabled')) {
    expect(element).toHaveAttribute('aria-disabled', 'false');
  }
}

/**
 * 포커스 상태 확인
 *
 * @param element - 검증할 DOM 요소
 *
 * @example
 * expectFocused(input);
 */
export function expectFocused(element: HTMLElement) {
  expect(element).toHaveFocus();
}

/**
 * 요소가 보이는지 확인 (visibility 기준)
 *
 * @param element - 검증할 DOM 요소
 *
 * @example
 * expectVisible(dialog);
 */
export function expectVisible(element: HTMLElement) {
  expect(element).toBeVisible();
}

/**
 * 요소가 숨겨졌는지 확인 (not in document or not visible)
 *
 * @param element - 검증할 DOM 요소 또는 null
 *
 * @example
 * expectHidden(screen.queryByText('Hidden Text'));
 */
export function expectHidden(element: HTMLElement | null) {
  if (element === null) {
    expect(element).not.toBeInTheDocument();
  } else {
    expect(element).not.toBeVisible();
  }
}

/**
 * Radix UI data-state 속성 검증
 * open/closed, checked/unchecked 등
 *
 * @param element - 검증할 DOM 요소
 * @param state - 기대하는 상태 ('open' | 'closed' | 'checked' | 'unchecked')
 *
 * @example
 * expectDataState(accordionContent, 'open');
 */
export function expectDataState(
  element: HTMLElement,
  state: 'open' | 'closed' | 'checked' | 'unchecked' | string,
) {
  expect(element).toHaveAttribute('data-state', state);
}
