import { Loader2, type LucideProps } from 'lucide-react';
import { cn } from '@/lib/utils';


export type KSpinnerSize = 'sm' | 'md' | 'lg' | 'xl';

export type KSpinnerProps = LucideProps & {
  size?: KSpinnerSize;
  ref?: React.Ref<SVGSVGElement>;
};

const sizeMap: Record<KSpinnerSize, string> = {
  sm: 'h-4 w-4',
  md: 'h-6 w-6',
  lg: 'h-8 w-8',
  xl: 'h-12 w-12',
};


const KSpinner = (props: KSpinnerProps) => {
  // region [Hooks]
  const { size = 'md', className, ref, ...restProps } = props;
  // endregion

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
        {...restProps}
      />
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export { KSpinner };