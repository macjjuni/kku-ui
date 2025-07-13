import { Children, ForwardRefExoticComponent, isValidElement, memo, ReactNode, RefAttributes, useMemo, useRef, useState } from 'react';
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

  return (
    <details ref={root} {...restProps} open data-open={String(isOpen)}>
      <AccordionContext.Provider value={ContextValue}>
        {SummaryElement}
        {ContentElement}
      </AccordionContext.Provider>
    </details>
  );
};

interface AccordionNamespace extends ForwardRefExoticComponent<AccordionProps & RefAttributes<HTMLDetailsElement>> {
  Summary: typeof AccordionSummary;
  Content: typeof AccordionContent;
}

const KAccordion = memo(Accordion) as unknown as AccordionNamespace;
Accordion.displayName = 'Accordion';
KAccordion.displayName = 'Accordion';

KAccordion.Summary = AccordionSummary;
KAccordion.Content = AccordionContent;

export default KAccordion;