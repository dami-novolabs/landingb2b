# Sistema de animaciones e interacciones

> Cómo el movimiento debe sentirse en el sitio. La regla de fondo: **una firma premium se siente como una buena pieza de software: precisa, ágil, nunca llamativa.**

---

## Principio rector

**Si la animación llama la atención hacia sí misma, está mal.**

Las animaciones premium hacen tres cosas:

1. **Confirman acciones** del usuario (hover, click, focus) — feedback inmediato
2. **Guían la lectura** sin interrumpirla (fade-in suave al hacer scroll)
3. **Refuerzan la jerarquía** de la página (microparallax suave entre capas)

Las animaciones de agencia hacen lo contrario:

- ❌ Headlines que aparecen letra por letra
- ❌ Imágenes que entran rotando
- ❌ Marquesinas infinitas con logos
- ❌ Cursores custom con estela
- ❌ Mouse-following gradients en hero
- ❌ Transiciones de página con barras horizontales

Si tenés que decidir entre animar y no animar: **no animes**.

---

## Sistema técnico

### Librería recomendada

**Framer Motion** para Next.js / V0. Es el estándar premium en 2026.

Alternativa más liviana: **Motion One** (3KB) si querés performance máxima.

### Tokens de easing y duración

```ts
const easing = {
  standard: [0.4, 0.0, 0.2, 1],   // Ease in-out, para casi todo
  enter:    [0.0, 0.0, 0.2, 1],   // Ease out, cuando algo aparece
  exit:     [0.4, 0.0, 1.0, 1],   // Ease in, cuando algo desaparece
  emphasized: [0.2, 0.0, 0.0, 1], // Más expressivo, solo para hover de CTA
}

const duration = {
  instant: 100,     // Estados (focus ring)
  quick:   200,     // Hover de links y botones
  base:    300,     // Apariciones, transiciones default
  slow:    500,     // Entrada de secciones grandes
  hero:    800,     // Reveal del hero al cargar la página
}
```

### Reduced motion

**Obligatorio respetar `prefers-reduced-motion`**. En premium, accessibility es parte del posicionamiento, no un nice-to-have.

```ts
const reduceMotion = useReducedMotion()
const variants = reduceMotion ? {} : { /* las animaciones normales */ }
```

---

## Animaciones por componente

### 1. Carga inicial de página (hero reveal)

Cuando el sitio carga, el hero entra con esta secuencia:

```
t=0ms     Eyebrow aparece (opacity 0 → 1, y 8 → 0, dur 400ms)
t=120ms   H1 línea 1 aparece (opacity 0 → 1, y 16 → 0, dur 600ms)
t=240ms   H1 línea 2 aparece (opacity 0 → 1, y 16 → 0, dur 600ms)
t=400ms   Lead aparece (opacity 0 → 1, y 12 → 0, dur 500ms)
t=600ms   CTAs aparecen (opacity 0 → 1, y 8 → 0, dur 400ms)
```

Stagger total: 1000ms. El usuario ya pudo leer el eyebrow cuando aparece el último CTA.

**Importante:** sin scale, sin blur. Solo opacity + y. Premium = mínimo.

### 2. Scroll reveal de secciones

A medida que el usuario hace scroll, cada sección aparece con un fade-in sutil cuando entra al viewport:

```ts
const sectionVariants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'enter' } },
}

<motion.section
  variants={sectionVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: '-100px' }}
>
```

`viewport.once: true` → no se repite si el usuario hace scroll arriba.
`viewport.margin: '-100px'` → la animación se dispara cuando la sección está 100px dentro del viewport.

### 3. Stagger de cards y listas

Cuando una sección tiene múltiples elementos (cards Innova/Opera, lista de 4 errores, fases del método), cada uno aparece con 80ms de delay después del anterior:

```ts
const containerVariants = {
  visible: { transition: { staggerChildren: 0.08 } },
}

const itemVariants = {
  hidden:  { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}
```

### 4. Hover de botón primario

```css
.cta-primary {
  background: var(--novo-black);
  color: var(--novo-cream);
  padding: 14px 28px;
  border-radius: 4px;
  transition: all 200ms cubic-bezier(0.4, 0.0, 0.2, 1);
}

.cta-primary:hover {
  background: var(--novo-charcoal);
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

.cta-primary:active {
  transform: translateY(0);
  transition-duration: 80ms;
}
```

El `translateY(-1px)` es **el detalle premium**. El botón sube 1 píxel — apenas perceptible pero el usuario lo siente. Eso es craft.

### 5. Hover de link secundario / link de navegación

```css
.nav-link {
  color: var(--novo-charcoal);
  position: relative;
  transition: color 200ms ease;
}

.nav-link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -4px;
  width: 0;
  height: 1px;
  background: var(--novo-accent);
  transition: width 200ms ease;
}

.nav-link:hover {
  color: var(--novo-accent);
}

.nav-link:hover::after {
  width: 100%;
}
```

El underline anaranjado animado es el único momento donde el acento naranja aparece en interacción permanente. Es lo que hace que el sitio se sienta vivo.

### 6. Hover de cards (Innova / Opera)

```ts
const cardVariants = {
  rest:  { borderColor: 'var(--novo-line)' },
  hover: {
    borderColor: 'var(--novo-charcoal)',
    transition: { duration: 0.3, ease: 'standard' },
  },
}

<motion.div
  variants={cardVariants}
  initial="rest"
  whileHover="hover"
>
```

Pero también animamos el CTA interno de la card (flecha):

```css
.card .cta-inline {
  transition: transform 300ms ease;
}

.card:hover .cta-inline {
  transform: translateX(4px);
}
```

La flecha se desplaza 4px a la derecha cuando hover, indicando "click to go". Es el detalle de Stripe, Linear, Vercel.

### 7. Header sticky con compresión

Cuando el usuario hace scroll más de 100px:

```ts
const { scrollY } = useScroll()
const headerHeight = useTransform(scrollY, [0, 100], [72, 60])
const headerBlur = useTransform(scrollY, [0, 100], [0, 8])
const headerBg = useTransform(scrollY, [0, 100], [
  'rgba(245, 242, 236, 0)',
  'rgba(245, 242, 236, 0.85)',
])

<motion.header style={{ height: headerHeight, backdropFilter: `blur(${headerBlur}px)`, backgroundColor: headerBg }}>
```

La transición es continua, no escalonada. El header se hace más chico, más opaco y con más blur, todo al mismo tiempo.

### 8. Indicador "1 slot disponible" (pulse)

```css
@keyframes slot-pulse {
  0%, 100% { opacity: 0.4; }
  50%      { opacity: 1; }
}

.slot-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--novo-accent);
  animation: slot-pulse 2s ease-in-out infinite;
}
```

Loop de 2 segundos. Demasiado rápido = nervioso. Demasiado lento = se ignora. 2s es el sweet spot.

### 9. Scroll suave (smooth scroll)

```ts
import Lenis from 'lenis'

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
})
```

Lenis es la librería de scroll suave del momento. Hace que el scroll se sienta como un Apple Pro Display, no como un PC con mouse de oficina.

### 10. Click en CTA "Ver cómo trabajamos" del hero

Cuando el usuario hace click en el CTA secundario del hero (que es un scroll-to anchor):

```ts
function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
```

Con Lenis activado, el scroll se siente suavísimo. Esa es la diferencia entre "anchor abrupto" y "guidance premium".

### 11. Transiciones entre páginas (landing → /innova → /opera)

Con Next.js App Router + Framer Motion:

```ts
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.4 }}
>
  {children}
</motion.div>
```

Fade simple. **Nada de slide horizontal, nada de wipe effect.** Premium es fade-only entre rutas.

### 12. Focus rings (accesibilidad)

```css
*:focus-visible {
  outline: 2px solid var(--novo-accent);
  outline-offset: 2px;
  transition: outline-offset 150ms ease;
}
```

El focus ring es naranja, sutil, con offset. Accesible y consistente con la marca.

---

## Microinteracciones específicas que vale la pena construir

Estos son los detalles que hacen que el sitio se sienta "$40K obvio":

### Micro 1 — Hover sobre el número de las cifras (sección credenciales)

Cuando el usuario pasa el cursor sobre "72" (productos digitales construidos), aparece un tooltip sutil con contexto:

```
"De 2017 a 2023, antes de Novo Labs Startup School,
 construimos 72 productos digitales como agencia."
```

Tooltip premium: fondo `var(--novo-near-black)`, texto `var(--novo-cream)`, font 13px, padding 8px 12px, border-radius 4px, fade 200ms.

### Micro 2 — Click en el slot indicator

Cuando el usuario hace click en el indicador "1 slot disponible para Q3 2026":

```
Modal small se abre con:
"Próximas ventanas de inicio
 ● Q3 2026 · 1 slot disponible · Inicio septiembre
 ○ Q4 2026 · 2 slots · Inicio diciembre
 ○ Q1 2027 · 2 slots · Inicio marzo

 [Agendar diagnóstico]"
```

Esto convierte una escasez genérica en una elección informada.

### Micro 3 — Hover sobre los logos del ecosistema

Cuando el usuario pasa el cursor sobre un logo (Aerolab, Baikal, etc.):

```
- Logo pasa de gris 60% opacity → 100% opacity
- Aparece debajo en pequeño: "Cliente de…" o "Alumni de…" o "Advisor"
- Para los logos con caso publicado: aparece "Ver caso →"
```

### Micro 4 — Quote rotativo (opcional)

Si querés mantener algo dinámico pero no agresivo: en la sección de ecosistema, un quote pequeño de un cliente que rota cada 8 segundos con cross-fade. Solo si tenés 3+ quotes reales.

```
"Cita 1 de un cliente."
— Nombre, cargo, empresa

(8 segundos)

"Cita 2 de otro cliente."
— Nombre, cargo, empresa
```

Fade 600ms entre quotes. Sin slide ni efectos.

---

## Qué no hacer (lista negra)

❌ **Splash screen al cargar** — añade fricción innecesaria
❌ **Loading bars o spinners agresivos** — usar skeleton screens si es necesario
❌ **Cursor personalizado** — es 2018, ya no funciona
❌ **Mouse-following gradients en hero** — desactualizado
❌ **Cards que se inclinan en hover (tilt)** — agencia, no firma
❌ **Carruseles autoplay** — siempre opcionales y nunca auto-rotan en producto serio
❌ **Modales tipo lightbox con galería** — no aplica a este sitio
❌ **Parallax agresivo en imágenes** — sí parallax sutil (max 30% velocidad diferencial), nunca dramatic
❌ **Scroll snapping** — frustra al usuario que solo quiere navegar
❌ **"Click anywhere to continue"** — no es el formato

---

## Performance budget

Las animaciones no pueden bajar la página de:

- **LCP**: < 2.5s
- **CLS**: < 0.1
- **FID**: < 100ms
- **Bundle JS**: < 200KB (gzipped) en first load

Esto significa: Framer Motion solo en componentes que lo necesitan, no global. Lenis solo si la base CSS scroll no es suficiente. Imágenes optimizadas con next/image y formato AVIF/WebP.

---

## Checklist de validación

Antes de publicar, cada animación se valida contra:

- [ ] Funciona con `prefers-reduced-motion: reduce`
- [ ] No causa layout shift (CLS)
- [ ] Se siente "rápida" en mobile 3G (test con Chrome throttling)
- [ ] No interrumpe la lectura (no se dispara más de una vez por elemento)
- [ ] Tiene un easing que parece natural (no linear, no overshoot)
- [ ] Respeta el sistema de duraciones (no 350ms cuando el sistema dice 300ms)

---

## El test final

Después de implementar todo, **abrir el sitio en una pestaña al lado de [linear.app](https://linear.app), [stripe.com/press](https://stripe.com/press), y [equalparts.co](https://equalparts.co)**.

Si el movimiento del sitio se siente parecido a ellos: bien.
Si se siente más "agencia" o "infoproducto": revisar.

---

*Continuar leyendo: `08-plan-implementacion.md`*
