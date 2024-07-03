import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act, useCallback, useState } from 'react';
import { KModal } from '@/components';

const mockOnClick = jest.fn();

const rootTestId = 'k-modal-test-id';
const containerTestId = 'k-modal__container-test-id';
const closeButtonTestId = 'k-modal__close-button-test-id';
const overlayTestId = 'k-modal-overlay-test-id';
const testClass = 'k-modal-class';
const testStyle = { color: 'red' };
const titleText = 'this is Modal Title';
const contentText = 'this is Modal Content';
const footerText = 'this is footer';
const Footer = () => <div data-testid='k-modal-footer-test-id'>{footerText}</div>;


const TestModalComponent = ({ isOverlay = true, overlayOpacity }: { isOverlay?: boolean, overlayOpacity?: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = useCallback(() => { setIsOpen(true); }, []);
  const onClose = useCallback(() => { setIsOpen(false); }, []);

  return (
    <>
      <button type='button' onClick={onOpen}>Open</button>
      <KModal
        isOpen={isOpen}
        onClose={onClose}
        className={testClass}
        id={rootTestId}
        style={testStyle}
        isOverlay={isOverlay}
        overlayOpacity={overlayOpacity}
        title={titleText}
        content={contentText}
        footer={<Footer />}
      />
    </>
  );
};

describe('KModal', () => {
  // const TestChildren = () => (<div data-testid={testChildrenId} />);

  beforeEach(() => { mockOnClick.mockClear(); });


  describe('Props ', () => {

    test('IsOpen, Style, className, id, prop render test', async () => {

      // Arrange
      const user = userEvent.setup();

      render(<TestModalComponent />);
      const openButton = screen.getByText('Open');

      // Act
      await act(async () => { await user.click(openButton); });

      // Arrange
      const rootModal = screen.getByTestId(rootTestId);
      const rootContainer = screen.getByTestId(containerTestId);

      // Assert
      expect(rootContainer).toHaveStyle(testStyle);
      expect(rootContainer).toHaveClass(testClass);
      expect(rootModal).toHaveAttribute('id', rootTestId);
    });

    test('Title, content, footer prop render test', async () => {

      // Arrange
      const user = userEvent.setup();

      render(<TestModalComponent />);
      const openButton = screen.getByText('Open');

      // Act
      await act(async () => { await user.click(openButton); });

      // Arrange
      const rootTitle = screen.getByText(titleText);
      const rootContent = screen.getByText(contentText);
      const rootFooter = screen.getByText(footerText);

      // Assert
      expect(rootTitle).toBeInTheDocument();
      expect(rootContent).toBeInTheDocument();
      expect(rootFooter).toBeInTheDocument();
    });

    test('onClose event test', async () => {

      // Arrange
      const user = userEvent.setup();

      render(<TestModalComponent />);
      const openButton = screen.getByText('Open');

      // Act
      await act(async () => { await user.click(openButton); });

      // Arrange
      const closeButtonRoot = screen.getByTestId(closeButtonTestId);

      // Act
      await act(async () => { await user.click(closeButtonRoot); });

      // wait 3s
      await waitFor(() => expect(screen.queryByTestId(rootTestId)).not.toBeInTheDocument(), { timeout: 3100 });

      // Arrange
      const root = screen.queryByTestId(rootTestId);

      // Assert
      expect(root).not.toBeInTheDocument();
    });

    test('IsOverlay, overlayOpacity prop render test', async () => {

      // Arrange
      const testIsOverlay = false;
      const testOverlayOpacity = 0.77;
      const user = userEvent.setup();

      render(<TestModalComponent isOverlay={testIsOverlay} overlayOpacity={testOverlayOpacity} />);
      const openButton = screen.getByText('Open');

      // Act
      await act(async () => { await user.click(openButton); });

      // Arrange
      const overlayRoot = screen.getByTestId(overlayTestId);

      // Assert
      expect(overlayRoot).toHaveClass('k-modal-wrapper__overlay--transparent');
      expect(overlayRoot).toHaveStyle({ opacity: testOverlayOpacity });
    });
  });


});
