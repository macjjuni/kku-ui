import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
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

      test('Title and subTitle prop render test', () => {

        // Arrange
        const testTitle = 'This is Title';
        const testSubTitle = 'This is SubTitle';
        render(<KCard title={testTitle} subTitle={testSubTitle} />);

        const titleRoot = screen.getByText(testTitle);
        const subTitleRoot = screen.getByText(testSubTitle);

        // Assert
        expect(titleRoot).toHaveClass('k-card__title');
        expect(subTitleRoot).toHaveClass('k-card__sub-title');
      });

      test('Children prop render test', () => {

        // Arrange
        const testText = 'This is Children';
        const TestChildren = () => (<>{testText}</>);

        render(<KCard><TestChildren /></KCard>);

        const root = screen.getByText(testText);

        // Assert
        expect(root).toHaveClass('k-card');
      });

      test('Clickable prop render test', () => {

        // Arrange
        render(<KCard clickable />);
        const root = screen.getByTestId(testId);

        // Assert
        expect(root).toHaveClass('k-card__clickable');
      });

      test('Width, height prop render test', () => {

        // Arrange
        const testWidth = '300px';
        const testHeight = '500px';

        render(<KCard width={testWidth} height={testHeight} />);

        const root = screen.getByTestId(testId);

        // Assert
        expect(root).toHaveStyle({ width: testWidth, height: testHeight });
      });

      test('fontColor prop render test', () => {

        // Arrange
        const testFontColor = 'red';

        render(<KCard fontColor={testFontColor} />);

        const root = screen.getByTestId(testId);

        // Assert
        expect(root).toHaveStyle({ color: testFontColor });
      });

      test('Rounded, BorderRadius prop render test', () => {

        // Arrange
        const testRadius = '20px';

        render(<KCard rounded borderRadius={testRadius} />);

        const root = screen.getByTestId(testId);

        // Assert
        expect(root).toHaveStyle({ borderRadius: testRadius });
      });


    });


    describe('Event ', () => {

      test('Onclick event prop test', async () => {

        // Arrange
        const user = userEvent.setup();

        render(<KCard clickable onClick={mockOnClick} />);

        const root = screen.getByTestId(testId);

        // Assert
        expect(mockOnClick).toBeCalledTimes(0);

        // Act
        await act(async () => { await user.click(root); });

        // Assert
        expect(mockOnClick).toBeCalledTimes(1);
      });

    });

  });


});
