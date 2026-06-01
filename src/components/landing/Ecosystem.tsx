"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ButtonSecondary } from "@/components/ui/ButtonSecondary";

const LOGOS = [
  "Aerolab", "Baikal", "Cyberclick", "Simball", "Rox",
  "Homa", "Coorva", "Possumus", "Serquo", "Intuition",
];

const ADVISORS = [
  {
    name: "Agustín Linenberg",
    bio: "Founder Aerolab. Inversor, mentor, advisor y Board Member en SoDA.",
  },
  {
    name: "David Tomás",
    bio: 'Co-founder & CEO de Cyberclick. Autor de "La empresa más feliz del mundo".',
  },
  {
    name: "Alex Dantart",
    bio: "Emprendedor, inversor ángel y especialista en inteligencia artificial.",
  },
];

export default function Ecosystem() {
  return (
    <section className="bg-novo-cream py-[80px] md:py-[128px]">
      <div className="mx-auto max-w-[880px] px-8">
        <SectionHeader
          eyebrow="ECOSISTEMA"
          title="Han confiado en el método."
          lead="Clientes, alumni y empresas del ecosistema Novo Labs."
          className="!mb-0"
        />
      </div>

      {/* Logos grid */}
      <div className="mx-auto my-20 max-w-[1280px] px-8">
        <motion.div
          className="grid grid-cols-3 gap-12 md:grid-cols-5"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0, 0, 0.2, 1] }}
        >
          {LOGOS.map((name) => (
            <div
              key={name}
              className="flex h-8 cursor-default items-center justify-center border border-dashed border-novo-line px-3 opacity-60 transition-opacity duration-200 hover:opacity-100"
            >
              <span className="font-mono text-mono-xs uppercase text-novo-graphite">
                {name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Advisors */}
      <div className="mx-auto max-w-[880px] px-8">
        <h3 className="mb-12 font-display text-[30px] text-novo-black">
          Y un consejo asesor con piel en el juego:
        </h3>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {ADVISORS.map((advisor, i) => (
            <motion.div
              key={advisor.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0, 0, 0.2, 1] }}
            >
              <div className="aspect-[4/5] w-full rounded-md bg-novo-line" />
              <h4 className="mt-6 font-display text-[24px] text-novo-black">
                {advisor.name}
              </h4>
              <p className="mt-2 text-body-s text-novo-graphite">{advisor.bio}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12">
          <ButtonSecondary href="/equipo">Ver consejo completo →</ButtonSecondary>
        </div>
      </div>
    </section>
  );
}
