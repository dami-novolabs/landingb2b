"use client";

import { motion, useReducedMotion } from "framer-motion";

const STATS = [
  { value: "8", label: "años construyendo" },
  { value: "40", label: "empresas acompañadas" },
  { value: "360+", label: "personas capacitadas" },
];

export default function StatsBand() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-novo-cream border-b border-novo-line px-8 py-10 md:hidden">
      <div className="grid grid-cols-3 gap-4">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.value}
            className="text-center"
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: 12 }}
            whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08, ease: [0, 0, 0.2, 1] }}
          >
            <p className="font-display text-[36px] leading-none tracking-[-0.04em] text-novo-black">
              {stat.value}
            </p>
            <p className="mt-1 font-mono text-[11px] uppercase leading-[1.4] tracking-[0.06em] text-novo-graphite">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
