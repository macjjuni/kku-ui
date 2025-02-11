import { KBaseProp, KSizeProp } from '../../../common/base/base.interface';
export interface KSwitchProps extends KBaseProp, KSizeProp {
    value: boolean;
    toggleColor?: string;
    bgColor?: string;
    disabled?: boolean;
    onChange: (value: boolean) => void;
}
export interface KSwitchRefs {
    toggle: () => void;
}
