import { describe, expect, it, vi, beforeEach } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '@/core/button/Button';

let user: ReturnType<typeof userEvent.setup>;

beforeEach(() => {
  user = userEvent.setup();
});

describe('Button 컴포넌트', () => {
  it('label prop으로 텍스트를 렌더링한다', () => {
    const buttonLabel = 'Click me!';
    render(<Button label={buttonLabel} />);

    const button = screen.getByText(buttonLabel)
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('tabIndex', '0')
  });

  it('label과 children이 동시에 있으면 에러 리턴', () => {
    const childText = 'children 텍스트';
    const labelText = 'Label';

    expect(() => render(<Button label={labelText}>{childText}</Button>))
      .toThrow('Button 컴포넌트에 label과 children을 동시에 넣을 수 없습니다.');
  });

  it('type 기본값은 "button"이다', () => {
    render(<Button label="테스트" />);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
  });

  it('type prop이 있으면 그 값이 적용된다', () => {
    render(<Button label="테스트" type="submit" />);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
  });

  it('disabled가 true일 때 disabled 속성과 aria-disabled가 적용된다', () => {
    render(<Button label="비활성" disabled />);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute('aria-disabled', 'true');
  });

  it('children이 없으면 aria-label에 label 값을 넣는다', () => {
    render(<Button label="라벨" />);
    expect(screen.getByRole('button')).toHaveAttribute('aria-label', '라벨');
  });

  it('children이 있으면 aria-label이 없다', () => {
    render(<Button>내용</Button>);
    expect(screen.getByRole('button')).not.toHaveAttribute('aria-label');
  });

  it('클릭 이벤트가 정상 작동한다', async () => {
    const onClick = vi.fn();
    render(<Button label="클릭" onClick={onClick} />);
    await act(async () => {
      await user.click(screen.getByRole('button'));
    });
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('disabled 상태 tabIndex 값 테스트', async () => {
    const onClick = vi.fn();
    render(<Button label="클릭" onClick={onClick} disabled />);
    const button = screen.getByRole('button');

    expect(button).toHaveAttribute('tabIndex', '-1')
    await act(async () => {
      await user.click(button);
    });
    expect(onClick).toHaveBeenCalledTimes(0);
  });
});
