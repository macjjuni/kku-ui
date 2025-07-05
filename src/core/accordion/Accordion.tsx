import { Children, isValidElement, memo, ReactNode, useMemo, useRef, useState } from 'react';
import AccordionSummary from './AccordionSummary';
import AccordionContent from './AccordionContent';
import { AccordionProps } from './Accordion.interface';
import { AccordionContext } from './Accordion.context';
import { useCleanId } from '@/common/hooks';


const Accordion = (props: AccordionProps) => {

  // region [Hooks]
  const { defaultOpen, children, ...restProps } = props;
  const [isOpen, setIsOpen] = useState<boolean>(!!defaultOpen);

  const root = useRef<HTMLDetailsElement>(null);
  const summaryId = useCleanId('accordion-');
  // endregion

  // region [Template]
  const ContextValue = useMemo(() => ({ isOpen, setIsOpen, root, summaryId }), [isOpen]);

  const { SummaryElement, ContentElement } = useMemo(() => {
    let SummaryElement: ReactNode | null = null;
    let ContentElement: ReactNode | null = null;

    Children.forEach(children, (child: ReactNode) => {
      if (!isValidElement(child)) {
        return;
      }
      if (child?.type === AccordionSummary) {
        SummaryElement = child;
      }
      if (child?.type === AccordionContent) {
        ContentElement = child;
      }
    });

    return { SummaryElement, ContentElement };
  }, [children]);
  // endregion

  // region [Life Cycles]
  // endregion

  return (
    <details ref={root} {...restProps} open data-open={String(isOpen)}>
      <AccordionContext.Provider value={ContextValue}>
        {SummaryElement}
        {ContentElement}
      </AccordionContext.Provider>
    </details>
  );
};

const MemoizedAccordion = memo(Accordion);
MemoizedAccordion.displayName = 'Accordion';
Accordion.displayName = 'Accordion';

export default MemoizedAccordion;
