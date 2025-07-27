import {
  forwardRef,
  memo,
  MouseEvent,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import type { KSelectProps, KSelectRefs } from './KSelect.interface';
import { KDropdown, KDropdownRefs, KIcon, KMenu } from '@/components';
import { useRipple } from '@/common/hooks';


const Select = forwardRef<KSelectRefs, KSelectProps>((props, ref) => {

  // region [Hooks]

  const {
    className, rules, validateOnChange,
    value, items, label, required, noDataText = 'No Data', placeholder, width, size = 'medium', disabled,
    onChange, ...restProps
  } = props;

  const ValueLabel = useMemo(() => {
    const selectedValue = items.find((item) => item.value === value);
    return selectedValue?.label || null;
  }, [value, items]);
  const [isOpen, setIsOpen] = useState(false);
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
  const iconClass = useMemo(() => {
    const clazz = ['k-select__fieldset__container__icon'];
    if (isOpen) {
      clazz.push('k-select__fieldset__container__icon--open')
    }
    return clazz.join(' ');
  }, [isOpen])

  const iconSize = useMemo(() => {
    if (!size || size === 'medium') { return 'medium'; }
    return 'small';
  }, [size])

  // endregion


  // region [Privates]
  const initializeWidth = useCallback(() => {
    const selectWidth = containerRef.current?.getBoundingClientRect().width;
    const borderWidth = 2;
    if (selectWidth) {
      setMenuWidth(selectWidth + borderWidth)
    } else {
      setMenuWidth('auto');
    }
  }, []);

  const onOpenContentAction = useCallback(() => {
    setIsOpen(true);
  }, []);

  const onCloseContentAction = useCallback(() => {
    setIsOpen(false);
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
    const clazz = ['k-select__fieldset__legend'];
    if (label) {
      clazz.push('k-select__fieldset__legend--show');
    }
    return clazz.join(' ');
  }, [label]);
  // endregion

  // region [LifeCycles]
  useEffect(() => {
    dropdownRef.current?.onClose();
  }, [value]);

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
    <KDropdown ref={dropdownRef} className={rootClass} trigger="click" position="bottom-start" {...restProps} style={{ width }}
               onDropdownOpen={onOpenContentAction} onDropdownClose={onCloseContentAction} aria-disabled={disabled}>
      <KDropdown.Trigger className="k-select__trigger" disabled={disabled}>
        <fieldset className="k-select__fieldset">
          <legend className={rootLabel}>
            {label}
            {label && required && <span className="k-select__fieldset__legend__required">*</span>}
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
            <KIcon className={iconClass} icon="keyboard_arrow_down" size={iconSize}/>
          </div>
        </fieldset>
        {errorMessage && (<div className="k-select__fieldset__message">{errorMessage}</div>)}
      </KDropdown.Trigger>
      <KDropdown.Content className="k-select__content" gap={contentGap}>
        <KMenu width={menuWidth} size={size} className={`k-select__content__menu k-select__content__menu--${size}`}>
          {
            items.map((item) => (
              <KMenu.ItemSelectable key={item.value} label={item.label} selected={value === item.value}
                                    onClick={() => { onChangeRoot(item.value); }}/>
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
