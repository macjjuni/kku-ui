import { ComponentRef, ComponentPropsWithoutRef, forwardRef } from 'react';
import * as SwitchPrimitives from '@radix-ui/react-switch';
import { cn } from '@/lib/utils';

export interface KSwitchProps extends ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> {}

const KSwitch = forwardRef<ComponentRef<typeof SwitchPrimitives.Root>, KSwitchProps>(
  ({ className, ...props }, ref) => (
    <SwitchPrimitives.Root
      ref={ref}
      className={cn(
        'k-switch peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors',
        'disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input',
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring data-[state=checked]:focus-visible:ring-primary " +
        "focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className,
      )}
      {...props}
    >
      <SwitchPrimitives.Thumb
        className={cn(
          'pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform',
          'data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0',
        )}
      />
    </SwitchPrimitives.Root>
  ),
);

KSwitch.displayName = "KSwitch";

export { KSwitch };