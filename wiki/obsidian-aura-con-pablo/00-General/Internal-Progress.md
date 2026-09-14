---
title: Internal Progress
date: 2026-09-14
tags: [dev-log, progress]
---

## Summary

Landing Rest ia con assets generados e integrados. Contraste AA de pares críticos en light theme auditado y corregido ([[Contrast-Audit]]).

## Status

- Generated 8 PNGs under `public/generated/landing/`
- Wired hero, menu category cards, and combos visuals in `app/page.tsx` / `lib/brand.ts`
- Documented in [[Generated-Assets]]
- Contrast AA fixes: `app/page.tsx`, `SiteHeader`, button fill tokens in `globals.css` → [[Contrast-Audit]]

## Next

- Human review of crops and accidental baked text
- Optional regenerate of any weak category shot
- Dark-mode token scale still needs a dedicated pass if true dark UI ships
