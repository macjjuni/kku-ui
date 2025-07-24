import { HTMLAttributes, ReactNode } from 'react';
import { KButtonVariantType } from "@/components";

export interface KToggleButtonGroupProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  variant?: KButtonVariantType
  children: ReactNode;

  multiple?: boolean;
}
