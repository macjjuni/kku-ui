import { HTMLAttributes, KeyboardEvent, ReactNode, RefObject } from 'react';


export const K_DROPDOWN_POSITIONS = [
  'top-start', 'top', 'top-end',
  'right-start', 'right', 'right-end',
  'bottom-start', 'bottom', 'bottom-end',
  'left-start', 'left', 'left-end',
] as const;
export type KDropdownPositionType = typeof K_DROPDOWN_POSITIONS[number];
export type KDropdownTriggerType = 'hover' | 'click';

export interface KDropdownOffsetType {
  x: number;
  y: number;
}

export interface KDropdownContextProps {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  onFocusContent: () => void;
  onBlurContent: (e: KeyboardEvent<HTMLElement>) => void;

  id: string;
  triggerRef: RefObject<HTMLDivElement | null>;
  contentRef: RefObject<HTMLDivElement | null>;

  trigger: KDropdownTriggerType;
  position: KDropdownPositionType;
}

export interface KDropdownRefs {
  onOpen: () => void;
  onClose: () => void;
}

export type DropdownElementType = 'div' | 'ul' | 'li' | 'p' | 'span';

export interface KDropdownProps extends HTMLAttributes<HTMLElement> {
  as?: DropdownElementType;
  children?: ReactNode;
  trigger?: KDropdownTriggerType;
  position?: KDropdownPositionType;

  onDropdownOpen?: () => void
  onDropdownClose?: () => void
}

export interface KDropdownTriggerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  disabled?: boolean;
}

export interface KDropdownContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  autoClose?: boolean;
  gap?: number;
  offset?: KDropdownOffsetType;

  container?: HTMLElement;
  zIndex?: number;
}
