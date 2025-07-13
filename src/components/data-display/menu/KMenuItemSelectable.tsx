import { forwardRef, memo, useImperativeHandle, useMemo, useRef } from 'react';
import { KMenuItemSelectableProps } from './KMenu.interface';
import KMenuItem from './KMenuItem';
import { KIcon } from '@/components';


const MenuItemSelectable = forwardRef<HTMLLIElement, KMenuItemSelectableProps>((props, ref) => {

  // region [Hooks]
  const { selected, className, label, ...restProps } = props;
  const rootRef = useRef<HTMLLIElement>(null);

  useImperativeHandle(ref, () => rootRef.current!, []);
  // endregion

  // region [Styles]
  const rootClass = useMemo(() => {
    const clazz = ['k-menu-item-selectable'];
    if (className) {
      clazz.push(className);
    }
    if (selected) {
      clazz.push('k-menu-item-selectable--selected');
    }
    return clazz.join(' ');
  }, [className, selected]);
  // endregion

  // region [Events]
  // endregion

  // region [Templates]
  const LeftContent = useMemo(() => (
    selected && <KIcon className="k-menu-item-selectable-check" icon="check" size={10}/>
  ), [selected]);
  // endregion

  return (
    <KMenuItem ref={rootRef} {...restProps} className={rootClass} {...restProps} label={label}
               leftContent={LeftContent}/>
  );
});

const KMenuItemSelectable = memo(MenuItemSelectable);
KMenuItemSelectable.displayName = 'KMenu.ItemSelectable';
MenuItemSelectable.displayName = 'KMenu.ItemSelectable';

export default KMenuItemSelectable;
