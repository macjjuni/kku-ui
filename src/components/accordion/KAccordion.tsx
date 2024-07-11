import { CSSProperties, memo, useCallback, useEffect, useMemo, useState, useRef } from 'react';
import { KAccordionProps } from '@/components/accordion/KAccordion.interface';
import { initSize } from '@/common/util/variation';
import { KIcon } from '@/components';


const KAccordion = ({ children, className, id, large, medium, size, small, style, summary,
  open, summaryIcon, summaryIconSize = 'medium' }: KAccordionProps) => {

  // region [Hooks]

  const [isOpen, setIsOpen] = useState<boolean>(!!open);
  const root = useRef<HTMLDetailsElement | null>(null);

  // endregion


  // region [Styles]

  const rootClass = useMemo(() => {

    const clazz = [];

    if (className) { clazz.push(className); }

    initSize(clazz, 'k-accordion', size, large, medium, small);

    clazz.push(`k-accordion--${isOpen ? 'open' : 'close'}`);

    return clazz.join(' ');
  }, [isOpen, className, size, large, medium, small]);

  const iconClass = useMemo(() => {

    const clazz = [];

    if (isOpen) {
      clazz.push('k-accordion__summary__icon--open');
    } else {
      clazz.push('k-accordion__summary__icon--close');
    }

    return clazz.join(' ');
  }, [isOpen]);


  const rootStyle = useMemo(() => {

    return style;
  }, [style]);

  const contentStyle = useMemo((): CSSProperties => {

    return {};
  }, [isOpen]);

  const iconSize = useMemo(() => {

    if (size === 'large' || large) { return 20; }
    if (size === 'small' || small) { return 16; }

    return 18;
  }, [size, large, medium, small]);

  // endregion


  // region [Events]

  const onClick = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  // endregion


  // region [Template]

  const SummaryIcon = useMemo(() => {

    if (!summaryIcon) { return null; }

    if (typeof summaryIcon === 'string') {
      return (<KIcon className='k-accordion__summary__icon' icon={summaryIcon} size={summaryIconSize} />);
    }

    return summaryIcon;
  }, [summaryIcon]);

  // endregion


  // region [Life Cycles]

  useEffect(() => {
    if (open) {
      root.current?.setAttribute('open', 'true');
    } else {
      root.current?.removeAttribute('open');
    }
  }, [open]);

  // endregion


  return (
    <details ref={root} id={id} className={`k-accordion ${rootClass}`} style={rootStyle}
        data-testid='k-accordion'>

      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <summary className='k-accordion__summary' onClick={onClick} aria-hidden={!isOpen}>

        <div className='k-accordion__summary__container' data-testid='k-accordion__summary'>
          {SummaryIcon}
          <span className='k-accordion__summary__text'>{summary}</span>
        </div>

        <KIcon className={`k-accordion__summary__icon ${iconClass}`}
            icon='keyboard_arrow_down'
            size={iconSize} />

      </summary>

      <div className='k-accordion__content' style={contentStyle}>{children}</div>

    </details>
  );
};

KAccordion.displayName = 'KAccordion';

export default memo(KAccordion);
