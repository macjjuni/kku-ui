/**
 * 테스트용 데이터 생성 팩토리
 * 반복적인 테스트 데이터를 쉽게 생성
 */

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
