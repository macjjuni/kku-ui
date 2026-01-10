import { ComponentProps, Ref } from 'react';
import { cn } from "@/lib/utils";


export interface KTextareaProps extends Omit<ComponentProps<"textarea">, "ref"> {
  ref?: Ref<HTMLTextAreaElement>;
}

const KTextarea = (props: KTextareaProps) => {

  // region hooks
  const { className, ref, ...restProps } = props;
  // endregion

  return (
    <textarea
      ref={ref}
      className={cn(
        "k-textarea flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm " +
        "placeholder:text-muted-foreground focus-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className,
      )}
      {...restProps}
    />
  );
};

export { KTextarea };