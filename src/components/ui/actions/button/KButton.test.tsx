import { createRef } from 'react';
import { vi, describe, beforeEach, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { KButton } from './KButton';

describe('KButton', () => {
  const labelText = 'Click me';
  const mockFn = vi.fn();

  beforeEach(() => {
    mockFn.mockClear();
  });

  it('기본 텍스트와 함께 정상적으로 렌더링된다', () => {
    render(<KButton>{labelText}</KButton>);
    const button = screen.getByRole('button', { name: labelText });
    expect(button).toBeInTheDocument();
  });

  it('id, className 등 기본 HTML 속성이 정상적으로 적용된다', () => {
    const testId = 'test-id';
    const testClass = 'custom-class';

    render(<KButton id={testId} className={testClass}>{labelText}</KButton>);
    const button = screen.getByRole('button');

    expect(button).toHaveAttribute('id', testId);
    expect(button).toHaveClass(testClass);
  });

  it('disabled 상태일 때 클릭이 되지 않으며 속성이 적용된다', async () => {
    const user = userEvent.setup();
    render(<KButton disabled onClick={mockFn}>{labelText}</KButton>);

    const button = screen.getByRole('button');

    expect(button).toBeDisabled();
    // shadcn/ui(CVA) 기본 disabled 클래스 확인 (일반적으로 opacity-50 등)
    expect(button).toHaveClass('disabled:opacity-50');

    await user.click(button);
    expect(mockFn).not.toHaveBeenCalled();
  });

  it('클릭 시 onClick 핸들러가 호출된다', async () => {
    const user = userEvent.setup();
    render(<KButton onClick={mockFn}>{labelText}</KButton>);
    const button = screen.getByRole('button');

    await user.click(button);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  // Variant 테스트: 클래스 포함 여부 확인
  it('primary variant 적용 시 관련 클래스가 포함된다', () => {
    render(<KButton variant="primary">{labelText}</KButton>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-primary');
  });

  it('outline variant 적용 시 관련 클래스가 포함된다', () => {
    render(<KButton variant="outline">{labelText}</KButton>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('border-input');
  });

  // Size 테스트
  it('sm size 적용 시 높이 관련 클래스가 포함된다', () => {
    render(<KButton size="sm">{labelText}</KButton>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('h-8'); // shadcn 기본 sm 높이
  });

  // Ref 테스트 (ForwardRef 확인)
  it('ref를 통해 DOM 요소에 접근하여 focus가 가능하다', () => {
    const ref = createRef<HTMLButtonElement>();
    render(<KButton ref={ref}>{labelText}</KButton>);

    ref.current?.focus();
    expect(screen.getByRole('button')).toHaveFocus();
  });
});