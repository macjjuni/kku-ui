/**
 * 테스트용 데이터 생성 팩토리
 * 반복적인 테스트 데이터를 쉽게 생성
 */

import type { KSelectOption } from '@/components/ui/input/select/KSelect';

/**
 * KSelect용 옵션 배열 생성
 *
 * @param count - 생성할 옵션 개수
 * @param options - 설정 옵션
 * @param options.includeDisabled - disabled 옵션 포함 여부
 * @param options.prefix - label/value 접두사
 *
 * @example
 * const options = createSelectOptions(5); // 5개 옵션
 * const options = createSelectOptions(10, { includeDisabled: true }); // disabled 포함
 */
export function createSelectOptions(
  count: number,
  options?: {
    includeDisabled?: boolean;
    prefix?: string;
  },
): KSelectOption[] {
  const { includeDisabled = false, prefix = 'Option' } = options || {};

  return Array.from({ length: count }, (_, i) => ({
    label: `${prefix} ${i + 1}`,
    value: `${prefix.toLowerCase()}-${i + 1}`,
    ...(includeDisabled && i % 3 === 0 ? { disabled: true } : {}),
  }));
}

/**
 * 대용량 옵션 배열 생성 (성능 테스트용)
 *
 * @param count - 생성할 옵션 개수 (기본 1000)
 *
 * @example
 * const options = createLargeSelectOptions(5000);
 */
export function createLargeSelectOptions(count = 1000): KSelectOption[] {
  return Array.from({ length: count }, (_, i) => ({
    label: `Item ${i + 1}`,
    value: `item-${i + 1}`,
  }));
}

/**
 * 폼 필드용 검증 규칙 생성
 *
 * @param type - 규칙 타입
 * @returns 검증 함수
 *
 * @example
 * const rules = [
 *   createValidationRule('required'),
 *   createValidationRule('minLength', 5),
 *   createValidationRule('email'),
 * ];
 */
export function createValidationRule(
  type: 'required' | 'minLength' | 'maxLength' | 'email' | 'pattern',
  param?: number | RegExp,
) {
  switch (type) {
    case 'required':
      return (v: string) => (v && v.trim().length > 0) || '필수 입력 항목입니다.';
    case 'minLength':
      return (v: string) => (v && v.length >= (param as number)) ||
        `최소 ${param}자 이상 입력하세요.`;
    case 'maxLength':
      return (v: string) => (v && v.length <= (param as number)) ||
        `최대 ${param}자까지 입력 가능합니다.`;
    case 'email':
      return (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ||
        '올바른 이메일 형식이 아닙니다.';
    case 'pattern':
      return (v: string) => (param as RegExp).test(v) || '형식이 올바르지 않습니다.';
    default:
      return () => true;
  }
}

/**
 * 비동기 검증 규칙 생성 (서버 검증 시뮬레이션)
 *
 * @param delay - 지연 시간 (ms)
 * @param shouldFail - 실패 여부
 * @param errorMessage - 에러 메시지
 *
 * @example
 * const asyncRule = createAsyncValidationRule(100, true, '이미 사용 중입니다.');
 */
export function createAsyncValidationRule(
  delay = 100,
  shouldFail = false,
  errorMessage = '검증 실패',
) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return async (_v: string) => {
    await new Promise((resolve) => { setTimeout(resolve, delay); });
    return shouldFail ? errorMessage : true;
  };
}

/**
 * Accordion 아이템 데이터 생성
 *
 * @param count - 생성할 아이템 개수
 *
 * @example
 * const items = createAccordionItems(3);
 * // [
 * //   { value: 'item-1', trigger: 'Title 1', content: 'Content 1' },
 * //   ...
 * // ]
 */
export function createAccordionItems(count: number) {
  return Array.from({ length: count }, (_, i) => ({
    value: `item-${i + 1}`,
    trigger: `Title ${i + 1}`,
    content: `Content ${i + 1}`,
  }));
}

/**
 * 긴 텍스트 생성 (overflow 테스트용)
 *
 * @param wordCount - 단어 개수
 *
 * @example
 * const longText = createLongText(100); // 100 단어
 */
export function createLongText(wordCount: number): string {
  return Array.from({ length: wordCount }, (_, i) => `word${i + 1}`).join(' ');
}

/**
 * 특수문자 포함 텍스트 생성 (XSS, injection 테스트용)
 *
 * @example
 * const dangerousText = createDangerousText();
 * // "<script>alert('xss')</script>"
 */
export function createDangerousText(): string {
  return "<script>alert('xss')</script>";
}

/**
 * 다국어 텍스트 배열 생성 (i18n 테스트용)
 *
 * @example
 * const texts = createMultiLanguageTexts();
 * // ['Hello', '안녕하세요', 'こんにちは', '你好', 'مرحبا']
 */
export function createMultiLanguageTexts(): string[] {
  return [
    'Hello', // English
    '안녕하세요', // Korean
    'こんにちは', // Japanese
    '你好', // Chinese
    'مرحبا', // Arabic
    'Привет', // Russian
    'Bonjour', // French
  ];
}

/**
 * 숫자 범위 배열 생성 (NumberStepper 테스트용)
 *
 * @param start - 시작 값
 * @param end - 끝 값
 * @param step - 증가 값
 *
 * @example
 * const range = createNumberRange(0, 10, 2); // [0, 2, 4, 6, 8, 10]
 */
export function createNumberRange(
  start: number,
  end: number,
  step = 1,
): number[] {
  const result: number[] = [];
  for (let i = start; i <= end; i += step) {
    result.push(i);
  }
  return result;
}

/**
 * 부동소수점 숫자 배열 생성 (정밀도 테스트용)
 *
 * @example
 * const decimals = createDecimalNumbers();
 * // [0.1, 0.2, 0.3, 0.4, 0.5]
 */
export function createDecimalNumbers(): number[] {
  return [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9];
}

/**
 * 빈 값 케이스 생성 (edge case 테스트용)
 *
 * @example
 * const emptyValues = createEmptyValues();
 * // ['', ' ', null, undefined]
 */
export function createEmptyValues(): Array<string | null | undefined> {
  return ['', ' ', '  ', null, undefined];
}

/**
 * 경계값 숫자 배열 생성 (edge case 테스트용)
 *
 * @example
 * const edges = createEdgeNumbers();
 * // [0, -1, 1, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]
 */
export function createEdgeNumbers(): number[] {
  return [
    0,
    -1,
    1,
    Number.MIN_SAFE_INTEGER,
    Number.MAX_SAFE_INTEGER,
    Infinity,
    -Infinity,
    NaN,
  ];
}

/**
 * Mock 이벤트 핸들러 생성 (vitest fn 래퍼)
 *
 * @example
 * const handlers = createMockHandlers(['onChange', 'onFocus', 'onBlur']);
 * // { onChange: vi.fn(), onFocus: vi.fn(), onBlur: vi.fn() }
 */
export function createMockHandlers<T extends string>(
  handlerNames: T[],
): Record<T, ReturnType<typeof vi.fn>> {
  return handlerNames.reduce(
    (acc, name) => {
      acc[name] = vi.fn();
      return acc;
    },
    {} as Record<T, ReturnType<typeof vi.fn>>,
  );
}

/**
 * 랜덤 문자열 생성 (unique ID 테스트용)
 *
 * @param length - 문자열 길이
 *
 * @example
 * const id = createRandomString(10);
 */
export function createRandomString(length: number): string {
  return Math.random()
    .toString(36)
    .substring(2, 2 + length);
}

/**
 * Ref 객체 생성 헬퍼 (imperative handle 테스트용)
 *
 * @example
 * const ref = createMockRef<KTextFieldRefs>();
 */
export function createMockRef<T>() {
  return { current: null as T | null };
}
