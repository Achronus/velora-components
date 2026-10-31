import type { ComponentProps } from "react";
import type { LiveStatus } from "../lib/types";
import { cn } from "../lib/utils";
import LiveDot from "./LiveDot";
import { buttonVariants } from "./ui/button";

const STATUS_STYLE: Record<LiveStatus, string> = {
	running: "border-live/35 text-live-fg hover:text-live-fg",
	idle: "text-mute hover:text-text border-border",
	offline: "border-alarm/40 text-alarm-fg hover:text-alarm-fg",
};

type Props = ComponentProps<"a"> & {
	count: number;
	status: LiveStatus;
	isPending?: boolean;
	noun?: [singular: string, plural: string];
};

export const LiveStatusAnchor = ({
	count,
	status,
	isPending = false,
	noun = ["run", "runs"],
	className,
	...props
}: Props) => {
	const label =
		status === "offline"
			? "offline"
			: isPending
				? "- running"
				: `${count} running`;

	const description =
		status === "offline"
			? "Can't reach the server, so the running count is unavailable"
			: isPending
				? `Checking for running ${noun[1]}`
				: `${count} ${count === 1 ? noun[0] : noun[1]} in progress`;

	return (
		<a
			href="/"
			aria-label={description}
			title={status === "offline" ? description : undefined}
			className={cn(
				buttonVariants({ variant: "outline", size: "sm" }),
				"h-7.5 gap-1.75 rounded-md px-2.5 font-mono text-xs font-normal shadow-none",
				STATUS_STYLE[status],
				className,
			)}
			{...props}
		>
			<LiveDot status={status} />
			{label}
		</a>
	);
};
