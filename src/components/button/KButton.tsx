import {
  KeyboardEvent,
  MouseEvent,
  forwardRef,
  useImperativeHandle,
  useRef,
} from 'react';
import useRipple from '@/common/hook/useRipple';
import { initSize, initVariant } from '@/common/util/variation';
import { KButtonProps, KButtonRefs } from '@/components';


const KButton = forwardRef<KButtonRefs, KButtonProps>((props, ref) => {

  if (props.label && props.children) {
    throw Error('Error: label and children attributes cannot be duplicated.');
  }

  // region [Hooks]

  const rootRef = useRef<HTMLButtonElement>(null);
  const ripple = useRipple(rootRef);

  useImperativeHandle(ref, () => ({
    focus() {
      rootRef.current?.focus();
    },
    click() {
      if (!props.disabled) {
        props?.onClick?.();
      }
    },
  }));

  // endregion


  // region [Styles]

  const rootClass = () => {

    const clazz = [];

    if (props.className) { clazz.push(props.className); }
    if (props.disabled) { clazz.push('k-button--disabled'); }

    initVariant(clazz, 'k-button', props.variant);
    initSize(clazz, 'k-button', props.size);

    return clazz.join(' ');
  }

  // endregion


  // region [Events]

  const onMouseDown = (e: MouseEvent<HTMLButtonElement>) => {
    if (!props.disabled) {
      ripple?.register(e);
    }
  }

  const onMouseUp = (e: MouseEvent<HTMLButtonElement>) => {

    ripple.remove();

    if (!props.disabled && props?.onClick) { props.onClick(e); }
  }

  const onMouseLeave = () => {

    if (!rootRef?.current) {
      throw Error('Invalid rootRef.');
    }

    ripple.remove();
  }

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {

    ripple?.register(e);
  }

  const onKeyUp = (e: KeyboardEvent<HTMLButtonElement>) => {

    if (e.key === 'Enter' || e.key === ' ') {
      ripple.remove();
      props?.onClick?.();
    }
  }

  // endregion

  return (
    <button ref={rootRef} id={props.id} className={`k-button ${rootClass()}`} style={props.style || {}}
            type='button' disabled={props.disabled} onMouseDown={onMouseDown} onMouseLeave={onMouseLeave}
            onMouseUp={onMouseUp} onKeyDown={onKeyDown} onKeyUp={onKeyUp}>

      {(props.children || props.label) && (
        <span className='k-button__content'>{props.children || props.label}</span>)}
    </button>
  );
});

KButton.displayName = 'KButton';

export default KButton;
