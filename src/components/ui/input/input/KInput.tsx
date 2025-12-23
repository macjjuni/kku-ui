import { forwardRef, ComponentProps } from "react";
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from "@/lib/utils"

export type KInputSizeType = 'sm' | 'md' | 'lg';

const inputVariants = cva(
  "flex w-full rounded-md border border-input bg-transparent shadow-sm " +
  "transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground " +
  "placeholder:text-muted-foreground focus-ring disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      size: {
        md: 'h-9 px-3 py-2 text-sm',
        sm: 'h-8 px-2 py-1 text-xs',
        lg: 'h-10 px-3 py-2 text-base',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);

export interface KInputProps extends Omit<ComponentProps<"input">, 'size'>, VariantProps<typeof inputVariants> {}

const KInput = forwardRef<HTMLInputElement, KInputProps>(
  ({ className, type, size, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ size }), className)}
        ref={ref}
        {...props}
      />
    )
  },
)

KInput.displayName = "KInput"

export { KInput, inputVariants }