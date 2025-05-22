import { InputHTMLAttributes, KeyboardEvent, ReactNode } from 'react';
import { KBaseProp, KSizeProp } from '@/common/base/base.interface';


type ExceptedInputAttributeType = Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'value' | 'onChange'>;

export interface KTextFieldProps extends KBaseProp, KSizeProp, ExceptedInputAttributeType {

  // Value
  value?: string;

  // Label
  label?: string;
  labelAlign?: 'column' | 'row';
  labelGap?: number;

  // Options
  placeholder?: string;
  maxLength?: number;

  // Types
  disabled?: boolean;
  required?: boolean;
  clearable?: boolean;
  password?: boolean;

  // Custom
  leftAction?: ReactNode;
  rightAction?: ReactNode;

  // Event
  onChange?: (value: string) => void;
  onKeyDownEnter?: (e?: KeyboardEvent<HTMLInputElement>) => void;

  // Options
  autoComplete?: string;
  autoCorrect?: 'on' | 'off';
  autoCapitalize?: 'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters';

  // Styles
  width?: number;
  align?: 'left' | 'center' | 'right';
}

export interface KTextFieldRefs {
  focus: () => void;
  blur: () => void;
  value?: string;
}
