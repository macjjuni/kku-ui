import { forwardRef, KeyboardEvent, memo, MouseEvent, PointerEvent, useCallback, useImperativeHandle, useMemo, useRef } from 'react';
import { KMenuItemProps } from './KMenu.interface';
import { MenuItem as CoreMenuItem } from 'src/core';
import { useRipple } from 'src/common/hooks';
import { handleEnterOrSpacePress } from 'src/common/util/keyboard';


const MenuItem = forwardRef<HTMLLIElement, KMenuItemProps>((props, ref) => {

  // region [Hooks]
  const {
    children, className, style, size = 'medium',
    leftContent, label, rightContent, shortcut,
    disabled, onClick, onMouseDown, onMouseLeave,
    onMouseUp, onKeyDown, onKeyUp, onPointerUp, onPointerDown,
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
  const onMouseDownRoot = useCallback((e: MouseEvent<HTMLLIElement>) => {
    if (!disabled) {
      onMouseDown?.(e);
    }
  }, [ripple, onMouseDown, disabled]);

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
    handleEnterOrSpacePress(e, () => {
      onClick?.();
    });
  }, [ripple, onKeyDown]);

  const onKeyUpRoot = useCallback((e: KeyboardEvent<HTMLLIElement>) => {
    onKeyUp?.(e);
    handleEnterOrSpacePress(e, () => ripple.remove());
  }, [ripple, onKeyUp]);

  const onPointerDownRoot = useCallback((e: PointerEvent<HTMLLIElement>) => {
    if (!disabled) {
      onClick?.(e as MouseEvent<HTMLLIElement>)
      ripple?.register(e);
    }
    onPointerDown?.(e);
  }, [ripple, disabled, onMouseDown]);

  const onPointerUpRoot = useCallback((e: PointerEvent<HTMLLIElement>) => {
    ripple.remove();
    onPointerUp?.(e);
  }, [ripple]);
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
                  onMouseDown={onMouseDownRoot} onMouseUp={onMouseUpRoot}
                  onPointerDown={onPointerDownRoot} onPointerUp={onPointerUpRoot}
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
