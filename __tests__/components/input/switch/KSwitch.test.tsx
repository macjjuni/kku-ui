import { act, createRef } from 'react';
import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { KSwitch, KSwitchRefs } from '@/components';

describe('KSwitch', () => {
  const mockOnChange = vi.fn();
  const mockOnClick = vi.fn();

  beforeEach(() => {
    mockOnChange.mockClear();
    mockOnClick.mockClear();
  });

  it('applies id, className, and style props', () => {
    // Arrange
    const testId = 'custom-id';
    const testClass = 'test-class';
    const testStyle = { backgroundColor: '#ababab' };

    render(<KSwitch id={testId} className={testClass} style={testStyle} value onChange={mockOnChange} />);
    const root = screen.getByRole('switch');

    // Assert
    expect(root).toBeInTheDocument();
    expect(root).toHaveAttribute('id', testId);
    expect(root).toHaveClass('k-switch__input');
    expect(root).toHaveStyle(testStyle);
  });

  it('applies default classes based on props', () => {
    // Arrange
    render(<KSwitch value disabled onChange={mockOnChange} />);
    const container = screen.getByRole('switch').parentElement;

    // Assert
    expect(container).toHaveClass('k-switch');
    expect(container).toHaveClass('k-switch--on');
    expect(container).toHaveClass('k-switch--medium');
    expect(container).toHaveClass('k-switch--disabled');
  });

  it('calls onChange and onClick when clicked', async () => {
    // Arrange
    const user = userEvent.setup();

    render(<KSwitch value={false} onChange={mockOnChange} onClick={mockOnClick} />);
    const button = screen.getByRole('switch');

    // Act
    await act(async () => {
      await user.click(button);
    });

    // Assert
    expect(mockOnChange).toHaveBeenCalledWith(true);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('does not call event handlers when disabled', async () => {
    // Arrange
    const user = userEvent.setup();

    render(<KSwitch value={false} disabled onChange={mockOnChange} onClick={mockOnClick} />);
    const button = screen.getByRole('switch');

    // Act
    await act(async () => {
      await user.click(button);
    });

    // Assert
    expect(mockOnChange).not.toHaveBeenCalled();
    expect(mockOnClick).not.toHaveBeenCalled();
  });

  it('calls toggle() via ref and triggers event handlers', () => {
    // Arrange
    const ref = createRef<KSwitchRefs>();

    render(<KSwitch ref={ref} value={false} onChange={mockOnChange} onClick={mockOnClick} />);

    // Act
    act(() => {
      ref.current?.toggle();
    });

    // Assert
    expect(mockOnChange).toHaveBeenCalledWith(true);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});