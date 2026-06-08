"use client";

import { motion, useReducedMotion } from "framer-motion";

const BENEFITS = [
  {
    num: "01",
    title: "Tu operación funciona sin que vos estés en cada decisión.",
    body: "Los agentes procesan, priorizan y ejecutan tareas rutinarias de forma autónoma. Tu equipo interviene solo cuando realmente importa.",
  },
  {
    num: "02",
    title: "Los costos operativos bajan sin tocar el equipo.",
    body: "No se trata de reemplazar gente: se trata de que cada persona haga el trabajo que solo ella puede hacer. La IA absorbe el resto.",
  },
  {
    num: "03",
    title: "Tus procesos críticos dejan de depender de una sola persona.",
    body: "Lo que hoy vive en la cabeza de alguien pasa a estar documentado, automatizado y disponible para todo el equipo.",
  },
];

export default function Benefits() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-novo-near-black py-[80px] md:py-[128px]">
      <div className="mx-auto max-w-[880px] px-8">
        <p className="mb-12 font-mono text-[13px] uppercase tracking-[0.08em] text-novo-mid">
          A dónde llegás
        </p>

        <div className="flex flex-col divide-y divide-[rgba(229,225,217,0.12)]">
          {BENEFITS.map((item, i) => (
            <motion.div
              key={item.num}
              className="grid grid-cols-1 gap-4 py-12 md:grid-cols-[120px_1fr] md:gap-16"
              initial={reduce ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0, 0, 0.2, 1] }}
            >
              <p className="font-mono text-[13px] tracking-[0.06em] text-novo-mid pt-1">
                {item.num}
              </p>
              <div>
                <h3 className="mb-4 font-display text-[22px] leading-[1.2] tracking-[-0.01em] text-[#FAFAFA] md:text-[32px] md:leading-[1.15] md:tracking-[-0.02em]">
                  {item.title}
                </h3>
                <p className="text-body-m leading-[1.65] text-novo-mid">
                  {item.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
