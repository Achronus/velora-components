import type { ListTableTone, LiveStatus, Tone } from "./types";

export const ROW_SIZE = {
	auto: "flex-[0_1_auto] max-w-full",
	fill: "flex-[999_1_320px] min-w-0",
	full: "basis-full",
	wider: "flex-[3_1_760px]",
	wide: "flex-[1.6_1_600px]",
	half: "flex-[1_1_480px]",
	narrow: "flex-[1_1_360px]",
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

export const TONE_TEXT: Record<Tone, string> = {
	live: "text-live-fg",
	nominal: "text-nominal-fg",
	warn: "text-warn-fg",
	alarm: "text-alarm-fg",
	model: "text-model",
	neutral: "text-muted-foreground",
};

export const TONE_DOT: Record<Tone, string> = {
	live: "bg-live motion-safe:animate-live",
	nominal: "bg-nominal",
	warn: "bg-warn",
	alarm: "bg-alarm",
	model: "bg-model",
	neutral: "bg-line-strong",
};

export const TONE_PILL: Record<Tone, string> = {
	live: "bg-live/12 text-live-fg",
	nominal: "bg-nominal/15 text-nominal-fg",
	warn: "bg-warn/15 text-warn-fg",
	alarm: "bg-alarm/15 text-alarm-fg",
	model: "bg-model/15 text-model",
	neutral: "bg-raised text-dim",
};
