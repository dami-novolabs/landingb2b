"use client";

import { motion, useReducedMotion } from "framer-motion";

const EASE = [0, 0, 0.2, 1] as const;

const BLOCKS = [
  {
    title: "Tu API key, no la nuestra",
    body: "Cada cliente opera con su propia API key de Anthropic. Los tokens de IA se facturan directamente a tu cuenta. Novo Labs no tiene acceso a tus credenciales ni a tu consumo.",
  },
  {
    title: "Aislamiento total de datos",
    body: "Arquitectura con Row Level Security. Secretos almacenados en AWS Secrets Manager. Ningún dato de un cliente es accesible desde otro entorno.",
  },
  {
    title: "El cliente ve todo",
    body: "Audit trail completo disponible en el cockpit. Cada acción del agente queda registrada con timestamp, contexto y resultado. Las credenciales nunca pasan por el contexto del modelo.",
  },
];

export default function Security() {
  const reduced = useReducedMotion() ?? false;

  return (
    <section className="bg-novo-cream-50 py-[80px] md:py-[128px]">
      <div className="mx-auto max-w-[1280px] px-8">

        {/* Header */}
        <div className="mb-20 text-center">
          <p className="mb-6 font-mono text-[13px] uppercase tracking-[0.08em] text-novo-graphite">
            — SEGURIDAD Y CONTROL
          </p>
          <h2 className="mx-auto max-w-[18ch] font-display text-[30px] leading-[1.1] tracking-[-0.02em] text-balance text-novo-black md:text-[72px] md:leading-[1.05] md:tracking-[-0.04em]">
            Tus datos y credenciales nunca salen de tu control.
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12">
          {BLOCKS.map((block, i) => (
            <motion.div
              key={block.title}
              initial={reduced ? undefined : { opacity: 0, y: 16 }}
              whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: EASE }}
            >
              <h3 className="mb-4 font-display text-[22px] leading-[1.2] tracking-[-0.01em] text-novo-black md:text-[32px] md:leading-[1.15] md:tracking-[-0.02em]">
                {block.title}
              </h3>
              <p className="text-[16px] leading-[1.6] text-novo-graphite">
                {block.body}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
