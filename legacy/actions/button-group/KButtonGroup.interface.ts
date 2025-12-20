import { HTMLAttributes, ReactNode } from 'react';
import { KButtonVariantType } from "src/components";
import { SizeType } from 'src/common/base/base.interface';

export interface KButtonGroupProps extends HTMLAttributes<HTMLDivElement> {
  variant?: KButtonVariantType
  size?: SizeType
  children: ReactNode;
}
