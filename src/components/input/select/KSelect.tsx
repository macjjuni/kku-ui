import {
  CSSProperties,
  forwardRef, KeyboardEvent, memo, Ref, useCallback, useImperativeHandle,
  useMemo, useRef, useState,
} from 'react';
import type { KSelectProps, KSelectRefs, KSelectItemType } from '@/components/input/select/KSelect.interface';
import { initSize } from '@/common/util/variation';
import { KIcon } from '@/components';


const KSelect = forwardRef((props: KSelectProps, ref: Ref<KSelectRefs>) => {

  // region [Hooks]

  const selectRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const isOnMouse = useRef<boolean>(false);
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

    return clazz.join(' ');
  }, [props.className, open]);

  const rootStyle = useMemo(() => {
    const style: CSSProperties = props.width ? { width: props.width } : {};

    return style;
  }, [props.style]);

  // endregion


  // region [Privates]

  const displayValue = useMemo(() => {

    if ((!props.value || props.value === '') && props.placeholder) { // placeholder
      return 'props.placeholder';
    }

    const selectedItem = props.items?.find((item) => item.value === props.value);

    if (selectedItem) { return selectedItem.title; }

    return props.value;
  }, [props.value, props.items]);

  const onSelectOpen = useCallback(() => {
    setOpen(true);

  }, []);

  const onSelectOff = useCallback(() => {
    setOpen(false);
  }, []);

  // endregion


  // region [Events]

  const onClickRoot = useCallback(() => {
    if (!open) {
      onSelectOpen();
      return;
    }
    onSelectOff();
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

  const onBlurRoot = useCallback(() => {
    if (open && !isOnMouse.current) { onSelectOff(); }
  }, [open]);

  const onClickListItem = useCallback((item: KSelectItemType) => {
    props.onChange(item.value);
    onSelectOff();
  }, [props.value, props.items, props.onChange]);

  const onFocusListItem = useCallback(() => {
    isOnMouse.current = false;
  }, []);

  const onKeydownListItem = useCallback((e: KeyboardEvent<HTMLLIElement>, item: KSelectItemType, idx: number) => {
    if (e.key === 'Enter' || e.key === ' ') { props.onChange(item.value); }

    if (props.items.length - 1 === idx && (!e.shiftKey && e.key === 'Tab')) {
      onSelectOff();
    }
  }, [props.value, props.items]);


  // endregion


  // region [LifeCycle]
  // endregion

  // TODO: 1. 선택된 Item 마다 Width가 변경되는 이슈
  // TODO: 2. Items가 없을 경우 알림 메세지 추가(prop으로도 받음)
  // TODO: 3. disabled, placeholder 기능 구현


  return (

    <div
        ref={selectRef}
        className={`k-select ${rootClass}`}
        style={rootStyle}
        tabIndex={0}
        role='button'
        onClick={onClickRoot}
        onKeyDown={onKeyDownRoot}
        onBlur={onBlurRoot}
        onMouseEnter={onMouseEnterRoot}
        onMouseLeave={onMouseLeaveRoot}
    >

      {displayValue}

      <KIcon className='k-select__current__label__arrow-icon' icon='expand_more' size={18} />

      {
        open && (
          <ul ref={listRef} className='k-select__menu-list'>
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
          </ul>
        )
      }

    </div>
  );
});

KSelect.defaultProps = {};
KSelect.displayName = 'KSelect';
export default memo(KSelect);
