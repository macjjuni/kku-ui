import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createRef } from 'react';
import { act } from 'react-dom/test-utils';
import { KButton, KButtonRefs } from '@/components';

const mockOnClick = jest.fn();

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

    render(<KButton label={labelText} />);
    const root = screen.getByText(labelText);

    expect(root).toBeInTheDocument();
    // label prop 을 사용하면 span 태그에 들어감
    expect(root).toHaveClass('k-button__content');
  });

  test('children prop render test', () => {

    render(<KButton>{labelText}</KButton>);
    const root = screen.getByRole('button');

    expect(root).toBeInTheDocument();
    expect(root).toHaveClass('k-button');
  });

  test('disabled prop render test', () => {

    render(<KButton disabled>{labelText}</KButton>);
    const root = screen.getByRole('button');

    expect(root).toBeDisabled();
  });

  test('KButton click test', async () => {

    const user = userEvent.setup();
    render(<KButton label={labelText} onClick={mockOnClick} />);
    const root = screen.getByText(labelText);

    expect(mockOnClick).toBeCalledTimes(0);

    await user.click(root);

    expect(mockOnClick).toBeCalledTimes(1);
  });

  test('KButton Ref click test', () => {

    const buttonRef = createRef<KButtonRefs>();
    render(<KButton ref={buttonRef} label={labelText} onClick={mockOnClick} />);

    expect(mockOnClick).toBeCalledTimes(0);

    buttonRef.current?.click();

    expect(mockOnClick).toBeCalledTimes(1);
  });

  test('KButton Ref focus test', () => {

    const buttonRef = createRef<KButtonRefs>();
    render(<KButton ref={buttonRef} onClick={mockOnClick}>{labelText}</KButton>);

    const root = screen.getByRole('button');

    buttonRef.current?.focus();

    expect(root).toHaveFocus();
  });

  test('KButton aria-busy attribute test', async () => {

    const buttonRef = createRef<KButtonRefs>();
    render(<KButton ref={buttonRef} onClick={mockOnClick}>{labelText}</KButton>);

    act(() => { buttonRef.current?.startLoading(); });

    const busyRoot = screen.getByRole('button');
    expect(busyRoot).toHaveAttribute('aria-busy', 'true');

    act(() => { buttonRef.current?.stopLoading(); });

    const noBusyRoot = screen.getByRole('button');
    expect(noBusyRoot).toHaveAttribute('aria-busy', 'false');
  });

  test('KButton Ref startLoading and stopLoading test', async () => {

    const buttonRef = createRef<KButtonRefs>();
    render(<KButton ref={buttonRef} onClick={mockOnClick}>{labelText}</KButton>);
    const root = screen.getByRole('button');

    act(() => { buttonRef.current?.startLoading(); });

    expect(root).toHaveClass('k-button--loading');

    act(() => { buttonRef.current?.stopLoading(); });

    expect(root).not.toHaveClass('k-button--loading');
  });
});
