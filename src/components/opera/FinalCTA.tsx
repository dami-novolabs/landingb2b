import CalEmbed from "@/components/ui/CalEmbed";

export default function FinalCTA() {
  return (
    <section id="agendar" className="bg-novo-cream py-[80px] md:py-[128px]">
      <div className="mx-auto max-w-[880px] px-8">

        {/* Header — centrado, display-xl */}
        <h2 className="mb-16 text-center font-display text-[30px] leading-[1.1] tracking-[-0.02em] text-balance text-novo-black md:text-[72px] md:leading-[1.05] md:tracking-[-0.04em]">
          Si lo que leíste te hace sentido, conocernos es el siguiente paso.
        </h2>

        <div className="min-h-[600px] w-full">
          <CalEmbed calLink="tom-novolabs/diagnostico-estrategico?source=opera" />
        </div>
      </div>
    </section>
  );
}
