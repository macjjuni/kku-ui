import { HTMLAttributes, ReactNode } from 'react';
import { KButtonVariantType } from "@/components";

export interface KButtonGroupProps extends HTMLAttributes<HTMLDivElement> {
  variant?: KButtonVariantType
  children: ReactNode;
}
