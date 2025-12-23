import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { KListRow } from '@/components';

describe('KListRow', () => {
  it('라벨이 정상적으로 렌더링되어야 한다', () => {
    render(<KListRow label="테스트 항목" />);
    expect(screen.getByText('테스트 항목')).toBeInTheDocument();
  });

  it('아이콘이 제공되면 렌더링되어야 한다', () => {
    render(<KListRow label="항목" icon={<span data-testid="test-icon" />} />);
    expect(screen.getByTestId('test-icon')).toBeInTheDocument();
  });

  it('onClick이 있으면 클릭 시 함수가 호출되어야 한다', () => {
    const handleClick = vi.fn();
    render(<KListRow label="클릭 항목" onClick={handleClick} />);

    fireEvent.click(screen.getByText('클릭 항목'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('커스텀 rightElement가 정상적으로 표시되어야 한다', () => {
    render(<KListRow label="항목" rightElement={<span data-testid="custom-right">상태값</span>} />);
    expect(screen.getByTestId('custom-right')).toBeInTheDocument();
    expect(screen.getByText('상태값')).toBeInTheDocument();
  });
});