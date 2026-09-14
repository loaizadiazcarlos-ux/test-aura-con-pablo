---
status: ready
brand: Rest ia
---

# Brand identity — Rest ia

## Essence

**Rest ia** es la app de comida rápida multiopción para Latinoamérica: casual, versátil y fácil de pedir desde cualquier país. Un solo destino para burgers, tacos, pollo, pizza, bowls y más — sin formalismos, con energía cotidiana.

**Tagline:** *Lo que se te antoje, donde estés.*

**Personality (3 palabras):** cercana · adaptable · apetitosa

## Positioning

| Dimensión | Definición |
| --- | --- |
| Categoría | Pedidos de comida rápida multiopción |
| Alcance | Latinoamérica (selector de país en la experiencia) |
| Audiencia | Personas 18–45 que quieren pedir rápido, explorar opciones y no decidir en un solo tipo de cocina |
| Promesa | Variedad sin fricción: elige país, explora el menú, arma tu pedido |
| Tono | Casual y versátil — habla como un amigo que recomienda, no como un brochure |

## Voice & tone

- **Sí:** directo, cálido, con humor ligero; “tú”; verbos de acción (pide, elige, arma).
- **No:** jerga corporativa, exclusividad gourmet pretenciosa, urgencia agresiva tipo “¡compra ya o pierdes!”.
- **Microcopy:** cortos, claros, en español neutro latino (evitar regionalismos fuertes salvo en contenido local por país).

### Ejemplos

| Contexto | Copy |
| --- | --- |
| Hero | Rest ia — lo que se te antoje, en tu país |
| CTA primario | Pedir ahora |
| CTA secundario | Ver menú |
| País | Elige tu país |
| Vacío carrito | Tu pedido está vacío. ¿Qué se te antoja hoy? |
| Error | Algo falló. Intenta de nuevo en un momento. |

## Visual system (Aura)

| Rol | Hex seed | Uso |
| --- | --- | --- |
| Accent (primary) | `#EA580C` | CTAs, acentos de marca, highlights de comida |
| Gray base | `#64748B` | Neutrales slate (UI limpia, no “crema editorial”) |
| Background | `#FFFFFF` | Lienzo blanco fresco |

Mapeo Aura:

- `--accent-9` / `--primary` → naranja energético (antojo)
- `gray-1`–`2` → fondos y secciones
- `gray-11`–`12` → texto muted / principal
- Evitar púrpura SaaS y el combo crema + terracota genérico; marca = naranja + slate + blanco.

## Logo wordmark

- Nombre: **Rest ia** (dos palabras; “ia” en minúsculas o peso ligero vs “Rest”).
- No forzar isotipo de comida genérico (hamburguesa clipart). Preferir wordmark tipográfico + acento de color.
- En UI: wordmark en `gray-12`; punto o marca de acento con `accent-9`.

## Product sections (site map)

1. **Nav** — logo, selector de país, menú, pedir
2. **Hero** — marca + promesa + CTAs
3. **Países** — selector / cobertura LatAm
4. **Menú / categorías** — múltiples opciones de comida
5. **Combos** — ofertas destacadas
6. **Cómo pedir** — pasos simples
7. **Pedidos / CTA** — conversión
8. **Ubicación / cobertura** — LatAm
9. **Contacto** — soporte
10. **Footer** — legal + países

## Motion

- Entradas suaves (opacity + translateY), 200–300ms.
- Hover en cards de comida: lift ligero, sin glow púrpura.
- Respetar `prefers-reduced-motion`.
