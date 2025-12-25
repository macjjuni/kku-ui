import * as PopoverPrimitive from "@radix-ui/react-popover";
import { forwardRef, ComponentRef, ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

// 라이브러리 사용자를 위해 모든 Props 인터페이스 Export
export interface KPopoverProps extends ComponentPropsWithoutRef<typeof PopoverPrimitive.Root> {}
export interface KPopoverTriggerProps extends ComponentPropsWithoutRef<typeof PopoverPrimitive.Trigger> {}
export interface KPopoverAnchorProps extends ComponentPropsWithoutRef<typeof PopoverPrimitive.Anchor> {}
export interface KPopoverContentProps extends ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> {}

const KPopover = PopoverPrimitive.Root;
const KPopoverAnchor = PopoverPrimitive.Anchor;


const KPopoverTrigger = forwardRef<ComponentRef<typeof PopoverPrimitive.Trigger>,
  ComponentPropsWithoutRef<typeof PopoverPrimitive.Trigger>>(({ className, ...props }, ref) => (
    <PopoverPrimitive.Trigger ref={ref} className={cn("k-popover__trigger", className)} {...props} />
  ));

const KPopoverContent = forwardRef<
  ComponentRef<typeof PopoverPrimitive.Content>,
  KPopoverContentProps
>(({ className, align = "center", side = "bottom", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      side={side}
      sideOffset={sideOffset}
      className={cn(
        "k-popover__content",
        "z-50 w-72 rounded-md border border-border bg-popover p-4 text-popover-foreground shadow-md outline-none",
        // 열고 닫기 애니메이션
        "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
        "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
        // 위치별 슬라이드 애니메이션 (side prop과 연동)
        "data-[side=bottom]:slide-in-from-top-2",
        "data-[side=left]:slide-in-from-right-2",
        "data-[side=right]:slide-in-from-left-2",
        "data-[side=top]:slide-in-from-bottom-2",
        className,
      )}
      {...props}/>
  </PopoverPrimitive.Portal>
));

KPopover.displayName = "KPopover";
KPopoverTrigger.displayName = "KPopoverTrigger";
KPopoverContent.displayName = "KPopoverContent";
KPopoverAnchor.displayName = "KPopoverAnchor";

export { KPopover, KPopoverTrigger, KPopoverContent, KPopoverAnchor };