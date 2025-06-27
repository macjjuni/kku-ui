import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import TextField from '@/core/text-field/TextField';

describe('TextField', () => {
  it('렌더링 된다', () => {
    render(<TextField />);
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
  });

  it('label prop이 aria-label로 설정된다', () => {
    render(<TextField label="이름 입력란" />);
    const input = screen.getByLabelText('이름 입력란');
    expect(input).toBeInTheDocument();
  });

  it('disabled일 경우 비활성화 된다', () => {
    render(<TextField disabled />);
    const input = screen.getByRole('textbox');
    expect(input).toBeDisabled();
    expect(input).toHaveAttribute('aria-disabled', 'true');
  });

  it('placeholder가 제대로 반영된다', () => {
    render(<TextField placeholder="입력하세요" />);
    const input = screen.getByPlaceholderText('입력하세요');
    expect(input).toBeInTheDocument();
  });

  it('type 속성이 전달되면 제대로 반영된다', () => {
    render(<TextField type="email" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('type', 'email');
  });
});

