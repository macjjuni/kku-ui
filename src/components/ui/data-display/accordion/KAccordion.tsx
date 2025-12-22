import { ComponentRef, ComponentPropsWithoutRef, createContext, forwardRef, useContext } from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

export interface KAccordionContextType { size?: 'sm' | 'md'; }
export type KAccordionProps = ComponentPropsWithoutRef<typeof AccordionPrimitive.Root> & KAccordionContextType;
export interface KAccordionItemProps extends ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> {}
export interface KAccordionTriggerProps extends ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> {}
export interface KAccordionContentProps extends ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> {}

const AccordionContext = createContext<KAccordionContextType>({ size: 'md' });

// --- Styles ---
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

// --- Components ---

const KAccordion = forwardRef<ComponentRef<typeof AccordionPrimitive.Root>, KAccordionProps>(
  ({ size = 'md', className, children, ...props }, ref) => (
    <AccordionContext.Provider value={{ size }}>
      <AccordionPrimitive.Root ref={ref} {...props} className={cn("k-accordion", className)}>
        {children}
      </AccordionPrimitive.Root>
    </AccordionContext.Provider>
  ),
);

const KAccordionItem = forwardRef<ComponentRef<typeof AccordionPrimitive.Item>, KAccordionItemProps>(
  ({ className, ...props }, ref) => (
    <AccordionPrimitive.Item ref={ref} className={cn('k-accordion__item border-b', className)} {...props} />
  ),
);

const KAccordionTrigger = forwardRef<ComponentRef<typeof AccordionPrimitive.Trigger>, KAccordionTriggerProps>(
  ({ className, children, ...props }, ref) => {
    const { size } = useContext(AccordionContext);

    return (
      <AccordionPrimitive.Header className="k-accordion__header flex">
        <AccordionPrimitive.Trigger
          ref={ref}
          className={cn("k-accordion__trigger", KAccordionTriggerVariants({ size, className }))}
          {...props}
        >
          {children}
          <ChevronDown
            className={cn(
              'shrink-0 text-muted-foreground transition-transform duration-200',
              size === 'sm' ? 'h-3 w-3' : 'h-4 w-4',
            )}
          />
        </AccordionPrimitive.Trigger>
      </AccordionPrimitive.Header>
    );
  },
);

const KAccordionContent = forwardRef<ComponentRef<typeof AccordionPrimitive.Content>, KAccordionContentProps>(
  ({ className, children, ...props }, ref) => {
    const { size } = useContext(AccordionContext);

    return (
      <AccordionPrimitive.Content
        ref={ref}
        className="k-accordion__content overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
        {...props}
      >
        <div className={cn('pt-0', size === 'sm' ? 'pb-2 text-xs' : 'pb-4 text-sm', className)}>
          {children}
        </div>
      </AccordionPrimitive.Content>
    );
  },
);

KAccordion.displayName = 'KAccordion';
KAccordionItem.displayName = 'KAccordionItem';
KAccordionTrigger.displayName = 'KAccordionTrigger';
KAccordionContent.displayName = 'KAccordionContent';

export { KAccordion, KAccordionItem, KAccordionTrigger, KAccordionContent };