import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useAccordionContext } from '@/core/accordion/Accordion.context';
import { AccordionContentProps } from '@/core/accordion/Accordion.interface';

const AccordionContent = (props: AccordionContentProps) => {

  // region [Hooks]
  const { children, style, ...restProps } = props;
  const { isOpen, summaryId } = useAccordionContext();
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | 'auto'>('auto');
  // endregion

  // region [Styles]
  const rootStyle = useMemo(() => {
    return {
      ...style,
      overflow: 'hidden',
      maxHeight: isOpen ? height : 0,
    };
  }, [style, isOpen, height]);
  // endregion

  // region [Privates]
  const updateHeight = useCallback(() => {
    const node = contentRef.current;
    if (node) {
      setHeight(node.scrollHeight);
    }
  }, []);
  // endregion

  // region [Life Cycles]
  useEffect(() => {
    updateHeight();
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const node = contentRef.current;
    if (!node) return;

    const resizeObserver = new ResizeObserver(updateHeight);
    resizeObserver.observe(node);

    return () => resizeObserver.disconnect();
  }, [isOpen, updateHeight]);
  // endregion


  return (
    <div ref={contentRef} role="region" {...restProps} style={rootStyle}
         aria-labelledby={summaryId}>
      {typeof children === 'function' ? children({ isOpen }) : children}
    </div>
  );
};

const MemoizedAccordionContent = memo(AccordionContent);
MemoizedAccordionContent.displayName = 'Accordion.Content';
AccordionContent.displayName = 'Accordion.Content';

export default MemoizedAccordionContent;
