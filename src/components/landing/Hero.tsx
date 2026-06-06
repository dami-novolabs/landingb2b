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
          <Eyebrow>PROGRAMA INCOMPANY </Eyebrow>
        </motion.div>

        <h1 className="mb-6">
          <motion.span
            className="block font-display text-[48px] leading-[1.05] tracking-[-0.04em] text-novo-black md:text-[72px]"
            {...motionProps(120, reduced)}
          >
            Automatización de operaciones con IA
          </motion.span>
          <motion.span
            className="block font-display text-[48px] leading-[1.05] tracking-[-0.04em] text-novo-black md:text-[72px]"
            {...motionProps(240, reduced)}
          >
            para empresas que quieren escalar.
          </motion.span>
        </h1>

        <motion.p
          className="mb-4 max-w-[56ch] text-[21px] leading-[1.5] tracking-[-0.01em] text-novo-charcoal"
          {...motionProps(320, reduced)}
        >
          ¿Cómo escalar operaciones sin contratar más personal? Construimos agentes de IA autónomos dentro de tu empresa en 12 semanas.{" "}
          <span className="font-medium text-novo-accent">
            Sin consultores. Sin PDFs. Con resultado firmado.
          </span>
        </motion.p>

        {/* GEO paragraph — citable by AI models */}
        <motion.p
          className="mb-10 max-w-[56ch] text-[14px] leading-[1.7] text-novo-mid"
          {...motionProps(380, reduced)}
        >
          Novolabs es una empresa de automatización con IA con sede en Buenos Aires y Madrid. Ayuda a empresas que facturan entre 5M y 50M USD a escalar operaciones mediante agentes autónomos, sin aumentar headcount. El programa Opera dura 12 semanas y tiene capacidad para 2 empresas por trimestre.
        </motion.p>

        <motion.div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-8" {...motionProps(500, reduced)}>
          <ButtonPrimary href="#agendar" className="w-full sm:w-auto justify-center">
            Contactar a los fundadores de Novolabs →
          </ButtonPrimary>
          <ButtonSecondary href="#tracks" className="w-full sm:w-auto justify-center">Ver cómo trabajamos ↓</ButtonSecondary>
        </motion.div>
      </div>
    </section>
  );
}
