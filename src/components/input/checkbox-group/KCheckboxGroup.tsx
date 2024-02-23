import { memo, useCallback } from 'react';
import { KCheckbox } from '@/components';
import { KCheckboxGroupProps } from '@/components/input/checkbox-group/KCheckboxGroup.interface';

const KCheckboxGroup = ({ value, items, onChange, sharp, color }: KCheckboxGroupProps) => {


  // region [Hooks]
  // endregion


  // region [Events]

  const onChangeCheckbox = useCallback((checked: boolean, itemValue: string) => {

    if (checked) {
      onChange([...value, itemValue]);
    } else {
      onChange(value.filter((checkValue) => checkValue !== itemValue));
    }
  }, [value, items, onChange]);

  // endregion


  // region [Life Cycles]
  // endregion


  // region [Templates]
  // endregion

  return (
    <>
      {
        items?.map((item) => (
          <KCheckbox
            key={item.value}
            label={item.label}
            value={value?.includes(item.value)}
            onChange={(checked) => { onChangeCheckbox(checked, item.value); }}
            sharp={sharp}
            color={color}
            disabled={item.disabled}
            defaultCheck={item.defaultCheck}
          />
        ))
      }
    </>
  );
};

KCheckboxGroup.defaultProps = {
  item: [],
};

export default memo(KCheckboxGroup);
