
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils.ts"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-emerald-600 text-white hover:bg-emerald-500 shadow-lg shadow-emerald-600/20",
        destructive: "bg-red-500 text-neutral-50 hover:bg-red-500/90",
        outline: "border border-white/10 bg-transparent hover:bg-white/5 text-white",
        secondary: "bg-neutral-800 text-white hover:bg-neutral-700",
        ghost: "hover:bg-white/5 text-white",
        link: "text-emerald-500 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-6 py-2 rounded-xl",
        sm: "h-9 rounded-md px-3",
        lg: "h-14 rounded-2xl px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

// Using type instead of interface to fix VariantProps property visibility issues in the consumer and component body
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }
