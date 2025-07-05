import { CSSProperties, ElementType, forwardRef, HTMLAttributes, memo, useMemo } from 'react';
import { Panel as CorePanel } from '@/core/panel'
import { KPanelProps } from '@/components';


const Panel = forwardRef<HTMLAttributes<ElementType>, KPanelProps>((props, refs) => {

  // region [Hooks]
  const { className, style, width, height, children, ...restProps } = props;
  // endregion

  // region [Styles]
  const rootClass = useMemo(() => {
    const clazz = ['k-panel'];

    if (className) clazz.push(className);

    return clazz.join(' ');
  }, [className]);

  const rootStyle = useMemo(() => {
    const styles: CSSProperties = { ...style };

    if (width !== undefined) styles.width = width;
    if (height !== undefined) {
      styles.height = height;
    }

    return styles;
  }, [style, width, height]);
  // endregion

  return (
    <CorePanel ref={refs} {...restProps} className={rootClass} style={rootStyle}>
      {children}
    </CorePanel>
  );
});

const KPanel = memo(Panel);
Panel.displayName = 'KPanel';
KPanel.displayName = 'KPanel';

export default KPanel;
