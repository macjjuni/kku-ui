import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createRef } from 'react';
import { describe, test, expect, vi, beforeEach } from 'vitest';
import { KButton, KButtonRefs } from '@/components';

const mockOnClick = vi.fn();

vi.mock('@/common/util/color', () => ({
  tintColor: vi.fn(() => 'red'),
}));

describe('KButton', () => {
  const labelText = 'k-Button';

  beforeEach(() => {
    mockOnClick.mockClear();
  });

  test('style prop render test', () => {
    // Arrange
    const testStyle = { color: '#aaa', fontSize: '20px' };

    // Act
    render(<KButton style={testStyle}>{labelText}</KButton>);
    const root = screen.getByRole('button');

    // Assert
    expect(root).toHaveStyle(testStyle);
  });

  test('id prop render test', () => {
    // Arrange
    const testId = 'k-button-test-id';

    // Act
    render(<KButton id={testId}>{labelText}</KButton>);
    const root = screen.getByRole('button');

    // Assert
    expect(root).toHaveAttribute('id', testId);
  });

  test('className prop render test', () => {
    // Arrange
    const testClassName = 'k-button-test-class-name';

    // Act
    render(<KButton className={testClassName}>{labelText}</KButton>);
    const root = screen.getByRole('button');

    // Assert
    expect(root).toHaveClass(testClassName);
  });

  test('label prop render test', () => {
    // Act
    render(<KButton label={labelText}/>);
    const root = screen.getByText(labelText);

    // Assert
    expect(root).toBeInTheDocument();
    expect(root).toHaveClass('k-button__content');
  });

  test('children prop render test', () => {
    // Act
    render(
      <KButton>
        <div data-testid='div-test-id'>labelText</div>
      </KButton>,
    );
    const childrenRoot = screen.getByTestId('div-test-id');

    // Assert
    expect(childrenRoot).toBeInTheDocument();
  });

  test('disabled prop render test', () => {
    // Act
    render(<KButton disabled>{labelText}</KButton>);
    const root = screen.getByRole('button');

    // Assert
    expect(root).toBeDisabled();
  });

  test('KButton click test', async () => {
    // Arrange
    const user = userEvent.setup();
    render(<KButton label={labelText} onClick={mockOnClick}/>);
    const root = screen.getByText(labelText);

    // Assert (before click)
    expect(mockOnClick).toHaveBeenCalledTimes(0);

    // Act
    await user.click(root);

    // Assert (after click)
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  test('KButton Ref click test', () => {
    // Arrange
    const buttonRef = createRef<KButtonRefs>();
    render(<KButton ref={buttonRef} label={labelText} onClick={mockOnClick}/>);

    // Assert (before click)
    expect(mockOnClick).toHaveBeenCalledTimes(0);

    // Act
    buttonRef.current?.click();

    // Assert (after click)
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  test('KButton Ref focus test', () => {
    // Arrange
    const buttonRef = createRef<KButtonRefs>();
    render(<KButton ref={buttonRef} onClick={mockOnClick}>{labelText}</KButton>);

    const root = screen.getByRole('button');

    // Act
    buttonRef.current?.focus();

    // Assert
    expect(root).toHaveFocus();
  });
});
