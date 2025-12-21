import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface KSkeletonProps extends HTMLAttributes<HTMLDivElement> {
  circle?: boolean;
}

const KSkeleton = ({ className, circle, ...restProps }: KSkeletonProps) => (
  <div aria-hidden="true" {...restProps} className={cn('animate-pulse bg-muted', circle ? 'rounded-full' : 'rounded-md', className)} />
)

KSkeleton.displayName = "KSkeleton";

export { KSkeleton };