import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { CSSProperties, ReactNode, act } from 'react';
import { describe, test, expect, vi, beforeEach, beforeAll } from 'vitest';
import { KDropHolder } from '@/components';

const testId = 'k-drop-holder';
const mockFn = vi.fn();

describe('KDropHolder', () => {
  beforeEach(() => {
    mockFn.mockClear();
  });

  beforeAll(() => {
    HTMLDivElement.prototype.animate = vi.fn().mockReturnValue({
      onfinish: null,
      play: vi.fn(),
      pause: vi.fn(),
      cancel: vi.fn(),
      finish: vi.fn(),
    });
  });

  const childrenText = 'test-children';
  const contentText = 'test-content';

  const TestChildren = () => <div>{childrenText}</div>;
  const TestContent = () => <div>{contentText}</div>;

  const TestDropHolder = ({
    id,
    style,
    className,
    content,
  }: {
    id?: string;
    style?: CSSProperties;
    className?: string;
    content?: ReactNode;
  }) => (
    <KDropHolder id={id} style={style} className={className} content={content}
                 data-testid={testId}>
      <TestChildren/>
    </KDropHolder>
  );

  describe('Props', () => {
    test('Style, value, className, id prop render test', () => {
      // Arrange
      const testStyle = { color: '#cccccc', fontSize: '20px' };
      const testClass = 'test-class-name';
      const testIdValue = 'k-select-test-id';

      render(<TestDropHolder id={testIdValue} className={testClass} style={testStyle} content={<TestContent/>}/>);
      const root = screen.getByTestId(testId);

      // Assert
      expect(root).toHaveStyle(testStyle);
      expect(root).toHaveClass(testClass);
      expect(root).toHaveAttribute('id', testIdValue);
    });
  });

  describe('Event', () => {
    test('Click to render anchor element', async () => {
      // Arrange
      const user = userEvent.setup();
      render(<TestDropHolder content={<TestContent/>}/>);

      const root = screen.getByText(childrenText);

      // Act
      await act(async () => {
        await user.click(root);
      });

      // Arrange
      const contentRoot = screen.getByText(contentText);

      // Assert
      expect(contentRoot).toBeInTheDocument();
    });

    test('Click to hide anchor element', async () => {
      // Arrange
      const user = userEvent.setup();
      const outsideText = 'Outside Element';

      const ExtraContainTextDropHolder = () => (
        <>
          <div>{outsideText}</div>
          <TestDropHolder content={<TestContent/>}/>
        </>
      );

      render(<ExtraContainTextDropHolder/>);

      const root = screen.getByText(childrenText);
      const outsideRoot = screen.getByText(outsideText);

      // Act
      await act(async () => {
        await user.click(root); // Click to render anchor element
      });

      // Assert
      let contentRoot = screen.getByText(contentText);
      expect(contentRoot).toBeInTheDocument();

      // Act
      await act(async () => {
        await user.click(outsideRoot); // Click to hide anchor element
      });

      // Assert
      contentRoot = screen.queryByText(contentText);
      expect(contentRoot).toBeInTheDocument();
    });
  });
});
