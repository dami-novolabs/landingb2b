# Auditoría del sitio actual

> URL auditada: `v0-novo-labs-design-system.vercel.app`
> Fecha: 2026-05-31
> Metodología: sección por sección, con puntaje, diagnóstico específico y mejora concreta.

---

## Cómo leer esta auditoría

Para cada sección anoto:

- **Puntaje (1–10)**: qué tan cerca está hoy del nivel que requiere un programa de $40K para CEOs de empresas $5M+
- **Qué hace bien**: hay que reconocerlo antes de cambiarlo
- **Qué la rompe**: lo específico, no genérico
- **Mejora concreta**: el cambio quirúrgico
- **Decisión de IA**: queda en la landing principal, va a página de track, o se elimina

Nivel de exigencia: comparo contra firmas como **a16z, Stripe Press, Linear, Vercel, Equal Parts (la consultora de Brian Norgard), New Mountain Capital, Founders Fund**. No contra agencias de marketing ni cursos.

---

## Resumen del puntaje global

| Sección | Puntaje | Decisión |
|---|---|---|
| Hero / Above the fold | 4/10 | Reescribir |
| Pre-credenciamiento (fundadores en hero) | 5/10 | Mantener concepto, mejorar ejecución |
| Confían en nosotros (logos) | 6/10 | Mejorar contexto |
| ¿Te suena alguna de estas situaciones? (PAS) | 7/10 | Mantener — reducir |
| Lo que obtenés al cierre (01/02/03) | 4/10 | Eliminar / convertir en casos |
| El programa existe en dos versiones (cards) | 5/10 | Convertir en switcher de navegación a páginas |
| Qué incluye el programa | 5/10 | Mover a páginas de track |
| Entregables incluidos | 5/10 | Mover a páginas de track |
| Por qué Novo Labs es diferente (tabla comparativa) | 7/10 | Mantener simplificado en landing, expandir en tracks |
| 8 años construyendo (manifiesto) | 6/10 | Reescribir + mover arriba |
| Partners & Advisors | 6/10 | Curar más, jerarquizar |
| Pricing | 4/10 | Mover a páginas de track |
| FAQs | 5/10 | Dividir entre landing y tracks |
| Solo podemos correr 2 programas a la vez (escasez) | 8/10 | Mantener — mover arriba |
| CTA final | 3/10 | Reemplazar mailto por booking embedido |

**Promedio: 5.4 / 10** → consistente con la autoevaluación del fundador (3/10) si se penaliza más el efecto global de incoherencia entre secciones.

---

## Sección 1 — Hero / Above the fold

### Lo que dice hoy

> Eyebrow: *"Para dueños de empresas que ya probaron con consultoras y capacitaciones — y los resultados no estuvieron a la altura."*
>
> H1: *"Transformá un desafío estratégico en un resultado concreto en 90 días"*
>
> Sub: *"Un programa de 12 semanas donde trabajamos dentro de tu empresa — con tu equipo, sobre un desafío real que vos elegís."*
>
> CTA: "Hablar con los fundadores"
>
> Card de fundadores: foto + nombres + "1 slot disponible ahora mismo"

### Puntaje: 4/10

### Qué hace bien

- El eyebrow descalifica al lead equivocado (bien para premium)
- "Trabajamos dentro de tu empresa" es un anchor diferencial bueno
- Las fotos de los fundadores arriba transmiten que ellos son el producto
- "1 slot disponible" es escasez real

### Qué la rompe

- **El H1 es genérico**. "Transformá un desafío estratégico en un resultado concreto" lo podría firmar BCG, Endeavor o una consultora de innovación regional. Para un CEO que ya leyó 200 landings, no produce *pattern interrupt*.
- **El sub repite lo que dice el H1**. "Programa de 12 semanas" / "Programa donde trabajamos dentro" → redundante.
- **La garantía no aparece arriba**. La frase "si no hay resultado, devolvemos el 50%" es el activo de marketing más diferenciador y está enterrada en pricing.
- **Falta de jerarquía**. Eyebrow, H1, sub, card de fundadores, CTA, "+8 años…", segunda foto. Hay 6 elementos compitiendo por atención visual sin un *focal point*.
- **El "1 slot disponible ahora mismo" como microcopy** se siente plantilla de Gumroad. Premium hace escasez sin parecer infoproducto.

### Mejora concreta — versión propuesta

```
Eyebrow:   PROGRAMA ESTRATÉGICO · 2 EMPRESAS POR TRIMESTRE
H1:        Esto no es consultoría.
           Y tampoco una capacitación.
Sub:       Trabajamos dentro de tu empresa durante 12 semanas
           con un criterio de éxito firmado el día uno.
           Si al cierre no se cumple, devolvemos el 50% de la inversión.
CTA1:      Agendar diagnóstico estratégico  →
CTA2:      Ver cómo trabajamos              ↓ (scroll)
```

**Por qué funciona:**

- El H1 es un *pattern interrupt*: contradice las dos categorías mentales con las que el CEO va a clasificar el sitio en el primer segundo.
- El sub mete la garantía en hero. Es lo más caro de comunicar y lo más caro de copiar.
- "Programa estratégico · 2 empresas por trimestre" como eyebrow incorpora escasez sin sonar a infoproducto.
- El CTA secundario (scroll-to-content) reduce fricción para el que no está listo para agendar.

---

## Sección 2 — Pre-credenciamiento (fotos de fundadores)

### Lo que dice hoy

> Card al lado del hero con fotos de Tomás y Damián + texto "+8 años Resolviendo problemas desde cero con tecnología" + "1 slot disponible ahora mismo"

### Puntaje: 5/10

### Qué hace bien

- La señal "los fundadores son el producto" se entiende
- Las fotos humanizan rápido

### Qué la rompe

- Las fotos son pequeñas y compiten con el headline
- "+8 años" como cifra sin contexto se siente débil. ¿Qué hicieron en esos 8 años?
- La leyenda "Trabaja directo con los fundadores. Sin consultores junior. Sin subcontratación." es buena pero está demasiado abajo

### Mejora concreta

Mover el pre-credenciamiento de "card al costado" a **una banda sobria debajo del hero**, una sola línea:

```
"Trabajan directo con Tomás Volonté y Damián Sánchez.
 8 años. 72 productos digitales construidos. 360+ programas facilitados."
```

Las fotos de los fundadores aparecen más grandes y curadas en una sección dedicada *"Quiénes trabajan contigo"* más abajo. Arriba: nombres, números, peso. Abajo: caras y bios.

---

## Sección 3 — "Confían en nosotros" (carrusel de logos)

### Lo que dice hoy

> Carrusel infinito con Aerolab, Baikal, Cyberclick, Simball, ROXperience, Homa Games, Coorva, Possumus, Serquo, Intuition Machines

### Puntaje: 6/10

### Qué hace bien

- Los logos son reales y de empresas reconocibles en la región
- Patrón estándar y funcional

### Qué la rompe

- "Confían en nosotros" es ambiguo: ¿son clientes del programa B2B, advisors, alumni del B2C, o relaciones de Aerolab?
- En el sitio actual, después del hero ves logos antes de saber qué hace la empresa concretamente
- El carrusel infinito es un patrón que comunica *"tenemos muchos"* — premium comunica *"tenemos los correctos"*

### Mejora concreta

Reemplazar carrusel por **grilla estática de 6–8 logos curados** con etiqueta clara:

```
"Han confiado en el método o son parte del ecosistema Novo Labs"
```

Si hay 1–2 logos con un caso específico (ej. Aerolab donde Tommy + Agustín tienen relación), permitir click para ver mini-caso. El resto en grilla limpia, sin animación.

---

## Sección 4 — ¿Te suena alguna de estas situaciones? (PAS)

### Lo que dice hoy

Cuatro tarjetas:
1. Contrataron una consultora. Recibieron un informe.
2. Invirtieron en capacitación. El equipo no aplicó nada.
3. Intentaron resolverlo internamente. Murió en el tercer mes.
4. Ningún proveedor definió qué era "éxito".

Cada tarjeta termina con una "moraleja" en negrita.

### Puntaje: 7/10

### Qué hace bien

- **Esta es la sección más fuerte del sitio.** Las 4 situaciones son específicas, no genéricas. El CEO se reconoce.
- Las moralejas en negrita son citables.
- La estructura (3 situaciones de error → conclusión) es PAS bien ejecutado.

### Qué la rompe

- **Es demasiado larga.** Cada tarjeta tiene 3 párrafos. El CEO lee la primera, intuye las otras 3 y se aburre.
- **Las 4 tarjetas son visualmente idénticas**. No hay jerarquía de lectura.
- **El título "¿Te suena alguna de estas situaciones?"** es coloquial. En premium funciona mejor: *"Lo que ya intentaron y por qué no resolvió el problema"*.

### Mejora concreta

Mantener concepto, comprimir contenido:

- Reducir cada tarjeta a **1 párrafo de 3 líneas + la moraleja en grande**
- Cambiar tipografía: la moraleja en serif display, el cuerpo en sans pequeño
- **Pasar de 4 cards iguales a 1 card grande + 3 menores**: el problema que cada cliente más reconoce arriba, las otras 3 secundarias

**Decisión de IA**: queda en landing principal. Es PAS de la firma, no del programa específico.

---

## Sección 5 — Lo que obtenés al cierre del programa (01/02/03)

### Lo que dice hoy

> 01 — Algo real, no un informe
> 02 — Un equipo que puede repetir el proceso solo
> 03 — Decisiones con datos antes de invertir

Tres bloques con números grandes 01, 02, 03 y descripciones de 5–6 líneas.

### Puntaje: 4/10

### Qué hace bien

- El concepto "no un informe" es el mensaje correcto

### Qué la rompe

- **El patrón 01/02/03 está sobreutilizado en 2025**. Es el patrón visual estándar de infoproducto. Lo usan Cursos.com, Hotmart, Tikker, etc.
- **Las 3 promesas son agnósticas**: "Algo real" → ¿qué cosa específicamente? La respuesta es distinta para Innova vs. Opera.
- **Falta evidencia**. Promesas en abstracto en página de $40K no funcionan.

### Mejora concreta

**Eliminar de la landing principal**. Esta información tiene que vivir en cada página de track, donde puede ser específica:

- En `/innova`: "Vas a salir con una oferta validada por clientes reales con compromiso de compra"
- En `/opera`: "Vas a salir con agentes implementados operando un proceso que antes consumía X horas/semana"

En la landing principal, reemplazar por **una sección de "Casos"** (aunque sean 1–2 al principio). Mejor 1 caso con un número específico que 3 promesas en abstracto.

---

## Sección 6 — El programa existe en dos versiones (cards Opera/Innova)

### Lo que dice hoy

Dos cards lado a lado:
- OPERA: "Escalá sin contratar. IA que trabaja por tu equipo."
- INNOVA: "Lanzá al mercado. Con evidencia, no con supuestos."

Cada card tiene: para quién, duración, CTA "Hablemos de…"

### Puntaje: 5/10

### Qué hace bien

- Separar los dos productos claramente es lo correcto
- "Escalá sin contratar" es un hook fuerte para Opera
- "Con evidencia, no con supuestos" es un hook fuerte para Innova

### Qué la rompe

- **Las dos cards están al medio de la página, después de mucha información agnóstica.** Para cuando el lector llega acá, ya leyó argumentos genéricos que aplicaban a ambos. Eso diluye la diferenciación.
- **Los CTAs "Hablemos de Opera/Innova" llevan al mismo scroll**, no a páginas distintas. Eso es exactamente lo que está rompiendo la experiencia.
- **La diferenciación se queda en titular**. No hay un sub que defina con precisión a quién va dirigido cada track.

### Mejora concreta — la decisión arquitectónica clave

**Las dos cards dejan de ser una sección dentro de la landing. Se convierten en el corazón de la landing y en la puerta de entrada a las páginas de track.**

```
Sección "Dos caminos. Uno por empresa." (justo después del hero + pre-credenciamiento)

[CARD INNOVA]                      [CARD OPERA]
Para empresas que                  Para empresas que
quieren lanzar.                    quieren escalar.

Innova                             Opera
Validamos demanda real             Construimos infraestructura
antes de que tu equipo             de IA que multiplica
construya un nuevo producto        capacidad sin sumar headcount.
o línea de negocio.

→ Conocer Innova                   → Conocer Opera
```

Click → página dedicada.

Esta sección no detalla cada track. Solo identifica al lector con su track y lo manda a la página correcta. Es navegación, no venta.

---

## Sección 7 — Qué incluye el programa (6 items con check)

### Puntaje: 5/10

### Qué la rompe

- **Esta información no aplica igual a Innova que a Opera**: las "12 sesiones en vivo" significan cosas distintas en cada track. Mantenerla genérica la hace abstracta.
- Hay errores tipográficos visibles ("enoezar", "continnuar"). En premium, 1 erratum = -$5K de percepción de precio.
- "Lo que NO incluye" es brillante posicionamiento y queda escondido al final.

### Mejora concreta

**Mover a páginas de track, no a landing**. Cada track describe su propio "qué incluye" con lenguaje específico:

- Innova: entrevistas con clientes, experimentos de demanda, oferta validada
- Opera: mapeo de procesos, arquitectura de IA, implementación de agentes

"Lo que NO incluye" se queda en cada página, **en grande**, con tipografía contraintuitiva — porque marca el límite y eso es premium.

---

## Sección 8 — Entregables incluidos

### Lo que dice hoy

3 entregables con valor estimado: Sistema operativo propio ($15K), Playbook institucional ($8K), Caso de éxito documentado ($3K)

### Puntaje: 5/10

### Qué la rompe

- **"Valor estimado USD X" es lenguaje de stack value (Hormozi)**. Funciona en infoproducto. En premium hace ruido — el CEO no necesita que le justifiquen el precio sumando valores arbitrarios.
- "Sistema operativo propio" suena igual en Innova que en Opera. Pero en Innova es un *playbook de validación*, en Opera es *infraestructura de agentes*. Son cosas materialmente distintas.

### Mejora concreta

- **Mover a páginas de track** con descripción específica del entregable de ese track
- **Eliminar "valor estimado USD"**. Premium describe el entregable, no su precio simulado.
- Mostrar los entregables como **artefactos**: ej. captura del sistema, scan del playbook impreso, captura del caso. Premium muestra los outputs reales, no los pinta.

---

## Sección 9 — Por qué Novo Labs es diferente (tabla comparativa)

### Puntaje: 7/10

### Qué hace bien

- La tabla es clara y completa
- Compara contra las 3 alternativas reales (consultora, capacitación, hacerlo solo)
- La columna de "su éxito atado al tuyo" en la última fila es el cierre fuerte

### Qué la rompe

- Las columnas son texto plano. En premium, las tablas de comparación pueden ser **dataviz**: barras, escalas, o íconos curados, no solo ✓/✗.
- "Su éxito atado al tuyo" como criterio merece su propia sección, no quedar como la fila final
- En mobile, la tabla colapsa a un grid vertical que pierde el efecto comparativo

### Mejora concreta

- **Mantener en landing pero reducir a 5–6 filas**, con las más diferenciadoras
- En cada página de track, expandir la tabla con criterios específicos
- Diseño: bordes finos, mucho espacio, sin colores de relleno. Solo texto y separadores
- Variante mobile: collapse a tabs (Novo Labs / Consultora / Capacitación / Solo) con 1 columna por vez

---

## Sección 10 — "8 años construyendo desde cero" (manifiesto)

### Puntaje: 6/10

### Qué hace bien

- La cifra "72 productos digitales" es específica y memorable
- "18 ediciones · 360+ proyectos · 180 activos · 52.5% success rate" son cifras que sostienen autoridad
- El relato Aerolab → Startup School → B2B es coherente

### Qué la rompe

- Está demasiado abajo en el sitio. Para un CEO premium, esta sección debería estar más cerca del hero — la autoridad de los fundadores es uno de los activos de mayor peso.
- "8 años validando con empresas reales" se solapa conceptualmente con "+8 años" del hero. Repetido.
- El relato termina en "innovación interna con método" — pero no menciona qué resultados concretos consiguieron los 180 que siguen activos. Falta el cierre.

### Mejora concreta

- **Mover justo después del hero**: el orden lógico es (1) propuesta, (2) quiénes la entregan, (3) cómo se sabe que funciona.
- Convertir las 3 cifras finales en una **banda numérica**, no texto corrido:

```
72                  18                 360+              52.5%
PRODUCTOS DIGITALES EDICIONES DE       PROYECTOS         SIGUEN ACTIVOS
CONSTRUIDOS DESDE   STARTUP SCHOOL    ACOMPAÑADOS       Y FACTURANDO
CERO (2017–2023)    (2023–2025)
```

Las cifras grandes, en serif display, tracking negativo, sobre fondo neutro. Es el patrón de Stripe Atlas, Vercel y a16z. Lee como autoridad real.

---

## Sección 11 — Partners & Advisors

### Puntaje: 6/10

### Qué hace bien

- Los advisors son reales y reconocibles (Alex Dantart, David Tomás, Agustín Linenberg, etc.)
- "No solo asesoran — acompañan, abren puertas y tienen piel en el juego" es buen copy

### Qué la rompe

- **Los 8 advisors están todos al mismo nivel visual**. En realidad algunos importan más que otros (Linenberg de Aerolab tiene relación directa). Premium jerarquiza.
- Los links a LinkedIn están ahí pero compiten visualmente con el nombre y la descripción

### Mejora concreta

- Curar a **3 advisors destacados con foto grande + cita** + lista de "Otros advisors" con grid pequeño y discreto
- Mover la lista completa a una página de **/equipo** o **/about** si querés profundidad
- Es información de respaldo, no de venta — pertenece más a landing principal que a páginas de track

---

## Sección 12 — Pricing (USD 25.000 base + garantía)

### Puntaje: 4/10

### Qué la rompe

- **El precio en landing principal es ruido**. El CEO premium no decide por precio enumerado, decide por encaje. El precio debería aparecer solo en páginas de track, después de la propuesta específica.
- "USD 25.000 base" cuando el sitio también ofrece DFY a USD 40.000 produce confusión. ¿Cuál es el precio real?
- "50% al inicio · 50% en semana 8, después de ver el trabajo. Si no hay resultado, devolvemos el segundo tramo" → este texto es ORO y se pierde como fine print abajo del precio.

### Mejora concreta

- **Eliminar pricing de landing**
- En cada página de track, sección dedicada a **"Inversión + estructura de pago"** con:
  - Precio por modalidad (DWY / DFY) si decidís comunicarlo, o "desde USD X" + "definido en el diagnóstico"
  - Estructura 50/50 con la garantía en grande
  - Frase ancla: *"Cobramos la segunda mitad cuando ya hay algo construido. Si no se cumple el criterio de éxito firmado, devolvemos el 50%."*

---

## Sección 13 — FAQs

### Puntaje: 5/10

### Qué hace bien

- Las 6 preguntas son las correctas (consultora, tiempo, industria, desafío equivocado, pago anticipado, remoto)
- Las respuestas son sustantivas, no superficiales

### Qué la rompe

- **Acordeón estándar**. En premium, las FAQ pueden ser de lectura abierta o tener mejor diseño tipográfico.
- Algunas respuestas son largas: el CEO no lee 2 párrafos cerrados. Necesita el primer ancla en bold.

### Mejora concreta

- En landing: 4 FAQs estructurales (qué tipo de empresa, cuál es el compromiso, cómo funciona la garantía, cómo es el proceso de selección)
- En cada track: FAQs específicas (tiempo del equipo, perfil técnico requerido, qué pasa si el desafío es el equivocado, etc.)
- Diseño: pregunta en grande con serif, respuesta debajo en sans pequeña. Sin acordeón. El CEO lee lo que le interesa, salta lo que no.

---

## Sección 14 — Solo podemos correr 2 programas a la vez (escasez)

### Puntaje: 8/10

### Qué hace bien

- **Es el mejor activo de marketing del sitio**. Una restricción real, comunicada con honestidad, que justifica el precio y crea urgencia.
- El reasoning ("destruiría el único diferenciador que importa") es sólido y creíble.

### Qué la rompe

- Está al final del sitio. Su impacto se subutiliza.

### Mejora concreta

- **Llevar la escasez al eyebrow del hero**: "2 EMPRESAS POR TRIMESTRE"
- Mantener esta sección al final como **cierre antes del CTA**, con el reasoning completo
- En páginas de track, repetir la mención de escasez (no la sección completa) cerca del CTA final

---

## Sección 15 — CTA final (mailto)

### Puntaje: 3/10

### Qué la rompe

- `mailto:hola@novolabs.co` para un programa de $40K es señal de "no estamos tan ocupados".
- Un calendario embedido transmite: "tenemos el sistema para recibir leads de este nivel, agendá un slot ahora".
- "Sin compromiso. La sesión de diagnóstico es gratuita y dura 90 minutos" es bueno pero está perdido al final.

### Mejora concreta

- Booking embedido (Cal.com / Savvycal / Calendly) con disponibilidad real
- Sub-CTA: "Diagnóstico estratégico. 90 minutos. Sin compromiso."
- Mostrar la próxima ventana disponible: *"Próxima ventana: martes 10 de junio"*
- Después de agendar: email de confirmación con un asset previo (PDF de los 4 errores comunes), para empezar la relación antes de la llamada

---

## Patrones cruzados que afectan toda la página

Más allá de cada sección, hay 5 patrones que cruzan toda la auditoría y bajan el puntaje global:

### Patrón 1 — Densidad visual de agencia, no de firma

Toda la página tiene secciones con cards iguales, fondos coloridos, iconografía repetida. Premium se ve "vacío" — más espacio negativo, menos elementos por sección, tipografía más grande, paleta más restringida.

### Patrón 2 — El acento naranja `#FF3A20` está sobreutilizado

El naranja es buen color de marca pero cuando aparece en muchos lugares pierde su función de acento. En premium, el color de marca aparece en **menos del 5% de la superficie visual**: pequeños highlights, un underline en un CTA, una palabra clave en un quote.

### Patrón 3 — Falta voz de autor

El copy actual es competente pero anónimo. Premium tiene un narrador detrás — frases que dejan claro quién escribió esto. Cuando entrás a Equal Parts, a Pirate Ship, a la web de Naval Ravikant, sentís a una persona pensando. Aquí no.

### Patrón 4 — No hay artefactos (proof, no claims)

Ninguna sección muestra el output real de un programa: ni una pantalla de un agente construido, ni una página del playbook entregado, ni un dashboard del proceso medido. Premium muestra los artefactos. Hace que el cliente vea con qué se queda.

### Patrón 5 — Errores tipográficos visibles

Detectados: "enoezar", "continnuar", "esta listo". Un programa de $40K no puede tener errores ortográficos. Cada uno baja la percepción de precio en cientos de dólares.

---

## Cierre — los 3 cambios de mayor leverage

Si solo tuvieras tiempo para hacer 3 cambios:

1. **Separar la landing en 3 páginas** (landing + /innova + /opera). Resuelve el 60% del problema.
2. **Reescribir hero + mover garantía y escasez arriba**. Resuelve el 20% adicional.
3. **Eliminar pricing, 01/02/03 y errores tipográficos**. Resuelve el 10% adicional.

El último 10% es brand manual + animaciones, cubierto en los siguientes archivos.

---

*Continuar leyendo: `02-arquitectura-informacion.md`*
