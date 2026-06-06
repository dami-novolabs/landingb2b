"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Layers, UserCheck, Key, FileText } from "lucide-react";

const EASE = [0, 0, 0.2, 1] as const;

const FEATURES = [
  {
    icon: Layers,
    title: "Multi-área",
    body: "Agentes desplegados en Ventas, Operaciones y Marketing desde una sola plataforma.",
  },
  {
    icon: UserCheck,
    title: "Human-in-the-Loop",
    body: "El sistema ejecuta, tu equipo aprueba las decisiones que importan. Nada corre sin supervisión si así lo configurás.",
  },
  {
    icon: Key,
    title: "BYOK — Bring Your Own Key",
    body: "Usás tu propia API key de Anthropic. Los tokens se facturan directo a tu cuenta. Novo Labs nunca toca tus credenciales.",
  },
  {
    icon: FileText,
    title: "Audit log en lenguaje de negocio",
    body: "Cada acción del agente queda registrada en lenguaje legible para el equipo, no en logs técnicos.",
  },
];

export default function Solution() {
  const reduced = useReducedMotion() ?? false;

  return (
    <section className="bg-novo-cream py-[80px] md:py-[128px]">
      <div className="mx-auto max-w-[1280px] px-8">

        {/* Header */}
        <div className="mb-20 text-center">
          <p className="mb-6 font-mono text-[13px] uppercase tracking-[0.08em] text-novo-graphite">
            — LA SOLUCIÓN
          </p>
          <h2 className="mx-auto max-w-[20ch] font-display text-[48px] leading-[1.05] tracking-[-0.04em] text-balance text-novo-black md:text-[72px]">
            Un sistema operativo de agentes que trabaja con tu equipo.
          </h2>
        </div>

        {/* 2-col layout */}
        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2 md:gap-20">

          {/* Left — features */}
          <div className="flex flex-col gap-10">
            {FEATURES.map((feature, i) => (
              <motion.div
                key={feature.title}
                className="flex gap-5"
                initial={reduced ? undefined : { opacity: 0, y: 16 }}
                whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: EASE }}
              >
                <div className="flex-shrink-0 mt-1">
                  <feature.icon size={20} className="text-novo-black" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="mb-2 font-display text-[32px] leading-[1.15] tracking-[-0.02em] text-novo-black">
                    {feature.title}
                  </h3>
                  <p className="text-[16px] leading-[1.6] text-novo-graphite">
                    {feature.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right — image */}
          <motion.div
            className="relative aspect-[4/3] w-full overflow-hidden rounded-md border border-novo-line"
            initial={reduced ? undefined : { opacity: 0, y: 16 }}
            whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: EASE }}
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
      </div>
    </section>
  );
}
