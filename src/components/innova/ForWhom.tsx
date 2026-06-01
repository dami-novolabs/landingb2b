import { SectionHeader } from "@/components/ui/SectionHeader";

const SYMPTOMS = [
  "Tenés una idea de nueva línea de negocio que no querés presentar al directorio sin evidencia que la sostenga.",
  "Tu equipo de producto/innovación construye, pero los lanzamientos no despegan.",
  "Lanzaron algo en los últimos 18 meses que no funcionó y no estás dispuesto a repetir el mismo proceso.",
  "Tenés 3 o 4 ideas sobre la mesa y no sabés cuál priorizar.",
  "Querés que tu equipo aprenda a validar, no que un externo lo haga por vos y se vaya con el conocimiento.",
];

export default function ForWhom() {
  return (
    <section className="bg-novo-cream-50 py-[80px] md:py-[128px]">
      <div className="mx-auto max-w-[880px] px-8">
        <SectionHeader
          eyebrow="PARA QUIÉN"
          title={
            <>
              Si te sentís identificado con alguno
              <br />
              de estos síntomas, este programa
              <br />
              probablemente sea para vos.
            </>
          }
          className="!mb-0"
        />

        <ul className="mt-16 flex flex-col gap-8">
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
          Si no te identificaste con ninguno, Innova probablemente no es el
          programa. Quizá{" "}
          <a
            href="/opera"
            className="border-b border-novo-black pb-px text-novo-black transition-colors hover:border-novo-accent hover:text-novo-accent"
          >
            Opera →
          </a>{" "}
          tiene más sentido.
        </p>
      </div>
    </section>
  );
}
