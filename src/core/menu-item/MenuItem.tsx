import { ComponentPropsWithoutRef, forwardRef, memo, Ref } from 'react';
import { MenuItemElementType, MenuItemProps } from './MenuItem.interface';
import { Panel } from '@/core';


type Props<T extends MenuItemElementType> = MenuItemProps<T> & ComponentPropsWithoutRef<T> & {
  ref?: Ref<HTMLElement>;
};

const MenuItem = forwardRef<HTMLElement, Props<MenuItemElementType>>(
  (
    props,
    ref,
  ) => {

    const { as = 'li', children, ...restProps } = props;

    return (
      <Panel ref={ref} as={as} role="menuitem" {...restProps}>
        {children}
      </Panel>
    );
  },
);

const MemoizedMenuItem = memo(MenuItem);
MenuItem.displayName = 'MenuItem';
MemoizedMenuItem.displayName = 'MenuItem';

export default MemoizedMenuItem;
