import { Dispatch, ReactNode, SetStateAction } from 'react';
import { KBaseProp } from '@/common/base/base.interface';

export const KModalSizes = { medium: 'medium', small: 'small', large: 'large' } as const;
export type KModalSizeType = (typeof KModalSizes)[keyof typeof KModalSizes];

export interface KModalProps extends KBaseProp {
  isOpen: boolean;
  setIsOpen?: Dispatch<SetStateAction<boolean>>
  onClose?: () => void;

  size?: KModalSizeType;
  animation?: 'slide' | 'fade' | 'scale';

  title?: string;
  content: ReactNode;
  footer?: ReactNode;

  width?: number;
  isOverlay?: boolean;
  overlayOpacity?: number;
  overlayClosable?: boolean;
  escClosable?: boolean;

  // styles
  headerClass?: string;
  contentClass?: string;
  footerClass?: string;
}
