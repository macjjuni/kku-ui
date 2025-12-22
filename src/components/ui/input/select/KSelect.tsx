import { forwardRef, useCallback, useId, useImperativeHandle, useMemo, useState, ComponentPropsWithoutRef } from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import { cva, type VariantProps } from 'class-variance-authority';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

// region [Styles]
const selectVariants = cva(
  'flex items-center justify-between rounded-md border border-input bg-background ' +
  'px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none ' +
  'focus-ring disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      size: {
        default: 'h-9 text-sm',
        sm: 'h-8 text-xs px-2',
        lg: 'h-10 text-base px-4',
      },
      width: {
        auto: 'w-auto',
        full: 'w-full',
        xs: 'max-w-[120px]',
        sm: 'max-w-[160px]',
        md: 'max-w-[200px]',
        lg: 'max-w-[240px]',
      },
    },
    defaultVariants: {
      size: 'default',
      width: 'md',
    },
  },
);

const itemVariants = cva(
  'relative flex w-full cursor-default select-none items-center rounded-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
  {
    variants: {
      size: {
        default: 'py-1.5 pl-2 pr-8 text-sm',
        sm: 'py-1 pl-1.5 pr-7 text-xs',
        lg: 'py-2 pl-3 pr-9 text-base',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  },
);
// endregion

// region [Types]
export type KSelectValue = string;

export type KSelectOption = {
  label: string;
  value: KSelectValue;
  disabled?: boolean;
};

export type KSelectRule<T = KSelectValue> = (value: T) => boolean | string | Promise<boolean | string>;

// Radix의 onValueChange를 생략하고 커스텀 onChange를 추가
export interface KSelectProps extends Omit<ComponentPropsWithoutRef<typeof SelectPrimitive.Root>, 'onValueChange'>, VariantProps<typeof selectVariants> {
  label?: string;
  options: KSelectOption[];
  helperText?: string;
  rules?: KSelectRule<KSelectValue>[];
  placeholder?: string;
  className?: string;
  id?: string;
  required?: boolean;
  /** 값이 변경될 때 호출되는 콜백 함수 */
  onChange?: (value: KSelectValue) => void;
}

export interface KSelectRefs {
  validate: () => Promise<boolean>;
  reset: () => void;
  value: KSelectValue | undefined;
}

export interface KSelectTriggerProps extends ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> {}
export interface KSelectContentProps extends ComponentPropsWithoutRef<typeof SelectPrimitive.Content> {}
export interface KSelectItemProps extends ComponentPropsWithoutRef<typeof SelectPrimitive.Item> {}
// endregion

const KSelect = forwardRef<KSelectRefs, KSelectProps>((props, ref) => {
  const {
    label, options, value, onChange, helperText, rules,
    placeholder, className, disabled, id, size, width = 'full', required, ...rest
  } = props;

  // region [Hooks]
  const generatedId = useId();
  const selectId = id || generatedId;
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useImperativeHandle(ref, () => ({
    validate,
    reset: () => setErrorMessage(null),
    value,
  }));
  // endregion

  // region [Styles]
  const containerClass = useMemo(() => (
    cn(
      'grid items-center gap-1.5',
      (width === 'full' || width === 'xs' || width === 'sm' || width === 'md') && 'w-full',
      width === 'auto' && 'w-fit',
      className,
    )), [width, className]);
  // endregion

  // region [Privates]
  const validate = useCallback(async () => {
    if (!rules) return true;

    const checkValue = value ?? '';
    // eslint-disable-next-line no-restricted-syntax
    for (const rule of rules) {
      const result = await rule(checkValue);
      if (typeof result === 'string') {
        setErrorMessage(result);
        return false;
      }
      if (result === false) {
        setErrorMessage('선택이 올바르지 않습니다.');
        return false;
      }
    }
    setErrorMessage(null);
    return true;
  }, [rules, value]);
  // endregion

  // region [Events]
  const handleValueChange = useCallback((val: KSelectValue) => {
    if (errorMessage) setErrorMessage(null);
    onChange?.(val); // 외부에서 전달받은 onChange 호출
  }, [errorMessage, onChange]);
  // endregion

  return (
    <div className={containerClass}>
      {label && (
        <label htmlFor={selectId} className={cn('font-medium leading-none cursor-pointer', size === 'sm' ? 'text-xs' : 'text-sm')}>
          {label}
          {required && <span className="text-danger ml-0.5">*</span>}
        </label>
      )}

      <SelectPrimitive.Root
        value={value}
        onValueChange={handleValueChange} // 내부적으로는 Radix의 prop에 연결
        disabled={disabled}
        {...rest}
      >
        <SelectPrimitive.Trigger
          id={selectId}
          className={cn(
            selectVariants({ size, width }),
            errorMessage && 'border-danger focus:ring-destructive',
            '[&>span]:line-clamp-1 [&>span]:flex-1 [&>span]:text-left',
          )}>
          <SelectPrimitive.Value placeholder={placeholder}/>
          <SelectPrimitive.Icon asChild>
            <ChevronDown className={cn('opacity-50', size === 'sm' ? 'h-3 w-3' : 'h-4 w-4')}/>
          </SelectPrimitive.Icon>
        </SelectPrimitive.Trigger>

        <SelectPrimitive.Portal>
          <SelectPrimitive.Content
            position="item-aligned"
            className={cn(
              'relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md',
              'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95',
              'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
              'data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2',
            )}>
            <SelectPrimitive.ScrollUpButton className="flex cursor-default items-center justify-center py-1">
              <ChevronUp className="h-4 w-4"/>
            </SelectPrimitive.ScrollUpButton>

            <SelectPrimitive.Viewport className="p-1">
              {options.map((opt) => (
                <SelectPrimitive.Item
                  key={opt.value}
                  value={opt.value}
                  disabled={opt.disabled}
                  className={cn(itemVariants({ size }))}
                >
                  <SelectPrimitive.ItemText>{opt.label}</SelectPrimitive.ItemText>
                  <span className={cn('absolute flex items-center justify-center', size === 'lg' ? 'right-3' : 'right-2')}>
                    <SelectPrimitive.ItemIndicator>
                      <Check className={cn(size === 'sm' ? 'h-3 w-3' : 'h-4 w-4')}/>
                    </SelectPrimitive.ItemIndicator>
                  </span>
                </SelectPrimitive.Item>
              ))}
            </SelectPrimitive.Viewport>

            <SelectPrimitive.ScrollDownButton className="flex cursor-default items-center justify-center py-1">
              <ChevronDown className="h-4 w-4"/>
            </SelectPrimitive.ScrollDownButton>
          </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
      </SelectPrimitive.Root>

      {errorMessage ? (
        <p className="text-xs font-medium text-danger">{errorMessage}</p>
      ) : (
        helperText && <p className="text-xs text-muted-foreground">{helperText}</p>
      )}
    </div>
  );
});

KSelect.displayName = 'KSelect';

export { KSelect };