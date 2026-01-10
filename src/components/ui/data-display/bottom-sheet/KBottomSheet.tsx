import { createContext, useContext, HTMLAttributes } from 'react';
import { Drawer as DrawerPrimitive } from 'vaul';
import { cn } from '@/lib/utils';

export interface KBottomSheetContextType {
  size?: 'sm' | 'md';
  opacity?: number;
  blur?: number;
}

export type KBottomSheetProps = React.ComponentPropsWithRef<typeof DrawerPrimitive.Root> & KBottomSheetContextType;
export type KBottomSheetTriggerProps = React.ComponentPropsWithRef<typeof DrawerPrimitive.Trigger>;
export type KBottomSheetPortalProps = React.ComponentPropsWithRef<typeof DrawerPrimitive.Portal>;
export type KBottomSheetCloseProps = React.ComponentPropsWithRef<typeof DrawerPrimitive.Close>;
export type KBottomSheetOverlayProps = React.ComponentPropsWithRef<typeof DrawerPrimitive.Overlay>;
export type KBottomSheetContentProps = React.ComponentPropsWithRef<typeof DrawerPrimitive.Content>;

export interface KBottomSheetHeaderProps extends HTMLAttributes<HTMLDivElement> {}
export interface KBottomSheetFooterProps extends HTMLAttributes<HTMLDivElement> {}

export type KBottomSheetTitleProps = React.ComponentPropsWithRef<typeof DrawerPrimitive.Title>;
export type KBottomSheetDescriptionProps = React.ComponentPropsWithRef<typeof DrawerPrimitive.Description>;

const KBottomSheetContext = createContext<KBottomSheetContextType>({ size: 'md', opacity: 40, blur: 0 });


const KBottomSheet = ({
  size = 'md',
  opacity = 40,
  blur = 0,
  shouldScaleBackground = true,
  ...props
}: KBottomSheetProps) => (
  <KBottomSheetContext.Provider value={{ size, opacity, blur }}>
    <DrawerPrimitive.Root shouldScaleBackground={shouldScaleBackground} {...props} />
  </KBottomSheetContext.Provider>
);

const KBottomSheetTrigger = DrawerPrimitive.Trigger;
const KBottomSheetPortal = DrawerPrimitive.Portal;
const KBottomSheetClose = DrawerPrimitive.Close;

const KBottomSheetOverlay = ({ className, style, ref, ...props }: KBottomSheetOverlayProps) => {
  const { opacity, blur } = useContext(KBottomSheetContext);

  return (
    <DrawerPrimitive.Overlay
      ref={ref}
      className={cn('k-bottom-sheet__overlay fixed inset-0 z-50', className)}
      style={{
        backgroundColor: `rgba(0, 0, 0, ${(opacity ?? 80) / 100})`,
        backdropFilter: `blur(${blur ?? 4}px)`,
        WebkitBackdropFilter: `blur(${blur ?? 4}px)`,
        ...style,
      }}
      {...props}
    />
  );
};

const KBottomSheetContent = ({ className, children, ref, ...props }: KBottomSheetContentProps) => {
  const { size } = useContext(KBottomSheetContext);
  return (
    <KBottomSheetPortal>
      <DrawerPrimitive.Content
        ref={ref}
        className={cn(
          'k-bottom-sheet__content',
          'fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background shadow-lg outline-none',
          size === 'sm' ? 'max-w-md mx-auto' : 'w-full',
          className,
        )}
        {...props}
      >
        <div className="mx-auto mt-4 h-1.5 w-12 rounded-full bg-muted" />
        <div className={cn("grid w-full", size === 'sm' ? "gap-2 p-4 text-sm" : "gap-4 p-5 text-md")}>
          {children}
        </div>
      </DrawerPrimitive.Content>
    </KBottomSheetPortal>
  );
};

const KBottomSheetHeader = ({ className, ...props }: KBottomSheetHeaderProps) => (
  <div className={cn('k-bottom-sheet__header grid gap-1.5 text-center sm:text-left', className)} {...props} />
);

const KBottomSheetFooter = ({ className, ...props }: KBottomSheetFooterProps) => {
  const { size } = useContext(KBottomSheetContext);
  return <div className={cn('k-bottom-sheet__footer mt-auto flex flex-col gap-2', size === 'sm' ? 'mt-2' : 'mt-4', className)} {...props} />;
};

const KBottomSheetTitle = ({ className, ref, ...props }: KBottomSheetTitleProps) => {
  const { size } = useContext(KBottomSheetContext);
  return (
    <DrawerPrimitive.Title
      ref={ref}
      className={cn('k-bottom-sheet__title font-semibold leading-none tracking-tight', size === 'sm' ? 'text-base' : 'text-lg', className)}
      {...props}
    />
  );
};

const KBottomSheetDescription = ({ className, ref, ...props }: KBottomSheetDescriptionProps) => {
  const { size } = useContext(KBottomSheetContext);
  return (
    <DrawerPrimitive.Description
      ref={ref}
      className={cn('k-bottom-sheet__description text-muted-foreground', size === 'sm' ? 'text-xs' : 'text-sm', className)}
      {...props}
    />
  );
};


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