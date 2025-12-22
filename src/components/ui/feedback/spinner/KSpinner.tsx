import { forwardRef, ComponentRef } from 'react';
import { LucideProps, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface KSpinnerProps extends LucideProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const sizeMap = {
  sm: 'h-4 w-4',
  md: 'h-6 w-6',
  lg: 'h-8 w-8',
  xl: 'h-12 w-12',
};

const KSpinner = forwardRef<ComponentRef<'svg'>, KSpinnerProps>(
  ({ size = 'md', className, ...props }, ref) => {
    return (
      <div className="inline-block" role="status">
        <Loader2
          ref={ref}
          className={cn(
            'k-spinner animate-spin text-muted-foreground',
            sizeMap[size],
            className,
          )}
          style={{ animationDuration: '1s' }}
          aria-hidden="true"
          {...props} />
        <span className="sr-only">Loading...</span>
      </div>
    );
  },
);

KSpinner.displayName = 'KSpinner';

export { KSpinner };