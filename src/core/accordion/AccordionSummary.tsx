import { KeyboardEvent, memo, MouseEvent, useCallback } from 'react';
import { useAccordionContext } from '@/core/accordion/Accordion.context';
import { AccordionSummaryProps } from '@/core/accordion/Accordion.interface';
import { handleKeyInteraction } from '@/common/util/keyboard';


const AccordionSummary = (props: AccordionSummaryProps) => {

  // region [Hooks]
  const { children, onClick, onKeyDown, ...restProps } = props;
  const { isOpen, setIsOpen, summaryId } = useAccordionContext();
  // endregion

  // region [Privates]
  const onToggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);
  // endregion

  // region [Events]
  const onClickSummary = useCallback((e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    onClick?.(e);
    onToggle();
  }, [onClick]);

  const onKeyDownRoot = useCallback((e: KeyboardEvent<HTMLElement>) => {
    onKeyDown?.(e);
    handleKeyInteraction(e, onToggle);
  }, [onKeyDown]);
  // endregion

  return (
    <summary role="button" id={summaryId} tabIndex={0} {...restProps} onClick={onClickSummary} onKeyDown={onKeyDownRoot}>
      {typeof children === 'function' ? children({ isOpen }) : children}
    </summary>
  );
};

const MemoizedAccordionSummary = memo(AccordionSummary);
MemoizedAccordionSummary.displayName = 'AccordionSummary';
AccordionSummary.displayName = 'AccordionSummary';

export default MemoizedAccordionSummary;
