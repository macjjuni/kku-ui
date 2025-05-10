import { act, useState } from 'react';
import { describe, it, expect, afterEach, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { KTextField } from '@/components';

const TestTextField = ({ clearable }: { clearable?: boolean }) => {
  const [value, setValue] = useState('');
  return <KTextField value={value} onChange={(val) => setValue(val)} clearable={clearable}/>;
};

describe('KTextField', () => {

  afterEach(() => {
    vi.clearAllTimers();
    vi.useRealTimers();
  });

  it('renders base element', () => {
    // Arrange
    render(<KTextField value=""/>);

    // Assert
    expect(screen.getByTestId('k-text-field'))
      .toBeInTheDocument();
  });

  it('renders label, placeholder, and required asterisk', () => {
    // Arrange
    render(<KTextField label="Username" placeholder="Enter your username" required value=""/>);

    // Assert
    expect(screen.getByText('Username'))
      .toBeInTheDocument();
    expect(screen.getByRole('textbox'))
      .toHaveAttribute('placeholder', 'Enter your username');
    expect(screen.getByText('*'))
      .toBeInTheDocument();
  });

  it('calls onChange when typing', async () => {
    // Arrange
    const user = userEvent.setup();
    render(<TestTextField/>);
    const input = screen.getByRole('textbox');

    // Act
    await act(async () => {
      await user.type(input, 'test');
    });

    // Assert
    expect(input)
      .toHaveValue('test');
  });

  it('applies disabled prop correctly', () => {
    // Arrange
    render(<KTextField value="disabled" disabled/>);
    const container = screen.getByTestId('k-text-field');
    const input = screen.getByRole('textbox');
    // Assert
    expect(container)
      .toHaveClass('k-text-field--disabled');
    expect(input)
      .toBeDisabled();
  });

  it('calls onFocus and onBlur handlers', async () => {
    // Arrange
    const onFocus = vi.fn();
    const onBlur = vi.fn();
    render(<KTextField value="" onFocus={onFocus} onBlur={onBlur}/>);
    const input = screen.getByRole('textbox');

    // Act
    await act(async () => {
      await userEvent.click(input);
    });
    await act(async () => {
      await userEvent.tab();
    });

    // Assert
    expect(onFocus)
      .toHaveBeenCalledTimes(1);
    expect(onBlur)
      .toHaveBeenCalledTimes(1);
  });

  it('calls onKeyDownEnter when Enter key is pressed', () => {
    // Arrange
    const onEnter = vi.fn();
    render(<KTextField value="test" onKeyDownEnter={onEnter}/>);
    const input = screen.getByRole('textbox');

    // Act
    input.focus();
    input.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));

    // Assert
    expect(onEnter)
      .toHaveBeenCalled();
  });

  it('toggles password visibility on toggle button click', async () => {
    // Arrange
    render(<KTextField value="secret" password/>);
    const input = screen.getByTestId('k-text-field-input');
    const toggleBtn = screen.getByRole('button');

    // Assert
    expect(input)
      .toHaveAttribute('type', 'password');

    // Act
    await act(async () => {
      await userEvent.click(toggleBtn);
    });

    // Assert
    expect(screen.getByTestId('k-text-field-input'))
      .toHaveAttribute('type', 'input');
  });

  it('clears input value when clear button is clicked', async () => {
    // Arrange
    const user = userEvent.setup();
    render(<TestTextField clearable/>);
    const input = screen.getByTestId('k-text-field-input');

    // Act
    await act(async () => {
      await user.type(input, 'test!');
    });

    // Assert
    expect(input)
      .toHaveValue('test!');

    // Arrange
    const clearButton = screen.getByRole('button');

    // Act
    await act(async () => {
      await user.click(clearButton);
    });

    // Assert
    expect(screen.getByTestId('k-text-field-input'))
      .toHaveValue('');
  });
});