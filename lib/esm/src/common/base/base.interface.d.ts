import { CSSProperties } from 'react';
export interface KBaseProp {
    id?: string;
    className?: string;
    style?: CSSProperties;
}
export declare const sizes: {
    readonly medium: "medium";
    readonly small: "small";
};
export type SizeType = (typeof sizes)[keyof typeof sizes];
export interface KSizeProp {
    size?: SizeType;
}
export declare const variants: {
    readonly outlined: "outlined";
    readonly contained: "contained";
};
export type VariantType = (typeof variants)[keyof typeof variants];
export interface KVariantProp {
    variant?: VariantType;
}
