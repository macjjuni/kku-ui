import { HTMLAttributes, ReactNode } from 'react';
import { KButtonVariantType } from "@/components";
import { SizeType } from '@/common/base/base.interface';

export interface KButtonGroupProps extends HTMLAttributes<HTMLDivElement> {
  variant?: KButtonVariantType
  size?: SizeType
  children: ReactNode;
}
