import type { ComponentProps } from "react";
import { LIST_TABLE_EDGE } from "../../lib/constants";
import type { ListTableTone } from "../../lib/types";
import { cn } from "../../lib/utils";

const COLUMN = {
	auto: "auto",
	fill: "minmax(0,1fr)",
	icon: "20px",
};

const ROW_CLASS = cn(
	"min-h-10 px-3.5 py-2.5 text-[13px]",
	"flex flex-wrap items-center gap-x-4 gap-y-1.5",
	"md:col-span-full md:grid md:grid-cols-subgrid md:gap-y-0",
);

export type ListTableColumn = keyof typeof COLUMN | (string & {});

type ListTableProps = ComponentProps<"div"> & {
	columns: number | ListTableColumn[];
	sizes?: Record<number, ListTableColumn>;
};

const toTrack = (c: ListTableColumn) =>
	c in COLUMN ? COLUMN[c as keyof typeof COLUMN] : c;

const resolveColumns = (
	columns: ListTableProps["columns"],
	sizes: ListTableProps["sizes"] = {},
) => {
	if (Array.isArray(columns)) return columns;

	return Array.from(
		{ length: columns },
		(_, i): ListTableColumn => sizes[i] ?? sizes[i - columns] ?? "auto",
	);
};

const ListTable = ({
	columns,
	sizes,
	className,
	style,
	...props
}: ListTableProps) => {
	return (
		<div
			role="table"
			data-slot="list-table"
			className={cn(
				"overflow-hidden rounded-[10px] border border-border",
				"flex flex-col [--lt-gap:0.625rem] md:grid md:gap-x-(--lt-gap)",
				"[&>*+*]:border-t [&>*+*]:border-t-line-soft",
				className,
			)}
			style={{
				gridTemplateColumns: resolveColumns(columns, sizes)
					.map(toTrack)
					.join(" "),
				...style,
			}}
			{...props}
		/>
	);
};

type RowProps = {
	tone?: ListTableTone;
};

const ListTableRow = ({
	className,
	tone,
	...props
}: ComponentProps<"div"> & RowProps) => {
	return (
		<div
			role="row"
			data-slot="list-table-row"
			data-tone={tone}
			className={cn(ROW_CLASS, tone && LIST_TABLE_EDGE[tone], className)}
			{...props}
		/>
	);
};

const ListTableRowAnchor = ({
	className,
	tone,
	...props
}: ComponentProps<"a"> & RowProps) => {
	return (
		<a
			role="row"
			data-slot="list-table-row"
			data-tone={tone}
			className={cn(
				ROW_CLASS,
				tone && LIST_TABLE_EDGE[tone],
				"transition-colors hover:bg-panel",
				className,
			)}
			{...props}
		/>
	);
};

const ListTableHeader = ({ className, ...props }: ComponentProps<"div">) => {
	return (
		<div
			role="row"
			data-slot="list-table-header"
			className={cn(
				"bg-panel px-3.5 py-2 text-[11px] tracking-[0.06em]",
				"text-mute uppercase",
				"hidden md:col-span-full md:grid md:grid-cols-subgrid",
				className,
			)}
			{...props}
		/>
	);
};

type CellProps = {
	align?: "start" | "center" | "end";
};

const ALIGN = {
	start: "",
	center: "flex items-center justify-center self-center justify-self-center",
	end: "md:text-right md:justify-self-end",
};

const ListTableHead = ({
	className,
	align,
	...props
}: ComponentProps<"span"> & CellProps) => {
	return (
		<span
			role="columnheader"
			data-slot="list-table-head"
			className={cn("min-w-0 font-medium", ALIGN[align ?? "start"], className)}
			{...props}
		/>
	);
};

const ListTableCell = ({
	className,
	align,
	...props
}: ComponentProps<"div"> & CellProps) => {
	return (
		<div
			role="cell"
			data-slot="list-table-cell"
			className={cn("min-w-0", ALIGN[align ?? "start"], className)}
			{...props}
		/>
	);
};

export {
	ListTable,
	ListTableCell,
	ListTableHead,
	ListTableHeader,
	ListTableRow,
	ListTableRowAnchor,
};
