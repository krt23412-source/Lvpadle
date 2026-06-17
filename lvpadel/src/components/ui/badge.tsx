import * as React from "react"
import { cn } from "@/src/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "destructive" | "outline" | "success"
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2",
        {
          "bg-lime-500 text-slate-900 border-transparent": variant === "default",
          "bg-gray-100 text-gray-900 border-transparent": variant === "secondary",
          "bg-red-500 text-gray-50 border-transparent": variant === "destructive",
          "bg-green-500 text-white border-transparent": variant === "success",
          "text-gray-950 border-gray-200": variant === "outline",
        },
        className
      )}
      {...props}
    />
  )
}

export { Badge }
