import { describe, expect, it, vi } from 'vitest';
import { createRef } from 'react';
import { screen } from '@testing-library/react';
import { KTextarea } from './KTextarea';
import { renderWithUser, expectClasses, expectDisabled } from '@/test-utils';

describe('KTextarea', () => {
  // region [Basic Rendering Tests]
  it('기본적으로 렌더링되어야 한다', () => {
    renderWithUser(<KTextarea />);

    const textarea = screen.getByRole('textbox');
    expect(textarea).toBeInTheDocument();
    expect(textarea.tagName).toBe('TEXTAREA');
  });

  it('k-textarea 클래스가 적용되어야 한다', () => {
    renderWithUser(<KTextarea />);

    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveClass('k-textarea');
  });

  it('placeholder가 정상적으로 표시되어야 한다', () => {
    renderWithUser(<KTextarea placeholder="내용을 입력하세요" />);

    expect(screen.getByPlaceholderText('내용을 입력하세요')).toBeInTheDocument();
  });

  it('value prop이 정상적으로 동작해야 한다', () => {
    renderWithUser(<KTextarea value="test value" readOnly />);

    const textarea = screen.getByRole('textbox') as HTMLTextAreaElement;
    expect(textarea.value).toBe('test value');
  });

  it('defaultValue가 정상적으로 설정되어야 한다', () => {
    renderWithUser(<KTextarea defaultValue="default value" />);

    const textarea = screen.getByRole('textbox') as HTMLTextAreaElement;
    expect(textarea.value).toBe('default value');
  });
  // endregion

  // region [Interaction Tests]
  it('입력 시 onChange가 호출되어야 한다', async () => {
    const handleChange = vi.fn();
    const { user } = renderWithUser(<KTextarea onChange={handleChange} />);

    const textarea = screen.getByRole('textbox');
    await user.type(textarea, 'test');

    expect(handleChange).toHaveBeenCalled();
    expect((textarea as HTMLTextAreaElement).value).toBe('test');
  });

  it('여러 줄 입력이 가능해야 한다', async () => {
    const { user } = renderWithUser(<KTextarea />);

    const textarea = screen.getByRole('textbox') as HTMLTextAreaElement;
    await user.type(textarea, 'Line 1{Enter}Line 2{Enter}Line 3');

    expect(textarea.value).toBe('Line 1\nLine 2\nLine 3');
  });

  it('포커스 시 onFocus가 호출되어야 한다', async () => {
    const handleFocus = vi.fn();
    const { user } = renderWithUser(<KTextarea onFocus={handleFocus} />);

    const textarea = screen.getByRole('textbox');
    await user.click(textarea);

    expect(handleFocus).toHaveBeenCalled();
  });

  it('블러 시 onBlur가 호출되어야 한다', async () => {
    const handleBlur = vi.fn();
    const { user } = renderWithUser(<KTextarea onBlur={handleBlur} />);

    const textarea = screen.getByRole('textbox');
    await user.click(textarea);
    await user.tab();

    expect(handleBlur).toHaveBeenCalled();
  });
  // endregion

  // region [Ref Forwarding Tests]
  it('ref가 정상적으로 전달되어야 한다', () => {
    const ref = createRef<HTMLTextAreaElement>();
    renderWithUser(<KTextarea ref={ref} />);

    expect(ref.current).toBeInstanceOf(HTMLTextAreaElement);
    expect(ref.current?.tagName).toBe('TEXTAREA');
  });

  it('ref를 통해 textarea에 포커스할 수 있어야 한다', () => {
    const ref = createRef<HTMLTextAreaElement>();
    renderWithUser(<KTextarea ref={ref} />);

    ref.current?.focus();
    expect(ref.current).toHaveFocus();
  });

  it('ref를 통해 textarea value를 읽을 수 있어야 한다', async () => {
    const ref = createRef<HTMLTextAreaElement>();
    const { user } = renderWithUser(<KTextarea ref={ref} />);

    const textarea = screen.getByRole('textbox');
    await user.type(textarea, 'test value');

    expect(ref.current?.value).toBe('test value');
  });
  // endregion

  // region [Size Tests]
  it('min-h-[60px] 클래스가 기본으로 적용되어야 한다', () => {
    renderWithUser(<KTextarea />);

    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveClass('min-h-[60px]');
  });

  it('rows prop이 정상적으로 동작해야 한다', () => {
    renderWithUser(<KTextarea rows={5} />);

    const textarea = screen.getByRole('textbox') as HTMLTextAreaElement;
    expect(textarea.rows).toBe(5);
  });

  it('cols prop이 정상적으로 동작해야 한다', () => {
    renderWithUser(<KTextarea cols={50} />);

    const textarea = screen.getByRole('textbox') as HTMLTextAreaElement;
    expect(textarea.cols).toBe(50);
  });
  // endregion

  // region [Disabled State Tests]
  it('disabled prop이 정상적으로 동작해야 한다', () => {
    renderWithUser(<KTextarea disabled />);

    const textarea = screen.getByRole('textbox');
    expectDisabled(textarea);
  });

  it('disabled 상태에서 입력할 수 없어야 한다', async () => {
    const handleChange = vi.fn();
    const { user } = renderWithUser(<KTextarea disabled onChange={handleChange} />);

    const textarea = screen.getByRole('textbox');
    await user.type(textarea, 'test');

    expect(handleChange).not.toHaveBeenCalled();
    expect((textarea as HTMLTextAreaElement).value).toBe('');
  });

  it('disabled 상태에서 opacity-50과 cursor-not-allowed 클래스가 적용되어야 한다', () => {
    renderWithUser(<KTextarea disabled />);

    const textarea = screen.getByRole('textbox');
    expectClasses(textarea, ['disabled:opacity-50', 'disabled:cursor-not-allowed']);
  });
  // endregion

  // region [ReadOnly State Tests]
  it('readOnly prop이 정상적으로 동작해야 한다', () => {
    renderWithUser(<KTextarea readOnly />);

    const textarea = screen.getByRole('textbox') as HTMLTextAreaElement;
    expect(textarea.readOnly).toBe(true);
  });

  it('readOnly 상태에서 onChange는 호출되지 않아야 한다', async () => {
    const handleChange = vi.fn();
    const { user } = renderWithUser(<KTextarea readOnly onChange={handleChange} />);

    const textarea = screen.getByRole('textbox');
    await user.type(textarea, 'test');

    expect(handleChange).not.toHaveBeenCalled();
  });
  // endregion

  // region [Style Tests]
  it('focus-ring 클래스가 적용되어야 한다', () => {
    renderWithUser(<KTextarea />);

    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveClass('focus-ring');
  });

  it('기본 스타일 클래스들이 적용되어야 한다', () => {
    renderWithUser(<KTextarea />);

    const textarea = screen.getByRole('textbox');
    expectClasses(textarea, [
      'flex',
      'w-full',
      'rounded-md',
      'border',
      'border-input',
      'bg-transparent',
      'px-3',
      'py-2',
      'shadow-sm',
    ]);
  });

  it('반응형 text-base / md:text-sm 클래스가 적용되어야 한다', () => {
    renderWithUser(<KTextarea />);

    const textarea = screen.getByRole('textbox');
    expectClasses(textarea, ['text-base', 'md:text-sm']);
  });

  it('custom className이 병합되어야 한다', () => {
    renderWithUser(<KTextarea className="custom-class" />);

    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveClass('custom-class');
    expect(textarea).toHaveClass('k-textarea'); // 기본 클래스도 유지
  });
  // endregion

  // region [Accessibility Tests]
  it('aria-label이 정상적으로 설정되어야 한다', () => {
    renderWithUser(<KTextarea aria-label="내용 입력" />);

    const textarea = screen.getByLabelText('내용 입력');
    expect(textarea).toBeInTheDocument();
  });

  it('aria-describedby가 정상적으로 설정되어야 한다', () => {
    renderWithUser(<KTextarea aria-describedby="error-message" />);

    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveAttribute('aria-describedby', 'error-message');
  });

  it('aria-invalid가 정상적으로 설정되어야 한다', () => {
    renderWithUser(<KTextarea aria-invalid />);

    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveAttribute('aria-invalid', 'true');
  });
  // endregion

  // region [Edge Cases]
  it('name prop이 정상적으로 설정되어야 한다', () => {
    renderWithUser(<KTextarea name="description" />);

    const textarea = screen.getByRole('textbox') as HTMLTextAreaElement;
    expect(textarea.name).toBe('description');
  });

  it('maxLength가 정상적으로 동작해야 한다', async () => {
    const { user } = renderWithUser(<KTextarea maxLength={10} />);

    const textarea = screen.getByRole('textbox') as HTMLTextAreaElement;
    await user.type(textarea, '12345678901234567890');

    expect(textarea.value).toBe('1234567890');
  });

  it('required prop이 정상적으로 설정되어야 한다', () => {
    renderWithUser(<KTextarea required />);

    const textarea = screen.getByRole('textbox') as HTMLTextAreaElement;
    expect(textarea.required).toBe(true);
  });

  it('autoComplete prop이 정상적으로 설정되어야 한다', () => {
    renderWithUser(<KTextarea autoComplete="off" />);

    const textarea = screen.getByRole('textbox') as HTMLTextAreaElement;
    expect(textarea.autocomplete).toBe('off');
  });

  it('autoFocus prop이 정상적으로 동작해야 한다', () => {
    renderWithUser(<KTextarea autoFocus />);

    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveFocus();
  });

  it('긴 텍스트를 입력할 수 있어야 한다', async () => {
    const longText = 'a'.repeat(1000);
    const { user } = renderWithUser(<KTextarea />);

    const textarea = screen.getByRole('textbox') as HTMLTextAreaElement;
    await user.type(textarea, longText);

    expect(textarea.value).toBe(longText);
  });
  // endregion
});
