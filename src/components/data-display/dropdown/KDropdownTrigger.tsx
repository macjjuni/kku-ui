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
import { handleKeyInteraction } from '@/common/util/keyboard';
import { useClickOutside } from '@/common/hooks';

const DropdownTrigger = forwardRef<HTMLDivElement, KDropdownTriggerProps>((props, ref) => {

  // region [Hooks]
  const { children, onClick, onMouseEnter, onMouseLeave, onKeyDown, onFocus, onBlur, ...restProps } = props;
  const { triggerRef, contentRef, trigger, open, onOpen, onClose, onFocusContent } = useKDropdownContext();

  useImperativeHandle(ref, () => triggerRef.current!, []);
  // endregion

  // region [Events]
  const onClickRoot = useCallback((e: MouseEvent<HTMLDivElement>) => {
    onClick?.(e);
    if (trigger === 'click') {
      onOpen();
    }
  }, [onClick, trigger]);

  const onMouseEnterRoot = useCallback((e: MouseEvent<HTMLDivElement>) => {
    onMouseEnter?.(e);
    if (trigger === 'hover') {
      onOpen();
    }
  }, [trigger, onMouseEnter]);

  const onMouseLeaveRoot = useCallback((e: MouseEvent<HTMLDivElement>) => {
    onMouseLeave?.(e);
    if (trigger === 'hover') {
      onClose();
    }
  }, [trigger, onMouseLeave]);

  const onKeyDownRoot = useCallback((e: KeyboardEvent<HTMLDivElement>) => {
    onKeyDown?.(e);
    handleKeyInteraction(e, onOpen);

    const isHoverTriggerTab = trigger === 'hover' && e.key === 'Tab' && !e.shiftKey;
    const isClickTriggerTab = trigger === 'click' && open && e.key === 'Tab' && !e.shiftKey;

    if (isHoverTriggerTab || isClickTriggerTab) {
      e.preventDefault();
      onFocusContent()
    }
  }, [onKeyDown, trigger, open]);

  const onFocusRoot = useCallback((e: FocusEvent<HTMLDivElement>) => {
    onFocus?.(e);
    if (trigger === 'hover') {
      onOpen();
    }
  }, [onFocus, trigger]);

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
    <div {...restProps} tabIndex={0} ref={triggerRef} className="k-dropdown__trigger" onKeyDown={onKeyDownRoot}
         onClick={onClickRoot} onMouseEnter={onMouseEnterRoot} onMouseLeave={onMouseLeaveRoot} onFocus={onFocusRoot}
         onBlur={onBlurRoot}>
      {Content}
    </div>
  );
});


const KDropdownTrigger = memo(DropdownTrigger);
KDropdownTrigger.displayName = 'Dropdown.Trigger';
DropdownTrigger.displayName = 'Dropdown.Trigger';

export default KDropdownTrigger;