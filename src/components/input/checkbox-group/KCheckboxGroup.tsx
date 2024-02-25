import { memo, useCallback, useMemo } from 'react';
import { KCheckbox } from '@/components';
import { KCheckboxGroupProps } from '@/components/input/checkbox-group/KCheckboxGroup.interface';
import { initSize } from '@/common/util/variation';

const KCheckboxGroup = (props: KCheckboxGroupProps) => {


  // region [Hooks]
  // endregion


  // region [Styles]

  const rootStyle = useMemo(() => {
    const style = props.style ? props.style : {};

    if (props.gap) { style.gap = props.gap; }
    return style;
  }, [props.style, props.gap]);

  const rootClass = useMemo(() => {
    const clazz: string[] = [];

    initSize(clazz, 'k-checkbox-group', props.size, props.large, props.medium, props.small);
    if (props.direction === 'row') {
      clazz.push('k-checkbox-group--row');
    }
    if (props.direction === 'column') {
      clazz.push('k-checkbox-group--column');
    }

    return clazz.join(' ');
  }, [props.className, props.direction, props.large, props.medium, props.small, props.size]);

  // endregion


  // region [Events]

  const onChangeCheckbox = useCallback((checked: boolean, itemValue: string) => {

    if (checked) {
      props.onChange([...props.value, itemValue]);
    } else {
      props.onChange(props.value.filter((checkValue) => checkValue !== itemValue));
    }
  }, [props.value, props.items, props.onChange]);

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
    <div id={props.id} style={rootStyle} className={`k-checkbox-group ${rootClass}`}>
      {
        props.items?.map((item) => (
          <KCheckbox
                        key={item.value}
                        label={item.label}
                        value={props.value?.includes(item.value)}
                        onChange={(checked) => { onChangeCheckbox(checked, item.value); }}
                        size={childCheckboxSize}
                        shape={props.shape}
                        color={props.color}
                        disabled={item.disabled}
                        defaultCheck={item.defaultCheck}
          />
        ))
      }
    </div>
  );
};

KCheckboxGroup.defaultProps = {
  item: [],
  direction: 'row',
};

export default memo(KCheckboxGroup);
