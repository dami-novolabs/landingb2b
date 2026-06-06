"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const BLOCKS = [
  {
    num: "01",
    title: "Contrataste un consultor.",
    body: "Pasó semanas relevando información y entregó 80 páginas de recomendaciones. Tu operación siguió en el mismo lugar.",
    learning: "Hay que embarrarse para que las cosas pasen.",
  },
  {
    num: "02",
    title: "Capacitaste al equipo. Nadie aplicó nada.",
    body: "Durante el programa, entusiasmo. De vuelta al día a día, la urgencia ganó en 72 horas.",
    learning: "El conocimiento que no se aplica en 30 días no se aplica nunca.",
  },
  {
    num: "03",
    title: "Intentaste resolverlo internamente sin éxito.",
    body: "Buena voluntad, equipo capaz pero a la primera urgencia operativa, la iniciativa pasó a segundo plano hasta morir en el olvido.",
    learning: "Sin estructura, el negocio actual siempre le gana a la iniciativa nueva.",
  },
];

export default function Solution() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-novo-cream py-[80px] md:py-[128px]">
      <div className="mx-auto max-w-[880px] px-8">
        <h2 className="mb-16 font-display text-[32px] leading-[1.15] tracking-[-0.02em] text-novo-black md:text-[48px]">
          Probablemente vos también...
        </h2>

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
