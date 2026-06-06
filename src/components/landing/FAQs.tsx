"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    q: "¿Qué es el Programa Opera de Novolabs?",
    a: "El Programa Opera es un programa de 12 semanas en el que Novolabs construye infraestructura de agentes de IA autónomos dentro de tu empresa. Los fundadores trabajan directamente con tu equipo — sin consultores intermedios — para diagnosticar cuellos de botella, construir los agentes y dejarlos operando con métricas reales de ahorro.",
  },
  {
    q: "¿Cuánto cuesta implementar agentes de IA con Novolabs?",
    a: "El programa tiene un costo de $40,000 USD de inversión inicial más $5,000 USD mensuales de mantenimiento. Dado que solo aceptamos 2 clientes por trimestre, trabajamos exclusivamente con empresas donde el retorno esperado justifica claramente la inversión.",
  },
  {
    q: "¿En cuánto tiempo ven resultados las empresas?",
    a: "Las primeras métricas de ahorro (horas liberadas, reducción de costo operativo) son visibles dentro de las primeras 4 a 6 semanas del programa. Al finalizar las 12 semanas, el sistema de agentes está completamente operativo y documentado, con resultados verificables.",
  },
  {
    q: "¿Qué tipo de empresas pueden acceder al programa?",
    a: "Trabajamos con empresas que facturan entre $5M y $50M USD anuales, con operaciones establecidas que quieren escalar sin aumentar headcount. El perfil de decisor es CEO, COO, CFO o Director de Operaciones. Tenemos presencia en Buenos Aires y Madrid.",
  },
  {
    q: "¿Novolabs construye la tecnología o solo asesora?",
    a: "Novolabs ejecuta — no solo asesora. Los fundadores trabajan dentro de tu empresa, construyen los agentes de IA, los integran con tus sistemas existentes y capacitan a tu equipo para operarlos. Al finalizar el programa, la tecnología es tuya.",
  },
  {
    q: "¿Qué pasa cuando terminan las 12 semanas?",
    a: "Al finalizar las 12 semanas, tu empresa cuenta con un sistema de agentes autónomos corriendo, documentación completa, y tu equipo capacitado para gestionarlos. Existe una modalidad de mantenimiento mensual de $5,000 USD para soporte continuo, actualizaciones y nuevos agentes.",
  },
];

function FAQItem({ faq, isOpen, onToggle }: {
  faq: typeof FAQS[number];
  isOpen: boolean;
  onToggle: () => void;
}) {
  const reduced = useReducedMotion();

  return (
    <div className="border-b border-novo-line">
      <button
        type="button"
        aria-expanded={isOpen}
        onClick={onToggle}
        className="flex w-full items-start justify-between gap-6 py-6 text-left"
      >
        <span className="font-display text-[20px] leading-[1.3] tracking-[-0.01em] text-novo-black md:text-[24px]">
          {faq.q}
        </span>
        <ChevronDown
          size={20}
          strokeWidth={1.5}
          className={cn(
            "mt-1 flex-shrink-0 text-novo-graphite transition-transform duration-300",
            isOpen && "rotate-180"
          )}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={reduced ? { opacity: 1 } : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 max-w-[65ch] text-body-m leading-[1.7] text-novo-charcoal">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQs() {
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (i: number) => setOpen((prev) => (prev === i ? null : i));

  return (
    <section className="bg-novo-cream py-[80px] md:py-[128px]">
      <div className="mx-auto max-w-[880px] px-8">
        <div className="mb-16">
          <p className="mb-4 font-mono text-[13px] uppercase tracking-[0.08em] text-novo-graphite">
            PREGUNTAS FRECUENTES
          </p>
          <h2 className="font-display text-[40px] leading-[1.05] tracking-[-0.03em] text-novo-black md:text-[56px]">
            Todo lo que necesitás saber antes de hablar con nosotros.
          </h2>
        </div>

        <div>
          {FAQS.map((faq, i) => (
            <FAQItem
              key={faq.q}
              faq={faq}
              isOpen={open === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
