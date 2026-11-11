import { type ComponentProps } from "react";
import { cn } from "../../lib/utils";

const RowContainer = ({ className, ...props }: ComponentProps<"div">) => {
	return (
		<div
			data-slot="row-container"
			className={cn("flex flex-wrap items-start gap-4", className)}
			{...props}
		/>
	);
};

export { RowContainer };
