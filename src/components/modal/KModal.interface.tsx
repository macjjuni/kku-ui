import { ReactNode } from 'react';
import { KBaseProp, KSizeProp } from '@/common/base/base.interface';


type KModalAnimation = 'updown' | 'scale';


export interface KModalProps extends KBaseProp, KSizeProp {
  isOpen: boolean;
  onClose: () => void;

  title: string;
  content: ReactNode;
  footer?: ReactNode;

  isOverlay?: boolean;
  overlayOpacity?: number;
  overlayClosable?: boolean;

  rounded?: boolean;
  borderRadius?: string;

  // styles
  headerClass?: string;
  contentClass?: string;
  footerClass?: string;

  animation?: KModalAnimation;
}
