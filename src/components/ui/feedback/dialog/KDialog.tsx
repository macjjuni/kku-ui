import { forwardRef, ComponentRef, ComponentPropsWithoutRef, HTMLAttributes, createContext, useContext } from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

// --- Types & Context ---
export interface KDialogContextType {
  size?: 'sm' | 'md';
  opacity?: number;
  blur?: number;
}

export type KDialogProps = ComponentPropsWithoutRef<typeof DialogPrimitive.Root> & KDialogContextType;
export type KDialogTriggerProps = ComponentPropsWithoutRef<typeof DialogPrimitive.Trigger>;
export type KDialogPortalProps = ComponentPropsWithoutRef<typeof DialogPrimitive.Portal>;
export type KDialogCloseProps = ComponentPropsWithoutRef<typeof DialogPrimitive.Close>;
export type KDialogOverlayProps = ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>;
export type KDialogContentProps = ComponentPropsWithoutRef<typeof DialogPrimitive.Content>;
export type KDialogTitleProps = ComponentPropsWithoutRef<typeof DialogPrimitive.Title>;
export type KDialogDescriptionProps = ComponentPropsWithoutRef<typeof DialogPrimitive.Description>;

export interface KDialogHeaderProps extends HTMLAttributes<HTMLDivElement> {}
export interface KDialogFooterProps extends HTMLAttributes<HTMLDivElement> {}

const KDialogContext = createContext<KDialogContextType>({ size: 'md', opacity: 40, blur: 0 });

// --- Components ---

const KDialog = ({ size = 'md', opacity = 40, blur = 0, ...props }: KDialogProps) => (
  <KDialogContext.Provider value={{ size, opacity, blur }}>
    <DialogPrimitive.Root {...props} />
  </KDialogContext.Provider>
);

const KDialogTrigger = DialogPrimitive.Trigger;
const KDialogPortal = DialogPrimitive.Portal;
const KDialogClose = DialogPrimitive.Close;

const KDialogOverlay = forwardRef<ComponentRef<typeof DialogPrimitive.Overlay>, KDialogOverlayProps>(
  ({ className, style, ...props }, ref) => {
    const { opacity, blur } = useContext(KDialogContext);

    return (
      <DialogPrimitive.Overlay
        ref={ref}
        style={{
          backgroundColor: `rgba(0, 0, 0, ${(opacity ?? 80) / 100})`,
          backdropFilter: `blur(${blur}px)`,
          WebkitBackdropFilter: `blur(${blur}px)`,
          ...style,
        }}
        className={cn(
          "fixed inset-0 z-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
          className,
        )}
        {...props}
      />
    )
  },
);

const KDialogContent = forwardRef<ComponentRef<typeof DialogPrimitive.Content>, KDialogContentProps>(
  ({ className, children, ...props }, ref) => {
    const { size } = useContext(KDialogContext);
    return (
      <KDialogPortal>
        <KDialogOverlay />
        <DialogPrimitive.Content
          ref={ref}
          className={cn(
            "fixed left-[50%] top-[50%] z-50 grid w-full translate-x-[-50%] translate-y-[-50%] border bg-background shadow-lg duration-200",
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]",
            "data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-md outline-none",
            size === 'sm' ? "max-w-sm p-4 gap-2 text-sm" : "max-w-lg p-6 gap-4 text-md",
            className,
          )}
          {...props}
        >
          {children}
          <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100
          focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent
          data-[state=open]:text-muted-foreground">
            <X className={size === 'sm' ? "h-4 w-4" : "h-6 w-6"} />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        </DialogPrimitive.Content>
      </KDialogPortal>
    );
  },
);

const KDialogHeader = ({ className, ...props }: KDialogHeaderProps) => {
  const { size } = useContext(KDialogContext);
  return <div className={cn("flex flex-col text-left sm:text-left", size === 'sm' ? "space-y-1" : "space-y-1.5", className)} {...props} />;
};

const KDialogFooter = ({ className, ...props }: KDialogFooterProps) => {
  const { size } = useContext(KDialogContext);
  return <div className={cn("flex sm:flex-row justify-end space-x-2", size === 'sm' ? "mt-2" : "mt-4", className)} {...props}/>;
};

const KDialogTitle = forwardRef<ComponentRef<typeof DialogPrimitive.Title>, KDialogTitleProps>(
  ({ className, ...props }, ref) => {
    const { size } = useContext(KDialogContext);
    return <DialogPrimitive.Title ref={ref} className={cn("font-semibold leading-none tracking-tight", size === 'sm' ? "text-base" : "text-lg", className)} {...props} />;
  },
);

const KDialogDescription = forwardRef<ComponentRef<typeof DialogPrimitive.Description>, KDialogDescriptionProps>(
  ({ className, ...props }, ref) => {
    const { size } = useContext(KDialogContext);
    return <DialogPrimitive.Description ref={ref} className={cn("text-muted-foreground", size === 'sm' ? "text-xs" : "text-sm", className)} {...props} />;
  },
);

KDialog.displayName = "KDialog";
KDialogTrigger.displayName = "KDialogTrigger";
KDialogOverlay.displayName = "KDialogOverlay";
KDialogContent.displayName = "KDialogContent";
KDialogHeader.displayName = "KDialogHeader";
KDialogFooter.displayName = "KDialogFooter";
KDialogTitle.displayName = "KDialogTitle";
KDialogDescription.displayName = "KDialogDescription";

export {
  KDialog,
  KDialogPortal,
  KDialogOverlay,
  KDialogTrigger,
  KDialogClose,
  KDialogContent,
  KDialogHeader,
  KDialogFooter,
  KDialogTitle,
  KDialogDescription,
}