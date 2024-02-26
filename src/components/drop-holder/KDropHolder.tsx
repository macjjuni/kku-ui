import { forwardRef, useState, useMemo, memo, Ref, useImperativeHandle, useCallback, KeyboardEvent } from 'react';
import { KDropHolderProps, KDropHolderRefs } from '@/components/drop-holder/KDropHolder.interface';

const KDropHolder = forwardRef((props: KDropHolderProps, ref: Ref<KDropHolderRefs>) => {


  // region [Hooks]

  const [isOpen, setOpen] = useState<boolean>(false);

  useImperativeHandle(ref, () => ({
    open: () => {},
    close: () => {},
  }));

  // endregion

  // region [Class]

  const rootClass = useMemo(() => {
    const clazz = [];

    if (props.position) {
      clazz.push(`k-drop-holder--${props.position}`);
    }

    return clazz.join(' ');
  }, [props.className, props.position]);


  // endregion

  // region [Style]

  const rootStyle = useCallback(() => {
    return props.style ? props.style : {};
  }, [props.style]);

  // endregion


  // region [Events]

  const onClickRoot = useCallback(() => {
    setOpen(true);
  }, []);

  const onKeyUpRoot = useCallback((e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === ' ' || e.key === 'Enter') {
      setOpen(true);
    }
  }, []);

  // endregion
  return (
    <div className={`k-drop-holder ${rootClass}`} style={rootStyle}>
      <div className='k-drop-holder__container' tabIndex={0} role='button' onClick={onClickRoot} onKeyUp={onKeyUpRoot}>
        {prop.children}
      </div>
      {isOpen}
    </div>
  );
});

KDropHolder.defaultProps = {
  position: 'bottom-center',
};
KDropHolder.displayName = 'KDropHolder';
export default memo(KDropHolder);
