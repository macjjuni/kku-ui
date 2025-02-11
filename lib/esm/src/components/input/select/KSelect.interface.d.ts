import { KeyboardEvent } from 'react';
import { KBaseProp, KSizeProp } from '../../../common/base/base.interface';
export interface KSelectItemType {
    ['value']: string;
    ['title']: string;
}
export interface KSelectProps extends KBaseProp, KSizeProp {
    value: string;
    items: KSelectItemType[];
    placeholder?: string;
    noDataText?: string;
    disabled?: boolean;
    onChange: (value: string) => void;
    onFocus?: () => void;
    onBlur?: () => void;
    width?: string;
}
export interface KSelectRefs {
    open: () => void;
    close: () => void;
}
export interface KSelectListProps {
    id: string;
    open: boolean;
    items: KSelectItemType[];
    noDataText?: string;
    onFocus: () => void;
    onClick: (item: KSelectItemType | null) => void;
    onKeyDown: (e: KeyboardEvent<HTMLLIElement>, item: KSelectItemType | null, idx: number) => void;
}
