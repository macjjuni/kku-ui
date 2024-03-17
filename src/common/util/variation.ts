import { SizeType, sizes, VariantType, variants } from '@/common/base/base.interface';

// region [🎁 - Size]

type GetSizesType =
    (clazz: string[], identity: string, size?: SizeType, large?: boolean, medium?: boolean, small?: boolean)
    => void;

export const initSize: GetSizesType = (clazz, identity, size, large, medium, small) => {

  const boolSizeArr = [large, medium, small].filter((s) => s);

  if ((size && (boolSizeArr.length > 0)) || boolSizeArr.length > 1) {
    throw Error('Error: Multiple sizes are not allowed.'); // 중복 Prop 입력 에러 처리
  }

  if (size) {
    clazz.push(`${identity}--${size}`);
  } else if (large) {
    clazz.push(`${identity}--${sizes.large}`);
  } else if (medium) {
    clazz.push(`${identity}--${sizes.medium}`);
  } else if (small) {
    clazz.push(`${identity}--${sizes.small}`);
  } else {
    clazz.push(`${identity}--${sizes.medium}`); // Default Size
  }
};

// endregion

// region [🍭 - Variant]

type GetVariantType =
    (clazz: string[], identity: string, variant?: VariantType, primary?: boolean, outlined?: boolean)
    => void;

export const initVariant:GetVariantType = (clazz, identity, variant, contained, outlined) => {

  if ((variant && (contained || outlined)) || (contained && outlined)) {
    throw Error('Multiple variant are not allowed.'); // 중복 Prop 입력 에러 처리
  }

  if (variant) {
    clazz.push(`${identity}--${variant}`);
  } else if (contained) {
    clazz.push(`${identity}--${variants.contained}`);
  } else if (outlined) {
    clazz.push(`${identity}--${variants.outlined}`);
  } else {
    clazz.push(`${identity}--default`);
  }
};

// endregion

// region [☑️ - Disabled]

export const initDisabled = (clazz: string[], identity: string, disabled?: boolean) => {
  if (disabled) { clazz.push(`${identity}--disabled`); }
};

// endregion
