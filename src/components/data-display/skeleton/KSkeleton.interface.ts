import { KBaseProp } from '@/common/base/base.interface';

export interface KSkeletonProps extends KBaseProp {
  width?: string | number;
  height?: string | number;
  borderRadius: string | number;

  animation?: 'pulse' | 'wave';

  onClick?: () => void;
}
