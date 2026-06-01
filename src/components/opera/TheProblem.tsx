import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const BLOCKS = [
  {
    num: "01",
    title: "Automatizan lo equivocado.",
    body: "Empiezan por el proceso más visible o el que pidió el equipo más ruidoso, no por el que tiene el mayor costo operativo. El resultado: automatizan algo que ahorra 4 horas/semana y dejan intacto lo que consume 40.",
  },
  {
    num: "02",
    title: "Compran herramientas antes de diagnosticar.",
    body: "Licencias de Copilot, suscripción a Make, una cuenta de n8n. La empresa termina con 8 herramientas sueltas y ningún proceso resuelto. Las herramientas no son el problema — son el resultado de pensar al revés.",
  },
  {
    num: "03",
    title: "No miden el ROI antes de construir.",
    body: "Si no podés decir cuánto cuesta hoy este proceso y cuánto ahorrarías al automatizarlo, no sabés si vale la pena construirlo. La mayoría de los proyectos arrancan sin esa línea base. Después es imposible justificar la inversión.",
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
              Por qué la mayoría de los proyectos
              <br />
              de automatización fracasan.
            </>
          }
          lead="Tres causas que vemos repetirse en cada empresa con la que hablamos."
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
                <p className="text-body-m leading-[1.65] text-novo-graphite">{block.body}</p>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
