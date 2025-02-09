import {
  ChangeEvent,
  CSSProperties,
  forwardRef,
  KeyboardEvent,
  Ref,
  useId,
  useImperativeHandle,
  useRef,
  useState,
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

  const rootClass = () => {
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
  }


  const rootStyle = () => {

    const styles: CSSProperties = props.style || {};

    if (props.width) {
      styles.width = props.width;
    }

    if (props.fullWidth) {
      styles.width = '100%';
    }

    return styles;
  }

  const labelClass = () => {
    const clazz = [];

    if (!props.label) {
      return '';
    }

    if (isFocus) {
      clazz.push('k-text-field__label__text--focus');
    }

    return clazz.join(' ');
  }

  const closeIconSize = () => {

    if (props.size === 'small') {
      return 14;
    }

    return 16;
  }

  const passwordIconSize = () => {

    if (props.size === 'small') {
      return 18;
    }

    return 20;
  }

  // endregion


  // region [Events]

  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    const changeValue = e.target.value;
    if (props.onChange) props.onChange(changeValue);
  }

  const onFocus = () => {
    if (!props.label) {
      return;
    }
    setIsFocus(true);
  }

  const onblur = () => {
    if (!props.label) {
      return;
    }
    setIsFocus(false);
  }

  const onClear = () => {
    if (props.clearable && props.onChange) {
      props.onChange('');
    }
  }

  const onPasswordShow = () => {
    setIsPasswdShow((prev) => !prev);
  }

  const onKeyDownEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.nativeEvent.isComposing) {
      return;
    }

    if ((e.key === 'Enter' || e.key === '') && props.onKeyDownEnter) {
      props.onKeyDownEnter(e);
    }
  }

  // endregion


  return (
    <div className={`k-text-field ${rootClass()}`} style={rootStyle()} data-testid='k-text-field'>
      {/* Label */}
      {props.label && (
        <div className='k-text-field__label__container'>
          <label htmlFor={props.id ? props.id : uniqueId} className={`k-text-field__label__text ${labelClass()}`}
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
        <input id={props.id ? props.id : uniqueId} ref={inputRef} className='k-text-field__input'
               type={(props.password && !isPasswdShow) ? 'password' : 'input'} value={props.value}
               onChange={onChangeValue} onFocus={onFocus} onBlur={onblur} onKeyDown={onKeyDownEnter}
               disabled={props.disabled} placeholder={props.placeholder} maxLength={props.maxLength}
               data-testid='k-text-field-input'/>
        {
          props.password && (
            isPasswdShow
              ? (
                <KIcon className='k-text-field__icon k-text-field__password-icon' icon='visibility_off'
                       size={passwordIconSize()} clickable onClick={onPasswordShow} disabled={props.disabled}/>
              )
              : (
                <KIcon className='k-text-field__icon k-text-field__visibility-icon' icon='visibility'
                       size={passwordIconSize()}
                       clickable onClick={onPasswordShow} disabled={props.disabled}/>
              )
          )
        }
        {
          props.clearable && props.value && (
            <KIcon className='k-text-field__icon k-text-field__clearable-icon'
                   icon='close' size={closeIconSize()} clickable onClick={onClear}
                   disabled={props.disabled}/>
          )
        }
        {
          props.search && (
            <KIcon className='k-text-field__icon k-text-field__search-icon'
                   icon='search' size={passwordIconSize()} onClick={props?.onSearch}/>
          )
        }
      </div>
    </div>
  );
});

KTextField.displayName = 'KTextField';

export default KTextField;
