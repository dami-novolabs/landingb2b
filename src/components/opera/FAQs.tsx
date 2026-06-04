import React from "react";

const FAQS = [
  {
    q: "¿Quién es dueño de la infraestructura que construyen?",
    a: "Tu empresa. Las cuentas, las API keys, los workflows, los prompts, la documentación — todo queda a nombre de tu empresa. Si decidieran cortar el contrato con Novo Labs al cierre del programa, no perdés nada. Esa es la regla.",
  },
  {
    q: "¿Cómo manejan la seguridad y los datos sensibles?",
    a: "En la fase 1, hacemos un mapeo explícito de qué información sale y qué información se queda dentro de tu infraestructura. Para datos sensibles trabajamos con modelos que no entrenan con tus datos (Claude Enterprise, Azure OpenAI), encriptación en reposo y en tránsito, y access control a nivel de proceso. Cada decisión queda documentada y aprobada por la dirección.",
  },
  {
    q: "¿Pueden trabajar sobre nuestro CRM/ERP existente?",
    a: "Sí. Trabajamos sobre integraciones (APIs, webhooks, conectores nativos) — no reemplazamos tu sistema core. Si tu CRM/ERP no tiene API moderna, lo manejamos con automatización de UI (RPA) y lo documentamos como límite del scope.",
  },
  {
    q: "¿Qué pasa si necesitamos cambiar algo después?",
    a: "Dos caminos. Si tu equipo técnico participó en la modalidad DWY, tienen la capacidad de hacer cambios menores sin necesidad de volver a contratarnos. Para cambios mayores o nuevas automatizaciones, el mantenimiento ongoing o un nuevo engagement son las dos opciones.",
  },
  {
    q: "¿Cuánto tiempo necesita dedicar nuestro equipo?",
    a: "En DFY, mínimo: 1 sesión de 90 minutos por semana con el equipo responsable + acceso a los referentes de los procesos durante el diagnóstico. En DWY, sumar 8–10 horas por semana de un perfil técnico que participe en la construcción.",
  },
  {
    q: "¿Cómo miden el ROI real al cierre?",
    a: "En la fase 1 establecemos la línea base: cuánto tiempo y costo consume el proceso hoy. Durante la fase 3, medimos el mismo proceso con el sistema construido. La sesión de cierre compara métrica antes vs. después con datos reales, no proyecciones. Esa métrica es el criterio de éxito firmado al inicio del programa.",
  },
];

export default function FAQs() {
  return (
    <section className="bg-novo-cream-50 py-[80px] md:py-[128px]">
      <div className="mx-auto max-w-[720px] px-8">

        {/* Header — centrado, display-xl */}
        <h2 className="mb-16 text-center font-display text-[48px] leading-[1.05] tracking-[-0.04em] text-balance text-novo-black md:text-[72px]">
          Preguntas que repetimos en cada diagnóstico.
        </h2>

        <div>
          {FAQS.map((faq, i) => (
            <React.Fragment key={faq.q}>
              {i > 0 && <hr className="my-14 border-novo-line" />}
              <div>
                <h3 className="mb-5 font-display text-[26px] tracking-[-0.02em] text-novo-black">
                  {faq.q}
                </h3>
                <p className="max-w-[60ch] text-[17px] leading-[1.65] text-novo-charcoal">
                  {faq.a}
                </p>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
