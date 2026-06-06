import React from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";

const PHASES = [
  {
    eyebrow: "FASE 1 · SEMANAs 1 y 2",
    title: "Diagnóstico operacional",
    intro:
      "Antes de automatizar nada, entender cómo opera la empresa hoy y dónde están los cuellos de botella reales.",
    tasks: [
      "Mapeo de procesos críticos (los que más tiempo consumen o más dependen de personas clave)",
      "Cálculo de costo operativo por proceso: horas × tarifa equivalente × frecuencia",
      "Identificación de los 3–5 procesos con mayor potencial de automatización",
      "Matriz de impacto vs. complejidad: qué automatizar primero",
    ],
  },
  {
    eyebrow: "FASE 2 · SEMANAS 3 y 4",
    title: "Diseño de infraestructura",
    intro:
      "Con el diagnóstico claro, diseñar la arquitectura de agentes antes de construir. Validar el diseño con el equipo operativo.",
    tasks: [
      "Definición de la stack: qué agentes, qué automatizaciones, qué integraciones",
      "Diseño del flujo: qué hace el sistema, qué hace la persona, cuál es el handoff",
      "Estimación de ROI por implementación: horas ahorradas, reducción de errores, velocidad ganada",
      'Validación del diseño con el equipo operativo antes de construir ("Mom Test de infraestructura": ¿el equipo lo usaría?)',
    ],
    
  },
  {
    eyebrow: "FASE 3 · SEMANAS 5 a 12",
    title: "Construcción y adopción",
    intro:
      "Construir la infraestructura mínima que libera capacidad real y asegurar que el equipo la adopta.",
    tasks: [
      "Implementación de los agentes y automatizaciones priorizados",
      "Testing con casos reales del equipo operativo",
      "Documentación del sistema para que el equipo pueda mantenerlo",
      "Sesión de cierre: métricas reales vs. métricas proyectadas",
    ],
  },
];

export default function HowWeWork() {
  return (
    <section id="metodo" className="bg-novo-cream-50 py-[80px] md:py-[128px]">
      <div className="mx-auto max-w-[880px] px-8">

        {/* Header — centrado, display-xl */}
        <h2 className="mb-16 text-center font-display text-[48px] leading-[1.05] tracking-[-0.04em] text-balance text-novo-black md:text-[72px]">
          12 semanas. 3 fases para transformar tu negocio.
        </h2>

        <div>
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


              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
