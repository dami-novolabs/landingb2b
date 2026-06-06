"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Layers, UserCheck, Key, FileText } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";

const EASE = [0, 0, 0.2, 1] as const;

const FEATURES = [
  {
    icon: UserCheck,
    title: "Vos seguís decidiendo. Los agentes ejecutan.",
    body: "Configurás qué puede hacer el sistema solo y qué necesita la aprobación de alguien de tu equipo. Nada se ejecuta por encima de tu gente si vos no lo querés así.",
  },
  {
    icon: Key,
    title: "El costo de IA lo pagás directo, sin intermediarios.",
    body: "Contratás vos mismo con el proveedor de IA (Anthropic, los creadores de Claude). El consumo va a tu cuenta, ves cada peso que se gasta, y nosotros no facturamos sobreprecio por encima.",
  },
  {
    icon: Layers,
    title: "Cubre todas las áreas, desde un mismo lugar.",
    body: "Los agentes operan en Ventas, Operaciones y Marketing al mismo tiempo. Una sola plataforma para todo el negocio, no una herramienta distinta para cada área.",
  },
  {
    icon: FileText,
    title: "Ves todo lo que hace el sistema, en castellano claro.",
    body: "Cada decisión del agente queda registrada en un historial que cualquiera de tu equipo puede leer y entender. Qué pasó, cuándo, por qué — sin tener que pedirle ayuda al área de IT.",
  },
];

const INTEGRATIONS = [
  "Cada mes tu Sistema Operativo recibe mejoras, actualiza los modelos de IA y optimiza los costos de tu operación.",
];

export default function Platform() {
  const reduced = useReducedMotion() ?? false;

  return (
    <section className="bg-[#2a2824] py-[80px] md:py-[128px]">
      <div className="mx-auto max-w-[1280px] px-8">

        {/* Header */}
        <div className="mb-20 text-center">
          <p className="mb-6 font-mono text-[13px] uppercase tracking-[0.08em] text-[#a9a6a2]">
            TU SISTEMA OPERATIVO
          </p>
          <h2 className="mx-auto max-w-[20ch] font-display text-[48px] leading-[1.05] tracking-[-0.04em] text-balance text-[#FAFAFA] md:text-[72px]">
            Los agentes trabajan 24h. Tu equipo aprueba cuando importa.
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
                  <feature.icon size={20} className="text-[#FAFAFA]" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="mb-2 font-display text-[32px] leading-[1.15] tracking-[-0.02em] text-[#FAFAFA]">
                    {feature.title}
                  </h3>
                  <p className="text-[16px] leading-[1.6] text-[#a9a6a2]">
                    {feature.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right — image */}
          <motion.div
            className="relative aspect-[4/3] w-full overflow-hidden rounded-md border border-[#FAFAFA]"
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

      {/* Integrations band */}
      <div className="mt-20 bg-[#2a2824] px-8 py-12">
        <div className="mx-auto max-w-[1280px]">
          <Eyebrow className="mb-6">SIEMPRE ACTUALIZADO</Eyebrow>
          <p className="font-mono text-[13px] tracking-[0.04em] text-[#a9a6a2]">
            {INTEGRATIONS.join(" · ")}
          </p>
        </div>
      </div>
    </section>
  );
}
