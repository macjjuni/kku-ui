import { act } from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { KSelect } from '@/components';

const items = [
  { label: '선택1', value: 'value1' },
  { label: '선택2', value: 'value2' },
  { label: '선택3', value: 'value3' },
];
const motionTime = 0.24 * 1000;


describe('KSelect', () => {

  const testId = 'k-select-test-id';
  const mockFn = vi.fn();
  const mockValue = items[0].value;

  beforeEach(() => {
    mockFn.mockClear();
    vi.useRealTimers();
  });

  it('renders placeholder when placeholder prop is set and value is undefined', () => {
    // Arrange
    const testPlaceholder = 'placeholder-test';

    render(<KSelect value={undefined} items={items} onChange={mockFn} placeholder={testPlaceholder}/>);
    const placeholder = screen.getByText(testPlaceholder);

    // Assert
    expect(placeholder)
      .toBeInTheDocument();
  });

  it('applies disabled prop', () => {
    // Arrange
    render(<KSelect value={mockValue} items={items} onChange={mockFn} disabled data-testid={testId}/>);
    const root = screen.getByTestId(testId);

    // Assert
    expect(root)
      .toHaveClass('k-select--disabled');
  });

  it('renders correct label based on value prop', () => {
    // Arrange
    const testItem = items[1];

    render(<KSelect value={testItem.value} items={items} onChange={mockFn}/>);
    const label = screen.getByText(testItem.label);

    // Assert
    expect(label)
      .toBeInTheDocument();
  });

  it('calls onChange with selected value when item is clicked', async () => {
    // Arrange
    const user = userEvent.setup();
    const testItems = [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
    ];

    render(<KSelect value={undefined} items={testItems} onChange={mockFn}/>);
    const button = screen.getByRole('button');

    // Act
    await act(async () => {
      await user.click(button);
      await new Promise((r) => {
        setTimeout(r, motionTime + 10);
      });
    });

    const targetItem = screen.getByText(testItems[1].label);

    await act(async () => {
      await user.click(targetItem);
      await new Promise((r) => {
        setTimeout(r, motionTime + 10);
      });
    });

    // Assert
    expect(mockFn)
      .toHaveBeenCalledTimes(1);
    expect(mockFn)
      .toHaveBeenCalledWith(testItems[1].value);
  });
});
