import { Slot } from '@radix-ui/react-slot';
import { ButtonHTMLAttributes, useMemo } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';


const focusStyle = 'focus-visible:outline focus-visible:outline-ring focus-visible:outline-offset-[-2px]';

const buttonVariants = cva(
  'k-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors ' +
  'disabled:pointer-events-none disabled:opacity-50 ' +
  '[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 truncate',
  {
    variants: {
      variant: {
        default: `bg-gray-200/70 shadow hover:brightness-90 hover:text-accent-foreground active:scale-[0.97] transition-transform ${focusStyle}`,
        outline: 'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground active:scale-[0.97] transition-transform focus-ring ',
        primary: `bg-primary text-primary-foreground shadow hover:bg-primary/90 active:scale-[0.97] transition-transform ${focusStyle} focus-visible:outline-white`,
        danger: `bg-danger text-danger-foreground shadow-sm hover:bg-danger/90 active:scale-[0.97] transition-transform ${focusStyle} focus-visible:outline-white`,
        ghost: `hover:bg-accent hover:text-accent-foreground active:scale-[0.97] transition-transform ${focusStyle}`,
        link: `text-primary underline-offset-4 hover:underline active:scale-[0.97] transition-transform ${focusStyle} focus-visible:outline-primary`,
      },
      size: {
        sm: 'h-8 rounded-md px-3 text-xs',
        md: 'h-9 px-4 py-2',
        lg: 'h-10 rounded-md px-8',
        icon: 'h-9 w-9',
      },
      width: {
        default: 'w-fit',
        full: 'w-full',
      },
    },
    compoundVariants: [
      {
        size: 'icon',
        width: ['default', 'full'],
        className: 'w-9 min-w-9',
      },
    ],
    defaultVariants: {
      variant: 'default',
      size: 'md',
      width: 'default',
    },
  },
);

type ButtonVariantsProps = VariantProps<typeof buttonVariants>;
export type KButtonWidthType = ButtonVariantsProps['width'] | number;

export interface KButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'width' | 'ref'>,
  Omit<ButtonVariantsProps, 'width'> {
  asChild?: boolean;
  width?: KButtonWidthType;
  ref?: React.Ref<HTMLButtonElement>;
}

const KButton = (props: KButtonProps) => {

  // region [hooks]
  const { className, variant, size = 'md', width, style, asChild = false, ref, ...restProps } = props;
  // endregion


  // region Privates
  const Comp = asChild ? Slot : 'button';
  const isNumberWidth = typeof width === 'number';

  const buttonStyle = useMemo(() => ({
    width: isNumberWidth ? width : undefined,
    ...style,
  }), [isNumberWidth, width, style]);
  // endregion

  return (
    <Comp
      ref={ref}
      className={cn(buttonVariants({
        variant,
        size,
        width: isNumberWidth ? undefined : (width as ButtonVariantsProps['width']),
        className,
      }))}
      style={buttonStyle}
      {...restProps}
    />
  );
};

export { KButton, buttonVariants };