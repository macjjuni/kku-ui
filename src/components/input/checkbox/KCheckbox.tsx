import {
  ChangeEvent,
  CSSProperties,
  forwardRef,
  KeyboardEvent,
  Ref,
  useCallback,
  useEffect,
  useId,
  useImperativeHandle,
  useMemo,
  useRef,
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

    return clazz.join(' ');
  }, [
    props.className, props.size, props.small, props.medium, props.large, props.disabled]);
  // props.shape, props.circle, props.square,

  const rootStyle = useMemo(() => {

    const style: CSSProperties = props.width ? { width: props.width } : {};

    return { ...style, ...props.style };
  }, [props.style, props.width]);

  const iconSize = useMemo((): number => {
    if (props.size === 'large' || props.large) { return 27; }
    if (props.size === 'medium' || props.medium) { return 25; }
    if (props.size === 'small' || props.small) { return 21; }

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

  const Icon = useMemo(() => (
    props.value ? <KIcon size={iconSize} icon='checkbox_checked' color={props.color} />
      : <KIcon size={iconSize} icon='checkbox_unchecked' color={props.color} />
  ), [props.value, iconSize, props.color]);

  // endregion


  return (
    <div id={props.id}
        role='checkbox'
        aria-checked={props.value}
        tabIndex={!props.disabled ? 0 : -1}
        className={`k-checkbox ${rootClass}`}
        style={rootStyle}
        data-testid='k-checkbox'
        onKeyUp={onKeyUp}>
      <label htmlFor={uniqueId} className='k-checkbox__container'>

        <input tabIndex={-1} ref={inputRef} id={uniqueId} className='k-checkbox__container__input'
            type='checkbox' checked={props.value} disabled={props.disabled} onChange={onChange}
            data-testid='k-checkbox-input' />
        {Icon}

        {/* Square(default) */}
        {/* {((props.square || props.shape === 'square') || props.shape === undefined) && SquareIcon} */}

        {/* Circle */}
        {/* {((props.circle || props.shape === 'circle') || props.shape === undefined) && CircleIcon} */}

        <span className='k-checkbox__container__label'>
          {props.label}
        </span>
      </label>
    </div>
  );
});

KCheckbox.defaultProps = { defaultCheck: false };
KCheckbox.displayName = 'KCheckbox';

export default KCheckbox;
