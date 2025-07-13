import { ReactNode } from 'react';
import { SizeType } from '@/common/base/base.interface';
import { AccordionProps } from '@/core/accordion';


export interface KAccordionProps extends AccordionProps {

  summary: string | ReactNode;
  children: ReactNode;

  size?: SizeType;
  width?: number;
}