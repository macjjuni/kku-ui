import { render, screen } from '@testing-library/react';

import { KAccordion } from '@/components';
import { sizes } from '@/common/base/base.interface';

const testId = 'k-accordion';
const testChildrenId = 'k-test-children';
const sizeArr = Object.values(sizes);
const mockOnClick = jest.fn();

describe('KAccordion', () => {
  const TestChildren = () => (<div data-testid={testChildrenId} />);

  beforeEach(() => { mockOnClick.mockClear(); });


  describe('Props', () => {

    test('Style, value, className, id, summary, children prop render test', () => {

      // Arrange
      const testStyle = { color: 'red', fontSize: '20px' };
      const testClass = 'test-class-name';
      const testIdValue = 'k-accordion-test-id';
      const summaryTest = 'k-accordion-summary';

      render(
        <KAccordion id={testIdValue} className={testClass} style={testStyle} summary={summaryTest}>
          <TestChildren />
        </KAccordion>,
      );
      const root = screen.getByTestId(testId);
      const rootGetSummary = screen.getByText(summaryTest);
      const rootGetChildren = screen.getByTestId(testChildrenId);

      // Assert
      expect(root).toHaveStyle(testStyle);
      expect(root).toHaveClass(testClass);
      expect(root).toHaveAttribute('id', testIdValue);
      expect(rootGetSummary).toBeInTheDocument();
      expect(rootGetChildren).toBeInTheDocument();
    });

    test.each(sizeArr)('%s Size Prop render test', (size) => {

      // Arrange
      const summaryText = 'summary-text';

      render(
        <KAccordion summary={summaryText} size={size}>
          <TestChildren />
        </KAccordion>,
      );

      const root = screen.getByTestId(testId);

      // Assert
      expect(root).toHaveClass(`k-accordion--${size}`);
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

    });

  });
});
