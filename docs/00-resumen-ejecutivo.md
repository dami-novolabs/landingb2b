# Resumen Ejecutivo — Rediseño Novo Labs B2B

> Producido por Claude · 2026-05-31
> Para: Tomás Volonté · CEO Novo Labs
> Estado del sitio actual: **3/10** (autoevaluación del fundador) · Estado objetivo: **9+/10**

---

## El diagnóstico en una frase

El sitio actual está intentando vender **dos productos distintos a dos buyers distintos en una sola página, con un copy genérico que podría ser de cualquier consultora**. Por eso se siente híbrido, confuso y no termina de transmitir el precio premium.

---

## El problema estructural

| Síntoma visible | Causa raíz |
|---|---|
| "Siento que es un híbrido confuso" | Innova y Opera viven en la misma página → el copy se vuelve abstracto para servir a los dos |
| "El orden de las secciones no me hace sentido" | El sitio mezcla *Quiénes somos* + *Qué hacemos* + *Detalle del programa* en un único flujo |
| "Hay mucha información que debería estar en cada track" | Las cards de Innova/Opera son un punto medio: ni resumen ni detalle |
| "No transmite que cobramos USD 40K" | Densidad visual de agencia, no de firma premium. Cero señales de exclusividad arriba del fold |
| "El copy es genérico" | Headlines como "Transformá un desafío estratégico en 90 días" podrían ser de cualquier consultora |

---

## La arquitectura nueva (la apuesta)

```
novolabs.co/  ← LANDING PRINCIPAL
    Propósito: convencer de que Novo Labs es la firma a la que vale la pena hablar.
    NO vende programas. Vende la firma.
    ↓
    /innova   ← Página dedicada al track Innova
        Propósito: cerrar al CEO/VP que quiere lanzar.
        Tiene su propia narrativa, casos, FAQ, CTA.
    /opera    ← Página dedicada al track Opera
        Propósito: cerrar al CEO/COO que quiere escalar sin contratar.
        Tiene su propia narrativa, casos, FAQ, CTA.
```

**Por qué este split funciona:** un CEO que viene por una recomendación entra a `/`, lee 90 segundos, decide cuál de los dos caminos lo describe, hace click, profundiza. Un CFO que llega por una búsqueda directa de IA operacional entra a `/opera` y nunca ve la landing principal. Cada página habla un idioma, no dos.

---

## Qué vas a encontrar en esta carpeta

| Archivo | Qué contiene |
|---|---|
| `01-auditoria-sitio-actual.md` | Auditoría sección por sección del sitio actual, con puntaje y mejoras concretas |
| `02-arquitectura-informacion.md` | Mapa visual de qué va en cada página y por qué |
| `03-manual-de-marca-v2.md` | Paleta, tipografía, sistema de espaciado, tono de voz, do/don'ts |
| `04-landing-principal.md` | Wireframe sección por sección + copy listo para V0 |
| `05-pagina-innova.md` | Wireframe + copy completo de la página Innova |
| `06-pagina-opera.md` | Wireframe + copy completo de la página Opera |
| `07-sistema-animaciones.md` | Microinteracciones, transiciones, scroll behavior |
| `08-plan-implementacion.md` | Orden de tareas + prompts listos para Cursor/Claude Code/V0 |

---

## Los 7 cambios de mayor impacto (si solo hicieras 7 cosas)

1. **Separar la landing en 3 páginas.** Lo demás es maquillaje.
2. **Reescribir el hero.** El H1 actual es genérico. El nuevo H1 tiene que ser un *pattern interrupt* que diga "no soy lo que ya viste".
3. **Mover la garantía de devolución arriba del fold.** Es el activo de marketing más fuerte que tenés. Hoy aparece en la sección de pricing, en chiquito.
4. **Reducir el peso del naranja `#FF3A20` al 5% de la superficie visual.** Hoy compite con el contenido. En premium, el acento se gana respeto cuando aparece poco.
5. **Subir tipografía display a 56–72px en headlines de sección, con tracking negativo (-0.03em).** Hoy se siente como sitio de SaaS, no de firma.
6. **Eliminar la sección "Lo que obtenés al cierre" con 01/02/03 en hero**. Patrón de infoproducto. Reemplazar por casos reales (aunque sean 2).
7. **Cambiar "Agendá tu diagnóstico gratuito" → calendario embedido (Cal.com o Savvycal)**. Mailto para un programa de $40K es fricción de catálogo.

---

## La pregunta que tiene que contestar cada sección

Para cada sección de cada página, antes de escribir el copy, hay que pasar el filtro:

> *"¿Esta sección sube la probabilidad de que un CEO con $40K en su tarjeta agende un diagnóstico?"*

Si la respuesta es "no estoy seguro", la sección se elimina. Premium no se comunica con más secciones — se comunica con menos secciones, mejor escritas.

---

## El tono que tiene que tener el sitio entero

> No vendemos consultoría. No vendemos cursos. No vendemos un framework con un nombre lindo.
> Trabajamos dentro de tu empresa hasta que algo concreto exista.
> Si no existe, devolvemos la mitad del dinero.
> Solo tomamos dos clientes a la vez.

Ese es el tono. Sobrio, preciso, con escasez real y skin in the game. Todo lo demás se mide contra eso.

---

*Continuar leyendo: `01-auditoria-sitio-actual.md`*
