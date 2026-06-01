# Manual de Marca v2 — Novo Labs

> El sistema visual y verbal que tiene que transmitir, sin decirlo, que cobramos $40K y los valemos.

---

## Filosofía de marca

**Sobria, precisa, segura.** Nunca ruidosa. Nunca apologética. Nunca infantil.

La marca tiene que parecerse a la firma que construye: trabajamos dentro de empresas serias para resolver problemas serios. Eso se ve en cada decisión visual.

Tres adjetivos rectores:

- **Editorial**: como una buena revista de negocios. Tipografía cuidada, espacios respirados, jerarquía clara.
- **Industrial**: como una firma de ingeniería. Precisión, módulos, datos numéricos en posición protagónica.
- **Confidencial**: como una boutique consultora top-tier. No te grita. Se posiciona en silencio y deja que la sustancia hable.

Lo que NO somos:

- ❌ Startup playful (no usamos color overload, ni gradientes, ni illustrations infantiles)
- ❌ Agencia creativa loud (no usamos fonts experimentales, ni animaciones agresivas)
- ❌ Infoproducto motivacional (no usamos íconos genéricos, ni emojis, ni testimonials en burbuja amarilla)

---

## Paleta de color

### El cambio fundamental respecto a la versión actual

Hoy el sitio usa el naranja `#FF3A20` como acento dominante. En la nueva paleta, el naranja **aparece en menos del 5% de la superficie visual** y se gana respeto por escasez. El protagonismo lo tienen los negros y los off-whites.

### Paleta completa

| Token | Hex | Uso |
|---|---|---|
| `--novo-black` | `#0A0A0A` | Color principal de texto sobre fondo claro. Fondos de cards/hero alternos. |
| `--novo-near-black` | `#141414` | Surface alternativa al fondo principal. Cards en modo oscuro. |
| `--novo-charcoal` | `#2A2A2A` | Borders fuertes. Headers de tabla. Quotes. |
| `--novo-graphite` | `#5C5C5C` | Texto secundario sobre fondo claro. Bylines. Captions. |
| `--novo-mid` | `#8A8A8A` | Texto terciario, microcopy, fechas, números de sección. |
| `--novo-line` | `#E5E1D9` | Borders sutiles sobre crema. Líneas separadoras. |
| `--novo-cream` | `#F5F2EC` | Fondo principal de página. La gran apuesta de marca. |
| `--novo-cream-50` | `#FAF8F3` | Variante más clara para sub-secciones. |
| `--novo-white` | `#FFFFFF` | Solo para cards específicas que necesitan máxima claridad. |
| `--novo-accent` | `#FF3A20` | Acento. Underlines en CTAs. Una palabra clave en quote. Indicador de "live". |
| `--novo-accent-hover` | `#E5311B` | Estado hover del acento. |
| `--novo-success` | `#1E5F3D` | Solo para indicadores de éxito (ej. "Garantizado", checkmarks). |
| `--novo-warn` | `#A6571C` | Solo para advertencias específicas. |

### La gran decisión: el fondo crema

`#F5F2EC` como background principal de página. Ese tono es la diferencia entre un sitio que parece "tech genérico" y uno que parece "firma de pensamiento". Lo usan: Stripe Press, Lambda School, Equal Parts, Substack para sus mejores tipografías.

**Por qué crema y no blanco puro:**

- El blanco puro `#FFFFFF` con tipografías grandes vibra y cansa
- El crema reduce contraste de forma sutil, hace que el contenido se sienta como impreso
- Comunica permanencia, peso editorial, no efímero
- El acento naranja vibra más sobre crema que sobre blanco

### Reglas de uso del color

✓ **El naranja `#FF3A20` solo en:**

- Underline animado del CTA principal (sutil, en hover)
- 1 palabra clave en el quote del hero (ej. *"devolvemos el 50%"*)
- Indicador de "1 slot disponible" en escasez (un punto pequeño + texto)
- Hover state de links de navegación

✗ **El naranja NUNCA en:**

- Backgrounds completos de secciones
- Texto de párrafo largo
- Bordes de cards
- Iconos decorativos sin función
- Botones primarios (los botones primarios son negros con texto crema)

✓ **Los CTAs primarios:**

- Background: `--novo-black`
- Texto: `--novo-cream`
- Border-radius: 4px (no más, sutil)
- Padding: 14px 28px
- Tipografía: 15px, peso 500, tracking 0.01em
- Hover: background `--novo-charcoal`, transition 200ms ease

---

## Tipografía

### Las dos fuentes del sistema

**Display + Body en tensión deliberada.** Una con personalidad editorial, otra neutra y técnica.

| Rol | Fuente | Por qué |
|---|---|---|
| **Display** (H1, H2, números grandes) | **PP Editorial New** (alt: Tiempos Headline, Söhne Buch) | Serif de bajo contraste, peso editorial. Da el tono "revista de negocios". |
| **Body** (párrafos, UI) | **Inter** (alt: Söhne, GT America) | Sans neutra, gran legibilidad. Hace que el serif del display brille por contraste. |
| **Mono** (cifras técnicas, eyebrows, código) | **JetBrains Mono Light** o **ABC Diatype Mono** | Para fechas, números de sección, eyebrows. Usado con extrema moderación. |

PP Editorial New es gratuita para uso comercial vía [Pangram Pangram](https://pangrampangram.com/products/editorial-new). Es la diferencia visual entre "una landing más" y "una firma con criterio editorial".

### Escala tipográfica

```
Display XL    72px    -0.04em    Hero H1 (desktop)
Display L     56px    -0.03em    H1 secciones, números grandes
Display M     42px    -0.025em   H2 de sección
Display S     32px    -0.02em    H3, sub-secciones

Body XL       21px    -0.005em   Hero sub, lead paragraphs
Body L        18px    -0.005em   Párrafos importantes
Body M        16px     0         Párrafos default
Body S        14px     0         Captions, secondary text

Mono S        13px    0.04em     EYEBROWS, numbering
Mono XS       11px    0.08em     Tags, microcopy de marca
```

### Tracking en desktop vs. mobile

En mobile, todas las display reducen tamaño pero **mantienen el tracking negativo**. Es lo que hace que se sigan viendo editoriales y no "pequeñas y comprimidas".

```
Display XL mobile: 48px / -0.035em
Display L mobile:  40px / -0.03em
Display M mobile:  30px / -0.02em
Display S mobile:  24px / -0.015em
```

### Reglas tipográficas

✓ Headlines en serif display, con tracking negativo, sin punto final
✓ Body en Inter, line-height 1.55, max-width 65ch (lectura cómoda)
✓ Mono para eyebrows en UPPERCASE con letterspacing 0.08em
✓ Quotes en serif display tamaño grande, sin comillas decorativas (la jerarquía las hace innecesarias)

✗ NUNCA mezclar serif y sans en el mismo headline
✗ NUNCA bold en mono
✗ NUNCA italic en headlines (las display ya tienen tensión propia)
✗ NUNCA all-caps en headlines (solo en eyebrows mono)

---

## Sistema de espaciado

Spacing scale en múltiplos de **4px**, con uso preferente de los valores siguientes:

```
4    8    12   16   20   24   32   40   48   64   80   96   128   160
```

### Espacios entre secciones

- Entre secciones grandes: **128px desktop / 80px mobile**
- Entre subsecciones: **64px desktop / 48px mobile**
- Entre párrafos: **20–24px**
- Entre headline y body: **24–32px**

Premium se logra con espacios grandes. La regla de oro: si dudás entre dos valores, **siempre el más grande**.

### Padding de contenedores

- Container max-width: **1280px** (con padding lateral de 32px desktop / 20px mobile)
- Container narrow (para texto y argumentación): **720px max-width** (centrado)
- Section padding vertical: **96–128px desktop / 64–80px mobile**

---

## Sistema de bordes

✓ Borders finos (1px) en color `--novo-line` o `--novo-charcoal` en 0.2 opacity
✓ Border-radius mínimo: 4px en botones, 6px en cards, 0px en líneas separadoras
✗ NUNCA sombras pesadas
✗ NUNCA glow effects
✗ NUNCA gradientes (excepto sutiles para fondos de hero, max 5% de variación)

---

## Componentes clave

### Botón primario

```
background:    var(--novo-black)
color:         var(--novo-cream)
padding:       14px 28px
border-radius: 4px
font:          15px / 500 / -0.005em Inter
letter-spacing: 0.01em

:hover {
  background: var(--novo-charcoal)
  transform:  translateY(-1px)
  transition: all 200ms ease-out
}
```

### Botón secundario / link

```
background:    transparent
color:         var(--novo-black)
border-bottom: 1px solid var(--novo-black)
padding:       4px 0
font:          15px / 500 / -0.005em Inter

:hover {
  border-bottom-color: var(--novo-accent)
  color:               var(--novo-accent)
  transition:          all 200ms ease-out
}
```

### Eyebrow

```
font:          13px / 500 mono
letter-spacing: 0.08em
text-transform: uppercase
color:         var(--novo-graphite)
margin-bottom: 24px
```

Ejemplo:
```
PROGRAMA · 2 EMPRESAS POR TRIMESTRE
```

### Card sobria

```
background:    var(--novo-white) o var(--novo-cream-50)
border:        1px solid var(--novo-line)
border-radius: 6px
padding:       40px (desktop), 28px (mobile)
```

Sin sombras. La separación viene del border, no del shadow.

### Quote / pull-quote

```
font:          var(--display-l) (56px serif)
color:         var(--novo-black)
border-left:   2px solid var(--novo-accent)
padding-left:  32px
max-width:     720px
line-height:   1.2
```

Sin comillas decorativas. La jerarquía y el border-left lo señalan.

### Tabla

```
border-top:    1px solid var(--novo-charcoal)
border-bottom: 1px solid var(--novo-charcoal)
th:            font 14px mono uppercase, padding 16px, border-bottom 1px solid var(--novo-line)
td:            font 16px Inter, padding 20px 16px, border-bottom 1px solid var(--novo-line)
hover row:     background var(--novo-cream-50)
```

---

## Sistema de íconos

✗ NO usar Lucide, Feather, ni los típicos icon-sets de SaaS
✓ Sí usar:

- **Glifos tipográficos** para flechas y separadores: → ← ↗ · — ⇢
- **Numerales con tracking** para listas (01 · 02 · 03 en mono)
- **Si necesitás un ícono real**, usar [Phosphor Duotone](https://phosphoricons.com/) en peso "thin" o "light", siempre monocromo

La regla: **si dudás si poner un ícono o no, no lo pongas**. El espacio negativo comunica más que el ícono.

---

## Tono de voz

### Los 5 principios del copy

1. **Precisión sobre abstracción.** Si podés decir "12 semanas", no digas "un tiempo razonable". Si podés decir "el 50%", no digas "una parte importante".

2. **Verbos en presente y en activa.** "Trabajamos dentro de tu empresa." NO: "Acompañamos procesos de transformación."

3. **Honestidad en lo que no hacemos.** Decir explícitamente "lo que NO incluye" eleva la percepción de lo que SÍ. Premium hace límites claros.

4. **Una idea por párrafo.** Si un párrafo tiene 2 ideas, partilo. Cada idea respira mejor en su propio bloque.

5. **Cero motivación, cero épica.** Nada de "lográ", "potenciá", "transformá tu visión". Esos verbos los usan los infoproductos. Nosotros decimos qué hacemos, no cómo se sienten cuando lo hacemos.

### Vocabulario propio (úsalo)

- "Programa" (no "curso", no "consultoría", no "intervención")
- "Trabajamos dentro de tu empresa" (no "acompañamos", no "facilitamos")
- "Criterio de éxito firmado" (no "objetivos compartidos")
- "Devolvemos el 50%" (no "garantía", no "money back")
- "Resultado concreto" (no "transformación", no "impacto")
- "12 semanas" (no "tres meses", da más urgencia)
- "Diagnóstico" (no "call de descubrimiento", no "consulta")
- "Los fundadores trabajan con tu equipo" (no "asignamos un equipo")

### Vocabulario prohibido

✗ Sinergia · holístico · disruptivo · innovador · partner · journey · viaje · ecosistema · empoderar · potenciar · lograr · transformá · accioná · talento · líderes · best-in-class · world-class · cutting-edge

### El test de la primera línea

Toda primera línea de sección tiene que poder existir sin la siguiente. Si la primera línea no se sostiene sola, está mal escrita.

Ejemplo malo:
> "Estamos en una era donde la innovación es clave para sobrevivir en mercados altamente competitivos."

Ejemplo bueno:
> "Trabajamos un solo track por programa. La razón es simple: profundidad."

---

## Fotografía y arte

### Fotografía de fundadores

✗ Fotos con fondo blanco recortado tipo retrato corporativo
✗ Fotos sonriendo a cámara con saco azul
✗ Fotos con manos cruzadas o brazos sobre pecho

✓ Fotos editoriales: 3/4, mirando a un lado, en un entorno con textura (oficina con luz natural, pared con material visible)
✓ Composición B&W o muy desaturada (más permanencia, menos "blog post")
✓ Una foto principal de cada fundador a 800x1000px mínimo, retrato, con respiración alrededor

### Fotografía de equipo / sesiones

Si querés mostrar el trabajo:

✓ Fotos de las sesiones reales, pizarrones llenos, posits, equipos del cliente trabajando
✓ Crops que no muestran caras de personas que no autorizaron (premium = discreción)
✓ Aspect ratio 4:5 o 3:4 (vertical), no panorámicas

### Sin fotografía de stock

Nunca. Ninguna excepción. Es mejor no tener fotografía que tener fotos de stock.

---

## Logo

(No tengo acceso al logo actual fuera del archivo .png referenciado, pero las reglas generales aplican:)

✓ El logotipo siempre en `--novo-black` sobre fondo claro o `--novo-cream` sobre fondo oscuro
✓ Padding mínimo alrededor del logo: 24px en todos los lados
✓ Tamaño mínimo: 32px de alto
✗ Nunca el logo en naranja
✗ Nunca el logo con efectos (sombra, glow, gradient)

Si el logo actual tiene una versión muy "agencia" (gradient, sombras, colores múltiples), recomiendo simplificar a una versión monocromática y conservar la versión completa solo para usos específicos.

---

## Aplicación práctica — ejemplo de un módulo

Para que veas cómo se aplica todo el sistema en un módulo real, este sería un hero completo construido con los tokens del manual:

```html
<section class="hero">
  <span class="eyebrow">
    PROGRAMA ESTRATÉGICO · 2 EMPRESAS POR TRIMESTRE
  </span>

  <h1 class="display-xl">
    Esto no es consultoría.
    <br>
    Y tampoco una capacitación.
  </h1>

  <p class="body-xl">
    Trabajamos dentro de tu empresa durante 12 semanas
    con un criterio de éxito firmado el día uno.
    Si al cierre no se cumple,
    <span class="accent">devolvemos el 50% de la inversión.</span>
  </p>

  <div class="cta-row">
    <button class="cta-primary">Agendar diagnóstico estratégico</button>
    <a class="cta-secondary">Ver cómo trabajamos →</a>
  </div>
</section>
```

```css
.hero {
  background: var(--novo-cream);
  padding: 160px 32px 128px;
  max-width: 1280px;
  margin: 0 auto;
}

.eyebrow {
  font: 13px/1 'JetBrains Mono', monospace;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--novo-graphite);
  margin-bottom: 32px;
  display: block;
}

.display-xl {
  font: 72px/1.05 'PP Editorial New', serif;
  letter-spacing: -0.04em;
  color: var(--novo-black);
  max-width: 16ch;
  margin-bottom: 40px;
}

.body-xl {
  font: 21px/1.55 'Inter', sans-serif;
  letter-spacing: -0.005em;
  color: var(--novo-charcoal);
  max-width: 56ch;
  margin-bottom: 48px;
}

.body-xl .accent {
  color: var(--novo-accent);
  font-weight: 500;
}

.cta-row {
  display: flex;
  gap: 24px;
  align-items: center;
}
```

Eso se siente premium. Es la diferencia entre "Vercel pricing page" (alta densidad visual con muchos elementos) y "Stripe Press" (muy poco contenido, perfectamente jerarquizado).

---

*Continuar leyendo: `04-landing-principal.md`*
