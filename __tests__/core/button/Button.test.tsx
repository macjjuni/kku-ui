import { describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import Button from '@/core/button/Button';

describe('Button 컴포넌트', () => {

  it('label prop으로 텍스트를 렌더링한다', () => {
    const buttonLabel = 'Click me!';
    render(<Button label={buttonLabel}/>);
    expect(screen.queryByText(buttonLabel))
      .toBeInTheDocument();
  });

  it('label과 children이 동시에 있으면 에러 리턴', () => {
    const childText = 'children 텍스트';
    const labelText = 'Label';

    expect(() => render(<Button label={labelText}>{childText}</Button>))
      .toThrow('Button 컴포넌트에 label과 children을 동시에 넣을 수 없습니다.');
  });


  it('type 기본값은 "button"이다', () => {
    render(<Button label="테스트"/>);
    expect(screen.getByRole('button'))
      .toHaveAttribute('type', 'button');
  });

  it('type prop이 있으면 그 값이 적용된다', () => {
    render(<Button label="테스트" type="submit"/>);
    expect(screen.getByRole('button'))
      .toHaveAttribute('type', 'submit');
  });

  it('disabled가 true일 때 disabled 속성과 aria-disabled가 적용된다', () => {
    render(<Button label="비활성" disabled/>);
    const button = screen.getByRole('button');
    expect(button)
      .toBeDisabled();
    expect(button)
      .toHaveAttribute('aria-disabled', 'true');
  });

  it('children이 없으면 aria-label에 label 값을 넣는다', () => {
    render(<Button label="라벨"/>);
    expect(screen.getByRole('button'))
      .toHaveAttribute('aria-label', '라벨');
  });

  it('children이 있으면 aria-label이 없다', () => {
    render(<Button>내용</Button>);
    expect(screen.getByRole('button'))
      .not
      .toHaveAttribute('aria-label');
  });

  it('클릭 이벤트가 정상 작동한다', () => {
    const onClick = vi.fn();
    render(<Button label="클릭" onClick={onClick}/>);
    fireEvent.click(screen.getByRole('button'));
    expect(onClick)
      .toHaveBeenCalledTimes(1);
  });
});
