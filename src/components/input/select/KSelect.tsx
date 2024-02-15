import {
  forwardRef, KeyboardEvent, memo, Ref, useCallback, useImperativeHandle,
  useMemo, useRef, useState,
} from 'react';
import type { KSelectProps, KSelectRefs, KSelectItemType } from '@/components/input/select/KSelect.interface';
import { initSize } from '@/common/util/variation';
import { KIcon } from '@/components';


const KSelect = forwardRef((props: KSelectProps, ref: Ref<KSelectRefs>) => {

  // region [Hooks]

  const selectRef = useRef<HTMLDivElement>(null);
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
    return props.style || {};
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
    // if (open) { onSelectOff(); }
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


  // region [LifeCycle]

  // endregion


  return (

    <div className={`k-select ${rootClass}`} style={rootStyle}>
      <div
        ref={selectRef}
        tabIndex={0}
        role='button'
        className='k-select__showcase'
        onClick={onClickOpen}
        onKeyDown={onKeyDown}
        onBlur={onBlur}
        // onBlur={onBlur}
      >
        <span className='k-select__showcase__label'>
          {displayValue}
        </span>
        <KIcon className='k-select__showcase__arrow-icon' icon='expand_more' size={18} />
      </div>

      {
        // open && (
        <ul className='k-select__menu-list'>
          {props.items.map((item) => (
            <li
              key={item.value}
              role='menuitem'
              tabIndex={0}
              onClick={() => { onClickItem(item); }}
              onKeyDown={(e) => { onKeydownItem(e, item); }}
              className='k-select__menu-item'
            >
              {item.value}
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
