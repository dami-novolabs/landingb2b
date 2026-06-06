import CalEmbed from "@/components/ui/CalEmbed";

export default function FinalCTA() {
  return (
    <section id="agendar" className="bg-novo-cream py-[80px] md:py-[128px]">
      <div className="mx-auto max-w-[880px] px-8">

        {/* Header — centrado, display-xl */}
        <h2 className="mb-16 text-center font-display text-[48px] leading-[1.05] tracking-[-0.04em] text-balance text-novo-black md:text-[72px]">
          Si lo que leíste te hace sentido, conversar 45mins es el siguiente paso.
        </h2>

        <div className="min-h-[600px] w-full">
          <CalEmbed calLink="tom-novolabs/diagnostico-estrategico?source=opera" />
        </div>
      </div>
    </section>
  );
}
