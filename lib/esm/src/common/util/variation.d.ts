import { VariantType } from '../../common/base/base.interface';
type GetSizesType = (clazz: string[], identity: string, size?: 'small' | 'medium' | 'large') => void;
export declare const initSize: GetSizesType;
type GetVariantType = (clazz: string[], identity: string, variant?: VariantType) => void;
export declare const initVariant: GetVariantType;
export declare const initDisabled: (clazz: string[], identity: string, disabled?: boolean) => void;
export {};
