import { act, render, screen } from '@testing-library/react';
import { useState } from 'react';
import { beforeAll, describe, expect, test, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import CSSTransition from '@/components/css-transition/CSSTransition';


const toggleButtonLabel = 'Toggle';
const contentText = 'This is Content!';
const testTimeout = 300;
const startAnimation = { x: 12, y: -12, opacity: 0 };
const endAnimation = { x: 0, y: 0, opacity: 1 };


const TextCSSTransition = () => {

  const [isOpen, setOpen] = useState(false);

  const toggle = () => {
    setOpen((prev) => !prev);
  }

  return (
    <>
      <button type='button' onClick={toggle}>{toggleButtonLabel}</button>
      <CSSTransition show={isOpen} timeout={testTimeout} startAnimation={startAnimation}
                     endAnimation={endAnimation}>
        {contentText}
      </CSSTransition>
    </>
  )
}


describe('CSSTransition', () => {

  beforeAll(() => {
    HTMLDivElement.prototype.animate = vi.fn().mockImplementation((_, options) => {
      const animation = {
        onfinish: null,
        play: vi.fn(),
        pause: vi.fn(),
        cancel: vi.fn(),
        finish: vi.fn(() => {
          if (typeof animation.onfinish === 'function') {
            (animation.onfinish as () => void)();
          }
        }),
      };
      setTimeout(() => {
        if (typeof animation.onfinish === 'function') {
          (animation.onfinish as () => void)();
        }
      }, options.duration || 0);
      return animation;
    });
  });


  test('renders children when show is true', async () => {
    // Arrange
    render(<TextCSSTransition/>);
    const openToggleButton = screen.getByText(toggleButtonLabel);

    // Act
    await act(async () => {
      await userEvent.click(openToggleButton);
    });

    // Assert
    const contentRoot = screen.getByText(contentText);
    expect(contentRoot).toBeInTheDocument();

    // Act
    const closeToggleButton = screen.getByText(toggleButtonLabel);
    await act(async () => {
      await userEvent.click(closeToggleButton);
      await new Promise((resolve) => { setTimeout(resolve, testTimeout + 10) }); // 310ms 대기
    });

    // Assert
    const noContent = screen.queryByText(contentText);
    expect(noContent).toBeNull();
  });
});
