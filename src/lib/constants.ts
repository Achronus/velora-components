import type { ListTableTone, LiveStatus } from "./types";

export const ROW_SIZE = {
	wider: "flex-[3_1_760px]",
	wide: "flex-[1.6_1_600px]",
	half: "flex-[1_1_480px]",
	narrow: "flex-[1_1_360px]",
	full: "basis-full",
};

export const DOT: Record<LiveStatus, string> = {
	running: "bg-live-on motion-safe:animate-live",
	idle: "bg-text-mute",
	offline: "bg-live-off",
};

export const LIST_TABLE_EDGE: Record<ListTableTone, string> = {
	alarm: "border-l-3 border-l-alarm",
	warn: "border-l-3 border-l-warn",
	live: "border-l-3 border-l-live",
	nominal: "border-l-3 border-l-nominal",
};
