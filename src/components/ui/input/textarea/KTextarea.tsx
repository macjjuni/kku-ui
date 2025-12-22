import { ComponentProps, forwardRef } from "react";
import { cn } from "@/lib/utils"

const KTextarea = forwardRef<HTMLTextAreaElement, ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={cn(
        "k-textarea flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm " +
        "placeholder:text-muted-foreground focus-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className,
      )}
      {...props}
    />
  )
})

KTextarea.displayName = "KTextarea"

export { KTextarea }
