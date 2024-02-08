import { forwardRef, memo, Ref, useCallback, useImperativeHandle, useMemo, useRef, useId, ChangeEvent, CSSProperties } from 'react';
import { KTextFieldProps, KTextFieldRefs } from '@/components/textfield/KTextField.interface';
import { initDisabled, initSize } from '@/common/util/variation';
import { getIdentityName } from '@/common/base/base';

const identity = getIdentityName('text-field');

const KTextField = forwardRef((props: KTextFieldProps, ref: Ref<KTextFieldRefs>) => {

  // region [Hooks]

  const inputRef = useRef<HTMLInputElement>(null);
  const uniqueId = `${useId()}-${identity}-input`;

  useImperativeHandle(ref, () => ({
    focus: () => { inputRef.current?.focus(); },
    blur: () => { inputRef.current?.blur(); },
    validate: () => {},
    value: props.value,
  }));

  // endregion


  // region [Styles]

  const rootClass = useMemo(() => {
    const clazz = [identity];

    if (props.className) { clazz.push(props.className); }

    initSize(clazz, identity, props.size, props.large, props.medium, props.small);
    initDisabled(clazz, identity, props.disabled);

    if (props.labelDirection && (props.row || props.column)) {
      throw Error('Error: labelDirection and row or column attributes cannot be duplicated.');
    }
    if (props.labelDirection) { clazz.push(`${identity}--${props.labelDirection}`); }
    if (props.column) { clazz.push(`${identity}--column`); }
    if (props.row) { clazz.push(`${identity}--row`); }
    if (!props.labelDirection && !props.column && !props.row) {
      clazz.push(`${identity}--column`);
    }

    if (props.password) { clazz.push(`${identity}__input--password`); }

    return clazz.join(' ');
  }, [
    props.className, props.large, props.medium, props.small, props.size, props.disabled,
    props.password, props.labelDirection, props.column, props.row]);


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
      {
        props.label && (
          <label htmlFor={props.id ? props.id : uniqueId} className={`${identity}__label`}>
            {props.label}
          </label>
        )
      }
      <div className={`${identity}__wrap`}>
        <input
            id={props.id ? props.id : uniqueId}
            ref={inputRef}
            className={`${identity}__input`}
            type={props.password ? 'password' : 'input'}
            value={props.value}
            onChange={onChangeValue}
            disabled={props.disabled}
            // aria-describedby='message' // FIXME: Error Message - 웹접근성
        />
      </div>
    </div>
  );
});

KTextField.displayName = 'KTextField';

KTextField.defaultProps = {};
export default memo(KTextField);
