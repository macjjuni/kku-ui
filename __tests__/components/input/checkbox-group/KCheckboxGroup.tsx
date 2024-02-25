// import { act } from 'react-dom/test-utils';
// import userEvent from '@testing-library/user-event';
// import { render, screen } from '@testing-library/react';
// import { useState } from 'react';
// import { KCheckboxGroup } from '@/components';

// const testId = 'k-checkbox-group';
const mockFn = jest.fn();


// const testItems = [
//   { label: 'text1', value: 'value1' },
//   { label: 'text2', value: 'value2' },
//   { label: 'text3', value: 'value3' },
// ];

describe('KSelect', () => {

  beforeEach(() => {
    mockFn.mockClear();
  });

  describe('Props', () => {

    // const TestCheckbox = () => {
    //   const [checked, setChecked] = useState(false);
    //   return (<KCheckbox label='kku' checked={checked} onChange={(e) => { setChecked(e); }} />);
    // };

    // const TestCheckboxGroup = () => {
    //
    // }
    //
    //
    // test('Style, value, className prop render test', () => {
    //
    //   // Arrange
    //   const testStyle = { color: 'red', fontSize: '20px' };
    //   const testClass = 'test-class-name';
    //   const testIdValue = 'k-select-test-id';
    //
    //   render(<KCheckboxGroup label='kku' id={testIdValue} value={false} onChange={() => {}} className={testClass} style={testStyle} />);
    //   const root = screen.getByTestId(testId);
    //
    //   // Assert
    //   expect(root).toHaveStyle(testStyle);
    //   expect(root).toHaveClass(testClass);
    //   expect(root).toHaveAttribute('id', testIdValue);
    // });

  });
});
