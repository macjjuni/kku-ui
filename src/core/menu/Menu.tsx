import { forwardRef, memo } from 'react';
import { MenuElementType, MenuElementTypeMap, MenuProps } from './Menu.interface';

const Menu = forwardRef<MenuElementTypeMap[MenuElementType], MenuProps>(
  ({ as, children, ...rest }, ref) => {
    const Component = as || 'ul';

    return (
      <Component ref={ref} role="menu" {...rest}>
        {children}
      </Component>
    );
  },
);

const MemoizedMenu = memo(Menu)
Menu.displayName = 'Menu';
MemoizedMenu.displayName = 'Menu';

export default Menu;