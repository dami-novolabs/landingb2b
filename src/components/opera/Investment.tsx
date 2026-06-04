import { Card } from "@/components/ui/Card";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ButtonPrimary } from "@/components/ui/ButtonPrimary";

export default function Investment() {
  return (
    <section className="bg-novo-cream py-[80px] md:py-[128px]">
      {/* Header */}
      <div className="mx-auto max-w-[880px] px-8 text-center">
        <h2 className="mb-4 font-display text-[48px] leading-[1.05] tracking-[-0.04em] text-novo-black md:text-[72px]">
          El programa Opera.
        </h2>
        <p className="text-[21px] leading-[1.55] tracking-[-0.005em] text-novo-charcoal">
          El alcance y la inversión final se definen en el diagnóstico inicial.
        </p>
      </div>

      {/* Single card DFY — centered, max-w-[560px] */}
      <div className="mx-auto mt-16 max-w-[560px] px-8">
        <Card as="article" className="flex flex-col p-7 md:p-12">
          <Eyebrow>DONE FOR YOU</Eyebrow>
          <h3 className="mb-8 mt-4 font-display text-[42px] tracking-[-0.025em] text-novo-black">
            $40,000 USD
          </h3>
          <p className="mb-6 text-[16px] leading-[1.6] text-novo-graphite">
            Novo Labs construye e implementa. Tu equipo decide y adopta. Mantenimiento ongoing desde USD 5K/mes.
          </p>
          <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.08em] text-novo-graphite">
            IDEAL PARA
          </p>
          <p className="mb-10 text-[15px] leading-[1.6] text-novo-charcoal">
            Empresas sin equipo técnico interno o que no quieren desviar recursos del producto principal.
          </p>
          <ButtonPrimary href="#agendar">Agendar diagnóstico →</ButtonPrimary>
        </Card>
      </div>
    </section>
  );
}
