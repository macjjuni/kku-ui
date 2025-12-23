import { ReactNode } from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import * as Separator from '@radix-ui/react-separator';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export type ListGroupWidth = 'sm' | 'md' | 'lg' | 'auto' | 'full';

export interface KListGroupProps {
  children: ReactNode;
  header?: string;
  footer?: string;
  width?: ListGroupWidth;
  className?: string;
}

export interface KListRowProps {
  icon?: ReactNode;
  label: string;
  rightElement?: ReactNode;
  onClick?: () => void;
  className?: string;
}

export interface KListRowAccordionProps {
  icon?: ReactNode;
  label: string;
  children: ReactNode; // 아코디언이 열렸을 때 보여줄 내용
  className?: string;
  value: string; // Accordion.Item의 고유 값
}


const KListGroup = ({ children, header, footer, width = 'md', className }: KListGroupProps) => {
  const widthMap: Record<ListGroupWidth, string> = {
    sm: 'max-w-[440px]',
    md: 'max-w-[600px]',
    lg: 'max-w-[800px]',
    auto: 'w-fit',
    full: 'max-w-full',
  };

  return (
    <section className={cn('w-full mx-auto [&&+&]:mt-6 px-0', widthMap[width], className)}>
      {header && (<header className="px-4 mb-3 text-[14px] opacity-80 uppercase">{header}</header>)}
      <div className="overflow-hidden bg-card rounded-xl border-[1px] border-border shadow-sm">{children}</div>

      {footer && (<footer className="px-4 mt-2 text-[13px] text-muted-foreground leading-tight">{footer}</footer>)}
    </section>
  );
};


const KListRow = ({
  icon,
  label,
  rightElement = <ChevronRight className="w-5 h-5 text-zinc-300 dark:text-zinc-700"/>,
  onClick,
  className,
}: KListRowProps) => (
  <div className={cn('group bg-background', className)}>
    {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
    <div
      onClick={onClick}
      className={cn(
        'flex items-center justify-between px-4 py-[11px] transition-colors',
        onClick && 'active:bg-secondary cursor-pointer',
      )}
    >
      {/* Left: Icon + Label */}
      <div className="flex items-center gap-3">
        {icon && (<div className="flex items-center justify-center w-7 h-7 overflow-hidden rounded-[7px]">{icon}</div>)}
        <span className="text-[17px] tracking-tight text-foreground">{label}</span>
      </div>
      <div className="flex items-center text-[17px]">{rightElement}</div>
    </div>

    <div className="group-last:hidden">
      <Separator.Root className="bg-border ml-[56px] h-[1px]" orientation="horizontal"/>
    </div>
  </div>
);

const KListRowAccordion = ({ icon, label, children, className, value }: KListRowAccordionProps) => (
  <div className={cn('group bg-background', className)}>
    <Accordion.Root collapsible type="single">
      <Accordion.Item value={value} className={cn('group bg-background', className)}>
        <Accordion.Header className="flex">
          <Accordion.Trigger className={cn(
            'flex flex-1 items-center justify-between px-4 py-[11px] transition-colors',
            'active:bg-secondary cursor-pointer',
          )}>
            {/* Left: Icon + Label */}
            <div className="flex items-center gap-3">
              {icon && (<div className="flex items-center justify-center w-7 h-7 overflow-hidden rounded-[7px]">{icon}</div>)}
              <span className="text-[17px] tracking-tight text-foreground text-left">{label}</span>
            </div>

            {/* Right: Animated Chevron */}
            <div className="flex items-center">
              <ChevronRight className="w-5 h-5 text-zinc-300 dark:text-zinc-700 transition-transform
                            duration-200 group-data-[state=open]:rotate-90"/>
            </div>
          </Accordion.Trigger>
        </Accordion.Header>

        <Accordion.Content
          className="overflow-hidden text-[15px] transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
          <div className="px-4 pb-[11px] pt-1 text-muted-foreground">{children}</div>
        </Accordion.Content>

        <div className="group-last:hidden">
          <Separator.Root className="bg-border ml-[56px] h-[1px]" orientation="horizontal"/>
        </div>
      </Accordion.Item>
    </Accordion.Root>

    <div className="group-last:hidden">
      <Separator.Root className="bg-border ml-[56px] h-[1px]" orientation="horizontal"/>
    </div>
  </div>
);


KListRow.displayName = 'KListRow';
KListRowAccordion.displayName = 'KListRowAccordion';
KListGroup.displayName = 'KListGroup';

export { KListRow, KListGroup, KListRowAccordion };