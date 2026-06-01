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
          <Eyebrow>PROGRAMA ESTRATÉGICO · 2 EMPRESAS POR TRIMESTRE</Eyebrow>
        </motion.div>

        <h1 className="mb-10">
          <motion.span
            className="block font-display text-[48px] leading-[1.05] tracking-[-0.04em] text-novo-black md:text-[72px]"
            {...motionProps(120, reduced)}
          >
            Transformá un desafío estratégico en un resultado
          </motion.span>
          <motion.span
            className="block font-display text-[48px] leading-[1.05] tracking-[-0.04em] text-novo-black md:text-[72px]"
            {...motionProps(240, reduced)}
          >
            concreto
            
            en 90 días.
          </motion.span>
        </h1>

        <motion.p
          className="mb-12 max-w-[56ch] text-body-xl text-novo-charcoal"
          {...motionProps(400, reduced)}
        >
          Un programa de 12 semanas donde trabajamos dentro de tu empresa — con tu equipo,{" "}
          <span className="font-medium text-novo-accent">
            sobre un desafío real que mejore tu negocio.
          </span>
        </motion.p>

        <motion.div className="flex flex-wrap gap-8" {...motionProps(600, reduced)}>
          <ButtonPrimary href="#agendar">
            Agendar diagnóstico estratégico →
          </ButtonPrimary>
          <ButtonSecondary href="#tracks">Ver cómo trabajamos ↓</ButtonSecondary>
        </motion.div>
      </div>
    </section>
  );
}
