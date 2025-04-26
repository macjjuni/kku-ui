import { forwardRef, KeyboardEvent, MouseEvent, memo, CSSProperties,
  Ref, useCallback, useId, useImperativeHandle, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import type { KSelectItemType, KSelectProps, KSelectRefs } from '@/components/input/select/KSelect.interface';
import { KIcon } from '@/components';
import KSelectList from '@/components/input/select/KSelectList';
import KSelectMotion from '@/components/input/select/KSelect.motion';
import useClickOutside from '@/common/hook/useClickOutside';
import useRipple from '@/common/hook/useRipple';


const Select = forwardRef(({ ...restProps }: KSelectProps, ref: Ref<KSelectRefs>) => {

  // region [Hooks]

  const uniqueId = useId();
  const { id = `k-select-${uniqueId}`, className, style } = { ...restProps };
  const { value, items, noDataText = 'No Data', placeholder } = { ...restProps };
  const { width, size, disabled } = { ...restProps };
  const { onChange, onFocus, onBlur } = { ...restProps };

  const rootRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);

  const isOnMouse = useRef<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const ripple = useRipple(labelRef);

  // endregion


  // region [Styles]

  const rootClass = useMemo(() => {

    const clazz = ['k-select'];

    if (className) {
      clazz.push(className);
    }
    if (open) {
      clazz.push('k-select--open');
    }
    if (size) {
      clazz.push(`k-select--${size}`);
    }
    if (disabled) {
      clazz.push('k-select--disabled');
    }

    return clazz.join(' ');
  }, [open, className, size, disabled]);

  const rootStyle = useMemo(() => ({ ...style }), [style]);
  const labelStyle = useMemo((): CSSProperties => (width !== undefined ? { width } : {}), [width]);

  // endregion


  // region [Privates]

  const onSelectOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const onSelectClose = useCallback(() => {
    setOpen(false);
  }, []);

  const displayTitle = useMemo(() => {

    if ((!value || value === '') && placeholder) {
      return (<span className='k-select__label__text__placeholder'>{placeholder}</span>);
    }

    const selectedItem = items?.find((item) => (item.value === value));

    return (selectedItem?.label || value);
  }, [value, items, placeholder]);

  // endregion


  // region [Events]

  const onMouseDownLabel = useCallback((e: MouseEvent<HTMLDivElement>) => {

    if (!disabled) {
      ripple?.register(e);
      setOpen((prev) => !prev);
    }
  }, [ripple]);

  const onMouseUpLabel = useCallback(() => {
    ripple.remove();
  }, [ripple, disabled]);

  const onFocusLabel = useCallback(() => {
    onFocus?.();
  }, []);

  const onBlurLabel = useCallback(() => {
    if (open && !isOnMouse.current) {
      onSelectClose();
    }
    onBlur?.();
  }, []);

  const onMouseEnterLabel = useCallback(() => {
    isOnMouse.current = true;
  }, []);

  const onMouseLeaveLabel = useCallback(() => {
    isOnMouse.current = false;
  }, []);

  const onKeyDownLabel = useCallback((e: KeyboardEvent<HTMLDivElement>) => {

    ripple?.register(e);
  }, [ripple]);

  const onKeyUpLabel = useCallback((e: KeyboardEvent<HTMLDivElement>) => {

    if (e.key === 'Enter' || e.key === ' ') {
      ripple.remove();

      if (!open) {
        onSelectOpen();
        return;
      }
      onSelectClose();
    }

    if (e.key === 'Tab') {
      isOnMouse.current = true;
    }
  }, [open]);

  const onClickListItem = useCallback((item: KSelectItemType | null) => {

    if (item === null) {
      return;
    }

    onChange(item.value);
    onSelectClose();
  }, [onChange]);

  const onFocusListItem = useCallback(() => {
    isOnMouse.current = false;
  }, []);

  const onKeydownListItem = useCallback((e: KeyboardEvent<HTMLLIElement>, item: KSelectItemType | null, idx: number) => {

    if (item && (e.key === 'Enter' || e.key === ' ')) {
      onChange(item.value);
      onSelectClose();
    }

    if ((items.length - 1 === idx || idx === -1) && (!e.shiftKey && e.key === 'Tab')) {
      onSelectClose();
    }
  }, [onChange, items]);

  // endregion


  // region [APIs]

  useImperativeHandle(ref, () => ({
    open: onSelectOpen,
    close: onSelectClose,
  }));

  // endregion


  useClickOutside(labelRef, () => {
    onSelectClose();
  });


  return (
    <div ref={rootRef} id={id} className={rootClass} data-testid='k-select' style={rootStyle}>

      <div ref={labelRef} role='button' className='k-select__label' style={labelStyle}
           onMouseEnter={onMouseEnterLabel} onMouseLeave={onMouseLeaveLabel} onMouseDown={onMouseDownLabel}
           onMouseUp={onMouseUpLabel} onKeyDown={onKeyDownLabel} onKeyUp={onKeyUpLabel}
           onFocus={onFocusLabel} onBlur={onBlurLabel} tabIndex={disabled ? -1 : 0} aria-expanded={open}>

        <span className='k-select__label__text'>{displayTitle}</span>
        <KIcon className='k-select__label__arrow-icon' icon='keyboard_arrow_down' size={14}/>

      </div>

      <AnimatePresence>
        { open && (
          <motion.ul {...KSelectMotion} className='k-select__list' {...KSelectMotion}>
            <KSelectList value={value} items={items} noDataText={noDataText} onClick={onClickListItem}
                         onFocus={onFocusListItem} onKeyDown={onKeydownListItem}/>
          </motion.ul>
        )}
      </AnimatePresence>

    </div>
  );

  // endregion
});


const KSelect = memo(Select);
Select.displayName = 'KSelect';
KSelect.displayName = 'KSelect';

export default KSelect;