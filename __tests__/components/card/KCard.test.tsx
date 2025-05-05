import { act } from 'react';
import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { KCard } from '@/components';
import { SIZE_LIST } from '@/common/base/base';


describe('KCard', () => {

  const testTitle = 'Card Title';
  const testSubTitle = 'Card Subtitle';
  const mockFn = vi.fn();

  beforeEach(() => {
    mockFn.mockClear();
  });

  it('renders with title and subtitle', () => {
    // Arrange
    render(<KCard title={testTitle} subTitle={testSubTitle}/>);

    // Assert
    expect(screen.getByText(testTitle)).toBeInTheDocument();
    expect(screen.getByText(testSubTitle)).toBeInTheDocument();
  });

  it('applies id, className, and style props', () => {
    // Arrange
    const testId = 'k-card-test-id';
    const testClass = 'k-card-test-class';
    const testStyle = { backgroundColor: 'lightgray' };

    render(<KCard id={testId} className={testClass} style={testStyle}/>);
    const root = screen.getByTestId('k-card');

    // Assert
    expect(root).toHaveAttribute('id', testId);
    expect(root).toHaveClass(testClass);
    expect(root).toHaveStyle(testStyle);
  });

  it('applies custom style props: width, height, padding, borderRadius, borderColor, fontColor', () => {
    // Arrange
    render(
      <KCard width={300} height={200} padding={16} borderRadius={12} borderColor='blue' fontColor='black'/>,
    );
    const root = screen.getByTestId('k-card');

    // Assert
    expect(root).toHaveStyle({
      width: '300px',
      height: '200px',
      padding: '16px',
      borderRadius: '12px',
      borderColor: 'blue',
      color: 'black',
    });
  });

  it('applies clickable prop and triggers onClick', async () => {
    // Arrange
    const user = userEvent.setup();
    render(<KCard onClick={mockFn}/>);
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
    render(<KCard disabled onClick={mockFn}/>);
    const root = screen.getByRole('button');

    // Act
    await act(async () => {
      await user.click(root);
    });

    // Assert
    expect(mockFn).toHaveBeenCalledTimes(0);
  });

  it('calls onClick when Enter or Space key is pressed', async () => {
    // Arrange
    const user = userEvent.setup();
    render(<KCard title='test' onClick={mockFn}/>);

    // Act
    await act(async () => {
      await user.tab();
    });

    // Assert
    expect(screen.getByRole('button')).toHaveFocus();

    // Act
    await act(async () => {
      await user.keyboard('{Enter}');
    });

    expect(mockFn).toHaveBeenCalledTimes(1);

    await act(async () => {
      await user.keyboard(' ');
    });

    // Assert
    expect(mockFn).toHaveBeenCalledTimes(2);
  });

  it.each(SIZE_LIST)('applies size prop "% s"', (size) => {
    // Arrange
    render(<KCard size={size}/>);
    const root = screen.getByTestId('k-card');

    // Assert
    expect(root).toHaveClass(`k-card--${size}`);
  });
});
