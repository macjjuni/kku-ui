
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


// region [☑️ - Disabled]

export const initDisabled = (clazz: string[], identity: string, disabled?: boolean) => {
  if (disabled) {
    clazz.push(`${identity}--disabled`);
  }
};

// endregion
