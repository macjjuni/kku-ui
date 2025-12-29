import { ChangeEvent, CSSProperties, FocusEvent, useCallback, useEffect, useRef, useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';
import { KInput } from '@/components';

export interface KNumberStepperProps {
  value?: number;
  min?: number;
  max?: number;
  step?: number;
  precision?: number;
  disabled?: boolean;
  onChange?: (value: number) => void;
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  style?: CSSProperties;
  align?: 'left' | 'center' | 'right';
  inputWidth?: number;
}

const sizeMap = {
  sm: { container: 'h-8', input: 'w-12 h-8 text-xs px-1.5', icon: 14 },
  md: { container: 'h-9', input: 'w-14 h-9 text-sm px-1.5', icon: 16 },
  lg: { container: 'h-10', input: 'w-16 h-10 text-base px-2', icon: 18 },
};
const inputAlignMap = { left: 'text-left', center: 'text-center', right: 'text-right' };

const KNumberStepper = (props: KNumberStepperProps) => {
  // region [Hooks]
  const {
    value: controlledValue, min = 0, max = Infinity, step = 1, precision,
    disabled = false, className, style, inputWidth, size = 'md', align = 'center',
    onChange, onFocus, onBlur,
  } = props;

  const [internalValue, setInternalValue] = useState<string>(controlledValue !== undefined ? controlledValue.toString() : '0');

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  // 터치 이벤트 발생 여부를 체크하여 중복 실행 방지
  const isTouching = useRef(false);
  // endregion

  // region [Privates]
  const getDynamicPrecision = useCallback((val: number | string) => {
    if (precision !== undefined) return precision;
    const stepString = step.toString();
    const stepPrecision = stepString.includes('.') ? stepString.split('.')[1].length : 0;
    const valueString = val.toString();
    const valuePrecision = valueString.includes('.') ? valueString.split('.')[1].length : 0;
    return Math.max(stepPrecision, valuePrecision);
  }, [precision, step]);
  // endregion

  // region [Events]
  const updateValue = useCallback((nextVal: number | string) => {
    if (disabled) return;

    if (typeof nextVal === 'string' && (nextVal === '-' || nextVal === '.' || nextVal.endsWith('.'))) {
      setInternalValue(nextVal);
      return;
    }

    const numValue = typeof nextVal === 'string' ? parseFloat(nextVal) : nextVal;
    if (Number.isNaN(numValue)) return;

    const targetPrecision = getDynamicPrecision(nextVal);
    const clampedValue = Math.min(Math.max(numValue, min), max);
    const fixedString = clampedValue.toFixed(targetPrecision);

    setInternalValue(fixedString);
    onChange?.(parseFloat(fixedString));
  }, [min, max, getDynamicPrecision, onChange, disabled]);

  const handleStep = useCallback((direction: 'plus' | 'minus') => {
    if (disabled) return;
    setInternalValue((prev) => {
      const currentNum = parseFloat(prev) || 0;
      const nextNum = direction === 'plus' ? currentNum + step : currentNum - step;

      const targetPrecision = getDynamicPrecision(nextNum);
      const clampedValue = Math.min(Math.max(nextNum, min), max);
      const fixedString = clampedValue.toFixed(targetPrecision);

      onChange?.(parseFloat(fixedString));
      return fixedString;
    });
  }, [disabled, step, min, max, getDynamicPrecision, onChange]);

  const stopStepper = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (intervalRef.current) clearInterval(intervalRef.current);
    timerRef.current = null;
    intervalRef.current = null;
    // 인터벌 중지 시점에 터치 플래그 해제
    setTimeout(() => { isTouching.current = false; }, 100);
  }, []);

  const startStepper = useCallback((e: React.MouseEvent | React.TouchEvent, direction: 'plus' | 'minus') => {
    if (disabled) return;

    // 1. 마우스 이벤트인데 이미 터치 중이라면 무시 (Ghost Click 방지)
    if (e.type === 'mousedown' && isTouching.current) return;

    // 2. 터치 이벤트라면 플래그 세팅
    if (e.type === 'touchstart') {
      isTouching.current = true;
    }

    stopStepper();
    handleStep(direction);

    timerRef.current = setTimeout(() => {
      intervalRef.current = setInterval(() => {
        handleStep(direction);
      }, 80);
    }, 500);
  }, [disabled, handleStep, stopStepper]);

  const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    const inputValue = e.target.value;

    if (inputValue === '') {
      const fallback = Math.max(0, min);
      setInternalValue('');
      onChange?.(fallback);
      return;
    }

    if (!/^-?\d*\.?\d*$/.test(inputValue)) return;

    if (precision !== undefined && precision > 0) {
      const parts = inputValue.split('.');
      if (parts[1] && parts[1].length > precision) return;
    } else if (precision === 0 && inputValue.includes('.')) {
      return;
    }

    if (inputValue === '-' || inputValue === '.' || inputValue.endsWith('.')) {
      setInternalValue(inputValue);
    } else {
      updateValue(inputValue);
    }
  }, [min, precision, onChange, updateValue, disabled]);

  const handleBlur = useCallback((e: FocusEvent<HTMLInputElement>) => {
    if (disabled) return;
    const parsed = parseFloat(internalValue);
    if (!Number.isNaN(parsed)) {
      updateValue(parsed);
    } else {
      updateValue(Math.max(0, min));
    }
    onBlur?.(e);
  }, [internalValue, min, updateValue, onBlur, disabled]);
  // endregion

  // region [Life Cycles]
  useEffect(() => {
    if (controlledValue !== undefined) {
      const targetPrecision = getDynamicPrecision(controlledValue);
      setInternalValue(controlledValue.toFixed(targetPrecision));
    }
  }, [controlledValue, getDynamicPrecision]);

  useEffect(() => {
    return () => stopStepper();
  }, [stopStepper]);
  // endregion

  return (
    <div
      className={cn(
        'inline-flex items-stretch bg-background overflow-hidden transition-opacity select-none',
        sizeMap[size].container,
        disabled && 'opacity-50 pointer-events-none',
        className,
      )}
      style={style}
    >
      <KInput
        type="text"
        inputMode="decimal"
        value={internalValue}
        onChange={handleInputChange}
        onFocus={onFocus}
        onBlur={handleBlur}
        disabled={disabled}
        className={cn(
          'border border-border border-r-0 bg-transparent rounded-none rounded-tl-md rounded-bl-md text-center',
          'focus-ring focus-visible:border-r',
          sizeMap[size].input,
          inputAlignMap[align],
        )}
        style={{ width: inputWidth }}
      />
      <button
        type="button"
        onMouseDown={(e) => startStepper(e, 'minus')}
        onMouseUp={stopStepper}
        onMouseLeave={stopStepper}
        onTouchStart={(e) => startStepper(e, 'minus')}
        onTouchEnd={stopStepper}
        disabled={disabled || parseFloat(internalValue) <= min}
        className="flex items-center justify-center mx-[-1px] px-2 rounded-none hover:bg-muted border border-border transition-colors disabled:opacity-50 focus-ring"
      >
        <Minus size={sizeMap[size].icon}/>
      </button>
      <button
        type="button"
        onMouseDown={(e) => startStepper(e, 'plus')}
        onMouseUp={stopStepper}
        onMouseLeave={stopStepper}
        onTouchStart={(e) => startStepper(e, 'plus')}
        onTouchEnd={stopStepper}
        disabled={disabled || parseFloat(internalValue) >= max}
        className="flex items-center justify-center px-2 rounded-none rounded-tr-md rounded-br-md hover:bg-muted border border-border transition-colors disabled:opacity-50 focus-ring"
      >
        <Plus size={sizeMap[size].icon}/>
      </button>
    </div>
  );
};

export { KNumberStepper };