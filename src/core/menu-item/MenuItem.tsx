import { ComponentPropsWithoutRef, forwardRef, memo, Ref, useMemo } from 'react';
import { MenuItemElementType, MenuItemProps } from './MenuItem.interface';
import { Panel } from '@/core';


type Props<T extends MenuItemElementType> = MenuItemProps<T> & ComponentPropsWithoutRef<T> & {
  ref?: Ref<HTMLDivElement | HTMLButtonElement | HTMLLIElement>;
};

const MenuItem = forwardRef<HTMLDivElement | HTMLButtonElement | HTMLLIElement, Props<MenuItemElementType>>(
  (
    props,
    ref,
  ) => {

    const { as = 'li', children, disabled, tabIndex, ...restProps } = props;
    const TabIndex = useMemo(() => (
      disabled ? undefined : tabIndex ?? 0
    ), [disabled, tabIndex])

    return (
      <Panel ref={ref} as={as} role="menuitem" aria-disabled={disabled} tabIndex={TabIndex} {...restProps}>
        {children}
      </Panel>
    );
  },
);

const MemoizedMenuItem = memo(MenuItem);
MenuItem.displayName = 'MenuItem';
MemoizedMenuItem.displayName = 'MenuItem';

export default MemoizedMenuItem;
