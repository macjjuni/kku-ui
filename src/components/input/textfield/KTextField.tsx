import {
  ChangeEvent, CSSProperties, forwardRef, memo, Ref, useCallback,
  useId, useImperativeHandle, useMemo, useRef, useState,
} from 'react';
import { KTextFieldProps, KTextFieldRefs } from '@/components/input/textfield/KTextField.interface';
import { initDisabled, initSize } from '@/common/util/variation';
import { KIcon } from '@/components';


const KTextField = forwardRef((props: KTextFieldProps, ref: Ref<KTextFieldRefs>) => {

  // region [Hooks]

  const inputRef = useRef<HTMLInputElement>(null);
  const uniqueId = `k-text-field-input-${useId()}`;
  const [isPasswdShow, setIsPasswdShow] = useState<boolean>(false);
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
    const clazz = [];

    if (props.className) { clazz.push(props.className); }

    initSize(clazz, 'k-text-field', props.size, props.large, props.medium, props.small);
    initDisabled(clazz, 'k-text-field', props.disabled);

    if (props.labelDirection && (props.row || props.column)) {
      throw Error('Error: labelDirection and row or column attributes cannot be duplicated.');
    }
    if (props.labelDirection) { clazz.push(`k-text-field--${props.labelDirection}`); }
    if (props.column) { clazz.push('k-text-field--column'); }
    if (props.row) { clazz.push('k-text-field--row'); }
    if (!props.labelDirection && !props.column && !props.row) {
      clazz.push('k-text-field--column');
    }

    if (props.password) { clazz.push('k-text-field__input--password'); }
    if (props.clearable) { clazz.push('k-text-field__input--clearable'); }

    return clazz.join(' ');
  }, [
    props.className, props.large, props.medium, props.small, props.size, props.disabled,
    props.password, props.labelDirection, props.column, props.row]);


  const rootStyle = useMemo(() => {

    const styles: CSSProperties = props.style || {};

    if (props.width) { styles.width = props.width; }
    if (props.fullWidth) { styles.width = '100%'; }

    return styles;
  }, [props.style, props.fullWidth]);

  const labelClass = useMemo(() => {
    const clazz = [];

    if (!props.label) { return ''; }
    if (isFocus) { clazz.push('k-text-field__label__text--focus'); }

    return clazz.join(' ');
  }, [props.label, isFocus]);

  const closeIconSize = useMemo(() => {

    if (props.size === 'large' || props.large) { return 16; }
    if (!props.size || props.size === 'medium' || props.medium) { return 16; }
    if (props.size === 'small' || props.small) { return 14; }
  }, [props.size]);

  const passwordIconSize = useMemo(() => {

    if (props.size === 'large' || props.large) { return 22; }
    if (!props.size || props.size === 'medium' || props.medium) { return 20; }
    if (props.size === 'small' || props.small) { return 18; }
  }, [props.size]);

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

  const onClear = useCallback(() => {
    if (props.clearable && props.onChange) {
      props.onChange('');
    }
  }, [props.clearable]);

  const onPasswordShow = useCallback(() => {
    setIsPasswdShow((prev) => !prev);
  }, [props.password, isPasswdShow]);

  // endregion


  return (
    <div className={`k-text-field ${rootClass}`} style={rootStyle} data-testid='k-text-field'>
      <div className='k-text-field__label__container'>
        {
          props.label && (
            <label
                            htmlFor={props.id ? props.id : uniqueId}
                            className={`k-text-field__label__text ${labelClass}`}
                            data-testid='k-text-field-label'
            >
              {props.label}
              {props.required && <span className='k-text-field__label__text__required'>*</span>}
            </label>
          )
        }
        {
          props.rightAction && (
            (!props.labelDirection && !props.row)
                        || (props.labelDirection === 'column' && !props.column)
                        || (!props.labelDirection && props.column)
          ) && (
            <div className='k-text-field__label__right-action'>
              {props.rightAction}
            </div>
          )
        }
      </div>
      <div className='k-text-field__input__container'>
        <input
            id={props.id ? props.id : uniqueId}
            ref={inputRef}
            className='k-text-field__input'
            type={(props.password && !isPasswdShow) ? 'password' : 'input'}
            value={props.value}
            onChange={onChangeValue}
            onFocus={onFocus}
            onBlur={onblur}
            disabled={props.disabled}
            placeholder={props.placeholder}
            maxLength={props.maxLength}
            data-testid='k-text-field-input'
            // aria-describedby='message' // FIXME: Error Message - 웹접근성
        />
        {
          props.password && (
            isPasswdShow
              ? (
                <KIcon
                    className='k-text-field__icon'
                    icon='visibility_off'
                    size={passwordIconSize}
                    clickable
                    onClick={onPasswordShow}
                    disabled={props.disabled}
                />
              )
              : (
                <KIcon
                    className='k-text-field__icon'
                    icon='visibility'
                    size={passwordIconSize}
                    clickable
                    onClick={onPasswordShow}
                    disabled={props.disabled}
                />
              )
          )
        }
        {
          props.clearable && props.value && (
            <KIcon
                className='k-text-field__icon'
                icon='close'
                size={closeIconSize}
                clickable
                onClick={onClear}
                disabled={props.disabled}
            />
          )
        }
      </div>
    </div>
  );
});

KTextField.displayName = 'KTextField';
KTextField.defaultProps = {};
export default memo(KTextField);
