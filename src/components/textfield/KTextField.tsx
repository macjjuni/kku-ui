import { ChangeEvent, CSSProperties, forwardRef, memo, Ref, useCallback, useImperativeHandle, useMemo, useRef } from 'react';
import { KTextFieldProps, KTextFieldRefs } from '@/components/textfield/KTextField.interface';
import { initDisabled, initSize } from '@/common/util/variation';
import { getIdentityName } from '@/common/base/base';


const identity = getIdentityName('text-field');


const KTextField = forwardRef((props: KTextFieldProps, ref: Ref<KTextFieldRefs>) => {

  // region [Hooks]

  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    focus: () => { inputRef.current?.focus(); },
    blur: () => { inputRef.current?.blur(); },
    validate: () => {},
  }));

  // endregion


  // region [Styles]

  const rootClass = useMemo(() => {
    const clazz = [identity];

    if (props.className) { clazz.push(props.className); }

    initSize(clazz, identity, props.size, props.large, props.medium, props.small);
    initDisabled(clazz, identity, props.disabled);

    return clazz.join(' ');
  }, [props.className, props.large, props.medium, props.small, props.size, props.disabled]);


  const rootStyle = useMemo(() => {

    const styles: CSSProperties = props.style || {};

    if (props.color) {
      styles.color = props.color;
      styles.borderColor = props.color;
    }
    if (props.width) { styles.width = props.width; }
    return styles;
  }, [props.style, props.color]);

  // endregion


  // region [Events]

  const onChangeValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const changeValue = e.target.value;
    if (props.onChange) props.onChange(changeValue);
  }, []);

  // endregion


  return (
    <div className={rootClass} style={rootStyle}>
      <input
        ref={inputRef}
        className={`${identity}__input`}
        type='input'
        value={props.value}
        onChange={onChangeValue}
        disabled={props.disabled}
      />
    </div>
  );
});

KTextField.displayName = 'KTextField';

export default memo(KTextField);
