import {
  Children,
  forwardRef,
  ForwardRefExoticComponent,
  isValidElement,
  KeyboardEvent,
  memo,
  ReactElement,
  RefAttributes,
  useCallback,
  useId, useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import DropdownTrigger from './KDropdownTrigger';
import DropdownContent from './KDropdownContent';
import { KDropdownProps, KDropdownRefs } from '@/components/data-display/dropdown/KDropdown.interface';
import { KDropdownContext } from '@/components/data-display/dropdown/KDropdown.context';

const Dropdown = forwardRef<KDropdownRefs, KDropdownProps>((props, ref) => {


  // region [Hooks]
  const {
    as, trigger = 'hover', position = 'top-end', children,
    className, ...restProps
  } = props;

  const Component = as || 'div';
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const uniqueId = `k-dropdown-${useId()}`;
  // endregion

  // region [Styles]
  const rootClass = useMemo(() => {
    const clazz = ['k-dropdown'];
    if (className) {
      clazz.push(className);
    }
    return clazz.join(' ');
  }, [className]);
  // endregion

  // region [Privates]
  const onOpen = useCallback(() => setOpen(true), []);
  const onClose = useCallback(() => setOpen(false), []);
  // endregion

  // region [APIs]
  useImperativeHandle(ref, () => ({
    onOpen, onClose,
  }));
  // endregion

  // region [Template]
  const { Trigger, Content } = useMemo(() => {
    const elements = Children.toArray(children);
    const trigger = elements.find(
      (child) => isValidElement(child) && child.type === DropdownTrigger,
    ) as ReactElement | undefined;
    const content = elements.find(
      (child) => isValidElement(child) && child.type === DropdownContent,
    ) as ReactElement | undefined;
    return { Trigger: trigger, Content: content };
  }, [children]);
  // endregion

  // region [Privates]
  const onFocusContent = useCallback(() => {
    if (!contentRef.current) return;
    const focusable = contentRef.current.querySelector<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"]), [role="menuitem"]',
    );
    focusable?.focus();
  }, []);

  const onBlurContent = useCallback((e: KeyboardEvent<HTMLElement>) => {
    if (!contentRef.current) return;
    const firstFocusableElement = contentRef.current.querySelector<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"]), [role="menuitem"]',
    );
    if (firstFocusableElement === e.target) {
      e.preventDefault();
      triggerRef.current?.focus();
    }
  }, []);
  // endregion

  const contextValue = useMemo(
    () => ({
      open,
      onOpen,
      onClose,
      onFocusContent,
      onBlurContent,
      triggerRef,
      id: uniqueId,
      contentRef,
      trigger,
      position,
    }),
    [open, trigger, position],
  );

  return (
    <Component {...restProps} {...restProps} className={rootClass}>
      <KDropdownContext value={contextValue}>
        {Trigger}
        {Content}
      </KDropdownContext>
    </Component>
  );
});

interface DropdownNamespace extends ForwardRefExoticComponent<KDropdownProps & RefAttributes<HTMLElement>> {
  Trigger: typeof DropdownTrigger;
  Content: typeof DropdownContent;
}

const KDropdown = memo(Dropdown) as DropdownNamespace;
KDropdown.displayName = 'Dropdown';
Dropdown.displayName = 'Dropdown';

KDropdown.Trigger = DropdownTrigger;
KDropdown.Content = DropdownContent;

export default KDropdown;