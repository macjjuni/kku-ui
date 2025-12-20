import { ReactNode } from 'react';
import { SizeType } from 'src/common/base/base.interface';
import { AccordionProps } from 'src/core/accordion';


export interface KAccordionProps extends AccordionProps {

  summary: string | ReactNode;
  children: ReactNode;

  size?: SizeType;
  width?: number;
}