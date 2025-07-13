import { Dispatch, HTMLAttributes, ReactNode, SetStateAction } from 'react';

export const KMODAL_SIZES = ['medium', 'small', 'large'] as const;
export type KModalSizeType = (typeof KMODAL_SIZES)[number];


export interface KModalContextProps {
  isOpen: boolean;
  title: string | null;
  setTitle: Dispatch<SetStateAction<string | null>>;
}


export interface KModalProps extends HTMLAttributes<HTMLElement> {
  isOpen: boolean;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
  onClose?: () => void;
  container?: HTMLElement;
  children: ReactNode;

  size?: KModalSizeType;
  animation?: 'slide' | 'fade' | 'scale';

  // Styles
  width?: number | string;
  height?: number | string;

  // Options
  isOverlay?: boolean;
  overlayOpacity?: number;
  overlayClosable?: boolean;
  escClosable?: boolean;
}


export interface KModalHeaderProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  children: ReactNode;
}

export interface KModalContentProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export interface KModalFooterProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  align?: 'left' | 'center' | 'right';
}