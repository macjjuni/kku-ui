import { ComponentPropsWithoutRef, ElementType, forwardRef, memo, Ref, useMemo } from 'react';
import { KPanelProps } from './KPanel.interface';
import { Panel } from "@/core";

type Props<T extends ElementType> = KPanelProps<T> & ComponentPropsWithoutRef<T> & {
  ref?: Ref<HTMLElement>;
};

const KPanel = forwardRef<HTMLElement, Props<ElementType>>(
  (
    props,
    ref,
  ) => {
    const { children, className, ...restProps } = props;

    const rootClass = useMemo(() => {
      const clazz = ['k-panel'];
      if (className) {
        clazz.push(className)
      }
      return clazz.join(' ')
    }, [className])

    return (
      <Panel ref={ref} className={rootClass} {...restProps}>
        {children}
      </Panel>
    );
  },
);

const MemoizedKPanel = memo(KPanel);
KPanel.displayName = 'KPanel';
MemoizedKPanel.displayName = 'KPanel';

export default MemoizedKPanel;
