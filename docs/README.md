# Rediseño Novo Labs B2B — Carpeta de entregables

> Producido por Claude · 2026-05-31
> Para: Tomás Volonté
> Objetivo: rediseño de `v0-novo-labs-design-system.vercel.app` de 3/10 → 9+/10

---

## Cómo navegar esta carpeta

Si solo tenés 5 minutos: leé `00-resumen-ejecutivo.md`.

Si tenés 30 minutos: leé en orden los archivos `00` → `08`.

Si querés ver el resultado visual antes de leer nada: abrí `mockup-visual.html` en tu navegador.

---

## Índice

| Archivo | Tiempo lectura | Qué encontrás |
|---|---|---|
| **`00-resumen-ejecutivo.md`** | 4 min | El diagnóstico en una frase + los 7 cambios de mayor impacto |
| **`01-auditoria-sitio-actual.md`** | 12 min | Auditoría sección por sección con puntaje y mejora concreta |
| **`02-arquitectura-informacion.md`** | 5 min | El mapa de qué va en cada página y por qué |
| **`03-manual-de-marca-v2.md`** | 8 min | Paleta, tipografía, tono de voz, componentes |
| **`04-landing-principal.md`** | 12 min | Wireframe + copy completo de la landing principal |
| **`05-pagina-innova.md`** | 10 min | Wireframe + copy completo de la página Innova |
| **`06-pagina-opera.md`** | 10 min | Wireframe + copy completo de la página Opera |
| **`07-sistema-animaciones.md`** | 6 min | Microinteracciones y animaciones premium |
| **`08-plan-implementacion.md`** | 8 min | Prompts listos para V0 y Cursor, fase por fase |
| **`mockup-visual.html`** | — | Preview navegable del hero, banda de credenciales, tracks y pricing |

---

## Los 4 cambios más importantes en una imagen mental

```
ANTES (1 página, todo mezclado)
┌────────────────────────────────────────┐
│ Hero genérico                          │
│ Logos                                  │
│ PAS (situaciones)                      │
│ Lo que obtenés (01/02/03)              │
│ Card Opera + Card Innova (al medio)    │
│ Qué incluye                            │
│ Entregables                            │
│ Tabla comparativa                      │
│ 8 años (manifiesto)                    │
│ Advisors                               │
│ Pricing                                │
│ FAQ                                    │
│ Escasez 2 programas                    │
│ CTA (mailto)                           │
└────────────────────────────────────────┘
3/10 visual · híbrido confuso

DESPUÉS (3 páginas, cada una con su trabajo)
                  ┌──────────────────┐
                  │  Landing         │
                  │  Quién es Novo   │
                  │  + 2 caminos     │
                  │  + garantía      │
                  │  + escasez       │
                  └────────┬─────────┘
              ┌────────────┴────────────┐
              ▼                         ▼
      ┌──────────────┐         ┌──────────────┐
      │  /innova     │         │  /opera      │
      │  Cierra al   │         │  Cierra al   │
      │  CEO/VP que  │         │  CEO/COO que │
      │  quiere      │         │  quiere      │
      │  lanzar      │         │  escalar     │
      └──────────────┘         └──────────────┘
9+/10 visual · cada página un trabajo
```

---

## Cambios al mensaje principal

```
HERO ACTUAL                      HERO NUEVO
─────────────────                ─────────────────────
"Transformá un desafío            "Esto no es consultoría.
 estratégico en un                  Y tampoco una
 resultado concreto                 capacitación."
 en 90 días"
                                  "Trabajamos dentro de tu
                                   empresa durante 12 semanas
                                   con un criterio de éxito
                                   firmado el día uno.
                                   Si al cierre no se cumple,
                                   devolvemos el 50% de la
                                   inversión."
```

El cambio fundamental: la garantía sube al hero. Es el activo más caro de copiar.

---

## Decisiones que el sitio comunica sin decirlas

| Decisión visual | Lo que el CEO percibe |
|---|---|
| Fondo crema `#F5F2EC` en lugar de blanco puro | Editorial, permanente, no efímero |
| Serif PP Editorial New en headlines | Firma con criterio, no startup más |
| Naranja `#FF3A20` solo en 1 frase del hero | Acento ganado por escasez, no por gritos |
| Cifras grandes en serif (72, 18, 360+, 52%) | Autoridad medible, no genérica |
| "Solo tomamos 2 empresas a la vez" en eyebrow | Escasez real, no marketing |
| `mailto` reemplazado por Cal.com embebido | Firma con sistema, no improvisada |
| Cards Innova/Opera con ideal-for específico | Yo me identifico en 1 segundo |
| Garantía repetida 2 veces por página | Estructura de incentivos alineada |

---

## Próximos pasos sugeridos

1. **Leé el `00-resumen-ejecutivo.md`** primero.
2. **Abrí `mockup-visual.html`** en el navegador para ver el direccionamiento.
3. Si te convence, **leé los wireframes** (`04`, `05`, `06`).
4. **Andá al `08-plan-implementacion.md`** y empezá por la Fase 1.

No intentes hacer todo en una sesión. El plan está dividido en fases de 3–4 horas cada una.

---

## Si querés que itere algo

Cualquier sección de cualquier archivo se puede iterar. Decime:

- "El copy del hero no me convence porque…"
- "La paleta debería tener más cromática"
- "Quiero ver un mockup también de la página Innova"
- "El plan de implementación es demasiado largo, comprimilo"

Y vamos sobre eso.

---

*Total de la carpeta: ~13,000 palabras de spec + 1 mockup HTML. Es la base.*
