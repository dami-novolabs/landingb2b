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
      <div className="mx-auto max-w-[880px]">
        <motion.div {...motionProps(0, reduced)}>
          <Eyebrow>Para empresas que facturan entre 5 y 50 millones</Eyebrow>
        </motion.div>

        <h1 className="mb-10">
          <motion.span
            className="block font-display text-[32px] leading-[1.1] tracking-[-0.02em] text-novo-black md:text-[72px] md:leading-[1.05] md:tracking-[-0.04em]"
            {...motionProps(120, reduced)}
          >
            Crecé tu negocio sin contratar más gente.
          </motion.span>
        </h1>

        <motion.p
          className="mb-12 max-w-[56ch] text-body-xl text-novo-charcoal"
          {...motionProps(400, reduced)}
        >
          Construimos los agentes de IA que tu operación necesita para escalar.{" "}
          <span className="font-medium text-novo-accent">
            En 12 semanas, dentro de tu empresa, trabajando con tu equipo.
          </span>
        </motion.p>

        <motion.div className="flex flex-wrap gap-8" {...motionProps(600, reduced)}>
          <ButtonPrimary href="#agendar">
            Agendar un diagnóstico →
          </ButtonPrimary>
          <ButtonSecondary href="#tracks">Ver cómo trabajamos ↓</ButtonSecondary>
        </motion.div>
      </div>
    </section>
  );
}
