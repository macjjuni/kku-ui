import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
// import { useCallback, useState } from 'react';
// import userEvent from '@testing-library/user-event';
import { KModal, KModalSizes, KModalSizeType } from '@/components';


const KModalSizeList = Object.keys(KModalSizes) as KModalSizeType[];

// const openButtonText = '열기';
// const closeButtonText = '닫기';
// const contentText = 'content';

// interface TestModalComponentType {
//   defaultOpen?: boolean;
// }
//
// const TestModalComponent = ({ defaultOpen = false }: TestModalComponentType) => {
//
//   const [isOpen, setIsOpen] = useState<boolean>(defaultOpen);
//
//   const onOpenEvent = useCallback(() => {
//     setIsOpen(true);
//   }, []);
//   const onCloseEvent = useCallback(() => {
//     setIsOpen(false);
//   }, []);
//
//   return (
//     <>
//       <div>{isOpen ? 'open' : 'close'}</div>
//       <button type='button' onClick={onOpenEvent}>{openButtonText}</button>
//       <KModal isOpen={isOpen} content={contentText} title='title' setIsOpen={setIsOpen}
//               footer={<button type='button' onClick={onCloseEvent}>{closeButtonText}</button>}/>
//     </>
//   );
// };


describe('KModal', () => {

  const mockFn = vi.fn();

  beforeEach(() => {
    mockFn.mockClear();
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.runOnlyPendingTimers(); // 잔여 타이머 모두 실행
    vi.clearAllTimers();
    vi.useRealTimers();
    cleanup();
  });


  it('applies id, className, and style props', async () => {
    // Arrange
    const testId = 'test-id';
    const testClass = 'test-id';
    const testStyle = { color: '#eee', fontSize: '24px' };

    render(<KModal isOpen content={<></>} id={testId} className={testClass} style={testStyle} onClose={mockFn}/>);
    const root = screen.getByRole('dialog');
    const containerRoot = screen.getByTestId('k-modal-container');

    // Assert
    expect(root)
      .toHaveAttribute('id', testId);
    expect(root)
      .toHaveStyle(testStyle);
    expect(containerRoot)
      .toHaveClass(testClass);
  });

  it('applies title, content, footer props', async () => {
    // Arrange
    const testTitle = 'This is a title';
    const testContent = 'This is a content';
    const testFooter = 'This is a footer';

    render(<KModal isOpen title={testTitle} content={testContent} footer={testFooter} onClose={mockFn}/>);
    const titleRoot = screen.getByText(testTitle);
    const titleContent = screen.getByText(testContent);
    const titleFooter = screen.getByText(testFooter);

    // Assert
    expect(titleRoot)
      .toHaveClass('k-modal__container__header__text');
    expect(titleContent)
      .toHaveClass('k-modal__container__content');
    expect(titleFooter)
      .toHaveClass('k-modal__container__footer');
  });

  it('applies no title, footer props', async () => {
    // Arrange
    render(<KModal isOpen content="test" onClose={() => {
    }}/>);

    // Assert
    expect(screen.queryByTestId('k-modal__header'))
      .not
      .toBeInTheDocument();
    expect(screen.queryByTestId('k-modal__footer'))
      .not
      .toBeInTheDocument();
  });

  it.each(KModalSizeList)('applies size prop "%s"', (size) => {
    // Arrange
    render(<KModal isOpen content="test" size={size} onClose={mockFn}/>);

    const contentRoot = screen.getByTestId('k-modal');

    // Assert
    expect(contentRoot)
      .toHaveClass(`k-modal--${size}`);
  });

  it('applies width props', async () => {
    // Arrange
    const testWidth = 500;
    render(<KModal isOpen width={testWidth} content="test" onClose={mockFn}/>);

    const containerRoot = screen.getByTestId('k-modal');

    // Assert
    expect(containerRoot)
      .toHaveStyle({ width: `${testWidth}px` });
  });

  // it('opens the modal on button click', async () => {
  //   // Arrange
  //   const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
  //   render(<TestModalComponent/>);
  //
  //   const openButtonRoot = screen.getByText(openButtonText);
  //
  //   // Act
  //   await act(async () => {
  //     await user.click(openButtonRoot);
  //   });
  //
  //   const modalRoot = screen.getByTestId('k-modal');
  //
  //   // Assert
  //   expect(modalRoot).toBeInTheDocument();
  // });
});
