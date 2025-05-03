import { KeyboardEvent } from 'react';
import { KBaseProp, KSizeProp } from '@/common/base/base.interface';


export interface KSelectItemType {
  ['value']: string;
  ['label']: string;
}


export interface KSelectProps extends KBaseProp, KSizeProp {

  value?: string; // ✨ Required ✨
  items: KSelectItemType[];

  placeholder?: string;
  noDataText?: string;

  disabled?: boolean;

  // Event
  onChange: (value: string) => void; // ✨ Required ✨
  onFocus?: () => void;
  onBlur?: () => void;

  // Styles
  width?: number;
}


export interface KSelectRefs {
  open: () => void;
  close: () => void;
}

export interface KSelectListProps {
  value?: string;
  items: KSelectItemType[];
  noDataText?: string;
  onFocus: () => void;
  onClick: (item: KSelectItemType | null) => void;
  onKeyDown: (e: KeyboardEvent<HTMLLIElement>, item: KSelectItemType | null, idx: number) => void;
}
