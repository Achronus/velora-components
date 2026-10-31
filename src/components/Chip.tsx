import type { Chip } from "../lib/types";
import { cn } from "../lib/utils";

type Props = {
	chip: Chip;
	className?: string;
};

const Chip = ({ chip, className }: Props) => {
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

export default Chip;
