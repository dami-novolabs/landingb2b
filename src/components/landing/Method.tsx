import { ButtonSecondary } from "@/components/ui/ButtonSecondary";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { cn } from "@/lib/utils";

const PHASES = [
  {
    eyebrow: "FASE 1 / SEMANAS 1–4",
    title: "Diagnóstico",
    body: "Definir el desafío con precisión. Alinear stakeholders. Firmar el criterio de éxito.",
  },
  {
    eyebrow: "FASE 2 / SEMANAS 5–8",
    title: "Validación",
    body: "Probar las hipótesis más riesgosas con evidencia real, no con supuestos.",
  },
  {
    eyebrow: "FASE 3 / SEMANAS 9–12",
    title: "Construcción",
    body: "Construir la versión mínima que demuestra el resultado. Entregar la metodología al equipo.",
  },
];

export default function Method() {
  return (
    <section className="bg-novo-cream py-[80px] md:py-[128px]">
      <div className="mx-auto max-w-[1280px] px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {PHASES.map((phase, i) => (
            <div
              key={phase.eyebrow}
              className={cn(i > 0 && "md:border-l md:border-novo-line md:pl-8")}
            >
              <Eyebrow>{phase.eyebrow}</Eyebrow>
              <h3 className="mb-6 font-display text-display-s text-novo-black">
                {phase.title}
              </h3>
              <p className="text-body-m leading-[1.6] text-novo-graphite">{phase.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <ButtonSecondary href="/metodo">Ver el método completo →</ButtonSecondary>
        </div>
      </div>
    </section>
  );
}
