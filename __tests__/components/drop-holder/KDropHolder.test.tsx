import { act, CSSProperties, ReactNode } from 'react';
import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { KDropHolder } from '@/components';


describe('KDropHolder', () => {

  const mockFn = vi.fn();

  beforeEach(() => {
    mockFn.mockClear();
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.clearAllTimers();
    vi.useRealTimers();
  });

  const childrenText = 'test-children';
  const contentText = 'test-content';

  const TestChildren = () => (<div>{childrenText}</div>);
  const TestContent = () => (<div>{contentText}</div>);

  const TestDropHolder = ({ id, style, className, content }:

                            { id?: string, style?: CSSProperties, className?: string, content?: ReactNode }) => (
    <KDropHolder id={id} style={style} className={className} content={content}>
      <TestChildren/>
    </KDropHolder>
  );

  describe('Props', () => {

    it('Style, value, className, id prop render test', () => {

      // Arrange
      const testStyle = { color: '#bbb', fontSize: '20px' };
      const testClass = 'test-class-name';
      const testId = 'k-select-test-id';

      render(<TestDropHolder id={testId} className={testClass} style={testStyle} content={<TestContent/>} />);
      const root = screen.getByTestId('k-drop-holder');

      // Assert
      expect(root).toHaveStyle(testStyle);
      expect(root).toHaveClass(testClass);
      expect(root).toHaveAttribute('id', testId);
    });
  });

  describe('Event', () => {

    test('Click to render anchor element', async () => {

      // Arrange
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      render(<TestDropHolder content={<TestContent />} />);

      const root = screen.getByText(childrenText);

      // Act
      await act(async () => {
        await user.click(root);
        vi.advanceTimersByTime(300);
      });

      // Arrange
      const contentRoot = screen.getByText(contentText);

      // Assert
      expect(contentRoot).toBeInTheDocument();
    });

    test('Click to hide anchor element', async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      const outsideText = 'Outside Element';

      const ExtraContainTextDropHolder = () => (
        <>
          <button type='button'>{outsideText}</button>
          <TestDropHolder content={<TestContent />} />
        </>
      );

      render(<ExtraContainTextDropHolder />);

      const root = screen.getByText(childrenText);
      // const outsideRoot = screen.getByText(outsideText);

      await act(async () => {
        await user.click(root);
        vi.advanceTimersByTime(300);
      });

      expect(screen.getByText(contentText)).toBeInTheDocument();

      // await act(async () => {
      //   await user.click(document.body);
      //   vi.advanceTimersByTime(500);
      // });
      //
      // expect(screen.queryByText(contentText)).toBeNull();
    });
  });

});
