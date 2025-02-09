import { CSSProperties, memo, useMemo } from 'react';
import { KCardProps } from './KCard.interface';
import { initVariant } from '../../../src/common/util/variation';


const KCard = ({ children, id, className, style, title, subTitle, clickable, width, height, color,
  fontColor, rounded, borderRadius = '8px', onClick, variant, contained, outlined }: KCardProps) => {

  // region [Hooks]
  // endregion


  // region [Styles]

  const rootClass = useMemo(() => {

    const clazz = [];

    if (className) { clazz.push(className); }
    if (rounded) { clazz.push('k-card--rounded'); }
    if (clickable) { clazz.push('k-card__clickable'); }

    initVariant(clazz, 'k-card', variant, contained, outlined);

    return clazz.join(' ');
  }, [className, rounded, clickable, variant, contained, outlined]);


  const rootStyle = useMemo(() => {

    const styles: CSSProperties = { ...style };

    if (rounded) { styles.borderRadius = borderRadius; }
    if (width) { styles.width = width; }
    if (height) { styles.height = height; }
    if (fontColor) { styles.color = fontColor; }

    if (variant || contained || outlined) {
      if (variant === 'outlined' || outlined) {
        styles.borderColor = color;
      }
      if (variant === 'contained' || contained) {
        styles.background = color;
        styles.borderColor = 'transparent';
      }
    }

    return styles;
  }, [style, rounded, borderRadius, width, height,
    color, fontColor, variant, outlined, contained]);


  // endregion


  // region [Template]

  const CardTitle = useMemo(() => (

    title ? (<h2 className='k-card__title'>{title}</h2>) : null
  ), [title]);

  const CardSubTitle = useMemo(() => (

    subTitle ? (<p className='k-card__sub-title'>{subTitle}</p>) : null
  ), [subTitle]);

  // endregion


  return (
  // eslint-disable-next-line jsx-a11y/no-static-element-interactions,jsx-a11y/click-events-have-key-events
    <div id={id} className={`k-card ${rootClass}`} style={rootStyle} data-testid='k-card-testid'
        onClick={onClick}>
      {CardTitle}
      {CardSubTitle}
      {children}
    </div>
  );
};

KCard.displayName = 'KCard';
export default memo(KCard);
