import { ReactNode } from 'react';
import { KBaseProp, KSizeProp } from '@/common/base/base.interface';

export interface KCardProps extends KBaseProp, KSizeProp {

  children?: ReactNode;

  title?: string;
  subTitle?: string;

  disabled?: boolean;
  clickable?: boolean;

  // Styles
  width?: number;
  height?: number;
  borderRadius?: number;
  borderColor?: string;
  padding?: number;

  color?: string;
  fontColor?: string;

  onClick?: () => void;
}
