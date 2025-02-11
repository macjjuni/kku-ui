import { CSSProperties, memo, useMemo } from 'react';
import { KCardProps } from './KCard.interface';
import { initVariant } from '@/common/util/variation';


const KCard = ({ ...restProps }: KCardProps) => {

  // region [Hooks]

  const {
    children, id, className, style, title, subTitle, clickable, width, height, color, padding,
    fontColor, borderRadius = '8px', onClick, variant = 'outlined',
  }: KCardProps = { ...restProps };

  // endregion


  // region [Styles]

  const rootClass = useMemo(() => {

    const clazz = [];

    if (className) {
      clazz.push(className);
    }
    if (clickable) {
      clazz.push('k-card__clickable');
    }

    initVariant(clazz, 'k-card', variant);

    return clazz.join(' ');
  }, [className, clickable, variant]);


  const rootStyle = useMemo(() => {

    const styles: CSSProperties = { ...style };

    if (width) {
      styles.width = width;
    }
    if (height) {
      styles.height = height;
    }
    if (fontColor) {
      styles.color = fontColor;
    }

    if (padding) {
      styles.padding = padding;
    }

    if (variant === 'outlined') {
      styles.borderColor = color;
    }
    if (variant === 'contained') {
      styles.background = color;
      styles.borderColor = 'transparent';
    }

    return styles;
  }, [style, borderRadius, width, height, padding, color, fontColor, variant]);


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
