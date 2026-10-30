import { type ComponentProps } from "react"
import { cn } from "../../lib/utils"

const RowLayout = ({ className, ...props }: ComponentProps<"div">) => {
  return (
    <div
      data-slot="row-layout"
      className={cn("flex flex-wrap items-start gap-4", className)}
      {...props}
    />
  )
}

export { RowLayout }
