/**
 * 접근성(a11y) 테스트 체크리스트
 * WCAG 2.1 AA 기준 검증 헬퍼
 */

import { type UserEvent } from '@testing-library/user-event';
import { waitFor } from '@testing-library/react';

/**
 * 키보드 네비게이션 테스트
 * Tab, Enter, Space, Arrow 키 동작 검증
 *
 * @param element - 테스트할 요소
 * @param user - userEvent 인스턴스
 * @param options - 테스트 옵션
 *
 * @example
 * await testKeyboardNavigation(button, user, {
 *   keys: ['Enter', 'Space'],
 *   expectAction: () => expect(mockFn).toHaveBeenCalled(),
 * });
 */
export async function testKeyboardNavigation(
  element: HTMLElement,
  user: UserEvent,
  options: {
    keys: Array<'Tab' | 'Enter' | 'Space' | 'Escape' | 'ArrowUp' | 'ArrowDown' | 'ArrowLeft' | 'ArrowRight'>;
    expectAction?: () => void;
    shouldFocus?: boolean;
  },
) {
  const { keys, expectAction, shouldFocus = true } = options;

  if (shouldFocus) {
    element.focus();
    expect(element).toHaveFocus();
  }

  // eslint-disable-next-line no-restricted-syntax
  for (const key of keys) {
    await user.keyboard(`{${key}}`);
    if (expectAction) {
      expectAction();
    }
  }
}

/**
 * Tab 키로 포커스 순서 테스트
 *
 * @param elements - 포커스 순서대로 정렬된 요소 배열
 * @param user - userEvent 인스턴스
 *
 * @example
 * await testTabOrder([input1, input2, button], user);
 */
export async function testTabOrder(
  elements: HTMLElement[],
  user: UserEvent,
) {
  // eslint-disable-next-line no-restricted-syntax
  for (const element of elements) {
    await user.tab();
    expect(element).toHaveFocus();
  }
}

/**
 * Shift+Tab으로 역순 포커스 테스트
 *
 * @param elements - 역순으로 정렬된 요소 배열
 * @param user - userEvent 인스턴스
 *
 * @example
 * await testShiftTabOrder([button, input2, input1], user);
 */
export async function testShiftTabOrder(
  elements: HTMLElement[],
  user: UserEvent,
) {
  // 마지막 요소로 이동
  elements[0].focus();

  // eslint-disable-next-line no-restricted-syntax
  for (const element of elements) {
    expect(element).toHaveFocus();
    await user.tab({ shift: true });
  }
}

/**
 * ARIA role 검증
 *
 * @param element - 검증할 요소
 * @param expectedRole - 기대하는 role
 *
 * @example
 * validateAriaRole(button, 'button');
 */
export function validateAriaRole(
  element: HTMLElement,
  expectedRole: string,
) {
  const role = element.getAttribute('role') || element.tagName.toLowerCase();
  expect(role).toBe(expectedRole);
}

/**
 * ARIA 속성 일괄 검증
 *
 * @param element - 검증할 요소
 * @param expectedAttributes - 기대하는 ARIA 속성들
 *
 * @example
 * validateAriaAttributes(dialog, {
 *   'aria-modal': 'true',
 *   'aria-labelledby': 'dialog-title',
 *   'aria-describedby': 'dialog-description',
 * });
 */
export function validateAriaAttributes(
  element: HTMLElement,
  expectedAttributes: Record<string, string | null>,
) {
  Object.entries(expectedAttributes).forEach(([key, value]) => {
    if (value === null) {
      expect(element).not.toHaveAttribute(key);
    } else {
      expect(element).toHaveAttribute(key, value);
    }
  });
}

/**
 * aria-labelledby 연결 검증
 *
 * @param element - 검증할 요소
 * @param labelId - 라벨 요소의 ID
 *
 * @example
 * validateAriaLabelledBy(input, 'username-label');
 */
export function validateAriaLabelledBy(
  element: HTMLElement,
  labelId: string,
) {
  expect(element).toHaveAttribute('aria-labelledby', labelId);
  const label = document.getElementById(labelId);
  expect(label).toBeInTheDocument();
}

/**
 * aria-describedby 연결 검증
 *
 * @param element - 검증할 요소
 * @param descriptionId - 설명 요소의 ID
 *
 * @example
 * validateAriaDescribedBy(input, 'error-message');
 */
export function validateAriaDescribedBy(
  element: HTMLElement,
  descriptionId: string,
) {
  expect(element).toHaveAttribute('aria-describedby', descriptionId);
  const description = document.getElementById(descriptionId);
  expect(description).toBeInTheDocument();
}

/**
 * 포커스 트랩 테스트 (Dialog, Modal 등)
 *
 * @param container - 포커스를 가둘 컨테이너
 * @param user - userEvent 인스턴스
 *
 * @example
 * await testFocusTrap(dialogContent, user);
 */
export async function testFocusTrap(
  container: HTMLElement,
  user: UserEvent,
) {
  const focusableElements = container.querySelectorAll<HTMLElement>(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
  );

  expect(focusableElements.length).toBeGreaterThan(0);

  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  // 마지막 요소에서 Tab -> 첫 요소로
  lastElement.focus();
  await user.tab();
  await waitFor(() => expect(firstElement).toHaveFocus());

  // 첫 요소에서 Shift+Tab -> 마지막 요소로
  firstElement.focus();
  await user.tab({ shift: true });
  await waitFor(() => expect(lastElement).toHaveFocus());
}

/**
 * 초기 포커스 테스트
 *
 * @param expectedElement - 포커스되어야 할 요소
 * @param timeout - 대기 시간 (기본 1000ms)
 *
 * @example
 * await testInitialFocus(firstInput);
 */
export async function testInitialFocus(
  expectedElement: HTMLElement,
  timeout = 1000,
) {
  await waitFor(() => expect(expectedElement).toHaveFocus(), { timeout });
}

/**
 * Disabled 상태에서 포커스 불가 검증
 *
 * @param element - 검증할 요소
 * @param user - userEvent 인스턴스
 *
 * @example
 * await testDisabledFocus(disabledButton, user);
 */
export async function testDisabledFocus(
  element: HTMLElement,
  user: UserEvent,
) {
  expect(element).toBeDisabled();

  // Tab으로 포커스 시도
  await user.tab();
  expect(element).not.toHaveFocus();

  // 직접 포커스 시도
  element.focus();
  expect(element).not.toHaveFocus();
}

/**
 * 스크린리더 전용 텍스트 검증
 * (visually hidden but accessible)
 *
 * @param element - 검증할 요소
 *
 * @example
 * validateScreenReaderOnly(srOnlyText);
 */
export function validateScreenReaderOnly(element: HTMLElement) {
  const styles = window.getComputedStyle(element);

  // sr-only 클래스 스타일 확인
  expect(
    styles.position === 'absolute' &&
    styles.width === '1px' &&
    styles.height === '1px' &&
    styles.padding === '0px' &&
    styles.margin === '-1px' &&
    styles.overflow === 'hidden' &&
    styles.clip === 'rect(0px, 0px, 0px, 0px)' &&
    styles.whiteSpace === 'nowrap' &&
    styles.borderWidth === '0px',
  ).toBe(true);
}

/**
 * 라이브 리전(Live Region) 검증
 * 동적 콘텐츠 알림용
 *
 * @param element - 검증할 요소
 * @param options - aria-live 옵션
 *
 * @example
 * validateLiveRegion(statusMessage, { polite: true });
 */
export function validateLiveRegion(
  element: HTMLElement,
  options: {
    polite?: boolean;
    assertive?: boolean;
    atomic?: boolean;
    relevant?: string;
  },
) {
  const { polite, assertive, atomic, relevant } = options;

  if (polite) {
    expect(element).toHaveAttribute('aria-live', 'polite');
  }
  if (assertive) {
    expect(element).toHaveAttribute('aria-live', 'assertive');
  }
  if (atomic !== undefined) {
    expect(element).toHaveAttribute('aria-atomic', String(atomic));
  }
  if (relevant) {
    expect(element).toHaveAttribute('aria-relevant', relevant);
  }
}

/**
 * 확장 가능한 요소(Expandable) 검증
 * Accordion, Dropdown 등
 *
 * @param trigger - 트리거 요소
 * @param content - 콘텐츠 요소
 * @param isExpanded - 확장 상태
 *
 * @example
 * validateExpandable(accordionTrigger, accordionContent, true);
 */
export function validateExpandable(
  trigger: HTMLElement,
  content: HTMLElement,
  isExpanded: boolean,
) {
  expect(trigger).toHaveAttribute('aria-expanded', String(isExpanded));
  expect(trigger).toHaveAttribute('aria-controls', content.id);
  expect(content.id).toBeTruthy();
}

/**
 * 색상 대비 검증 (간이 버전)
 * 실제로는 axe-core 등 전문 도구 사용 권장
 *
 * @param element - 검증할 요소
 * @param minRatio - 최소 대비 비율 (WCAG AA: 4.5, AAA: 7)
 *
 * @example
 * validateColorContrast(textElement, 4.5);
 */
export function validateColorContrast(
  element: HTMLElement,
  minRatio = 4.5,
) {
  const styles = window.getComputedStyle(element);
  const { color } = styles;
  const { backgroundColor } = styles;

  // 실제 대비 계산은 복잡하므로 색상이 지정되었는지만 확인
  expect(color).toBeTruthy();
  expect(backgroundColor).toBeTruthy();

  // 경고: 실제 대비는 측정하지 않음
  console.warn(
    `Color contrast should be tested manually or with axe-core. Required ratio: ${minRatio}`,
  );
}

/**
 * 에러 메시지 접근성 검증
 *
 * @param input - 입력 요소
 * @param errorMessage - 에러 메시지 요소
 *
 * @example
 * validateErrorMessage(emailInput, errorElement);
 */
export function validateErrorMessage(
  input: HTMLElement,
  errorMessage: HTMLElement,
) {
  // aria-invalid 확인
  expect(input).toHaveAttribute('aria-invalid', 'true');

  // aria-describedby로 연결 확인
  const describedBy = input.getAttribute('aria-describedby');
  expect(describedBy).toBeTruthy();
  expect(describedBy).toContain(errorMessage.id);

  // 에러 메시지 가시성 확인
  expect(errorMessage).toBeVisible();
}

/**
 * 필수 입력 필드 검증
 *
 * @param element - 입력 요소
 * @param label - 라벨 요소 (선택)
 *
 * @example
 * validateRequiredField(emailInput, emailLabel);
 */
export function validateRequiredField(
  element: HTMLElement,
  label?: HTMLElement,
) {
  // required 속성 또는 aria-required
  const hasRequired =
    element.hasAttribute('required') ||
    element.getAttribute('aria-required') === 'true';

  expect(hasRequired).toBe(true);

  // 라벨에 * 표시 확인 (선택)
  if (label) {
    expect(label.textContent).toMatch(/\*/);
  }
}

/**
 * 랜드마크 role 검증
 * main, navigation, complementary 등
 *
 * @param element - 검증할 요소
 * @param expectedRole - 기대하는 랜드마크 role
 *
 * @example
 * validateLandmark(navElement, 'navigation');
 */
export function validateLandmark(
  element: HTMLElement,
  expectedRole: 'main' | 'navigation' | 'complementary' | 'banner' | 'contentinfo' | 'region',
) {
  const role = element.getAttribute('role') || element.tagName.toLowerCase();
  expect(role).toBe(expectedRole);
}
