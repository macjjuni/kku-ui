import { toast, Toaster as Sonner } from 'sonner';
import { ComponentProps, CSSProperties } from 'react';
import { cn } from '@/lib/utils';

export interface KToasterProps extends ComponentProps<typeof Sonner> {
  size?: 'sm' | 'md' | 'lg' | 'full';
}

const sizeWidthMap = {
  sm: '220px',
  md: '280px',
  lg: '420px',
  full: 'calc(100vw - 32px)',
};

const sizeTextMap = {
  sm: { title: 'text-xs', description: 'text-[10px]' },
  md: { title: 'text-sm', description: 'text-xs' },
  lg: { title: 'text-base', description: 'text-sm' },
  full: { title: 'text-sm', description: 'text-xs' },
};

const toastStyleMap = {
  sm: 'group-[.toaster]:p-2 group-[.toaster]:gap-2',
  md: 'group-[.toaster]:p-3 group-[.toaster]:gap-3',
  lg: 'group-[.toaster]:p-3.5 group-[.toaster]:gap-4',
  full: 'group-[.toaster]:p-4 group-[.toaster]:rounded-none',
};

const KToast = ({ size = 'md', position = 'top-right', ...props }: KToasterProps) => {
  return (
    <Sonner
      className="k-toast toaster group"
      position={position}
      theme="system"
      {...props}
      style={{
        '--width': sizeWidthMap[size],
        ...props.style,
      } as CSSProperties}
      toastOptions={{
        ...props.toastOptions,
        classNames: {
          ...props.toastOptions?.classNames,
          toast: cn(
            'group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border ' +
            'group-[.toaster]:rounded-md group-[.toaster]:shadow-lg flex items-center',
            toastStyleMap[size],
            props.toastOptions?.classNames?.toast,
          ),
          title: cn(
            'k-toast__title',
            sizeTextMap[size].title,
            'font-semibold',
            props.toastOptions?.classNames?.title,
          ),
          description: cn(
            'k-toast__description',
            'group-[.toast]:text-muted-foreground',
            sizeTextMap[size].description,
            props.toastOptions?.classNames?.description,
          ),
          actionButton: cn(
            'k-toast__action-button',
            'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',
            props.toastOptions?.classNames?.actionButton,
          ),
          cancelButton: cn(
            'k-toast__cancel-button',
            'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground',
            props.toastOptions?.classNames?.cancelButton,
          ),
        },
      }}
    />
  );
};

KToast.displayName = "KToast";

export { KToast, toast as kToast };