import { Children, cloneElement, isValidElement, memo, ReactElement, ReactNode, useMemo } from 'react';
import { KMenuItemProps, KMenuProps } from "./KMenu.interface";
import { Menu as CoreMenu } from "@/core";
import { KMenuItem } from "@/components";
import lodashUtil from "@/common/util/lodashUtil";


const Menu = (props: KMenuProps) => {

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
    const menuItems: ReactNode[] = []

    Children.forEach(children, (child) => {
      if (!isValidElement(child)) {
        return
      }
      if (child.type === KMenuItem) {
        const MenuItem = child as ReactElement<KMenuItemProps>
        menuItems.push(cloneElement(MenuItem, { ...MenuItem.props, size, key: lodashUtil.uniqueId('k-menu-item-') }))
      }
    })
    return menuItems
  }, [children, size])
  // endregion

  return (
    <CoreMenu {...restProps} as="div" className={rootClass} style={rootStyle}>
      {MenuItems}
    </CoreMenu>
  );
};

const KMenu = memo(Menu);
KMenu.displayName = 'KAccordion';
Menu.displayName = 'KAccordion';

export default KMenu;
