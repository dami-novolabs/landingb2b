import { Card } from "@/components/ui/Card";

const DELIVERABLES = [
  {
    num: "01",
    title: "Infraestructura de agentes operando.",
    body: "Un sistema construido a medida de tu empresa, operando los procesos que diagnosticamos. Activo, documentado y de tu propiedad.",
  },
  {
    num: "02",
    title: "Métricas de impacto reales.",
    body: "Horas liberadas. Costo operativo evitado. Errores reducidos. Las métricas que el CFO necesita para justificar la inversión, capturadas durante el programa, no proyectadas.",
  },
  {
    num: "03",
    title: "Un equipo que puede operar y expandir el sistema.",
    body: "La capacidad técnica básica para mantener y agregar nuevos agentes queda en el equipo interno. La próxima automatización no necesita un nuevo contrato.",
  },
  {
    num: "04",
    title: "Playbook de diagnóstico operacional.",
    body: "El método paso a paso para identificar y priorizar futuros procesos a automatizar. Para que la próxima ola de IA en tu empresa no empiece desde cero.",
  },
];

export default function AtCompletion() {
  return (
    <section className="bg-novo-cream py-[80px] md:py-[128px]">
      <div className="mx-auto max-w-[880px] px-8">

        {/* Header — centrado, display-xl */}
        <h2 className="mb-4 text-center font-display text-[30px] leading-[1.1] tracking-[-0.02em] text-balance text-novo-black md:text-[72px] md:leading-[1.05] md:tracking-[-0.04em]">
          Qué se queda en tu empresa después del programa.
        </h2>
        <p className="mb-16 text-center text-[21px] leading-[1.55] tracking-[-0.005em] text-novo-charcoal">
          Infraestructura funcionando, no recomendaciones.
        </p>

        <div className="flex flex-col gap-6">
          {DELIVERABLES.map((item) => (
            <Card key={item.num} as="article">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-[60px_1fr] md:gap-6">
                <p className="font-mono text-[14px] text-novo-mid">{item.num}</p>
                <div>
                  <h3 className="mb-4 font-display text-[24px] tracking-[-0.02em] text-novo-black">
                    {item.title}
                  </h3>
                  <p className="text-body-m leading-[1.6] text-novo-graphite">{item.body}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
