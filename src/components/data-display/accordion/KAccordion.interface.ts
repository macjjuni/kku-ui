import { ReactNode } from 'react';
import { KBaseProp, SizeType } from '@/common/base/base.interface';

export const KAccordionSizes = { large: 'large', medium: 'medium', small: 'small' } as const;
export type KAccordionSizeType = (typeof KAccordionSizes)[keyof typeof KAccordionSizes];


export interface KAccordionProps extends KBaseProp {

  summary: string | ReactNode;
  children: ReactNode;

  size?: KAccordionSizeType;

  summaryIcon?: string | ReactNode;
  summaryIconSize?: SizeType | number;

  open?: boolean;

  width?: number;
}
