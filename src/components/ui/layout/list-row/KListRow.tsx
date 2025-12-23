import { ReactNode } from "react";
import * as Separator from '@radix-ui/react-separator';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils'; // 기존에 사용하시던 cn 유틸리티 가정

export type ListGroupWidth = "sm" | "md" | "lg" | "auto" | "full";

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

const KListRow = ({
  icon,
  label,
  rightElement = <ChevronRight className="w-5 h-5 text-border"/>,
  onClick,
  className,
}: KListRowProps) => (
  <div className={cn("group bg-background", className)}>
    {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
    <div
      onClick={onClick}
      className={cn(
        "flex items-center justify-between px-4 py-[11px] transition-colors",
        onClick && "active:bg-secondary cursor-pointer",
      )}
    >
      {/* Left: Icon + Label */}
      <div className="flex items-center gap-3">
        {icon && (
          <div className="flex items-center justify-center w-7 h-7 overflow-hidden rounded-[7px]">
            {icon}
          </div>
        )}
        {/* text-black/white -> text-foreground */}
        <span className="text-[17px] tracking-tight text-foreground">{label}</span>
      </div>
      {/* Right: Custom Element - text-[#8E8E93] -> text-muted-foreground */}
      <div className="flex items-center text-[17px] text-muted-foreground">
        {rightElement}
      </div>
    </div>

    <div className="group-last:hidden">
      <Separator.Root
        className="bg-border ml-[56px] h-[0.5px]"
        orientation="horizontal"
      />
    </div>
  </div>
);

const KListGroup = ({ children, header, footer, width = "md", className }: KListGroupProps) => {
  const widthMap: Record<ListGroupWidth, string> = {
    sm: "max-w-[440px]",
    md: "max-w-[600px]",
    lg: "max-w-[800px]",
    auto: "w-fit",
    full: "max-w-full",
  };

  return (
    <section className={cn("w-full mx-auto [&&+&]:mt-6 px-0", widthMap[width], className)}>
      {header && (
        <header className="px-4 mb-2 text-[14px] text-muted-foreground uppercase">
          {header}
        </header>
      )}
      <div className="overflow-hidden bg-card rounded-xl border-[0.5px] border-border shadow-sm">
        {children}
      </div>

      {footer && (
        <footer className="px-4 mt-2 text-[13px] text-muted-foreground leading-tight">
          {footer}
        </footer>
      )}
    </section>
  );
};

KListRow.displayName = "KListRow";
KListGroup.displayName = "KListGroup";

export { KListRow, KListGroup };