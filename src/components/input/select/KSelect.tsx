import {
  CSSProperties,
  forwardRef, KeyboardEvent, memo, Ref, useCallback, useEffect, useImperativeHandle,
  useMemo, useRef, useState,
} from 'react';
import type { KSelectProps, KSelectRefs, KSelectItemType } from '@/components/input/select/KSelect.interface';
import { initDisabled, initSize } from '@/common/util/variation';
import { KIcon } from '@/components';


const KSelect = forwardRef((props: KSelectProps, ref: Ref<KSelectRefs>) => {

  // region [Hooks]

  const selectRef = useRef<HTMLDivElement>(null);
  const templateRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const isOnMouse = useRef<boolean>(false);
  const [isRender, setIsRender] = useState(false);
  const [open, setOpen] = useState<boolean>(false);


  useImperativeHandle(ref, () => ({
    focus: () => { selectRef.current?.focus(); },
    blur: () => { selectRef.current?.blur(); },
    validate: () => {},
    value: props.value,
  }));

  // endregion


  // region [Styles]

  const rootClass = useMemo(() => {
    const clazz = [];

    if (open) { clazz.push('k-select--open'); }
    if (props.className) { clazz.push(props.className); }
    initSize(clazz, 'k-select', props.size, props.large, props.medium, props.small);
    initDisabled(clazz, 'k-select', props.disabled);

    return clazz.join(' ');
  }, [props.className, open]);

  const rootStyle = useMemo(() => {
    const style: CSSProperties = props.width ? { width: props.width } : {};

    return { ...style, ...props.style };
  }, [props.style]);

  // endregion


  // region [Privates]

  const initialStyle = useCallback(() => {

    if (!props.width) {
      const fullWidth = templateRef.current?.clientWidth;

      selectRef.current?.style.setProperty(
        'width',
        fullWidth ? `${fullWidth + 26}px` : 'auto',
      );
    }
    setIsRender(true);
  }, []);

  const displayTitle = useMemo(() => {

    if (!props.value || props.value === '') { // placeholder
      return (
        <span className='k-select__label-text__placeholder'>
          {props.placeholder}
        </span>
      );
    }

    const selectedItem = props.items?.find((item) => item.value === props.value);
    if (selectedItem) { return selectedItem.title; }

    return props.value;
  }, [props.value, props.items, props.placeholder]);

  const onSelectOpen = useCallback(() => {
    setOpen(true);

  }, []);

  const onSelectOff = useCallback(() => {
    setOpen(false);
  }, []);

  // endregion


  // region [Events]

  const onClickRoot = useCallback(() => {
    if (!open && !props.disabled) {
      onSelectOpen();
      return;
    }
    onSelectOff();
  }, [open]);

  const onFocusRoot = useCallback(() => {
    if (props.onFocus) { props.onFocus(); }
  }, []);

  const onBlurRoot = useCallback(() => {
    if (open && !isOnMouse.current) { onSelectOff(); }
    if (props.onBlur) { props.onBlur(); }
  }, [open]);

  const onMouseEnterRoot = useCallback(() => {
    isOnMouse.current = true;
  }, []);

  const onMouseLeaveRoot = useCallback(() => {
    isOnMouse.current = false;
  }, []);

  const onKeyDownRoot = useCallback((e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      if (!open) {
        onSelectOpen();
        return;
      }
      onSelectOff();
    }
    if (e.key === 'Tab' && e.shiftKey && isOnMouse.current) { onSelectOff(); }
    if (e.key === 'Tab') { isOnMouse.current = true; }
  }, [open]);

  const onClickListItem = useCallback((item: KSelectItemType | null) => {
    if (item === null) { return; }

    props.onChange(item.value);
    onSelectOff();
  }, [props.value, props.items, props.onChange]);

  const onFocusListItem = useCallback(() => {
    isOnMouse.current = false;
  }, []);

  // eslint-disable-next-line max-len
  const onKeydownListItem = useCallback((e: KeyboardEvent<HTMLLIElement>, item: KSelectItemType | null, idx: number) => {
    if (item === null) { return; }
    if (e.key === 'Enter' || e.key === ' ') { props.onChange(item.value); }

    if (props.items.length - 1 === idx && (!e.shiftKey && e.key === 'Tab')) {
      onSelectOff();
    }
  }, [props.value, props.items]);

  // endregion


  // region [LifeCycle]

  useEffect(() => {
    initialStyle();
  }, []);

  // endregion


  // region [Templates]

  const MenuList = useMemo(() => {

    return (
      <ul ref={listRef} className='k-select__menu-list' data-testid='k-select-list'>
        {props.items.map((item, idx) => (
          <li
            key={item.value}
            role='menuitem'
            tabIndex={0}
            onFocus={onFocusListItem}
            onClick={() => { onClickListItem(item); }}
            onKeyDown={(e) => { onKeydownListItem(e, item, idx); }}
            className='k-select__menu-list__item'
          >
            {item.title}
          </li>
        ))}
        {
          props.items.length === 0 && (
            <li
              role='menuitem'
              tabIndex={0}
              onFocus={onFocusListItem}
              onClick={() => { onClickListItem(null); }}
              onKeyDown={(e) => { onKeydownListItem(e, null, 0); }}
              className='k-select__menu-list__item k-select__menu-list__item-no-data'
            >
              {props.noDataText}
            </li>
          )
        }
      </ul>
    );
  }, [props.items]);

  // endregion


  return (
    <>
      <div
        ref={selectRef}
        className={`k-select ${rootClass}`}
        data-testid='k-select'
        style={rootStyle}
        tabIndex={0}
        role='button'
        onClick={onClickRoot}
        onKeyDown={onKeyDownRoot}
        onFocus={onFocusRoot}
        onBlur={onBlurRoot}
        onMouseEnter={onMouseEnterRoot}
        onMouseLeave={onMouseLeaveRoot}
      >

        <span className='k-select__label-text'>{displayTitle || props.placeholder}</span>
        <KIcon className='k-select__current__label__arrow-icon' icon='expand_more' size={18} />

        {open && (MenuList)}
      </div>
      {!isRender && <div ref={templateRef} className='k-select-template'>{MenuList}</div>}
    </>
  );
});

KSelect.defaultProps = {
  noDataText: 'No Data',
};
KSelect.displayName = 'KSelect';
export default memo(KSelect);
