"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const BLOCKS = [
  {
    num: "01",
    title: "La brecha es de margen, no de tecnología.",
    body: "Las empresas que ya integraron sistemas de IA en operaciones reportan reducciones de overhead del 20 al 40% en áreas como soporte, administración y ventas.",
  },
  {
    num: "02",
    title: "La ventaja compone.",
    body: "Cada mes que pasa, los que ya implementaron generan más datos, afinan mejor sus agentes y bajan más sus costos. La brecha entre el que empezó hace seis meses y el que empieza hoy no es lineal — es compuesta.",
  },
  {
    num: "03",
    title: "Cuando un competidor baja costos te ataca con su nuevo precio.",
    body: "Y vos no competís contra su tecnología — competís contra su margen. El costo de no implementar no aparece en tu P&L este trimestre. Aparece cuando perdés un contrato por 8% de diferencia que no podés bajar.",
  },
];

export default function Solution() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-novo-cream py-[80px] md:py-[128px]">
      <div className="mx-auto max-w-[880px] px-8">
        <h2 className="mb-16 font-display text-[32px] leading-[1.15] tracking-[-0.02em] text-novo-black md:text-[48px]">
          No es que la IA reemplace empresas. Es que cambia la estructura de costos de las que la usan.
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
