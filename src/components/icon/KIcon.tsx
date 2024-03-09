/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import {
  CSSProperties, forwardRef, KeyboardEvent, memo, MouseEvent, Ref, useCallback,
  useId, useImperativeHandle, useMemo, useRef,
} from 'react';
import { KIconProps, KIconRefs } from '@/components/icon/KIcon.interface';
import { initDisabled } from '@/common/util/variation';
import '@material-symbols/font-300/outlined.css';
import '@material-symbols/font-300/rounded.css';


// https://fonts.google.com/

const KIcon = forwardRef((props: KIconProps, ref: Ref<KIconRefs>) => {

  if (!props.icon) { throw Error('Error: icon is required and must be provided.'); }

  // region [Hooks]

  const inputRef = useRef<HTMLButtonElement>(null);
  const uniqueId = `k-icon-${useId()}`;

  useImperativeHandle(ref, () => ({
    click: () => { inputRef.current?.click(); },
  }));

  // endregion


  // region [Styles]

  const rootClass = useMemo(() => {
    const clazz = [];

    if (props.type) { clazz.push(`material-symbols-${props.type}`); }
    if (props.className) { clazz.push(props.className); }
    if (typeof props.size !== 'number' && props.size) {
      clazz.push(`k-icon--${props.size}`);
    }
    if (props.clickable) { clazz.push('k-icon--clickable'); }
    initDisabled(clazz, 'k-icon', props.disabled);

    return clazz.join(' ');
  }, [props.type, props.className, props.size, props.disabled, props.clickable]);


  const rootStyle = useMemo(() => {

    const styles: CSSProperties = props.style || {};

    if (props.color) { styles.color = props.color; }
    if (typeof props.size === 'number') {
      styles.fontSize = `${props.size}px`;
    }

    return styles;
  }, [props.style, props.color, props.size]);

  // endregion


  // region [Events]

  const onClick = useCallback((e:MouseEvent<HTMLSpanElement>) => {
    if (!props.disabled && props.onClick) { props.onClick(e); }
  }, [props.disabled]);

  const onKeyUp = useCallback((e: KeyboardEvent<HTMLSpanElement>) => {
    if (e.key === 'enter' || e.key === ' ') {
      if (!props.disabled && props.onClick) { props.onClick(e); }
    }
  }, [props.disabled]);

  // endregion


  // region [Templates]
  return (
    <span
      ref={inputRef}
      id={props.id ? props.id : uniqueId}
      className={`k-icon ${rootClass}`}
      style={rootStyle}
      data-testid='k-icon'
      onClick={onClick}
      onKeyUp={onKeyUp}
      role={props.onClick ? 'button' : 'img'}
      tabIndex={props.onClick ? props.tabIndex : -1}
    >
      {props.icon}
    </span>
  );
  // endregion
});

KIcon.displayName = 'KIcon';

KIcon.defaultProps = {
  type: 'outlined',
  size: 'medium',
  tabIndex: 0,
};
export default memo(KIcon);
