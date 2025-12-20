import { HTMLAttributes } from 'react';
import { SizeType } from 'src/common/base/base.interface';

export interface KSpinnerProps extends HTMLAttributes<HTMLDivElement> {
  size?: SizeType | number;
  color?: string;
}
