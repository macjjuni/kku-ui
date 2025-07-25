import { HTMLAttributes, ReactNode } from 'react';
import { KButtonVariantType } from "@/components";
import { SizeType } from '@/common/base/base.interface';

export interface KToggleButtonGroupProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  children: ReactNode;
  variant?: KButtonVariantType;
  size?: SizeType;

  multiple?: boolean;
}
