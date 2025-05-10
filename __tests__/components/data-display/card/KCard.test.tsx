import { act } from 'react';
import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { KCard } from '@/components';

describe('KCard', () => {
  const testTitle = 'Card Title';
  const testSubTitle = 'Card Subtitle';
  const mockFn = vi.fn();

  beforeEach(() => {
    mockFn.mockClear();
  });

  it('renders with title and subtitle', () => {
    // Arrange
    render(<KCard title={testTitle} subTitle={testSubTitle} />);

    // Assert
    expect(screen.getByText(testTitle)).toBeInTheDocument();
    expect(screen.getByText(testSubTitle)).toBeInTheDocument();
  });

  it('applies id, className, and style props', () => {
    // Arrange
    const testId = 'k-card-test-id';
    const testClass = 'k-card-test-class';
    const testStyle = { backgroundColor: '#eee' };

    render(<KCard id={testId} className={testClass} style={testStyle} />);
    const root = screen.getByTestId('k-card');

    // Assert
    expect(root).toHaveAttribute('id', testId);
    expect(root).toHaveClass(testClass);
    expect(root).toHaveStyle(testStyle);
  });

  it('applies custom style props: width, height, and aspectRatio', () => {
    // Arrange
    const testProps = { width: 300, height: 200, aspectRatio: '16/9' };
    render(<KCard {...testProps} />);
    const root = screen.getByTestId('k-card');

    // Assert
    expect(root).toHaveStyle({
      width: '300px',
      height: '200px',
    });
    expect(root).not.toHaveStyle({
      aspectRatio: '16/9',
    });
  });

  it('applies aspectRatio when height is not defined', () => {
    // Arrange
    const testWidth = 300;
    const testAspectRatio = '16/9';
    render(<KCard width={testWidth} aspectRatio={testAspectRatio} />);
    const root = screen.getByTestId('k-card');
    const computedStyle = getComputedStyle(root);

    // Assert
    expect(computedStyle).toHaveProperty('width', `${testWidth}px`);
    expect(root.style.aspectRatio).toBe(testAspectRatio);
  });

  it('ignores invalid aspectRatio value', () => {
    // Arrange
    const testProps = { width: 300, aspectRatio: 'invalid-ratio' };
    render(<KCard {...testProps} />);
    const root = screen.getByTestId('k-card');

    // Assert
    expect(root).toHaveStyle({
      width: '300px',
    });
    expect(root).not.toHaveStyle({
      aspectRatio: 'invalid-ratio',
    });
  });

  it('applies clickable prop and triggers onClick', async () => {
    // Arrange
    const user = userEvent.setup();
    render(<KCard onClick={mockFn} />);
    const root = screen.getByRole('button');

    // Act
    await act(async () => {
      await user.click(root);
    });

    // Assert
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('does not trigger onClick when disabled', async () => {
    // Arrange
    const user = userEvent.setup();
    render(<KCard disabled onClick={mockFn} />);
    const root = screen.getByRole('button');

    // Act
    await act(async () => {
      await user.click(root);
    });

    // Assert
    expect(mockFn).not.toHaveBeenCalled();
  });

  it('calls onClick when Enter or Space key is pressed', async () => {
    // Arrange
    const user = userEvent.setup();
    render(<KCard title='test' onClick={mockFn} />);

    // Act
    await act(async () => {
      await user.tab();
    });

    expect(screen.getByRole('button')).toHaveFocus();

    await act(async () => {
      await user.keyboard('{Enter}');
    });

    // Assert
    expect(mockFn).toHaveBeenCalledTimes(1);

    // Act
    await act(async () => {
      await user.keyboard(' ');
    });

    // Assert
    expect(mockFn).toHaveBeenCalledTimes(2);
  });
});
