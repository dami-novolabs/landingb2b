import { Eyebrow } from "@/components/ui/Eyebrow";
import CalEmbed from "@/components/ui/CalEmbed";

export default function FinalCTA() {
  return (
    <section id="agendar" className="bg-novo-cream py-[80px] md:py-[128px]">
      <div className="mx-auto max-w-[880px] px-8">
        <Eyebrow>EL DIAGNÓSTICO</Eyebrow>

        <h2 className="mb-12 font-display text-[36px] leading-[1.08] tracking-[-0.03em] text-novo-black md:text-[56px]">
          Si Innova encaja con tu desafío,
          <br />
          el diagnóstico es el siguiente paso.
        </h2>

        <div className="min-h-[600px] w-full">
          <CalEmbed calLink="tom-novolabs/diagnostico-estrategico?source=innova" />
        </div>

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
