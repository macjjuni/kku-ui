import { CSSProperties, memo, useCallback, useMemo } from 'react';
import { KCheckbox } from '@/components';
import { KCheckboxGroupProps } from '@/components/input/checkbox-group/KCheckboxGroup.interface';
import { initSize } from '@/common/util/variation';

const KCheckboxGroup = ({ id, className, style, items = [], value, color, direction = 'row', gap,
  onChange, size, large, medium, small }: KCheckboxGroupProps) => {

  // region [Hooks]
  // endregion


  // region [Styles]

  const rootStyle = useMemo(() => {
    const styles:CSSProperties = { ...style };

    if (gap) { styles.gap = gap; }
    return style;
  }, [style, gap]);

  const rootClass = useMemo(() => {
    const clazz: string[] = [];

    initSize(clazz, 'k-checkbox-group', size, large, medium, small);

    if (className) {
      clazz.push(className);
    }
    if (direction === 'row') {
      clazz.push('k-checkbox-group--row');
    }
    if (direction === 'column') {
      clazz.push('k-checkbox-group--column');
    }

    return clazz.join(' ');
  }, [className, direction, large, medium, small, size]);

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

  const childCheckboxSize = useMemo(() => {

    if (rootClass.includes('small')) { return 'small'; }
    if (rootClass.includes('medium')) { return 'medium'; }
    if (rootClass.includes('large')) { return 'large'; }
  }, [rootClass]);

  // endregion

  return (
    <div id={id} style={rootStyle} className={`k-checkbox-group ${rootClass}`} data-testid='k-checkbox-group'>
      {
        items?.map((item) => (
          <KCheckbox key={item.value} label={item.label} value={value?.includes(item.value)} size={childCheckboxSize}
              onChange={(checked) => { onChangeCheckbox(checked, item.value); }}
              // shape={shape}
              color={color} disabled={item.disabled} defaultCheck={item.defaultCheck} />
        ))
      }
    </div>
  );
};

export default memo(KCheckboxGroup);
