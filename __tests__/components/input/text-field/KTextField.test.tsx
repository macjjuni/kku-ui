import { act, useState } from 'react';
import { vi } from 'vitest';
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

  it('renders correctly', () => {

    render(<KTextField value=''/>);

    // Assert
    expect(screen.getByTestId('k-text-field')).toBeInTheDocument();
  });

  it('renders label, placeholder, and required asterisk', () => {

    // Arrange
    const labelText = 'Username';
    const placeholderText = 'Enter your username';
    render(<KTextField label={labelText} placeholder={placeholderText} required/>);

    // Assert
    expect(screen.getByText(labelText)).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toHaveAttribute('placeholder', placeholderText);
    expect(screen.getByText('*')).toBeInTheDocument();
  });

  it('calls onChange on input change', async () => {

    // Arrange
    const user = userEvent.setup();
    const testText = 'test';
    render(<TestTextField/>);
    const inputRoot = screen.getByRole('textbox');

    // Act
    await act(async () => {
      await user.type(inputRoot, testText);
    });

    // Assert
    expect(inputRoot).toHaveValue(testText);
  });

  it('disables input when disabled is true', () => {

    // Arrange
    render(<KTextField value='disabled' disabled/>);
    const root = screen.getByTestId('k-text-field');
    const input = screen.getByRole('textbox');

    // Assert
    expect(root).toHaveClass('k-text-field--disabled');
    expect(input).toBeDisabled();
  });

  it('calls onFocus and onBlur events', async () => {

    const handleFocus = vi.fn();
    const handleBlur = vi.fn();

    render(
      <KTextField value='' onFocus={handleFocus} onBlur={handleBlur}/>,
    );
    const input = screen.getByRole('textbox');

    await act(async () => {
      await userEvent.click(input); // triggers focus
    });

    expect(handleFocus).toHaveBeenCalledTimes(1);

    await act(async () => {
      await userEvent.tab(); // triggers blur
    });

    expect(handleBlur).toHaveBeenCalledTimes(1);
  });

  it('calls onKeyDownEnter when Enter is pressed', () => {

    // Arrange
    const handleEnter = vi.fn();
    render(<KTextField value='test' onKeyDownEnter={handleEnter}/>);
    const input = screen.getByRole('textbox');

    // Act
    input.focus();
    input.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));

    // Assert
    expect(handleEnter).toHaveBeenCalled();
  });

  it('toggles password visibility', async () => {

    // Arrange
    const inputText = 'secret';
    render(<KTextField value={inputText} password/>);
    const inputRoot = screen.getByTestId('k-text-field-input');

    // Assert
    expect(inputRoot).toHaveAttribute('type', 'password');

    // Arrange
    const toggleBtn = screen.getByRole('button');

    // Act
    await act(() => userEvent.click(toggleBtn));

    // Arrange
    const newInputRoot = screen.getByTestId('k-text-field-input');

    // // Assert
    expect(newInputRoot).toHaveAttribute('type', 'input');
  });

  it('clears value when clear icon is clicked', async () => {

    // Arrange
    const user = userEvent.setup();
    const testValue = 'test!';
    render(<TestTextField clearable/>);
    const inputRoot = screen.getByTestId('k-text-field-input');

    // Act
    await act(async () => {
      await user.type(inputRoot, testValue);
    });

    // Assert
    expect(inputRoot).toHaveValue(testValue);

    // Arrange
    const clearButton = screen.getByRole('button');

    // Act
    await act(async () => {
      await user.click(clearButton);
    });

    // Arrange
    const newInput = screen.getByTestId('k-text-field-input');

    // Assert
    expect(newInput).toHaveValue('')
  });
});
