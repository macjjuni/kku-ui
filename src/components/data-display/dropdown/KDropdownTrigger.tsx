import {
  Children,
  cloneElement,
  FocusEvent,
  forwardRef,
  isValidElement,
  KeyboardEvent,
  memo,
  MouseEvent,
  ReactElement,
  useCallback,
  useImperativeHandle,
  useMemo,
} from 'react';
import { KDropdownTriggerProps } from '@/components/data-display/dropdown/KDropdown.interface';
import { useKDropdownContext } from '@/components/data-display/dropdown/KDropdown.context';
import { handleEnterOrSpacePress } from '@/common/util/keyboard';
import { useClickOutside } from '@/common/hooks';

const DropdownTrigger = forwardRef<HTMLDivElement, KDropdownTriggerProps>((props, ref) => {

  // region [Hooks]
  const {
    children, className, onClick, disabled, onMouseEnter, onMouseLeave,
    onKeyDown, onFocus, onBlur, ...restProps
  } = props;
  const { id, triggerRef, contentRef, trigger, open, onOpen, onClose, onFocusContent } = useKDropdownContext();
  const TabIndex = useMemo(() => (!disabled ? 0 : -1), [disabled]);

  useImperativeHandle(ref, () => triggerRef.current!, []);
  // endregion

  // region [Events]
  const rootClass = useMemo(() => {
    const clazz = ['k-dropdown__trigger'];
    if (className) {
      clazz.push(className);
    }
    if (disabled) {
      clazz.push('k-dropdown__trigger--disabled');
    }
    return clazz.join(' ');
  }, [className, disabled]);

  // endregion

  // region [Events]
  const onClickRoot = useCallback((e: MouseEvent<HTMLDivElement>) => {
    onClick?.(e);
    if (trigger === 'click' && !disabled) {
      onOpen();
    }
  }, [onClick, trigger, disabled]);

  const onMouseEnterRoot = useCallback((e: MouseEvent<HTMLDivElement>) => {
    onMouseEnter?.(e);
    if (trigger === 'hover' && !disabled) {
      onOpen();
    }
  }, [trigger, onMouseEnter, disabled]);

  const onMouseLeaveRoot = useCallback((e: MouseEvent<HTMLDivElement>) => {
    onMouseLeave?.(e);
    if (trigger === 'hover') {
      onClose();
    }
  }, [trigger, onMouseLeave]);

  const onKeyDownRoot = useCallback((e: KeyboardEvent<HTMLDivElement>) => {
    onKeyDown?.(e);

    if (disabled) {
      return;
    }
    handleEnterOrSpacePress(e, onOpen);

    const isHoverTriggerTab = trigger === 'hover' && e.key === 'Tab' && !e.shiftKey;
    const isClickTriggerTab = trigger === 'click' && open && e.key === 'Tab' && !e.shiftKey;

    if (isHoverTriggerTab || isClickTriggerTab) {
      e.preventDefault();
      onFocusContent();
    }
  }, [onKeyDown, trigger, open, disabled]);

  const onFocusRoot = useCallback((e: FocusEvent<HTMLDivElement>) => {
    onFocus?.(e);
    if (trigger === 'hover' && !disabled) {
      onOpen();
    }
  }, [onFocus, trigger, disabled]);

  const onBlurRoot = useCallback((e: FocusEvent<HTMLDivElement>) => {
    onBlur?.(e);
    if (trigger === 'hover') {
      onClose();
    }
  }, [onBlur, trigger]);
  // endregion

  // region [Templates]
  const Content = useMemo(() => {
    return Children.map(children, (child) => {
      if (!isValidElement(child)) return child;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return cloneElement(child as ReactElement<any>, { tabIndex: -1 });
    });
  }, [children]);
  // endregion

  useClickOutside(contentRef, onClose, triggerRef);

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex,jsx-a11y/no-static-element-interactions
    <div {...restProps} tabIndex={TabIndex} ref={triggerRef} className={rootClass}
         role="button" id={id} aria-controls={open ? id : undefined} aria-expanded={open} aria-haspopup="true"
         onKeyDown={onKeyDownRoot} onClick={onClickRoot} onMouseEnter={onMouseEnterRoot}
         onMouseLeave={onMouseLeaveRoot} onFocus={onFocusRoot} onBlur={onBlurRoot}>
      {Content}
    </div>
  );
});


const KDropdownTrigger = memo(DropdownTrigger);
KDropdownTrigger.displayName = 'Dropdown.Trigger';
DropdownTrigger.displayName = 'Dropdown.Trigger';

export default KDropdownTrigger;