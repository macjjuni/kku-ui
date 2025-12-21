import { ComponentProps, createContext, useContext, HTMLAttributes } from 'react';
import { Drawer as DrawerPrimitive } from 'vaul';
import { cn } from '@/lib/utils';

interface KBottomSheetContextType {
  size?: 'sm' | 'md';
  opacity?: number;
  blur?: number;
}

const KBottomSheetContext = createContext<KBottomSheetContextType>({ size: 'md', opacity: 40, blur: 0 });

const KBottomSheet = ({ size = 'md', opacity = 40, blur = 0, shouldScaleBackground = true, ...props }: ComponentProps<typeof DrawerPrimitive.Root> & KBottomSheetContextType) => (
  <KBottomSheetContext.Provider value={{ size, opacity, blur }}>
    <DrawerPrimitive.Root shouldScaleBackground={shouldScaleBackground} {...props} />
  </KBottomSheetContext.Provider>
);

const KBottomSheetTrigger = DrawerPrimitive.Trigger;
const KBottomSheetPortal = DrawerPrimitive.Portal;
const KBottomSheetClose = DrawerPrimitive.Close;

const KBottomSheetOverlay = ({ className, style, ...props }: ComponentProps<typeof DrawerPrimitive.Overlay>) => {
  const { opacity, blur } = useContext(KBottomSheetContext);

  return (
    <DrawerPrimitive.Overlay className={cn('fixed inset-0 z-50', className)}
                             style={{
                               backgroundColor: `rgba(0, 0, 0, ${(opacity ?? 80) / 100})`,
                               backdropFilter: `blur(${blur ?? 4}px)`,
                               WebkitBackdropFilter: `blur(${blur ?? 4}px)`,
                               ...style,
                             }} {...props} />
  )
};

const KBottomSheetContent = ({ className, children, ...props }: ComponentProps<typeof DrawerPrimitive.Content>) => {
  const { size } = useContext(KBottomSheetContext);
  return (
    <KBottomSheetPortal>
      <KBottomSheetOverlay />
      <DrawerPrimitive.Content
        className={cn(
          'fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background shadow-lg',
          size === 'sm' ? 'max-w-md mx-auto' : 'w-full',
          className,
        )}
        {...props}>
        <div className="mx-auto mt-4 h-1.5 w-12 rounded-full bg-muted" />
        <div className={cn("grid w-full", size === 'sm' ? "gap-2 p-4 text-sm" : "gap-4 p-5 text-md")}>
          {children}
        </div>
      </DrawerPrimitive.Content>
    </KBottomSheetPortal>
  );
};

const KBottomSheetHeader = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('grid gap-1.5 text-center sm:text-left', className)} {...props} />
);

const KBottomSheetFooter = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => {
  const { size } = useContext(KBottomSheetContext);
  return <div className={cn('mt-auto flex flex-col gap-2', size === 'sm' ? 'mt-2' : 'mt-4', className)} {...props} />;
};

const KBottomSheetTitle = ({ className, ...props }: ComponentProps<typeof DrawerPrimitive.Title>) => {
  const { size } = useContext(KBottomSheetContext);
  return <DrawerPrimitive.Title className={cn('font-semibold leading-none tracking-tight', size === 'sm' ? 'text-base' : 'text-lg', className)} {...props} />;
};

const KBottomSheetDescription = ({ className, ...props }: ComponentProps<typeof DrawerPrimitive.Description>) => {
  const { size } = useContext(KBottomSheetContext);
  return <DrawerPrimitive.Description className={cn('text-muted-foreground', size === 'sm' ? 'text-xs' : 'text-sm', className)} {...props} />;
};

KBottomSheet.displayName = "KBottomSheet";
KBottomSheetTrigger.displayName = "KBottomSheetTrigger";
KBottomSheetClose.displayName = "KBottomSheetClose";
KBottomSheetOverlay.displayName = "KBottomSheetOverlay";
KBottomSheetContent.displayName = "KBottomSheetContent";
KBottomSheetHeader.displayName = "KBottomSheetHeader";
KBottomSheetFooter.displayName = "KBottomSheetFooter";
KBottomSheetTitle.displayName = "KBottomSheetTitle";
KBottomSheetDescription.displayName = "KBottomSheetDescription";

export {
  KBottomSheet,
  KBottomSheetPortal,
  KBottomSheetOverlay,
  KBottomSheetTrigger,
  KBottomSheetClose,
  KBottomSheetContent,
  KBottomSheetHeader,
  KBottomSheetFooter,
  KBottomSheetTitle,
  KBottomSheetDescription,
};