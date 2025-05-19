import { act } from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { KBackdrop } from '@/components';


describe('KModal', () => {

  const mockFn = vi.fn();

  beforeEach(() => {
    mockFn.mockClear();
    vi.useRealTimers();
  });

  it('applies id, className, and style props', async () => {
    // Arrange
    const testId = 'test-id';
    const testClass = 'test-id';
    const testStyle = { color: '#eee', fontSize: '24px' };

    render(<KBackdrop open id={testId} className={testClass} style={testStyle}/>);
    const root = screen.getByRole('presentation', { hidden: true });

    // Assert
    expect(root)
      .toHaveAttribute('id', testId);
    expect(root)
      .toHaveStyle(testStyle);
    expect(root)
      .toHaveClass(testClass);
  });

  it('applies open, close props', async () => {
    // Arrange
    render(<KBackdrop open={false}/>);
    // Assert
    expect(screen.queryByRole('presentation'))
      .not
      .toBeInTheDocument();
    // Arrange
    render(<KBackdrop open/>);
    // Assert
    expect(screen.queryByRole('presentation'))
      .not
      .toBeInTheDocument();
  });

  it('applies onClick props', async () => {
    const user = userEvent.setup();
    render(<KBackdrop open onClick={mockFn}/>);
    const root = screen.getByRole('presentation', { hidden: true });

    expect(mockFn)
      .toHaveBeenCalledTimes(0);

    await act(async () => {
      await user.click(root);
      await new Promise((r) => {
        setTimeout(r, 300);
      });
    });

    expect(mockFn)
      .toHaveBeenCalledTimes(1);
  });
});
