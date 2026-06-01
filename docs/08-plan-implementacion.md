# Plan de implementación

> Cómo pasar de este conjunto de documentos a un sitio funcionando en V0/Cursor en el menor tiempo posible, con la menor cantidad de iteraciones y la mayor probabilidad de quedar en 9/10.

---

## Estrategia recomendada

**No reescribas todo el sitio de cero en V0.** Trabajá en el orden siguiente:

```
1. Tokens (colores, tipografía, espaciado) → V0 + Tailwind config
2. Componentes base (Button, Card, Eyebrow) → Cursor
3. Landing page completa → V0 con prompts dirigidos
4. Página Innova → V0 reutilizando componentes
5. Página Opera → V0 reutilizando componentes
6. Animaciones y polish → Cursor con Framer Motion
7. Cal.com embed + footer + 404 → V0
8. QA visual + responsive → Cursor + manual
```

Tiempo estimado realista con tu setup (V0 + Cursor + Claude Code): **4 a 6 sesiones de trabajo de 3–4 horas**. No 1 sesión maratónica.

---

## Fase 0 — Preparación (30 min)

Antes de tocar V0:

- [ ] Descargar las fuentes
  - **PP Editorial New** desde [pangrampangram.com](https://pangrampangram.com/products/editorial-new) (gratuita para uso comercial)
  - **Inter** desde [Google Fonts](https://fonts.google.com/specimen/Inter) o instalar via npm: `npm i @fontsource/inter`
  - **JetBrains Mono** desde [Google Fonts](https://fonts.google.com/specimen/JetBrains+Mono) o npm: `npm i @fontsource/jetbrains-mono`
- [ ] Crear el repo en GitHub si no existe
- [ ] Configurar Cal.com con evento "Diagnóstico Estratégico · 90 min" + obtener embed code
- [ ] Tener a mano los archivos de este plan (carpeta web-redesign/)

---

## Fase 1 — Tokens y configuración base (1 sesión)

### Tarea 1.1 — Configurar Tailwind con los tokens

Pegar este `tailwind.config.ts` en Cursor:

```ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        novo: {
          black:       '#0A0A0A',
          'near-black':'#141414',
          charcoal:    '#2A2A2A',
          graphite:    '#5C5C5C',
          mid:         '#8A8A8A',
          line:        '#E5E1D9',
          cream:       '#F5F2EC',
          'cream-50':  '#FAF8F3',
          white:       '#FFFFFF',
          accent:      '#FF3A20',
          'accent-h':  '#E5311B',
          success:     '#1E5F3D',
          warn:        '#A6571C',
        },
      },
      fontFamily: {
        display: ['"PP Editorial New"', 'Tiempos Headline', 'Georgia', 'serif'],
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'display-xl': ['72px', { lineHeight: '1.05', letterSpacing: '-0.04em' }],
        'display-l':  ['56px', { lineHeight: '1.08', letterSpacing: '-0.03em' }],
        'display-m':  ['42px', { lineHeight: '1.1',  letterSpacing: '-0.025em' }],
        'display-s':  ['32px', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'body-xl':    ['21px', { lineHeight: '1.55', letterSpacing: '-0.005em' }],
        'body-l':     ['18px', { lineHeight: '1.55', letterSpacing: '-0.005em' }],
        'body-m':     ['16px', { lineHeight: '1.55' }],
        'body-s':     ['14px', { lineHeight: '1.55' }],
        'mono-s':     ['13px', { lineHeight: '1',    letterSpacing: '0.04em' }],
        'mono-xs':    ['11px', { lineHeight: '1',    letterSpacing: '0.08em' }],
      },
      maxWidth: {
        narrow: '880px',
        text:   '720px',
      },
      spacing: {
        section:    '128px',
        'section-m':'80px',
      },
    },
  },
  plugins: [],
}

export default config
```

### Tarea 1.2 — Configurar fuentes

En `app/layout.tsx`:

```tsx
import { Inter, JetBrains_Mono } from 'next/font/google'
import localFont from 'next/font/local'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const mono  = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', weight: ['300','400'] })

const editorial = localFont({
  src: [
    { path: './fonts/PPEditorialNew-Regular.woff2', weight: '400' },
    { path: './fonts/PPEditorialNew-Italic.woff2',  weight: '400', style: 'italic' },
  ],
  variable: '--font-display',
})
```

### Prompt para Cursor

```
Configurá Tailwind y las fuentes según el plan en /web-redesign/08-plan-implementacion.md
sección "Fase 1 — Tokens".

1. Pegá el tailwind.config.ts proporcionado.
2. Instalá @fontsource/inter y @fontsource/jetbrains-mono.
3. Descargá PPEditorialNew-Regular.woff2 (te paso el link) y ponela en app/fonts/.
4. Configurá las variables CSS en app/layout.tsx según el plan.
5. Probá que las clases font-display text-display-xl funcionan en un componente prueba.
```

---

## Fase 2 — Componentes base (1 sesión)

Construir 6 componentes que se van a usar en todo el sitio. Esto evita duplicación cuando V0 genera secciones.

### Componentes a crear

```
src/components/
├── ui/
│   ├── Eyebrow.tsx          → línea mono uppercase
│   ├── ButtonPrimary.tsx    → botón negro con hover lift
│   ├── ButtonSecondary.tsx  → link con underline animado
│   ├── Card.tsx             → card sobria con border
│   ├── SectionHeader.tsx    → eyebrow + H2 + lead
│   └── SectionWrapper.tsx   → wrapper con padding section
```

### Prompt para Cursor / Claude Code

Para cada componente:

```
Creá src/components/ui/Eyebrow.tsx siguiendo este spec:

Props:
- children: ReactNode
- className?: string

Estilo:
- font: mono-s (13px, JetBrains Mono, tracking 0.08em, uppercase)
- color: novo-graphite (#5C5C5C)
- display: block
- margin-bottom: 24px

Es un componente de display. No tiene interacciones. Usá el cn() helper de @/lib/utils para combinar className.
```

Repetir el patrón para cada componente.

---

## Fase 3 — Landing page (1–2 sesiones)

### Estrategia con V0

V0 genera mejor cuando le das prompts focales y cortos por sección, no un mega-prompt con toda la página.

### Prompts para V0 — sección por sección

#### Prompt 1 — Header sticky

```
Generá un componente Header.tsx para una landing premium.

Características:
- Sticky desde el top
- 72px de alto, encoge a 60px después de 100px de scroll
- Background: rgba(245, 242, 236, 0.85) con backdrop-blur(8px) cuando scrolled
- Border-bottom de 1px solid #E5E1D9 solo cuando scrolled
- Logo a la izquierda (texto "Novo Labs" en font-display 18px por ahora)
- Nav items al centro: Innova, Opera, Método, Equipo (font-sans 15px)
- CTA "Agendar diagnóstico" a la derecha (botón negro, padding 10px 20px, border-radius 4px)
- Mobile: hamburger menu

Usá Framer Motion para la transición de altura.
No agregues animaciones extra. Sobrio y funcional.
```

#### Prompt 2 — Hero

```
Generá un componente Hero.tsx para la landing principal.

Estructura:
1. Eyebrow: "PROGRAMA ESTRATÉGICO · 2 EMPRESAS POR TRIMESTRE"
2. H1 en 2 líneas: "Esto no es consultoría." / "Y tampoco una capacitación."
   - font-display (PP Editorial New / serif)
   - text-display-xl (72px desktop, 48px mobile)
   - tracking -0.04em
   - color #0A0A0A
3. Lead paragraph:
   "Trabajamos dentro de tu empresa durante 12 semanas con un criterio de éxito firmado el día uno. Si al cierre no se cumple, [devolvemos el 50% de la inversión.]"
   - La parte entre [] en color #FF3A20
   - text-body-xl (21px), max-width 56ch
4. Dos CTAs:
   - Primario: "Agendar diagnóstico estratégico →" (botón negro)
   - Secundario: "Ver cómo trabajamos ↓" (link con underline animado en hover)

Layout:
- Container narrow (max 880px)
- Alineado a la izquierda
- Padding vertical 160px top, 128px bottom
- Background: #F5F2EC (cream)
- Sin imágenes, sin patterns

Animaciones de entrada con Framer Motion:
- Stagger sequence: eyebrow → H1 línea 1 → H1 línea 2 → lead → CTAs
- Cada elemento: opacity 0→1, y 16→0, duration 600ms
- Delays: 0, 120, 240, 400, 600ms
```

#### Prompt 3 — Banda de credenciales

```
Generá un componente CredibilityBand.tsx.

Estructura:
1. Línea superior:
   "Trabajan directo con Tomás Volonté y Damián Sánchez. Sin consultores junior. Sin subcontratación."
   - font-sans, 18px, color #5C5C5C
   - container narrow, alineado izquierda
   - margin-bottom 80px

2. Línea numérica (grid 4 columnas desktop, 2x2 mobile):
   
   Por columna:
   - Cifra: 72 | 18 | 360+ | 52%
     - font-display, 56px, tracking -0.03em, color #0A0A0A
   - Label (debajo):
     "PRODUCTOS DIGITALES CONSTRUIDOS DESDE CERO · 2017–2023"
     "EDICIONES DE STARTUP SCHOOL · 2023–2025"
     "PROYECTOS ACOMPAÑADOS POR EL MÉTODO"
     "SIGUEN ACTIVOS Y FACTURANDO (DE LOS 360+)"
     - font-mono, 11px, tracking 0.08em, uppercase, color #5C5C5C

3. Separadores arriba y abajo: 1px solid #E5E1D9

Padding vertical 96px desktop / 64px mobile.
Background: #F5F2EC.

Animación: stagger de las 4 columnas al entrar al viewport, 100ms entre cada.
```

#### Prompt 4 — Dos caminos (Innova / Opera)

```
Generá un componente TwoTracks.tsx.

Estructura:
1. Header de sección:
   - Eyebrow: "DOS CAMINOS"
   - H2: "Innova o Opera." / "Una empresa por trimestre, por track."
     (2 líneas, font-display text-display-l 56px)
   - Lead: "Trabajamos un solo track por programa. La razón es simple: profundidad. Si tu empresa tiene los dos desafíos, resolvemos el más urgente primero. Eso lo definimos en el diagnóstico."

2. Grid de 2 cards (gap 32px, stack vertical en mobile):

   Card INNOVA:
   - Eyebrow: "INNOVA · LANZAR"
   - Title: "Lanzar una nueva línea de negocio sin quemar presupuesto."
     (font-display, 32px)
   - Body: "Para empresas que tienen una idea de producto, servicio o unidad de negocio nueva y necesitan validar demanda real antes de invertir. En 12 semanas, tu equipo aprende a hablar con clientes reales, identificar el problema urgente y diseñar una oferta con compromiso de compra."
   - Footer: "IDEAL PARA: CEO · VP INNOVACIÓN · CPO" (mono-xs)
   - CTA: "Conocer Innova →" (link con animación de flecha)

   Card OPERA:
   - Eyebrow: "OPERA · ESCALAR"
   - Title: "Escalar la operación con IA sin sumar headcount."
   - Body: "Para empresas con procesos manuales que ya no pueden crecer sin más gente. Diagnosticamos los cuellos de botella por impacto económico y construimos la infraestructura de agentes que libera capacidad real. En 12 semanas, tu equipo trabaja con una capa de IA propia, documentada y de tu propiedad."
   - Footer: "IDEAL PARA: CEO · COO · DIRECTOR OPERACIONES · CFO"
   - CTA: "Conocer Opera →"

Estilo de cards:
- Border: 1px solid #E5E1D9
- Padding: 48px
- Background: #FFFFFF
- Border-radius: 6px
- Hover: border-color #2A2A2A, transition 300ms
- En hover, la flecha del CTA se desplaza 4px a la derecha

Background de la sección: #FAF8F3 (cream-50).
Padding vertical: 128px desktop / 80px mobile.
```

#### Prompt 5 — Por qué Novo Labs (PAS)

```
Generá un componente WhyNovoLabs.tsx.

Estructura:
1. Header:
   - Eyebrow: "POR QUÉ NOVO LABS"
   - H2: "Lo que ya intentaron." / "Y por qué no resolvió el problema."

2. 4 bloques, cada uno separado por línea de 1px solid #E5E1D9, padding vertical 64px:

   Bloque 01:
   - Número "01" en font-mono 14px, color #8A8A8A (a la izquierda)
   - Title (font-display 32px): "Contrataron una consultora. Recibieron un informe."
   - Body (font-sans 16px, color #5C5C5C): "El equipo del consultor pasó semanas relevando información y entregó un documento de 80 páginas con recomendaciones. Después se fue. El desafío sigue donde estaba."
   - Aprendizaje en italic (font-sans 17px, color #0A0A0A, border-left 2px solid #FF3A20, padding-left 24px):
     "El mismo problema va a aparecer en la próxima reunión trimestral."

   Bloque 02–04: misma estructura, contenido en /web-redesign/04-landing-principal.md sección 05.

Container narrow (max 880px).
Background: #F5F2EC (cream).
Padding vertical: 128px desktop / 80px mobile.
Animación: cada bloque hace fade-in al entrar al viewport.
```

#### Prompt 6 — El método

```
Generá un componente Method.tsx.

Estructura:
1. Header:
   - Eyebrow: "EL MÉTODO"
   - H2 (font-display, 56px): "El Sistema de Validación Paga, adaptado a empresas medianas."
   - Lead: "Es el mismo método que usamos con 360+ proyectos individuales y que probamos durante 8 años. Aplicado al contexto corporativo, se reduce a tres fases:"

2. Grid de 3 fases (stack vertical en mobile):
   
   Por fase:
   - Eyebrow mono: "FASE 1 / SEMANAS 1–4" (o 5–8, 9–12)
   - Title (font-display 32px): "Diagnóstico" / "Validación" / "Construcción"
   - Body: copy específico de cada fase (ver archivo 04)

3. Separadores verticales sutiles entre columnas (1px line)

4. CTA secundario al final: "Ver el método completo →" (link)

Background: #F5F2EC.
Padding vertical: 128px desktop / 80px mobile.
```

#### Prompt 7 — Ecosistema (logos + advisors)

```
Generá un componente Ecosystem.tsx.

Estructura:
1. Header:
   - Eyebrow: "ECOSISTEMA"
   - H2: "Han confiado en el método."
   - Lead: "Clientes, alumni y empresas del ecosistema Novo Labs."

2. Grid de 10 logos (5x2 desktop, 3x4 mobile):
   - Logos en escala de grises a 60% opacity
   - Hover: opacity 100%, transition 200ms
   - Sin animación de carrusel infinito
   - Padding entre logos: 48px

3. H3: "Y un consejo asesor con piel en el juego:"

4. Grid de 3 advisors destacados:
   - Foto 4:5 (240x300px)
   - Nombre (font-display 24px)
   - Bio corta (font-sans 14px, max 30 palabras)

   Los 3 destacados: Agustín Linenberg, David Tomás, Alex Dantart.

5. CTA: "Ver consejo completo →" (link a /equipo)

Padding vertical: 128px / 80px.
```

#### Prompt 8 — Cómo cobramos

```
Generá un componente HowWeCharge.tsx.

Estructura (container narrow, max 880px):

1. Eyebrow: "CÓMO COBRAMOS"

2. H2 grande (font-display, 56px, tracking -0.03em):
   "50% al inicio."
   "50% en la semana 8, cuando hay algo construido."
   "Si al cierre no se cumple el criterio firmado,"
   "devolvemos el segundo tramo."
   
   (4 líneas, alineadas izquierda)

3. Separador: 1px solid #E5E1D9, margin vertical 80px.

4. Párrafo Body L:
   "Las consultoras no pueden hacer esto porque cobran por horas facturadas, no por resultado entregado. Las capacitaciones tampoco, porque entregan contenido, no resultado. Nosotros podemos porque el riesgo está atado al trabajo: si no funciona, no nos quedamos con el segundo tramo."

5. Separador.

6. Bloque final:
   - Body L: "Y por la misma razón, solo tomamos 2 empresas a la vez."
   - Body M: "Cada programa requiere que Tomás o Damián bloqueen su agenda durante 12 semanas. Subcontratar la facilitación destruiría el único diferenciador que importa: que los fundadores del método trabajan directamente con tu equipo."
   - Indicador con punto naranja animado:
     ● 1 slot disponible para Q3 2026. Próximo abierto: Q4 2026.
     
     (El punto: 8px circle, #FF3A20, animación pulse 2s loop)

Background: #FAF8F3 (cream-50).
Padding vertical: 128px / 80px.
```

#### Prompt 9 — CTA final con agendamiento

```
Generá un componente FinalCTA.tsx.

Estructura:
- Grid 2 columnas (50/50 desktop, stack mobile)
- Border 1px solid #E5E1D9 alrededor de toda la sección
- Background: #F5F2EC
- Padding 96px vertical

Columna izquierda:
- Eyebrow: "EL DIAGNÓSTICO"
- H2: "90 minutos." / "Sin compromiso."
- Lead: "En esta conversación evaluamos juntos si el programa es el camino correcto para tu desafío."
- Lista "Lo que vamos a cubrir:"
  → Qué desafío estratégico tenés en este momento
  → Cuál sería el criterio de éxito que firmaríamos
  → Si el programa encaja o no (y por qué)
  → Cómo sería un plan inicial
- Cierre italic Body M:
  "No vendemos en la llamada. Si hay encaje, te enviamos una propuesta. Si no, te decimos a dónde más buscar."

Columna derecha:
- Embed de Cal.com (placeholder por ahora, después conectamos)
  Usá <iframe src="https://cal.com/novo-labs/diagnostico" width="100%" height="600" />
```

#### Prompt 10 — Footer

```
Generá un componente Footer.tsx.

Estructura:
- Background: #141414 (near-black)
- Texto: #F5F2EC (cream)
- Padding 96px top, 48px bottom

Grid 3 columnas desktop, 1 columna mobile:

Columna 1: NOVO LABS
  - El método
  - El equipo
  - Casos

Columna 2: PROGRAMAS
  - Innova (link a /innova)
  - Opera (link a /opera)

Columna 3: CONTACTO
  - hola@novolabs.co
  - LinkedIn
  - Newsletter

Cada eyebrow de columna en font-mono 12px uppercase, color #8A8A8A.
Cada link en font-sans 15px, color #F5F2EC, hover #FF3A20.

Separador horizontal: 1px solid rgba(229,225,217,0.1).

Bottom row:
- "© 2026 Novo Labs · Buenos Aires · Madrid" (izquierda)
- "Privacidad · Términos" (derecha)
Ambos en font-sans 13px, color #8A8A8A.
```

---

## Fase 4 — Página Innova (1 sesión)

### Crear `src/app/innova/page.tsx`

```tsx
import Hero from '@/components/innova/Hero'
import ForWhom from '@/components/innova/ForWhom'
import TheProblem from '@/components/innova/TheProblem'
import HowWeWork from '@/components/innova/HowWeWork'
import AtCompletion from '@/components/innova/AtCompletion'
import NotIncluded from '@/components/innova/NotIncluded'
import Investment from '@/components/innova/Investment'
import CaseStudy from '@/components/innova/CaseStudy'
import FAQs from '@/components/innova/FAQs'
import FinalCTA from '@/components/innova/FinalCTA'

export default function InnovaPage() {
  return (
    <main>
      <Hero />
      <ForWhom />
      <TheProblem />
      <HowWeWork />
      <AtCompletion />
      <NotIncluded />
      <Investment />
      <CaseStudy />
      <FAQs />
      <FinalCTA />
    </main>
  )
}
```

### Prompts para V0 — Página Innova

Cada componente se prompea con el copy del archivo `05-pagina-innova.md`. Ejemplo:

```
Generá src/components/innova/Hero.tsx con esta estructura:

[Copiar contenido del hero de página Innova, archivo 05, sección 02]

Mismas convenciones de la landing principal:
- Eyebrow mono uppercase
- H1 font-display text-display-xl
- Lead font-sans text-body-xl
- Container narrow (max 880px)
- Alineado izquierda
- Background #F5F2EC
- Padding 160px top, 128px bottom
- Animación stagger de entrada
```

Para cada sección, abrir el archivo correspondiente del rediseño, copiar el copy + wireframe, y pasarle a V0.

---

## Fase 5 — Página Opera (1 sesión)

Idéntico a Innova pero con el contenido del archivo `06-pagina-opera.md`. La estructura es paralela: mismas secciones, distinto contenido. V0 va a ir más rápido porque ya tiene los patrones definidos.

---

## Fase 6 — Animaciones y polish (1 sesión)

### Tareas

- [ ] Configurar Lenis para scroll suave global
- [ ] Verificar todas las animaciones de Framer Motion con `prefers-reduced-motion`
- [ ] Implementar hover states completos en todas las cards y CTAs
- [ ] Verificar microinteracciones: tooltip en cifras, modal en slot indicator
- [ ] Test de performance: Lighthouse > 90 en todas las páginas
- [ ] Validar responsive en mobile real (no solo Chrome DevTools)

### Prompt para Cursor

```
Implementá Lenis para scroll suave en toda la app.

1. Instalá lenis: npm i lenis
2. Creá src/components/SmoothScroll.tsx con un componente que envuelva el children y inicialice Lenis.
3. Configuración: { duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smoothWheel: true }
4. Respetá prefers-reduced-motion: si está activado, no inicialicés Lenis.
5. Usalo en app/layout.tsx envolviendo {children}.
```

---

## Fase 7 — Cal.com + integraciones (1 sesión)

### Tareas

- [ ] Crear evento "Diagnóstico Estratégico · 90 min" en Cal.com
- [ ] Configurar preguntas pre-llamada:
  1. Nombre de la empresa y rol del que agenda
  2. Facturación anual aproximada
  3. Cuál de los dos tracks te interesa más (Innova / Opera / No estoy seguro)
  4. ¿Qué desafío específico tenés en mente?
- [ ] Integrar Cal.com embed en CTAs de las 3 páginas
- [ ] Configurar email de confirmación con asset previo (opcional)
- [ ] Configurar tracking (analytics + conversion event en agendamiento)

---

## Fase 8 — QA + lanzamiento

### Checklist final

#### Contenido
- [ ] Ningún error tipográfico (especial atención: "empezar", "continuar", "está")
- [ ] Todas las cifras consistentes (72, 18, 360+, 52%)
- [ ] Garantía formulada igual en todas las páginas

#### Diseño
- [ ] El acento naranja no aparece en más del 5% de la superficie visual de cada página
- [ ] El crema `#F5F2EC` es el background dominante
- [ ] Todas las display headlines tienen tracking negativo
- [ ] Espaciado entre secciones consistente: 128px desktop / 80px mobile

#### Funcional
- [ ] Cal.com embed funciona en las 3 CTAs
- [ ] Todos los links de navegación funcionan
- [ ] Mobile menu se abre y cierra
- [ ] El header sticky se comprime correctamente al scroll

#### Performance
- [ ] Lighthouse > 90 en Performance, Accessibility, Best Practices, SEO
- [ ] First Contentful Paint < 1.5s
- [ ] No CLS visible al cargar

#### Comparativa
- [ ] Abierto al lado de linear.app, stripe.com/press, equalparts.co → se ve a la altura

---

## Plan B si V0 se vuelve difícil

Si V0 genera código difícil de mantener o el resultado visual no se acerca al manual de marca:

1. **Usar shadcn/ui como base**: tiene componentes accesibles, premium-feeling, fácil de personalizar con los tokens.
2. **Trabajar directamente en Cursor con Claude Code**, sin V0, usando este manual como spec.
3. **Inspirarse en plantillas premium**: el código de [chronark.com](https://chronark.com) (público en GitHub), [vercel.com/templates](https://vercel.com/templates) tier premium, o templates de [tailwindui.com](https://tailwindui.com) (de paga, pero excelente referencia).

---

## El consejo más importante

**No intentes hacer todo perfecto en la primera iteración.** Lo que querés es:

- Iteración 1: Estructura correcta, copy correcto, paleta correcta. ~6/10 visual.
- Iteración 2: Tipografía corregida, espaciado refinado, microinteracciones. ~7.5/10.
- Iteración 3: Animaciones, polish, casos reales cuando lleguen. ~9/10.

Si esperás a tener todo perfecto antes de publicar, no vas a publicar nunca. Publicar a 7/10 con la arquitectura correcta + copy correcto **vende más que mantener a 5/10 con todo mezclado**.

---

## Próximos pasos sugeridos cuando vuelvas

1. Leé el **resumen ejecutivo** (`00-resumen-ejecutivo.md`)
2. Si estás de acuerdo con el diagnóstico, leé **arquitectura de información** (`02-arquitectura-informacion.md`) y **manual de marca v2** (`03-manual-de-marca-v2.md`)
3. Después leé los wireframes + copy de las 3 páginas (`04`, `05`, `06`)
4. Cuando estés listo, abrí Cursor y empezá por la **Fase 1** del plan
5. Andá una sesión por fase. No quieras hacer todo en un fin de semana.

---

*Fin del rediseño. Lo demás es ejecución.*
