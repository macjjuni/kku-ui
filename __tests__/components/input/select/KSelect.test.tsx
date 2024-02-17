import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { useState } from 'react';
import { KSelect } from '@/components';

const testId = 'k-select';
const mockFn = jest.fn();

const items = [
  { title: 'test1', value: 'test1' },
  { title: 'test2', value: 'test2' },
  { title: 'test3', value: 'test3' },
];


describe('KSelect', () => {

  beforeEach(() => {
    mockFn.mockClear();
  });

  describe('Props', () => {

    test('Style, value, className prop render test', () => {

      // Arrange
      const testValue = items[0].value;
      const expectTitle = items[0].title;
      const testStyle = { color: 'red', fontSize: '20px' };
      const testClass = 'test-class-name';
      const testIdValue = 'k-select-test-id';

      render(<KSelect
                value={testValue}
                id={testIdValue}
                items={items}
                onChange={mockFn}
                className={testClass}
                style={testStyle}
      />);
      const root = screen.getByTestId(testId);
      screen.getByText(expectTitle);

      // Assert
      expect(root).toHaveStyle(testStyle);
      expect(root).toHaveClass(testClass);
      expect(root).toHaveAttribute('id', testIdValue);
    });

    test('Placeholder prop render test', () => {

      // Arrange
      const testPlaceholder = 'placeholder';
      render(<KSelect value='' items={[]} onChange={mockFn} placeholder={testPlaceholder} />);

      const placeholderRoot = screen.getByText(testPlaceholder);

      // Assert
      expect(placeholderRoot).toHaveClass('k-select__label-text__placeholder');
    });

    test('Disabled prop render test', () => {

      // Arrange
      render(<KSelect value='' items={[]} onChange={mockFn} disabled />);

      const root = screen.getByTestId(testId);

      // Assert
      expect(root).toHaveClass('k-select--disabled');
    });

    test('Width prop render test', async () => {

      // Arrange
      const testWidth = '200px';
      render(<KSelect value='' items={[]} onChange={mockFn} width={testWidth} />);

      const root = screen.getByTestId(testId);

      // Assert
      expect(root).toHaveStyle({ width: testWidth });
    });

    test('NoDataText prop render test', async () => {

      // Arrange
      const user = userEvent.setup();
      const testNoDataText = 'No Data Text';
      render(<KSelect value='' items={[]} noDataText={testNoDataText} onChange={mockFn} />);
      const root = screen.getByTestId(testId);

      // Act
      await act(async () => { await user.click(root); });

      // Arrange
      const noDataRoot = screen.getByText(testNoDataText);

      // Assert
      expect(noDataRoot).toHaveClass('k-select__menu-list__item-no-data');
    });
  });


  describe('Event', () => {

    test('Value onChange Event test', async () => {

      // Arrange
      const user = userEvent.setup();

      const TestSelect = () => {
        const [value, setValue] = useState('');
        const onChange = (e: string) => { setValue(e); };

        return (<KSelect value={value} items={items} onChange={onChange} />);
      };

      render(<TestSelect />);
      const root = screen.getByTestId(testId);
      const targetItem = items[1].title;

      // Act
      await act(async () => { await user.click(root); });

      // Arrange
      const selectItem = screen.getByText(targetItem);

      // Act
      await act(async () => { await user.click(selectItem); });

      // Arrange
      const selectedRoot = screen.getByText(targetItem);

      // Assert
      expect(selectedRoot).toHaveClass('k-select__label-text');
    });

    test('Focus event test', async () => {

      // Arrange
      const user = userEvent.setup();

      const TestSelect = () => {
        const [value, setValue] = useState('');
        const onChange = (e: string) => { setValue(e); };

        return (<KSelect value={value} items={items} onChange={onChange} />);
      };
      render(<TestSelect />);

      // Act
      await act(async () => { await user.tab(); });

      // Arrange
      const root = screen.getByTestId(testId);

      // Assert
      expect(root).toHaveFocus();
    });

    test('Disabled focus event test', async () => {

      // Arrange
      const user = userEvent.setup();
      render(<KSelect value='' disabled items={items} onChange={() => {}} />);

      // Act
      await act(async () => { await user.tab(); });

      // Arrange
      const root = screen.getByTestId(testId);

      // Assert
      expect(root).not.toHaveFocus();
    });

    test('Change Select value Using Keyboard Input', async () => {

      // Arrange
      const user = userEvent.setup();
      const TestSelect = () => {
        const [value, setValue] = useState('');
        const onChange = (e: string) => { setValue(e); };

        return (<KSelect value={value} items={items} onChange={onChange} />);
      };
      render(<TestSelect />);

      // Act
      await act(async () => { await user.tab(); });

      // Arrange
      const root = screen.getByTestId(testId);

      // Assert
      expect(root).toHaveFocus();

      // Act
      await act(async () => { await user.keyboard('{enter}'); });
      await act(async () => { await user.tab(); });
      await act(async () => { await user.keyboard('{enter}'); });

      // Arrange
      const selectedRoot = screen.getByText(items[0].title);

      // Assert
      expect(selectedRoot).toBeInTheDocument();
    });

  });

});
