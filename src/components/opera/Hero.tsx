"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ButtonPrimary } from "@/components/ui/ButtonPrimary";
import { ButtonSecondary } from "@/components/ui/ButtonSecondary";

const EASE = [0, 0, 0.2, 1] as const;

function motionProps(delay: number, reduced: boolean) {
  if (reduced) return {};
  return {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: delay / 1000, ease: EASE },
  };
}

export default function Hero() {
  const reduced = useReducedMotion() ?? false;

  return (
    <section className="bg-novo-cream px-8 pb-[80px] pt-[96px] md:pb-[128px] md:pt-[160px]">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-16 md:grid-cols-2 md:gap-20">

        {/* Left — text */}
        <div>
          <motion.div {...motionProps(0, reduced)}>
            <Eyebrow>OPERA · TRACK DE ESCALADO OPERATIVO</Eyebrow>
          </motion.div>

          <motion.h1
            className="mb-8 mt-6 font-display text-[48px] leading-[1.05] tracking-[-0.04em] text-novo-black md:text-[72px]"
            {...motionProps(120, reduced)}
          >
            Tu equipo hace trabajo que podría hacer un agente. Cambiemos eso.
          </motion.h1>

          <motion.p
            className="mb-10 max-w-[52ch] text-[21px] leading-[1.55] tracking-[-0.005em] text-novo-charcoal"
            {...motionProps(300, reduced)}
          >
            En 12 semanas, construimos la capa de agentes que multiplica la
            capacidad del equipo actual. La medimos en horas liberadas y costo
            operativo evitado, no en informes.
          </motion.p>

          <motion.div className="flex flex-wrap gap-6" {...motionProps(500, reduced)}>
            <ButtonPrimary href="#agendar">
              Agendar diagnóstico estratégico →
            </ButtonPrimary>
            <ButtonSecondary href="#metodo">Ver cómo trabajamos ↓</ButtonSecondary>
          </motion.div>
        </div>

        {/* Right — image placeholder */}
        <motion.div
          className="aspect-[4/3] w-full rounded-md border border-novo-line bg-novo-line flex items-center justify-center"
          {...motionProps(200, reduced)}
        >
          <span className="font-mono text-[13px] tracking-[0.04em] text-novo-mid">
            NOVOLABS OS COCKPIT
          </span>
        </motion.div>

      </div>
    </section>
  );
}
