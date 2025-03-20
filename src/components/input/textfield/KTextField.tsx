import {
  ChangeEvent, CSSProperties, forwardRef, KeyboardEvent, memo, Ref, useCallback,
  useId, useImperativeHandle, useMemo, useRef, useState,
} from 'react';
import { KTextFieldProps, KTextFieldRefs } from '@/components/input/textfield/KTextField.interface';
import { initDisabled, initSize } from '@/common/util/variation';
import KIcon from '@/components/icon/KIcon';


const KTextField = forwardRef(({ ...restProps }: KTextFieldProps, ref: Ref<KTextFieldRefs>) => {

  // region [Hooks]

  const props: KTextFieldProps = { ...restProps };
  const inputRef = useRef<HTMLInputElement>(null);
  const uniqueId = `k-text-field-input-${useId()}`;
  const [isPasswdShow, setIsPasswdShow] = useState<boolean>(false);
  const [isFocus, setIsFocus] = useState<boolean>(false);

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current?.focus();
    },
    blur: () => {
      inputRef.current?.blur();
    },
    value: props.value,
  }));

  // endregion


  // region [Styles]

  const rootClass = useMemo(() => {
    const clazz = [];

    if (props.className) {
      clazz.push(props.className);
    }

    initSize(clazz, 'k-text-field', props.size);
    initDisabled(clazz, 'k-text-field', props.disabled);

    if (props.password) {
      clazz.push('k-text-field__input--password');
    }
    if (props.clearable) {
      clazz.push('k-text-field__input--clearable');
    }

    if (props.fullWidth) {
      clazz.push('k-text-field__input--full-width');
    }

    return clazz.join(' ');
  }, [props.className, props.password, props.clearable, props.disabled, props.size, props.fullWidth]);


  const rootStyle = useMemo(() => {

    const styles: CSSProperties = props.style || {};

    if (props.width) {
      styles.width = props.width;
    }

    return styles;
  }, [props.width, props.fullWidth, props.style]);

  const containerStyle = useMemo(() => {
    if (props.width) {
      return { width: '100%', minWidth: '100%' };
    }
    return {};
  }, [props.width]);

  const labelClass = useMemo(() => {
    const clazz = [];

    if (!props.label) {
      return '';
    }

    if (isFocus) {
      clazz.push('k-text-field__label__text--focus');
    }

    return clazz.join(' ');
  }, [props.label]);

  const inputStyle = useMemo((): CSSProperties => {
    if (props.align) {
      return { textAlign: props.align };
    }
    return { textAlign: 'left' };
  }, [props.align]);

  // endregion


  // region [Events]

  const onChangeValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {

    const changeValue = e.target.value;
    if (props.onChange) props.onChange(changeValue);
  }, [props.onChange]);

  const onFocus = useCallback(() => {

    if (!props.label) {
      return;
    }
    setIsFocus(true);
  }, [props.label]);

  const onblur = useCallback(() => {

    if (!props.label) {
      return;
    }
    setIsFocus(false);
  }, [props.label]);

  const onClear = useCallback(() => {

    if (props.clearable) {
      props.onChange?.('');
    }
  }, [props.clearable, props.onChange]);

  const onPasswordShow = useCallback(() => {

    setIsPasswdShow((prev) => !prev);
  }, []);

  const onKeyDownEnter = useCallback((e: KeyboardEvent<HTMLInputElement>) => {

    if (e.nativeEvent.isComposing) {
      return;
    }
    if ((e.key === 'Enter' || e.key === '')) {
      props.onKeyDownEnter?.(e);
    }
  }, [props.onKeyDownEnter]);

  // endregion


  // region [Templates]

  const Label = useMemo(() => (
    props.label && (
      <div className='k-text-field__label__container'>
        <label htmlFor={props.id ? props.id : uniqueId} className={`k-text-field__label__text ${labelClass}`}
               data-testid='k-text-field-label'>
          {props.label}
          {props.required && <span className='k-text-field__label__text__required'>*</span>}
        </label>
      </div>
    )
  ), [props.label, props.id, uniqueId, labelClass, props.required]);


  const LeftAction = useMemo(() => (
    props.leftAction && (<div className='k-text-field__label__left-action'>{props.leftAction}</div>)
  ), [props.leftAction]);

  const RightAction = useMemo(() => (
    props.rightAction && (<div className='k-text-field__label__right-action'>{props.rightAction}</div>)
  ), [props.rightAction]);


  const PasswordIcon = useMemo(() => (
    props.password && (
      <KIcon className='k-text-field__icon' icon={isPasswdShow ? 'visibility' : 'visibility_off'}
             clickable onClick={onPasswordShow} disabled={props.disabled}/>
    )
  ), [props.password, isPasswdShow, onPasswordShow, props.disabled])


  const Clearable = useMemo(() => (
    props.clearable && props.value && (
      <KIcon className='k-text-field__icon k-text-field__clearable-icon' icon='close' clickable
             onClick={onClear} disabled={props.disabled}/>
    )
  ), [props.clearable, props.value, props.disabled, onClear])

  // endregion


  return (
    <div className={`k-text-field ${rootClass}`} style={rootStyle} data-testid='k-text-field'>
      {Label}
      <div className='k-text-field__input__container' style={containerStyle}>
        {LeftAction}
        <input id={props.id || uniqueId} ref={inputRef} className='k-text-field__input' style={inputStyle}
               type={(props.password && !isPasswdShow) ? 'password' : 'input'} value={props.value}
               onChange={onChangeValue} onFocus={onFocus} onBlur={onblur} onKeyDown={onKeyDownEnter}
               disabled={props.disabled} placeholder={props.placeholder} maxLength={props.maxLength}
               data-testid='k-text-field-input' autoComplete={props.autoComplete} autoCorrect={props.autoCorrect}
               autoCapitalize={props.autoCapitalize}/>
        {PasswordIcon}
        {Clearable}
        {RightAction}
      </div>
    </div>
  );
});


KTextField.displayName = 'KTextField';
export default memo(KTextField);
