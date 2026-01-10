import * as PopoverPrimitive from "@radix-ui/react-popover";
import { cn } from "@/lib/utils";

export type KPopoverProps = React.ComponentPropsWithRef<typeof PopoverPrimitive.Root>;
export type KPopoverTriggerProps = React.ComponentPropsWithRef<typeof PopoverPrimitive.Trigger>;
export type KPopoverAnchorProps = React.ComponentPropsWithRef<typeof PopoverPrimitive.Anchor>;
export type KPopoverContentProps = React.ComponentPropsWithRef<typeof PopoverPrimitive.Content>;

const KPopover = PopoverPrimitive.Root;
const KPopoverAnchor = PopoverPrimitive.Anchor;


const KPopoverTrigger = ({ className, ref, ...props }: KPopoverTriggerProps) => (
  <PopoverPrimitive.Trigger
    ref={ref}
    className={cn("k-popover__trigger", className)}
    {...props}
  />
);

const KPopoverContent = ({
  className,
  align = "center",
  side = "bottom",
  sideOffset = 4,
  ref,
  ...props
}: KPopoverContentProps) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      side={side}
      sideOffset={sideOffset}
      className={cn(
        "k-popover__content",
        "z-50 w-72 rounded-md border border-border bg-popover p-4 text-popover-foreground shadow-md outline-none",
        "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
        "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
        "data-[side=bottom]:slide-in-from-top-2",
        "data-[side=left]:slide-in-from-right-2",
        "data-[side=right]:slide-in-from-left-2",
        "data-[side=top]:slide-in-from-bottom-2",
        className,
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
);

export { KPopover, KPopoverTrigger, KPopoverContent, KPopoverAnchor };