import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { CSSProperties, ReactNode } from 'react';
import { KDropHolder } from '@/components';

const testId = 'k-drop-holder';
const mockFn = jest.fn();

describe('KDropHolder', () => {

  beforeEach(() => {
    mockFn.mockClear();
  });

  const childrenText = 'test-children';
  const contentText = 'test-content';

  const TestChildren = () => (<div>{childrenText}</div>);
  const TestContent = () => (<div>{contentText}</div>);

  const TestDropHolder = ({ id, style, className, content }:
  { id?: string, style?: CSSProperties, className?: string, content?: ReactNode }) => (
    <KDropHolder id={id} style={style} className={className} content={content}>
      <TestChildren />
    </KDropHolder>
  );

  describe('Props', () => {

    test('Style, value, className, id prop render test', () => {

      // Arrange
      const testStyle = { color: 'red', fontSize: '20px' };
      const testClass = 'test-class-name';
      const testIdValue = 'k-select-test-id';

      render(<TestDropHolder id={testIdValue} className={testClass} style={testStyle} content={<TestContent />} />);
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
      render(<TestDropHolder content={<TestContent />} />);

      const root = screen.getByText(childrenText);

      // Act
      await act(async () => { await user.click(root); });

      // Arrange
      const contentRoot = screen.getByText(contentText);

      // Assert
      expect(contentRoot).toBeInTheDocument();
    });


  });

});
