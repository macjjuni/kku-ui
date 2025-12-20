import { HTMLAttributes, ReactNode } from 'react';
import { KButtonVariantType } from "src/components";
import { SizeType } from 'src/common/base/base.interface';

export interface KToggleButtonGroupProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  children: ReactNode;
  variant?: KButtonVariantType;
  size?: SizeType;

  multiple?: boolean;
}
