import { forwardRef, KeyboardEvent, memo, MouseEvent, useCallback, useImperativeHandle, useMemo, useRef } from 'react';
import { KMenuItemProps } from './KMenu.interface';
import { MenuItem as CoreMenuItem } from '@/core';
import { useRipple } from '@/common/hooks';
import { handleKeyInteraction } from '@/common/util/keyboard';


const MenuItem = forwardRef<HTMLLIElement, KMenuItemProps>((props, ref) => {

  // region [Hooks]
  const {
    children, className, style, size = 'medium',
    leftContent, label, rightContent, shortcut,
    disabled, onClick, onMouseDown, onMouseLeave,
    onMouseUp, onKeyDown, onKeyUp,
    ...restProps
  } = props;
  const rootRef = useRef<HTMLLIElement>(null);
  const ripple = useRipple(rootRef);

  useImperativeHandle(ref, () => rootRef.current!, []);
  // endregion

  // region [Styles]
  const rootClass = useMemo(() => {
    const clazz = ['k-menu-item', `k-menu-item--${size}`];
    if (className) {
      clazz.push(className);
    }
    if (disabled) {
      clazz.push('k-menu-item--disabled');
    }
    return clazz.join(' ');
  }, [className, size]);

  const rootStyle = useMemo(() => ({ ...style }), [style]);
  // endregion

  // region [Events]
  const onClickRoot = useCallback((e: MouseEvent<HTMLLIElement>) => {
    if (!disabled) {
      onClick?.(e);
    }
  }, [disabled, onClick]);

  const onMouseDownRoot = useCallback((e: MouseEvent<HTMLLIElement>) => {
    onMouseDown?.(e);
    if (!disabled) {
      ripple?.register(e);
    }
  }, [ripple, onMouseDown]);

  const onMouseUpRoot = useCallback((e: MouseEvent<HTMLLIElement>) => {
    onMouseUp?.(e);
    ripple.remove();
  }, [ripple, onMouseUp]);

  const onMouseLeaveRoot = useCallback((e: MouseEvent<HTMLLIElement>) => {
    onMouseLeave?.(e);
    ripple.remove();
  }, [ripple, onMouseLeave]);

  const onKeyDownRoot = useCallback((e: KeyboardEvent<HTMLLIElement>) => {
    onKeyDown?.(e);
    ripple?.register(e);
    handleKeyInteraction(e, () => {
      onClick?.();
    });
  }, [ripple, onKeyDown]);

  const onKeyUpRoot = useCallback((e: KeyboardEvent<HTMLLIElement>) => {
    onKeyUp?.(e);
    handleKeyInteraction(e, () => ripple.remove());
  }, [ripple, onKeyUp]);
  // endregion

  // region [Templates]
  const LeftContent = useMemo(() => (
    leftContent ? <span className="k-menu-item__left-content">{leftContent}</span> : null
  ), [leftContent]);

  const Label = useMemo(() => (
    <div className="k-menu-item__label">{label}</div>
  ), [label]);

  const RightContent = useMemo(() => (
    rightContent ? <span className="k-menu-item__right-content">{rightContent}</span> : null
  ), [rightContent]);

  const Shortcut = useMemo(() => (
    shortcut ? <span className="k-menu-item__shortcut">{shortcut}</span> : null
  ), [shortcut]);
  // endregion

  return (
    <CoreMenuItem as="li" ref={rootRef} {...restProps} className={rootClass} style={rootStyle} disabled={disabled}
                  onClick={onClickRoot} onMouseDown={onMouseDownRoot} onMouseUp={onMouseUpRoot}
                  onMouseLeave={onMouseLeaveRoot} onKeyDown={onKeyDownRoot} onKeyUp={onKeyUpRoot}>
      {LeftContent}
      {Label}
      {Shortcut}
      {RightContent}
    </CoreMenuItem>
  );
});

const KMenuItem = memo(MenuItem);
KMenuItem.displayName = 'KMenu.Item';
MenuItem.displayName = 'KMenu.Item';

export default KMenuItem;
