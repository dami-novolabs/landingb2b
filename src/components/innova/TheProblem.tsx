import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const BLOCKS = [
  {
    num: "01",
    title: "Construyen antes de validar.",
    body: "Diseñan el producto, contratan al equipo de desarrollo, arman el plan de go-to-market. Recién al lanzar descubren que el problema no era tan urgente como parecía. El costo de equivocarse ya es enorme.",
  },
  {
    num: "02",
    title: "Confunden interés con compromiso.",
    body: "'Sí, lo usaría' no es validación. 'Lo pago por adelantado' sí lo es. La mayoría de los proyectos validan con encuestas y conversaciones amables. Eso no genera evidencia real.",
  },
  {
    num: "03",
    title: "Compran un framework genérico esperando un resultado específico.",
    body: "Design Thinking, Lean Startup, OKRs corporativos. Son herramientas útiles. Pero sin método, sin disciplina y sin criterio de éxito firmado, el framework solo da vocabulario nuevo para los mismos errores.",
  },
];

export default function TheProblem() {
  return (
    <section className="bg-novo-cream py-[80px] md:py-[128px]">
      <div className="mx-auto max-w-[880px] px-8">
        <SectionHeader
          eyebrow="EL PROBLEMA"
          title={
            <>
              Por qué los lanzamientos
              <br />
              corporativos fracasan.
            </>
          }
          lead="Las tres causas se repiten en el 80% de los proyectos de innovación que vemos morir."
        />

        <div>
          {BLOCKS.map((block, i) => (
            <React.Fragment key={block.num}>
              {i > 0 && <hr className="my-16 border-novo-line" />}
              <div>
                <p className="mb-4 font-mono text-[14px] text-novo-mid">{block.num}</p>
                <h3 className="mb-5 font-display text-display-s tracking-[-0.02em] text-novo-black">
                  {block.title}
                </h3>
                <p className="text-body-m leading-[1.65] text-novo-graphite">
                  {block.body}
                </p>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
