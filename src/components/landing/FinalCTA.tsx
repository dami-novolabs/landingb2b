import { Eyebrow } from "@/components/ui/Eyebrow";
import CalEmbed from "@/components/ui/CalEmbed";

export default function FinalCTA() {
  return (
    <section id="agendar" className="bg-novo-cream py-[80px] md:py-[128px]">
      <div className="mx-auto max-w-[1280px] px-8">
        <div className="overflow-hidden rounded-md border border-novo-line">
          <div className="grid grid-cols-1 md:grid-cols-2">

            {/* Left — copy */}
            <div className="p-8 md:p-16">
              <Eyebrow>EL PRIMER PASO</Eyebrow>
              <h2 className="font-display text-[36px] leading-[1.08] tracking-[-0.03em] text-novo-black md:text-[56px]">
                Descubrir qué oportunidades tu negocio puede capitalizar.
              </h2>
              <p className="mb-10 mt-6 text-body-l text-novo-charcoal">
                En esta primera conversación evaluamos juntos si nuestro programa es lo que necesita tu negocio (o no).
              </p>
              <p className="mb-4 font-mono text-mono-s uppercase text-novo-charcoal">
                LO QUE VAMOS A CONVERSAR
              </p>
              <ul className="space-y-1 text-body-m leading-[1.8] text-novo-charcoal">
                <li>→ Qué desafío estratégico tenés que resolver</li>
                <li>→ Qué retorno esperas de esta inversión</li>
                <li>→ Cómo sería trabajar juntos (si hay encaje)</li>
              </ul>
              <p className="mt-10 text-body-m italic text-novo-charcoal">
                No vendemos nada en la llamada. Descubrimos si hay oportunidades para capitalizar.
                Si no, te decimos a dónde más buscar.
              </p>
            </div>

            {/* Right — Cal.com embed */}
            <div className="min-h-[600px] bg-novo-cream-50">
              <CalEmbed calLink="tom-novolabs/diagnostico-estrategico" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
