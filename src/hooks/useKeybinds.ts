import type { KeyBind } from "../lib/types";

export const keybindHandler =
	(binds: KeyBind[]) => (e: React.KeyboardEvent) => {
		const b = binds.find((b) => b.enabled !== false && b.match?.(e));
		if (!b) return;
		e.preventDefault();
		b.run?.();
	};
