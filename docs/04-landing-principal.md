# Landing principal — Wireframe + Copy

> Página: `novolabs.co/`
> Trabajo de la página: convencer al CEO en 60 segundos de que **Novo Labs es una firma que vale la pena considerar**. No vendemos el programa acá. Vendemos la firma.

---

## Estructura completa (9 secciones)

```
01 — Header (sticky)
02 — Hero
03 — Banda de credenciales (cifras clave)
04 — Dos caminos. Uno por empresa.    ← el corazón de la landing
05 — Lo que ya intentaron (PAS comprimido)
06 — El método (vista de 60 segundos)
07 — Quiénes confían + advisors destacados
08 — Cómo cobramos. Por qué importa. (garantía + escasez)
09 — CTA final + agendamiento
10 — Footer
```

Cada sección está pensada para que el lector pueda **dejar de leer** sin sentir que se perdió algo crítico — y para que el que avanza **gane progresivamente más confianza**.

---

## 01 — Header (sticky)

### Wireframe

```
┌────────────────────────────────────────────────────────────────────────┐
│  [Logo Novo Labs]      Innova   Opera   Método   Equipo   [Agendar →] │
└────────────────────────────────────────────────────────────────────────┘
```

### Especificaciones

- **Background**: `var(--novo-cream)` con `backdrop-filter: blur(8px)` y `background-color: rgba(245, 242, 236, 0.85)`
- **Border-bottom**: 1px solid `var(--novo-line)` solo después de hacer scroll (transición 200ms)
- **Altura**: 72px
- **Logo**: alto 28px
- **Items de navegación**: Inter 15px, weight 500, color `var(--novo-charcoal)`, hover `var(--novo-accent)`
- **CTA**: botón primario pequeño (padding 10px 20px)
- **Mobile**: hamburguesa a la derecha, items en panel lateral

### Comportamiento

- Sticky desde scroll position 0
- Encoge a 60px de altura después de 100px de scroll (transición 300ms)
- En `/innova` y `/opera`, el item correspondiente queda con underline naranja activo

---

## 02 — Hero

### Wireframe

```
┌────────────────────────────────────────────────────────────────────────┐
│                                                                        │
│  PROGRAMA ESTRATÉGICO · 2 EMPRESAS POR TRIMESTRE                       │
│                                                                        │
│  Esto no es consultoría.                                              │
│  Y tampoco una capacitación.                                          │
│                                                                        │
│  Trabajamos dentro de tu empresa durante 12 semanas                   │
│  con un criterio de éxito firmado el día uno.                         │
│  Si al cierre no se cumple, devolvemos el 50% de la inversión.        │
│                                                                        │
│  [Agendar diagnóstico estratégico  →]    Ver cómo trabajamos  ↓       │
│                                                                        │
│                                                                        │
│                                                                        │
└────────────────────────────────────────────────────────────────────────┘
```

### Copy final

```
EYEBROW  (mono 13px, uppercase)
PROGRAMA ESTRATÉGICO · 2 EMPRESAS POR TRIMESTRE

H1  (Display XL 72px serif, tracking -0.04em)
Esto no es consultoría.
Y tampoco una capacitación.

LEAD  (Body XL 21px Inter, max 56ch)
Trabajamos dentro de tu empresa durante 12 semanas con un criterio
de éxito firmado el día uno. Si al cierre no se cumple,
[devolvemos el 50% de la inversión.]  ← esa frase en naranja

CTA primario:  Agendar diagnóstico estratégico  →
CTA secundario: Ver cómo trabajamos  ↓  (scroll a sección 03)
```

### Por qué este copy

- **"Esto no es X. Y tampoco Y."** es un *pattern interrupt*. El CEO que llega categoriza el sitio mentalmente en 1 segundo. Le decimos: las dos categorías que estás usando para clasificarme son incorrectas.
- **"Trabajamos dentro de tu empresa"** es la línea diferencial central. La repetimos en hero, en sección 04 y en CTA final.
- **"Criterio de éxito firmado el día uno"** es la frase de mayor diferenciación frente a consultoras. *Firmado* es la palabra clave.
- **"Devolvemos el 50%"** es la garantía en hero. Subir esta frase del fondo del sitio al hero es el cambio de mayor leverage.
- **CTA secundario "Ver cómo trabajamos"** reduce fricción para el que no está listo a agendar.

### Layout y estilo

- Espacio vertical generoso: 160px arriba, 128px abajo
- Eyebrow → H1: 32px de gap
- H1 → Lead: 40px de gap
- Lead → CTAs: 48px de gap
- Container narrow: max-width 880px, alineado a la izquierda (NO centrado)
- Background: `var(--novo-cream)`
- Sin imagen de fondo, sin pattern, sin gradient. El hero es texto puro sobre crema.

### Lo que NO va en el hero

- ❌ Fotos de fundadores (van en sección 03 como banda de credenciales)
- ❌ Logos de clientes (van en sección 07)
- ❌ "Reserva tu plaza" o "Quedan 2 lugares" (vive como eyebrow)

---

## 03 — Banda de credenciales

### Wireframe

```
┌────────────────────────────────────────────────────────────────────────┐
│  Trabajan directo con Tomás Volonté y Damián Sánchez. Sin              │
│  consultores junior. Sin subcontratación.                              │
│                                                                        │
│  ──────────────────────────────────────────────────────────────────    │
│                                                                        │
│   72              18              360+             52%                 │
│   PRODUCTOS       EDICIONES       PROYECTOS        SIGUEN ACTIVOS      │
│   DIGITALES       DE STARTUP      ACOMPAÑADOS      Y FACTURANDO        │
│   CONSTRUIDOS     SCHOOL          POR EL MÉTODO    (DE 360+)           │
│   2017–2023       2023–2025                                            │
│                                                                        │
│  ──────────────────────────────────────────────────────────────────    │
└────────────────────────────────────────────────────────────────────────┘
```

### Copy final

```
LÍNEA SUPERIOR  (Body L 18px, color graphite)
Trabajan directo con Tomás Volonté y Damián Sánchez.
Sin consultores junior. Sin subcontratación.

LÍNEA NUMÉRICA  (4 columnas)
72                   18                   360+                  52%
PRODUCTOS DIGITALES  EDICIONES DE         PROYECTOS             SIGUEN ACTIVOS
CONSTRUIDOS DESDE    STARTUP SCHOOL       ACOMPAÑADOS POR       Y FACTURANDO
CERO · 2017–2023     · 2023–2025          EL MÉTODO             (DE LOS 360+)
```

### Por qué este copy

- La línea superior pre-credencia con nombres reales: hace personal lo que el hero dejó conceptual
- Las 4 cifras son específicas, sostenibles y memorables. Cada una refuerza una dimensión de autoridad (capacidad técnica · escala del método · adopción · resultados).
- El uso de mono 13px en las labels y display 56px en las cifras es el patrón de Stripe Atlas / Vercel.

### Layout

- Container narrow para la línea superior (max 720px, alineado izquierda)
- Container completo para la banda numérica (grid 4 columnas desktop, 2x2 mobile)
- Cifras en serif Display L (56px), tracking -0.03em
- Padding vertical 96px desktop / 64px mobile
- Separadores de 1px solid `var(--novo-line)` arriba y abajo

---

## 04 — Dos caminos. Uno por empresa.

### Wireframe

```
┌────────────────────────────────────────────────────────────────────────┐
│                                                                        │
│  DOS CAMINOS                                                           │
│                                                                        │
│  Innova o Opera.                                                       │
│  Una empresa por trimestre, por track.                                 │
│                                                                        │
│  Trabajamos un solo track por programa. La razón es simple:            │
│  profundidad. Si tu empresa tiene los dos desafíos, resolvemos         │
│  el más urgente primero. Eso lo definimos en el diagnóstico.           │
│                                                                        │
├────────────────────────────┬───────────────────────────────────────────┤
│                            │                                           │
│  INNOVA                    │  OPERA                                    │
│                            │                                           │
│  Lanzar una nueva línea    │  Escalar la operación con IA              │
│  de negocio sin quemar     │  sin sumar headcount.                     │
│  presupuesto.              │                                           │
│                            │  Para empresas con procesos manuales      │
│  Para empresas que tienen  │  que ya no pueden crecer sin más          │
│  una idea de producto,     │  gente. Diagnosticamos los cuellos        │
│  servicio o unidad de      │  de botella por impacto económico         │
│  negocio nueva y necesitan │  y construimos la infraestructura         │
│  validar demanda real      │  de agentes que libera capacidad real.    │
│  antes de invertir.        │                                           │
│                            │                                           │
│  → Conocer Innova          │  → Conocer Opera                          │
│                            │                                           │
└────────────────────────────┴───────────────────────────────────────────┘
```

### Copy final

```
EYEBROW
DOS CAMINOS

H2  (Display L 56px)
Innova o Opera.
Una empresa por trimestre, por track.

LEAD  (Body L 18px, max 56ch)
Trabajamos un solo track por programa.
La razón es simple: profundidad.
Si tu empresa tiene los dos desafíos, resolvemos el más urgente primero.
Eso lo definimos en el diagnóstico.

──────────────────────────────────────────────

CARD IZQUIERDA — INNOVA

  Eyebrow:  INNOVA · LANZAR
  Title:    Lanzar una nueva línea de negocio
            sin quemar presupuesto.
  Body:     Para empresas que tienen una idea de producto,
            servicio o unidad de negocio nueva y necesitan
            validar demanda real antes de invertir.

            En 12 semanas, tu equipo aprende a hablar con
            clientes reales, identificar el problema urgente
            y diseñar una oferta con compromiso de compra.
  Footer:   IDEAL PARA: CEO · VP INNOVACIÓN · CPO
  CTA:      Conocer Innova  →

CARD DERECHA — OPERA

  Eyebrow:  OPERA · ESCALAR
  Title:    Escalar la operación con IA
            sin sumar headcount.
  Body:     Para empresas con procesos manuales que ya no
            pueden crecer sin más gente. Diagnosticamos los
            cuellos de botella por impacto económico y
            construimos la infraestructura de agentes que
            libera capacidad real.

            En 12 semanas, tu equipo trabaja con una capa
            de IA propia, documentada y de tu propiedad.
  Footer:   IDEAL PARA: CEO · COO · DIRECTOR OPERACIONES · CFO
  CTA:      Conocer Opera  →
```

### Por qué este copy

- **"Innova o Opera"** como H2 es declarativo: hay dos cosas, elegí una.
- **"Una empresa por trimestre, por track"** consolida la escasez sin repetir la frase del hero.
- **"Trabajamos un solo track por programa"** anticipa la objeción de "¿puedo hacer los dos?" antes de que aparezca.
- Cada card tiene la misma estructura (eyebrow / title / body / footer / CTA) → parece un sistema, no improvisación.
- "IDEAL PARA" como footer mono es la pieza que ayuda al lector a auto-identificarse en 1 segundo.

### Layout y estilo

- Sección con background `var(--novo-cream-50)` (variante más clara) para diferenciarse del hero
- H2 alineado a la izquierda, container narrow
- Cards en grid de 2 columnas con gap de 32px desktop, stack vertical mobile
- Cards con border de 1px solid `var(--novo-line)`, padding 48px, sin sombra, background `var(--novo-white)`
- Hover de card: border-color → `var(--novo-charcoal)`, transition 300ms
- CTA dentro de card: link con border-bottom, no botón

### Interacción crítica

Cuando el cursor pasa sobre la card de INNOVA, el title cambia su color a un tono más oscuro y aparece un underline animado en el CTA. Lo mismo con OPERA. Pequeño, sutil, premium.

---

## 05 — Lo que ya intentaron (PAS comprimido)

### Wireframe

```
┌────────────────────────────────────────────────────────────────────────┐
│                                                                        │
│  POR QUÉ NOVO LABS                                                     │
│                                                                        │
│  Lo que ya intentaron.                                                 │
│  Y por qué no resolvió el problema.                                    │
│                                                                        │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│  01  Contrataron una consultora.        ──→ Recibieron un informe.    │
│                                                                        │
│      El equipo del consultor pasó semanas relevando información        │
│      y entregó un documento de 80 páginas con recomendaciones.         │
│      Después se fue. El desafío sigue donde estaba.                    │
│                                                                        │
│      → El mismo problema va a aparecer en la próxima reunión           │
│        trimestral.                                                     │
│                                                                        │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│  02  Invirtieron en capacitación.       ──→ El equipo no aplicó nada. │
│                                                                        │
│      Durante el programa, entusiasmo. Al volver al día a día,          │
│      la urgencia ganó en 72 horas.                                     │
│                                                                        │
│      → El conocimiento que no se aplica en 30 días no se aplica nunca. │
│                                                                        │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│  03  Intentaron resolverlo internamente. ──→ Murió en el tercer mes.  │
│                                                                        │
│      Buena voluntad, equipo capaz. La primera urgencia operativa       │
│      le ganó al proyecto. Sin metodología, las iniciativas pierden     │
│      impulso ante cualquier imprevisto.                                │
│                                                                        │
│      → Sin estructura, el negocio actual siempre le gana a             │
│        la iniciativa nueva.                                            │
│                                                                        │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│  04  Ningún proveedor firmó qué era    ──→ Y "exitoso" se redefinió  │
│      "éxito" antes de empezar.                al final.                │
│                                                                        │
│      Sin un criterio acordado y firmado al inicio, el proveedor        │
│      puede justificar cualquier entregable como exitoso.               │
│                                                                        │
│      → Sin criterio de éxito firmado, el proveedor siempre puede       │
│        declarar victoria.                                              │
│                                                                        │
└────────────────────────────────────────────────────────────────────────┘
```

### Copy final

(Igual al wireframe arriba — los textos son los definitivos.)

### Por qué este copy

- **"Lo que ya intentaron y por qué no resolvió el problema"** es un H2 más sobrio y editorial que "¿Te suena alguna de estas situaciones?"
- **La estructura "Hicieron X → Resultado Y → Aprendizaje Z"** es compacta: 3 unidades de información por bloque, no 7
- **Las flechas → en lugar de cards iguales** crean ritmo visual y jerarquía
- **Los "aprendizajes" en cita** son los que el CEO se va a quedar pensando — citables, frameables

### Layout

- Container narrow (max 880px)
- Cada bloque separado por línea de 1px solid `var(--novo-line)`
- Número 01–04 en mono 14px, color `var(--novo-mid)`, alineado a la izquierda
- Title del bloque en Display S 32px serif
- Body en Body M 16px Inter, color `var(--novo-graphite)`
- Aprendizaje en italic Inter 17px, color `var(--novo-black)`, padding-left 24px con border-left 2px solid `var(--novo-accent)`

---

## 06 — El método (vista de 60 segundos)

### Wireframe

```
┌────────────────────────────────────────────────────────────────────────┐
│                                                                        │
│  EL MÉTODO                                                             │
│                                                                        │
│  El Sistema de Validación Paga,                                       │
│  adaptado a empresas medianas.                                        │
│                                                                        │
│  Es el mismo método que usamos con 360+ proyectos individuales        │
│  y que probamos durante 8 años. Aplicado al contexto corporativo,     │
│  se reduce a tres fases:                                              │
│                                                                        │
├──────────────────┬────────────────┬───────────────────────────────────┤
│                  │                │                                   │
│  FASE 1          │  FASE 2        │  FASE 3                           │
│  SEMANAS 1–4     │  SEMANAS 5–8   │  SEMANAS 9–12                     │
│                  │                │                                   │
│  Diagnóstico     │  Validación    │  Construcción                     │
│                  │                │                                   │
│  Definir el      │  Probar las    │  Construir la                     │
│  desafío con     │  hipótesis     │  versión mínima                   │
│  precisión.      │  más riesgosas │  que demuestra                    │
│  Alinear stake-  │  con evidencia │  el resultado.                    │
│  holders. Firmar │  real, no con  │  Entregar la                      │
│  el criterio     │  supuestos.    │  metodología al                   │
│  de éxito.       │                │  equipo.                          │
│                  │                │                                   │
└──────────────────┴────────────────┴───────────────────────────────────┘
                                                                       
  Ver el método completo →   (link a /metodo)
```

### Copy final

```
EYEBROW: EL MÉTODO

H2 (Display L):
El Sistema de Validación Paga,
adaptado a empresas medianas.

LEAD (Body L):
Es el mismo método que usamos con 360+ proyectos individuales
y que probamos durante 8 años. Aplicado al contexto corporativo,
se reduce a tres fases:

  FASE 1 / SEMANAS 1–4
  Diagnóstico
  Definir el desafío con precisión. Alinear stakeholders.
  Firmar el criterio de éxito.

  FASE 2 / SEMANAS 5–8
  Validación
  Probar las hipótesis más riesgosas con evidencia real,
  no con supuestos.

  FASE 3 / SEMANAS 9–12
  Construcción
  Construir la versión mínima que demuestra el resultado.
  Entregar la metodología al equipo.

CTA secundario: Ver el método completo →   (linkea a /metodo)
```

### Por qué este copy

- Esta sección es **deliberadamente abstracta y comprimida**. La razón: el método es el mismo conceptualmente para ambos tracks, pero su aplicación específica es distinta. Acá damos vista de 60 segundos. El detalle aplicado vive en cada página de track.
- "El Sistema de Validación Paga" es el nombre propio. Aparece acá en grande, registrado como marca.
- El CTA secundario a /metodo permite que el lead más analítico profundice sin obligar a todos a leerlo.

### Layout

- Grid de 3 columnas desktop, stack vertical mobile
- Cada fase con: eyebrow mono / título Display S / body M
- Separadores verticales sutiles entre columnas (1px line)
- Background `var(--novo-cream)` (vuelve al fondo principal)

---

## 07 — Quiénes confían + advisors destacados

### Wireframe

```
┌────────────────────────────────────────────────────────────────────────┐
│                                                                        │
│  ECOSISTEMA                                                            │
│                                                                        │
│  Han confiado en el método.                                            │
│                                                                        │
│  Clientes, alumni y empresas del ecosistema Novo Labs.                 │
│                                                                        │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│  [Aerolab]   [Baikal]   [Cyberclick]   [Simball]   [ROXperience]      │
│                                                                        │
│  [Homa]      [Coorva]   [Possumus]     [Serquo]    [Intuition]        │
│                                                                        │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│  Y un consejo asesor con piel en el juego:                            │
│                                                                        │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐                 │
│  │ [Foto AL]    │  │ [Foto DT]    │  │ [Foto AD]    │                 │
│  │              │  │              │  │              │                 │
│  │ Agustín      │  │ David Tomás  │  │ Alex Dantart │                 │
│  │ Linenberg    │  │              │  │              │                 │
│  │              │  │              │  │              │                 │
│  │ Founder      │  │ Co-founder & │  │ Emprendedor  │                 │
│  │ Aerolab.     │  │ CEO          │  │ y especialista│                │
│  │ Inversor,    │  │ Cyberclick.  │  │ en inteligen-│                 │
│  │ Board SoDA.  │  │ Autor.       │  │ cia artificial│                │
│  │              │  │              │  │              │                 │
│  └──────────────┘  └──────────────┘  └──────────────┘                 │
│                                                                        │
│              Ver consejo completo →     (link a /equipo)              │
│                                                                        │
└────────────────────────────────────────────────────────────────────────┘
```

### Copy final

```
EYEBROW: ECOSISTEMA

H2 (Display L):
Han confiado en el método.

LEAD (Body L):
Clientes, alumni y empresas del ecosistema Novo Labs.

——— grilla de 10 logos en escala de grises ———

H3 (Display S, después de la grilla):
Y un consejo asesor con piel en el juego:

——— 3 advisors destacados con foto + nombre + bio corta ———

CTA secundario:  Ver consejo completo →   (link a /equipo)
```

### Decisión: por qué solo 3 advisors en landing

- **Curación = premium.** Mostrar todos los advisors achata la jerarquía.
- Los 3 elegidos: **Agustín Linenberg** (relación cercana, Aerolab está en la grilla de logos), **David Tomás** (autor, peso de marca), **Alex Dantart** (IA, refuerza el ángulo de Opera).
- El CTA `/equipo` permite ver la lista completa.

### Layout

- Grilla de logos: 5x2 desktop, 3x4 mobile, padding entre logos 48px
- Logos en escala de grises a 60% opacity → vuelven a 100% en hover
- Sin animación de carrusel infinito
- Bloque de advisors: grid 3 columnas con fotos 240x300px, retrato 4:5
- Bio corta: máximo 30 palabras

---

## 08 — Cómo cobramos. Por qué importa.

### Wireframe

```
┌────────────────────────────────────────────────────────────────────────┐
│                                                                        │
│  CÓMO COBRAMOS                                                         │
│                                                                        │
│  50% al inicio.                                                        │
│  50% en la semana 8, cuando hay algo construido.                       │
│  Si al cierre no se cumple el criterio firmado,                        │
│  devolvemos el segundo tramo.                                          │
│                                                                        │
│  ──────────────────────────────────────────────────────────────────    │
│                                                                        │
│  Las consultoras no pueden hacer esto porque cobran por horas         │
│  facturadas, no por resultado entregado. Las capacitaciones tampoco,   │
│  porque entregan contenido, no resultado. Nosotros podemos porque      │
│  el riesgo está atado al trabajo: si no funciona, no nos quedamos     │
│  con el segundo tramo.                                                 │
│                                                                        │
│  ──────────────────────────────────────────────────────────────────    │
│                                                                        │
│  Y por la misma razón, solo tomamos 2 empresas a la vez.              │
│                                                                        │
│  Cada programa requiere que Tomás o Damián bloqueen su agenda          │
│  durante 12 semanas. Subcontratar la facilitación destruiría el       │
│  único diferenciador que importa: que los fundadores del método       │
│  trabajan directamente con tu equipo.                                  │
│                                                                        │
│  ● 1 slot disponible para Q3 2026. Próximo abierto: Q4 2026.          │
│                                                                        │
└────────────────────────────────────────────────────────────────────────┘
```

### Copy final

```
EYEBROW: CÓMO COBRAMOS

H2 (Display L):
50% al inicio.
50% en la semana 8, cuando hay algo construido.
Si al cierre no se cumple el criterio firmado,
devolvemos el segundo tramo.

Separator

BLOQUE 2 (Body L):
Las consultoras no pueden hacer esto porque cobran por horas
facturadas, no por resultado entregado. Las capacitaciones tampoco,
porque entregan contenido, no resultado. Nosotros podemos porque el
riesgo está atado al trabajo: si no funciona, no nos quedamos con
el segundo tramo.

Separator

BLOQUE 3 (Body L):
Y por la misma razón, solo tomamos 2 empresas a la vez.

Cada programa requiere que Tomás o Damián bloqueen su agenda
durante 12 semanas. Subcontratar la facilitación destruiría el
único diferenciador que importa: que los fundadores del método
trabajan directamente con tu equipo.

INDICADOR (con punto naranja animado):
● 1 slot disponible para Q3 2026. Próximo abierto: Q4 2026.
```

### Por qué este copy

- **El H2 es la mejor parte del sitio.** Tres oraciones cortas que comunican: estructura de pago, momento de la prueba, garantía. Memorable y citable.
- **El segundo bloque explica el "por qué"** del modelo de pago: convierte la garantía en argumento competitivo contra alternativas.
- **El tercer bloque** justifica la escasez y la liga al modelo de entrega. Es escasez con razonamiento, no escasez de marketing.
- **El indicador con punto animado** (slot disponible) es lo único naranja de la sección. Aparece sutil pero llama la atención. Es señal de "real-time", como en un dashboard.

### Layout

- Container narrow (max 880px), alineado izquierda
- Background `var(--novo-cream-50)` para diferenciarse
- Padding 128px vertical
- Separadores: línea de 1px solid `var(--novo-line)` con 80px de margen vertical
- Punto naranja con animación pulse (1.5s loop, opacity 0.4 → 1)

---

## 09 — CTA final + agendamiento

### Wireframe

```
┌────────────────────────────────────────────────────────────────────────┐
│                                                                        │
│  ┌─────────────────────────────────────┬─────────────────────────────┐ │
│  │                                     │                             │ │
│  │  EL DIAGNÓSTICO                     │   [Cal.com embed]           │ │
│  │                                     │                             │ │
│  │  90 minutos. Sin compromiso.        │   ┌─────────────────────┐   │ │
│  │                                     │   │  Junio 2026         │   │ │
│  │  En esta conversación evaluamos     │   │                     │   │ │
│  │  juntos si el programa es el        │   │  L  M  X  J  V      │   │ │
│  │  camino correcto para tu desafío.   │   │           1  2      │   │ │
│  │                                     │   │  3  4  5  6  7      │   │ │
│  │  Lo que vamos a cubrir:             │   │  10 11 12 13 14     │   │ │
│  │                                     │   │  ...                │   │ │
│  │  → Qué desafío estratégico tenés    │   │                     │   │ │
│  │    en este momento                  │   │  Próxima ventana:   │   │ │
│  │  → Cuál sería el criterio de éxito  │   │  Mar 10 Jun · 14:00 │   │ │
│  │  → Si el programa encaja o no       │   │                     │   │ │
│  │    (y por qué)                      │   └─────────────────────┘   │ │
│  │  → Cómo sería un plan inicial       │                             │ │
│  │                                     │                             │ │
│  │  No vendemos en la llamada. Si      │                             │ │
│  │  hay encaje, te enviamos una        │                             │ │
│  │  propuesta. Si no, te decimos a     │                             │ │
│  │  dónde más buscar.                  │                             │ │
│  │                                     │                             │ │
│  └─────────────────────────────────────┴─────────────────────────────┘ │
│                                                                        │
└────────────────────────────────────────────────────────────────────────┘
```

### Copy final

```
EYEBROW (izquierda): EL DIAGNÓSTICO

H2 (Display L):
90 minutos.
Sin compromiso.

LEAD (Body L):
En esta conversación evaluamos juntos si el programa
es el camino correcto para tu desafío.

LISTA "Lo que vamos a cubrir:":
→ Qué desafío estratégico tenés en este momento
→ Cuál sería el criterio de éxito que firmaríamos
→ Si el programa encaja o no (y por qué)
→ Cómo sería un plan inicial

CIERRE (Body M, italic):
No vendemos en la llamada. Si hay encaje, te enviamos
una propuesta. Si no, te decimos a dónde más buscar.

(Embed Cal.com a la derecha)
```

### Por qué este copy

- **"No vendemos en la llamada"** es la frase que más sube la conversión a agendamiento. Un CEO premium odia ser vendido. Decirle explícitamente que no vamos a venderle reduce fricción al 0.
- **"Si no hay encaje, te decimos a dónde más buscar"** es señal de abundancia, no de necesidad. Premium.
- **La lista de 4 puntos** anticipa la llamada para que el CEO llegue preparado y sienta que el tiempo va a ser productivo.

### Layout

- Grid 2 columnas (50/50) en desktop, stack vertical en mobile
- Columna izquierda: contenido textual
- Columna derecha: Cal.com embed (event "Diagnóstico Estratégico · 90 min")
- Border 1px solid `var(--novo-line)` alrededor de toda la sección
- Background `var(--novo-cream)`
- Padding 96px vertical

---

## 10 — Footer

### Wireframe

```
┌────────────────────────────────────────────────────────────────────────┐
│                                                                        │
│  ┌──────────────────────┬──────────────────────┬──────────────────────┤
│  │                      │                      │                      │
│  │  NOVO LABS           │  PROGRAMAS           │  CONTACTO            │
│  │                      │                      │                      │
│  │  El método           │  Innova              │  hola@novolabs.co    │
│  │  El equipo           │  Opera               │  LinkedIn            │
│  │  Casos               │                      │  Newsletter          │
│  │                      │                      │                      │
│  └──────────────────────┴──────────────────────┴──────────────────────┤
│                                                                        │
│  ────────────────────────────────────────────────────────────────────  │
│                                                                        │
│  © 2026 Novo Labs · Buenos Aires · Madrid              Privacidad · Términos │
│                                                                        │
└────────────────────────────────────────────────────────────────────────┘
```

### Copy

```
NOVO LABS          PROGRAMAS         CONTACTO
El método          Innova            hola@novolabs.co
El equipo          Opera             LinkedIn
Casos                                Newsletter

© 2026 Novo Labs · Buenos Aires · Madrid
Privacidad · Términos
```

### Layout

- Padding 96px arriba / 48px abajo
- Background `var(--novo-near-black)` con texto `var(--novo-cream)` para crear contraste con el resto del sitio (footer "cierre")
- Grid 3 columnas desktop, 1 columna mobile
- Eyebrows en mono 12px uppercase

---

## Notas de estilo cruzadas a toda la landing

1. **Espacios entre secciones de 128px desktop / 80px mobile.** Sin excepción.
2. **Alineación a la izquierda** en todos los headlines de sección. Centrado solo en el CTA final.
3. **El acento naranja aparece en:**
    - 1 frase del lead del hero (devolvemos el 50%)
    - El indicador del slot disponible (sección 08)
    - El hover de los links del header
    - El border-left del aprendizaje en sección 05
   Nada más.
4. **Sin íconos decorativos.** Las flechas son glifos tipográficos (→ ↓ ↗).
5. **Sin sombras en cards.** Solo borders.
6. **Sin animaciones de entrada agresivas.** Fade-in sutil al hacer scroll (ver archivo 07).

---

## Versión TL;DR del copy completo para pegar en V0

Si querés iterarlo rápido en V0, este es el bloque de texto continuo que podés pegar como "contenido de página":

```
[EYEBROW] PROGRAMA ESTRATÉGICO · 2 EMPRESAS POR TRIMESTRE
[H1] Esto no es consultoría. Y tampoco una capacitación.
[LEAD] Trabajamos dentro de tu empresa durante 12 semanas con un criterio de éxito firmado el día uno. Si al cierre no se cumple, devolvemos el 50% de la inversión.
[CTA1] Agendar diagnóstico estratégico
[CTA2] Ver cómo trabajamos

[BANDA] Trabajan directo con Tomás Volonté y Damián Sánchez. Sin consultores junior. Sin subcontratación.
[CIFRAS] 72 productos digitales · 18 ediciones · 360+ proyectos · 52% siguen activos

[EYEBROW] DOS CAMINOS
[H2] Innova o Opera. Una empresa por trimestre, por track.
[LEAD] Trabajamos un solo track por programa. La razón es simple: profundidad. Si tu empresa tiene los dos desafíos, resolvemos el más urgente primero. Eso lo definimos en el diagnóstico.

[CARD INNOVA] Lanzar una nueva línea de negocio sin quemar presupuesto. Para empresas que tienen una idea de producto, servicio o unidad de negocio nueva y necesitan validar demanda real antes de invertir. En 12 semanas, tu equipo aprende a hablar con clientes reales, identificar el problema urgente y diseñar una oferta con compromiso de compra. IDEAL PARA: CEO · VP INNOVACIÓN · CPO. CTA: Conocer Innova.

[CARD OPERA] Escalar la operación con IA sin sumar headcount. Para empresas con procesos manuales que ya no pueden crecer sin más gente. Diagnosticamos los cuellos de botella por impacto económico y construimos la infraestructura de agentes que libera capacidad real. En 12 semanas, tu equipo trabaja con una capa de IA propia, documentada y de tu propiedad. IDEAL PARA: CEO · COO · DIRECTOR OPERACIONES · CFO. CTA: Conocer Opera.

[EYEBROW] POR QUÉ NOVO LABS
[H2] Lo que ya intentaron. Y por qué no resolvió el problema.

[01] Contrataron una consultora. Recibieron un informe. El equipo del consultor pasó semanas relevando información y entregó un documento de 80 páginas con recomendaciones. Después se fue. El desafío sigue donde estaba.
[Aprendizaje] El mismo problema va a aparecer en la próxima reunión trimestral.

[02] Invirtieron en capacitación. El equipo no aplicó nada. Durante el programa, entusiasmo. Al volver al día a día, la urgencia ganó en 72 horas.
[Aprendizaje] El conocimiento que no se aplica en 30 días no se aplica nunca.

[03] Intentaron resolverlo internamente. Murió en el tercer mes. Buena voluntad, equipo capaz. La primera urgencia operativa le ganó al proyecto. Sin metodología, las iniciativas pierden impulso ante cualquier imprevisto.
[Aprendizaje] Sin estructura, el negocio actual siempre le gana a la iniciativa nueva.

[04] Ningún proveedor firmó qué era "éxito" antes de empezar. Sin un criterio acordado y firmado al inicio, el proveedor puede justificar cualquier entregable como exitoso.
[Aprendizaje] Sin criterio de éxito firmado, el proveedor siempre puede declarar victoria.

[EYEBROW] EL MÉTODO
[H2] El Sistema de Validación Paga, adaptado a empresas medianas.
[LEAD] Es el mismo método que usamos con 360+ proyectos individuales y que probamos durante 8 años. Aplicado al contexto corporativo, se reduce a tres fases.

[FASE 1 / SEMANAS 1–4] Diagnóstico. Definir el desafío con precisión. Alinear stakeholders. Firmar el criterio de éxito.
[FASE 2 / SEMANAS 5–8] Validación. Probar las hipótesis más riesgosas con evidencia real, no con supuestos.
[FASE 3 / SEMANAS 9–12] Construcción. Construir la versión mínima que demuestra el resultado. Entregar la metodología al equipo.

[CTA] Ver el método completo

[EYEBROW] ECOSISTEMA
[H2] Han confiado en el método.
[LEAD] Clientes, alumni y empresas del ecosistema Novo Labs.
[10 LOGOS]
[H3] Y un consejo asesor con piel en el juego:
[3 advisors destacados]
[CTA] Ver consejo completo

[EYEBROW] CÓMO COBRAMOS
[H2] 50% al inicio. 50% en la semana 8, cuando hay algo construido. Si al cierre no se cumple el criterio firmado, devolvemos el segundo tramo.

Las consultoras no pueden hacer esto porque cobran por horas facturadas, no por resultado entregado. Las capacitaciones tampoco, porque entregan contenido, no resultado. Nosotros podemos porque el riesgo está atado al trabajo: si no funciona, no nos quedamos con el segundo tramo.

Y por la misma razón, solo tomamos 2 empresas a la vez. Cada programa requiere que Tomás o Damián bloqueen su agenda durante 12 semanas. Subcontratar la facilitación destruiría el único diferenciador que importa: que los fundadores del método trabajan directamente con tu equipo.

● 1 slot disponible para Q3 2026. Próximo abierto: Q4 2026.

[EYEBROW] EL DIAGNÓSTICO
[H2] 90 minutos. Sin compromiso.
[LEAD] En esta conversación evaluamos juntos si el programa es el camino correcto para tu desafío.

Lo que vamos a cubrir:
→ Qué desafío estratégico tenés en este momento
→ Cuál sería el criterio de éxito que firmaríamos
→ Si el programa encaja o no (y por qué)
→ Cómo sería un plan inicial

No vendemos en la llamada. Si hay encaje, te enviamos una propuesta. Si no, te decimos a dónde más buscar.

[Cal.com embed]
```

---

*Continuar leyendo: `05-pagina-innova.md`*
