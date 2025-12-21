import { Children, cloneElement, isValidElement, ReactNode, useMemo } from 'react';
import { KButtonProps } from '@/components';
import { cn } from '@/lib/utils';

export interface KButtonGroupProps extends Pick<KButtonProps, 'variant' | 'size' | 'disabled'> {
  children: ReactNode;
  className?: string;
  vertical?: boolean;
}

const KButtonGroup = (props: KButtonGroupProps) => {

  const { children, className, vertical = false, variant, size, disabled } = props;

  // region [Templates]
  const renderButtons = useMemo(() => {
    return Children.toArray(children).map((child) => {
      if (isValidElement<KButtonProps>(child)) {
        return cloneElement(child, {
          variant: child.props.variant || variant,
          size: child.props.size || size,
          disabled: child.props.disabled || disabled,
          type: child.props.type || 'button',
        });
      }
      return child;
    });
  }, [children, variant, size, disabled]);
  // endregion

  return (
    <div
      role="group"
      className={cn(
        'inline-flex',
        vertical ? 'flex-col' : 'flex-row',
        '[&>button]:relative [&>button]:rounded-none focus-within:z-10',
        !vertical ? [
          '[&>button:first-child]:rounded-l-md',
          '[&>button:last-child]:rounded-r-md',
          '[&>button:not(:first-child)]:-ml-px',
        ] : [
          '[&>button:first-child]:rounded-t-md',
          '[&>button:last-child]:rounded-b-md',
          '[&>button:not(:first-child)]:-mt-px',
        ],
        className,
      )}>
      {renderButtons}
    </div>
  );
};

KButtonGroup.displayName = 'KButtonGroup';

export { KButtonGroup };