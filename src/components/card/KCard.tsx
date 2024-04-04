import { forwardRef, memo, useMemo } from 'react';
import { KCardProps } from '@/components/card/KCard.interface';


const KCard = forwardRef((props: KCardProps) => {

  // region [Hooks]


  // endregion


  // region [Styles]

  const rootClass = useMemo(() => {

    const clazz = [];

    if (props.className) { clazz.push(props.className); }
    if (props.rounded) { clazz.push('k-card--rounded'); }

    return clazz.join(' ');
  }, [props.className]);

  const rootStyle = useMemo(() => {

    return props.style ? props.style : {};
  }, [props.style]);


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
        onClick={props.onClick}
        data-testid='k-card'
    >
      {CardTitle}
      {CardSubTitle}
      {props.children}
    </div>
  );
});

KCard.displayName = 'KCard';

export default memo(KCard);
