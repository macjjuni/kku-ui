import { ChangeEvent, CSSProperties, FocusEvent, useCallback, useEffect, useRef, useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';
import { KInput } from '@/components';


export interface KNumberStepperProps {
  value?: number;
  min?: number;
  max?: number;
  step?: number;
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

// region [Constants]
const sizeMap = {
  sm: { container: 'h-8', input: 'w-12 h-8 text-xs px-1.5', icon: 14 },
  md: { container: 'h-9', input: 'w-14 h-9 text-sm px-1.5', icon: 16 },
  lg: { container: 'h-10', input: 'w-16 h-10 text-base px-2', icon: 18 },
};
const inputAlignMap = { left: 'text-left', center: 'text-center', right: 'text-right' };
// endregion


const KNumberStepper = (props: KNumberStepperProps) => {

  // region [Hooks]
  const {
    value: controlledValue, min = 0, max = Infinity, step = 1,
    disabled = false, className, style, inputWidth, size = 'md', align = 'center',
    onChange, onFocus, onBlur,
  } = props;

  const [internalValue, setInternalValue] = useState<string>(
    controlledValue !== undefined ? controlledValue.toString() : '0',
  );

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isTouching = useRef(false);
  // endregion


  // region [Privates]
  const getStepPrecision = useCallback(() => {
    const stepString = step.toString();
    return stepString.includes('.') ? stepString.split('.')[1].length : 0;
  }, [step]);

  const triggerChange = useCallback((nextValue: number) => {
    const precision = getStepPrecision();
    const clampedValue = Math.min(Math.max(nextValue, min), max);
    const fixedNumber = parseFloat(clampedValue.toFixed(precision));

    setInternalValue(fixedNumber.toString());

    if (onChange && fixedNumber !== controlledValue) {
      setTimeout(() => {
        onChange(fixedNumber);
      }, 0);
    }
  }, [controlledValue, getStepPrecision, max, min, onChange]);
  // endregion


  // region [Events]
  const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    const inputValue = e.target.value;

    if (inputValue === '') {
      setInternalValue('');
      return;
    }

    if (!/^-?\d*\.?\d*$/.test(inputValue)) return;

    if (inputValue === '-' || inputValue === '.' || inputValue.endsWith('.')) {
      setInternalValue(inputValue);
      return;
    }

    const numValue = parseFloat(inputValue);
    if (!Number.isNaN(numValue)) {
      triggerChange(numValue);
    }
  }, [disabled, triggerChange]);

  const handleBlur = useCallback((e: FocusEvent<HTMLInputElement>) => {
    if (disabled) return;
    const parsed = parseFloat(internalValue);
    const finalValue = Number.isNaN(parsed) ? min : parsed;
    triggerChange(finalValue);
    onBlur?.(e);
  }, [disabled, internalValue, min, triggerChange, onBlur]);

  const handleStep = useCallback((direction: 'plus' | 'minus') => {
    if (disabled) return;

    setInternalValue((prev) => {
      const currentNum = parseFloat(prev) || 0;
      const nextNum = direction === 'plus' ? currentNum + step : currentNum - step;
      const precision = getStepPrecision();
      const clampedValue = Math.min(Math.max(nextNum, min), max);
      const fixedNumber = parseFloat(clampedValue.toFixed(precision));

      // 비동기 틱으로 부모 업데이트 실행하여 렌더링 중 setState 에러 방지
      setTimeout(() => {
        if (onChange && fixedNumber !== controlledValue) {
          onChange(fixedNumber);
        }
      }, 0);

      return fixedNumber.toString();
    });
  }, [disabled, step, min, max, getStepPrecision, onChange, controlledValue]);

  const stopStepper = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (intervalRef.current) clearInterval(intervalRef.current);
    timerRef.current = null;
    intervalRef.current = null;
    setTimeout(() => {
      isTouching.current = false;
    }, 100);
  }, []);

  const startStepper = useCallback((e: React.MouseEvent | React.TouchEvent, direction: 'plus' | 'minus') => {
    if (disabled) return;
    if (e.type === 'mousedown' && isTouching.current) return;
    if (e.type === 'touchstart') isTouching.current = true;

    stopStepper();
    handleStep(direction);

    timerRef.current = setTimeout(() => {
      intervalRef.current = setInterval(() => {
        handleStep(direction);
      }, 80);
    }, 500);
  }, [disabled, handleStep, stopStepper]);
  // endregion


  // region [Life Cycles]
  useEffect(() => {
    if (controlledValue !== undefined) {
      const currentInternalNum = parseFloat(internalValue);
      if (controlledValue !== currentInternalNum) {
        setInternalValue(controlledValue.toString());
      }
    }
  }, [controlledValue, internalValue]);

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
      style={style}>
      <KInput
        type="text"
        inputMode="decimal"
        value={internalValue}
        onChange={handleInputChange}
        onFocus={onFocus}
        onBlur={handleBlur}
        disabled={disabled}
        className={cn(
          'border border-border border-r-0 bg-transparent rounded-none rounded-tl-md rounded-bl-md focus-ring focus-visible:border-r',
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
        disabled={disabled || (parseFloat(internalValue) || 0) <= min}
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
        disabled={disabled || (parseFloat(internalValue) || 0) >= max}
        className="flex items-center justify-center px-2 rounded-none rounded-tr-md rounded-br-md hover:bg-muted border border-border transition-colors disabled:opacity-50 focus-ring"
      >
        <Plus size={sizeMap[size].icon}/>
      </button>
    </div>
  );
};

export { KNumberStepper };