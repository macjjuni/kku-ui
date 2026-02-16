/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/no-static-element-interactions  */

import {
  ComponentPropsWithRef,
  CSSProperties,
  KeyboardEvent,
  memo,
  MouseEvent, Ref,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
} from 'react';
import { cn } from '@/lib/utils';
import { getIcon } from '@/common/icons/icons';
import { useStableId } from '@/common/hooks';


export const ICON_SIZES = ['xs', 'sm', 'md', 'lg', 'xlg'] as const;
export type KIconSize = (typeof ICON_SIZES)[number];

export interface KIconRefs {
  click: () => void;
}

export type KIconProps = ComponentPropsWithRef<'span'> & {
  icon: string;
  size?: KIconSize | number;
  disabled?: boolean;
  color?: string;
  ref?: Ref<KIconRefs>;
};

const sizeMap: Record<KIconSize, string> = {
  xs: 'w-3 h-3 text-[12px]',
  sm: 'w-4 h-4 text-[14px]',
  md: 'w-6 h-6 text-[16px]',
  lg: 'w-8 h-8 text-[20px]',
  xlg: 'w-10 h-10 text-[24px]',
};


const KIcon = (props: KIconProps) => {
  // region hooks
  const { id, className, style, icon, size = 'md', onClick, color, disabled, ref, ...restProps } = props;

  const internalRef = useRef<HTMLSpanElement>(null);
  const uniqueId = useStableId();
  const generatedId = id || `k-icon-${uniqueId}`;
  // endregion

  // region Transactions
  useImperativeHandle(ref, () => ({
    click: () => {
      internalRef.current?.click();
    },
  }));

  const rootClass = useMemo(() => {
    const getCursorClass = () => {
      if (disabled) return 'opacity-50 cursor-not-allowed grayscale';
      if (onClick) return 'cursor-pointer';
      return 'cursor-default';
    };

    return cn(
      'k-icon inline-flex items-center justify-center shrink-0 transition-colors overflow-hidden',
      typeof size === 'string' ? sizeMap[size] : '',
      getCursorClass(),
      className,
    );
  }, [className, disabled, size, onClick]);

  const rootStyle = useMemo((): CSSProperties => {
    const styles: CSSProperties = { ...style };

    if (typeof size === 'number') {
      styles.width = `${size}px`;
      styles.height = `${size}px`;
      styles.fontSize = `${size}px`;
    }

    if (color) {
      styles.color = color;
      styles.fill = 'currentColor';
    }

    return styles;
  }, [size, color, style]);

  const currentIcon = useMemo(() => {
    if (!icon) return null;
    return getIcon(icon, color);
  }, [icon, color]);
  // endregion

  // region Events
  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLSpanElement>) => {
      if (disabled) return;
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onClick?.(e as unknown as MouseEvent<HTMLSpanElement>);
      }
    },
    [disabled, onClick],
  );
  // endregion

  if (!icon) return null;

  return (
    <span
      ref={internalRef}
      id={generatedId}
      className={rootClass}
      style={rootStyle}
      role={onClick ? 'button' : 'img'}
      tabIndex={onClick && !disabled ? 0 : undefined}
      aria-label={`${icon} icon`}
      aria-disabled={disabled}
      onClick={!disabled ? onClick : undefined}
      onKeyDown={handleKeyDown}
      {...restProps}>
      {currentIcon}
    </span>
  );
};

const MemoizedKIcon = memo(KIcon);
MemoizedKIcon.displayName = 'KIcon';

export { MemoizedKIcon as KIcon };