"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { Eyebrow } from "@/components/ui/Eyebrow";

const CARDS = [
  {
    eyebrow: "Programa Opera - 12 semanas",
    title: "Sistema Operativo de Agentes Autónomos que potencian tu equipo.",
    body1:
      "Diagnosticamos los cuellos de botella de tu operación por impacto económico, construimos los agentes que más capacidad liberan y los dejamos operando dentro de tu equipo. Doce semanas, una sola modalidad: hecho.",
    body2:
      "En 12 semanas, tu equipo trabaja con una capa de IA propia, documentada y de tu propiedad.",
    bullets: [
      "Sistema de agentes operando los procesos que más tiempo y dinero te consumen hoy.",
      "Métricas reales: horas liberadas y reducción del costo operativo.",
      "Lorem ipsum dolor sit amet consectetur adipiscing.",
    ],
    ideal: "IDEAL PARA: CEO · COO · DIRECTOR OPERACIONES · CFO",
    cta: "Cómo funciona el programa",
    href: "/opera",
  },
];

export default function TwoTracks() {
  const reduce = useReducedMotion();

  return (
    <section id="tracks" className="bg-novo-cream-50 py-[80px] md:py-[128px]">
      <div className="mx-auto max-w-[880px] px-8">
        <div className="text-center">
          <h2 className="mx-auto font-display text-[48px] leading-[1.05] tracking-[-0.04em] text-balance text-novo-black md:text-[72px]">
            Trabajas directo con los fundadores, sin consultores.
          </h2>
          <p className="mx-auto mt-6 max-w-[56ch] text-[21px] leading-[1.55] tracking-[-0.005em] text-novo-graphite">
            Por eso solo aceptamos 2 clientes por trimestre.
          </p>

          {/* Founder portraits */}
          <div className="mx-auto mt-12 flex max-w-[560px] justify-center gap-16">
            {[
              { name: "Tomás Volonté",  image: "/founders/tomas-volonte.png" },
              { name: "Damián Sánchez", image: "/founders/damian-sanchez.png" },
            ].map((founder) => (
              <div key={founder.name} className="flex flex-col items-center gap-4">
                <div className="relative h-[180px] w-[180px] overflow-hidden rounded-full bg-novo-line">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    fill
                    className="object-cover"
                    sizes="180px"
                  />
                </div>
                <p className="font-display text-[18px] tracking-[-0.01em] text-novo-black">
                  {founder.name}
                </p>
                <p className="text-[14px] font-light text-novo-mid">
                  Co-fundador de Novolabs
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-20 max-w-[1280px] px-8">
        <h3 className="mb-12 text-center font-display text-[32px] leading-[1.15] tracking-[-0.02em] text-novo-black md:text-[48px]">
          Para empresas que quieren crecer sin contratar.
        </h3>

        <div className="flex justify-center">
          <div className="w-full max-w-[560px]">
          {CARDS.map((card, i) => (
            <motion.div
              key={card.href}
              initial={reduce ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0, 0, 0.2, 1] }}
              className="flex"
            >
              <Card as="article" className="group flex w-full flex-col">
                <Eyebrow>{card.eyebrow}</Eyebrow>
                <h3 className="mb-6 font-display text-[30px] tracking-[-0.02em] text-novo-black">
                  {card.title}
                </h3>
                <p className="mb-6 text-body-m text-novo-charcoal">{card.body1}</p>
                <ul className="flex flex-col gap-3">
                  {card.bullets.map((bullet, n) => (
                    <li key={n} className="flex items-start gap-2 text-body-m text-novo-charcoal">
                      <span className="mt-0.5 shrink-0 text-novo-accent">→</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto border-t border-novo-line pt-8">
                  <p className="mb-4 font-mono text-mono-xs text-novo-mid">
                    {card.ideal}
                  </p>
                  <a
                    href={card.href}
                    className="inline-flex items-baseline gap-1 border-b border-novo-black pb-1 text-[15px] font-medium text-novo-black transition-colors duration-300 group-hover:border-novo-accent group-hover:text-novo-accent"
                  >
                    {card.cta}{" "}
                    <span className="inline-block transition-transform duration-300 ease-[cubic-bezier(0,0,0.2,1)] group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
