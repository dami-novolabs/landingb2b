"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const EASE = [0, 0, 0.2, 1] as const;

export default function Solution() {
  const reduced = useReducedMotion() ?? false;

  return (
    <section className="bg-novo-cream px-8 py-[80px] md:py-[128px]">
      <div className="mx-auto max-w-[1280px]">

        {/* h2 title */}
        <motion.h2
          className="mb-16 font-display text-[48px] leading-[1.05] tracking-[-0.04em] text-balance text-novo-black md:text-[72px]"
          initial={reduced ? undefined : { opacity: 0, y: 16 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          Título de sección
        </motion.h2>

        {/* Duplicated image div */}
        <motion.div
          className="relative aspect-[4/3] w-full overflow-hidden rounded-md border border-novo-line"
          initial={reduced ? undefined : { opacity: 0, y: 16 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
        >
          <Image
            src="/opera/dashboard.png"
            alt="Novolabs OS Dashboard"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

      </div>
    </section>
  );
}
