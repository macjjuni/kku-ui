import { ComponentPropsWithoutRef, forwardRef, memo, Ref } from 'react';
import { MenuElementType, MenuProps } from './Menu.interface';
import { Panel } from "@/core";


type Props<T extends MenuElementType> = MenuProps<T> & ComponentPropsWithoutRef<T> & {
  ref?: Ref<HTMLElement>;
};

const Menu = forwardRef<HTMLElement, Props<MenuElementType>>(
  (
    props,
    ref,
  ) => {

    const { as = 'ul', children, ...restProps } = props;

    return (
      <Panel ref={ref} as={as} role="menu" {...restProps}>
        {children}
      </Panel>
    );
  },
);

const MemoizedMenu = memo(Menu);
Menu.displayName = 'Menu';
MemoizedMenu.displayName = 'Menu';

export default MemoizedMenu;
