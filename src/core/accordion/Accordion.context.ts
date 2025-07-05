import { createContext, useContext } from 'react';
import { AccordionContextProps } from './Accordion.interface';

export const AccordionContext = createContext<AccordionContextProps | undefined>(undefined);

export const useAccordionContext = () => {
  const context = useContext(AccordionContext);
  if (context === undefined) {
    throw new Error('useAccordionContext는 AccordionProvider 내에서 사용되어야 합니다.');
  }
  return context;
};
