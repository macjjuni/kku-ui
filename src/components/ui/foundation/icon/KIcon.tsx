/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/no-static-element-interactions  */
import {
  CSSProperties,
  forwardRef,
  memo,
  useCallback,
  useId,
  useImperativeHandle,
  useMemo,
  useRef,
  KeyboardEvent,
  ComponentPropsWithoutRef,
} from 'react';
import { cn } from '@/lib/utils';
import { getIcon } from '@/common/icons/icons';

// --- Types ---
export const ICON_SIZES = ['xs', 'sm', 'md', 'lg', 'xlg'] as const;
export type KIconSize = (typeof ICON_SIZES)[number];

export interface KIconRefs {
  click: () => void;
}

export type KIconProps = ComponentPropsWithoutRef<'span'> & {
  // eslint-disable-next-line react/no-unused-prop-types
  icon: string;
  // eslint-disable-next-line react/no-unused-prop-types
  size?: KIconSize | number;
  // eslint-disable-next-line react/no-unused-prop-types
  disabled?: boolean;
  // eslint-disable-next-line react/no-unused-prop-types
  color?: string;
};

const sizeMap: Record<KIconSize, string> = {
  xs: 'w-3 h-3 text-[12px]',
  sm: 'w-4 h-4 text-[14px]',
  md: 'w-6 h-6 text-[16px]',
  lg: 'w-8 h-8 text-[20px]',
  xlg: 'w-10 h-10 text-[24px]',
};

// --- Component ---
// forwardRef의 첫 번째 제네릭을 KIconRefs로 변경하여 TS2740 해결
const KIcon = memo(
  forwardRef<KIconRefs, KIconProps>((props, ref) => {
    const { id, className, style, icon, size = 'md', onClick, color, disabled, ...restProps } = props;

    const internalRef = useRef<HTMLSpanElement>(null);
    const uniqueId = useId();
    const generatedId = id || `k-icon-${uniqueId}`;

    useImperativeHandle(ref, () => ({
      click: () => {
        internalRef.current?.click();
      },
    }));

    const isClickable = !!onClick && !disabled;

    const rootClass = useMemo(() => {
      return cn(
        'inline-flex items-center justify-center shrink-0 transition-colors overflow-hidden', // overflow-hidden 추가
        typeof size === 'string' ? sizeMap[size] : '',
        isClickable && 'cursor-pointer',
        disabled && 'opacity-50 cursor-not-allowed grayscale',
        className,
      );
    }, [className, disabled, size, isClickable]);

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

    const handleKeyDown = useCallback(
      (e: KeyboardEvent<HTMLSpanElement>) => {
        if (disabled) return;
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          // any 대신 올바른 타입 캐스팅으로 ESLint 해결
          onClick?.(e as unknown as React.MouseEvent<HTMLSpanElement>);
        }
      },
      [disabled, onClick],
    );

    if (!icon) return null;

    return (
      <span
        ref={internalRef}
        id={generatedId}
        className={rootClass}
        style={rootStyle}
        role={onClick ? 'button' : 'img'}
        tabIndex={isClickable ? 0 : undefined}
        aria-label={`${icon} icon`}
        aria-disabled={disabled}
        onClick={!disabled ? onClick : undefined}
        onKeyDown={handleKeyDown}
        {...restProps}>
        {currentIcon}
      </span>
    );
  }),
);

KIcon.displayName = 'KIcon';

export { KIcon };