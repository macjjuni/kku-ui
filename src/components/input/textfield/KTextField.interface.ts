import { ReactNode } from 'react';
import { TextFieldProps } from '@/core';
import { SizeType } from '@/common/base/base.interface';


export interface KTextFieldProps extends Omit<TextFieldProps, 'onChange' | 'size'> {
  value?: string;

  // Content
  leftContent?: ReactNode;
  rightContent?: ReactNode;

  // Event
  onChange?: (value: string) => void;

  // Options
  autoComplete?: string;
  autoCorrect?: 'on' | 'off';
  autoCapitalize?: 'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters';

  // Styles
  size?: SizeType;
  width?: number | string;
  align?: 'left' | 'center' | 'right';
  required?: boolean;

  // APIS
  rules?: (((value?: string) => string | boolean) | Promise<(value?: string) => string | boolean>)[];
}

export interface KTextFieldRefs {
  focus: () => void;
  blur: () => void;
  value?: string;
  onValidate: () => Promise<boolean> | boolean;
}
