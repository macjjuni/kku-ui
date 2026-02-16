import { ComponentProps, createContext, useContext } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { KButton, KTextarea, KInput, KInputProps, KInputSizeType } from '@/components';

const InputGroupContext = createContext<{ size?: KInputSizeType | null }>({ size: 'md' });

const inputGroupVariants = cva(
  [
    "k-input-group group/input-group relative flex w-full items-center rounded-md border border-input bg-background shadow-xs outline-none transition-all",
    "has-[>textarea]:h-auto",
    "focus-within:border-[hsl(var(--ring))] focus-within:z-10 focus-within:ring-0",
    "has-[[data-slot][aria-invalid=true]]:border-destructive has-[[data-slot][aria-invalid=true]]:focus-within:border-destructive",
    "dark:bg-input/30",
  ],
  {
    variants: {
      size: {
        sm: "h-8",
        md: "h-9",
        lg: "h-10",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

const KInputGroup = ({ className, size = 'md', ...props }: ComponentProps<'div'> & VariantProps<typeof inputGroupVariants>) => (
  <InputGroupContext.Provider value={{ size }}>
    <div
      data-slot="input-group"
      data-size={size}
      role="group"
      className={cn(
        inputGroupVariants({ size }),
        // Alignment logic
        'has-[>[data-align=inline-start]]:[&>input]:pl-2',
        'has-[>[data-align=inline-end]]:[&>input]:pr-2',
        'has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:[&>input]:pb-3',
        'has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:[&>input]:pt-3',
        className,
      )}
      {...props}
    />
  </InputGroupContext.Provider>
);

const inputGroupAddonVariants = cva(
  'text-muted-foreground flex h-auto cursor-text select-none items-center justify-center gap-2 py-1.5 font-medium ' +
  'group-data-[disabled=true]/input-group:opacity-50 [&>kbd]:rounded-[calc(var(--radius)-5px)] [&>svg:not([class*=\'size-\'])]:size-4',
  {
    variants: {
      align: {
        'inline-start': 'order-first pl-3 has-[>button]:ml-[-0.45rem] has-[>kbd]:ml-[-0.35rem]',
        'inline-end': 'order-last pr-3 has-[>button]:mr-[-0.4rem] has-[>kbd]:mr-[-0.35rem]',
        'block-start': '[.border-b]:pb-3 order-first w-full justify-start px-3 pt-3 group-has-[>input]/input-group:pt-2.5',
        'block-end': '[.border-t]:pt-3 order-last w-full justify-start px-3 pb-3 group-has-[>input]/input-group:pb-2.5',
      },
      size: {
        sm: 'text-xs px-2',
        md: 'text-sm px-3',
        lg: 'text-base px-3',
      },
    },
    defaultVariants: {
      align: 'inline-start',
      size: 'md',
    },
  },
);

function KInputGroupAddon({
  className,
  align = 'inline-start',
  ...props
}: ComponentProps<'div'> & VariantProps<typeof inputGroupAddonVariants>) {
  const { size } = useContext(InputGroupContext);
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
    <div
      role="group"
      data-slot="input-group-addon"
      data-align={align}
      className={cn('k-input-group__addon', inputGroupAddonVariants({ align, size }), className)}
      onClick={(e) => {
        if ((e.target as HTMLElement).closest('button')) return;
        e.currentTarget.parentElement?.querySelector('input')
          ?.focus();
      }}
      {...props}
    />
  );
}

function KInputGroupButton({ className, size, variant = 'ghost', ...props }: ComponentProps<typeof KButton>) {
  const { size: groupSize } = useContext(InputGroupContext);
  const sizeStyles = {
    sm: 'h-[24px] text-xs px-2',
    md: 'h-[26px] text-sm px-2.5',
    lg: 'h-[30px] text-base px-3',
  };

  return (
    <KButton
      variant={variant}
      className={cn(
        'k-input-group__button shadow-none transition-none',
        // 버튼 포커스 시에도 부모 보더가 반응하므로 버튼 자체 링은 제거
        'focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none',
        sizeStyles[groupSize || 'md'],
        className,
      )}
      {...props}
    />
  );
}


function KInputGroupText({ className, ...props }: ComponentProps<'span'>) {
  const { size } = useContext(InputGroupContext);
  const sizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
  };

  return (
    <span
      className={cn(
        'k-input-group__text text-muted-foreground flex items-center gap-2 [&_svg:not([class*=\'size-\'])]:size-4 [&_svg]:pointer-events-none',
        sizeClasses[size || 'md'],
        className,
      )}
      {...props}
    />
  );
}

function KInputGroupInput({ className, ...props }: KInputProps) {
  const { size } = useContext(InputGroupContext);
  return (
    <KInput
      data-slot="input-group-control"
      size={size}
      width="full"
      className={cn(
        'k-input-group__input flex-1 rounded-none border-0 bg-transparent shadow-none dark:bg-transparent',
        'focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:outline-none',
        className,
      )}
      {...props}
    />
  );
}

function KInputGroupTextarea({ className, ...props }: ComponentProps<'textarea'>) {
  return (
    <KTextarea
      data-slot="input-group-control"
      className={cn(
        'k-input-group__textarea flex-1 resize-none rounded-none border-0 bg-transparent py-2.5 shadow-none dark:bg-transparent',
        'focus:outline-none focus-visible:ring-0',
        className,
      )}
      {...props}
    />
  );
}

KInputGroup.displayName = 'KInputGroup';
KInputGroupAddon.displayName = 'KInputGroupAddon';
KInputGroupText.displayName = 'KInputGroupText';
KInputGroupButton.displayName = 'KInputGroupButton';
KInputGroupInput.displayName = 'KInputGroupInput';
KInputGroupTextarea.displayName = 'KInputGroupTextarea';


export {
  KInputGroup,
  KInputGroupAddon,
  KInputGroupText,
  KInputGroupButton,
  KInputGroupInput,
  KInputGroupTextarea,
};