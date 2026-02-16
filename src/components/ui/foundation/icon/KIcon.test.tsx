import { describe, expect, it, vi } from 'vitest';
import { createRef } from 'react';
import { KIcon, type KIconRefs } from './KIcon';
import { renderWithUser, expectClasses } from '@/test-utils';
import { testKeyboardNavigation } from '@/test-utils/a11y-checklist';

describe('KIcon', () => {
  // region [Basic Rendering Tests]
  it('icon prop으로 정상적으로 렌더링되어야 한다', () => {
    const { container } = renderWithUser(<KIcon icon="check" />);

    const icon = container.querySelector('.k-icon');
    expect(icon).toBeInTheDocument();
  });

  it('icon이 없으면 null을 반환해야 한다', () => {
    const { container } = renderWithUser(<KIcon icon="" />);

    const icon = container.querySelector('.k-icon');
    expect(icon).not.toBeInTheDocument();
  });

  it('k-icon 클래스가 적용되어야 한다', () => {
    const { container } = renderWithUser(<KIcon icon="check" />);

    const icon = container.querySelector('.k-icon');
    expect(icon).toHaveClass('k-icon');
  });

  it('기본 스타일 클래스들이 적용되어야 한다', () => {
    const { container } = renderWithUser(<KIcon icon="check" />);

    const icon = container.querySelector('.k-icon') as HTMLElement;
    expectClasses(icon, [
      'inline-flex',
      'items-center',
      'justify-center',
      'shrink-0',
      'transition-colors',
      'overflow-hidden',
    ]);
  });
  // endregion

  // region [Size Variants Tests]
  it('size="xs"일 때 적절한 클래스가 적용되어야 한다', () => {
    const { container } = renderWithUser(<KIcon icon="check" size="xs" />);

    const icon = container.querySelector('.k-icon') as HTMLElement;
    expectClasses(icon, ['w-3', 'h-3', 'text-[12px]']);
  });

  it('size="sm"일 때 적절한 클래스가 적용되어야 한다', () => {
    const { container } = renderWithUser(<KIcon icon="check" size="sm" />);

    const icon = container.querySelector('.k-icon') as HTMLElement;
    expectClasses(icon, ['w-4', 'h-4', 'text-[14px]']);
  });

  it('size="md"일 때 적절한 클래스가 적용되어야 한다 (기본값)', () => {
    const { container } = renderWithUser(<KIcon icon="check" size="md" />);

    const icon = container.querySelector('.k-icon') as HTMLElement;
    expectClasses(icon, ['w-6', 'h-6', 'text-[16px]']);
  });

  it('size="lg"일 때 적절한 클래스가 적용되어야 한다', () => {
    const { container } = renderWithUser(<KIcon icon="check" size="lg" />);

    const icon = container.querySelector('.k-icon') as HTMLElement;
    expectClasses(icon, ['w-8', 'h-8', 'text-[20px]']);
  });

  it('size="xlg"일 때 적절한 클래스가 적용되어야 한다', () => {
    const { container } = renderWithUser(<KIcon icon="check" size="xlg" />);

    const icon = container.querySelector('.k-icon') as HTMLElement;
    expectClasses(icon, ['w-10', 'h-10', 'text-[24px]']);
  });

  it('size가 숫자일 때 인라인 스타일이 적용되어야 한다', () => {
    const { container } = renderWithUser(<KIcon icon="check" size={32} />);

    const icon = container.querySelector('.k-icon') as HTMLElement;
    expect(icon.style.width).toBe('32px');
    expect(icon.style.height).toBe('32px');
    expect(icon.style.fontSize).toBe('32px');
  });
  // endregion

  // region [Color Tests]
  it('color prop이 정상적으로 적용되어야 한다', () => {
    const { container } = renderWithUser(<KIcon icon="check" color="#ff0000" />);

    const icon = container.querySelector('.k-icon') as HTMLElement;
    expect(icon.style.color).toBe('rgb(255, 0, 0)');
    expect(icon.style.fill).toBe('currentColor');
  });

  it('color prop이 없으면 기본 색상을 사용해야 한다', () => {
    const { container } = renderWithUser(<KIcon icon="check" />);

    const icon = container.querySelector('.k-icon') as HTMLElement;
    expect(icon.style.color).toBe('');
  });
  // endregion

  // region [onClick Tests]
  it('onClick이 있으면 cursor-pointer 클래스가 적용되어야 한다', () => {
    const handleClick = vi.fn();
    const { container } = renderWithUser(<KIcon icon="check" onClick={handleClick} />);

    const icon = container.querySelector('.k-icon') as HTMLElement;
    expect(icon).toHaveClass('cursor-pointer');
  });

  it('onClick이 없으면 cursor-default 클래스가 적용되어야 한다', () => {
    const { container } = renderWithUser(<KIcon icon="check" />);

    const icon = container.querySelector('.k-icon') as HTMLElement;
    expect(icon).toHaveClass('cursor-default');
  });

  it('onClick이 있으면 role="button"이 설정되어야 한다', () => {
    const handleClick = vi.fn();
    const { container } = renderWithUser(<KIcon icon="check" onClick={handleClick} />);

    const icon = container.querySelector('.k-icon') as HTMLElement;
    expect(icon).toHaveAttribute('role', 'button');
  });

  it('onClick이 없으면 role="img"가 설정되어야 한다', () => {
    const { container } = renderWithUser(<KIcon icon="check" />);

    const icon = container.querySelector('.k-icon') as HTMLElement;
    expect(icon).toHaveAttribute('role', 'img');
  });

  it('클릭 시 onClick이 호출되어야 한다', async () => {
    const handleClick = vi.fn();
    const { user, container } = renderWithUser(<KIcon icon="check" onClick={handleClick} />);

    const icon = container.querySelector('.k-icon') as HTMLElement;
    await user.click(icon);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('onClick이 있으면 tabIndex가 0으로 설정되어야 한다', () => {
    const handleClick = vi.fn();
    const { container } = renderWithUser(<KIcon icon="check" onClick={handleClick} />);

    const icon = container.querySelector('.k-icon') as HTMLElement;
    expect(icon).toHaveAttribute('tabIndex', '0');
  });
  // endregion

  // region [Disabled Tests]
  it('disabled prop이 정상적으로 동작해야 한다', () => {
    const { container } = renderWithUser(<KIcon icon="check" disabled />);

    const icon = container.querySelector('.k-icon') as HTMLElement;
    expect(icon).toHaveAttribute('aria-disabled', 'true');
  });

  it('disabled 상태에서 opacity-50, cursor-not-allowed, grayscale 클래스가 적용되어야 한다', () => {
    const { container } = renderWithUser(<KIcon icon="check" disabled />);

    const icon = container.querySelector('.k-icon') as HTMLElement;
    expectClasses(icon, ['opacity-50', 'cursor-not-allowed', 'grayscale']);
  });

  it('disabled 상태에서 onClick이 호출되지 않아야 한다', async () => {
    const handleClick = vi.fn();
    const { user, container } = renderWithUser(
      <KIcon icon="check" onClick={handleClick} disabled />,
    );

    const icon = container.querySelector('.k-icon') as HTMLElement;
    await user.click(icon);

    expect(handleClick).not.toHaveBeenCalled();
  });

  it('disabled 상태에서 tabIndex가 설정되지 않아야 한다', () => {
    const handleClick = vi.fn();
    const { container } = renderWithUser(
      <KIcon icon="check" onClick={handleClick} disabled />,
    );

    const icon = container.querySelector('.k-icon') as HTMLElement;
    expect(icon).not.toHaveAttribute('tabIndex');
  });
  // endregion

  // region [Keyboard Navigation Tests]
  it('Enter 키로 onClick을 트리거할 수 있어야 한다', async () => {
    const handleClick = vi.fn();
    const { user, container } = renderWithUser(<KIcon icon="check" onClick={handleClick} />);

    const icon = container.querySelector('.k-icon') as HTMLElement;

    await testKeyboardNavigation(icon, user, {
      keys: ['Enter'],
      expectAction: () => expect(handleClick).toHaveBeenCalled(),
    });
  });

  it('Space 키로 onClick을 트리거할 수 있어야 한다', async () => {
    const handleClick = vi.fn();
    const { user, container } = renderWithUser(<KIcon icon="check" onClick={handleClick} />);

    const icon = container.querySelector('.k-icon') as HTMLElement;
    icon.focus();

    await user.keyboard(' ');

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('disabled 상태에서 키보드 이벤트가 무시되어야 한다', async () => {
    const handleClick = vi.fn();
    const { user, container } = renderWithUser(
      <KIcon icon="check" onClick={handleClick} disabled />,
    );

    const icon = container.querySelector('.k-icon') as HTMLElement;
    icon.focus();

    await user.keyboard('{Enter}');
    await user.keyboard(' ');

    expect(handleClick).not.toHaveBeenCalled();
  });
  // endregion

  // region [Imperative Handle Tests]
  it('ref를 통해 click() 메서드를 호출할 수 있어야 한다', () => {
    const handleClick = vi.fn();
    const ref = createRef<KIconRefs>();
    renderWithUser(<KIcon icon="check" onClick={handleClick} ref={ref} />);

    expect(ref.current).toBeDefined();
    expect(ref.current?.click).toBeDefined();

    ref.current?.click();

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  // endregion

  // region [ID Tests]
  it('useStableId로 고유한 ID가 생성되어야 한다', () => {
    const { container: container1 } = renderWithUser(<KIcon icon="check" />);
    const { container: container2 } = renderWithUser(<KIcon icon="close" />);

    const icon1 = container1.querySelector('.k-icon') as HTMLElement;
    const icon2 = container2.querySelector('.k-icon') as HTMLElement;

    expect(icon1.id).toMatch(/^k-icon-/);
    expect(icon2.id).toMatch(/^k-icon-/);
    expect(icon1.id).not.toBe(icon2.id);
  });

  it('custom id prop이 우선적으로 사용되어야 한다', () => {
    const { container } = renderWithUser(<KIcon icon="check" id="custom-icon-id" />);

    const icon = container.querySelector('.k-icon') as HTMLElement;
    expect(icon.id).toBe('custom-icon-id');
  });
  // endregion

  // region [Accessibility Tests]
  it('aria-label이 자동으로 설정되어야 한다', () => {
    const { container } = renderWithUser(<KIcon icon="check" />);

    const icon = container.querySelector('.k-icon') as HTMLElement;
    expect(icon).toHaveAttribute('aria-label', 'check icon');
  });

  it('custom aria-label을 설정할 수 있어야 한다', () => {
    const { container } = renderWithUser(<KIcon icon="check" aria-label="Favorite" />);

    const icon = container.querySelector('.k-icon') as HTMLElement;
    expect(icon).toHaveAttribute('aria-label', 'Favorite');
  });
  // endregion

  // region [Style Tests]
  it('custom className이 병합되어야 한다', () => {
    const { container } = renderWithUser(<KIcon icon="check" className="custom-class" />);

    const icon = container.querySelector('.k-icon') as HTMLElement;
    expect(icon).toHaveClass('custom-class');
    expect(icon).toHaveClass('k-icon'); // 기본 클래스도 유지
  });

  it('custom style이 병합되어야 한다', () => {
    const { container } = renderWithUser(
      <KIcon icon="check" style={{ marginTop: '10px' }} />,
    );

    const icon = container.querySelector('.k-icon') as HTMLElement;
    expect(icon.style.marginTop).toBe('10px');
  });
  // endregion

  // region [Edge Cases]
  it('여러 props를 함께 사용할 수 있어야 한다', async () => {
    const handleClick = vi.fn();
    const { user, container } = renderWithUser(
      <KIcon
        icon="check"
        size="lg"
        color="#ff0000"
        onClick={handleClick}
        className="custom-class"
      />,
    );

    const icon = container.querySelector('.k-icon') as HTMLElement;

    // size
    expectClasses(icon, ['w-8', 'h-8']);

    // color
    expect(icon.style.color).toBe('rgb(255, 0, 0)');

    // onClick
    await user.click(icon);
    expect(handleClick).toHaveBeenCalled();

    // className
    expect(icon).toHaveClass('custom-class');
  });

  it('memoization이 정상적으로 동작해야 한다', () => {
    const { container, rerender } = renderWithUser(<KIcon icon="check" />);

    const icon1 = container.querySelector('.k-icon');

    // 동일한 props로 리렌더링
    rerender(<KIcon icon="check" />);

    const icon2 = container.querySelector('.k-icon');

    // memoization으로 동일한 인스턴스
    expect(icon1).toBe(icon2);
  });

  it('data-* 속성이 정상적으로 전달되어야 한다', () => {
    const { container } = renderWithUser(
      <KIcon icon="check" data-testid="test-icon" data-custom="value" />,
    );

    const icon = container.querySelector('.k-icon') as HTMLElement;
    expect(icon).toHaveAttribute('data-testid', 'test-icon');
    expect(icon).toHaveAttribute('data-custom', 'value');
  });
  // endregion
});
