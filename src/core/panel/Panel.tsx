import { CSSProperties, ElementType, forwardRef, HTMLAttributes, memo, useMemo } from 'react';
import { PanelProps } from './Panel.interface';


const isValidRatio = (value: string): value is `${number}/${number}` => {
  return /^\d+\/\d+$/.test(value);
};

const Panel = forwardRef<HTMLAttributes<ElementType>, PanelProps>((props, refs) => {

  // region [Hooks]
  const { as: Component = 'div', ratio, style, children, ...restProps } = props;
  // endregion

  // region [Styles]
  const rootStyle = useMemo(() => {
    const mergedStyle: CSSProperties = { ...style };

    if (ratio && isValidRatio(ratio)) {
      const [num, denom] = ratio.split('/').map(Number);
      if (num > 0 && denom > 0) {
        mergedStyle.aspectRatio = `${num} / ${denom}`;
      }
    }

    return mergedStyle;
  }, [ratio, style]);
  // endregion

  return (
    <Component ref={refs} style={rootStyle} {...restProps}>
      {children}
    </Component>
  );
});

const MemoizedPanel = memo(Panel);
Panel.displayName = 'Panel';
MemoizedPanel.displayName = 'Panel';

export default Panel;
