import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Eyebrow } from "@/components/ui/Eyebrow";

const CARDS = [
  {
    eyebrow: "DONE WITH YOU",
    price: "$25,000 USD",
    body: "Tu equipo técnico construye la infraestructura con guía de Novo Labs. Mantenimiento ongoing desde USD 3K/mes.",
    idealLabel: "IDEAL PARA",
    ideal: "Empresas con equipo técnico interno que quiere aprender.",
  },
  {
    eyebrow: "DONE FOR YOU",
    price: "$40,000 USD",
    body: "Novo Labs construye e implementa. Tu equipo decide y adopta. Mantenimiento ongoing desde USD 5K/mes.",
    idealLabel: "IDEAL PARA",
    ideal:
      "Empresas sin equipo técnico interno o que no quieren desviar recursos del producto principal.",
  },
];

export default function Investment() {
  return (
    <section className="bg-novo-cream py-[80px] md:py-[128px]">
      {/* Header — narrow */}
      <div className="mx-auto max-w-[880px] px-8">
        <SectionHeader
          eyebrow="INVERSIÓN"
          title={
            <>
              El programa Opera existe
              <br />
              en dos modalidades.
            </>
          }
          lead="El alcance, la modalidad y la inversión final se definen en el diagnóstico inicial."
          className="!mb-0"
        />
      </div>

      {/* Cards — wide */}
      <div className="mx-auto mt-16 max-w-[1280px] px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {CARDS.map((card) => (
            <Card key={card.eyebrow} as="article" className="flex flex-col p-7 md:p-12">
              <Eyebrow>{card.eyebrow}</Eyebrow>
              <h3 className="mb-8 mt-4 font-display text-[42px] tracking-[-0.025em] text-novo-black">
                {card.price}
              </h3>
              <p className="mb-6 text-body-m leading-[1.6] text-novo-graphite">{card.body}</p>
              <p className="mb-3 font-mono text-mono-xs uppercase tracking-[0.08em] text-novo-graphite">
                {card.idealLabel}
              </p>
              <p className="text-[15px] leading-[1.6] text-novo-charcoal">{card.ideal}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* Guarantee — narrow */}
      <div className="mx-auto mt-24 max-w-[880px] px-8">
        <h3 className="font-display text-[28px] leading-[1.2] tracking-[-0.025em] text-novo-black md:text-[42px]">
          50% al inicio.
          <br />
          50% en la semana 8, cuando ya hay agentes en producción.
          <br />
          Si al cierre no se cumple el criterio de éxito firmado,
          <br />
          <span className="text-novo-accent">devolvemos el segundo tramo.</span>
        </h3>
      </div>
    </section>
  );
}
