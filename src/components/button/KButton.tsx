import { memo, useCallback } from 'react';
import KButtonProps from './KButton.interface.ts';
import { sizes } from '@/common/type/base.interface.ts';
import './TButton.scss';


const KButton = (props: KButtonProps) => {

  const rootClass = useCallback(() => {
    const classArr = [];

    if (props.className) { classArr.push(props.className); }
    if (props.size && (!props.large || !props.medium || !props.small)) {
      throw Error('Multiple sizes are not allowed.');
    }

    if (props.large) {
      classArr.push(`k-button--${sizes.large}`);
    } else if (props.medium) {
      classArr.push(`k-button--${sizes.medium}`);
    } else if (props.small) {
      classArr.push(`k-button--${sizes.small}`);
    } else if (props.size) {
      classArr.push(`k-button--${props.size}`);
    }

    if (props.disabled) { classArr.push('k-button--disabled'); }

    return classArr.join(' ');
  }, [props.className]);


  const onClick = useCallback(() => {

    if (props.onClick) props.onClick();
  }, [props.onClick]);

  return (
    <button id={props.id} className={`k-button ${rootClass()}`} type='button' onClick={onClick}>
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

KButton.defaultProps = {
};

export default memo(KButton);
