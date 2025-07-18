import { createRef, act } from 'react';
import { vi, describe, beforeEach, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { KButton, KButtonRefs, BUTTON_VARIANTS } from '@/components';
import { SIZES } from '@/common/base/base.interface';


describe('KButton', () => {

  const labelText = 'k-Button';
  const mockFn = vi.fn();

  beforeEach(() => {
    mockFn.mockClear();
  });

  it('renders with default style', () => {
    // Arrange
    render(<KButton label={labelText}/>);
    const root = screen.getByRole('button');

    // Assert
    expect(root).toBeInTheDocument();
  });

  it('applies id, className, and style props', () => {
    // Arrange
    const testId = 'k-button-test-id';
    const testClass = 'k-button-test-class';
    const testStyle = { color: '#ffffff', fontSize: '20px' };

    render(
      <KButton id={testId} className={testClass} style={testStyle} label={labelText}/>,
    );
    const root = screen.getByRole('button');

    // Assert
    expect(root).toHaveAttribute('id', testId);
    expect(root).toHaveClass(testClass);
    expect(root).toHaveStyle(testStyle);
  });

  it('applies disabled prop correctly', () => {
    // Arrange
    render(<KButton label={labelText} disabled/>);
    const root = screen.getByRole('button');

    // Assert
    expect(root).toHaveProperty('disabled', true);
    expect(root).toHaveClass('k-button--disabled');
  });

  it('applies width, height prop correctly', () => {
    // Arrange
    const buttonSize = {
      width: '120px',
      height: '50px',
    }
    render(<KButton label={labelText} {...buttonSize} />);
    const root = screen.getByRole('button');

    // Assert
    expect(root).toHaveStyle(buttonSize);
  });

  it('calls onClick when button is clicked', async () => {
    // Arrange
    const user = userEvent.setup();
    render(<KButton label={labelText} onClick={mockFn}/>);
    const root = screen.getByRole('button');

    // Act
    await act(async () => {
      await user.click(root);
    });

    // Assert
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it.each(SIZES)('applies size prop "%s"', (size) => {
    // Arrange
    render(<KButton label={labelText} size={size}/>);
    const root = screen.getByRole('button');

    // Assert
    expect(root).toHaveClass(`k-button--${size}`);
  });

  it.each(BUTTON_VARIANTS)('applies variant prop "%s"', (variant) => {
    // Arrange
    render(<KButton label={labelText} variant={variant}/>);
    const root = screen.getByRole('button');

    // Assert
    expect(root).toHaveClass(`k-button--${variant}`);
  });

  it('calls ref methods: focus and click', async () => {
    // Arrange
    const buttonRef = createRef<KButtonRefs>();

    render(<KButton ref={buttonRef} label={labelText} onClick={mockFn}/>);
    const button = screen.getByRole('button');

    // Act
    buttonRef.current?.focus();

    // Assert
    expect(button).toHaveFocus();

    // Act
    await act(async () => {
      buttonRef.current?.click?.();
    });

    // Assert
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
