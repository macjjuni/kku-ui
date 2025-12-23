import React, { useState, useCallback, CSSProperties } from 'react';
import { Minus, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

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
}

const sizeMap = {
  sm: { container: 'h-8', input: 'w-10 text-xs', icon: 14 },
  md: { container: 'h-9', input: 'w-12 text-sm', icon: 16 },
  lg: { container: 'h-10', input: 'w-14 text-base', icon: 18 },
};


const KNumberStepper = ({
  value: controlledValue, defaultValue = 0, min = 0, max = Infinity, step = 1, onChange, className, size = 'md', style,
}: KNumberStepperProps) => {

  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);
  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : uncontrolledValue;

  const updateValue = useCallback((newValue: number) => {
    const clampedValue = Math.min(Math.max(newValue, min), max);
    if (!isControlled) setUncontrolledValue(clampedValue);
    onChange?.(clampedValue);
  }, [min, max, isControlled, onChange]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value, 10);
    if (!Number.isNaN(newValue)) updateValue(newValue);
  };

  return (
    <div className={cn(
      'inline-flex items-stretch border rounded-md bg-background overflow-hidden',
      sizeMap[size].container,
      className,
    )}
         style={style}>
      {/* Input */}
      <input
        type="text"
        value={value}
        onChange={handleInputChange}
        className={cn(
          'border-none bg-transparent text-center focus:outline-none focus:ring-0',
          sizeMap[size].input,
        )}
      />

      {/* Buttons Container */}
      <div className="flex border-l">
        <button
          type="button"
          onClick={() => updateValue(value - step)}
          disabled={value <= min}
          className="flex items-center justify-center px-2 hover:bg-muted border-r transition-colors disabled:opacity-50"
        >
          <Minus size={sizeMap[size].icon}/>
        </button>
        <button
          type="button"
          onClick={() => updateValue(value + step)}
          disabled={value >= max}
          className="flex items-center justify-center px-2 hover:bg-muted transition-colors disabled:opacity-50"
        >
          <Plus size={sizeMap[size].icon}/>
        </button>
      </div>
    </div>
  );
};

export { KNumberStepper };