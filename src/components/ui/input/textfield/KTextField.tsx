import { ChangeEvent, ComponentProps, Ref, useCallback, useImperativeHandle, useMemo, useRef, useState } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { KInput, KInputSizeType } from '@/components';
import { useStableId } from '@/common/hooks';

const textFieldVariants = cva(
  'w-full transition-all',
  {
    variants: {
      width: {
        auto: 'w-auto',
        full: 'w-full',
        xs: 'w-full max-w-[160px] min-w-[160px]',
        sm: 'w-full max-w-[200px] min-w-[200px]',
        md: 'w-full max-w-[240px] min-w-[240px]',
        lg: 'w-full max-w-[280px] min-w-[280px]',
      },
    },
    defaultVariants: {
      width: 'md',
    },
  },
);

export type KValidationRule = (value: string) => boolean | string | Promise<boolean | string>;

export interface KTextFieldRefs {
  validate: () => Promise<boolean>;
  reset: () => void;
  value: string;
}

export interface KTextFieldProps extends Omit<ComponentProps<'input'>, 'size' | 'width' | 'ref'> {
  label?: string;
  helperText?: string;
  rules?: KValidationRule[];
  width?: VariantProps<typeof textFieldVariants>['width'] | number;
  size?: KInputSizeType;
  ref?: Ref<KTextFieldRefs>;
}


const KTextField = (props: KTextFieldProps) => {
  // region hooks
  const {
    id, className, type, label, required, readOnly, size = 'md', width = 'full', helperText,
    maxLength, rules, onChange, style, ref, ...restProps
  } = props;

  const generatedId = useStableId();
  const inputId = id || generatedId;
  const inputRef = useRef<HTMLInputElement>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  // endregion

  // region Privates
  const isNumberWidth = useMemo(() => (typeof width === 'number'), [width]);

  const containerClass = useMemo(() => (
    cn(
      'grid items-center gap-1.5',
      (isNumberWidth || width === 'full' || width === 'xs' || width === 'sm' || width === 'md' || width === 'lg') && 'w-full',
      width === 'auto' && 'w-fit',
      className,
    )), [width, isNumberWidth, className]);
  // endregion

  // region Transactions
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

  useImperativeHandle(ref, () => ({
    validate,
    reset: () => setErrorMessage(null),
    get value() {
      return inputRef.current?.value || '';
    },
  }));
  // endregion

  // region Events
  const onChangeTextField = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (errorMessage) {
      setErrorMessage(null);
    }
    onChange?.(e);
  }, [errorMessage, onChange]);
  // endregion

  return (
    <div className={containerClass} style={{ ...style, width: isNumberWidth ? width as number : style?.width }}>
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
        size={size}
        onChange={onChangeTextField}
        readOnly={readOnly}
        maxLength={maxLength}
        className={cn(
          textFieldVariants({ width: isNumberWidth ? 'full' : (width as never) }),
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
};

export { KTextField };