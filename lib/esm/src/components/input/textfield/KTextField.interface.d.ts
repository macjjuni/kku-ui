import { KeyboardEvent, ReactNode } from 'react';
import { KBaseProp, KSizeProp } from '../../../common/base/base.interface';
declare const labelDirection: {
    readonly column: "column";
    readonly row: "row";
};
type LabelDirectionType = typeof labelDirection[keyof typeof labelDirection];
export interface KTextFieldProps extends KBaseProp, KSizeProp {
    value: string;
    label?: string;
    labelDirection?: LabelDirectionType;
    placeholder?: string;
    maxLength?: number;
    disabled?: boolean;
    required?: boolean;
    clearable?: boolean;
    password?: boolean;
    search?: boolean;
    rightAction?: ReactNode;
    onChange?: (value: string) => void;
    onFocus?: () => void;
    onBlur?: () => void;
    onKeyDownEnter?: (e?: KeyboardEvent<HTMLInputElement>) => void;
    onSearch?: () => void;
    width?: string;
    fullWidth?: boolean;
}
export interface KTextFieldRefs {
    focus: () => void;
    blur: () => void;
    validate: () => void;
    value: string;
}
export {};
