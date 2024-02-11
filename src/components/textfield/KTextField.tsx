import { ChangeEvent, CSSProperties, forwardRef, memo, Ref, useCallback,
  useId, useImperativeHandle, useMemo, useRef, useState } from 'react';
import { KTextFieldProps, KTextFieldRefs } from '@/components/textfield/KTextField.interface';
import { initDisabled, initSize } from '@/common/util/variation';
import { getIdentityName } from '@/common/base/base';

const identity = getIdentityName('text-field');

const KTextField = forwardRef((props: KTextFieldProps, ref: Ref<KTextFieldRefs>) => {

  // region [Hooks]

  const inputRef = useRef<HTMLInputElement>(null);
  const uniqueId = `${useId()}-${identity}-input`;
  const [isFocus, setIsFocus] = useState<boolean>(false);

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
    if (props.required) { clazz.push(`${identity}__input--required`); }

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

  const labelClass = useMemo(() => {
    const clazz = [`${identity}__label__text`];

    if (!props.label) { return clazz.join(' '); }
    if (isFocus) { clazz.push(`${identity}__label__text--focus`); }

    return clazz.join(' ');
  }, [props.label, isFocus]);

  // endregion


  // region [Events]

  const onChangeValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const changeValue = e.target.value;
    if (props.onChange) props.onChange(changeValue);
  }, []);

  const onFocus = useCallback(() => {
    if (!props.label) { return; }
    setIsFocus(true);
  }, [props.label]);

  const onblur = useCallback(() => {
    if (!props.label) { return; }
    setIsFocus(false);
  }, [props.label]);

  // endregion


  return (
    <div className={rootClass} style={rootStyle} data-testid='k-text-field'>
      <div className={`${identity}__label__container`}>
        {
          props.label && (
            <label htmlFor={props.id ? props.id : uniqueId} className={labelClass} data-testid='k-text-field-label'>
              {props.label}
            </label>
          )
        }
        {
          props.rightAction && (
            (!props.labelDirection && !props.row)
                || (props.labelDirection === 'column' && !props.column)
                || (!props.labelDirection && props.column)
          ) && (
            <div className={`${identity}__label__right-action`}>
              {props.rightAction}
            </div>
          )
        }
      </div>
      <div className={`${identity}__wrap`}>
        <input
            id={props.id ? props.id : uniqueId}
            ref={inputRef}
            className={`${identity}__input`}
            type={props.password ? 'password' : 'input'}
            value={props.value}
            onChange={onChangeValue}
            onFocus={onFocus}
            onBlur={onblur}
            disabled={props.disabled}
            placeholder={props.placeholder}
            maxLength={props.maxLength}
            // aria-describedby='message' // FIXME: Error Message - 웹접근성
        />
      </div>
    </div>
  );
});

KTextField.displayName = 'KTextField';

KTextField.defaultProps = {};
export default memo(KTextField);
