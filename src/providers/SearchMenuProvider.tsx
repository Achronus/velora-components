import { useCallback, useEffect, useMemo, useState } from "react";
import type { Crumb, Filter } from "../lib/types";

import { createContext } from "react";

export type ScopeCrumb = Crumb & { chip?: string };

export type SearchMenuContextValue = {
	open: boolean; // Whether dialog is open
	query: string; // Text in search box
	initialFilter: Filter; // Tab dialog opens
	scope: ScopeCrumb[]; // Header breadcrumb

	setOpen: (open: boolean) => void;
	setQuery: (query: string) => void;
	setScope: (scope: ScopeCrumb[]) => void;

	openMenu: (initialQuery?: string, initialFilter?: Filter) => void;
	closeMenu: () => void;
};

export const SearchMenuContext = createContext<SearchMenuContextValue | null>(
	null,
);

const SearchMenuProvider = ({ children }: { children: React.ReactNode }) => {
	const [open, setOpenState] = useState(false);
	const [query, setQuery] = useState("");
	const [initialFilter, setInitialFilter] = useState<Filter>("all");
	const [scope, setScope] = useState<ScopeCrumb[]>([]);

	const openMenu = useCallback(
		(initialQuery: string = "", filter: Filter = "all") => {
			setQuery(initialQuery);
			setInitialFilter(filter);
			setOpenState(true);
		},
		[],
	);

	const closeMenu = useCallback(() => {
		setQuery("");
		setOpenState(false);
	}, []);

	const setOpen = useCallback(
		(next: boolean) => (next ? openMenu() : closeMenu()),
		[openMenu, closeMenu],
	);

	useEffect(() => {
		const onKeyDown = (e: KeyboardEvent) => {
			if (e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();

				if (open) closeMenu();
				else openMenu();
			}
		};
		document.addEventListener("keydown", onKeyDown);
		return () => document.removeEventListener("keydown", onKeyDown);
	}, [open, openMenu, closeMenu]);

	const value = useMemo(
		() => ({
			open,
			query,
			setQuery,
			initialFilter,
			openMenu,
			closeMenu,
			setOpen,
			scope,
			setScope,
		}),
		[open, query, initialFilter, openMenu, closeMenu, setOpen, scope],
	);

	return <SearchMenuContext value={value}>{children}</SearchMenuContext>;
};

export default SearchMenuProvider;
