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
import { KButton, KButtonProps } from '@/components';
import { KToggleButtonProps } from '@/components/actions/toggle-button/KToggleButton.interface';
import { handleEnterOrSpacePress } from '@/common/util/keyboard';

const KToggleButton = ({ multiple, className, variant = 'outlined', children, ...restProps }: KToggleButtonProps) => {

  // region [Hooks]
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [selectedIdxList, setSelectedIdxList] = useState<number[]>([]);
  // endregion

  // region [Styles]
  const rootClass = useMemo(() => {
    const classes = ['k-toggle-button'];
    if (className) classes.push(className);
    return classes.join(' ');
  }, [className]);
  // endregion

  // region [Events]
  const onChangeSelected = useCallback(
    (idx: number) => {
      if (!multiple) {
        setSelectedIdx((prev) => (prev === idx ? null : idx));
      } else {
        setSelectedIdxList((prev) => (prev.includes(idx) ? prev.filter((item) => item !== idx) : [...prev, idx]));
      }
    },
    [multiple],
  );
  // endregion

  // region [Privates]
  const getIsSelected = useCallback(
    (idx: number) => (multiple ? selectedIdxList.includes(idx) : selectedIdx === idx),
    [multiple, selectedIdx, selectedIdxList],
  );
  // endregion

  // region [Templates]
  const buttons = useMemo(() => {
    return Children.toArray(children)
      .map((child, index) => {
        if (!isValidElement(child)) return null;
        if (child.type !== KButton) return null;

        const isSelected = getIsSelected(index);
        const childItem = child as ReactElement<KButtonProps>;

        const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
          onChangeSelected(index);
          childItem.props.onClick?.(e);
        };

        const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
          childItem.props.onKeyDown?.(e);
          handleEnterOrSpacePress(e, () => onChangeSelected(index));
        };

        return cloneElement(childItem, {
          ...childItem.props,
          variant,
          className: isSelected ? 'k-button--selected' : undefined,
          key: child.key ?? `k-button--${index}`,
          onClick: handleClick,
          onKeyDown: handleKeyDown,
        });
      })
  }, [children, variant, getIsSelected, onChangeSelected]);
  // endregion


  return (
    <div {...restProps} className={rootClass} role="group">
      {buttons}
    </div>
  );
};
// endregion

KToggleButton.displayName = 'KToggleButton';
export default memo(KToggleButton);