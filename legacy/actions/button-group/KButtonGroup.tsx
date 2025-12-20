import { Children, cloneElement, isValidElement, memo, ReactElement, ReactNode, useMemo } from 'react';
import { KButton, KButtonGroupProps, KButtonProps } from 'src/components';


const ButtonGroup = (props: KButtonGroupProps) => {

  // region [Hooks]
  const { className, variant = 'outlined', size = 'medium', children, ...restProps } = props;
  // endregion


  // region [Styles]
  const rootClass = useMemo(() => {
    const clazz = ['k-button-group'];
    if (className) {
      clazz.push(className);
    }
    return clazz.join(' ');
  }, [className]);
  // endregion


  // region [Templates]
  const Buttons = useMemo(() => {
    const buttons: ReactNode[] = [];

    Children.forEach(children, (child, index) => {
      if (!isValidElement(child)) {
        return;
      }
      if (child.type === KButton) {
        const childItem = child as ReactElement<KButtonProps>;
        buttons.push(cloneElement(childItem, {
          ...childItem.props,
          key: child.key ?? `k-button--${index}}`,
          size,
          variant,
        }));
      }
    });
    return buttons;
  }, [children, variant, size]);
  // endregion

  return (
    <div {...restProps} className={rootClass} role="group">
      {Buttons}
    </div>
  );
};

const KButtonGroup = memo(ButtonGroup);
KButtonGroup.displayName = 'KButtonGroup';
ButtonGroup.displayName = 'KButtonGroup';

export default KButtonGroup;
