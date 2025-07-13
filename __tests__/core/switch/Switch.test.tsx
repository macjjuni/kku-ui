import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import Switch from '@/core/switch/Switch';

describe('Switch Component', () => {
  let onChange: (val: boolean) => void;

  beforeEach(() => {
    onChange = vi.fn();
  });

  it('should render a button with role="switch" and correct aria attributes', () => {
    render(<Switch value={false} onChange={onChange}/>);

    const button = screen.getByRole('switch');
    expect(button)
      .toBeInTheDocument();
    expect(button)
      .toHaveAttribute('aria-checked', 'false');
    expect(button)
      .toHaveAttribute('type', 'button');
  });

  it('should call onChange with toggled value when clicked', async () => {
    render(<Switch value={false} onChange={onChange}/>);
    const button = screen.getByRole('switch');

    await act(async () => {
      await userEvent.click(button);
    });

    expect(onChange)
      .toHaveBeenCalledTimes(1);
    expect(onChange)
      .toHaveBeenCalledWith(true);
  });

  it('should not call onChange when disabled', async () => {
    render(<Switch value={false} onChange={onChange} disabled/>);
    const button = screen.getByRole('switch');

    await act(async () => {
      await userEvent.click(button);
    });

    expect(onChange)
      .not
      .toHaveBeenCalled();
  });

  it('should render with tabIndex=-1 when disabled', () => {
    render(<Switch value disabled onChange={onChange}/>);
    const button = screen.getByRole('switch');

    expect(button)
      .toBeDisabled();
    expect(button)
      .toHaveAttribute('tabindex', '-1');
  });

  it('should render with tabIndex=0 when enabled', () => {
    render(<Switch value onChange={onChange}/>);
    const button = screen.getByRole('switch');

    expect(button)
      .toHaveAttribute('tabindex', '0');
  });
});
