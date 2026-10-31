import type { SwatchType } from "../lib/types";
import { cn } from "../lib/utils";

type Props = {
	chip: SwatchType;
	className?: string;
};

export const Swatch = ({ chip, className }: Props) => {
	return (
		<span
			aria-hidden
			className={cn(
				"size-2.25 shrink-0",
				chip.shape === "dot" ? "rounded-full" : "rounded-xs",
				chip.shape === "outline" && "border-[1.5px]",
				chip.className,
				className,
			)}
		/>
	);
};
