import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { KBackdrop } from '@/components';

describe('KModal', () => {

  const mockFn = vi.fn();

  beforeEach(() => {
    mockFn.mockClear();
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.clearAllTimers();
    vi.useRealTimers();
  });

  it('applies id, className, and style props', async () => {
    // Arrange
    const testId = 'test-id';
    const testClass = 'test-id';
    const testStyle = { color: '#eee', fontSize: '24px' };

    render(<KBackdrop open id={testId} className={testClass} style={testStyle}/>);
    const root = screen.getByTestId('k-backdrop');

    // Assert
    expect(root)
      .toHaveAttribute('id', testId);
    expect(root)
      .toHaveStyle(testStyle);
    expect(root)
      .toHaveClass(testClass);
  });

  it('applies open props', async () => {
    // Arrange
    render(<KBackdrop open={false}/>);
    // Assert
    expect(screen.queryByTestId('k-backdrop'))
      .not
      .toBeInTheDocument();
  });

  // it('applies onClick props', async () => {
  //   const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
  //   render(<KBackdrop open onClick={mockFn} />);
  //   const root = screen.getByTestId('k-backdrop');
  //
  //   expect(mockFn).toHaveBeenCalledTimes(0);
  //
  //   await act(async () => {
  //     await user.click(root);
  //     vi.runAllTimers(); // 추가
  //   });
  //
  //   expect(mockFn).toHaveBeenCalledTimes(1);
  // });
});
