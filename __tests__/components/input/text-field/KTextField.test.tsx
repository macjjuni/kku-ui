import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import { createRef } from 'react';
// import { act } from 'react-dom/test-utils';
import { useState } from 'react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import { KTextField } from '@/components';

const mockOnClick = jest.fn();

// jest.mock('@/common/util/color', () => ({
//   tintColor: jest.fn(() => 'red'),
// }));

const testId = 'k-text-field';

describe('KTextField', () => {


  beforeEach(() => {
    mockOnClick.mockClear();
  });


  test('style, value, className prop render test', () => {

    const testValue = 'macjjuni';
    const testStyle = { color: 'red', fontSize: '20px' };
    const testClass = 'macjjuni-class-name';

    render(<KTextField value={testValue} className={testClass} style={testStyle} />);
    const root = screen.getByTestId(testId);
    const rootInput = screen.getByRole('textbox');

    expect(root).toHaveStyle(testStyle);
    expect(root).toHaveClass(testClass);
    expect(rootInput).toHaveValue(testValue);
  });

  test('MaxLength prop render test', async () => {

    const user = userEvent.setup();
    const testText = 'Hello World! 123';
    const testMaxLength = 10;
    const TestKTextField = () => {
      const [value, setValue] = useState('');
      return (<KTextField label='label' maxLength={testMaxLength} value={value} onChange={(v) => { setValue(v); }} />);
    };
    render(<TestKTextField />);
    const labelRoot = screen.getByTestId('k-text-field-label');

    // Act
    await act(async () => {
      await user.click(labelRoot);
      await user.keyboard(testText);
    });

    const typedInputRoot = screen.getByRole('textbox');

    expect(typedInputRoot).toHaveValue(testText.substring(0, testMaxLength));
  });

});
