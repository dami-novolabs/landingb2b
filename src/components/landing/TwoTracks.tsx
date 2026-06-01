"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Eyebrow } from "@/components/ui/Eyebrow";

const CARDS = [
  {
    eyebrow: "INNOVA · LANZAR",
    title: "Lanzar una nueva línea de negocio sin quemar presupuesto.",
    body1:
      "Para empresas que tienen una idea de producto, servicio o unidad de negocio nueva y necesitan validar demanda real antes de invertir.",
    body2:
      "En 12 semanas, tu equipo aprende a hablar con clientes reales, identificar el problema urgente y diseñar una oferta con compromiso de compra.",
    ideal: "IDEAL PARA: CEO · VP INNOVACIÓN · CPO",
    cta: "Conocer Innova",
    href: "/innova",
  },
  {
    eyebrow: "OPERA · ESCALAR",
    title: "Escalar la operación con IA sin sumar headcount.",
    body1:
      "Para empresas con procesos manuales que ya no pueden crecer sin más gente. Diagnosticamos los cuellos de botella por impacto económico y construimos la infraestructura de agentes que libera capacidad real.",
    body2:
      "En 12 semanas, tu equipo trabaja con una capa de IA propia, documentada y de tu propiedad.",
    ideal: "IDEAL PARA: CEO · COO · DIRECTOR OPERACIONES · CFO",
    cta: "Conocer Opera",
    href: "/opera",
  },
];

export default function TwoTracks() {
  return (
    <section id="tracks" className="bg-novo-cream-50 py-[80px] md:py-[128px]">
      <div className="mx-auto max-w-[880px] px-8">
        <SectionHeader
          eyebrow="DOS CAMINOS"
          title={
            <>
              Innova o Opera.
              <br />
              Una empresa por trimestre, por track.
            </>
          }
          lead="Trabajamos un solo track por programa. La razón es simple: profundidad. Si tu empresa tiene los dos desafíos, resolvemos el más urgente primero. Eso lo definimos en el diagnóstico."
          className="!mb-0"
        />
      </div>

      <div className="mx-auto mt-20 max-w-[1280px] px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {CARDS.map((card, i) => (
            <motion.div
              key={card.href}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0, 0, 0.2, 1] }}
              className="flex"
            >
              <Card as="article" className="group flex w-full flex-col">
                <Eyebrow>{card.eyebrow}</Eyebrow>
                <h3 className="mb-6 font-display text-[30px] tracking-[-0.02em] text-novo-black">
                  {card.title}
                </h3>
                <p className="mb-4 text-body-m text-novo-charcoal">{card.body1}</p>
                <p className="text-body-m text-novo-charcoal">{card.body2}</p>
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
    </section>
  );
}
