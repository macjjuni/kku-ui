import { CSSProperties, forwardRef, KeyboardEvent, memo, Ref, useCallback, useImperativeHandle,
  useMemo, useRef, useState } from 'react';
import type { KSelectProps, KSelectRefs, KSelectItemType } from '@/components/input/select/KSelect.interface';
import { initDisabled, initSize } from '@/common/util/variation';
import { KIcon } from '@/components';
import KSelectList from '@/components/input/select/KSelectList';


const KSelect = forwardRef((props: KSelectProps, ref: Ref<KSelectRefs>) => {

  // region [Hooks]

  const selectRef = useRef<HTMLDivElement>(null);
  const isOnMouse = useRef<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  // endregion


  // region [Styles]

  const rootClass = useMemo(() => {
    const clazz = [];

    if (open) { clazz.push('k-select--open'); }
    if (props.className) { clazz.push(props.className); }
    initSize(clazz, 'k-select', props.size, props.large, props.medium, props.small);
    initDisabled(clazz, 'k-select', props.disabled);

    return clazz.join(' ');
  }, [open, props.className, props.size, props.small, props.medium, props.large, props.disabled]);

  const rootStyle = useMemo(() => {
    const style: CSSProperties = props.width ? { width: props.width } : {};

    return { ...style, ...props.style };
  }, [props.style, props.width]);

  // endregion


  // region [Privates]

  const onSelectOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const onSelectClose = useCallback(() => {
    setOpen(false);
  }, []);

  const displayTitle = useMemo(() => {

    if ((!props.value || props.value === '') && props.placeholder) {
      return (
        <span className='k-select__label-text__placeholder'>
          {props.placeholder}
        </span>
      );
    }

    const selectedItem = props.items?.find((item) => (
      item.value === props.value));

    return (
      <span className='k-select__label-text' data-testid='k-select-label'>
        {selectedItem?.title || props.value}
      </span>
    );
  }, [props.value, props.items, props.placeholder]);

  // endregion


  // region [Events]

  const onClickRoot = useCallback(() => {
    if (!open && !props.disabled) {
      onSelectOpen();
      return;
    }
    onSelectClose();
  }, [open]);

  const onFocusRoot = useCallback(() => {
    if (props.onFocus) { props.onFocus(); }
  }, []);

  const onBlurRoot = useCallback(() => {
    if (open && !isOnMouse.current) { onSelectClose(); }
    if (props.onBlur) { props.onBlur(); }
  }, [open]);

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
    if (e.key === 'Tab' && e.shiftKey && isOnMouse.current) { onSelectClose(); }
    if (e.key === 'Tab') { isOnMouse.current = true; }
  }, [open]);

  const onClickListItem = useCallback((item: KSelectItemType | null) => {
    if (item === null) { return; }

    props.onChange(item.value);
    onSelectClose();
  }, [props.value, props.items, props.onChange]);

  const onFocusListItem = useCallback(() => {
    isOnMouse.current = false;
  }, []);

  // eslint-disable-next-line max-len
  const onKeydownListItem = useCallback((e: KeyboardEvent<HTMLLIElement>, item: KSelectItemType | null, idx: number) => {
    if (item && (e.key === 'Enter' || e.key === ' ')) { props.onChange(item.value); }

    if ((props.items.length - 1 === idx || idx === -1) && (!e.shiftKey && e.key === 'Tab')) {
      onSelectClose();
    }

  }, [props.value, props.items]);

  // endregion


  useImperativeHandle(ref, () => ({
    open: () => { onSelectOpen(); },
    close: () => { onSelectClose(); },
  }));


  // region [Templates]

  return (
    <div
        ref={selectRef}
        id={props.id}
        className={`k-select ${rootClass}`}
        data-testid='k-select'
        style={rootStyle}
        tabIndex={props.disabled ? -1 : 0}
        role='button'
        onClick={onClickRoot}
        onKeyUp={onKeyUpRoot}
        onFocus={onFocusRoot}
        onBlur={onBlurRoot}
        onMouseEnter={onMouseEnterRoot}
        onMouseLeave={onMouseLeaveRoot}
    >
      {displayTitle}
      <KIcon className='k-select__current__label__arrow-icon' icon='keyboard_arrow_down' size={16} />
      <KSelectList
        open={open}
        items={props.items}
        onClick={onClickListItem}
        onFocus={onFocusListItem}
        onKeyDown={onKeydownListItem}
        noDataText={props.noDataText}
      />
    </div>
  );

  // endregion

});

KSelect.defaultProps = { noDataText: 'No Data' };
KSelect.displayName = 'KSelect';
export default memo(KSelect);
