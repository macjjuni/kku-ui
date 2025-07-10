import { ComponentPropsWithoutRef, CSSProperties, ElementType, forwardRef, memo, ReactNode, Ref } from 'react';

type RatioString = `${number}/${number}`;

interface BaseProps<T extends ElementType> {
  as?: T;
  ratio?: RatioString;
  children?: ReactNode;
  style?: CSSProperties;
}

type Props<T extends ElementType> =
  BaseProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof BaseProps<T>>;

const isValidRatio = (value: string): value is RatioString => (/^\d+\/\d+$/.test(value));

const Panel = forwardRef(
  <T extends ElementType = 'div'>(
    props: Props<T>,
    ref: Ref<HTMLElement>,
  ) => {
    const { as, ratio, style, children, ...restProps } = props;
    const Component = as || 'div';

    const rootStyle: CSSProperties = {
      ...style,
      ...(ratio && isValidRatio(ratio) ? { aspectRatio: ratio } : {}),
    };

    return (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      <Component ref={ref as any} style={rootStyle} {...restProps}>
        {children}
      </Component>
    );
  },
);

Panel.displayName = 'Panel';

export default memo(Panel);
