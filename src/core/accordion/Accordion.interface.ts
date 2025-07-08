import { Dispatch, HTMLAttributes, ReactNode, RefObject, SetStateAction } from 'react';
import { PanelProps } from "@/core";


export interface AccordionContextProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  root: RefObject<HTMLDetailsElement | null>;
  summaryId: string;
}

export interface AccordionProps extends PanelProps<'details'> {
  defaultOpen?: boolean;
  children?: ReactNode;
}

export interface AccordionSummaryProps extends Omit<HTMLAttributes<HTMLElement>, 'children'> {
  children?: ReactNode | (({ isOpen }: { isOpen: boolean }) => ReactNode);
}

export interface AccordionContentProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  children?: ReactNode | (({ isOpen }: { isOpen: boolean }) => ReactNode);
}
