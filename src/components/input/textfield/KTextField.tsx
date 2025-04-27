import {
  ChangeEvent, CSSProperties, forwardRef, KeyboardEvent, memo, Ref, useCallback, useEffect,
  useId, useImperativeHandle, useMemo, useRef, useState,
} from 'react';
import { KTextFieldProps, KTextFieldRefs } from '@/components/input/textfield/KTextField.interface';
import { KIcon } from '@/components';
import './KTextField.scss';


const TextField = forwardRef(({ ...restProps }: KTextFieldProps, ref: Ref<KTextFieldRefs>) => {

  // region [Hooks]

  const uniqueId = `k-text-field-${useId()}`;
  const { id = uniqueId, style, className } = { ...restProps };
  const { value, placeholder, maxLength } = { ...restProps };
  const { onChange, onKeyDownEnter, onFocus, onBlur } = { ...restProps };
  const { password, clearable, disabled, align = 'left', size = 'medium', width, required } = { ...restProps };
  const { label, labelAlign = 'column', labelGap = size === 'small' ? 10 : 12 } = { ...restProps };
  const { autoComplete, autoCorrect, autoCapitalize } = { ...restProps };
  const { leftAction, rightAction } = { ...restProps };

  const inputRef = useRef<HTMLInputElement>(null);
  const iconAreaRef = useRef<HTMLDivElement>(null);
  const [isPasswdShow, setIsPasswdShow] = useState<boolean>(false);
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [inputPadding, setInputPadding] = useState({});

  useImperativeHandle(ref, () => ({
    value,
    focus: () => {
      inputRef.current?.focus();
    },
    blur: () => {
      inputRef.current?.blur();
    },
  }));

  // endregion


  // region [Styles]

  const rootClass = useMemo(() => {

    const clazz = ['k-text-field'];

    if (className) {
      clazz.push(className);
    }
    if (size) {
      clazz.push(`k-text-field--${size}`);
    }
    if (disabled) {
      clazz.push('k-text-field--disabled');
    }
    if (password) {
      clazz.push('k-text-field__input--password');
    }
    if (clearable) {
      clazz.push('k-text-field__input--clearable');
    }
    if (required) {
      clazz.push('k-text-field__input--required');
    }
    if (isFocus) {
      clazz.push('k-text-field__input--focus');
    }
    if (label && labelAlign) {
      clazz.push(`k-text-field__input--label-${labelAlign}`);
    }

    return clazz.join(' ');
  }, [className, size, disabled, password, clearable, required, isFocus, label, labelAlign]);


  const rootStyle = useMemo(() => ({
    ...style,
    maxWidth: width !== undefined ? width : undefined,
    flexDirection: labelAlign,
  }), [width, style, labelAlign, labelGap]);

  const labelStyle = useMemo((): CSSProperties => {
    if (labelAlign === 'row') {
      return { marginBottom: 0, marginRight: labelGap };
    }
    return {};
  }, [labelAlign, labelGap]);

  const inputStyle = useMemo((): CSSProperties => {
    return { textAlign: align };
  }, [align]);

  // endregion


  // region [Privates]

  const initializeInputPadding = useCallback(() => {

    const inputRect = inputRef.current?.getBoundingClientRect();
    const iconAreaRect = iconAreaRef.current?.getBoundingClientRect();

    setInputPadding({ paddingRight: iconAreaRect?.width });

    if (password || clearable) {

      const calcWidth = `${(inputRect?.width || 0) - (iconAreaRect?.width || 0)}px`;
      iconAreaRef.current?.style.setProperty('left', calcWidth);
    }
  }, [password, clearable]);

  // endregion


  // region [Events]

  const onChangeValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {

    const changeValue = e.target.value;
    if (onChange) onChange(changeValue);
  }, [onChange]);

  const onFocusInput = useCallback(() => {
    onFocus?.();
    if (label) {
      setIsFocus(true);
    }
  }, [label]);

  const onblurInput = useCallback(() => {
    onBlur?.();
    if (label) {
      setIsFocus(false);
    }
  }, [label]);

  const onClear = useCallback(() => {

    if (clearable) {
      onChange?.('');
    }
  }, [clearable, onChange]);

  const onPasswordShow = useCallback(() => {

    setIsPasswdShow((prev) => !prev);
  }, []);

  const onKeyDownEnterInput = useCallback((e: KeyboardEvent<HTMLInputElement>) => {

    if (e.nativeEvent.isComposing) {
      return;
    }
    if ((e.key === 'Enter' || e.key === '')) {
      onKeyDownEnter?.(e);
    }
  }, [onKeyDownEnter]);

  // endregion


  // region [Templates]

  const LeftAction = useMemo(() => (
    leftAction && (<div className='k-text-field__input__left-action'>{leftAction}</div>)
  ), [leftAction]);

  const RightAction = useMemo(() => (
    rightAction && (<div className='k-text-field__input__right-action'>{rightAction}</div>)
  ), [rightAction]);


  const IconArea = useMemo(() => (
    <div ref={iconAreaRef} className='k-text-field__input__icon'>
      {
        password && (
          <KIcon className='k-text-field__input__icon-password' icon={isPasswdShow ? 'visibility' : 'visibility_off'}
                 clickable onClick={onPasswordShow} disabled={disabled} size={18}/>
        )
      }
      {
        clearable && value && (
          <KIcon className='k-text-field__input__icon-clearable' icon='close' clickable size={14}
                 onClick={onClear} disabled={disabled}/>
        )
      }
    </div>
  ), [clearable, password, isPasswdShow, onPasswordShow, value, disabled, onClear]);

  // endregion


  // region [Life Cycles]

  useEffect(() => {
    initializeInputPadding();
  }, [password, clearable, value]);

  // endregion


  return (
    <div className={rootClass} style={rootStyle} data-testid='k-text-field'>

      {
        label && (
          <span className='k-text-field__label' style={labelStyle}>
            <label htmlFor={id} className='k-text-field__label__text'>
              {label}
              {required && <span className='k-text-field__label--required'>*</span>}
            </label>
          </span>
        )
      }

      <div className='k-text-field__input'>

        {LeftAction}

        <input id={id} ref={inputRef} className='k-text-field__input__root' style={{ ...inputStyle, ...inputPadding }}
               type={(password && !isPasswdShow) ? 'password' : 'input'} value={value}
               onChange={onChangeValue} onFocus={onFocusInput} onBlur={onblurInput} onKeyDown={onKeyDownEnterInput}
               disabled={disabled} placeholder={placeholder} maxLength={maxLength}
               autoComplete={autoComplete} autoCorrect={autoCorrect} autoCapitalize={autoCapitalize}/>
        {(clearable || password) && IconArea}
        {RightAction}

      </div>
    </div>
  );
});

const KTextField = memo(TextField);
TextField.displayName = 'KTextField';
KTextField.displayName = 'KTextField';

export default memo(KTextField);
