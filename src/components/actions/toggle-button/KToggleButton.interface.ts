import { HTMLAttributes, ReactNode } from 'react';
import { KButtonVariantType } from "@/components";

export interface KToggleButtonProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  variant?: KButtonVariantType
  children: ReactNode;

  multiple?: boolean;
}
