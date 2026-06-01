import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";

const DELIVERABLES = [
  {
    num: "01",
    title: "Evidencia de demanda real, no proyecciones.",
    body: "Al cierre del programa, tu equipo tiene en la mano la respuesta a la pregunta más cara que existe: '¿Alguien está dispuesto a pagar por esto?'. Con compromiso real, no con encuestas.",
  },
  {
    num: "02",
    title: "Una oferta lista para presentar al mercado.",
    body: "Propuesta de valor, paquete, pricing, mensaje principal, canal de adquisición probado. No un brief — la oferta funcionando.",
  },
  {
    num: "03",
    title: "Un equipo que puede repetir el proceso solo.",
    body: "El equipo que trabajó en el programa sale entrenado en la metodología completa. La próxima iniciativa no empieza desde cero. Tienen el método.",
  },
  {
    num: "04",
    title: "Acceso de por vida a la biblioteca SVP™.",
    body: "Frameworks, templates, guías metodológicas. Para que la próxima persona que entre al equipo de innovación lo agarre desde el día uno.",
  },
];

export default function AtCompletion() {
  return (
    <section className="bg-novo-cream py-[80px] md:py-[128px]">
      <div className="mx-auto max-w-[880px] px-8">
        <SectionHeader
          eyebrow="AL CIERRE"
          title={
            <>
              Qué se queda en tu empresa
              <br />
              después del programa.
            </>
          }
          lead="No nos llevamos el método. Te lo dejamos instalado."
          className="!mb-0"
        />

        <div className="mt-16 flex flex-col gap-6">
          {DELIVERABLES.map((item) => (
            <Card key={item.num} as="article">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-[60px_1fr] md:gap-6">
                <p className="font-mono text-[14px] text-novo-mid">{item.num}</p>
                <div>
                  <h3 className="mb-4 font-display text-[24px] tracking-[-0.02em] text-novo-black">
                    {item.title}
                  </h3>
                  <p className="text-body-m leading-[1.6] text-novo-graphite">{item.body}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
