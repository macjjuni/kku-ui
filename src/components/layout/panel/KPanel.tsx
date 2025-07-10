import { ComponentPropsWithoutRef, ElementType, forwardRef, memo, Ref, useMemo } from 'react';
import { KPanelProps } from './KPanel.interface';
import { Panel } from "@/core";

type Props<T extends ElementType> = KPanelProps & ComponentPropsWithoutRef<T> & {
  ref?: Ref<HTMLElement>;
};

const KPanel = forwardRef<HTMLElement, Props<ElementType>>(
  (
    props,
    ref,
  ) => {
    // region [Hooks]
    const { children, className, style, width, height, ...restProps } = props;
    // endregion

    // region [Styles]
    const rootClass = useMemo(() => {
      const clazz = ['k-panel'];
      if (className) {
        clazz.push(className)
      }
      return clazz.join(' ')
    }, [className])

    const rootStyle = useMemo(() => ({
      style, width, height,
    }), [style, width, height])
    // endregion

    return (
      <Panel ref={ref} className={rootClass} style={rootStyle} {...restProps}>
        {children}
      </Panel>
    );
  },
);

const MemoizedKPanel = memo(KPanel);
KPanel.displayName = 'KPanel';
MemoizedKPanel.displayName = 'KPanel';

export default MemoizedKPanel;
