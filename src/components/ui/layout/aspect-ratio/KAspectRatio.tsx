import { HTMLAttributes, memo, Ref, useMemo } from 'react';
import { cn } from '@/lib/utils';

export type KAspectRatioProps = HTMLAttributes<HTMLDivElement> & {
  ratio?: number;
  ref?: Ref<HTMLDivElement>;
};


const KAspectRatio = memo((props: KAspectRatioProps) => {
  // region [Hooks]
  const { ratio = 1, className, children, style, ref, ...restProps } = props;
  const isValidRatio = ratio > 0;

  const safeRatio = useMemo(() => {
    if (!isValidRatio) {
      console.warn(`[KAspectRatio]: ratio는 0보다 커야 합니다. 현재 입력값: ${ratio}`);
      return 1;
    }
    return ratio;
  }, [isValidRatio, ratio]);
  // endregion

  return (
    <div
      ref={ref}
      className={cn('relative w-full overflow-hidden', className)}
      style={{ ...style, aspectRatio: `${safeRatio}` }}
      {...restProps}
    >
      <div
        className="absolute inset-0 [&>img]:h-full [&>img]:w-full [&>img]:object-cover [&>video]:h-full [&>video]:w-full [&>video]:object-cover">
        {children}
      </div>
    </div>
  );
});

KAspectRatio.displayName = "KAspectRatio";

export { KAspectRatio };