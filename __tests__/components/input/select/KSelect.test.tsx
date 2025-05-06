import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
// import { act } from 'react';
// import userEvent from '@testing-library/user-event';
import { KSelect } from '@/components';

const items = [
  { label: '선택1', value: 'value1' },
  { label: '선택2', value: 'value2' },
  { label: '선택3', value: 'value3' },
];

describe('KSelect', () => {
  const mockFn = vi.fn();
  const mockValue = items[0].value;

  beforeEach(() => {
    mockFn.mockClear();
    vi.useRealTimers();
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.clearAllTimers();
  });

  it('applies id, className, and style props', () => {
    // Arrange
    const testId = 'k-select-test-id';
    const testClass = 'test-class-name';
    const testStyle = { color: '#eeeeee', fontSize: '20px' };

    render(<KSelect value={mockValue} items={items} onChange={mockFn} id={testId} className={testClass} style={testStyle} />);
    const selectRoot = screen.getByTestId('k-select');
    const labelRoot = screen.getByText(items[0].label);

    // Assert
    expect(labelRoot).toBeInTheDocument();
    expect(selectRoot).toHaveAttribute('id', testId);
    expect(selectRoot).toHaveClass(testClass);
    expect(selectRoot).toHaveStyle(testStyle);
  });

  it('renders placeholder when placeholder prop is set and value is undefined', () => {
    // Arrange
    const testPlaceholder = 'placeholder-test';

    render(<KSelect value={undefined} items={items} onChange={mockFn} placeholder={testPlaceholder} />);
    const placeholder = screen.getByText(testPlaceholder);

    // Assert
    expect(placeholder).toBeInTheDocument();
  });

  it('applies disabled prop', () => {
    // Arrange
    render(<KSelect value={mockValue} items={items} onChange={mockFn} disabled />);
    const selectRoot = screen.getByTestId('k-select');
    const input = screen.getByRole('button');

    // Assert
    expect(selectRoot).toHaveClass('k-select--disabled');
    expect(input).toHaveAttribute('tabindex', '-1');
  });

  it('applies width prop', () => {
    // Arrange
    const testWidth = 200;

    render(<KSelect value={mockValue} items={items} onChange={mockFn} width={testWidth} />);
    const root = screen.getByRole('button');

    // Assert
    expect(root).toHaveStyle({ width: `${testWidth}px` });
  });

  it('renders correct label based on value prop', () => {
    // Arrange
    const testItem = items[1];

    render(<KSelect value={testItem.value} items={items} onChange={mockFn} />);
    const label = screen.getByText(testItem.label);

    // Assert
    expect(label).toBeInTheDocument();
  });

  // it('opens dropdown and renders noDataText when items is empty', async () => {
  //   // Arrange
  //   const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
  //   const testNoDataText = 'No Data Text';
  //   const outsideTestId = 'outside';
  //
  //   render(
  //     <>
  //       <div data-testid={outsideTestId} />
  //       <KSelect value={undefined} items={[]} onChange={mockFn} noDataText={testNoDataText} />
  //     </>,
  //   );
  //
  //   const button = screen.getByRole('button');
  //
  //   // Act
  //   await act(async () => {
  //     await user.click(button);
  //     vi.advanceTimersByTime(300); // 닫힘 애니메이션 시간만큼
  //   });
  //
  //   // Assert
  //   expect(screen.getByRole('listbox')).toBeInTheDocument();
  //   expect(screen.getByText(testNoDataText)).toBeInTheDocument();
  //
  //   // Act
  //   await act(async () => {
  //     await user.click(screen.getByTestId(outsideTestId));
  //     // vi.advanceTimersByTime(300);
  //   });
  //
  //   // Assert
  //   expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  // });
  //
  // it('calls onChange with selected value when item is clicked', async () => {
  //   // Arrange
  //   const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
  //   const testItems = [
  //     { label: 'Option 1', value: 'option1' },
  //     { label: 'Option 2', value: 'option2' },
  //   ];
  //
  //   render(<KSelect value={undefined} items={testItems} onChange={mockFn} />);
  //   const button = screen.getByRole('button');
  //
  //   // Act
  //   await act(async () => {
  //     await user.click(button);
  //   });
  //
  //   const targetItem = screen.getByText(testItems[1].label);
  //
  //   await act(async () => {
  //     await user.click(targetItem);
  //   });
  //
  //   // Assert
  //   expect(mockFn).toHaveBeenCalledTimes(1);
  //   expect(mockFn).toHaveBeenCalledWith(testItems[1].value);
  // });
});
