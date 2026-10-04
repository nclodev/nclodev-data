import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "h-11 w-full rounded-md bg-paper px-3.5 text-sm text-ink shadow-[0_0_0_1px_var(--color-ink-line)] placeholder:text-ink/40",
        "transition-[box-shadow] duration-150 ease-out",
        "focus-visible:outline-none focus-visible:shadow-[0_0_0_2px_var(--color-olive)]",
        className,
      )}
      {...props}
    />
  );
}
