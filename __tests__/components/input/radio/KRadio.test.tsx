import { render, screen } from '@testing-library/react';
import React, { useState, act } from 'react';
import userEvent from '@testing-library/user-event';
import { KRadio, KRadioRefs } from '@/components';

const testId = 'k-radio';
const mockFn = jest.fn();

describe('KRadio', () => {

  beforeEach(() => {
    mockFn.mockClear();
  });

  const radioRef = React.createRef<KRadioRefs>();
  const TestRadio = (props: { defaultValue?: boolean, defaultCheck?: boolean,
    label?: string, color?: string, disabled?: boolean, width?: string }) => {

    const [checked, setChecked] = useState(props.defaultValue ?? false);
    return (
      <KRadio
          ref={radioRef}
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

      render(<KRadio
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
      render(<TestRadio defaultCheck={defaultCheck} />);

      const root = screen.getByTestId(testId);
      const inputRoot = screen.queryAllByRole('radio')[1];

      // Assert
      expect(root).toHaveAttribute('aria-checked', 'true');
      expect(inputRoot).toHaveProperty('checked', true);
    });

    test('Color prop render test', () => {

      // Arrange
      const testColor = '#eee';
      render(<TestRadio color={testColor} />);

      const root = screen.getByRole('img');

      // Assert
      expect(root).toHaveStyle({ fill: testColor });
    });

    test('Disabled prop render test', () => {

      // Arrange
      const testDisabled = true;
      render(<TestRadio disabled={testDisabled} />);

      const root = screen.getByTestId(testId);
      const inputRoot = screen.getAllByRole('radio')[1];

      // Assert
      expect(root).toHaveClass('k-radio--disabled');
      expect(inputRoot).toHaveProperty('disabled', true);
    });

    test('Width prop render test', () => {

      // Arrange
      const testWidth = '500px';
      render(<TestRadio width={testWidth} />);

      const root = screen.getByTestId(testId);

      // Assert
      expect(root).toHaveStyle({ width: testWidth });
    });


  });

  describe('Event', () => {

    test('Value change render test', async () => {

      // Arrange
      const user = userEvent.setup();
      const labelText = 'Hello World!';
      render(<TestRadio label={labelText} />);

      const root = screen.getByTestId(testId);
      const inputRoot = screen.queryAllByRole('radio')[1];

      // Act
      await act(async () => {
        await user.click(root.children[0]);
      });

      // Assert
      expect(root).toHaveAttribute('aria-checked', 'true');
      expect(inputRoot).toHaveProperty('checked', true);
    });

    test('Ref event test', async () => {

      // Arrange
      render(<TestRadio label='label' />);

      // Act
      await act(async () => { radioRef.current?.click(); });

      // Arrange
      const root = screen.getByTestId(testId);
      const inputRoot = screen.queryAllByRole('radio')[1];

      // Assert
      expect(root).toHaveAttribute('aria-checked', 'true');
      expect(inputRoot).toHaveProperty('checked', true);
    });

  });
});
