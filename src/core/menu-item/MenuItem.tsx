import { forwardRef, memo, useMemo } from 'react';
import { MenuItemProps } from './MenuItem.interface';


const MenuItem = forwardRef<HTMLDivElement | HTMLLIElement, MenuItemProps>(
  (
    props,
    ref,
  ) => {

    const { as, children, disabled, tabIndex, ...restProps } = props;
    const Component = as || 'li';
    const TabIndex = useMemo(() => (
      disabled ? undefined : tabIndex ?? 0
    ), [disabled, tabIndex]);

    return (
      <Component ref={ref} as={as} role="menuitem" aria-disabled={disabled} tabIndex={TabIndex} {...restProps}>
        {children}
      </Component>
    );
  },
);

const MemoizedMenuItem = memo(MenuItem);
MenuItem.displayName = 'MenuItem';
MemoizedMenuItem.displayName = 'MenuItem';

export default MemoizedMenuItem;
