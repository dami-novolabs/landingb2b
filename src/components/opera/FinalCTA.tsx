import { Eyebrow } from "@/components/ui/Eyebrow";

export default function FinalCTA() {
  return (
    <section id="agendar" className="bg-novo-cream py-[80px] md:py-[128px]">
      <div className="mx-auto max-w-[880px] px-8">
        <Eyebrow>EL DIAGNÓSTICO</Eyebrow>

        <h2 className="mb-12 font-display text-[36px] leading-[1.08] tracking-[-0.03em] text-novo-black md:text-[56px]">
          Si Opera encaja con tu desafío,
          <br />
          el diagnóstico es el siguiente paso.
        </h2>

        <div className="flex aspect-[16/10] w-full items-center justify-center rounded border border-novo-line bg-novo-cream-50">
          <span className="font-mono text-sm text-novo-mid">
            CAL.COM EMBED · A CONFIGURAR EN FASE 7
          </span>
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
