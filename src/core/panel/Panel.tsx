import { ComponentPropsWithoutRef, CSSProperties, ElementType, forwardRef, memo, Ref } from 'react';
import { PanelProps } from './Panel.interface';

const isValidRatio = (value: string): value is `${number}/${number}` => /^\d+\/\d+$/.test(value);

type Props<T extends ElementType> = PanelProps<T> & ComponentPropsWithoutRef<T> & {
  ref?: Ref<HTMLElement>;
};

const Panel = forwardRef<HTMLElement, Props<ElementType>>(
  (
    props,
    ref,
  ) => {

    const { as: Component = 'div', ratio, style, children, ...restProps } = props;
    const rootStyle: CSSProperties = {
      ...style,
      ...(ratio && isValidRatio(ratio) ? { aspectRatio: ratio } : {}),
    };

    return (
      <Component ref={ref} style={rootStyle} {...restProps}>
        {children}
      </Component>
    );
  },
);

const MemoizedPanel = memo(Panel);
Panel.displayName = 'Panel';
MemoizedPanel.displayName = 'Panel';

export default MemoizedPanel;
