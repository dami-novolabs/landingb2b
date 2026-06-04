const SYMPTOMS = [
  '"El equipo está al límite y no podemos tomar más trabajo".',
  "Tu próxima ronda de crecimiento implicaba contratar a 3 o más personas, y no estás seguro de que sea la salida.",
  "Procesos críticos del negocio dependen de personas específicas y eso es un riesgo que ves crecer.",
  "El equipo ya prueba ChatGPT, Copilot o Notion AI sueltos — pero nada está integrado al flujo real del negocio.",
  "Intentaron un proyecto de automatización con freelancer o consultora y quedó a medio camino.",
];

export default function ForWhom() {
  return (
    <section className="bg-novo-cream-50 py-[80px] md:py-[128px]">
      <div className="mx-auto max-w-[880px] px-8">

        {/* Header — centrado, display-xl */}
        <h2 className="mb-16 text-center font-display text-[48px] leading-[1.05] tracking-[-0.04em] text-balance text-novo-black md:text-[72px]">
          Si te sentís identificado con alguno de estos síntomas, este programa probablemente sea para vos.
        </h2>

        <ul className="flex flex-col gap-8">
          {SYMPTOMS.map((text) => (
            <li
              key={text}
              className="flex gap-3 text-[18px] leading-[1.6] text-novo-charcoal"
            >
              <span className="flex-shrink-0 font-medium text-novo-accent">→</span>
              <span>{text}</span>
            </li>
          ))}
        </ul>

        <hr className="my-16 border-novo-line" />

        <p className="text-body-m italic text-novo-graphite">
          Si tu desafío es lanzar algo nuevo en lugar de escalar lo existente,{" "}
          <a
            href="/innova"
            className="border-b border-novo-black pb-px text-novo-black transition-colors hover:border-novo-accent hover:text-novo-accent"
          >
            Innova →
          </a>{" "}
          tiene más sentido.
        </p>
      </div>
    </section>
  );
}
