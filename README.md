# Velora Components

[Version]: v0.1.2

A React.js component library for Velora's frontend.

It holds the layout kit, charts and colour themes shared by every Velora app, keeping them consistent and easy to update.

## Contents

| Area | What's in it |
|------|--------------|
| Layout kit | `PageLayout`, `PageSidebar`, `PageHeader`, `RowLayout`, `RowSection`, `RowStack`, `StatStrip`, `Callout`, `TileGrid`, `Tile` |
| Charts | `LineGraph`, `CellMap` |
| Styles | `styles.css` (fonts, Tailwind setup, token mapping) and one file per colour theme |
| Helpers | `readToken` for theme colours in JavaScript (canvas, three.js, chart libraries) |

Read more about the items in the [documentation](#).

## Requirements

- React 19
- Tailwind CSS v4, with `@tailwindcss/vite`
- Vite (the library ships TypeScript source, which Vite compiles as part of your app)

## Installing

The library is installed from GitHub, not npm. Pin it to a release tag so every app builds against a known version:

```bash
npm install git+https://github.com/Achronus/velora-components.git#v0.1.2
# or
pnpm add git+https://github.com/Achronus/velora-components.git#v0.1.2
```

This adds the following to your `package.json`:

```json
"dependencies": {
  "@velora/components": "git+https://github.com/Achronus/velora-components.git#v0.1.2"
}
```

## Setup

Replace your app's `src/index.css` with:

```css
@import "@velora/components/styles.css";
@import "@velora/components/themes/blue.css";
```

- **`styles.css`** brings in Tailwind, the fonts, the custom variants and the base layer. It holds no colours.
- **The theme file** sets every colour. Import exactly one.

Add any app-specific styles after these lines.

## Themes

| Theme file | Scheme |
|------------|-----|
| `themes/blue.css` | A dark theme with blue as its secondary |
| `themes/green.css` | A green theme |
| `themes/azure.css` | A light blue theme |

Components never contain colour values. They use token classes (`bg-panel`, `text-mute`, `border-warn/40`), and each theme sets the variables behind them. Threshold colours (`warn`, `alarm`) and run colours are shared by every theme, so they mean the same thing in every app.

To switch themes at runtime, import all the theme files and set `data-theme` on any element:

```tsx
<div data-theme="azure">…</div>
```

### Colours in JavaScript

For code that can't use Tailwind classes:

```ts
import { readToken } from "@velora/components"

const lineColour = readToken("data") // the current theme's chart line colour
```
