import { Eyebrow } from "@/components/ui/Eyebrow";

export default function HowWeCharge() {
  return (
    <section className="bg-novo-cream-50 py-[80px] md:py-[128px]">
      <div className="mx-auto max-w-[880px] px-8">
        <Eyebrow>CÓMO COBRAMOS</Eyebrow>

        <h2 className="font-display text-[32px] leading-[1.15] tracking-[-0.03em] text-novo-black md:text-[50px]">
          50% al inicio.
          <br />
          50% en la semana 8, cuando hay algo construido.
          <br />
          Si al cierre no se cumple el criterio firmado,
          <br />
          <span className="text-novo-accent">devolvemos el segundo tramo.</span>
        </h2>

        <hr className="my-20 border-novo-line" />

        <p className="text-body-l text-novo-charcoal">
          Las consultoras no pueden hacer esto porque cobran por horas facturadas,
          no por resultado entregado. Las capacitaciones tampoco, porque entregan
          contenido, no resultado. Nosotros podemos porque el riesgo está atado al
          trabajo: si no funciona, no nos quedamos con el segundo tramo.
        </p>

        <hr className="my-20 border-novo-line" />

        <h3 className="mb-6 font-display text-display-s text-novo-black">
          Y por la misma razón, solo tomamos 2 empresas a la vez.
        </h3>

        <p className="text-body-l text-novo-charcoal">
          Cada programa requiere que Tomás o Damián bloqueen su agenda durante 12
          semanas. Subcontratar la facilitación destruiría el único diferenciador que
          importa: que los fundadores del método trabajan directamente con tu equipo.
        </p>

        <div className="mt-12 flex items-center gap-3 font-mono text-mono-s text-novo-charcoal">
          <span
            className="inline-block h-2 w-2 flex-shrink-0 rounded-full bg-novo-accent"
            style={{ animation: "slot-pulse 2s ease-in-out infinite" }}
          />
          1 SLOT DISPONIBLE PARA Q3 2026 · PRÓXIMO ABIERTO: Q4 2026
        </div>
      </div>
    </section>
  );
}
