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

  const onClickOpen = useCallback(() => {
    if (!open) {
      onSelectOpen();
      return;
    }
    onSelectOff();
  }, [open]);

  const onMouseEnter = useCallback(() => {
    isOnMouse.current = true;
  }, []);

  const onMouseLeave = useCallback(() => {
    isOnMouse.current = false;
  }, []);

  const onKeyDown = useCallback((e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      if (!open) {
        onSelectOpen();
        return;
      }
      onSelectOff();
    }
  }, [open]);

  const onBlur = useCallback(() => {
    if (open && !isOnMouse.current) {
      onSelectOff();
    }
  }, [open]);

  const onClickItem = useCallback((item: KSelectItemType) => {
    props.onChange(item.value);
    onSelectOff();
  }, [props.value, props.items]);

  const onKeydownItem = useCallback((e: KeyboardEvent<HTMLLIElement>, item: KSelectItemType) => {
    if (e.key === 'Enter' || e.key === ' ') { props.onChange(item.value); }
    onSelectOff();
  }, [props.value, props.items]);


  // endregion


  // const initialRootWidth = useCallback(() => {
  //   if (!props.width) {
  //     selectRef.current?.style.setProperty('width', `${listRef.current?.clientWidth}px`);
  //   }
  //
  // }, []);

  // region [LifeCycle]

  // useEffect(() => {
  //   initialRootWidth();
  // }, []);

  // endregion


  return (

    <div
        ref={selectRef}
        className={`k-select ${rootClass}`}
        style={rootStyle}
        tabIndex={0}
        role='button'
        onClick={onClickOpen}
        onKeyDown={onKeyDown}
        onBlur={onBlur}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
    >

      {displayValue}
      <KIcon className='k-select__current__label__arrow-icon' icon='expand_more' size={18} />

      {
        // open && (
        <ul ref={listRef} className='k-select__menu-list'>
          {props.items.map((item) => (
            <li
              key={item.value}
              role='menuitem'
              tabIndex={0}
              onClick={() => { onClickItem(item); }}
              onKeyDown={(e) => { onKeydownItem(e, item); }}
              className='k-select__menu-list__item'
            >
              {item.title}
            </li>
          ))}
        </ul>
        // )
      }

    </div>
  );
});

KSelect.defaultProps = {};
KSelect.displayName = 'KSelect';
export default memo(KSelect);
