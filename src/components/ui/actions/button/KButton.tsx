import { Slot } from '@radix-ui/react-slot';
import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors ' +
  'focus-ring disabled:pointer-events-none disabled:opacity-50 ' +
  '[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default:
          'bg-gray-200/80 shadow hover:brightness-90 hover:text-accent-foreground active:scale-[0.97] transition-transform',
        outline:
          'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground active:scale-[0.97] transition-transform',
        primary:
          'bg-primary text-primary-foreground shadow hover:bg-primary/90 active:scale-[0.97] transition-transform',
        danger:
          'bg-danger text-danger-foreground shadow-sm hover:bg-danger/90 active:scale-[0.97] transition-transform',
        secondary:
          'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 active:scale-[0.97] transition-transform',
        ghost: 'hover:bg-accent hover:text-accent-foreground active:scale-[0.97] transition-transform',
        link: 'text-primary underline-offset-4 hover:underline active:scale-[0.97] transition-transform',
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-10 rounded-md px-8',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface KButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const KButton = forwardRef<HTMLButtonElement, KButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
KButton.displayName = 'KButton';

export { KButton, buttonVariants };
