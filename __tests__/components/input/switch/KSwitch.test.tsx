import { render, screen } from '@testing-library/react';
import React, { useState } from 'react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import { KSwitch, KSwitchProps, KSwitchRefs } from '@/components';

const testId = 'k-switch';
const mockFn = jest.fn();

// 필수인 value, onChange 제거한 타입
type ExceptRequiredKSwitchProps = Omit<Omit<KSwitchProps, 'value'>, 'onChange'>;

interface TestKSwitchProps extends ExceptRequiredKSwitchProps {
  defaultValue?: boolean
}

describe('KCheckbox', () => {

  beforeEach(() => {
    mockFn.mockClear();
  });

  const switchRef = React.createRef<KSwitchRefs>();
  const TestSwitch = (props: TestKSwitchProps) => {
    const [value, setValue] = useState(props.defaultValue || false);
    return (<KSwitch {...props} ref={switchRef} value={value} onChange={(val) => { setValue(val); }} />);
  };

  describe('Props', () => {


    test('Style, value, className prop render test', () => {

      // Arrange
      const testStyle = { color: 'red', fontSize: '20px' };
      const testClass = 'test-class-name';
      const testIdValue = 'k-select-test-id';

      render(<TestSwitch style={testStyle} className={testClass} id={testIdValue} />);
      const root = screen.getByTestId(testId);

      // Assert
      expect(root).toHaveStyle(testStyle);
      expect(root).toHaveClass(testClass);
      expect(root).toHaveAttribute('id', testIdValue);
    });


    test('DefaultValue prop render test', () => {

      // Arrange
      const defaultValue = true;
      render(<TestSwitch defaultValue={defaultValue} />);

      const root = screen.getByTestId(testId);

      // Assert
      expect(root).toHaveAttribute('aria-checked', 'true');
      expect(root).toHaveClass('k-switch--on');
    });


    test('Color and toggleColor prop render test', () => {

      // Arrange
      const testBgColor = '#eee';
      const testToggleColor = 'red';

      render(<TestSwitch toggleColor={testToggleColor} bgColor={testBgColor} />);

      const root = screen.getByTestId(testId);
      const toggleRoot = screen.getByTestId('k-switch-toggle');

      // Assert
      expect(root).toHaveStyle({ background: testBgColor });
      expect(toggleRoot).toHaveStyle({ background: testToggleColor });
    });


    test('Disabled prop render test', () => {

      // Arrange
      const testDisabled = true;
      render(<TestSwitch disabled={testDisabled} />);

      const root = screen.getByTestId(testId);

      // Assert
      expect(root).toHaveClass('k-switch--disabled');
      expect(root).toHaveProperty('disabled', true);
    });

  });

  describe('Props', () => {


    test('Value change render test', async () => {

      // Arrange
      const user = userEvent.setup();
      render(<TestSwitch />);

      const root = screen.getByTestId(testId);

      // Act
      await act(async () => {
        await user.click(root);
      });

      // Assert
      expect(root).toHaveAttribute('aria-checked', 'true');
      expect(root).toHaveClass('k-switch--on');

      // Act
      await act(async () => {
        await user.click(root);
      });

      // Arrange
      const renderedRoot = screen.getByTestId(testId);

      // Assert
      expect(renderedRoot).toHaveAttribute('aria-checked', 'false');
      expect(root).toHaveClass('k-switch--off');
    });


    test('Ref event test', async () => {


      // Arrange
      render(<TestSwitch defaultValue />);

      // Arrange
      const root = screen.getByTestId(testId);

      // Assert
      expect(root).toHaveAttribute('aria-checked', 'true');
      expect(root).toHaveClass('k-switch--on');

      // Act
      await act(async () => { switchRef.current?.toggle(); });

      // Arrange
      const renderedOnRoot = screen.getByTestId(testId);

      // Assert
      expect(renderedOnRoot).toHaveAttribute('aria-checked', 'false');
      expect(renderedOnRoot).toHaveClass('k-switch--off');

      // Act
      await act(async () => { switchRef.current?.toggle(); });

      // Arrange
      const renderedOffRoot = screen.getByTestId(testId);

      // Assert
      expect(renderedOffRoot).toHaveAttribute('aria-checked', 'true');
      expect(renderedOffRoot).toHaveClass('k-switch--on');
    });

  });
});
