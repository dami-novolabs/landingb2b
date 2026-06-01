"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";

const BLOCKS = [
  {
    num: "01",
    title: "Contrataron una consultora. Recibieron un informe.",
    body: "El equipo del consultor pasó semanas relevando información y entregó un documento de 80 páginas con recomendaciones. Después se fue. El desafío sigue donde estaba.",
    learning: "El mismo problema va a aparecer en la próxima reunión trimestral.",
  },
  {
    num: "02",
    title: "Invirtieron en capacitación. El equipo no aplicó nada.",
    body: "Durante el programa, entusiasmo. Al volver al día a día, la urgencia ganó en 72 horas.",
    learning: "El conocimiento que no se aplica en 30 días no se aplica nunca.",
  },
  {
    num: "03",
    title: "Intentaron resolverlo internamente. Murió en el tercer mes.",
    body: "Buena voluntad, equipo capaz. La primera urgencia operativa le ganó al proyecto. Sin metodología, las iniciativas pierden impulso ante cualquier imprevisto.",
    learning: "Sin estructura, el negocio actual siempre le gana a la iniciativa nueva.",
  },
  {
    num: "04",
    title: "Ningún proveedor firmó qué era 'éxito' antes de empezar.",
    body: "Sin un criterio acordado y firmado al inicio, el proveedor puede justificar cualquier entregable como exitoso.",
    learning: "Sin criterio de éxito firmado, el proveedor siempre puede declarar victoria.",
  },
];

export default function WhyNovoLabs() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-novo-cream py-[80px] md:py-[128px]">
      <div className="mx-auto max-w-[880px] px-8">
        <SectionHeader
          eyebrow="POR QUÉ NOVO LABS"
          title={
            <>
              Lo que ya intentaron.
              <br />
              Y por qué no resolvió el problema.
            </>
          }
        />

        <div>
          {BLOCKS.map((block, i) => (
            <React.Fragment key={block.num}>
              {i > 0 && <hr className="my-16 border-novo-line" />}
              <motion.div
                initial={reduce ? { opacity: 1 } : { opacity: 0, y: 24 }}
                whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                  ease: [0, 0, 0.2, 1],
                }}
              >
                <p className="mb-4 font-mono text-[14px] text-novo-mid">{block.num}</p>
                <h3 className="mb-6 font-display text-display-s tracking-[-0.02em] text-novo-black">
                  {block.title}
                </h3>
                <p className="mb-8 max-w-[60ch] text-body-m leading-[1.6] text-novo-graphite">
                  {block.body}
                </p>
                <div className="border-l-2 border-novo-accent pl-6">
                  <p className="text-[17px] italic text-novo-black">{block.learning}</p>
                </div>
              </motion.div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
