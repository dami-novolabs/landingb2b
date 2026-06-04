"use client";

import { motion, useReducedMotion } from "framer-motion";

const EASE = [0, 0, 0.2, 1] as const;

const PROBLEMS = [
  {
    num: "01",
    title: "El equipo está al límite",
    body: "Uno o dos personas concentran el conocimiento de procesos críticos. Si se van o se enferman, la operación se frena. No es un problema de personas — es un problema de arquitectura.",
  },
  {
    num: "02",
    title: "Las horas se van en tareas manuales",
    body: "Clasificar emails, completar formularios, generar reportes, responder consultas repetitivas. Trabajo que consume tiempo senior y no genera valor estratégico.",
  },
  {
    num: "03",
    title: "Más volumen significa más personal",
    body: "Cada vez que el negocio crece, la respuesta es contratar. El ciclo tarda 3 a 6 meses y el costo se vuelve estructural. La operación no escala — escala el gasto.",
  },
];

export default function TheProblem() {
  const reduced = useReducedMotion() ?? false;

  return (
    <section className="bg-novo-cream-50 py-[80px] md:py-[128px]">
      <div className="mx-auto max-w-[1280px] px-8">

        {/* Header */}
        <div className="mb-20 text-center">
          <p className="mb-6 font-mono text-[13px] uppercase tracking-[0.08em] text-novo-graphite">
            — EL PROBLEMA
          </p>
          <h2 className="mx-auto max-w-[16ch] font-display text-[48px] leading-[1.05] tracking-[-0.04em] text-balance text-novo-black md:text-[72px]">
            Crecer significa contratar. Y contratar no escala.
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12">
          {PROBLEMS.map((item, i) => (
            <motion.div
              key={item.num}
              initial={reduced ? undefined : { opacity: 0, y: 16 }}
              whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: EASE }}
            >
              <p className="mb-4 font-mono text-[13px] tracking-[0.04em] text-novo-mid">
                {item.num}
              </p>
              <h3 className="mb-4 font-display text-[32px] leading-[1.15] tracking-[-0.02em] text-novo-black">
                {item.title}
              </h3>
              <p className="text-[16px] leading-[1.6] text-novo-graphite">
                {item.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Dato destacado */}
        <motion.p
          className="mt-12 border-t border-novo-line pt-12 text-center font-mono text-[13px] tracking-[0.04em] text-novo-graphite"
          initial={reduced ? undefined : { opacity: 0 }}
          whileInView={reduced ? undefined : { opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, ease: EASE }}
        >
          &ldquo;51% de empresas medianas no implementa IA porque no sabe por dónde empezar.&rdquo;
        </motion.p>

      </div>
    </section>
  );
}
