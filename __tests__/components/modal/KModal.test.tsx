import { render, screen } from '@testing-library/react';
// import { act } from 'react-dom/test-utils';
// import userEvent from '@testing-library/user-event';
import { CSSProperties } from 'react';
import { KModal } from '@/components';

const testId = 'k-modal-test-id';
const testClass = 'k-modal-class';
// const testChildrenId = 'k-modal-children-id';
const mockOnClick = jest.fn();

describe('KDropHolder', () => {
  // const TestChildren = () => (<div data-testid={testChildrenId} />);

  beforeEach(() => { mockOnClick.mockClear(); });


  describe('KModal ', () => {


    describe('Props ', () => {

      test('Style, value, className, id prop render test', () => {

        // Arrange
        const testIdValue = 'k-chip-test-id';
        const testStyle: CSSProperties = { color: 'red' };

        render(<KModal id={testIdValue} className={testClass} style={testStyle} isOpen />);
        const root = screen.getByTestId(testId);

        // Assert
        expect(root).toHaveStyle(testStyle);
        expect(root).toHaveClass(testClass);
        expect(root).toHaveAttribute('id', testIdValue);
      });


    });


  });


});
