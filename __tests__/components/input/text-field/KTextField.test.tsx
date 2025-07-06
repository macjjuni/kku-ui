import { useState } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { KTextField } from '@/components';


describe('KTextField', () => {

  it('should render the component', () => {
    const label = 'Username';
    render(<KTextField label={label} value=""/>);
    const input = screen.getByLabelText(label);
    expect(input)
      .toBeInTheDocument();
  });

  it('should call onChange when user types', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();

    const Wrapper = () => {
      const [val, setVal] = useState('');
      return (
        <KTextField label="Username" value={val}
                    onChange={(v) => {
                      setVal(v);
                      handleChange(v);
                    }} />
      );
    };

    render(<Wrapper/>);
    const input = screen.getByLabelText('Username');

    await act(async () => {
      await user.type(input, 'hello');
    });

    expect(handleChange)
      .toHaveBeenCalledTimes(5);
    expect(handleChange)
      .toHaveBeenLastCalledWith('hello');
  });


  it('should toggle focus class on focus and blur', async () => {
    render(<KTextField label="Username" value=""/>);
    const input = screen.getByLabelText('Username');
    const wrapper = input.closest('.k-text-field') as HTMLElement;

    await act(async () => {
      await userEvent.click(input);
    });

    const hasFocusClass = wrapper.classList.contains('k-text-field--focus');
    expect(hasFocusClass)
      .toBe(true);

    await act(async () => {
      input.blur();
    });

    const hasFocusAfterBlur = wrapper.classList.contains('k-text-field--focus');
    expect(hasFocusAfterBlur)
      .toBe(false);
  });

  it('should render password visibility toggle icon', () => {
    render(<KTextField label="Password" value="" type="password"/>);
    const icon = screen.getByRole('button');
    expect(icon)
      .toBeInTheDocument();
  });

  it('should show error message when validation fails', async () => {
    const errorMessage = 'This field is required';
    // eslint-disable-next-line no-confusing-arrow
    const rule = vi.fn((val?: string) => (val ? true : errorMessage));
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const ref = { current: null as any };

    render(<KTextField label="Username" value="" rules={[rule]} ref={ref}/>);

    let result: boolean;

    await act(async () => {
      result = await ref.current.onValidate();
    });

    const errorText = screen.getByText(errorMessage);
    expect(result)
      .toBe(false);
    expect(errorText)
      .toBeInTheDocument();
  });

  it('should clear error message when validation passes', async () => {
    const rule = vi.fn(() => true);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const ref = { current: null as any };

    render(<KTextField label="Username" value="valid" rules={[rule]} ref={ref}/>);

    let result: boolean;

    await act(async () => {
      result = await ref.current.onValidate();
    });

    const errorText = screen.queryByText(/required/i);
    expect(result)
      .toBe(true);
    expect(errorText)
      .not
      .toBeInTheDocument();
  });
});
