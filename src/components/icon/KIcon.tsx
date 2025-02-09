/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { CSSProperties, forwardRef, KeyboardEvent, MouseEvent, Ref, useId, useImperativeHandle, useRef } from 'react';
import { KIconProps, KIconRefs } from '@/components/icon/KIcon.interface';
import { initDisabled, initSize } from '@/common/util/variation';
import { getIcon } from '@/common/base/icon';


const KIcon = forwardRef((props: KIconProps, ref: Ref<KIconRefs>) => {

  if (!props.icon) {
    throw Error('Error: icon is required and must be provided.');
  }

  // region [Hooks]

  const inputRef = useRef<HTMLButtonElement>(null);
  const uniqueId = `k-icon-${useId()}`;
  const tabIndex = props.tabIndex ? props.tabIndex : 0;

  useImperativeHandle(ref, () => ({
    click: () => {
      inputRef.current?.click();
    },
  }));

  // endregion


  // region [Styles]

  const rootClass = () => {
    const clazz = [];

    if (props.className) {
      clazz.push(props.className);
    }
    if (props.clickable) {
      clazz.push('k-icon--clickable');
    }
    if (props.size && typeof props.size === 'string') {
      initSize(clazz, 'k-icon', props.size);
    }

    initDisabled(clazz, 'k-icon', props.disabled);

    return clazz.join(' ');
  }


  const rootStyle = () => {

    const style: CSSProperties = props.style || {};

    if (props.color) {
      style.fill = props.color;
      style.color = props.color;
    }

    if (typeof props.size === 'number') {
      style.width = `${props.size}px`;
      style.height = `${props.size}px`;
      style.fontSize = `${props.size}px`;
    }

    if (props.onClick) {
      style.cursor = 'pointer';
    }

    return style;
  }

  // endregion


  // region [Privates]

  const Icon = () => {
    const targetIcon = getIcon(props.icon);

    if (!targetIcon) {
      throw Error('Not Found icon');
    }
    return targetIcon;
  }

  // endregion


  // region [Events]

  const onClick = (e: MouseEvent<HTMLSpanElement>) => {
    if (!props.disabled && props.onClick) {
      props.onClick(e);
    }
  }

  const onKeyUp = (e: KeyboardEvent<HTMLSpanElement>) => {
    if (e.key === 'enter' || e.key === ' ') {
      if (!props.disabled && props.onClick) {
        props.onClick(e);
      }
    }
  }

  // endregion


  return (
    <span ref={inputRef} id={props.id ? props.id : uniqueId} className={`k-icon ${rootClass()}`}
          style={rootStyle()} data-testid='k-icon' onClick={onClick} onKeyUp={onKeyUp}
          role={props.onClick ? 'button' : 'img'}
          tabIndex={props.onClick ? tabIndex : -1}>
      {Icon()}
    </span>
  );
});

KIcon.displayName = 'KIcon';

export default KIcon;
