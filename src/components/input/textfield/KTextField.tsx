import {
  ChangeEvent,
  FocusEvent,
  forwardRef,
  KeyboardEvent,
  memo,
  Ref,
  useCallback,
  useId,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import { KTextFieldProps, KTextFieldRefs } from '@/components/input/textfield/KTextField.interface';
import { TextField } from '@/core';
import { KIcon } from '@/components';


const KTextField = forwardRef((props: KTextFieldProps, ref: Ref<KTextFieldRefs>) => {

  // region [Hooks]
  const uniqueId = `k-text-field-${useId()}`;

  const {
    id = uniqueId, value, type = 'text', placeholder, maxLength, disabled, readOnly,
    required, align = 'left', onChange, onFocus, onBlur, onKeyDown, autoCapitalize,
    autoCorrect, autoComplete, leftContent, rightContent, label, width, style,
    size = 'medium', className, rules, validateOnChange, ...restProps
  } = props;

  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocus, setIsFocus] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const isPasswordMode = useMemo(() => (type === 'password'), [type]);
  const Type = useMemo(() => {
    if (type === 'password' && showPassword) {
      return 'text';
    }
    return type;
  }, [type, showPassword]);
  // endregion

  // region [Styles]
  const rootClass = useMemo(() => {
    const clazz = ['k-text-field', `k-text-field--${size}`];
    if (className) {
      clazz.push(className);
    }
    if (disabled) {
      clazz.push('k-text-field--disabled');
    }
    if (isFocus) {
      clazz.push('k-text-field--focus');
    }
    if (readOnly) {
      clazz.push('k-text-field--readOnly');
    }
    if (type === 'password') {
      clazz.push('k-text-field--password');
    }
    if (typeof errorMessage === 'string') {
      clazz.push('k-text-field--error');
    }
    return clazz.join(' ');
  }, [className, disabled, readOnly, type, errorMessage, size, isFocus]);

  const rootLabel = useMemo(() => {
    const clazz = ['k-text-field__fieldset__legend__label'];
    if (label) {
      clazz.push('k-text-field__fieldset__legend__label--show');
    }
    return clazz.join(' ');
  }, [label]);

  const rootStyle = useMemo(() => ({ ...style, width }), [style, width]);
  const inputStyle = useMemo(() => ({ textAlign: align }), [align]);
  // endregion

  // region [Privates]
  const onValidate = useCallback(async (targetValue?: string) => {
    if (!rules) {
      console.warn('not found rules.');
      return true;
    }

    const checkValue = targetValue ?? value;

    for (let i = 0; i < rules.length; i++) {
      const rule = await rules[i];
      const result = await rule(checkValue);
      const errorMessage = typeof result === 'string' ? result : null;

      if (errorMessage) {
        setErrorMessage(errorMessage);
        return false;
      }
    }

    setErrorMessage(null);
    return true;
  }, [rules, value]);
  // endregion

  // region [Events]
  const onChangeRoot = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);

    if (validateOnChange) {
      onValidate(e.target.value);
    }
  }, [onChange, onValidate, validateOnChange]);

  const onFocusRoot = useCallback((e: FocusEvent<HTMLInputElement>) => {
    setIsFocus(true);
    onFocus?.(e);
  }, [onFocus]);

  const onBlurRoot = useCallback((e: FocusEvent<HTMLInputElement>) => {
    setIsFocus(false);
    onBlur?.(e);
  }, [onBlur]);

  const onKeyDownRoot = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
    onKeyDown?.(e);
  }, [onKeyDown]);

  const onClickPasswordIcon = useCallback(() => {
    setShowPassword((prev) => !prev);
  }, [type]);
  // endregion

  // region [APIs]
  useImperativeHandle(ref, () => ({
    value,
    focus: () => inputRef.current?.focus(),
    blur: () => inputRef.current?.blur(),
    onValidate: () => onValidate(),
  }));
  // endregion


  return (
    <div className={rootClass}>
      <fieldset className="k-text-field__fieldset" style={rootStyle}>
        <legend className="k-text-field__fieldset__legend">
          <label htmlFor={id} className={rootLabel}>
            {label}
            {label && required && <span className="k-text-field__fieldset__legend__label__required">*</span>}
          </label>
        </legend>
        <div className="k-text-field__fieldset__container">
          {leftContent && <div className="k-text-field__fieldset__container__left">{leftContent}</div>}

          <TextField ref={inputRef} id={id} className="k-text-field__fieldset__container__input" type={Type} label={label}
                     value={value} disabled={disabled} readOnly={readOnly} placeholder={placeholder} maxLength={maxLength}
                     onChange={onChangeRoot} onFocus={onFocusRoot} onBlur={onBlurRoot} onKeyDown={onKeyDownRoot}
                     autoComplete={autoComplete} autoCorrect={autoCorrect} autoCapitalize={autoCapitalize}
                     style={inputStyle} {...restProps}/>

          {(isPasswordMode) && (
            <KIcon icon={isPasswordMode ? 'visibility' : 'visibility_off'} size={18}
                   onClick={onClickPasswordIcon} disabled={disabled} className="k-text-field__fieldset__container__icon"/>
          )}

          {rightContent && <div className="k-text-field__fieldset__container__right">{rightContent}</div>}
        </div>
      </fieldset>
      {errorMessage && (<div className="k-text-field__fieldset__message">{errorMessage}</div>)}
    </div>
  );
});

KTextField.displayName = 'KTextField';
export default memo(KTextField);
