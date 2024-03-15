import { ChangeEvent, CSSProperties, forwardRef, KeyboardEvent, memo, useRef,
  Ref, useCallback, useEffect, useId, useImperativeHandle, useMemo } from 'react';
import { KIcon, KRadioProps, KRadioRefs } from '@/components';
import { initDisabled, initSize } from '@/common/util/variation';

const KRadio = forwardRef((props: KRadioProps, ref: Ref<KRadioRefs>) => {

  // region [Hooks]

  const inputRef = useRef<HTMLInputElement>(null);
  const uniqueId = `k-radio + ${useId()}`;

  useImperativeHandle(ref, () => ({
    click() { inputRef.current?.click(); },
  }));

  // endregion


  // region [Privates]

  const clickInput = useCallback(() => {
    inputRef.current?.click();
  }, []);

  // endregion


  // region [Styles]

  const rootClass = useMemo(() => {

    const clazz = [];

    if (props.className) { clazz.push(props.className); }

    initSize(clazz, 'k-radio', props.size, props.large, props.medium, props.small);
    initDisabled(clazz, 'k-radio', props.disabled);

    return clazz.join(' ');
  }, [
    props.className, props.size, props.small, props.medium, props.large, props.disabled]);

  const rootStyle = useMemo(() => {

    const style: CSSProperties = props.width ? { width: props.width } : {};

    return { ...style, ...props.style };
  }, [props.style, props.width]);

  const iconSize = useMemo((): number => {
    if (props.size === 'large' || props.large) { return 28; }
    if (props.size === 'medium' || props.medium) { return 24; }
    if (props.size === 'small' || props.small) { return 20; }

    return 24; // medium
  }, [props.size, props.large, props.medium, props.small]);

  // endregion


  // region [Events]

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {

    props.onChange(e.target.checked);
  }, [props.onChange]);

  const onKeyUp = useCallback((e: KeyboardEvent<HTMLElement>) => {

    if (e?.key === ' ' || e?.key === 'Enter') { clickInput(); }
  }, []);

  // endregion


  // region [Life Cycles]

  useEffect(() => {
    if (props.defaultCheck) { clickInput(); }
  }, [props.defaultCheck]);

  // endregion


  // region [Template]

  const CircleIcon = useMemo(() => (
    props.value ? <KIcon size={iconSize} icon='radio_checked' color={props.color} />
      : <KIcon size={iconSize} icon='radio_unchecked' color={props.color} />
  ), [props.value, iconSize, props.color]);


  // endregion


  return (
    <div
      id={props.id}
      role='radio'
      aria-checked={props.value}
      tabIndex={!props.disabled ? 0 : -1}
      className={`k-radio ${rootClass}`}
      style={rootStyle}
      data-testid='k-radio'
      onKeyUp={onKeyUp}
    >
      <label htmlFor={uniqueId} className='k-radio__container'>
        <input
          tabIndex={-1}
          ref={inputRef}
          id={uniqueId}
          className='k-radio__container__input'
          type='radio'
          checked={props.value}
          disabled={props.disabled}
          onChange={onChange}
          data-testid='k-radio-input'
        />
        {CircleIcon}
        <span className='k-radio__container__label'>
          {props.label}
        </span>
      </label>
    </div>
  );
});

KRadio.defaultProps = {
  defaultCheck: false,
};
KRadio.displayName = 'KRadio';

export default memo(KRadio);
