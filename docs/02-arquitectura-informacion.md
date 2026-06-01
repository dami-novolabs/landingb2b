# Arquitectura de Información

> Cómo se divide el contenido entre la landing principal, la página de Innova y la página de Opera. La pregunta de fondo: *qué tiene que hacer cada página y qué información necesita para hacerlo*.

---

## Principio rector

**Cada página tiene un trabajo. Solo uno.**

| Página | Trabajo | Buyer mental state al entrar |
|---|---|---|
| **Landing principal** (`/`) | Convencer de que Novo Labs es **una firma que vale la pena considerar**. NO vende programas. | "Me recomendaron Novo Labs. ¿Qué hacen?" |
| **Página Innova** (`/innova`) | Cerrar al CEO/VP que ya decidió que su problema es **lanzar algo nuevo con evidencia**. | "Quiero lanzar X y no quiero quemar plata." |
| **Página Opera** (`/opera`) | Cerrar al CEO/COO que ya decidió que su problema es **escalar la operación con IA**. | "El equipo no da más. Tengo que automatizar." |

Si una pieza de información sirve los tres trabajos, va en la landing.
Si sirve solo al Innova, va en `/innova`.
Si sirve solo al Opera, va en `/opera`.
Si no sirve a ninguno, no va.

---

## El mapa visual

```
                            ╔════════════════════════╗
                            ║   LANDING PRINCIPAL    ║
                            ║         (/)            ║
                            ╚════════════════════════╝
                                       │
                  ┌────────────────────┼────────────────────┐
                  │                                         │
                  ▼                                         ▼
        ╔══════════════════╗                     ╔══════════════════╗
        ║   /innova        ║                     ║   /opera         ║
        ║   Track Innova   ║                     ║   Track Opera    ║
        ╚══════════════════╝                     ╚══════════════════╝
                  │                                         │
                  └──────────────────┬──────────────────────┘
                                     │
                                     ▼
                            ╔════════════════════════╗
                            ║   Diagnóstico (CTA)    ║
                            ║   (Cal.com embed)      ║
                            ╚════════════════════════╝

Páginas auxiliares (linkeadas desde footer):
- /equipo       → bios extendidas + advisors completos
- /metodo       → el SVP™ adaptado al B2B (página corporativa del método)
- /casos        → biblioteca de casos (cuando existan)
```

---

## Qué va en cada página

### Landing principal (`/`)

Job to be done: **"Decirle al CEO en 60 segundos quiénes somos, qué hacemos y por qué deberíamos hablar."**

Información que SÍ va:

1. **Identidad de la firma**: qué es Novo Labs, qué problema resuelve, en qué tipo de empresa
2. **Pre-credenciamiento de los fundadores**: quiénes la operan
3. **Posicionamiento diferencial**: por qué no somos consultora ni capacitación
4. **Los dos caminos**: Innova / Opera, identificación rápida
5. **El método (alto nivel)**: el SVP™ aplicado al B2B en una vista de 60 segundos
6. **Quiénes confían**: logos curados + advisors destacados
7. **Las cifras de autoridad**: 8 años, 72 productos, 360+ proyectos, 52% activos
8. **Escasez**: 2 empresas por trimestre
9. **CTA**: agendar diagnóstico

Información que NO va (se mueve a páginas de track):

- ❌ Detalle de qué incluye cada programa
- ❌ Entregables específicos
- ❌ Pricing y modalidades
- ❌ FAQs específicas de cada track
- ❌ Casos detallados (a lo sumo: 1 logo + cita corta, click → caso completo)
- ❌ Metodología semana por semana

---

### Página Innova (`/innova`)

Job to be done: **"Convencer al CEO/VP que quiere lanzar de que somos los que mejor lo van a acompañar."**

Estructura:

1. **Hero específico de Innova**: el dolor de lanzar sin evidencia + el resultado prometido
2. **Síntomas de compra**: "Si te sentís identificado con alguno de estos…"
3. **Por qué la mayoría de los lanzamientos corporativos fracasan**: relato corto, 3 razones
4. **Cómo trabajamos en Innova**: las 3 fases del SVP™ aplicadas al lanzamiento
5. **Qué tenés al cierre**: outputs concretos (oferta validada, evidencia de demanda, equipo capacitado)
6. **Qué NO incluye**: límite explícito
7. **Pricing + estructura de pago + garantía**: específicos de Innova
8. **Caso de éxito de Innova**: si hay 1, mostrarlo en grande
9. **FAQs específicas**: tiempo del equipo, qué pasa si pivotamos, etc.
10. **CTA + escasez**: agendar diagnóstico

Lo que NO va en /innova:

- ❌ Quiénes son los fundadores (link a /equipo)
- ❌ Tabla comparativa contra otras alternativas (la versión completa vive en landing)
- ❌ Lista de partners y advisors (link a /equipo)

---

### Página Opera (`/opera`)

Job to be done: **"Convencer al CEO/COO que necesita escalar sin contratar de que tenemos la capacidad técnica + el método."**

Estructura paralela a /innova (importante para consistencia de marca) pero con contenido específico:

1. **Hero específico de Opera**: el dolor de "el equipo está al límite" + el resultado prometido
2. **Síntomas de compra**: específicos de operaciones
3. **Por qué la mayoría de los proyectos de automatización fracasan**: 3 razones
4. **Cómo trabajamos en Opera**: las 3 fases del Diagnóstico Operacional
5. **Qué tenés al cierre**: infraestructura de IA, métricas de ahorro reales, equipo capacitado
6. **Qué NO incluye**: límite explícito
7. **Pricing + estructura de pago + garantía**: específicos de Opera (DWY $25K / DFY $40K)
8. **Stack técnico**: qué herramientas usamos típicamente (n8n, Claude API, etc.)
9. **Caso de éxito de Opera**: si hay
10. **FAQs específicas**: ¿qué pasa con la seguridad?, ¿quién mantiene la infraestructura?, etc.
11. **CTA + escasez**

Lo que NO va en /opera:

- ❌ Fundadores extendidos (link a /equipo)
- ❌ Otros tracks (link al final, suave)

---

## La regla de la "anchura emocional" en cada página

Para que cada página se sienta completa, tiene que cubrir tres niveles emocionales:

| Nivel | Qué pregunta del lector resuelve | Sección que lo cubre |
|---|---|---|
| **Lógico** | "¿Esto es para mí? ¿Tiene sentido?" | Hero + síntomas + método |
| **Emocional** | "¿Puedo confiar en ellos? ¿Son los correctos?" | Fundadores + casos + garantía |
| **Operativo** | "¿Cómo es el paso siguiente?" | CTA + agendamiento + qué pasa después |

Si una página solo trabaja el nivel lógico, vendés con la cabeza pero no con el corazón.
Si solo emocional, no respondés "¿cómo arrancamos?".
Si solo operativo, parecés agencia de leads.

---

## Navegación global del sitio

```
HEADER (sticky):
[Logo Novo Labs]     Innova   Opera   Método   Equipo     [Agendar diagnóstico]

FOOTER:
─────────────────────────────────────────────────────────────────────
NOVO LABS                  PROGRAMAS              CONTACTO
Quiénes somos              Innova                 hola@novolabs.co
El método                  Opera                  LinkedIn
Casos                                             Newsletter
─────────────────────────────────────────────────────────────────────
© 2026 Novo Labs · Buenos Aires · Madrid
Privacidad · Términos
```

**Decisiones de navegación:**

- "Innova" y "Opera" son los dos primeros enlaces porque son las dos páginas más importantes después de la landing
- "Método" es para el lead más analítico que quiere entender el sistema antes de hablar
- "Equipo" es para el lead que verifica autoridad (advisors, bios)
- CTA persistente "Agendar diagnóstico" en el header transmite que la firma está abierta a recibir, no escondida

---

## La pregunta de la "intersección"

¿Qué pasa cuando un CEO tiene los dos problemas? "Quiero lanzar algo Y mejorar mi operación".

**Decisión:** la landing principal es donde se resuelve esto. En la sección "Dos caminos. Uno por empresa." dejamos explícito:

> *"Trabajamos un solo track por programa para garantizar la profundidad. Si tu empresa tiene los dos desafíos, resolvemos el más urgente primero. Eso lo definimos en el diagnóstico."*

Esta línea hace tres cosas:

1. Anticipa la pregunta y la resuelve (sin que el CEO tenga que descubrirla en el diagnóstico)
2. Refuerza la posición de "no hacemos todo a la vez" — premium
3. Crea expectativa positiva para el diagnóstico ("ellos van a saber decirme cuál es el más urgente")

---

## Reglas de contenido cruzado

| Pieza de contenido | Landing | Innova | Opera |
|---|---|---|---|
| Los 4 errores típicos de los clientes | ✓ (resumido) | ✓ (versión Innova) | ✓ (versión Opera) |
| El método SVP™ | ✓ (vista de 60s) | ✓ (3 fases adaptadas a Innova) | ✓ (3 fases adaptadas a Opera) |
| Pre-credenciamiento de fundadores | ✓ (línea corta) | (link a /equipo) | (link a /equipo) |
| Logos de clientes | ✓ (grilla curada) | ✓ (1 logo con caso) | ✓ (1 logo con caso) |
| Garantía 50% | ✓ (en hero) | ✓ (en pricing) | ✓ (en pricing) |
| Escasez 2 programas | ✓ (en hero + cierre) | ✓ (cierre) | ✓ (cierre) |
| Pricing detallado | ❌ | ✓ | ✓ |
| Stack técnico | ❌ | ❌ | ✓ |
| Modalidades DWY/DFY | ❌ | ✓ | ✓ |
| Tabla comparativa completa | ✓ | (versión específica) | (versión específica) |

---

## Tamaño de cada página (objetivo)

| Página | Secciones | Scrolls aprox. | Lectura completa |
|---|---|---|---|
| Landing | 9 | 4–5 | 90 segundos |
| /innova | 10 | 5–6 | 2 minutos |
| /opera | 11 | 5–6 | 2 minutos |

Más corto que el sitio actual. Premium es densidad alta de valor por sección, no longitud.

---

## La conversión esperada

```
Visita a landing → click en CTA hero            : 8%
Visita a landing → scroll completo              : 35%
Visita a landing → click en card Innova/Opera   : 22%
Visita a /innova o /opera → CTA final           : 11%
Agendamiento → llamada completada               : 70%
Llamada → propuesta enviada                     : 50%
Propuesta enviada → contrato firmado            : 30%
```

Funnel implícito: 1000 visitas → 220 entran a track → 24 agendan → 16 llaman → 8 reciben propuesta → 2-3 firman. Con tu pricing de $25K–$40K, eso es $50K–$120K de pipeline cada 1000 visitas con la conversión correcta.

---

*Continuar leyendo: `03-manual-de-marca-v2.md`*
