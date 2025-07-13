import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { KSpinner } from '@/components';
import { SIZES } from '@/common/base/base.interface';


describe('KSpinner', () => {

  it('renders correctly by default', () => {
    // arrange
    render(<KSpinner />);

    // assert
    const spinner = screen.getByRole('status');
    const svg = spinner.querySelector('svg');
    const circle = spinner.querySelector('circle');

    expect(spinner).toBeInTheDocument();
    expect(svg).toBeInTheDocument();
    expect(circle).toBeInTheDocument();
  });

  it('applies fontSize style when size is a number', () => {
    // arrange
    const testSize = 32;
    render(<KSpinner size={testSize} />);

    // assert
    const root = screen.getByRole('status');
    expect(root).toHaveStyle({ width: `${testSize}px`, height: `${testSize}px` });
  });

  it.each(SIZES)(`applies size("%s") class when size is a string`, (size) => {
    // arrange
    render(<KSpinner size={size} />);

    // assert
    const root = screen.getByRole('status');
    expect(root).toHaveClass(`k-spinner--${size}`);
  });

  it('applies custom className to root element', () => {
    // arrange
    render(<KSpinner className="my-spinner" />);

    // assert
    const root = screen.getByRole('status');
    expect(root).toHaveClass('my-spinner');
  });

  it('includes accessibility role and aria attributes', () => {
    // arrange
    render(<KSpinner />);

    // assert
    const spinner = screen.getByRole('status');
    expect(spinner).toBeInTheDocument();
    expect(spinner).toHaveAttribute('aria-live', 'polite');
    expect(spinner).toHaveAttribute('aria-label', 'Loading');
  });
});
