import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createRef } from 'react';
import { KButton, KButtonRefs } from '@/components';

const mockOnClick = jest.fn();


jest.mock('@/common/util/color', () => ({
  tintColor: jest.fn(() => 'red'),
}));

describe('KButton', () => {

  const labelText = 'k-Button';

  beforeEach(() => {
    mockOnClick.mockClear();
  });

  test('style prop render test', () => {

    const testStyle = { color: 'red', fontSize: '20px' };
    render(<KButton style={testStyle}>{labelText}</KButton>);
    const root = screen.getByRole('button');

    expect(root).toHaveStyle(testStyle);
  });

  test('id prop render test', () => {

    const testId = 'k-button-test-id';
    render(<KButton id={testId}>{labelText}</KButton>);
    const root = screen.getByRole('button');

    expect(root).toHaveAttribute('id', testId);
  });

  test('className prop render test', () => {

    const testClassName = 'k-button-test-class-name';
    render(<KButton className={testClassName}>{labelText}</KButton>);
    const root = screen.getByRole('button');

    expect(root).toHaveClass(testClassName);
  });

  test('label prop render test', () => {

    render(<KButton label={labelText}/>);
    const root = screen.getByText(labelText);

    expect(root).toBeInTheDocument();
    expect(root).toHaveClass('k-button__content');
  });

  test('children prop render test', () => {

    render(<KButton><div data-testid='div-test-id'>labelText</div></KButton>);
    const childrenRoot = screen.getByTestId('div-test-id');

    expect(childrenRoot).toBeInTheDocument();
  });

  test('disabled prop render test', () => {

    render(<KButton disabled>{labelText}</KButton>);
    const root = screen.getByRole('button');

    expect(root).toBeDisabled();
  });

  test('KButton click test', async () => {

    const user = userEvent.setup();
    render(<KButton label={labelText} onClick={mockOnClick}/>);
    const root = screen.getByText(labelText);

    expect(mockOnClick).toHaveBeenCalledTimes(0);

    await user.click(root);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  test('KButton Ref click test', () => {

    const buttonRef = createRef<KButtonRefs>();
    render(<KButton ref={buttonRef} label={labelText} onClick={mockOnClick}/>);

    expect(mockOnClick).toHaveBeenCalledTimes(0);

    buttonRef.current?.click();

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  test('KButton Ref focus test', () => {

    const buttonRef = createRef<KButtonRefs>();
    render(<KButton ref={buttonRef} onClick={mockOnClick}>{labelText}</KButton>);

    const root = screen.getByRole('button');

    buttonRef.current?.focus();

    expect(root).toHaveFocus();
  });

});
