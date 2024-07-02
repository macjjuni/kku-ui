import { render, screen } from '@testing-library/react';
import { act } from 'react';
// import userEvent from '@testing-library/user-event';
// import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import { KIcon } from '@/components';


describe('KButton', () => {

  const mockOnClick = jest.fn();

  beforeEach(() => {
    mockOnClick.mockClear();
  });

  describe('Props', () => {

    test('style prop render test', () => {

      // Arrange
      const testStyle = { color: 'red', fontSize: '20px' };
      render(<KIcon icon='close' style={testStyle} />);
      const root = screen.getByRole('img');

      // Assert
      expect(root).toHaveStyle(testStyle);
    });

    test('ClassName prop render test', () => {

      // Arrange
      const testClass = 'test-class-name';
      render(<KIcon icon='close' className={testClass} />);
      const root = screen.getByRole('img');

      // Assert
      expect(root).toHaveClass(testClass);
    });

    test('Size prop render test', () => {

      // Arrange
      const testSize = 77;
      render(<KIcon icon='close' size={testSize} />);
      const root = screen.getByRole('img');

      // Assert
      expect(root).toHaveStyle({ fontSize: `${testSize}px` });
    });

    test('Clickable prop render test', () => {

      // Arrange
      render(<KIcon icon='close' clickable />);
      const root = screen.getByRole('img');

      // Assert
      expect(root).toHaveClass('k-icon--clickable');
    });

    test('Color prop render test', () => {

      // Arrange
      const testColor = '#eaeaea';
      render(<KIcon icon='close' color={testColor} />);
      const root = screen.getByRole('img');

      // Assert
      expect(root).toHaveStyle({ fill: testColor });
    });

    test('tabIndex prop render test.', async () => {

      // Arrange
      // eslint-disable-next-line jsx-a11y/tabindex-no-positive
      render(<KIcon icon='close' tabIndex={2} onClick={mockOnClick} />);
      render(<KIcon icon='close' />);

      const imgRoot = screen.getByRole('img');
      const buttonRoot = screen.getByRole('button');

      // Assert
      expect(imgRoot).toHaveAttribute('tabIndex', '-1');
      expect(buttonRoot).toHaveAttribute('tabIndex', '2');
    });


  });

  describe('Event', () => {

    test('onClick event test', async () => {

      // Arrange
      const user = userEvent.setup();
      render(<KIcon icon='close' onClick={mockOnClick} />);
      const root = screen.getByRole('button');

      expect(mockOnClick).toHaveBeenCalledTimes(0);
      // Act
      await act(async () => { await user.click(root); });

      // Assert
      expect(mockOnClick).toHaveBeenCalledTimes(1);
    });

    test('Disabled onClick event test', async () => {

      // Arrange
      const user = userEvent.setup();
      render(<KIcon icon='close' onClick={mockOnClick} disabled />);
      const root = screen.getByRole('button');

      expect(mockOnClick).toHaveBeenCalledTimes(0);
      // Act
      await act(async () => { await user.click(root); });

      // Assert
      expect(mockOnClick).toHaveBeenCalledTimes(0);
    });

    test('onClick prop style test', async () => {

      // Arrange
      render(<KIcon icon='close' onClick={mockOnClick} disabled />);
      const root = screen.getByRole('button');

      // Assert
      expect(root).toHaveStyle({ cursor: 'pointer' });
    });

  });


});
