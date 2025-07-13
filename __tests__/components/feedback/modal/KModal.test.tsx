import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { Transition } from 'motion';
import { cleanup, render, screen } from '@testing-library/react';
import { act, useCallback, useState } from 'react';
import userEvent from '@testing-library/user-event';
import { KModal, KMODAL_SIZES } from '@/components';
import { KModalMotion } from '@/components/feedback/modal/KModal.motion';


const testTitle = 'KModal Title';
const testContent = 'KModal Content';
const testFooter = 'KModal Footer';

const openButtonText = '열기';
const motionTime = ((KModalMotion.fade.transition as Transition).duration as number) * 1000;

interface TestModalComponentType {
  defaultOpen?: boolean;
}

const TestModalComponent = ({ defaultOpen = false }: TestModalComponentType) => {

  const [isOpen, setIsOpen] = useState<boolean>(defaultOpen);

  const onOpenEvent = useCallback(() => {
    setIsOpen(true);
  }, []);
  const onCloseEvent = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <>
      <div>{isOpen ? 'open' : 'close'}</div>
      <button type="button" onClick={onOpenEvent}>{openButtonText}</button>
      <KModal isOpen onClose={onCloseEvent}>
        <KModal.Header>{testTitle}</KModal.Header>
        <KModal.Content>{testContent}</KModal.Content>
        <KModal.Footer>{testFooter}</KModal.Footer>
      </KModal>
    </>
  );
};


describe('KModal', () => {
  const mockFn = vi.fn();

  beforeEach(() => {
    mockFn.mockClear();
    vi.useRealTimers();
  });

  afterEach(() => {
    cleanup();
  });


  it('applies title, content, footer props', async () => {
    // Arrange
    render(
      <KModal isOpen onClose={mockFn}>
        <KModal.Header>{testTitle}</KModal.Header>
        <KModal.Content>{testContent}</KModal.Content>
        <KModal.Footer>{testFooter}</KModal.Footer>
      </KModal>,
    );

    // Assert
    expect(screen.queryByText(testTitle))
      .toBeInTheDocument();
    expect(screen.queryByText(testContent))
      .toBeInTheDocument();
    expect(screen.queryByText(testFooter))
      .toBeInTheDocument();
  });


  it.each(KMODAL_SIZES)('applies size prop "%s"', (size) => {
    // Arrange
    render(
      <KModal isOpen size={size} onClose={mockFn}>
        <KModal.Header>{testTitle}</KModal.Header>
        <KModal.Content>{testContent}</KModal.Content>
        <KModal.Footer>{testFooter}</KModal.Footer>
      </KModal>,
    );
    const contentRoot = screen.getByRole('dialog');

    // Assert
    expect(contentRoot)
      .toHaveClass(`k-modal--${size}`);
  });

  it('applies width props', async () => {
    // Arrange
    const testWidth = 500;
    render(
      <KModal isOpen width={testWidth} onClose={mockFn}>
        <KModal.Header>{testTitle}</KModal.Header>
        <KModal.Content>{testContent}</KModal.Content>
        <KModal.Footer>{testFooter}</KModal.Footer>
      </KModal>,
    );
    const root = screen.getByRole('dialog');

    // Assert
    expect(root)
      .toHaveStyle({ width: `${testWidth}px` });
  });

  it('opens the modal on button click', async () => {
    // Arrange
    const user = userEvent.setup();
    render(<TestModalComponent/>);

    const openButtonRoot = screen.getByText(openButtonText);

    // Act
    await act(async () => {
      await user.click(openButtonRoot);
      await new Promise((r) => {
        setTimeout(r, motionTime + 10);
      });
    });

    // Arrange
    const modalRoot = screen.getByRole('dialog');

    // Assert
    expect(modalRoot)
      .toBeInTheDocument();
  });
});
