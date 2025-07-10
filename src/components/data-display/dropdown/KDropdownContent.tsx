import { createPortal } from 'react-dom';
import {
  CSSProperties,
  FocusEvent,
  forwardRef,
  KeyboardEvent,
  memo,
  MouseEvent,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
} from 'react';
import { KDropdownContentProps } from './KDropdown.interface';
import { useDropdownPosition, useSafePortalContainer } from '@/common/hooks';
import { useKDropdownContext } from '@/components/data-display/dropdown/KDropdown.context';
import { Transition } from '@/core';
import { handleKeyInteraction } from '@/common/util/keyboard';


const TRANSITION_DELAY = 240;

const DropdownContent = forwardRef<HTMLDivElement | null, KDropdownContentProps>((props, ref) => {

  // region [Hooks]
  const {
    className, style, children, onClick, onMouseEnter, onMouseLeave,
    onFocus, onBlur, onKeyDown, autoClose = true, gap = 2, offset,
    container, zIndex, ...restProps
  } = props;
  const { open, triggerRef, contentRef, position, onOpen, onClose, onBlurContent, trigger } = useKDropdownContext();
  const { top, left } = useDropdownPosition({
    triggerRef,
    contentRef,
    position,
    offset,
    open,
    gap,
  });
  const defaultContainer = useSafePortalContainer(container);
  useImperativeHandle(ref, () => contentRef.current!);
  // endregion

  // region [Styles]
  const rootClass = useMemo(() => {
    const clazz = ['k-dropdown__content'];
    if (className) {
      clazz.push(className);
    }
    return clazz.join(' ');
  }, [className]);

  const rootStyle = useMemo((): CSSProperties => {
    return { ...style, position: 'fixed', top, left, zIndex };
  }, [style, top, left, zIndex]);
  // endregion

  // region [Privates]
  // endregion

  // region [Events]
  const onClickRoot = useCallback((e: MouseEvent<HTMLDivElement>) => {
    onClick?.(e);
    if (autoClose) {
      onClose();
    }
  }, [onClick, autoClose]);

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
    handleKeyInteraction(e, onClose);
    if (e.key === 'Tab' && e.shiftKey) {
      onBlurContent(e);
    }
  }, [onKeyDown]);

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

  // region [LifeCycles]
  useEffect(() => {
    if (open) {
      // onFocusFirstItem();
    }
  }, [open]);
  // endregion

  if (!defaultContainer) { return; }

  return createPortal(
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div ref={contentRef} {...restProps} className={rootClass} style={rootStyle}
         onClick={onClickRoot} onMouseEnter={onMouseEnterRoot} onMouseLeave={onMouseLeaveRoot}
         onFocus={onFocusRoot} onBlur={onBlurRoot} onKeyDown={onKeyDownRoot}>
      <Transition isOpen={open} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  transition={{ duration: TRANSITION_DELAY / 1000 }}>
        {children}
      </Transition>
    </div>,
    defaultContainer,
  );
});


const KDropdownContent = memo(DropdownContent);
KDropdownContent.displayName = 'Dropdown.Content';
DropdownContent.displayName = 'Dropdown.Content';

export default KDropdownContent;