import type { TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Textarea({
  className,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "min-h-32 w-full rounded-lg bg-paper px-3.5 py-3 text-sm text-ink shadow-[0_0_0_1px_var(--color-ink-line)] placeholder:text-ink/40",
        "transition-[box-shadow] duration-150 ease-out",
        "focus-visible:outline-none focus-visible:shadow-[0_0_0_2px_var(--color-olive)]",
        className,
      )}
      {...props}
    />
  );
}
