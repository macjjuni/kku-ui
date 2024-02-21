import { ChangeEvent, CSSProperties, forwardRef, memo, Ref, useCallback, useEffect,
  useId, useImperativeHandle, useMemo, useRef, useState } from 'react';
import { KCheckboxProps, KCheckboxRefs } from '@/components/input/checkbox/KCheckbox.interface';
import { initDisabled, initSize } from '@/common/util/variation';
import { KIcon } from '@/components';

const KCheckbox = forwardRef((props: KCheckboxProps, ref: Ref<KCheckboxRefs>) => {


  // region [Hooks]

  const inputRef = useRef<HTMLInputElement>(null);
  const uniqueId = `k-checkbox + ${useId()}`;

  const [value, setValue] = useState<boolean>(props.value);

  useImperativeHandle(ref, () => ({
    value,
    blur() { inputRef.current?.blur(); },
    focus() { inputRef.current?.focus(); },
    click() { inputRef.current?.click(); },
    toggle() { setValue((prev) => !prev); },
  }));

  // endregion


  // region [Privates]

  const iconSize = useMemo((): number => {
    if (props.size === 'large' || props.large) { return 33; }
    if (props.size === 'medium' || props.medium) { return 27; }
    if (props.size === 'small' || props.small) { return 23; }

    return 27; // 기본값
  }, [props.size, props.large, props.medium, props.small]);

  // endregion


  // region [Styles]

  const rootClass = useMemo(() => {

    const clazz = [];

    if (props.className) { clazz.push(props.className); }

    initSize(clazz, 'k-checkbox', props.size, props.large, props.medium, props.small);
    initDisabled(clazz, 'k-checkbox', props.disabled);

    if (props.type && (props.circle || props.square)) {
      throw Error('Error: type and circle, square attributes cannot be duplicated.');
    }

    if (props.circle && props.square) {
      throw Error('Error: circle, square attributes cannot be duplicated.');
    }

    if (props.type) { clazz.push(`k-checkbox--${props.type}`); }
    if (props.circle) { clazz.push('k-checkbox--circle'); }
    if (props.square) { clazz.push('k-checkbox--square'); }

    return clazz.join(' ');
  }, [props.className, props.size, props.small, props.medium, props.large, props.disabled]);

  const rootStyle = useMemo(() => {

    const style: CSSProperties = props.width ? { width: props.width } : {};

    return { ...style, ...props.style };
  }, [props.style, props.width]);

  // endregion


  // region [Events]

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {

    const isCheck = e.target.checked;
    setValue(isCheck);
    props.onChange(isCheck);
  }, []);

  // endregion


  // region [Life Cycles]

  useEffect(() => {
    if (props.defaultCheck) { setValue(true); }
  }, [props.defaultCheck]);


  // endregion


  return (
    <div id={props.id} className={`k-checkbox ${rootClass}`} style={rootStyle} data-testid='k-checkbox'>
      <label htmlFor={uniqueId} className='k-checkbox__container'>
        <input
            ref={inputRef}
            id={uniqueId}
            className='k-checkbox__container__input'
            type='checkbox'
            checked={value}
            onChange={onChange}
            data-testid='k-checkbox-input'
        />

        {/* Square(default) */}
        {(props.square || props.type === 'square' || props.type === undefined)
           && !props.circle && (
          value ? <KIcon size={iconSize} icon='check_box' color={props.color} />
            : <KIcon size={iconSize} icon='check_box_outline_blank' color={props.color} />
        )}

        {/* Circle */}
        {(props.circle || props.type === 'circle') && (
          value ? <KIcon size={iconSize} icon='check_circle' color={props.color} />
            : <KIcon size={iconSize} icon='circle' color={props.color} />
        )}

        <span className='k-checkbox__container__label'>
          {props.label}
        </span>
      </label>
    </div>
  );
});

KCheckbox.defaultProps = {
  defaultCheck: false,
  color: '#000000',
};
KCheckbox.displayName = 'KCheckbox';

export default memo(KCheckbox);
