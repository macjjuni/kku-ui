import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import { KChip } from '@/components';
import { sizes } from '@/common/base/base.interface';

const testId = 'k-chip';
const testChildrenId = 'k-test-children';
const sizeArr = Object.values(sizes);
const mockOnClick = jest.fn();

describe('KDropHolder', () => {
  const TestChildren = () => (<div data-testid={testChildrenId} />);

  beforeEach(() => { mockOnClick.mockClear(); });


  describe('KChip ', () => {


    describe('Props ', () => {

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

      test.each(sizeArr)('%s Size Prop render test', (size) => {

        // Arrange
        render(<KChip size={size} label='Test Label' />);
        const root = screen.getByTestId(testId);

        // Assert
        expect(root).toHaveClass(`k-chip--${size}`);
      });

      test('Closeable prop render test', () => {

        // Arrange
        render(<KChip label='Label' closeable />);
        const closeIconRoot = screen.getByTestId('k-icon');

        // Assert
        expect(closeIconRoot).toHaveClass('k-chip__close-icon');
      });

      test('FontColor prop render test', () => {

        // Arrange
        const testColor = 'red';
        render(<KChip label='Label' fontColor={testColor} closeable />);
        const root = screen.getByTestId(testId);

        // Assert
        expect(root).toHaveStyle({ color: testColor });
      });

      test('Color prop with default variant render test', () => {

        // Arrange
        const testColor = 'red';
        render(<KChip label='Label' color={testColor} closeable />);
        const root = screen.getByTestId(testId);
        const closeIconRoot = screen.getByTestId('k-icon');

        // Assert
        expect(root).toHaveStyle({ borderColor: testColor, color: testColor });
        expect(closeIconRoot).toHaveStyle({ fill: testColor });
      });

      test('Color prop with contained variant render test', () => {

        // Arrange
        const testColor = 'red';
        render(<KChip label='Label' contained color={testColor} closeable />);
        const root = screen.getByTestId(testId);

        // Assert
        expect(root).toHaveStyle({ background: testColor });
      });

    });


    describe('Event ', () => {

      test('OnClick event test', async () => {

        // Arrange
        const user = userEvent.setup();
        const testLabel = 'Test Label';
        render(<KChip label={testLabel} onClick={mockOnClick} />);
        const root = screen.getByText(testLabel);

        // Assert
        expect(mockOnClick).toBeCalledTimes(0);

        // Act
        await user.click(root);

        // Assert
        expect(mockOnClick).toBeCalledTimes(1);
      });

      test('Disabled onClick event test', async () => {

        // Arrange
        const user = userEvent.setup();
        render(<KChip label='Test Label' onBlur={mockOnClick} />);
        const root = screen.getByTestId(testId);

        // Assert
        expect(mockOnClick).toBeCalledTimes(0);

        // Act
        await user.click(root);

        // Assert
        expect(mockOnClick).toBeCalledTimes(0);
      });

      test('OnFocus event test', async () => {

        // Arrange
        const user = userEvent.setup();
        render(<KChip label='Test Label' onFocus={mockOnClick} />);

        // Assert
        expect(mockOnClick).toBeCalledTimes(0);

        // Act
        await act(async () => { await user.tab(); });

        // Assert
        expect(mockOnClick).toBeCalledTimes(1);
      });

      test('Onblur event test', async () => {

        // Arrange
        const user = userEvent.setup();
        render(<KChip label='Test Label' onBlur={mockOnClick} />);
        const root = screen.getByTestId(testId);

        // Assert
        expect(mockOnClick).toBeCalledTimes(0);

        // Act
        await act(async () => {
          await user.click(root);
          await user.tab();
        });

        // Assert
        expect(mockOnClick).toBeCalledTimes(1);
      });

    });


  });


});
