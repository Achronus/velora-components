import { DOT } from "../lib/constants";
import type { LiveStatus } from "../lib/types";
import { cn } from "../lib/utils";

export const LiveDot = ({ status }: { status: LiveStatus }) => (
	<span
		aria-hidden="true"
		className={cn("size-1.5 shrink-0 rounded-full", DOT[status])}
	/>
);
