import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-medium transition-[background-color,color,box-shadow,transform,opacity] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olive/70 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:not-disabled:scale-[0.96]",
  {
    variants: {
      variant: {
        primary:
          "bg-paper text-ink ring-offset-canvas hover:bg-cream",
        ink: "bg-ink text-paper ring-offset-paper hover:bg-canvas",
        ghost:
          "bg-transparent text-cream ring-offset-canvas hover:bg-panel-2",
        outline:
          "bg-transparent text-cream shadow-[0_0_0_1px_var(--color-line-strong)] ring-offset-canvas hover:bg-panel",
        paperGhost:
          "bg-transparent text-ink shadow-[0_0_0_1px_var(--color-ink-line)] ring-offset-paper hover:bg-paper-deep",
      },
      size: {
        sm: "h-10 rounded-sm px-3.5 text-sm",
        md: "h-11 rounded-md px-4 text-sm",
        lg: "h-12 rounded-md px-5 text-[0.9375rem]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

export function Button({
  className,
  variant,
  size,
  asChild,
  type = "button",
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      {...(!asChild ? { type } : {})}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}
