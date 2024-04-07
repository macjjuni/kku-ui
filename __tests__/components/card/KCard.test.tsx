import { render, screen } from '@testing-library/react';
// import { act } from 'react-dom/test-utils';
// import userEvent from '@testing-library/user-event';
import { KCard } from '@/components';

const testId = 'k-card';
const mockOnClick = jest.fn();

describe('KCard', () => {


  beforeEach(() => { mockOnClick.mockClear(); });


  describe('KChip ', () => {


    describe('Props ', () => {

      test('Style, value, className, id prop render test', () => {

        // Arrange
        const testStyle = { color: 'red', fontSize: '20px' };
        const testClass = 'test-class-name';
        const testIdValue = 'k-chip-test-id';

        render(<KCard id={testIdValue} className={testClass} style={testStyle} />);
        const root = screen.getByTestId(testId);

        // Assert
        expect(root).toHaveStyle(testStyle);
        expect(root).toHaveClass(testClass);
        expect(root).toHaveAttribute('id', testIdValue);
      });


    });


    describe('Event ', () => {

      // test('OnClick event test', async () => {
      //
      //   // Arrange
      //   const user = userEvent.setup();
      //   const testLabel = 'Test Label';
      //   render(<KChip label={testLabel} onClick={mockOnClick} />);
      //   const root = screen.getByText(testLabel);
      //
      //   // Assert
      //   expect(mockOnClick).toHaveBeenCalledTimes(0);
      //
      //   // Act
      //   await user.click(root);
      //
      //   // Assert
      //   expect(mockOnClick).toHaveBeenCalledTimes(1);
      // });
      //
    });

  });


});
