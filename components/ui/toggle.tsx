"use client";

import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const toggleVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-3xl md:text-2xl text-lg lg:p-5 p-3 md:gap-8 gap-4  font-medium ring-offset-background shadow-[0px_16px_40px_0px_rgba(143_160_193_0.14)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        option:
          "data-[state=on]:border-2 data-[state=on]:m-[-2px] bg-white shadow-2xl shadow-foreground/10 hover:bg-white/75 dark:bg-[#3B4D66] justify-start",
      },
      effect: {
        default: "border-primary",
        correct: "border-[#26D782]",
        wrong: "border-[#EE5454]",
      },
    },
    defaultVariants: {
      variant: "default",
      effect: "default",
    },
  }
);

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, effect, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ variant, effect, className }))}
    {...props}
  />
));

Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle, toggleVariants };
