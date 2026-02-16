import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

// region [Privates]
export type KCardProps = HTMLAttributes<HTMLDivElement> & { ref?: React.Ref<HTMLDivElement> };
export type KCardHeaderProps = HTMLAttributes<HTMLDivElement> & { ref?: React.Ref<HTMLDivElement> };
export type KCardTitleProps = HTMLAttributes<HTMLHeadingElement> & { ref?: React.Ref<HTMLHeadingElement> };
export type KCardDescriptionProps = HTMLAttributes<HTMLParagraphElement> & { ref?: React.Ref<HTMLParagraphElement> };
export type KCardContentProps = HTMLAttributes<HTMLDivElement> & { ref?: React.Ref<HTMLDivElement> };
export type KCardFooterProps = HTMLAttributes<HTMLDivElement> & { ref?: React.Ref<HTMLDivElement> };
// endregion

// region Components
const KCard = ({ className, ref, ...props }: KCardProps) => (
  <div ref={ref} className={cn('rounded-md border border-border bg-card text-card-foreground shadow-sm', className)} {...props} />
);

const KCardHeader = ({ className, ref, ...props }: KCardHeaderProps) => (
  <div ref={ref} className={cn('flex flex-col space-y-1.5 p-4', className)} {...props} />
);

const KCardTitle = ({ className, ref, ...props }: KCardTitleProps) => (
  // eslint-disable-next-line jsx-a11y/heading-has-content
  <h3 ref={ref} className={cn('font-semibold leading-none tracking-tight text-lg', className)} {...props} />
);

const KCardDescription = ({ className, ref, ...props }: KCardDescriptionProps) => (
  <p ref={ref} className={cn('text-sm text-muted-foreground', className)} {...props} />
);

const KCardContent = ({ className, ref, ...props }: KCardContentProps) => (
  <div ref={ref} className={cn('p-4 pt-0', className)} {...props} />
);

const KCardFooter = ({ className, ref, ...props }: KCardFooterProps) => (
  <div ref={ref} className={cn('flex items-center p-4 pt-0', className)} {...props} />
);
// endregion

export { KCard, KCardHeader, KCardFooter, KCardTitle, KCardDescription, KCardContent };