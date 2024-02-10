import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import { createRef } from 'react';
// import { act } from 'react-dom/test-utils';
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


  test('style, value prop render test', () => {

    const testValue = 'macjjuni';
    const testStyle = { color: 'red', fontSize: '20px' };

    render(<KTextField value={testValue} style={testStyle} />);
    const root = screen.getByTestId(testId);
    const rootInput = screen.getByRole('textbox');

    expect(root).toHaveStyle(testStyle);
    expect(rootInput).toHaveValue(testValue);
  });

});
