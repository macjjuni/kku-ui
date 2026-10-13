import { toast, Toaster as Sonner } from 'sonner';
import type { ComponentProps, CSSProperties } from 'react';
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

const KToast = (props: KToasterProps) => {
  // region [Hooks]
  const { size = 'md', position = 'top-right', theme = 'system', className, style, toastOptions, ...restProps } = props;
  // endregion

  return (
    <Sonner
      {...restProps}
      className={cn('k-toast toaster group', className)}
      position={position}
      theme={theme}
      style={
        {
          '--width': sizeWidthMap[size],
          ...style,
        } as CSSProperties
      }
      toastOptions={{
        ...toastOptions,
        classNames: {
          ...toastOptions?.classNames,
          toast: cn(
            'group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border ' +
              'group-[.toaster]:rounded-md group-[.toaster]:shadow-lg flex items-center',
            toastStyleMap[size],
            toastOptions?.classNames?.toast,
          ),
          title: cn('k-toast__title', sizeTextMap[size].title, 'font-semibold', toastOptions?.classNames?.title),
          description: cn(
            'k-toast__description',
            'group-[.toast]:text-muted-foreground',
            sizeTextMap[size].description,
            toastOptions?.classNames?.description,
          ),
          actionButton: cn(
            'k-toast__action-button',
            'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',
            toastOptions?.classNames?.actionButton,
          ),
          cancelButton: cn(
            'k-toast__cancel-button',
            'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground',
            toastOptions?.classNames?.cancelButton,
          ),
          closeButton: cn(
            'k-toast__close-button',
            '!left-auto !right-[-16px] !top-[-2px]',
            'group-[.toast]:bg-background group-[.toast]:border-border',
            toastOptions?.classNames?.closeButton,
          ),
        },
      }}
    />
  );
};

KToast.displayName = 'KToast';

export { KToast, toast as kToast };
