import { CSSProperties, memo, useCallback, useMemo, KeyboardEvent } from 'react';
import { KCardProps } from '@/components';
import './KCard.scss';


const Card = ({ ...restProps }: KCardProps) => {

  // region [Hooks]

  const { children, id, className, style } = { ...restProps };
  const { title, subTitle, disabled } = { ...restProps };
  const { width, height, padding, color, fontColor, borderRadius = '8px', onClick } = { ...restProps };
  const { borderColor, size = 'medium' } = { ...restProps };

  // endregion


  // region [Styles]

  const rootClass = useMemo(() => {

    const clazz = ['k-card'];

    if (className) { clazz.push(className); }
    if (onClick) { clazz.push('k-card--clickable'); }
    if (disabled) { clazz.push('k-card--disabled'); }
    if (size) { clazz.push(`k-card--${size}`) }

    return clazz.join(' ');
  }, [className, onClick, size, disabled]);


  const rootStyle = useMemo(() => {

    const styles: CSSProperties = { ...style };

    if (width !== undefined) { styles.width = width; }
    if (height !== undefined) { styles.height = height; }
    if (padding !== undefined) { styles.padding = padding; }
    if (borderRadius !== undefined) { styles.borderRadius = borderRadius; }
    if (borderColor) { styles.borderColor = borderColor; }
    if (fontColor) { styles.color = fontColor; }

    return styles;
  }, [style, borderRadius, width, height, padding, color, fontColor, borderColor]);


  // endregion


  // region [Events]

  const onKeydownRoot = useCallback((e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      if (!disabled) { onClick?.(); }
    }
  }, [disabled, onClick]);

  const onClickRoot = useCallback(() => {
    if (!disabled) { onClick?.(); }
  }, [disabled, onClick]);

  // endregion


  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div id={id} className={rootClass} style={rootStyle} tabIndex={onClick && !disabled ? 0 : -1}
         onClick={onClickRoot} onKeyDown={onClick ? onKeydownRoot : undefined} role={onClick ? 'button' : undefined}
         data-testid='k-card'>
      {title && (<h2 className='k-card__title'>{title}</h2>)}
      {subTitle && (<p className='k-card__sub-title'>{subTitle}</p>)}
      {children}
    </div>
  );
};

const KCard = memo(Card);
Card.displayName = 'KCard';
KCard.displayName = 'KCard';

export default KCard;
