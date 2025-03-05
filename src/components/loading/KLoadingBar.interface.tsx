import { KBaseProp } from '@/common/base/base.interface';


export interface KLoadingBarProps extends KBaseProp {
  totalBlocks?: number;
  value: number;
  width?: string | number;
  blockHeight: number;
  gap?: number;
  barColor?: string;
  blankColor?: string;
  borderWidth?: number;
  borderColor?: string;
  padding?: number;
}
