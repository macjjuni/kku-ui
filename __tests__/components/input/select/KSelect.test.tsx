import { act } from 'react';
import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { KSelect } from '@/components';

const items = [
  { label: '선택1', value: 'value1' },
  { label: '선택2', value: 'value2' },
  { label: '선택3', value: 'value3' },
];

describe('KSelect', () => {

  const mockFn = vi.fn();

  beforeEach(() => {
    mockFn.mockClear();
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.clearAllTimers();
    vi.useRealTimers();
  });

  const mockValue = items[0].value;


  it('Id, className, style prop test', () => {

    // Arrange
    const expectTitle = items[0].label;
    const testId = 'k-select-test-id';
    const testClass = 'test-class-name';
    const testStyle = { color: 'red', fontSize: '20px' };

    render(<KSelect value={mockValue} id={testId} items={items} onChange={mockFn}
                    className={testClass} style={testStyle}/>);
    const selectRoot = screen.getByTestId('k-select');
    const labelRoot = screen.getByText(expectTitle);

    // Assert
    expect(labelRoot).toBeInTheDocument();
    expect(selectRoot).toHaveAttribute('id', testId);
    expect(selectRoot).toHaveClass(testClass);
    expect(selectRoot).toHaveStyle(testStyle);
  });

  it('Placeholder prop render test', () => {

    // Arrange
    const testPlaceholder = 'placeholder-test';
    render(<KSelect value={undefined} items={items} onChange={mockFn} placeholder={testPlaceholder}/>);

    const placeholderRoot = screen.getByText(testPlaceholder);

    // Assert
    expect(placeholderRoot).toBeInTheDocument();
  });

  test('Disabled prop render test', () => {

    // Arrange
    render(<KSelect value={mockValue} items={items} onChange={mockFn} disabled/>);

    const selectRoot = screen.getByTestId('k-select');
    const selectInput = screen.getByRole('button');

    // Assert
    expect(selectRoot).toHaveClass('k-select--disabled');
    expect(selectInput).toHaveAttribute('tabindex', '-1');
  });

  it('Width prop render test', async () => {

    // Arrange
    const testWidth = 200;
    render(<KSelect value={mockValue} items={items} onChange={mockFn} width={testWidth}/>);

    const root = screen.getByRole('button');

    // Assert
    expect(root).toHaveStyle({ width: `${testWidth}px` });
  });

  it('Value prop render test', async () => {

    // Arrange
    const testLabel = items[1].label;
    const testValue = items[1].value;

    render(<KSelect value={testValue} items={items} onChange={mockFn}/>);
    const root = screen.getByText(testLabel);

    // Assert
    expect(root).toBeInTheDocument();
  });

  it('Dropdown render test', async () => {

    // Arrange
    const anotherTestId = 'another-element';
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
    const testNoDataText = 'No Data Text';

    render(
      <>
        <KSelect value={undefined} items={[]} noDataText={testNoDataText} onChange={mockFn}/>
        <div data-testid={anotherTestId}/>
      </>,
    );

    const root = screen.getByRole('button');

    // Act
    await act(async () => {
      await user.click(root);
      vi.advanceTimersByTime(300); // 300ms 애니메이션 대기
    });

    // Assert
    const dropdownRoot = screen.getByRole('listbox');
    expect(dropdownRoot).toBeInTheDocument();

    // noDataText가 렌더링되었는지 확인
    const noDataRoot = screen.getByText(testNoDataText);
    expect(noDataRoot).toBeInTheDocument();

    const anotherRoot = screen.getByTestId(anotherTestId);

    await act(async () => {
      await user.click(anotherRoot);
      vi.advanceTimersByTime(300); // 300ms 애니메이션 대기
    });

    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  }, 5000);


  it('OnChange event test', async () => {

    // Arrange
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
    const testItems = [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
    ];

    render(<KSelect value={undefined} items={testItems} onChange={mockFn}/>);

    const root = screen.getByRole('button');
    const targetItemLabel = testItems[1].label; // 선택할 항목: 'Option 2'
    const expectTargetItemValue = testItems[1].value; // 선택할 항목: 'Option 2'

    // Act
    await act(async () => {
      await user.click(root);
      vi.advanceTimersByTime(300); // 300ms 애니메이션 대기
    });

    // Assert
    const LabelItemTarget = screen.getByText(targetItemLabel);
    expect(LabelItemTarget).toBeInTheDocument();

    // 선택할 항목 클릭
    await act(async () => {
      await user.click(LabelItemTarget);
    });

    // Assert
    expect(mockFn).toHaveBeenCalledTimes(1); // onChange가 1회 호출되었는지 확인
    expect(mockFn).toHaveBeenCalledWith(expectTargetItemValue); // 올바른 값이 전달되었는지 확인
  }, 5000);
});
