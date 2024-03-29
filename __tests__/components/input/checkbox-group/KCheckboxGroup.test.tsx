// import { act } from 'react-dom/test-utils';
// import userEvent from '@testing-library/user-event';
import { CSSProperties, useState } from 'react';
import { render, screen } from '@testing-library/react';
import { KCheckboxGroup } from '@/components';

const testId = 'k-checkbox-group';
const mockFn = jest.fn();


const testItems = [
  { label: 'text1', value: 'value1' },
  { label: 'text2', value: 'value2' },
  { label: 'text3', value: 'value3' },
];

describe('KSelect', () => {

  beforeEach(() => {
    mockFn.mockClear();
  });

  const TestCheckboxGroup = (props: {
    defaultValue?: string[], id?: string, className?: string, style?: CSSProperties, shape?: 'circle' | 'square',
  }) => {
    const [value, setValue] = useState(props.defaultValue || []);
    return (<KCheckboxGroup {...props} items={testItems} value={value} onChange={setValue} />);
  };

  describe('Props', () => {

    test('Style, value, className prop render test', () => {

      // Arrange
      const testStyle = { color: 'red', fontSize: '20px' };
      const testClass = 'test-class-name';
      const testIdValue = 'test-kku-id';
      const testDefaultValue = ['value1'];

      render(<TestCheckboxGroup
                defaultValue={testDefaultValue}
                id={testIdValue}
                className={testClass}
                style={testStyle}
      />);
      const root = screen.getByTestId(testId);

      // Assert
      expect(root).toHaveStyle(testStyle);
      expect(root).toHaveClass(testClass);
      expect(root).toHaveAttribute('id', testIdValue);
    });

    test.each(testItems)('Items render test. %s', (item) => {

      // Arrange
      render(<TestCheckboxGroup />);
      const labelRoot = screen.getByText(item.label);

      // Assert
      expect(labelRoot).toBeInTheDocument();
    });

  });

  describe('Events', () => {


    // test('OnChange and Value test', () => {
    //
    //   // Arrange
    //   const testItem = testItems[0];
    //   render(<TestCheckboxGroup defaultValue={[testItem.value]} />);
    //   const checkedItem = screen.getByText(testItem.label);
    //
    //   // Assert
    //   // expect(root).toHaveAttribute('aria-checked', '');
    // });

  });
});
