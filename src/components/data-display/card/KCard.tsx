import { CSSProperties, memo, useCallback, useMemo, KeyboardEvent, useRef, MouseEvent } from 'react';
import { KCardProps } from '@/components';
import './KCard.scss';
import useRipple from '@/common/hook/useRipple';

const isValidAspectRatio = (value?: string): boolean => {
  return value ? /^\d+\/\d+$/.test(value) : false;
};

const Card = ({ ...restProps }: KCardProps) => {

  // region [Hooks]

  const { id, className, style, children } = restProps;
  const { title, subTitle, disabled } = restProps;
  const { width, height, aspectRatio, onClick } = restProps;
  const containerRef = useRef<HTMLDivElement>(null);
  const ripple = useRipple(containerRef);

  // endregion


  // region [Styles]

  const rootClass = useMemo(() => {
    const clazz = ['k-card'];

    if (className) clazz.push(className);
    if (onClick) clazz.push('k-card--clickable');
    if (disabled) clazz.push('k-card--disabled');

    return clazz.join(' ');
  }, [className, onClick, disabled]);

  const rootStyle = useMemo(() => {

    const styles: CSSProperties = { ...style };

    if (width !== undefined) styles.width = width;
    if (height !== undefined) {
      styles.height = height;
    } else if (isValidAspectRatio(aspectRatio)) {
      styles.aspectRatio = aspectRatio;
    }

    return styles;
  }, [style, width, height, aspectRatio]);

  // endregion


  // region [Events]

  const onKeydownRoot = useCallback((e: KeyboardEvent<HTMLDivElement>) => {
    if ((e.key === 'Enter' || e.key === ' ') && !disabled) {
      onClick?.();
    }
  }, [disabled, onClick]);

  const onClickRoot = useCallback(() => {
    if (!disabled) {
      onClick?.();
    }
  }, [disabled, onClick]);

  const onMouseDownRoot = useCallback((e: MouseEvent<HTMLDivElement>) => {
    if (!disabled && onClick) {
      ripple?.register(e);
    }
  }, [disabled, onClick])

  const onMouseUpRoot = useCallback(() => {
    if (onClick) { ripple.remove(); }
  }, [onClick, ripple]);

  // endregion


  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div id={id} className={rootClass} style={rootStyle} tabIndex={onClick && !disabled ? 0 : -1}
         role={onClick ? 'button' : undefined} onClick={onClickRoot} onKeyDown={onClick ? onKeydownRoot : undefined}
         data-testid='k-card'>
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
      <div ref={containerRef} className='k-card__container' onMouseDown={onMouseDownRoot} onMouseUp={onMouseUpRoot} >
        {title && <h2 className='k-card__title'>{title}</h2>}
        {subTitle && <p className='k-card__sub-title'>{subTitle}</p>}
        {children}
      </div>
    </div>
  );
};

const KCard = memo(Card);
Card.displayName = 'KCard';
KCard.displayName = 'KCard';

export default KCard;
