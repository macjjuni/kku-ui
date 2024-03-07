import { MouseEvent, KeyboardEvent, forwardRef, memo, Ref, useCallback, useImperativeHandle,
  useMemo } from 'react';
import { KChipProps, KChipRef } from '@/components/chip/KChip.interface';
import { initDisabled, initSize, initVariant } from '@/common/util/variation';


const KChip = forwardRef((props: KChipProps, ref: Ref<KChipRef>) => {

  // region [Hooks]

  useImperativeHandle(ref, () => ({
    click: () => {},
  }));

  // endregion

  // region [Styles]

  const rootClass = useMemo(() => {
    const clazz = [];

    if (props.className) { clazz.push(props.className); }

    initSize(clazz, 'k-chip', props.size, props.large, props.medium, props.small);
    initVariant(clazz, 'k-chip', props.variant, props.primary, props.outlined);
    initDisabled(clazz, 'k-chip', props.disabled);

    return clazz.join(' ');
  }, [props.className, props.size, props.disabled, props.large, props.medium, props.small,
    props.variant, props.primary, props.outlined]);

  const rootStyle = useMemo(() => {

    return props.style || {};
  }, [props.style, props.size]);

  // endregion


  // region [Events]

  const onClick = useCallback((e?: MouseEvent<HTMLDivElement>) => {
    if (props.onClick) { props.onClick(e); }
  }, []);

  const onKeyUp = useCallback((e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === ' ' || e.key === 'Enter') {
      if (props.onClick) { props.onClick(); }
    }
  }, []);

  // endregion


  return (
    <div
        id={props.id}
        className={`k-chip ${rootClass}`}
        style={rootStyle}
        tabIndex={0}
        role='button'
        onClick={onClick}
        onKeyUp={onKeyUp}
        data-testid='k-chip'
    >
      {props.children}
    </div>
  );
});

KChip.displayName = 'KChip';

export default memo(KChip);
