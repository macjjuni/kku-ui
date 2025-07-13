import { memo, useMemo } from 'react';
import { KAccordionProps } from '@/components/data-display/accordion/KAccordion.interface';
import { Accordion as CoreAccordion } from '@/core/accordion';
import { KIcon } from '@/components';


const Accordion = (props: KAccordionProps) => {

  // region [Hooks]
  const { className, defaultOpen, summary, children, width, style, size = 'medium', ...restProps } = props;
  // endregion

  // region [Styles]
  const rootClass = useMemo(() => {
    const clazz = ['k-accordion', `k-accordion--${size}`];

    if (className) {
      clazz.push(className);
    }

    return clazz.join(' ');
  }, [className, size]);

  const rootStyle = useMemo(() => ({ ...style, maxWidth: width }), [style, width]);
  // endregion


  return (
    <CoreAccordion className={rootClass} style={rootStyle} defaultOpen={defaultOpen} {...restProps}>
      <CoreAccordion.Summary className="k-accordion__summary">
        <p className="k-accordion__summary__text">
          {summary}
        </p>
        <KIcon icon="keyboard_arrow_down" size="small" className="k-accordion__summary__icon"/>
      </CoreAccordion.Summary>
      <CoreAccordion.Content className="k-accordion__content">
        <div className="k-accordion__content__container">
          {children}
        </div>
      </CoreAccordion.Content>
    </CoreAccordion>
  );
};

const KAccordion = memo(Accordion);
KAccordion.displayName = 'KAccordion';
Accordion.displayName = 'KAccordion';

export default KAccordion;
