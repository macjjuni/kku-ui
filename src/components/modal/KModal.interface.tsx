import { ReactNode } from 'react';
import { KBaseProp, KSizeProp } from '@/common/base/base.interface';


export interface KModalProps extends KBaseProp, KSizeProp {
  isOpen: boolean;

  title: string;
  content: ReactNode;
  footer?: ReactNode;
  isOverlay?: boolean;
}
