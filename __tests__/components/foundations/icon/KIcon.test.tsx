import { act } from 'react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { KIcon, KIconSizeList } from '@/components';


describe('KIcon', () => {
  const mockFn = vi.fn();

  beforeEach(() => {
    mockFn.mockClear();
  });

  describe('Props', () => {
    it('applies id, className, and style props', () => {
      // Arrange
      const testId = 'k-id-test';
      const testClassName = 'k-class-test';
      const testStyle = { color: '#aaa', fontSize: '20px' };

      render(<KIcon icon="close" id={testId} className={testClassName} style={testStyle}/>);
      const root = screen.getByRole('img');

      // Assert
      expect(root)
        .toHaveAttribute('id', testId);
      expect(root)
        .toHaveClass(testClassName);
      expect(root)
        .toHaveStyle(testStyle);
    });

    it.each(KIconSizeList)('applies size prop: %s', (size) => {
      // Arrange
      render(<KIcon icon="close" size={size}/>);
      const root = screen.getByRole('img');

      // Assert
      expect(root)
        .toHaveClass(`k-icon--${size}`);
    });

    it('renders clickable icon when onClick is provided', () => {
      // Arrange
      render(<KIcon icon="close" onClick={() => {
      }}/>);
      const root = screen.getByRole('button');

      // Assert
      expect(root)
        .toHaveClass('k-icon--clickable');
    });

    it('sets tabIndex based on onClick presence', () => {
      // Arrange
      render(
        <>
          <KIcon icon="close" onClick={mockFn}/>
          <KIcon icon="close"/>
        </>,
      );
      const clickable = screen.getByRole('button');
      const nonClickable = screen.getByRole('img');

      // Assert
      expect(clickable)
        .toHaveAttribute('tabIndex', '0');
      expect(nonClickable).not
        .toHaveAttribute('tabIndex');
    });
  });

  describe('Events', () => {
    it('calls onClick when icon is clicked', async () => {
      // Arrange
      const user = userEvent.setup();
      render(<KIcon icon="close" onClick={mockFn}/>);
      const button = screen.getByRole('button');

      // Act
      await act(async () => {
        await user.click(button);
      });

      // Assert
      expect(mockFn)
        .toHaveBeenCalledTimes(1);
    });

    it('does not call onClick when disabled', async () => {
      // Arrange
      const user = userEvent.setup();
      render(<KIcon icon="close" onClick={mockFn} disabled/>);
      const button = screen.getByRole('button');

      // Act
      await act(async () => {
        await user.click(button);
      });

      // Assert
      expect(mockFn)
        .not
        .toHaveBeenCalled();
    });
  });
});
