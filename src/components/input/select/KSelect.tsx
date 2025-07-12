import { forwardRef, memo, MouseEvent, useCallback, useEffect, useId, useImperativeHandle, useMemo, useRef, useState } from 'react';
import type { KSelectProps, KSelectRefs } from './KSelect.interface';
import { KDropdown, KDropdownRefs, KMenu } from '@/components';
import { useRipple } from '@/common/hooks';


const Select = forwardRef<KSelectRefs, KSelectProps>((props, ref) => {

  // region [Hooks]

  const uniqueId = useId();
  const {
    id = `k-select-${uniqueId}`, className, rules, validateOnChange,
    value, items, label, required, noDataText = 'No Data', placeholder, width, size, disabled,
    onChange,
  } = props;

  const ValueLabel = useMemo(() => {
    const selectedValue = items.find((item) => item.value === value);
    return selectedValue?.label || null;
  }, [value, items]);
  const containerRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<KDropdownRefs>(null);

  const [menuWidth, setMenuWidth] = useState<number | 'auto'>('auto');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const contentGap = useMemo(() => (errorMessage ? -16 : 4), [errorMessage]);
  const ripple = useRipple(containerRef);

  // endregion


  // region [Styles]
  const rootClass = useMemo(() => {
    const clazz = ['k-select'];
    if (className) {
      clazz.push(className);
    }
    if (size) {
      clazz.push(`k-select--${size}`);
    }
    if (disabled) {
      clazz.push('k-select--disabled');
    }
    if (errorMessage) {
      clazz.push('k-select--error');
    }

    return clazz.join(' ');
  }, [className, size, errorMessage, disabled]);
  // endregion


  // region [Privates]
  const initializeWidth = useCallback(() => {
    const selectWidth = containerRef.current?.getBoundingClientRect().width ?? 'auto';
    setMenuWidth(selectWidth);
  }, []);

  const onValidate = useCallback(async (targetValue?: string | number) => {
    if (!rules) {
      console.warn('not found rules.');
      return true;
    }

    const checkValue = targetValue ?? value;

    for (let i = 0; i < rules.length; i++) {
      const rule = await rules[i];
      const result = await rule(checkValue?.toString());
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
  const onChangeRoot = useCallback((val: string | number) => {
    onChange(val);
    if (validateOnChange) {
      onValidate(val);
    }
  }, [onChange, validateOnChange, onValidate]);

  const onMouseDownFieldSet = useCallback((e: MouseEvent<HTMLDivElement>) => {
    if (!disabled) {
      ripple?.register(e);
    }
  }, [disabled]);

  const onMouseUpFieldSet = useCallback(() => {
    if (!disabled) {
      ripple.remove();
    }
  }, [disabled]);

  const onMouseLeaveFieldSet = useCallback(() => {
    if (!disabled) {
      ripple.remove();
    }
  }, [disabled]);
  // endregion

  // region [Templates]
  const rootLabel = useMemo(() => {
    const clazz = ['k-select__fieldset__legend__label'];
    if (label) {
      clazz.push('k-select__fieldset__legend__label--show');
    }
    return clazz.join(' ');
  }, [label]);
  // endregion

  // region [LifeCycles]
  useEffect(() => {
    initializeWidth();
  }, [size]);
  // endregion

  // region [APIs]
  useImperativeHandle(ref, () => ({
    onOpen: () => {
      dropdownRef.current?.onOpen();
    },
    onClose: () => {
      dropdownRef.current?.onClose();
    },
    onValidate: () => onValidate(),
  }));
  // endregion


  return (
    <KDropdown className={rootClass} trigger="click" position="bottom-start">
      <KDropdown.Trigger className="k-select__trigger" disabled={disabled}>
        <fieldset className="k-select__fieldset" style={{ width }}>
          <legend className="k-select__fieldset__legend">
            <label htmlFor={id} className={rootLabel}>
              {label}
              {label && required && <span className="k-select__fieldset__legend__label__required">*</span>}
            </label>
          </legend>
          {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
          <div ref={containerRef} className="k-select__fieldset__container" onMouseDown={onMouseDownFieldSet}
               onMouseUp={onMouseUpFieldSet} onMouseLeave={onMouseLeaveFieldSet}>
            {ValueLabel && (
              <span className="k-select__fieldset__container__value">{ValueLabel}</span>
            )}
            {value === undefined && placeholder && (
              <span className="k-select__fieldset__container__placeholder">{placeholder}</span>
            )}
          </div>
        </fieldset>
        {errorMessage && (<div className="k-select__fieldset__message">{errorMessage}</div>)}
      </KDropdown.Trigger>
      <KDropdown.Content className="k-select__content" gap={contentGap}>
        <KMenu width={menuWidth} size="medium" className={`k-select__content__menu k-select__content__menu--${size}`}>
          {
            items.map((item) => (
              <KMenu.ItemSelectable key={item.value} label={item.label} selected={value === item.value}
                                    onClick={() => {
                                      onChangeRoot(item.value);
                                    }}/>
            ))
          }
          {items.length === 0 && <KMenu.Item label={noDataText}/>}
        </KMenu>
      </KDropdown.Content>
    </KDropdown>
  );
});


const KSelect = memo(Select);
Select.displayName = 'KSelect';
KSelect.displayName = 'KSelect';

export default KSelect;