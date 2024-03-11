// import { act } from 'react-dom/test-utils';
// import userEvent from '@testing-library/user-event';
// import { render, screen } from '@testing-library/react';
import { render, screen } from '@testing-library/react';
import { KChip } from '@/components';

const testId = 'k-chip';
const testChildrenId = 'k-test-children';
const mockFn = jest.fn();

describe('KDropHolder', () => {

  beforeEach(() => {
    mockFn.mockClear();
  });


  const TestChildren = () => (<div data-testid={testChildrenId} />);


  describe('Props', () => {

    test('Style, value, className, id prop render test', () => {

      // Arrange
      const testStyle = { color: 'red', fontSize: '20px' };
      const testClass = 'test-class-name';
      const testIdValue = 'k-chip-test-id';

      render(<KChip id={testIdValue} className={testClass} style={testStyle}><TestChildren /></KChip>);
      const root = screen.getByTestId(testId);

      // Assert
      expect(root).toHaveStyle(testStyle);
      expect(root).toHaveClass(testClass);
      expect(root).toHaveAttribute('id', testIdValue);
    });


  });


});
