import { render, screen } from '@testing-library/react';
import { useState, act } from 'react';
import userEvent from '@testing-library/user-event';
import { KTextField } from '@/components';


const testId = 'k-text-field';
const mockOnClick = jest.fn();


describe('KTextField', () => {

  beforeEach(() => {
    mockOnClick.mockClear();
  });


  describe('Prop test', () => {

    test('style, value, className prop render test', () => {

      const testValue = 'macjjuni';
      const testStyle = { color: 'red', fontSize: '20px' };
      const testClass = 'macjjuni-class-name';

      render(<KTextField value={testValue} className={testClass} style={testStyle} />);
      const root = screen.getByTestId(testId);
      const inputRoot = screen.getByRole('textbox');

      expect(root).toHaveStyle(testStyle);
      expect(root).toHaveClass(testClass);
      expect(inputRoot).toHaveValue(testValue);
    });

    test('Disabled prop render test', () => {

      render(<KTextField value='' disabled />);
      const inputRoot = screen.getByRole('textbox') as HTMLInputElement;
      const root = screen.getByTestId(testId);

      expect(root).toHaveClass('k-text-field--disabled');
      expect(inputRoot.disabled).toBeTruthy();

    });

    test('placeholder, clearable prop render test', () => {

      const testPlaceholder = 'test placeholder';
      render(<KTextField value='test' label='test' placeholder={testPlaceholder} clearable />);

      const inputRoot = screen.getByRole('textbox');
      const clearIcon = screen.getByRole('button');

      expect(inputRoot).toHaveAttribute('placeholder', testPlaceholder);
      expect(clearIcon).toBeInTheDocument();
    });

    test('Password prop render test', async () => {

      // Arrange
      const user = userEvent.setup();
      const passwordText = 'thisISpassword!';
      const TestTextField = () => {
        const [value, setValue] = useState<string>('');
        return (<KTextField value={value} onChange={(e) => { setValue(e); }} password />);
      };
      render(<TestTextField />);

      const inputRoot = screen.getByTestId('k-text-field-input');
      const visibilityIcon = screen.getByRole('button');

      // Act
      await act(async () => {
        await user.click(inputRoot);
        await user.keyboard(passwordText);
      });

      // Assert
      expect(inputRoot).toHaveAttribute('type', 'password');

      // Act
      await act(async () => {
        await user.click(visibilityIcon);
      });

      // Assert
      expect(inputRoot).toHaveAttribute('type', 'input');
      expect(inputRoot).toHaveValue(passwordText);

    });

    test('MaxLength prop render test', async () => {

      // Arrange
      const user = userEvent.setup();
      const testText = 'Hello World! 123';
      const testMaxLength = 10;
      const TestKTextField = () => {
        const [value, setValue] = useState('');
        return (
          <KTextField
                        label='label'
                        maxLength={testMaxLength}
                        value={value}
                        onChange={(v) => { setValue(v); }}
          />
        );
      };
      render(<TestKTextField />);
      const labelRoot = screen.getByTestId('k-text-field-label');

      // Act
      await act(async () => {
        await user.click(labelRoot);
        await user.keyboard(testText);
      });

      // Arrange
      const typedInputRoot = screen.getByRole('textbox');

      // Assert
      expect(typedInputRoot).toHaveValue(testText.substring(0, testMaxLength));
    });

    test('RightAction prop render test', async () => {

      // Arrange
      const onMockChange = jest.fn();
      const rightActionTestId = 'test-right-action-id';
      const RightAction = () => (<div data-testid={rightActionTestId}>Right Action Text</div>);
      render(<KTextField label='label' value='' onChange={onMockChange} rightAction={<RightAction />} />);
      const rightActionRoot = screen.getByTestId(rightActionTestId);

      // Assert
      expect(rightActionRoot).toBeInTheDocument();
    });

    test('Width prop render test', async () => {

      // Arrange
      const testWidth = '321px';
      render(<KTextField label='label' value='' width={testWidth} />);
      const inputRoot = screen.getByTestId(testId);

      // Assert
      expect(inputRoot).toHaveStyle({ width: testWidth });
    });

    test('search prop render and event test', async () => {

      // Arrange
      const user = userEvent.setup();
      render(<KTextField label='label' value='' search onSearch={mockOnClick} />);
      const searchIconRoot = screen.getByTestId('k-icon');

      // Act
      await act(async () => {
        await user.click(searchIconRoot);
      });

      // Assert
      expect(searchIconRoot).toHaveClass('k-text-field__search-icon');
      expect(mockOnClick).toHaveBeenCalledTimes(1);
    });

  });

});
