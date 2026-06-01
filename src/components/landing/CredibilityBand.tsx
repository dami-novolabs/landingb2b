"use client";

import { motion, useReducedMotion } from "framer-motion";

const STATS = [
  {
    value: "72",
    label: "PRODUCTOS DIGITALES CONSTRUIDOS DESDE CERO · 2017–2023",
  },
  {
    value: "18",
    label: "EDICIONES DE STARTUP SCHOOL · 2023–2025",
  },
  {
    value: "360+",
    label: "PROYECTOS ACOMPAÑADOS POR EL MÉTODO",
  },
  {
    value: "52%",
    label: "SIGUEN ACTIVOS Y FACTURANDO (DE LOS 360+)",
  },
];

export default function CredibilityBand() {
  const reduce = useReducedMotion();

  return (
    <section className="border-b border-t border-novo-line bg-novo-cream px-8 py-[64px] md:py-[96px]">
      <div className="mx-auto mb-20 max-w-[720px]">
        <p className="text-[18px] text-novo-graphite">
          Trabajas directo con los fundadores:{" "}
          <strong className="font-medium text-novo-black">Tomás Volonté</strong>{" "}
          y{" "}
          <strong className="font-medium text-novo-black">Damián Sánchez</strong>
          . <br /> Sin consultores junior. Sin terciarizados.
        </p>
      </div>

      <div className="mx-auto grid max-w-[1280px] grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.value}
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: 12 }}
            whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: [0, 0, 0.2, 1] }}
          >
            <p className="mb-4 font-display text-[48px] leading-none tracking-[-0.04em] text-novo-black md:text-[64px]">
              {stat.value}
            </p>
            <p className="font-mono text-mono-xs uppercase leading-[1.5] tracking-[0.08em] text-novo-graphite">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
