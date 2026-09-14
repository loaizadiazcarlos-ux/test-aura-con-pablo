---
title: Contrast Audit — Rest ia
date: 2026-09-14
updated: 2026-09-14
tags: [dev-log, a11y, contrast, identity]
---

## Root cause of persistent failures

1. **`prefers-color-scheme: dark`** from Aura CLI inverted scales (`gray-12` → near-white, `accent-11/12` → peach). With OS dark mode on, fill buttons became **white on peach** and dark sections became **light-on-light**.
2. **`.button-pill` CSS** forces `color: var(--aura-link)` (`gray-12`). `pill-dark` + `text-gray-1` lost to that rule → **gray-12 on gray-12**.
3. **Badge `status="info"`** with default `variant` risked merging `bg-gray-12` + `text-info-contrast` (fail).
4. **Hero scrim** too transparent on the right; small `accent-8` copy could sit over photo.

## Fixes (pass 2)

| Fix | Detail |
| --- | --- |
| Lock light theme | Removed inverted dark scales; `color-scheme: light` on `:root` / `<html>` |
| Solid CTA | `--solid-brand: #9a3412` (~7.3:1 with white); hover `#7c2d12` |
| `pill-dark` | No longer uses `.button-pill`; explicit light text on dark |
| Badge | Status badges resolve without default solid clash |
| Hero | Opaque left panel + 80% full scrim; eyebrow → `text-gray-8` |
| Select check | `text-accent-12` instead of `accent-9` |

## Target pairs (light theme, locked)

| Pair | Target |
| --- | --- |
| white / solid-brand | ≥ 4.5 (≈ 7.3) |
| gray-1 / gray-12 | ≈ 15.8 |
| gray-8 / gray-12 | ≈ 8.5 |
| gray-11 / gray-1 | ≈ 5.7 |
| accent-12 / gray-1 | ≈ 11+ |
| info-contrast / info | ≈ 7.1 |

## Policy

- Step **9** (`#ea580c`): brand indicator / focus only — **not** button fill text pairing.
- Text on light: `gray-12` / `gray-11` / `accent-12`.
- Text on dark sections: `gray-1` / `gray-8` / `accent-8` (large only).
- Dark mode: deferred until a correct Aura dark generation exists.
