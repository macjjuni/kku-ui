import { ReactNode } from 'react';
import { KBaseProp } from '@/common/base/base.interface';
import { KIconSize } from '@/components';

export const KAccordionSizes = ['small', 'medium', 'large'] as const;
export type KAccordionSizeType = (typeof KAccordionSizes)[number];


export interface KAccordionProps extends KBaseProp {

  summary: string | ReactNode;
  children: ReactNode;

  size?: KAccordionSizeType;

  summaryIcon?: string | ReactNode;
  summaryIconSize?: KIconSize | number;

  open?: boolean;

  width?: number;
}
