import { act } from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { KBackdrop } from '@/components';


describe('KModal', () => {

  const testId = 'test-id';
  const mockFn = vi.fn();

  beforeEach(() => {
    mockFn.mockClear();
    vi.useRealTimers();
  });

  it('applies id, className, and style props', async () => {
    // Arrange
    const testClass = 'test-id';
    const testStyle = { color: '#eee', fontSize: '24px' };

    render(<KBackdrop isOpen id={testId} className={testClass} style={testStyle} data-testid={testId}/>);
    const root = screen.getByTestId(testId);

    // Assert
    expect(root)
      .toHaveClass(testClass);
    expect(root)
      .toHaveStyle(testStyle);
    expect(root)
      .toHaveAttribute('id', testId);
  });

  it('applies isOpen, close props', async () => {
    // Arrange
    render(<KBackdrop isOpen={false} data-testid={testId} />);
    // Assert
    expect(screen.queryByTestId(testId))
      .not
      .toBeInTheDocument();
    // Arrange
    render(<KBackdrop isOpen data-testid={testId} />);
    // Assert
    expect(screen.queryByTestId(testId))
      .toBeInTheDocument();
  });

  it('applies onClick props', async () => {
    const user = userEvent.setup();
    render(<KBackdrop isOpen onClick={mockFn}/>);
    const background = screen.getByRole('button', { hidden: true });

    expect(mockFn)
      .toHaveBeenCalledTimes(0);

    await act(async () => {
      await user.click(background);
      await new Promise((r) => {
        setTimeout(r, 300);
      });
    });

    expect(mockFn)
      .toHaveBeenCalledTimes(1);
  });
});
