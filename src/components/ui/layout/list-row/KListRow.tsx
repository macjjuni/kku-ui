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
      <div className="">{children}</div>
      {footer && (<footer className="px-4 mt-2 text-[13px] text-muted-foreground leading-tight">{footer}</footer>)}
    </section>
  );
};
// overflow-hidden rounded-xl border border-border shadow-sm bg-background

const KListRow = ({
  icon,
  label,
  rightElement = <ChevronRight className="w-5 h-5 text-zinc-300 dark:text-zinc-700"/>,
  onClick,
  className,
}: KListRowProps) => (
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions,jsx-a11y/no-noninteractive-tabindex
  <div tabIndex={onClick ? 0 : -1} onClick={onClick}
       className={cn(
         'group bg-background first:border-t last:border-b first:rounded-t-xl last:rounded-b-xl border-x',
         onClick && 'active:bg-secondary cursor-pointer',
         'focus-visible:outline focus-visible:outline-ring focus-visible:outline-offset-[-1px]',
         className,
       )}>
    <div className={cn('flex items-center justify-between px-4 py-[11px] transition-colors')}>
      {/* Left: Icon + Label */}
      <div className="flex items-center gap-3">
        {icon && (<div className="flex items-center justify-center w-7 h-7 overflow-hidden rounded-lg">{icon}</div>)}
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
  <div className={cn(
    'group bg-background first:border-t last:border-b first:rounded-t-xl last:rounded-b-xl border-x',
    className,
  )}>
    <Accordion.Root collapsible type="single">
      <Accordion.Item value={value} className="border-none">
        <Accordion.Header className="flex">
          <Accordion.Trigger className={cn(
            'flex flex-1 items-center justify-between px-4 py-[11px] transition-colors',
            'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-ring',
            'active:bg-secondary cursor-pointer',
            'text-left',
          )}>
            {/* Left: Icon + Label */}
            <div className="flex items-center gap-3">
              {icon && (<div className="flex items-center justify-center w-7 h-7 overflow-hidden rounded-lg">{icon}</div>)}
              <span className="text-[17px] tracking-tight text-foreground">{label}</span>
            </div>

            {/* Right: Animated Chevron */}
            <div className="flex items-center">
              <ChevronRight className="w-5 h-5 text-zinc-300 dark:text-zinc-700 transition-transform duration-200 group-data-[state=open]:rotate-90"/>
            </div>
          </Accordion.Trigger>
        </Accordion.Header>

        <Accordion.Content
          className="overflow-hidden text-[15px] transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
          {/* 아코디언 내용 영역 */}
          <div className="px-4 pb-[11px] pt-1 text-muted-foreground bg-background">
            {children}
          </div>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>

    {/* 하단 구분선: 리스트의 마지막 요소가 아닐 때만 노출 */}
    <div className="group-last:hidden">
      <Separator.Root className="bg-border ml-[56px] h-[1px]" orientation="horizontal"/>
    </div>
  </div>
);

KListRow.displayName = 'KListRow';
KListRowAccordion.displayName = 'KListRowAccordion';
KListGroup.displayName = 'KListGroup';

export { KListRow, KListGroup, KListRowAccordion };