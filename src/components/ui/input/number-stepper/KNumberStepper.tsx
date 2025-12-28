import { CSSProperties, FocusEvent, useCallback, useEffect, useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';
import { KInput } from '@/components';

export interface KNumberStepperProps {
  value?: number;
  defaultValue?: number;
  min?: number;
  max?: number;
  step?: number;
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
    value: controlledValue, defaultValue = 0, min = -10, max = Infinity, step = 1, className, style,
    inputWidth, size = 'md', align = 'center', onChange, onFocus, onBlur,
  } = props;

  // 내부 상태를 string | number로 확장하여 소수점(.) 입력 상태를 보존
  const [uncontrolledValue, setUncontrolledValue] = useState<number | string>(defaultValue);
  const isControlled = controlledValue !== undefined;

  // 현재 렌더링에 사용할 값 결정
  const value = isControlled ? controlledValue : uncontrolledValue;
  // endregion


  // region [Events]
  const updateValue = useCallback((newValue: number | string) => {
    // 1. 문자열 입력 중(마침표, 마이너스 등)일 때는 보정 없이 상태만 업데이트
    if (typeof newValue === 'string') {
      if (!isControlled) setUncontrolledValue(newValue);
      return;
    }

    // 2. 실제 숫자 값에 대한 최소/최대값 제한
    const clampedValue = Math.min(Math.max(newValue, min), max);

    // 3. step과 현재 입력값의 소수점 자릿수 중 큰 쪽을 선택하여 정밀도 유지
    const stepString = step.toString();
    const stepPrecision = stepString.includes('.') ? stepString.split('.')[1].length : 0;

    const valueString = newValue.toString();
    const valuePrecision = valueString.includes('.') ? valueString.split('.')[1].length : 0;

    const precision = Math.max(stepPrecision, valuePrecision);
    const fixedValue = parseFloat(clampedValue.toFixed(precision));

    if (!isControlled) {
      setUncontrolledValue(fixedValue);
    }
    onChange?.(fixedValue);
  }, [min, max, isControlled, onChange, step]);


  const handleBlur = useCallback((e: FocusEvent<HTMLInputElement>) => {
    // 포커스가 나갈 때 '0.' 이나 '-' 처럼 불완전한 값을 숫자로 최종 보정
    const parsed = parseFloat(value.toString());
    if (!Number.isNaN(parsed)) {
      updateValue(parsed);
    } else {
      updateValue(Math.max(0, min));
    }
    onBlur?.(e);
  }, [value, min, updateValue, onBlur]);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    // 빈 값 처리 (백스페이스로 다 지웠을 때 0 또는 min으로 세팅)
    if (inputValue === '') {
      const fallback = Math.max(0, min);
      if (!isControlled) setUncontrolledValue(fallback);
      onChange?.(fallback);
      return;
    }

    // 정규식: 숫자, 마침표 1개, 마이너스 기호만 허용 (0..1 같은 입력 방지)
    const regExp = /^-?\d*\.?\d*$/;
    if (!regExp.test(inputValue)) return;

    // 마침표로 끝나거나 마이너스만 있는 '입력 중' 상태는 문자열 그대로 유지 (0. 이 0이 되지 않게)
    if (inputValue.endsWith('.') || inputValue === '-' || inputValue === '.') {
      if (!isControlled) setUncontrolledValue(inputValue);
      return;
    }

    const newValue = parseFloat(inputValue);
    if (!Number.isNaN(newValue)) {
      updateValue(newValue);
    }
  }, [min, isControlled, onChange, updateValue]);
  // endregion


  // region [Life Cycles]
  useEffect(() => {
    if (isControlled) {
      setUncontrolledValue(controlledValue);
    }
  }, [controlledValue, isControlled]);
  // endregion


  return (
    <div className={cn('inline-flex items-stretch bg-background overflow-hidden', sizeMap[size].container, className)} style={style}>
      <KInput
        type="text"
        inputMode="decimal"
        value={value}
        onChange={handleInputChange}
        onFocus={onFocus}
        onBlur={handleBlur}
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
        onClick={() => updateValue(Number(value) - step)}
        disabled={Number(value) <= min}
        className="flex items-center justify-center mx-[-1px] px-2 rounded-none hover:bg-muted border border-border transition-colors disabled:opacity-50 focus-ring"
      >
        <Minus size={sizeMap[size].icon}/>
      </button>
      <button
        type="button"
        className="flex items-center justify-center px-2 rounded-none rounded-tr-md rounded-br-md hover:bg-muted border border-border transition-colors disabled:opacity-50 focus-ring"
        onClick={() => updateValue(Number(value) + step)}
        disabled={Number(value) >= max}
      >
        <Plus size={sizeMap[size].icon}/>
      </button>
    </div>
  );
};

export { KNumberStepper };