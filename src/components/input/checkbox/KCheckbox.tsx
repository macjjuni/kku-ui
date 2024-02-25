import {
  ChangeEvent, CSSProperties, forwardRef, KeyboardEvent, memo, Ref, useCallback, useEffect,
  useId, useImperativeHandle, useMemo, useRef,
} from 'react';
import { KCheckboxProps, KCheckboxRefs } from '@/components/input/checkbox/KCheckbox.interface';
import { initDisabled, initSize } from '@/common/util/variation';
import { KIcon } from '@/components';

const KCheckbox = forwardRef((props: KCheckboxProps, ref: Ref<KCheckboxRefs>) => {

  // region [Hooks]

  const inputRef = useRef<HTMLInputElement>(null);
  const uniqueId = `k-checkbox + ${useId()}`;

  // TODO: 테스트 코드
  useImperativeHandle(ref, () => ({
    blur() { inputRef.current?.blur(); },
    focus() { inputRef.current?.focus(); },
    click() { inputRef.current?.click(); },
    toggle() { props.onChange(!props.value); },
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

    initSize(clazz, 'k-checkbox', props.size, props.large, props.medium, props.small);
    initDisabled(clazz, 'k-checkbox', props.disabled);

    if (props.shape && (props.circle || props.square)) {
      throw Error('Error: type and circle, square attributes cannot be duplicated.');
    }

    if (props.circle && props.square) {
      throw Error('Error: circle, square attributes cannot be duplicated.');
    }

    if (props.shape) { clazz.push(`k-checkbox--${props.shape}`); }
    if (props.circle) { clazz.push('k-checkbox--circle'); }
    if (props.square) { clazz.push('k-checkbox--square'); }

    return clazz.join(' ');
  }, [
    props.className, props.size, props.shape, props.circle, props.square,
    props.small, props.medium, props.large, props.disabled]);

  const rootStyle = useMemo(() => {

    const style: CSSProperties = props.width ? { width: props.width } : {};

    return { ...style, ...props.style };
  }, [props.style, props.width]);

  const iconSize = useMemo((): number => {
    if (props.size === 'large' || props.large) { return 33; }
    if (props.size === 'medium' || props.medium) { return 27; }
    if (props.size === 'small' || props.small) { return 23; }

    return 27; // medium
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

  const SquareIcon = useMemo(() => (
    props.value ? <KIcon size={iconSize} icon='check_box' color={props.color} />
      : <KIcon size={iconSize} icon='check_box_outline_blank' color={props.color} />
  ), [props.value, iconSize, props.color]);

  const CircleIcon = useMemo(() => (
    props.value ? <KIcon size={iconSize} icon='check_circle' color={props.color} />
      : <KIcon size={iconSize} icon='circle' color={props.color} />
  ), [props.value, iconSize, props.color]);


  // endregion


  return (
    <div
        id={props.id}
        role='checkbox'
        aria-checked={props.value}
        tabIndex={!props.disabled ? 0 : -1}
        className={`k-checkbox ${rootClass}`}
        style={rootStyle}
        data-testid='k-checkbox'
        onKeyUp={onKeyUp}
    >
      <label htmlFor={uniqueId} className='k-checkbox__container'>
        <input
          tabIndex={-1}
          ref={inputRef}
          id={uniqueId}
          className='k-checkbox__container__input'
          type='checkbox'
          checked={props.value}
          disabled={props.disabled}
          onChange={onChange}
          data-testid='k-checkbox-input'
        />

        {/* Square(default) */}
        {((props.square || props.shape === 'square') || props.shape === undefined) && SquareIcon}

        {/* Circle */}
        {((props.circle || props.shape === 'circle') || props.shape === undefined) && CircleIcon}

        <span className='k-checkbox__container__label'>
          {props.label}
        </span>
      </label>
    </div>
  );
});

KCheckbox.defaultProps = {
  defaultCheck: false,
  shape: 'square',
};
KCheckbox.displayName = 'KCheckbox';

export default memo(KCheckbox);
