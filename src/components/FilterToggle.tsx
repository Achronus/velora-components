import type { Filter, FilterOption } from "../lib/types";
import { cn } from "../lib/utils";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";

type FilterToggleGroupProps<T extends string> = {
	value: T;
	onValueChange: (value: T) => void;
	options: readonly FilterOption<T>[];
	ariaLabel: string;
	onKeyDown?: (e: React.KeyboardEvent) => void;
	className?: string;
};

const FilterToggle = ({
	value,
	label,
	count,
	className,
}: FilterOption<Filter>) => {
	return (
		<ToggleGroupItem
			value={value}
			className={cn(
				"h-7 min-w-0 flex-none cursor-pointer gap-1.5 rounded-md px-2.5 text-[13px] font-normal text-muted-foreground first:rounded-md last:rounded-md hover:bg-transparent hover:text-text data-[state=on]:bg-accent data-[state=on]:text-text",
				className,
			)}
		>
			{label}
			{count !== undefined && (
				<span className="font-mono text-[11px] text-mute">{count}</span>
			)}
		</ToggleGroupItem>
	);
};

const FilterToggleGroup = ({
	value,
	onValueChange,
	options,
	ariaLabel,
	onKeyDown,
	className,
}: FilterToggleGroupProps<Filter>) => {
	return (
		<ToggleGroup
			value={[value]}
			onValueChange={(pressed) => {
				const next = options.find((o) => o.value === pressed[0]);
				if (next) onValueChange(next.value);
			}}
			onKeyDown={onKeyDown}
			orientation="horizontal"
			aria-label={ariaLabel}
			className={cn(
				"w-full flex-wrap justify-start gap-1 border-b px-3 py-2",
				className,
			)}
		>
			{options.map((o) => (
				<FilterToggle key={o.value} {...o} />
			))}
		</ToggleGroup>
	);
};

export { FilterToggle, FilterToggleGroup };
