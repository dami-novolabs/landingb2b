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
                45 minutos.
                <br />
                Sin compromiso.
              </h2>
              <p className="mb-10 mt-6 text-body-l text-novo-charcoal">
                En esta conversación evaluamos juntos si el programa es el camino
                correcto para tu desafío.
              </p>
              <p className="mb-4 font-mono text-mono-s uppercase text-novo-charcoal">
                LO QUE VAMOS A CUBRIR
              </p>
              <ul className="space-y-1 text-body-m leading-[1.8] text-novo-charcoal">
                <li>→ Qué desafío estratégico tenés en este momento</li>
                <li>→ Cuál sería el criterio de éxito que firmaríamos</li>
                <li>→ Si el programa encaja o no (y por qué)</li>
                <li>→ Cómo sería un plan inicial</li>
              </ul>
              <p className="mt-10 text-body-m italic text-novo-charcoal">
                No vendemos en la llamada. Si hay encaje, te enviamos una propuesta.
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
