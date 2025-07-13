import { forwardRef, memo, useImperativeHandle, useMemo, useRef } from 'react';
import { KMenuItemDividerProps } from './KMenu.interface';


const MenuItemDivider = forwardRef<HTMLLIElement, KMenuItemDividerProps>((props, ref) => {

  // region [Hooks]
  const { children, className, ...restProps } = props;
  const rootRef = useRef<HTMLLIElement>(null);

  useImperativeHandle(ref, () => rootRef.current!, []);
  // endregion

  // region [Styles]
  const rootClass = useMemo(() => {
    const clazz = ['k-menu-item-divider'];
    if (className) {
      clazz.push(className);
    }
    return clazz.join(' ');
  }, [className]);
  // endregion

  return (<li ref={rootRef} {...restProps} className={rootClass} role="separator" aria-orientation="horizontal" />);
});

const KMenuItemDivider = memo(MenuItemDivider);
KMenuItemDivider.displayName = 'KMenu.ItemDivider';
MenuItemDivider.displayName = 'KMenu.ItemDivider';

export default KMenuItemDivider;
