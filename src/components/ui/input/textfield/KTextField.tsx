import { ComponentProps, forwardRef, useId, useState, useImperativeHandle, useRef, useCallback, ChangeEvent, useMemo } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { KInput } from '@/components';
import { cn } from '@/lib/utils';

const inputVariants = cva(
  // KInput과 중복되는 border, bg, ring 스타일은 제거하고 레이아웃만 관리
  'w-full transition-all',
  {
    variants: {
      size: {
        md: 'h-9 px-3 py-2 text-sm',
        sm: 'h-8 px-2 py-1 text-xs',
        lg: 'h-10 px-3 py-2 text-base',
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
      size: 'md',
      width: 'md',
    },
  },
);

export type KValidationRule = (value: string) => boolean | string | Promise<boolean | string>;

export interface KTextFieldProps extends Omit<ComponentProps<'input'>, 'size' | 'width'>, VariantProps<typeof inputVariants> {
  label?: string;
  helperText?: string;
  rules?: KValidationRule[];
}

export interface KTextFieldRefs {
  validate: () => Promise<boolean>;
  reset: () => void;
  value: string;
}

const KTextField = forwardRef<KTextFieldRefs, KTextFieldProps>((props, ref) => {
  const { id, className, type, label, required, readOnly, size = 'md', width = 'full', helperText,
    maxLength, rules, onChange, ...restProps } = props;

  const generatedId = useId();
  const inputId = id || generatedId;
  const inputRef = useRef<HTMLInputElement>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useImperativeHandle(ref, () => ({
    validate,
    reset: () => setErrorMessage(null),
    get value() {
      return inputRef.current?.value || '';
    },
  }));

  const containerClass = useMemo(() => (
    cn(
      'grid items-center gap-1.5',
      (width === 'full' || width === 'xs' || width === 'sm' || width === 'md') && 'w-full',
      width === 'auto' && 'w-fit',
      className,
    )), [width, className]);

  const validate = useCallback(async () => {
    if (!rules) return true;
    const val = inputRef.current?.value || '';

    // eslint-disable-next-line no-restricted-syntax
    for (const rule of rules) {
      const result = await rule(val);
      if (typeof result === 'string') {
        setErrorMessage(result);
        return false;
      }
      if (result === false) {
        setErrorMessage('유효하지 않은 값입니다.');
        return false;
      }
    }
    setErrorMessage(null);
    return true;
  }, [rules]);

  const onChangeTextField = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (errorMessage) {
      setErrorMessage(null);
    }
    onChange?.(e);
  }, [errorMessage, onChange]);

  return (
    <div className={containerClass}>
      {label && (
        <label htmlFor={inputId} className={cn('font-medium', size === 'sm' ? 'text-sm' : 'text-md')}>
          {label}
          {required && <span className="text-danger ml-0.5">*</span>}
        </label>
      )}
      <KInput
        {...restProps}
        id={inputId}
        ref={inputRef}
        type={type}
        onChange={onChangeTextField}
        readOnly={readOnly}
        maxLength={maxLength}
        className={cn(
          inputVariants({ size, width }),
          errorMessage && 'border-danger focus-visible:ring-danger',
          className,
        )}
      />
      {errorMessage ? (
        <p className="text-xs font-medium text-danger">{errorMessage}</p>
      ) : (
        helperText && <p className="text-xs text-muted-foreground">{helperText}</p>
      )}
    </div>
  );
});

KTextField.displayName = 'KTextField';

export { KTextField };