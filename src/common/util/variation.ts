import { VariantType } from '@/common/base/base.interface';

// region [🎁 - Size]

type GetSizesType = (clazz: string[], identity: string, size?: 'small' | 'medium' | 'large') => void;

export const initSize: GetSizesType = (clazz, identity, size) => {

  if (size) {
    clazz.push(`${identity}--${size}`);
  } else {
    clazz.push(`${identity}--medium`);
  }
};

// endregion

// region [🍭 - Variant]

type GetVariantType =
  (clazz: string[], identity: string, variant?: VariantType) => void;

export const initVariant: GetVariantType = (clazz, identity, variant) => {

  if (variant) {
    clazz.push(`${identity}--${variant}`);
  } else {
    clazz.push(`${identity}--outlined`);
  }
};

// endregion

// region [☑️ - Disabled]

export const initDisabled = (clazz: string[], identity: string, disabled?: boolean) => {
  if (disabled) {
    clazz.push(`${identity}--disabled`);
  }
};

// endregion
