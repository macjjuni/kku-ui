import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface SwitchProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'value' | 'onChange' | 'type'> {
  value: boolean
  onChange?: (val: boolean) => void
  children?: ReactNode
}