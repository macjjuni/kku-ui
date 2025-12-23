import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';


const KCard = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('rounded-md border bg-card text-card-foreground shadow-sm', className)} {...props} />
  ),
);

const KCardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex flex-col space-y-1.5 p-4', className)} {...props} />
  ),
);

const KCardTitle = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    // eslint-disable-next-line jsx-a11y/heading-has-content
    <h3 ref={ref} className={cn('font-semibold leading-none tracking-tight text-lg', className)} {...props} />
  ),
);

const KCardDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn('text-sm text-muted-foreground', className)} {...props} />
  ),
);

const KCardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('p-4 pt-0', className)} {...props} />
  ),
);

const KCardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex items-center p-4 pt-0', className)} {...props} />
  ),
);

KCard.displayName = 'KCard';
KCardHeader.displayName = 'KCardHeader';
KCardTitle.displayName = 'KCardTitle';
KCardDescription.displayName = 'KCardDescription';
KCardContent.displayName = 'KCardContent';
KCardFooter.displayName = 'KCardFooter';

export { KCard, KCardHeader, KCardFooter, KCardTitle, KCardDescription, KCardContent };