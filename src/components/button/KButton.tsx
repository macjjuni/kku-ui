import { memo, useMemo, useCallback } from 'react';
import KButtonProps from './KButton.interface.ts';
import { initSize, initVariant, initDisabled } from '@/common/util/variation.ts';
import './TButton.scss';


const KButton = (props: KButtonProps) => {

  const rootClass = useMemo(
    () => {
      const clazz = [];

      if (props.className) { clazz.push(props.className); }

      initSize(clazz, props.size, props.large, props.medium, props.small);
      initVariant(clazz, props.variant, props.primary, props.outlined);
      initDisabled(clazz, props.disabled);

      return clazz.join(' ');
    },
    [props.className, props.variant, props.primary, props.outlined, props.large, props.medium, props.small, props.size],
  );

  const rootStyle = useMemo(() => {
    return props.style || {};
  }, [props.style]);


  const onClick = useCallback(() => {

    if (props.onClick) props.onClick();
  }, [props.onClick]);

  return (
    <button id={props.id} className={`k-button ${rootClass}`} style={rootStyle} type='button' onClick={onClick}>
      {
        (props.label || props.children)
                && (
                  <>
                    {props.label && <div className='k-button-content'>{props.label}</div>}
                    {props.children && props.children}
                  </>
                )
      }
    </button>
  );
};

KButton.defaultProps = {};

export default memo(KButton);
