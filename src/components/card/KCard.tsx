import { memo, useMemo } from 'react';
import { KCardProps } from '@/components/card/KCard.interface';
import { initVariant } from '@/common/util/variation';


const borderRadius = '8px';


const KCard = (props: KCardProps) => {

  // region [Hooks]
  // endregion


  // region [Styles]

  const rootClass = useMemo(() => {

    const clazz = [];

    if (props.className) { clazz.push(props.className); }
    if (props.rounded) { clazz.push('k-card--rounded'); }
    if (props.clickable) { clazz.push('k-card__clickable'); }

    initVariant(clazz, 'k-card', props.variant, props.contained, props.outlined);

    return clazz.join(' ');
  }, [props.className, props.rounded, props.clickable, props.variant, props.contained, props.outlined]);

  const rootStyle = useMemo(() => {

    const style = props.style ? props.style : {};

    if (props.rounded) { style.borderRadius = props.borderRadius; }
    if (props.width) { style.width = props.width; }
    if (props.height) { style.height = props.height; }
    if (props.fontColor) { style.color = props.fontColor; }

    if (props.variant || props.contained || props.outlined) {
      if (props.variant === 'outlined' || props.outlined) {
        style.borderColor = props.color;
      }
      if (props.variant === 'contained' || props.contained) {
        style.background = props.color;
        style.borderColor = 'transparent';
      }
    }

    return style;
  }, [
    props.style, props.rounded, props.borderRadius, props.width, props.height,
    props.color, props.fontColor, props.variant, props.outlined, props.contained]);


  // endregion


  // region [Template]

  const CardTitle = useMemo(() => {

    if (props.title) { return (<h2 className='k-card__title'>{props.title}</h2>); }

    return null;
  }, [props.title]);

  const CardSubTitle = useMemo(() => {

    if (props.subTitle) { return (<p className='k-card__sub-title'>{props.subTitle}</p>); }

    return null;
  }, [props.subTitle]);

  // endregion


  return (
  // eslint-disable-next-line jsx-a11y/no-static-element-interactions,jsx-a11y/click-events-have-key-events
    <div
            id={props.id}
            className={`k-card ${rootClass}`}
            style={rootStyle}
            data-testid='k-card'
            onClick={props.onClick}
    >
      {CardTitle}
      {CardSubTitle}
      {props.children}
    </div>
  );
};

KCard.displayName = 'KCard';
KCard.defaultProps = { borderRadius };

export default memo(KCard);
