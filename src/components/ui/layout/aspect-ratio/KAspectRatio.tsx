import { forwardRef, ComponentRef, HTMLAttributes, memo, useMemo } from 'react';
import { cn } from "@/lib/utils";

export interface KAspectRatioProps extends HTMLAttributes<HTMLDivElement> {
  // eslint-disable-next-line react/no-unused-prop-types
  ratio?: number;
}

const KAspectRatio = memo(
  forwardRef<ComponentRef<'div'>, KAspectRatioProps>(
    (props, ref) => {
      const { ratio = 1, className, children, style, ...rest } = props;

      const isValidRatio = ratio > 0;

      if (!isValidRatio) {
        console.warn(`[KAspectRatio]: ratio는 0보다 커야 합니다. 현재 입력값: ${ratio}`);
      }

      const safeRatio = useMemo(() => (isValidRatio ? ratio : 1), [isValidRatio, ratio]);

      return (
        <div ref={ref} className={cn("relative w-full overflow-hidden", className)}
             style={{ ...style, aspectRatio: `${safeRatio}` }} {...rest}>
          <div className="absolute inset-0 [&>img]:h-full [&>img]:w-full [&>img]:object-cover [&>video]:h-full [&>video]:w-full [&>video]:object-cover">
            {children}
          </div>
        </div>
      );
    },
  ),
);

KAspectRatio.displayName = "KAspectRatio";

export { KAspectRatio };