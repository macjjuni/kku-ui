import { CSSProperties, forwardRef, KeyboardEvent, Ref, useImperativeHandle, useMemo, useRef, useState } from 'react';
import type { KSelectItemType, KSelectProps, KSelectRefs } from '@/components/input/select/KSelect.interface';
import { initDisabled, initSize } from '@/common/util/variation';
import { KIcon } from '@/components';
import KSelectList from '@/components/input/select/KSelectList';
import { useCleanId } from '@/common/hook/useCleanId';


const KSelect = forwardRef((props: KSelectProps, ref: Ref<KSelectRefs>) => {

  // region [Hooks]

  const selectRef = useRef<HTMLDivElement>(null);
  const isOnMouse = useRef<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const selectListId = useCleanId('k-select-list');

  // endregion


  // region [Styles]

  const rootClass = () => {
    const clazz = [];

    if (open) {
      clazz.push('k-select--open');
    }
    if (props.className) {
      clazz.push(props.className);
    }
    initSize(clazz, 'k-select', props.size);
    initDisabled(clazz, 'k-select', props.disabled);

    return clazz.join(' ');
  }

  const rootStyle = () => {
    const style: CSSProperties = props.width ? { width: props.width } : {};

    return { ...style, ...props.style };
  }

  // endregion


  // region [Privates]

  const onSelectOpen = () => {
    setOpen(true);
  }

  const onSelectClose = () => {
    setOpen(false);
  }

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

  const onClickRoot = () => {
    if (!open && !props.disabled) {
      onSelectOpen();
      return;
    }
    onSelectClose();
  }

  const onFocusRoot = () => {
    if (props.onFocus) {
      props.onFocus();
    }
  }

  const onBlurRoot = () => {
    if (open && !isOnMouse.current) {
      onSelectClose();
    }
    if (props.onBlur) {
      props.onBlur();
    }
  }

  const onMouseEnterRoot = () => {
    isOnMouse.current = true;
  }

  const onMouseLeaveRoot = () => {
    isOnMouse.current = false;
  }

  const onKeyUpRoot = (e: KeyboardEvent<HTMLDivElement>) => {
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
  }

  const onClickListItem = (item: KSelectItemType | null) => {
    if (item === null) {
      return;
    }

    props.onChange(item.value);
    onSelectClose();
  }

  const onFocusListItem = () => {
    isOnMouse.current = false;
  }

  // eslint-disable-next-line max-len
  const onKeydownListItem = (e: KeyboardEvent<HTMLLIElement>, item: KSelectItemType | null, idx: number) => {
    if (item && (e.key === 'Enter' || e.key === ' ')) {
      props.onChange(item.value);
    }

    if ((props.items.length - 1 === idx || idx === -1) && (!e.shiftKey && e.key === 'Tab')) {
      onSelectClose();
    }

  }

  // endregion


  useImperativeHandle(ref, () => ({
    open: () => {
      onSelectOpen();
    },
    close: () => {
      onSelectClose();
    },
  }));


  return (
    <div ref={selectRef} id={props.id} className={`k-select ${rootClass()}`} data-testid='k-select'
         style={rootStyle()} tabIndex={props.disabled ? -1 : 0} role='button' onClick={onClickRoot}
         onKeyUp={onKeyUpRoot} onFocus={onFocusRoot} onBlur={onBlurRoot} onMouseEnter={onMouseEnterRoot}
         onMouseLeave={onMouseLeaveRoot} aria-expanded={open}>
      {displayTitle}

      <KIcon className='k-select__current__label__arrow-icon' icon='keyboard_arrow_down' size={16}/>

      <KSelectList id={selectListId} open={open} items={props.items} onClick={onClickListItem}
                   onFocus={onFocusListItem} onKeyDown={onKeydownListItem} noDataText={props?.noDataText || 'No Data'}/>
    </div>
  );

  // endregion

});

KSelect.displayName = 'KSelect';

export default KSelect;
