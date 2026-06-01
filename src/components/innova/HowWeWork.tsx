import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Eyebrow } from "@/components/ui/Eyebrow";

const PHASES = [
  {
    eyebrow: "FASE 1 · SEMANAS 1–4",
    title: "Diagnóstico y modelo",
    intro:
      "Antes de validar nada, hay que alinear qué se está intentando validar y para quién. Esta fase termina con un criterio de éxito firmado por la dirección y un Lean Canvas de la iniciativa.",
    tasks: [
      "Diagnóstico de cultura de validación en el equipo",
      "Lean Canvas de la iniciativa específica",
      "Definición del beachhead: el segmento más pequeño donde el problema es más urgente",
      "Test DVF (Deseable, Viable, Factible) y prueba de rentabilidad",
      "Firma del criterio de éxito",
    ],
    deliverable: "Lean Canvas validado + ICP + Pitch",
  },
  {
    eyebrow: "FASE 2 · SEMANAS 5–8",
    title: "Descubrimiento del problema",
    intro:
      "La etapa más importante y más omitida. Tu equipo sale a hablar con clientes reales, no con sus intuiciones.",
    tasks: [
      "Guía de entrevistas con Mom Test (sin contaminar con soluciones)",
      "15–20 entrevistas con clientes del segmento objetivo",
      "Análisis individual de cada entrevista (subagente IA + equipo)",
      "Síntesis de patrones: qué dicen todos, qué dicen algunos, ruido",
      "JTBD priorizado y lenguaje literal del cliente",
    ],
    deliverable: "Mapa de segmentos + JTBD validado + síntesis",
  },
  {
    eyebrow: "FASE 3 · SEMANAS 9–12",
    title: "Solución, oferta y experimento de demanda",
    intro:
      "Con el problema validado, diseñar la solución mínima y testear si alguien paga. La métrica no es interés — es compromiso.",
    tasks: [
      "Diseño de solución con criterio 10x y Modelo Kano",
      "Construcción de la oferta usando Ecuación de Valor (Hormozi)",
      "Experimento de demanda real: lead magnet, lista de espera, carta de intención o preventa",
      "Decisión basada en evidencia: ir, pivotar o salir",
    ],
    deliverable:
      "Propuesta de valor + Oferta + Resultados del experimento + Recomendación firmada",
  },
];

export default function HowWeWork() {
  return (
    <section id="metodo" className="bg-novo-cream-50 py-[80px] md:py-[128px]">
      <div className="mx-auto max-w-[880px] px-8">
        <SectionHeader
          eyebrow="CÓMO TRABAJAMOS"
          title={<>12 semanas. 3 fases.</>}
          className="!mb-0"
        />

        <div className="mt-16">
          {PHASES.map((phase, i) => (
            <React.Fragment key={phase.eyebrow}>
              {i > 0 && <hr className="my-20 border-novo-line" />}
              <div>
                <Eyebrow>{phase.eyebrow}</Eyebrow>
                <h3 className="mb-6 font-display text-display-s text-novo-black">
                  {phase.title}
                </h3>
                <p className="mb-8 text-body-l text-novo-charcoal">{phase.intro}</p>

                <p className="mb-4 text-[14px] font-semibold text-novo-black">
                  Qué hacemos:
                </p>
                <ul className="flex flex-col gap-3">
                  {phase.tasks.map((task) => (
                    <li
                      key={task}
                      className="flex gap-3 text-body-m leading-[1.6] text-novo-graphite"
                    >
                      <span className="flex-shrink-0 text-novo-mid">·</span>
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 border-l-2 border-novo-accent pl-6">
                  <p className="text-[17px] italic text-novo-black">
                    Entregable de la fase: {phase.deliverable}
                  </p>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
