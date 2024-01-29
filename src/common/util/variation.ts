import { SizeType, sizes, VariantType, variants } from '@/common/base/base.interface.ts';
import { baseName } from '@/common/base/base.ts';


// region [🎁 - Size]

type GetSizesType = (clazz: string[], size?: SizeType, large?: boolean, medium?: boolean, small?: boolean) => void;

export const initSize: GetSizesType = (clazz, size, large, medium, small) => {

  const boolSizeArr = [large, medium, small].filter((s) => s);

  if ((size && (boolSizeArr.length > 0)) || boolSizeArr.length > 1) {
    throw Error('Multiple sizes are not allowed.'); // 중복 Prop 입력 에러 처리
  }

  if (size) {
    clazz.push(`${baseName}--${size}`);
  } else if (large) {
    clazz.push(`${baseName}--${sizes.large}`);
  } else if (medium) {
    clazz.push(`${baseName}--${sizes.medium}`);
  } else if (small) {
    clazz.push(`${baseName}--${sizes.small}`);
  } else {
    clazz.push(`${baseName}--${sizes.medium}`); // Default Size
  }
};

// endregion

// region [🍭 - Variant]

type GetVariantType = (clazz: string[], variant?: VariantType, primary?: boolean, outlined?: boolean) => void;
export const initVariant:GetVariantType = (clazz, variant, primary, outlined) => {

  if ((variant && (primary || outlined)) || (primary && outlined)) {
    throw Error('Multiple variant are not allowed.'); // 중복 Prop 입력 에러 처리
  }

  if (variant) {
    clazz.push(`${baseName}--${variant}`);
  } else if (primary) {
    clazz.push(`${baseName}--${variants.primary}`);
  } else if (outlined) {
    clazz.push(`${baseName}--${variants.outlined}`);
  } else {
    clazz.push(`${baseName}--default`);
  }
};

// endregion

// region [☑️ - Disabled]

export const initDisabled = (clazz: string[], disabled?: boolean) => {
  if (disabled) { clazz.push(`${baseName}--disabled}`); }
};

// endregion
