import {
  Children,
  cloneElement,
  forwardRef,
  ForwardRefExoticComponent,
  isValidElement,
  memo,
  ReactElement,
  ReactNode,
  RefAttributes,
  useMemo,
} from 'react';
import { KMenuItemProps, KMenuProps } from './KMenu.interface';
import KMenuItem from './KMenuItem';
import KMenuItemSelectable from './KMenuItemSelectable';
import KMenuItemDivider from './KMenuItemDivider';
import { Menu as CoreMenu } from '@/core';

const Menu = forwardRef<HTMLUListElement, KMenuProps>((props, ref) => {

  // region [Hooks]
  const { children, className, style, width, size = 'medium', ...restProps } = props;
  // endregion

  // region [Styles]
  const rootClass = useMemo(() => {
    const clazz = ['k-menu', `k-menu--${size}`];

    if (className) {
      clazz.push(className);
    }

    return clazz.join(' ');
  }, [className, size]);

  const rootStyle = useMemo(() => ({ ...style, width }), [style, width]);
  // endregion

  // region [Templates]
  const MenuItems = useMemo((): ReactNode[] => {
    const menuItems: ReactNode[] = [];

    Children.forEach(children, (child, index) => {
      if (!isValidElement(child)) {
        return;
      }
      if (child.type === KMenuItem || child.type === KMenuItemSelectable || child.type === KMenuItemDivider) {
        const MenuItem = child as ReactElement<KMenuItemProps>;
        menuItems.push(cloneElement(MenuItem, { ...MenuItem.props, size, key: child.key ?? `k-menu-item-${index}` }));
      }
    });
    return menuItems;
  }, [children, size]);
  // endregion

  return (
    <CoreMenu {...restProps} as="ul" ref={ref} className={rootClass} style={rootStyle}>
      {MenuItems}
    </CoreMenu>
  );
});

const KMenuBase = memo(Menu);
KMenuBase.displayName = 'KMenu';
Menu.displayName = 'KMenu';

interface KMenuNamespace extends ForwardRefExoticComponent<KMenuProps & RefAttributes<HTMLUListElement>> {
  Item: typeof KMenuItem;
  ItemSelectable: typeof KMenuItemSelectable;
  ItemDivider: typeof KMenuItemDivider
}

const KMenu = KMenuBase as KMenuNamespace;
KMenu.Item = KMenuItem;
KMenu.ItemSelectable = KMenuItemSelectable;
KMenu.ItemDivider = KMenuItemDivider;

export default KMenu;