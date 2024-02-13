import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import { KIcon } from '@/components';


describe('KButton', () => {

  const mockOnClick = jest.fn();

  beforeEach(() => {
    mockOnClick.mockClear();
  });

  describe('Props', () => {

    test('style prop render test', () => {

      const testStyle = { color: 'red', fontSize: '20px' };
      render(<KIcon icon='search' style={testStyle} />);
      const root = screen.getByRole('img');

      expect(root).toHaveStyle(testStyle);
    });

    test('ClassName prop render test', () => {

      const testClass = 'test-class-name';
      render(<KIcon icon='search' className={testClass} />);
      const root = screen.getByRole('img');

      expect(root).toHaveClass(testClass);
    });

    test('Size prop render test', () => {

      const testSize = 77;
      render(<KIcon icon='search' size={testSize} />);
      const root = screen.getByRole('img');

      expect(root).toHaveStyle({ fontSize: `${testSize}px` });
    });

    test('Clickable prop render test', () => {

      render(<KIcon icon='search' clickable />);
      const root = screen.getByRole('img');

      expect(root).toHaveClass('k-icon--clickable');
    });

    test('Color prop render test', () => {

      const testColor = '#eaeaea';
      render(<KIcon icon='search' color={testColor} />);
      const root = screen.getByRole('img');

      expect(root).toHaveStyle({ color: testColor });
    });

    test('클릭 이벤트가 있을 때 role이 button으로 적용 된다.', async () => {

      render(<KIcon icon='search' onClick={mockOnClick} />);
      const root = screen.getByRole('button');

      expect(root).toBeInTheDocument();
    });

    test('클릭 이벤트가 없을 때 role 이 img 로 적용 된다.', async () => {

      render(<KIcon icon='search' />);
      const root = screen.getByRole('img');

      expect(root).toBeInTheDocument();
    });


  });

  describe('Event', () => {

    test('onClick event test', async () => {

      const user = userEvent.setup();
      render(<KIcon icon='search' onClick={mockOnClick} />);
      const root = screen.getByRole('button');

      expect(mockOnClick).toBeCalledTimes(0);
      // Act
      await act(async () => { await user.click(root); });

      expect(mockOnClick).toBeCalledTimes(1);
    });

    test('Disabled onClick event test', async () => {

      const user = userEvent.setup();
      render(<KIcon icon='search' onClick={mockOnClick} disabled />);
      const root = screen.getByRole('button');

      expect(mockOnClick).toBeCalledTimes(0);
      // Act
      await act(async () => { await user.click(root); });

      expect(mockOnClick).toBeCalledTimes(0);
    });

  });


});
