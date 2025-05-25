import { memo, useMemo } from 'react';
import { KButtonGroupProps } from '@/components';


const ButtonGroup = (props: KButtonGroupProps) => {

  // region [Hooks]

  const { id, className, style, children } = props;

  // endregion


  // region [Styles]

  const rootClass = useMemo(() => {

    const clazz = ['k-button-group'];

    if (className) {
      clazz.push(className);
    }

    return clazz.join(' ');
  }, [className]);

  // endregion


  // region [Events]
  // endregion

  return (
    <div id={id} className={rootClass} style={style} role="group">
      {children}
    </div>
  );
};

const KButtonGroup = memo(ButtonGroup);
KButtonGroup.displayName = 'KButtonGroup';
KButtonGroup.displayName = 'KButtonGroup';

export default KButtonGroup;
