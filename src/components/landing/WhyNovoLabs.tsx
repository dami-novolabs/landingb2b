"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Search, Zap, BarChart2 } from "lucide-react";

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
    learning: "Sin estructura, lo urgente siempre le gana a lo importante.",
  },
  {
    num: "03",
    title: "Intentaron resolverlo internamente. Murió en el tercer mes.",
    body: "Buena voluntad, equipo capaz. La primera urgencia operativa le ganó al proyecto. Sin metodología, las iniciativas pierden impulso ante cualquier imprevisto.",
    learning: "Sin estructura, el negocio actual siempre le gana a la iniciativa nueva.",
  },
];

export default function WhyNovoLabs() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-novo-cream py-[80px] md:py-[128px]">
      <div className="mx-auto max-w-[880px] px-8">
        {/* Centred display-xl header, no eyebrow */}
        <div className="mb-16 text-center">
          <h2 className="mx-auto font-display text-[48px] leading-[1.05] tracking-[-0.04em] text-balance text-novo-black md:text-[72px]">
            Otros te dicen qué hacer. Nosotros lo hacemos y te enseñamos a continuarlo.
          </h2>
        </div>

        {/* 3-column reasons grid */}
        <div className="mt-16 mb-24 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12">
          {[
            {
              Icon: Search,
              title: "Diagnóstico antes que solución",
              body: "Mapeamos tu operación, cuantificamos dónde se pierde tiempo y dinero, y recién ahí definimos el plan de acción. Sin asumir. Sin enlatados.",
            },
            {
              Icon: Zap,
              title: "Ejecutamos, no recomendamos",
              body: "Construimos el equipo de agentes de IA autónomos que tu operación necesita. Tu equipo decide las prioridades. Nosotros ponemos las manos.",
            },
            {
              Icon: BarChart2,
              title: "Salimos con datos, no con PDFs",
              body: "Al finalizar tendrás un sistema de agentes corriendo con métricas de ahorro reales. Verificable. Tuyo.",
            },
          ].map(({ Icon, title, body }, i) => (
            <motion.div
              key={title}
              initial={reduce ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0, 0, 0.2, 1] }}
            >
              <Icon size={28} className="text-novo-accent" strokeWidth={1.5} />
              <h3 className="mt-6 mb-3 font-display text-display-s tracking-[-0.02em] text-novo-black">
                {title}
              </h3>
              <p className="text-body-m leading-[1.6] text-novo-graphite">{body}</p>
            </motion.div>
          ))}
        </div>

        <hr className="mb-24 border-novo-line" />

        {/* Centered subtitle above problems list */}
        <h3 className="mb-16 text-center font-display text-[32px] leading-[1.15] tracking-[-0.02em] text-novo-black md:text-[48px]">
          Probablemente vos también...
        </h3>

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
