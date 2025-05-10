import { ReactNode } from 'react';
import { KBaseProp, MotionType } from '@/common/base/base.interface';

export type KDropHolderPositionType =
  | 'top-start'
  | 'top'
  | 'top-end'
  | 'right-start'
  | 'right'
  | 'right-end'
  | 'bottom-start'
  | 'bottom'
  | 'bottom-end'
  | 'left-start'
  | 'left'
  | 'left-end'

export type KDropHolderTriggerType = 'hover' | 'click'

export interface KDropHolderOffsetType {
  x?: number;
  y?: number;
}

export interface KDropHolderProps extends KBaseProp, MotionType {

  trigger?: KDropHolderTriggerType;
  position?: KDropHolderPositionType;
  offset?: KDropHolderOffsetType;
  contentWidth?: number;

  openDelay?: number;
  closeDelay?: number;
  autoClose?: boolean;

  children: ReactNode;
  content: ReactNode;

  onClick?: () => void;
  onHover?: () => void;
}

export interface KDropHolderRefs {
  open: () => void;
  close: () => void;
}
