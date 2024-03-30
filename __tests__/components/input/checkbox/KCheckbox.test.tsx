// import { act } from 'react-dom/test-utils';
// import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import React, { useState } from 'react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import { KCheckbox, KCheckboxRefs } from '@/components';

const testId = 'k-checkbox';
const mockFn = jest.fn();

describe('KCheckbox', () => {

  beforeEach(() => {
    mockFn.mockClear();
  });

  const checkboxRef = React.createRef<KCheckboxRefs>();
  const TestCheckbox = (props: { defaultValue?: boolean, defaultCheck?: boolean,
    label?: string, color?: string, disabled?: boolean, width?: string }) => {

    const [checked, setChecked] = useState(props.defaultValue || false);
    return (
      <KCheckbox
          ref={checkboxRef}
          label={props.label ? props.label : 'kku'}
          value={checked}
          disabled={props.disabled}
          onChange={(e) => { setChecked(e); }}
          color={props.color}
          defaultCheck={props.defaultCheck}
          width={props.width}
      />
    );
  };

  describe('Props', () => {


    test('Style, value, className prop render test', () => {

      // Arrange
      const testStyle = { color: 'red', fontSize: '20px' };
      const testClass = 'test-class-name';
      const testIdValue = 'k-select-test-id';

      render(<KCheckbox
                label='kku'
                id={testIdValue}
                value={false}
                onChange={() => {}}
                className={testClass}
                style={testStyle}
      />);
      const root = screen.getByTestId(testId);

      // Assert
      expect(root).toHaveStyle(testStyle);
      expect(root).toHaveClass(testClass);
      expect(root).toHaveAttribute('id', testIdValue);
    });

    test('DefaultCheck prop render test', () => {

      // Arrange
      const defaultCheck = true;
      render(<TestCheckbox defaultCheck={defaultCheck} />);

      const root = screen.getByTestId(testId);
      const inputRoot = screen.queryAllByRole('checkbox')[1];

      // Assert
      expect(root).toHaveAttribute('aria-checked', 'true');
      expect(inputRoot).toHaveProperty('checked', true);
    });

    test('Color prop render test', () => {

      // Arrange
      const testColor = '#eee';
      render(<TestCheckbox color={testColor} />);

      const root = screen.getByRole('img');

      // Assert
      expect(root).toHaveStyle({ fill: testColor });
    });

    test('Disabled prop render test', () => {

      // Arrange
      const testDisabled = true;
      render(<TestCheckbox disabled={testDisabled} />);

      const root = screen.getByTestId(testId);
      const inputRoot = screen.queryAllByRole('checkbox')[1];

      // Assert
      expect(root).toHaveClass('k-checkbox--disabled');
      expect(inputRoot).toHaveProperty('disabled', true);
    });

    test('Width prop render test', () => {

      // Arrange
      const testWidth = '500px';
      render(<TestCheckbox width={testWidth} />);

      const root = screen.getByTestId(testId);

      // Assert
      expect(root).toHaveStyle({ width: testWidth });
    });


  });

  describe('Props', () => {

    test('Value change render test', async () => {

      // Arrange
      const user = userEvent.setup();
      const labelText = 'Hello World!';
      render(<TestCheckbox label={labelText} />);

      const root = screen.getByTestId(testId);
      const inputRoot = screen.queryAllByRole('checkbox')[1];

      // Act
      await act(async () => {
        await user.click(root.children[0]);
      });

      // Assert
      expect(root).toHaveAttribute('aria-checked', 'true');
      expect(inputRoot).toHaveProperty('checked', true);

      // Act
      await act(async () => {
        await user.click(root.children[0]);
      });

      // Arrange
      const renderedRoot = screen.getByTestId(testId);
      const renderedInputRoot = screen.queryAllByRole('checkbox')[1];

      // Assert
      expect(renderedRoot).toHaveAttribute('aria-checked', 'false');
      expect(renderedInputRoot).toHaveProperty('checked', false);
    });

    test('Ref event test', async () => {

      // Arrange
      const labelText = 'Hello World!';
      render(<TestCheckbox label={labelText} />);

      // Act
      await act(async () => { checkboxRef.current?.click(); });

      // Arrange
      const root = screen.getByTestId(testId);
      const inputRoot = screen.queryAllByRole('checkbox')[1];

      // Assert
      expect(root).toHaveAttribute('aria-checked', 'true');
      expect(inputRoot).toHaveProperty('checked', true);

      // Act
      await act(async () => { checkboxRef.current?.toggle(); });

      // Arrange
      const root2 = screen.getByTestId(testId);
      const inputRoot2 = screen.queryAllByRole('checkbox')[1];

      // Assert
      expect(root2).toHaveAttribute('aria-checked', 'false');
      expect(inputRoot2).toHaveProperty('checked', false);
    });

  });
});
