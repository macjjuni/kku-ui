import { render, screen } from '@testing-library/react';

import userEvent from '@testing-library/user-event';
import { act } from 'react';
import { KAccordion } from '@/components';
import { sizes } from '@/common/base/base.interface';

const testId = 'k-accordion';
const testChildrenId = 'k-test-children';
const sizeArr = Object.values(sizes);
const mockOnClick = jest.fn();

describe('KAccordion', () => {
  const TestChildren = () => (<div data-testid={testChildrenId}/>);

  beforeEach(() => {
    mockOnClick.mockClear();
  });


  describe('Props', () => {

    test('Style, value, className, id, summary, children prop render test', () => {

      // Arrange
      const testStyle = { color: 'red', fontSize: '20px' };
      const testClass = 'test-class-name';
      const testIdValue = 'k-accordion-test-id';
      const summaryTest = 'k-accordion-summary';

      render(
        <KAccordion id={testIdValue} className={testClass} style={testStyle} summary={summaryTest}>
          <TestChildren/>
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
          <TestChildren/>
        </KAccordion>,
      );

      const root = screen.getByTestId(testId);

      // Assert
      expect(root).toHaveClass(`k-accordion--${size}`);
    });


    test('Test className rendering based on accordion state', async () => {

      // Arrange
      const user = userEvent.setup();
      const summaryText = 'text';

      render(
        <KAccordion summary={summaryText}>
          <TestChildren/>
        </KAccordion>,
      );

      const summaryRoot = screen.getByText(summaryText);
      const rootClosetState = screen.getByTestId(testId);

      // Assert
      expect(rootClosetState).toHaveClass('k-accordion--close');

      // Events
      await act(async () => {
        await user.click(summaryRoot);
      })

      // Arrange
      const rootOpenState = screen.getByTestId(testId);

      // Assert
      expect(rootOpenState).toHaveClass('k-accordion--open');
    });

  });
});
