// import { act } from 'react-dom/test-utils';
// import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
// import { useState } from 'react';
import { KCheckbox } from '@/components';

const testId = 'k-checkbox';
const mockFn = jest.fn();

describe('KSelect', () => {

  beforeEach(() => {
    mockFn.mockClear();
  });

  describe('Props', () => {

    // const TestCheckbox = () => {
    //   const [checked, setChecked] = useState(false);
    //   return (<KCheckbox label='kku' checked={checked} onChange={(e) => { setChecked(e); }} />);
    // };

    test('Style, value, className prop render test', () => {

      // Arrange
      const testStyle = { color: 'red', fontSize: '20px' };
      const testClass = 'test-class-name';
      const testIdValue = 'k-select-test-id';

      render(<KCheckbox label='kku' id={testIdValue} checked onChange={() => {}} className={testClass} style={testStyle} />);
      const root = screen.getByTestId(testId);

      // Assert
      expect(root).toHaveStyle(testStyle);
      expect(root).toHaveClass(testClass);
      expect(root).toHaveAttribute('id', testIdValue);
    });

  });
});
