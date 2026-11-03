import { cva, type VariantProps } from "class-variance-authority";
import { type ComponentProps } from "react";
import { cn } from "../../lib/utils";

const tileVariants = cva("min-w-0 rounded-[10px] border border-border", {
	variants: {
		variant: {
			panel: "flex flex-col gap-2.5 bg-panel px-4 py-3.5",
			ghost: "flex flex-col gap-1.5 px-4 py-3.5",
		},
		interactive: {
			true: "transition-colors hover:border-line-strong",
			false: "",
		},
	},
	defaultVariants: { variant: "panel", interactive: false },
});

const tileGridVariants = cva("min-w-0", {
	variants: {
		layout: {
			grid: "grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-3",
			stack: "flex flex-col gap-2.5",
		},
	},
	defaultVariants: { layout: "grid" },
});

const Tile = ({
	className,
	variant,
	interactive,
	...props
}: ComponentProps<"div"> & VariantProps<typeof tileVariants>) => {
	return (
		<div
			data-slot="tile"
			data-variant={variant}
			className={cn(tileVariants({ variant, interactive }), className)}
			{...props}
		/>
	);
};

const TileAnchor = ({
	className,
	variant,
	...props
}: ComponentProps<"a"> & VariantProps<typeof tileVariants>) => {
	return (
		<a
			data-slot="tile"
			data-variant={variant}
			className={cn(tileVariants({ variant, interactive: true }), className)}
			{...props}
		/>
	);
};

const TileGrid = ({
	className,
	layout,
	...props
}: ComponentProps<"div"> & VariantProps<typeof tileGridVariants>) => {
	return (
		<div
			data-slot="tile-grid"
			data-layout={layout ?? "grid"}
			className={cn(tileGridVariants({ layout }), className)}
			{...props}
		/>
	);
};

export { Tile, TileAnchor, TileGrid, tileGridVariants, tileVariants };
