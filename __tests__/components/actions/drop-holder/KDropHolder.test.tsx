import { render, screen } from '@testing-library/react';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
// import { act } from 'react';
// import userEvent from '@testing-library/user-event';
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
      expect(root).toHaveStyle(testStyle);
      expect(root).toHaveClass(testClass);
      expect(root).toHaveAttribute('id', testId);
    });

    // it('contentWidth prop render test', async () => {
    //   // Arrange
    //   const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
    //   const testContentWidth = 300;
    //   render(
    //     <>
    //       <KDropHolder content={<TestContent/>} contentWidth={testContentWidth}>
    //         <TestChildren/>
    //       </KDropHolder>
    //     </>,
    //   );
    //   const root = screen.getByText(childrenText);
    //
    //   // Act
    //   await act(async () => {
    //     await user.click(root);
    //   });
    //
    //   // Arrange
    //   const contentRoot = screen.getByRole('tooltip');
    //
    //   // Assert
    //   expect(contentRoot).toBeInTheDocument();
    //   expect(contentRoot).toHaveStyle({ width: `${testContentWidth}px` });
    // });

    // it('openDelay prop render test', async () => {
    //   // Arrange
    //   const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
    //   const testOpenDelay = 3000;
    //   render(
    //     <KDropHolder content={<TestContent/>} openDelay={testOpenDelay}>
    //       <TestChildren/>
    //     </KDropHolder>,
    //   );
    //   const root = screen.getByText(childrenText);
    //
    //   // Act
    //   await act(async () => {
    //     await user.click(root);
    //   });
    //
    //   // Assert
    //   expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
    //
    //   await act(async () => {
    //     vi.advanceTimersByTime(testOpenDelay);
    //   });
    //
    //   // Arrange
    //   expect(screen.getByRole('tooltip')).toBeInTheDocument();
    // });
  });

  // describe('Event', () => {
  //
  //   it('Click to render anchor element', async () => {
  //     // Arrange
  //     const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
  //     render(
  //       <>
  //         <KDropHolder content={<TestContent/>}>
  //           <TestChildren/>
  //         </KDropHolder>
  //       </>,
  //     );
  //     const root = screen.getByText(childrenText);
  //
  //     // Act
  //     await act(async () => {
  //       await user.click(root);
  //     });
  //
  //     // Arrange
  //     const contentRoot = screen.getByText(contentText);
  //
  //     // Assert
  //     expect(contentRoot).toBeInTheDocument();
  //   });
  //
  //   it('Hover to render anchor element', async () => {
  //     // Arrange
  //     const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
  //     render(
  //       <>
  //         <KDropHolder trigger='hover' content={<TestContent/>}>
  //           <TestChildren/>
  //         </KDropHolder>
  //       </>,
  //     );
  //     const root = screen.getByText(childrenText);
  //
  //     // Act
  //     await act(async () => {
  //       await user.hover(root);
  //     });
  //
  //     // Arrange
  //     const contentRoot = screen.getByText(contentText);
  //
  //     // Assert
  //     expect(contentRoot).toBeInTheDocument();
  //   });
  //
  //   it('Hover to hide anchor element', async () => {
  //     // Arrange
  //     const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
  //     const anotherText = 'test';
  //
  //     render(
  //       <>
  //         <button type='button' onClick={mockFn}>{anotherText}</button>
  //         <KDropHolder trigger='hover' content={contentText}>
  //           {childrenText}
  //         </KDropHolder>
  //       </>,
  //     );
  //
  //     const root = screen.getByText(childrenText);
  //
  //     // Act
  //     await act(async () => {
  //       await user.hover(root);
  //     });
  //
  //     // Assert
  //     expect(screen.getByText(contentText)).toBeInTheDocument();
  //     expect(mockFn).toHaveBeenCalledTimes(0);
  //
  //     // Act
  //     await act(async () => {
  //       await user.click(screen.getByText(anotherText));
  //       vi.advanceTimersByTime(300);
  //     });
  //
  //     // Assert
  //     expect(mockFn).toHaveBeenCalledTimes(1);
  //     expect(screen.getByText(childrenText)).toHaveClass('k-drop-holder--close');
  //   });
  //
  //   it('Click to hide anchor element', async () => {
  //     // Arrange
  //     const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
  //     const anotherText = 'test';
  //
  //     render(
  //       <>
  //         <button type='button' onClick={mockFn}>{anotherText}</button>
  //         <KDropHolder content={contentText}>
  //           {childrenText}
  //         </KDropHolder>
  //       </>,
  //     );
  //
  //     const root = screen.getByText(childrenText);
  //
  //     // Act
  //     await act(async () => {
  //       await user.click(root);
  //     });
  //
  //     // Assert
  //     expect(screen.getByText(contentText)).toBeInTheDocument();
  //     expect(mockFn).toHaveBeenCalledTimes(0);
  //
  //     // Act
  //     await act(async () => {
  //       await user.click(screen.getByText(anotherText));
  //       vi.advanceTimersByTime(300);
  //     });
  //
  //     // Assert
  //     expect(mockFn).toHaveBeenCalledTimes(1);
  //     expect(screen.getByText(childrenText)).toHaveClass('k-drop-holder--close');
  //   });
  // });

});
