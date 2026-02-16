import { ComponentPropsWithoutRef, forwardRef, useCallback, useImperativeHandle, useMemo } from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import { cva, type VariantProps } from 'class-variance-authority';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useStableId } from '@/common/hooks';

// region [Styles]
const selectVariants = cva(
  'flex items-center justify-between rounded-md border border-input bg-background ' +
  'px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none ' +
  'focus-ring disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      size: {
        sm: 'h-8 text-xs px-2',
        md: 'h-9 text-sm',
        lg: 'h-10 text-base px-4',
      },
      width: {
        auto: 'w-auto',
        full: 'w-full',
        xs: 'w-full max-w-[120px] min-w-[120px]',
        sm: 'w-full max-w-[160px] min-w-[160px]',
        md: 'w-full max-w-[200px] min-w-[200px]',
        lg: 'w-full max-w-[240px] min-w-[240px]',
      },
    },
    defaultVariants: {
      size: 'md',
      width: 'md',
    },
  },
);

const itemVariants = cva(
  'relative flex w-full cursor-default select-none items-center rounded-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
  {
    variants: {
      size: {
        sm: 'py-1.5 pl-2 pr-8 text-xs',
        md: 'py-1.5 pl-2 pr-8 text-sm',
        lg: 'py-2 pl-3 pr-9 text-base',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);
// endregion

// region [Types]
export type KSelectValue = string;
export type KSelectOption = { label: string; value: KSelectValue; disabled?: boolean };

export interface KSelectProps
  extends Omit<ComponentPropsWithoutRef<typeof SelectPrimitive.Root>, 'onValueChange'>,
    Omit<VariantProps<typeof selectVariants>, 'width'> {
  options: KSelectOption[];
  selectLabel?: string;
  /** 리스트 상단에 노출될 라벨 */
  placeholder?: string;
  className?: string;
  id?: string;
  onChange?: (value: KSelectValue) => void;
  error?: boolean;
  /** width[xs/sm/md/lg/auto/full] 프리셋 또는 숫자(px)로 설정 가능 */
  width?: VariantProps<typeof selectVariants>['width'] | number;
}

export interface KSelectRefs {
  value: KSelectValue | undefined;
}

// endregion

const KSelect = forwardRef<KSelectRefs, KSelectProps>((props, ref) => {
  const {
    options,
    value,
    onChange,
    placeholder,
    className,
    disabled,
    id,
    size = 'md',
    width = 'md',
    error,
    selectLabel,
    ...rest
  } = props;

  const generatedId = useStableId();
  const selectId = id || generatedId;

  // 숫자형 너비 판별 및 스타일 생성
  const isNumericWidth = typeof width === 'number';

  const triggerStyle = useMemo(() => (isNumericWidth ? {
    width: `${width}px`,
    minWidth: `${width}px`,
    maxWidth: `${width}px`,
  } : undefined), [width, isNumericWidth]);

  useImperativeHandle(ref, () => ({ value }));

  const handleValueChange = useCallback((val: KSelectValue) => {
    onChange?.(val);
  }, [onChange]);

  return (
    <SelectPrimitive.Root
      value={value}
      onValueChange={handleValueChange}
      disabled={disabled}
      {...rest}
    >
      <SelectPrimitive.Trigger
        id={selectId}
        style={triggerStyle}
        className={cn(
          selectVariants({ size, width: isNumericWidth ? undefined : (width as never) }),
          error && 'border-destructive focus:ring-destructive',
          '[&>span]:line-clamp-1 [&>span]:flex-1 [&>span]:text-left',
          className,
        )}
      >
        <SelectPrimitive.Value placeholder={placeholder}/>
        <SelectPrimitive.Icon asChild>
          <ChevronDown className={cn('opacity-50 shrink-0 ml-2', size === 'sm' ? 'h-3 w-3' : 'h-4 w-4')}/>
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          position="item-aligned"
          sideOffset={4}
          className={cn(
            'relative z-50 min-w-[var(--radix-select-trigger-width)] overflow-hidden rounded-md border border-border bg-popover text-popover-foreground shadow-md',
            'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95',
            'data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2',
          )}>
          <SelectPrimitive.ScrollUpButton className="flex cursor-default items-center justify-center py-1">
            <ChevronUp className="h-4 w-4"/>
          </SelectPrimitive.ScrollUpButton>

          <SelectPrimitive.Viewport className="p-1">
            <SelectPrimitive.Group>

              {selectLabel && (
                <SelectPrimitive.Label className="px-2 py-1.5 text-xs text-muted-foreground">
                  {selectLabel}
                </SelectPrimitive.Label>
              )}

              {options.map((opt) => (
                <SelectPrimitive.Item
                  key={opt.value}
                  value={opt.value}
                  disabled={opt.disabled}
                  className={cn(itemVariants({ size }))}
                >
                  <SelectPrimitive.ItemText>{opt.label}</SelectPrimitive.ItemText>
                  <span className="absolute right-2 flex items-center justify-center">
                    <SelectPrimitive.ItemIndicator>
                      <Check className={cn(size === 'sm' ? 'h-3 w-3' : 'h-4 w-4')}/>
                    </SelectPrimitive.ItemIndicator>
                  </span>
                </SelectPrimitive.Item>
              ))}
            </SelectPrimitive.Group>
          </SelectPrimitive.Viewport>

          <SelectPrimitive.ScrollDownButton className="flex cursor-default items-center justify-center py-1">
            <ChevronDown className="h-4 w-4"/>
          </SelectPrimitive.ScrollDownButton>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
});

KSelect.displayName = 'KSelect';

export { KSelect };