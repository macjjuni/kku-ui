import { render, screen } from '@testing-library/react';
import { act } from 'react';
import userEvent from '@testing-library/user-event';
import { ICON_SIZE, KIcon, KIconSize } from '@/components';

const SIZE_LIST = Object.keys(ICON_SIZE) as KIconSize[];


describe('KIcon', () => {

  const mockFn = vi.fn();

  beforeEach(() => {
    mockFn.mockClear();
  });

  describe('Props', () => {

    it('Id, ClassName, style prop test', () => {

      // Arrange
      const testId = 'k-id-test';
      const testClassName = 'k-class-test';
      const testStyle = { color: '#aaa', fontSize: '20px' };
      render(<KIcon icon='close' id={testId} className={testClassName} style={testStyle}/>);
      const root = screen.getByRole('img');

      // Assert
      expect(root).toHaveAttribute('id', testId);
      expect(root).toHaveClass(testClassName);
      expect(root).toHaveStyle(testStyle);
    });

    it.each(SIZE_LIST)('should render correctly with size "%s"', (size) => {

      // Arrange
      render(<KIcon icon='close' size={size}/>);
      const root = screen.getByRole('img');

      // Assert
      expect(root).toHaveClass(`k-icon--${size}`);
    });

    it('Clickable prop render test', () => {

      // Arrange
      render(<KIcon icon='close' onClick={() => {
      }}/>);
      const root = screen.getByRole('button');

      // Assert
      expect(root).toHaveClass('k-icon--clickable');
    });

    it('tabIndex prop render test.', async () => {

      render(
        <>
          <KIcon icon='close' onClick={mockFn}/>
          <KIcon icon='close'/>
        </>,
      );

      // Arrange
      const buttonRoot = screen.getByRole('button');
      const imgRoot = screen.getByRole('img');

      // Assert
      expect(buttonRoot).toHaveAttribute('tabIndex', '0');
      expect(imgRoot).toHaveAttribute('tabIndex', '-1');
    });
  });

  describe('Event', () => {

    it('onClick event test', async () => {

      // Arrange
      const user = userEvent.setup();
      render(<KIcon icon='close' onClick={mockFn}/>);
      const root = screen.getByRole('button');

      expect(mockFn).toHaveBeenCalledTimes(0);

      // Act
      await act(async () => {
        await user.click(root);
      });

      // Assert
      expect(mockFn).toHaveBeenCalledTimes(1);
    });

    it('Disabled onClick event test', async () => {

      // Arrange
      const user = userEvent.setup();
      render(<KIcon icon='close' onClick={mockFn} disabled/>);
      const root = screen.getByRole('button');

      expect(mockFn).toHaveBeenCalledTimes(0);
      // Act
      await act(async () => {
        await user.click(root);
      });

      // Assert
      expect(mockFn).toHaveBeenCalledTimes(0);
    });
  });
});
