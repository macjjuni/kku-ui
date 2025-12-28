import React, { useState, useCallback, CSSProperties } from 'react';
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

  const {
    value: controlledValue, defaultValue = 0, min = -10, max = Infinity, step = 1, className, style,
    size = 'md', align = 'center', onChange, inputWidth,
  } = props;

  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);
  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : uncontrolledValue;

  const updateValue = useCallback((newValue: number) => {
    const clampedValue = Math.min(Math.max(newValue, min), max);
    const stepString = step.toString();
    const precision = stepString.includes('.') ? stepString.split('.')[1].length : 0;
    const fixedValue = parseFloat(clampedValue.toFixed(precision));

    if (!isControlled) setUncontrolledValue(fixedValue);
    onChange?.(fixedValue);
  }, [min, max, isControlled, onChange, step]);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value, 10);
    if (!Number.isNaN(newValue)) {
      updateValue(newValue);
    }
  }, [updateValue]);

  return (
    <div className={cn('inline-flex items-stretch bg-background overflow-hidden', sizeMap[size].container, className)} style={style}>
      <KInput
        type="text"
        inputMode="decimal"
        value={value}
        onChange={handleInputChange}
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
        onClick={() => updateValue(value - step)}
        disabled={value <= min}
        className="flex items-center justify-center mx-[-1px] px-2 rounded-none hover:bg-muted border border-border transition-colors disabled:opacity-50 focus-ring"
      >
        <Minus size={sizeMap[size].icon}/>
      </button>
      <button
        type="button"
        className="flex items-center justify-center px-2 rounded-none rounded-tr-md rounded-br-md hover:bg-muted border border-border transition-colors disabled:opacity-50 focus-ring"
        onClick={() => updateValue(value + step)}
        disabled={value >= max}
      >
        <Plus size={sizeMap[size].icon}/>
      </button>
    </div>
  );
};

export { KNumberStepper };