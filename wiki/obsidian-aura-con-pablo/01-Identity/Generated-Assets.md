---
title: Generated Assets
date: 2026-09-14
tags: [dev-log, identity, assets]
---

## Summary

Batch de imágenes Gemini para la landing Rest ia, generadas desde `tmp/aura-image-plan.json` con identidad [[Image-Identity]]. Integradas vía `lib/brand.ts` y `app/page.tsx` (next/image, rutas locales `/generated/...`).

## Outputs

| Archivo | Uso en UI |
| --- | --- |
| `public/generated/landing/hero.png` | Hero full-bleed (`LANDING_IMAGES.hero`) |
| `public/generated/landing/menu-burgers.png` | Card categoría burgers |
| `public/generated/landing/menu-tacos.png` | Card categoría tacos |
| `public/generated/landing/menu-pollo.png` | Card categoría pollo |
| `public/generated/landing/menu-pizza.png` | Card categoría pizza |
| `public/generated/landing/menu-bowls.png` | Card categoría bowls |
| `public/generated/landing/menu-sides.png` | Card categoría sides |
| `public/generated/landing/combo-spread.png` | Header Combos + card Dúo LatAm |

## Context

- Related: [[Image-Identity]]
- Plan: `tmp/aura-image-plan.json`
- Implementation: `lib/brand.ts`, `app/page.tsx`
- Script: `.cursor/skills/generate-brand-images/generate-images.mjs` (usa `imageConfig.aspectRatio` + `v1beta`)
- Env: `GOOGLE_API_KEY` (nunca en notas)
- Review: regenerar si aparece texto legible, drift de identidad o crops inseguros
