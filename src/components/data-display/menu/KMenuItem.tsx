import { forwardRef, memo, useMemo } from 'react';
import { KMenuItemProps } from "./KMenu.interface";
import { MenuItem as CoreMenuItem } from "@/core";


const MenuItem = forwardRef<HTMLButtonElement, KMenuItemProps>((props, ref) => {

  // region [Hooks]
  const { children, className, style, size = 'medium',
    leftContent, label, rightContent, shortcut, ...restProps } = props;
  // endregion

  // region [Styles]
  const rootClass = useMemo(() => {
    const clazz = ['k-menu-item', `k-menu-item--${size}`];
    if (className) {
      clazz.push(className);
    }
    return clazz.join(' ');
  }, [className, size]);

  const rootStyle = useMemo(() => ({ ...style }), [style]);
  // endregion

  // region [Templates]

  const LeftContent = useMemo(() => (
    leftContent ? <span className="k-menu-item__left-content">{leftContent}</span> : null
  ), [leftContent])

  const Label = useMemo(() => (
    <div className="k-menu-item__label">{label}</div>
  ), [label])

  const RightContent = useMemo(() => (
    rightContent ? <span className="k-menu-item__right-content">{rightContent}</span> : null
  ), [rightContent])

  const Shortcut = useMemo(() => (
    shortcut ? <span className="k-menu-item__shortcut">{shortcut}</span> : null
  ), [shortcut])

  // endregion


  return (
    <CoreMenuItem ref={ref} {...restProps} as="button" className={rootClass} style={rootStyle}>
      {LeftContent}
      {Label}
      {Shortcut}
      {RightContent}
    </CoreMenuItem>
  );
});

const KMenuItem = memo(MenuItem);
KMenuItem.displayName = 'KMenuItem';
MenuItem.displayName = 'KMenuItem';

export default KMenuItem;
