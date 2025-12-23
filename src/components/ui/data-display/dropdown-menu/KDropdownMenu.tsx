import { forwardRef, ComponentRef, ComponentPropsWithoutRef, HTMLAttributes, createContext, useContext } from 'react';
import * as KDropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Check, ChevronRight, Circle } from "lucide-react";
import { cva } from 'class-variance-authority';
import { cn } from "@/lib/utils";

// --- Types & Context ---
export interface KDropdownContextType {
  size?: 'sm' | 'md';
}

const KDropdownContext = createContext<KDropdownContextType>({ size: 'md' });

export type KDropdownMenuProps = ComponentPropsWithoutRef<typeof KDropdownMenuPrimitive.Root> & KDropdownContextType;
export type KDropdownMenuTriggerProps = ComponentPropsWithoutRef<typeof KDropdownMenuPrimitive.Trigger>;
export type KDropdownMenuPortalProps = ComponentPropsWithoutRef<typeof KDropdownMenuPrimitive.Portal>;
export type KDropdownMenuSubProps = ComponentPropsWithoutRef<typeof KDropdownMenuPrimitive.Sub>;
export type KDropdownMenuSubTriggerProps = ComponentPropsWithoutRef<typeof KDropdownMenuPrimitive.SubTrigger> & { inset?: boolean };
export type KDropdownMenuSubContentProps = ComponentPropsWithoutRef<typeof KDropdownMenuPrimitive.SubContent>;
export type KDropdownMenuContentProps = ComponentPropsWithoutRef<typeof KDropdownMenuPrimitive.Content>;
export type KDropdownMenuItemProps = ComponentPropsWithoutRef<typeof KDropdownMenuPrimitive.Item> & { inset?: boolean };
export type KDropdownMenuCheckboxItemProps = ComponentPropsWithoutRef<typeof KDropdownMenuPrimitive.CheckboxItem>;
export type KDropdownMenuRadioGroupProps = ComponentPropsWithoutRef<typeof KDropdownMenuPrimitive.RadioGroup>;
export type KDropdownMenuRadioItemProps = ComponentPropsWithoutRef<typeof KDropdownMenuPrimitive.RadioItem>;
export type KDropdownMenuLabelProps = ComponentPropsWithoutRef<typeof KDropdownMenuPrimitive.Label> & { inset?: boolean };
export type KDropdownMenuSeparatorProps = ComponentPropsWithoutRef<typeof KDropdownMenuPrimitive.Separator>;
export interface KDropdownMenuShortcutProps extends HTMLAttributes<HTMLSpanElement> {}
export type KDropdownMenuGroupProps = ComponentPropsWithoutRef<typeof KDropdownMenuPrimitive.Group>;

// --- Styles ---
const itemVariants = cva(
  "relative flex cursor-default select-none items-center gap-2 rounded-sm outline-none transition-colors " +
  "focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      size: { sm: "px-2 py-1 text-xs", md: "px-2 py-1.5 text-sm" },
    },
    defaultVariants: { size: "md" },
  },
);

const labelVariants = cva("px-2 py-1.5 font-semibold", {
  variants: {
    size: { sm: "text-[11px] py-0.5 opacity-70", md: "text-[13px] py-1" },
  },
  defaultVariants: { size: "md" },
});

// --- Components ---

const KDropdownMenu = ({ size = 'md', ...props }: KDropdownMenuProps) => (
  <KDropdownContext.Provider value={{ size }}>
    <KDropdownMenuPrimitive.Root {...props} />
  </KDropdownContext.Provider>
);


const KDropdownMenuTrigger = forwardRef<ComponentRef<typeof KDropdownMenuPrimitive.Trigger>, KDropdownMenuTriggerProps>(
  ({ className, ...props }, ref) => (
    <KDropdownMenuPrimitive.Trigger ref={ref} className={cn("k-dropdown-menu__trigger", className)} {...props} />
  ),
);

const KDropdownMenuGroup = forwardRef<ComponentRef<typeof KDropdownMenuPrimitive.Group>, ComponentPropsWithoutRef<typeof KDropdownMenuPrimitive.Group>>(
  ({ className, ...props }, ref) => (
    <KDropdownMenuPrimitive.Group ref={ref} className={cn("k-dropdown-menu__group", className)} {...props} />
  ),
);

const KDropdownMenuRadioGroup = forwardRef<ComponentRef<typeof KDropdownMenuPrimitive.RadioGroup>, ComponentPropsWithoutRef<typeof KDropdownMenuPrimitive.RadioGroup>>(
  ({ className, ...props }, ref) => (
    <KDropdownMenuPrimitive.RadioGroup ref={ref} className={cn("k-dropdown-menu__radio-group", className)} {...props} />
  ),
);

const KDropdownMenuPortal = KDropdownMenuPrimitive.Portal;
const KDropdownMenuSub = KDropdownMenuPrimitive.Sub;

const KDropdownMenuSubTrigger = forwardRef<ComponentRef<typeof KDropdownMenuPrimitive.SubTrigger>, KDropdownMenuSubTriggerProps>(
  ({ className, inset, children, ...props }, ref) => {
    const { size } = useContext(KDropdownContext);
    return (
      <KDropdownMenuPrimitive.SubTrigger ref={ref} className={cn("k-dropdown-menu__sub-trigger", itemVariants({ size, className }), "data-[state=open]:bg-accent", inset && "pl-8")} {...props}>
        {children}
        <ChevronRight className="ml-auto size-4" />
      </KDropdownMenuPrimitive.SubTrigger>
    );
  },
);

const KDropdownMenuSubContent = forwardRef<ComponentRef<typeof KDropdownMenuPrimitive.SubContent>, KDropdownMenuSubContentProps>(
  ({ className, ...props }, ref) => (
    <KDropdownMenuPrimitive.SubContent ref={ref} className={cn("k-dropdown-menu__sub-content z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover " +
      "p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 " +
      "data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 " +
      "data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 " +
      "origin-[--radix-dropdown-menu-content-transform-origin]", className)} {...props}/>
  ),
);

const KDropdownMenuContent = forwardRef<ComponentRef<typeof KDropdownMenuPrimitive.Content>, KDropdownMenuContentProps>(
  ({ className, sideOffset = 4, ...props }, ref) => (
    <KDropdownMenuPrimitive.Portal>
      <KDropdownMenuPrimitive.Content ref={ref} sideOffset={sideOffset} className={cn("k-dropdown-menu z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] " +
        "min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md " +
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 " +
        "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 " +
        "data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-dropdown-menu-content-transform-origin]", className)} {...props}/>
    </KDropdownMenuPrimitive.Portal>
  ),
);

const KDropdownMenuItem = forwardRef<ComponentRef<typeof KDropdownMenuPrimitive.Item>, KDropdownMenuItemProps>(
  ({ className, inset, ...props }, ref) => {
    const { size } = useContext(KDropdownContext);
    return <KDropdownMenuPrimitive.Item ref={ref} className={cn("k-dropdown-menu__item", itemVariants({ size, className }), inset && "pl-8")} {...props} />;
  },
);

const KDropdownMenuCheckboxItem = forwardRef<ComponentRef<typeof KDropdownMenuPrimitive.CheckboxItem>, KDropdownMenuCheckboxItemProps>(
  ({ className, children, checked, ...props }, ref) => {
    const { size } = useContext(KDropdownContext);
    return (
      <KDropdownMenuPrimitive.CheckboxItem ref={ref} className={cn("k-dropdown-menu__checkbox-item", itemVariants({ size, className }), "pl-8")} checked={checked} {...props}>
        <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
          <KDropdownMenuPrimitive.ItemIndicator>
            <Check className="size-4" />
          </KDropdownMenuPrimitive.ItemIndicator>
        </span>
        {children}
      </KDropdownMenuPrimitive.CheckboxItem>
    );
  },
);

const KDropdownMenuRadioItem = forwardRef<ComponentRef<typeof KDropdownMenuPrimitive.RadioItem>, KDropdownMenuRadioItemProps>(
  ({ className, children, ...props }, ref) => {
    const { size } = useContext(KDropdownContext);
    return (
      <KDropdownMenuPrimitive.RadioItem ref={ref} className={cn("k-dropdown-menu__radio-item", itemVariants({ size, className }), "pl-8")} {...props}>
        <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
          <KDropdownMenuPrimitive.ItemIndicator>
            <Circle className="size-2 fill-current" />
          </KDropdownMenuPrimitive.ItemIndicator>
        </span>
        {children}
      </KDropdownMenuPrimitive.RadioItem>
    );
  },
);

const KDropdownMenuLabel = forwardRef<ComponentRef<typeof KDropdownMenuPrimitive.Label>, KDropdownMenuLabelProps>(
  ({ className, inset, ...props }, ref) => {
    const { size } = useContext(KDropdownContext);
    return <KDropdownMenuPrimitive.Label ref={ref} className={cn("k-dropdown-menu__label", labelVariants({ size }), inset && "pl-8", className)} {...props} />;
  },
);

const KDropdownMenuSeparator = forwardRef<ComponentRef<typeof KDropdownMenuPrimitive.Separator>, KDropdownMenuSeparatorProps>(
  ({ className, ...props }, ref) => (
    <KDropdownMenuPrimitive.Separator ref={ref} className={cn("k-dropdown-menu__separator -mx-1 my-1 h-px bg-muted", className)} {...props} />
  ),
);

const KDropdownMenuShortcut = ({ className, ...props }: KDropdownMenuShortcutProps) => (
  <span className={cn("k-dropdown-menu__shortcut ml-auto text-xs tracking-widest opacity-60", className)} {...props} />
);

// DisplayNames
KDropdownMenu.displayName = "KDropdownMenu";
KDropdownMenuTrigger.displayName = "KDropdownMenuTrigger";
KDropdownMenuSubTrigger.displayName = "KDropdownMenuSubTrigger";
KDropdownMenuSubContent.displayName = "KDropdownMenuSubContent";
KDropdownMenuContent.displayName = "KDropdownMenuContent";
KDropdownMenuItem.displayName = "KDropdownMenuItem";
KDropdownMenuCheckboxItem.displayName = "KDropdownMenuCheckboxItem";
KDropdownMenuRadioItem.displayName = "KDropdownMenuRadioItem";
KDropdownMenuLabel.displayName = "KDropdownMenuLabel";
KDropdownMenuSeparator.displayName = "KDropdownMenuSeparator";
KDropdownMenuShortcut.displayName = "KDropdownMenuShortcut";
KDropdownMenuGroup.displayName = "KDropdownMenuGroup";
KDropdownMenuPortal.displayName = "KDropdownMenuPortal";
KDropdownMenuSub.displayName = "KDropdownMenuSub";
KDropdownMenuRadioGroup.displayName = "KDropdownMenuRadioGroup";

export {
  KDropdownMenu,
  KDropdownMenuTrigger,
  KDropdownMenuContent,
  KDropdownMenuItem,
  KDropdownMenuCheckboxItem,
  KDropdownMenuRadioItem,
  KDropdownMenuLabel,
  KDropdownMenuSeparator,
  KDropdownMenuShortcut,
  KDropdownMenuGroup,
  KDropdownMenuPortal,
  KDropdownMenuSub,
  KDropdownMenuSubContent,
  KDropdownMenuSubTrigger,
  KDropdownMenuRadioGroup,
};