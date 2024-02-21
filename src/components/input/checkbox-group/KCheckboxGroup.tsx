import { memo, useCallback, useEffect } from 'react';
import { KCheckbox } from '@/components';
import { KCheckboxGroupProps } from '@/components/input/checkbox-group/KCheckboxGroup.interface';

const KCheckboxGroup = ({ value, items, onChange }: KCheckboxGroupProps) => {


  // region [Hooks]

  // endregion


  // region [Events]

  const onChangeCheckbox = useCallback((checked: boolean, itemValue: string) => {

    if (checked) {
      const appendedValue = [...value, itemValue];
      onChange(appendedValue);
    } else {
      const removedValue = value.filter((checkValue) => checkValue !== itemValue);
      onChange(removedValue);
    }
  }, [value, items, onChange]);

  // endregion


  // region [Life Cycles]


  useEffect(() => {
    console.log(value);
  }, [value]);

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
