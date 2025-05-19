import { act } from 'react';
import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { Transition } from 'motion';
import userEvent from '@testing-library/user-event';
import { KDropHolder } from '@/components';
import KDropHolderMotion from '@/components/actions/drop-holder/KDropHolder.motion';

const motionTime = ((KDropHolderMotion.transition as Transition).duration as number) * 1000;

describe('KDropHolder', () => {

  const mockFn = vi.fn();

  beforeEach(() => {
    mockFn.mockClear();
    vi.useRealTimers();
  });

  const childrenText = 'test-children';
  const contentText = 'test-content';

  const TestChildren = () => (<div>{childrenText}</div>);
  const TestContent = () => (<div>{contentText}</div>);

  describe('Props', () => {

    it('Style, value, className, id prop render test', () => {

      // Arrange
      const testStyle = { color: '#bbb', fontSize: '20px' };
      const testClass = 'test-class-name';
      const testId = 'k-select-test-id';

      render(
        <>
          <KDropHolder id={testId} className={testClass} style={testStyle} content={<TestContent/>}>
            <TestChildren/>
          </KDropHolder>
        </>,
      );
      const root = screen.getByTestId('k-drop-holder');

      // Assert
      expect(root)
        .toHaveStyle(testStyle);
      expect(root)
        .toHaveClass(testClass);
      expect(root)
        .toHaveAttribute('id', testId);
    });

    it('contentWidth prop render test', async () => {
      // Arrange
      const user = userEvent.setup();
      const testContentWidth = motionTime + 10;
      render(
        <>
          <KDropHolder content={<TestContent/>} contentWidth={testContentWidth}>
            <TestChildren/>
          </KDropHolder>
        </>,
      );
      const root = screen.getByText(childrenText);

      // Act
      await act(async () => {
        await user.click(root);
      });

      // Arrange
      const contentRoot = screen.getByRole('tooltip');

      // Assert
      expect(contentRoot)
        .toBeInTheDocument();
      expect(contentRoot)
        .toHaveStyle({ width: `${testContentWidth}px` });
    });

    it('openDelay prop render test', async () => {
      // Arrange
      const user = userEvent.setup();
      const testOpenDelay = 3000;
      render(
        <KDropHolder content={<TestContent/>} openDelay={testOpenDelay}>
          <TestChildren/>
        </KDropHolder>,
      );
      const root = screen.getByText(childrenText);

      // Assert
      expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();

      // Act
      await act(async () => {
        await user.click(root);
        await new Promise((r) => {
          setTimeout(r, testOpenDelay + 10);
        });
      });

      // Assert
      expect(screen.queryByRole('tooltip'))
        .toBeInTheDocument();
    });
  });

  describe('Event', () => {

    it('Click to render anchor element', async () => {
      // Arrange
      const user = userEvent.setup();
      render(
        <>
          <KDropHolder content={<TestContent/>}>
            <TestChildren/>
          </KDropHolder>
        </>,
      );
      const root = screen.getByText(childrenText);

      // Act
      await act(async () => {
        await user.click(root);
        await new Promise((r) => {
          setTimeout(r, motionTime + 10);
        });
      });

      // Arrange
      const contentRoot = screen.getByText(contentText);

      // Assert
      expect(contentRoot)
        .toBeInTheDocument();
    });

    it('Hover to render anchor element', async () => {
      // Arrange
      const user = userEvent.setup();
      render(
        <>
          <KDropHolder trigger="hover" content={<TestContent/>}>
            <TestChildren/>
          </KDropHolder>
        </>,
      );
      const root = screen.getByText(childrenText);

      // Act
      await act(async () => {
        await user.hover(root);
        await new Promise((r) => {
          setTimeout(r, motionTime + 10);
        });
      });

      // Arrange
      const contentRoot = screen.getByText(contentText);

      // Assert
      expect(contentRoot)
        .toBeInTheDocument();
    });

    it('Hover to hide anchor element', async () => {
      // Arrange
      const user = userEvent.setup();
      const anotherText = 'test';

      render(
        <>
          <button type="button" onClick={mockFn}>{anotherText}</button>
          <KDropHolder trigger="hover" content={contentText}>
            {childrenText}
          </KDropHolder>
        </>,
      );

      const root = screen.getByText(childrenText);

      // Act
      await act(async () => {
        await user.hover(root);
        await new Promise((r) => {
          setTimeout(r, motionTime + 10);
        });
      });

      // Assert
      expect(screen.getByText(contentText))
        .toBeInTheDocument();
      expect(mockFn)
        .toHaveBeenCalledTimes(0);

      // Act
      await act(async () => {
        await user.click(screen.getByText(anotherText));
        await new Promise((r) => {
          setTimeout(r, motionTime + 10);
        });
      });

      // Assert
      expect(mockFn)
        .toHaveBeenCalledTimes(1);
      expect(screen.getByText(childrenText))
        .toHaveClass('k-drop-holder--close');
    });

    it('Click to hide anchor element', async () => {
      // Arrange
      const user = userEvent.setup();
      const anotherText = 'test';

      render(
        <>
          <button type="button" onClick={mockFn}>{anotherText}</button>
          <KDropHolder content={contentText}>
            {childrenText}
          </KDropHolder>
        </>,
      );

      const root = screen.getByText(childrenText);

      // Act
      await act(async () => {
        await user.click(root);
        await new Promise((r) => {
          setTimeout(r, motionTime + 10);
        });
      });

      // Assert
      expect(screen.getByText(contentText))
        .toBeInTheDocument();
      expect(mockFn)
        .toHaveBeenCalledTimes(0);

      // Act
      await act(async () => {
        await user.click(screen.getByText(anotherText));
        await new Promise((r) => {
          setTimeout(r, motionTime + 10);
        });
      });

      // Assert
      expect(mockFn)
        .toHaveBeenCalledTimes(1);
      expect(screen.getByText(childrenText))
        .toHaveClass('k-drop-holder--close');
    });
  });

});
