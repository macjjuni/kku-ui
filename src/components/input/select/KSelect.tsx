import {
  CSSProperties,
  forwardRef,
  KeyboardEvent,
  Ref,
  useCallback, useId,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import type { KSelectItemType, KSelectProps, KSelectRefs } from '@/components/input/select/KSelect.interface';
import { initDisabled, initSize } from '@/common/util/variation';
import { KIcon } from '@/components';
import KSelectList from '@/components/input/select/KSelectList';
import { useCleanId } from '@/common/hook/useCleanId';


const KSelect = forwardRef(({ ...restProps }: KSelectProps, ref: Ref<KSelectRefs>) => {

  // region [Hooks]

  const {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    id = `k-select-${useId()}`,
    className,
    style,
    items,
    onBlur,
    noDataText,
    onFocus,
    size,
    width,
    onChange,
    value,
    placeholder,
    disabled,
  }: KSelectProps = { ...restProps };

  const selectRef = useRef<HTMLDivElement>(null);
  const isOnMouse = useRef<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const selectListId = useCleanId('k-select-list');

  // endregion


  // region [Styles]

  const rootClass = useMemo(() => {
    const clazz = [];

    if (open) {
      clazz.push('k-select--open');
    }
    if (className) {
      clazz.push(className);
    }
    initSize(clazz, 'k-select', size);
    initDisabled(clazz, 'k-select', disabled);

    return clazz.join(' ');
  }, [open, className, size, disabled])

  const rootStyle = useMemo(() => {
    const styles: CSSProperties = width ? { width } : {};

    return { ...style, ...styles };
  }, [style, width]);

  // endregion


  // region [Privates]

  const onAddEventListener = useCallback((e: MouseEvent) => {
    if (selectRef.current && !selectRef.current.contains(e.target as Node)) {
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      onSelectClose();
    }
  }, []);

  const onSelectOpen = useCallback(() => {
    setOpen(true);
    setTimeout(() => {
      window.addEventListener('click', onAddEventListener);
    }, 0); // setTimeout을 사용하여 이벤트 버블링 방지
  }, []);

  const onSelectClose = useCallback(() => {
    setOpen(false);
    window.removeEventListener('click', onAddEventListener);
  }, []);


  const displayTitle = useMemo(() => {

    if ((!value || value === '') && placeholder) {
      return (
        <span className='k-select__label-text__placeholder'>
          {placeholder}
        </span>
      );
    }

    const selectedItem = items?.find((item) => (
      item.value === value));

    return (
      <span className='k-select__label-text' data-testid='k-select-label'>
        {selectedItem?.title || value}
      </span>
    );
  }, [value, items, placeholder]);

  // endregion


  // region [Events]

  const onClickRoot = useCallback(() => {
    if (!open && !disabled) {
      onSelectOpen();
      return;
    }
    onSelectClose();
  }, [open, disabled]);

  const onFocusRoot = useCallback(() => {
    onFocus?.();
  }, []);

  const onBlurRoot = useCallback(() => {
    if (open && !isOnMouse.current) {
      onSelectClose();
    }
    onBlur?.();
  }, []);

  const onMouseEnterRoot = useCallback(() => {
    isOnMouse.current = true;
  }, []);

  const onMouseLeaveRoot = useCallback(() => {
    isOnMouse.current = false;
  }, []);

  const onKeyUpRoot = useCallback((e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      if (!open) {
        onSelectOpen();
        return;
      }
      onSelectClose();
    }
    if (e.key === 'Tab' && e.shiftKey && isOnMouse.current) {
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

  // eslint-disable-next-line max-len
  const onKeydownListItem = useCallback((e: KeyboardEvent<HTMLLIElement>, item: KSelectItemType | null, idx: number) => {
    if (item && (e.key === 'Enter' || e.key === ' ')) {
      onChange(item.value);
    }

    if ((items.length - 1 === idx || idx === -1) && (!e.shiftKey && e.key === 'Tab')) {
      onSelectClose();
    }
  }, [onChange, items]);

  // endregion


  useImperativeHandle(ref, () => ({
    open: onSelectOpen,
    close: onSelectClose,
  }));


  return (
    <div ref={selectRef} id={id} className={`k-select ${rootClass}`} data-testid='k-select'
         style={rootStyle} tabIndex={disabled ? -1 : 0} role='button' onClick={onClickRoot}
         onKeyUp={onKeyUpRoot} onFocus={onFocusRoot} onBlur={onBlurRoot} onMouseEnter={onMouseEnterRoot}
         onMouseLeave={onMouseLeaveRoot} aria-expanded={open}>
      {displayTitle}

      <KIcon className='k-select__current__label__arrow-icon' icon='keyboard_arrow_down' size={16}/>

      <KSelectList id={selectListId} open={open} items={items} onClick={onClickListItem}
                   onFocus={onFocusListItem} onKeyDown={onKeydownListItem} noDataText={noDataText || 'No Data'}/>
    </div>
  );

  // endregion

});


KSelect.displayName = 'KSelect';
export default KSelect;
