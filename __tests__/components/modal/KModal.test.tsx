import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act, useCallback, useState } from 'react';
import { vi, describe, test, beforeEach, expect } from 'vitest';
import { KModal } from '@/components';


const mockOnClick = vi.fn();
const rootTestId = 'k-modal-test-id';
const containerTestId = 'k-modal__container-test-id';
const closeButtonTestId = 'k-icon';
const overlayTestId = 'k-modal-overlay-test-id';
const testClass = 'k-modal-class';
const testStyle = { color: '#ababab' };
const titleText = 'this is Modal Title';
const contentText = 'this is Modal Content';
const footerText = 'this is footer';
const Footer = () => <div data-testid='k-modal-footer-test-id'>{footerText}</div>;


// eslint-disable-next-line react/prop-types
const TestModalComponent = ({ isOverlay = true, overlayOpacity, width }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = useCallback(() => setIsOpen(true), []);
  const onClose = useCallback(() => setIsOpen(false), []);

  return (
    <>
      <button type='button' onClick={onOpen}>Open</button>
      <KModal isOpen={isOpen} onClose={onClose} className={testClass} id={rootTestId}
              style={testStyle} isOverlay={isOverlay} overlayOpacity={overlayOpacity} title={titleText}
              content={contentText} footer={<Footer/>} width={width}/>
      {' '}

    </>
  );
};


describe('KModal', () => {

  beforeEach(() => {
    mockOnClick.mockClear();
  });

  describe('Props', () => {
    test('IsOpen, Style, className, id, prop render test', async () => {

      // Arrange
      const user = userEvent.setup();
      render(<TestModalComponent/>);
      const openButton = screen.getByText('Open');

      // Act
      await act(async () => {
        await user.click(openButton);
      });

      // Assert
      const rootModal = screen.getByTestId(rootTestId);
      const rootContainer = screen.getByTestId(containerTestId);
      expect(rootModal).toHaveStyle(testStyle);
      expect(rootContainer).toHaveClass(testClass);
      expect(rootModal).toHaveAttribute('id', rootTestId);
    });

    test('Title, content, footer prop render test', async () => {
      // Arrange
      const user = userEvent.setup();
      render(<TestModalComponent/>);
      const openButton = screen.getByText('Open');

      // Act
      await act(async () => {
        await user.click(openButton);
      });

      // Assert
      expect(screen.getByText(titleText)).toBeInTheDocument();
      expect(screen.getByText(contentText)).toBeInTheDocument();
      expect(screen.getByText(footerText)).toBeInTheDocument();
    });

    test('onClose event test', async () => {
      // Arrange
      const user = userEvent.setup();
      render(<TestModalComponent/>);
      const openButton = screen.getByText('Open');

      // Act
      await act(async () => {
        await user.click(openButton);
      });

      const closeButtonRoot = screen.getByTestId(closeButtonTestId);

      // Act
      await act(async () => {
        await user.click(closeButtonRoot);
      });

      // Assert
      await waitFor(() => expect(screen.queryByTestId(rootTestId)).not.toBeInTheDocument(), { timeout: 3100 });
    });

    test('IsOverlay, overlayOpacity prop render test', async () => {
      // Arrange
      const testIsOverlay = false;
      const testOverlayOpacity = 0.77;
      const user = userEvent.setup();
      render(<TestModalComponent isOverlay={testIsOverlay} overlayOpacity={testOverlayOpacity}/>);
      const openButton = screen.getByText('Open');

      // Act
      await act(async () => {
        await user.click(openButton);
      });

      // Assert
      const overlayRoot = screen.getByTestId(overlayTestId);
      expect(overlayRoot).toHaveClass('k-modal-wrapper__overlay--transparent');
      expect(overlayRoot).toHaveStyle({ opacity: testOverlayOpacity });
    });

    test('width prop render test', async () => {

      // Arrange
      const modalWidth = '777px';
      const user = userEvent.setup();
      render(<TestModalComponent width={modalWidth}/>);
      const openButton = screen.getByText('Open');

      // Act
      await act(async () => {
        await user.click(openButton);
      });

      // Assert
      const rootContainer = screen.getByTestId(containerTestId);
      expect(rootContainer).toHaveStyle({ width: modalWidth });
    });
  });
});
