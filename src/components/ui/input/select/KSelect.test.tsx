import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { KSelect } from './KSelect';

const mockOptions = [
  { label: '사과', value: 'apple' },
  { label: '바나나', value: 'banana' },
  { label: '포도', value: 'grape', disabled: true },
];


describe('KSelect Component', () => {

  beforeEach(() => {
    // 테스트 실행 전 메서드 모킹
    window.HTMLElement.prototype.scrollIntoView = vi.fn();
  });

  it('플레이스홀더가 정상적으로 노출되어야 한다.', () => {
    render(<KSelect options={mockOptions} placeholder="과일을 선택하세요" />);
    expect(screen.getByText('과일을 선택하세요')).toBeInTheDocument();
  });

  it('클릭 시 옵션 리스트가 나타나야 한다.', async () => {
    render(<KSelect options={mockOptions} />);

    const trigger = screen.getByRole('combobox');
    fireEvent.click(trigger);

    // Radix Portal을 통해 렌더링되므로 await waitFor 사용 권장
    await waitFor(() => {
      expect(screen.getByText('사과')).toBeInTheDocument();
      expect(screen.getByText('바나나')).toBeInTheDocument();
    });
  });

  it('옵션을 선택하면 onChange 콜백이 호출되어야 한다.', async () => {
    const handleChange = vi.fn();
    render(<KSelect options={mockOptions} onChange={handleChange} />);

    fireEvent.click(screen.getByRole('combobox'));

    const option = await screen.findByText('사과');
    fireEvent.click(option);

    expect(handleChange).toHaveBeenCalledWith('apple');
  });

  it('disabled된 옵션은 클릭해도 onChange가 호출되지 않아야 한다.', async () => {
    const handleChange = vi.fn();
    render(<KSelect options={mockOptions} onChange={handleChange} />);

    fireEvent.click(screen.getByRole('combobox'));

    const disabledOption = await screen.findByText('포도');
    fireEvent.click(disabledOption);

    expect(handleChange).not.toHaveBeenCalled();
  });

  it('error props 전달 시 에러 스타일(border-destructive)이 적용되어야 한다.', () => {
    render(<KSelect options={mockOptions} error />);
    const trigger = screen.getByRole('combobox');
    expect(trigger).toHaveClass('border-destructive');
  });

  it('width props에 따라 적절한 클래스가 적용되어 sostiene.', () => {
    const { rerender } = render(<KSelect options={mockOptions} width="xs" />);
    expect(screen.getByRole('combobox')).toHaveClass('max-w-[120px]');

    rerender(<KSelect options={mockOptions} width="full" />);
    expect(screen.getByRole('combobox')).toHaveClass('w-full');
  });

  it('width가 숫자로 전달되면 style 속성에 px 단위로 적용되어야 한다', () => {
    const customWidth = 350;
    render(<KSelect options={mockOptions} width={customWidth} />);

    const trigger = screen.getByRole('combobox');

    // 1. 실제 인라인 스타일 객체 검증
    expect(trigger.style.width).toBe(`${customWidth}px`);

    // 2. 또는 RTL matchers 사용 (권장)
    expect(trigger).toHaveStyle({ width: '350px' });
  });
});