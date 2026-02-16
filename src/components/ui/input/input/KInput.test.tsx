import { describe, expect, it, vi } from 'vitest';
import { createRef } from 'react';
import { screen } from '@testing-library/react';
import { KInput } from './KInput';
import { renderWithUser, expectClasses, expectDisabled } from '@/test-utils';

describe('KInput', () => {
  // region [Basic Rendering Tests]
  it('기본적으로 렌더링되어야 한다', () => {
    renderWithUser(<KInput />);

    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
    expect(input.tagName).toBe('INPUT');
  });

  it('placeholder가 정상적으로 표시되어야 한다', () => {
    renderWithUser(<KInput placeholder="이메일을 입력하세요" />);

    expect(screen.getByPlaceholderText('이메일을 입력하세요')).toBeInTheDocument();
  });

  it('value prop이 정상적으로 동작해야 한다', () => {
    renderWithUser(<KInput value="test value" readOnly />);

    const input = screen.getByRole('textbox') as HTMLInputElement;
    expect(input.value).toBe('test value');
  });

  it('defaultValue가 정상적으로 설정되어야 한다', () => {
    renderWithUser(<KInput defaultValue="default value" />);

    const input = screen.getByRole('textbox') as HTMLInputElement;
    expect(input.value).toBe('default value');
  });
  // endregion

  // region [Interaction Tests]
  it('입력 시 onChange가 호출되어야 한다', async () => {
    const handleChange = vi.fn();
    const { user } = renderWithUser(<KInput onChange={handleChange} />);

    const input = screen.getByRole('textbox');
    await user.type(input, 'test');

    expect(handleChange).toHaveBeenCalled();
    expect((input as HTMLInputElement).value).toBe('test');
  });

  it('포커스 시 onFocus가 호출되어야 한다', async () => {
    const handleFocus = vi.fn();
    const { user } = renderWithUser(<KInput onFocus={handleFocus} />);

    const input = screen.getByRole('textbox');
    await user.click(input);

    expect(handleFocus).toHaveBeenCalled();
  });

  it('블러 시 onBlur가 호출되어야 한다', async () => {
    const handleBlur = vi.fn();
    const { user } = renderWithUser(<KInput onBlur={handleBlur} />);

    const input = screen.getByRole('textbox');
    await user.click(input);
    await user.tab(); // 포커스 이동으로 blur 발생

    expect(handleBlur).toHaveBeenCalled();
  });
  // endregion

  // region [Size Variants Tests]
  it('size="sm"일 때 적절한 클래스가 적용되어야 한다', () => {
    renderWithUser(<KInput size="sm" />);

    const input = screen.getByRole('textbox');
    expectClasses(input, ['h-8', 'px-2', 'py-1', 'text-xs']);
  });

  it('size="md"일 때 적절한 클래스가 적용되어야 한다 (기본값)', () => {
    renderWithUser(<KInput size="md" />);

    const input = screen.getByRole('textbox');
    expectClasses(input, ['h-9', 'px-3', 'py-2', 'text-sm']);
  });

  it('size="lg"일 때 적절한 클래스가 적용되어야 한다', () => {
    renderWithUser(<KInput size="lg" />);

    const input = screen.getByRole('textbox');
    expectClasses(input, ['h-10', 'px-3', 'py-2', 'text-base']);
  });

  it('size prop이 없으면 기본값 "md"가 적용되어야 한다', () => {
    renderWithUser(<KInput />);

    const input = screen.getByRole('textbox');
    expectClasses(input, ['h-9', 'text-sm']);
  });
  // endregion

  // region [Ref Forwarding Tests]
  it('ref가 정상적으로 전달되어야 한다', () => {
    const ref = createRef<HTMLInputElement>();
    renderWithUser(<KInput ref={ref} />);

    expect(ref.current).toBeInstanceOf(HTMLInputElement);
    expect(ref.current?.tagName).toBe('INPUT');
  });

  it('ref를 통해 input에 포커스할 수 있어야 한다', () => {
    const ref = createRef<HTMLInputElement>();
    renderWithUser(<KInput ref={ref} />);

    ref.current?.focus();
    expect(ref.current).toHaveFocus();
  });

  it('ref를 통해 input value를 읽을 수 있어야 한다', async () => {
    const ref = createRef<HTMLInputElement>();
    const { user } = renderWithUser(<KInput ref={ref} />);

    const input = screen.getByRole('textbox');
    await user.type(input, 'test value');

    expect(ref.current?.value).toBe('test value');
  });
  // endregion

  // region [Type Props Tests]
  it('type="password"가 정상적으로 동작해야 한다', () => {
    const { container } = renderWithUser(<KInput type="password" />);

    const input = container.querySelector('input[type="password"]') as HTMLInputElement;
    expect(input).toBeInTheDocument();
    expect(input.type).toBe('password');
  });

  it('type="email"이 정상적으로 동작해야 한다', () => {
    renderWithUser(<KInput type="email" />);

    const input = document.querySelector('input[type="email"]');
    expect(input).toBeInTheDocument();
  });

  it('type="number"가 정상적으로 동작해야 한다', () => {
    renderWithUser(<KInput type="number" />);

    const input = document.querySelector('input[type="number"]');
    expect(input).toBeInTheDocument();
  });
  // endregion

  // region [Disabled State Tests]
  it('disabled prop이 정상적으로 동작해야 한다', () => {
    renderWithUser(<KInput disabled />);

    const input = screen.getByRole('textbox');
    expectDisabled(input);
  });

  it('disabled 상태에서 입력할 수 없어야 한다', async () => {
    const handleChange = vi.fn();
    const { user } = renderWithUser(<KInput disabled onChange={handleChange} />);

    const input = screen.getByRole('textbox');
    await user.type(input, 'test');

    expect(handleChange).not.toHaveBeenCalled();
    expect((input as HTMLInputElement).value).toBe('');
  });

  it('disabled 상태에서 opacity-50과 cursor-not-allowed 클래스가 적용되어야 한다', () => {
    renderWithUser(<KInput disabled />);

    const input = screen.getByRole('textbox');
    expectClasses(input, ['disabled:opacity-50', 'disabled:cursor-not-allowed']);
  });
  // endregion

  // region [ReadOnly State Tests]
  it('readOnly prop이 정상적으로 동작해야 한다', () => {
    renderWithUser(<KInput readOnly />);

    const input = screen.getByRole('textbox') as HTMLInputElement;
    expect(input.readOnly).toBe(true);
  });

  it('readOnly 상태에서 onChange는 호출되지 않아야 한다', async () => {
    const handleChange = vi.fn();
    const { user } = renderWithUser(<KInput readOnly onChange={handleChange} />);

    const input = screen.getByRole('textbox');
    await user.type(input, 'test');

    expect(handleChange).not.toHaveBeenCalled();
  });
  // endregion

  // region [Style Tests]
  it('focus-ring 클래스가 적용되어야 한다', () => {
    renderWithUser(<KInput />);

    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('focus-ring');
  });

  it('기본 스타일 클래스들이 적용되어야 한다', () => {
    renderWithUser(<KInput />);

    const input = screen.getByRole('textbox');
    expectClasses(input, [
      'flex',
      'w-full',
      'rounded-md',
      'border',
      'border-input',
      'bg-transparent',
      'shadow-sm',
      'transition-colors',
    ]);
  });

  it('custom className이 병합되어야 한다', () => {
    renderWithUser(<KInput className="custom-class" />);

    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('custom-class');
    expect(input).toHaveClass('w-full'); // 기본 클래스도 유지
  });
  // endregion

  // region [Accessibility Tests]
  it('aria-label이 정상적으로 설정되어야 한다', () => {
    renderWithUser(<KInput aria-label="이메일 입력" />);

    const input = screen.getByLabelText('이메일 입력');
    expect(input).toBeInTheDocument();
  });

  it('aria-describedby가 정상적으로 설정되어야 한다', () => {
    renderWithUser(<KInput aria-describedby="error-message" />);

    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('aria-describedby', 'error-message');
  });

  it('aria-invalid가 정상적으로 설정되어야 한다', () => {
    renderWithUser(<KInput aria-invalid />);

    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('aria-invalid', 'true');
  });
  // endregion

  // region [Edge Cases]
  it('name prop이 정상적으로 설정되어야 한다', () => {
    renderWithUser(<KInput name="email" />);

    const input = screen.getByRole('textbox') as HTMLInputElement;
    expect(input.name).toBe('email');
  });

  it('maxLength가 정상적으로 동작해야 한다', async () => {
    const { user } = renderWithUser(<KInput maxLength={5} />);

    const input = screen.getByRole('textbox') as HTMLInputElement;
    await user.type(input, '123456789');

    expect(input.value).toBe('12345');
  });

  it('required prop이 정상적으로 설정되어야 한다', () => {
    renderWithUser(<KInput required />);

    const input = screen.getByRole('textbox') as HTMLInputElement;
    expect(input.required).toBe(true);
  });

  it('pattern prop이 정상적으로 설정되어야 한다', () => {
    renderWithUser(<KInput pattern="[0-9]*" />);

    const input = screen.getByRole('textbox') as HTMLInputElement;
    expect(input.pattern).toBe('[0-9]*');
  });

  it('autoComplete prop이 정상적으로 설정되어야 한다', () => {
    renderWithUser(<KInput autoComplete="email" />);

    const input = screen.getByRole('textbox') as HTMLInputElement;
    expect(input.autocomplete).toBe('email');
  });

  it('autoFocus prop이 정상적으로 동작해야 한다', () => {
    renderWithUser(<KInput autoFocus />);

    const input = screen.getByRole('textbox');
    expect(input).toHaveFocus();
  });
  // endregion
});
