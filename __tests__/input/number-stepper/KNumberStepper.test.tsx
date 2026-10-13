import { describe, expect, it, vi } from 'vitest';
import { StrictMode, useState } from 'react';
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { KNumberStepper } from '@/components/ui/input/number-stepper/KNumberStepper';
import { renderWithUser, expectClasses, expectDisabled } from '@/test-utils';

const ControlledStepper = ({
  initial = 0,
  ...props
}: { initial?: number } & Omit<React.ComponentProps<typeof KNumberStepper>, 'value' | 'onChange'>) => {
  const [val, setVal] = useState(initial);
  return <KNumberStepper {...props} value={val} onChange={setVal} />;
};

describe('KNumberStepper', () => {
  // region [Basic Rendering Tests]
  it('기본적으로 렌더링되어야 한다', () => {
    renderWithUser(<KNumberStepper />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getAllByRole('button')).toHaveLength(2);
  });

  it('기본값은 0이어야 한다', () => {
    renderWithUser(<KNumberStepper />);

    const input = screen.getByRole('textbox') as HTMLInputElement;
    expect(input.value).toBe('0');
  });

  it('비제어 모드의 초기값은 min/max 범위로 맞춰져야 한다', () => {
    const { unmount } = render(<KNumberStepper min={1} />);
    expect((screen.getByRole('textbox') as HTMLInputElement).value).toBe('1');
    unmount();

    render(<KNumberStepper min={-10} max={-5} />);
    expect((screen.getByRole('textbox') as HTMLInputElement).value).toBe('-5');
  });

  it('value prop으로 초기값을 설정할 수 있어야 한다', () => {
    renderWithUser(<KNumberStepper value={42} />);

    const input = screen.getByRole('textbox') as HTMLInputElement;
    expect(input.value).toBe('42');
  });
  // endregion

  // region [Plus/Minus Button Tests]
  it('+ 버튼 클릭 시 값이 1 증가해야 한다', async () => {
    const { user } = renderWithUser(<KNumberStepper />);

    const [, plusBtn] = screen.getAllByRole('button');
    await user.click(plusBtn);

    const input = screen.getByRole('textbox') as HTMLInputElement;
    expect(input.value).toBe('1');
  });

  it('- 버튼 클릭 시 값이 1 감소해야 한다', async () => {
    const { user } = renderWithUser(<ControlledStepper initial={5} />);

    const [minusBtn] = screen.getAllByRole('button');
    await user.click(minusBtn);

    await waitFor(() => {
      expect((screen.getByRole('textbox') as HTMLInputElement).value).toBe('4');
    });
  });

  it('+ 버튼 클릭 시 onChange가 호출되어야 한다', async () => {
    const handleChange = vi.fn();
    const { user } = renderWithUser(<KNumberStepper value={0} onChange={handleChange} />);

    const [, plusBtn] = screen.getAllByRole('button');
    await user.click(plusBtn);

    await waitFor(() => {
      expect(handleChange).toHaveBeenCalledWith(1);
    });
  });

  it('- 버튼 클릭 시 onChange가 호출되어야 한다', async () => {
    const handleChange = vi.fn();
    const { user } = renderWithUser(<KNumberStepper value={5} onChange={handleChange} />);

    const [minusBtn] = screen.getAllByRole('button');
    await user.click(minusBtn);

    await waitFor(() => {
      expect(handleChange).toHaveBeenCalledWith(4);
    });
  });
  // endregion

  // region [Min/Max Tests]
  it('max를 초과할 수 없어야 한다', async () => {
    const { user } = renderWithUser(<ControlledStepper initial={10} max={10} />);

    const [, plusBtn] = screen.getAllByRole('button');
    await user.click(plusBtn);

    const input = screen.getByRole('textbox') as HTMLInputElement;
    expect(input.value).toBe('10');
  });

  it('min 미만으로 내려갈 수 없어야 한다', async () => {
    const { user } = renderWithUser(<ControlledStepper initial={0} min={0} />);

    const [minusBtn] = screen.getAllByRole('button');
    await user.click(minusBtn);

    const input = screen.getByRole('textbox') as HTMLInputElement;
    expect(input.value).toBe('0');
  });

  it('값이 max에 도달하면 + 버튼이 비활성화되어야 한다', () => {
    renderWithUser(<KNumberStepper value={10} max={10} />);

    const [, plusBtn] = screen.getAllByRole('button');
    expect(plusBtn).toBeDisabled();
  });

  it('값이 min에 도달하면 - 버튼이 비활성화되어야 한다', () => {
    renderWithUser(<KNumberStepper value={0} min={0} />);

    const [minusBtn] = screen.getAllByRole('button');
    expect(minusBtn).toBeDisabled();
  });
  // endregion

  // region [Step Tests]
  it('step prop에 따라 값이 증가해야 한다', async () => {
    const { user } = renderWithUser(<ControlledStepper initial={0} step={5} />);

    const [, plusBtn] = screen.getAllByRole('button');
    await user.click(plusBtn);

    await waitFor(() => {
      expect((screen.getByRole('textbox') as HTMLInputElement).value).toBe('5');
    });
  });

  it('step prop에 따라 값이 감소해야 한다', async () => {
    const { user } = renderWithUser(<ControlledStepper initial={10} step={5} />);

    const [minusBtn] = screen.getAllByRole('button');
    await user.click(minusBtn);

    await waitFor(() => {
      expect((screen.getByRole('textbox') as HTMLInputElement).value).toBe('5');
    });
  });

  it('소수점 step이 올바른 정밀도로 처리되어야 한다', async () => {
    const { user } = renderWithUser(<ControlledStepper initial={0} step={0.1} />);

    const [, plusBtn] = screen.getAllByRole('button');
    await user.click(plusBtn);

    await waitFor(() => {
      expect((screen.getByRole('textbox') as HTMLInputElement).value).toBe('0.1');
    });
  });
  // endregion

  // region [Direct Input Tests]
  it('직접 숫자를 입력할 수 있어야 한다', async () => {
    const handleChange = vi.fn();
    const { user } = renderWithUser(<KNumberStepper value={0} onChange={handleChange} />);

    const input = screen.getByRole('textbox');
    await user.clear(input);
    await user.type(input, '7');

    await waitFor(() => {
      expect(handleChange).toHaveBeenCalledWith(7);
    });
  });

  it('숫자가 아닌 문자는 입력되지 않아야 한다', async () => {
    const { user } = renderWithUser(<KNumberStepper />);

    const input = screen.getByRole('textbox') as HTMLInputElement;
    await user.clear(input);
    await user.type(input, 'abc');

    expect(input.value).toBe('');
  });

  it('빈 입력 후 blur 시 min값으로 초기화되어야 한다', async () => {
    const { user } = renderWithUser(<KNumberStepper min={0} />);

    const input = screen.getByRole('textbox') as HTMLInputElement;
    await user.clear(input);
    await user.tab();

    expect(input.value).toBe('0');
  });

  it('blur 시 max를 초과한 값은 max로 클램핑되어야 한다', async () => {
    const { user } = renderWithUser(<KNumberStepper max={10} />);

    const input = screen.getByRole('textbox');
    await user.clear(input);
    await user.type(input, '99');
    await user.tab();

    const updatedInput = screen.getByRole('textbox') as HTMLInputElement;
    expect(Number(updatedInput.value)).toBe(10);
  });

  it('입력 중에는 min 미만이어도 클램핑하지 않아야 한다 (min=10에서 50 입력)', async () => {
    const handleChange = vi.fn();
    const Stepper = () => {
      const [val, setVal] = useState(20);
      return (
        <KNumberStepper
          value={val}
          min={10}
          onChange={(v) => {
            setVal(v);
            handleChange(v);
          }}
        />
      );
    };
    const { user } = renderWithUser(<Stepper />);

    const input = screen.getByRole('textbox') as HTMLInputElement;
    await user.clear(input);
    await user.type(input, '5');
    expect(input.value).toBe('5');

    await user.type(input, '0');
    expect(input.value).toBe('50');
    expect(handleChange).toHaveBeenLastCalledWith(50);
    expect(handleChange).not.toHaveBeenCalledWith(10);
  });

  it('min 미만 값을 입력하고 blur하면 min으로 클램핑되어야 한다', async () => {
    const { user } = renderWithUser(<ControlledStepper initial={20} min={10} />);

    const input = screen.getByRole('textbox') as HTMLInputElement;
    await user.clear(input);
    await user.type(input, '5');
    await user.tab();

    await waitFor(() => expect(input.value).toBe('10'));
  });

  it('제어 모드에서 입력값을 모두 지워도 blur 전까지 빈 값이 유지되어야 한다', async () => {
    const { user } = renderWithUser(<ControlledStepper initial={7} />);

    const input = screen.getByRole('textbox') as HTMLInputElement;
    await user.click(input);
    await user.keyboard('{End}{Backspace}');
    expect(input.value).toBe('');

    await user.type(input, '3');
    expect(input.value).toBe('3');
  });
  // endregion

  // region [Disabled State Tests]
  it('disabled 시 입력과 버튼 모두 비활성화되어야 한다', () => {
    renderWithUser(<KNumberStepper disabled />);

    const input = screen.getByRole('textbox');
    const buttons = screen.getAllByRole('button');

    expectDisabled(input as HTMLElement);
    buttons.forEach((btn) => {
      expect(btn).toBeDisabled();
    });
  });

  it('disabled 시 + 버튼 클릭해도 값이 변하지 않아야 한다', async () => {
    const { user } = renderWithUser(<KNumberStepper value={0} disabled />);

    const [, plusBtn] = screen.getAllByRole('button');
    await user.click(plusBtn);

    const input = screen.getByRole('textbox') as HTMLInputElement;
    expect(input.value).toBe('0');
  });

  it('disabled 시 opacity-50 클래스가 적용되어야 한다', () => {
    const { container } = renderWithUser(<KNumberStepper disabled />);

    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper).toHaveClass('opacity-50');
  });
  // endregion

  // region [Size Variants Tests]
  it('size="sm"일 때 컨테이너에 h-8 클래스가 적용되어야 한다', () => {
    const { container } = renderWithUser(<KNumberStepper size="sm" />);

    const wrapper = container.firstChild as HTMLElement;
    expectClasses(wrapper, ['h-8']);
  });

  it('size="md"일 때 컨테이너에 h-9 클래스가 적용되어야 한다 (기본값)', () => {
    const { container } = renderWithUser(<KNumberStepper size="md" />);

    const wrapper = container.firstChild as HTMLElement;
    expectClasses(wrapper, ['h-9']);
  });

  it('size="lg"일 때 컨테이너에 h-10 클래스가 적용되어야 한다', () => {
    const { container } = renderWithUser(<KNumberStepper size="lg" />);

    const wrapper = container.firstChild as HTMLElement;
    expectClasses(wrapper, ['h-10']);
  });
  // endregion

  // region [Callback Tests]
  it('onFocus가 input 포커스 시 호출되어야 한다', async () => {
    const handleFocus = vi.fn();
    const { user } = renderWithUser(<KNumberStepper onFocus={handleFocus} />);

    const input = screen.getByRole('textbox');
    await user.click(input);

    expect(handleFocus).toHaveBeenCalled();
  });

  it('onBlur가 input blur 시 호출되어야 한다', async () => {
    const handleBlur = vi.fn();
    const { user } = renderWithUser(<KNumberStepper onBlur={handleBlur} />);

    const input = screen.getByRole('textbox');
    await user.click(input);
    await user.tab();

    expect(handleBlur).toHaveBeenCalled();
  });
  // endregion

  // region [Style Tests]
  it('className이 컨테이너에 적용되어야 한다', () => {
    const { container } = renderWithUser(<KNumberStepper className="custom-class" />);

    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper).toHaveClass('custom-class');
  });

  it('style이 컨테이너에 적용되어야 한다', () => {
    const { container } = renderWithUser(<KNumberStepper style={{ opacity: 0.5 }} />);

    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper).toHaveStyle({ opacity: '0.5' });
  });
  // endregion

  // region [Stepper Regression Tests]
  it('StrictMode에서 + 버튼 1회 클릭 시 onChange가 1번만 호출되어야 한다', () => {
    const handleChange = vi.fn();
    render(
      <StrictMode>
        <KNumberStepper value={0} onChange={handleChange} />
      </StrictMode>,
    );

    const [, plusBtn] = screen.getAllByRole('button');
    fireEvent.mouseDown(plusBtn);
    fireEvent.mouseUp(plusBtn);

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(1);
  });

  it('버튼을 길게 누르면 값이 연속으로 증가하고 max에서 멈춰야 한다', () => {
    vi.useFakeTimers();
    const handleChange = vi.fn();
    const Stepper = () => {
      const [val, setVal] = useState(0);
      return (
        <KNumberStepper
          value={val}
          max={5}
          onChange={(v) => {
            setVal(v);
            handleChange(v);
          }}
        />
      );
    };
    render(<Stepper />);

    const [, plusBtn] = screen.getAllByRole('button');
    fireEvent.mouseDown(plusBtn);
    act(() => {
      vi.advanceTimersByTime(500 + 80 * 10);
    });
    fireEvent.mouseUp(plusBtn);
    vi.useRealTimers();

    expect((screen.getByRole('textbox') as HTMLInputElement).value).toBe('5');
    expect(handleChange.mock.calls.map(([v]) => v)).toEqual([1, 2, 3, 4, 5]);
  });
  // endregion
});
