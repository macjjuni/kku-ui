import { ReactNode } from 'react';
import { KBaseProp, KSizeProp } from '@/common/base/base.interface';


export interface KModalProps extends KBaseProp, KSizeProp {
  isOpen: boolean;
  onClose: () => void;

  title: string;
  content: ReactNode;
  footer?: ReactNode;

  overlay?: boolean;
  overlayClosable?: boolean;
}
