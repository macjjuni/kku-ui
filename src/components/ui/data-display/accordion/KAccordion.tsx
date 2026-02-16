import { createContext, useContext, ComponentPropsWithRef } from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';


export interface KAccordionContextType { size?: 'sm' | 'md'; }
export type KAccordionProps = ComponentPropsWithRef<typeof AccordionPrimitive.Root> & KAccordionContextType;
export type KAccordionItemProps = ComponentPropsWithRef<typeof AccordionPrimitive.Item>;
export type KAccordionTriggerProps = ComponentPropsWithRef<typeof AccordionPrimitive.Trigger>;
export type KAccordionContentProps = ComponentPropsWithRef<typeof AccordionPrimitive.Content>;

const AccordionContext = createContext<KAccordionContextType>({ size: 'md' });


const KAccordionTriggerVariants = cva(
  'flex flex-1 items-center justify-between font-md transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180',
  {
    variants: {
      size: {
        sm: 'py-2 text-xs',
        md: 'py-4 text-sm',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);
// endregion

// region Components
const KAccordion = (props: KAccordionProps) => {
  const { size = 'md', className, children, ref, ...restProps } = props;

  return (
    <AccordionContext.Provider value={{ size }}>
      <AccordionPrimitive.Root ref={ref} {...restProps} className={cn("k-accordion", className)}
                               suppressHydrationWarning>
        {children}
      </AccordionPrimitive.Root>
    </AccordionContext.Provider>
  );
};

const KAccordionItem = (props: KAccordionItemProps) => {
  const { className, ref, ...restProps } = props;

  return (
    <AccordionPrimitive.Item
      ref={ref}
      className={cn('k-accordion__item border-b border-border', className)}
      {...restProps}
    />
  );
};

const KAccordionTrigger = (props: KAccordionTriggerProps) => {
  // region hooks
  const { className, children, ref, ...restProps } = props;
  const { size } = useContext(AccordionContext);
  // endregion

  return (
    <AccordionPrimitive.Header className="k-accordion__header flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn("k-accordion__trigger pr-1 focus-ring", KAccordionTriggerVariants({ size, className }))}
        {...restProps}
      >
        {children}
        <ChevronDown
          className={cn('shrink-0 text-muted-foreground transition-transform duration-200', size === 'sm' ? 'h-3 w-3' : 'h-4 w-4')}
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
};

const KAccordionContent = (props: KAccordionContentProps) => {

  // region hooks
  const { className, children, ref, ...restProps } = props;
  const { size } = useContext(AccordionContext);
  // endregion

  return (
    <AccordionPrimitive.Content
      ref={ref}
      className="k-accordion__content overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      {...restProps}
    >
      <div className={cn('pt-0', size === 'sm' ? 'pb-2 text-xs' : 'pb-4 text-sm', className)}>
        {children}
      </div>
    </AccordionPrimitive.Content>
  );
};


export { KAccordion, KAccordionItem, KAccordionTrigger, KAccordionContent };