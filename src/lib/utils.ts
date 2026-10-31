import type { Crumb, ISODate, ModuleFormat, SearchHit } from "./types";

export { cn } from "cn";

export const toCrumb = <M extends ModuleFormat>(h: SearchHit<M>): Crumb => ({
	module: h.module,
	id: h.id,
	name: h.name,
});

export const runColourClass = (id: string, colours: string[]) => {
	let h = 0;
	for (const ch of id) h = (h * 31 + ch.charCodeAt(0)) | 0;
	return colours[Math.abs(h) % colours.length];
};

export const Capitalize = (str: string) => {
	return str.charAt(0).toUpperCase() + str.slice(1);
};

export const formatMillion = (value: number) => {
	return `${(value / 1e6).toFixed(0)}M`;
};

export const formatTimeAgo = (iso: ISODate): string => {
	const s = (Date.now() - new Date(iso).getTime()) / 1000;
	if (s < 60) return "just now";
	if (s < 3600) return `${Math.round(s / 60)} min ago`;
	if (s < 86400) return `${Math.round(s / 3600)} h ago`;
	return `${Math.round(s / 86400)} d ago`;
};

export const formatPercent = (x?: number) =>
	x == null ? "-" : `${(x * 100).toFixed(1)}%`;

export const buildEntityPath = (
	path: Crumb[],
	pathSegments: Partial<Record<ModuleFormat, string>>,
	leaf?: Crumb,
	suffix = "",
) =>
	[...path, ...(leaf ? [leaf] : [])]
		.filter((c) => pathSegments[c.module])
		.map((c) => `/${pathSegments[c.module]}/${encodeURIComponent(c.id)}`)
		.join("") + suffix;
