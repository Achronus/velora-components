/**
 * Theme helpers for code that can't use Tailwind classes — canvas, WebGL /
 * three.js scenes, chart libraries that want colour strings.
 */

/** Theme files in ./themes, named by colour. */
export const VELORA_THEMES = ["blue", "green", "azure"] as const
export type VeloraTheme = (typeof VELORA_THEMES)[number]

/** Token names a theme defines (without the `--v-` prefix). */
export type VeloraToken =
  | "main" | "panel" | "raised" | "viewport"
  | "line" | "line-soft" | "line-strong"
  | "text" | "dim" | "mute"
  | "nominal" | "nominal-fg" | "nominal-fill"
  | "live" | "live-fg" | "data"
  | "warn" | "warn-fg" | "warn-fill"
  | "alarm" | "alarm-fg" | "alarm-fill"
  | "model"
  | `run-${1 | 2 | 3 | 4 | 5 | 6}`

/**
 * Resolve a token to its current colour string, e.g. `readToken("data")`.
 * Pass the element the theme applies to when themes are scoped with
 * `data-theme` (defaults to <html>).
 */
export function readToken(
  token: VeloraToken,
  el: Element = document.documentElement
): string {
  return getComputedStyle(el).getPropertyValue(`--v-${token}`).trim()
}
