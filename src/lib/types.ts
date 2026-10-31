export type ID = string;
export type ISODate = string;
export type Param = number | string | boolean;

export type LiveStatus = "running" | "idle" | "offline";

export type KeyBind = {
	hotkey: string;
	name: string;
	match?: (e: React.KeyboardEvent) => boolean;
	run?: () => void;
	enabled?: boolean;
};

/**
 * Each app registers its own modules:
 *   declare module "@velora/components" {
 *     interface Register { modules: "zone" | "bed" | "sensor" }
 *   }
 */
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface Register {}

/** Reads `Register[K]` if an app has registered it and it matches `Constraint`, otherwise `Fallback`. */
type FromRegister<
	K extends PropertyKey,
	Fallback,
	Constraint = unknown,
> = Register extends { [P in K]: infer T }
	? [T] extends [Constraint]
		? T
		: Fallback
	: Fallback;

export type ModuleDataMap = FromRegister<
	"modules",
	Record<string, unknown>,
	object
>;

export type ModuleFormat = keyof ModuleDataMap & string;
export type Filter = ModuleFormat | "all";

export type Crumb = { module: ModuleFormat; id: ID; name: string };
export type Tone = FromRegister<"tone", string, string>;

export type Pill = { label: string; tone: Tone };
export type SwatchType = {
	className: string;
	shape: "square" | "dot" | "outline";
};

export type HitBase = {
	id: ID;
	name: string;
	path: Crumb[];
};

/** A search hit. `data` is typed by `module`, so checking `hit.module` narrows it. */
export type SearchHit<M extends ModuleFormat = ModuleFormat> = {
	[K in M]: {
		module: K;
		id: ID;
		name: string;
		path: Crumb[];
		data: ModuleDataMap[K];
	};
}[M];

export type FilterOption<T extends string> = {
	value: T;
	label: string;
	count?: number;
	className?: string;
};
