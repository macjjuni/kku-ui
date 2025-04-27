import { KeyboardEvent, ReactNode } from 'react';
import { KBaseProp, KSizeProp } from '@/common/base/base.interface';


export interface KTextFieldProps extends KBaseProp, KSizeProp {

  // Value
  value: string;

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
  onFocus?: () => void;
  onBlur?: () => void;
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
  value: string;
}
