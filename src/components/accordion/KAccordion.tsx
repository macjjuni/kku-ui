import { CSSProperties, KeyboardEvent, memo, MouseEvent, useEffect, useMemo, useRef, useState } from 'react';
import { KAccordionProps } from '@/components/accordion/KAccordion.interface';
import { initSize } from '@/common/util/variation';
import { KIcon } from '@/components';
import { useCleanId } from '@/common/hook/useCleanId';


const KAccordion = ({ ...restProps }: KAccordionProps) => {

  // region [Hooks]

  const {
    id,
    className,
    size,
    children,
    summaryIconSize,
    summary,
    summaryIcon,
    style,
    width,
    open,
  }: KAccordionProps = { ...restProps };
  const [isOpen, setIsOpen] = useState<boolean>(!!open);
  const root = useRef<HTMLDetailsElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [contentHeight, setContentHeight] = useState(0);
  const summaryId = useCleanId('k-accordion-summary');
  const contentId = useCleanId('k-accordion-content');

  // endregion


  // region [Styles]

  const rootClass = useMemo(() => {

    const clazz = [];

    if (className) {
      clazz.push(className);
    }

    initSize(clazz, 'k-accordion', size);

    clazz.push(`k-accordion--${isOpen ? 'open' : 'close'}`);

    return clazz.join(' ');
  }, [className, size, isOpen]);

  const iconClass = () => {

    const clazz = [];

    if (isOpen) {
      clazz.push('k-accordion__summary__icon--open');
    } else {
      clazz.push('k-accordion__summary__icon--close');
    }

    return clazz.join(' ');
  }


  const rootStyle = useMemo(() => {

    const styles: CSSProperties = { ...style };

    if (width) {
      styles.width = width;
    }
    return styles;
  }, [width]);

  const contentStyle = useMemo((): CSSProperties => {

    const height = isOpen ? `${contentHeight}px` : 0;
    return { maxHeight: height };
  }, [isOpen, contentHeight]);

  const iconSize = useMemo(() => {

    if (size === 'small') {
      return 16;
    }

    return 18;
  }, [size]);

  // endregion


  // region [Privates]

  const initializeRoot = () => {
    root.current?.setAttribute('open', 'true');
  }

  const initializeContent = () => {
    setContentHeight(contentRef.current?.scrollHeight || 0);
  }

  // endregion


  // region [Events]

  const onClick = (e?: MouseEvent<HTMLElement>) => {
    e?.preventDefault();
    setIsOpen((prev) => !prev);
  }

  const onKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    e.preventDefault();
    if (e.key === 'Enter' || e.key === ' ') {
      onClick();
    }
  }

  // endregion


  // region [Template]

  const SummaryIcon = useMemo(() => {

    if (!summaryIcon) {
      return null;
    }

    if (typeof summaryIcon === 'string') {
      return (
        <KIcon className='k-accordion__summary__icon'
               icon={summaryIcon}
               size={summaryIconSize}/>
      );
    }

    return summaryIcon;
  }, [summaryIcon, summaryIconSize])

  // endregion


  // region [Life Cycles]

  useEffect(() => {

    initializeRoot();
    initializeContent();
  }, []);

  // endregion


  return (
    <details ref={root} id={id} className={`k-accordion ${rootClass}`} open
             style={rootStyle} data-testid='k-accordion'>

      <summary role='button' id={summaryId} className='k-accordion__summary' onClick={onClick}
               onKeyDown={onKeyDown} tabIndex={0}>
        <div className='k-accordion__summary__container' data-testid='k-accordion__summary'>
          {SummaryIcon}
          <span className='k-accordion__summary__text'>{summary}</span>
        </div>
        <div className='k-accordion__summary__icon__wrapper'>
          <KIcon className={`k-accordion__summary__icon ${iconClass()}`} icon='keyboard_arrow_down' size={iconSize}/>
        </div>
      </summary>

      <div ref={contentRef} id={contentId} className='k-accordion__content' style={contentStyle}
           aria-labelledby={summaryId}>
        <div className='k-accordion__content__wrapper'>{children}</div>
      </div>

    </details>
  );
};


KAccordion.displayName = 'KAccordion';
export default memo(KAccordion);
