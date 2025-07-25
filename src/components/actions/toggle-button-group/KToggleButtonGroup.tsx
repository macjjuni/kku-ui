import {
  Children,
  cloneElement,
  isValidElement,
  KeyboardEvent,
  memo,
  MouseEvent,
  ReactElement,
  useCallback,
  useMemo,
  useState,
} from 'react';
import { KToggleButton, KToggleButtonProps } from '@/components';
import { KToggleButtonGroupProps } from './KToggleButtonGroup.interface';
import { handleEnterOrSpacePress } from '@/common/util/keyboard';

const ToggleButtonGroup = ({
  multiple,
  className,
  variant = 'outlined',
  size = 'medium',
  children,
  ...restProps
}: KToggleButtonGroupProps) => {

  // region [Hooks]
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const [selectedValueList, setSelectedValueList] = useState<string[]>([]);
  // endregion

  // region [Styles]
  const rootClass = useMemo(() => {
    const classes = ['k-toggle-button-group'];
    if (className) classes.push(className);
    return classes.join(' ');
  }, [className]);
  // endregion

  // region [Events]
  const onChangeSelected = useCallback(
    (value: string) => {
      if (!multiple) {
        setSelectedValue((prev) => (prev === value ? null : value));
      } else {
        setSelectedValueList((prev) => (prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]));
      }
    },
    [multiple],
  );
  // endregion

  // region [Privates]
  const getIsSelected = useCallback((value: string) => {
    return multiple ? selectedValueList.includes(value) : selectedValue === value
  }, [multiple, selectedValue, selectedValueList]);
  // endregion

  // region [Templates]
  const buttons = useMemo(() => {
    return Children.toArray(children)
      .map((child) => {
        if (!isValidElement(child)) return null;
        if (child.type !== KToggleButton) return null;

        const childItem = child as ReactElement<KToggleButtonProps>;
        const { value } = childItem.props
        const isSelected = getIsSelected(value);

        const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
          onChangeSelected(value);
          childItem.props.onClick?.(e);
        };

        const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
          childItem.props.onKeyDown?.(e);
          handleEnterOrSpacePress(e, () => onChangeSelected(value));
        };

        return cloneElement(childItem, {
          ...childItem.props,
          key: child.key ?? `k-toggle-button--${value}`,
          className: isSelected ? 'k-toggle-button--selected' : undefined,
          variant,
          size,
          onClick: handleClick,
          onKeyDown: handleKeyDown,
        });
      });
  }, [children, size, variant, getIsSelected, onChangeSelected]);
  // endregion

  return (
    <div {...restProps} className={rootClass} role="group">
      {buttons}
    </div>
  );
};

const KToggleButtonGroup = memo(ToggleButtonGroup);
ToggleButtonGroup.displayName = 'KToggleButtonGroup';
KToggleButtonGroup.displayName = 'KToggleButtonGroup';

export default KToggleButtonGroup;
