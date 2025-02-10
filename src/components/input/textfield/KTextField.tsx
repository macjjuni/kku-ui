import {
  ChangeEvent,
  CSSProperties,
  forwardRef,
  KeyboardEvent,
  Ref,
  useCallback,
  useId,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import { KTextFieldProps, KTextFieldRefs } from '@/components/input/textfield/KTextField.interface';
import { initDisabled, initSize } from '@/common/util/variation';
import { KIcon } from '@/components';


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
    validate: () => {
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

    if (props.labelDirection) {
      clazz.push(`k-text-field--${props.labelDirection}`);
    } else {
      clazz.push('k-text-field--column');
    }
    if (props.password) {
      clazz.push('k-text-field__input--password');
    }
    if (props.clearable) {
      clazz.push('k-text-field__input--clearable');
    }

    return clazz.join(' ');
  }, [props.className, props.labelDirection, props.password, props.clearable, props.disabled, props.size]);


  const rootStyle = useMemo(() => {

    const styles: CSSProperties = props.style || {};

    if (props.width) {
      styles.width = props.width;
    }

    if (props.fullWidth) {
      styles.width = '100%';
    }

    return styles;
  }, [props.width, props.fullWidth, props.style]);

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

  const closeIconSize = useMemo(() => {

    if (props.size === 'small') {
      return 14;
    }

    return 16;
  }, [props.size]);

  const passwordIconSize = useMemo(() => {

    if (props.size === 'small') {
      return 18;
    }

    return 20;
  }, [props.size]);

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


  return (
    <div className={`k-text-field ${rootClass}`} style={rootStyle} data-testid='k-text-field'>
      {/* Label */}
      {props.label && (
        <div className='k-text-field__label__container'>
          <label htmlFor={props.id ? props.id : uniqueId} className={`k-text-field__label__text ${labelClass}`}
                 data-testid='k-text-field-label'>
            {props.label}
            {props.required && <span className='k-text-field__label__text__required'>*</span>}
          </label>
          {props.rightAction && !props.labelDirection && (
            <div className='k-text-field__label__right-action'>
              {props.rightAction}
            </div>
          )}
        </div>
      )}

      <div className='k-text-field__input__container'>
        <input id={props.id || uniqueId} ref={inputRef} className='k-text-field__input'
               type={(props.password && !isPasswdShow) ? 'password' : 'input'} value={props.value}
               onChange={onChangeValue} onFocus={onFocus} onBlur={onblur} onKeyDown={onKeyDownEnter}
               disabled={props.disabled} placeholder={props.placeholder} maxLength={props.maxLength}
               data-testid='k-text-field-input'/>
        {
          props.password && (
            isPasswdShow
              ? (
                <KIcon className='k-text-field__icon k-text-field__password-icon' icon='visibility_off'
                       size={passwordIconSize} clickable onClick={onPasswordShow} disabled={props.disabled}/>
              )
              : (
                <KIcon className='k-text-field__icon k-text-field__visibility-icon' icon='visibility'
                       size={passwordIconSize}
                       clickable onClick={onPasswordShow} disabled={props.disabled}/>
              )
          )
        }
        {
          props.clearable && props.value && (
            <KIcon className='k-text-field__icon k-text-field__clearable-icon'
                   icon='close' size={closeIconSize} clickable onClick={onClear}
                   disabled={props.disabled}/>
          )
        }
        {
          props.search && (
            <KIcon className='k-text-field__icon k-text-field__search-icon'
                   icon='search' size={passwordIconSize} onClick={props?.onSearch}/>
          )
        }
      </div>
    </div>
  );
});


KTextField.displayName = 'KTextField';
export default KTextField;
