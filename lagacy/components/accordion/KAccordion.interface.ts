import { ReactNode } from 'react';
import { KBaseProp, KSizeProp, SizeType } from '@/common/base/base.interface';

export interface KAccordionProps extends KBaseProp, KSizeProp {

  summary: string | ReactNode;
  children: ReactNode;

  summaryIcon?: string | ReactNode;
  summaryIconSize?: SizeType | number;

  open?: boolean;

  width?: string;
}
