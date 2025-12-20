import { CSSProperties, HTMLAttributes, KeyboardEvent } from 'react';
import { SizeType } from 'src/common/base/base.interface';
import { KInputValidateType } from 'src/components';


export interface KSelectItemType {
  ['value']: string | number;
  ['label']: string;
}

export interface KSelectProps extends KInputValidateType, Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  value?: string | number;
  items: KSelectItemType[];

  label?: string;
  placeholder?: string;
  noDataText?: string;

  disabled?: boolean;
  required?: boolean;

  // Event
  onChange: (val: string | number) => void;
  onFocus?: () => void;
  onBlur?: () => void;

  // Styles
  size?: SizeType;
  width?: number;

  id?: string;
  className?: string;
  style?: CSSProperties;
}


export interface KSelectRefs {
  onOpen: () => void;
  onClose: () => void;
  onValidate: () => Promise<boolean> | boolean;
}

export interface KSelectListProps {
  value?: string;
  items: KSelectItemType[];
  noDataText?: string;
  onFocus: () => void;
  onClick: (item: KSelectItemType | null) => void;
  onKeyDown: (e: KeyboardEvent<HTMLLIElement>, item: KSelectItemType | null, idx: number) => void;
}
