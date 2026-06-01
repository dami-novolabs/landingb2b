import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const FAQS = [
  {
    q: "¿Qué pasa si en el experimento de demanda nadie compra?",
    a: "Es uno de los dos resultados posibles. Si la evidencia muestra que el segmento no compra, lo sabés con datos en la semana 12 — antes de invertir presupuesto en construir. Eso es exactamente el resultado que el programa promete: decisiones con evidencia. Un \"no\" temprano es el output más caro que existe en innovación.",
  },
  {
    q: "¿Cuánto tiempo necesita dedicar nuestro equipo al programa?",
    a: "90 minutos por semana de sesión grupal con los fundadores + aproximadamente 4 horas de trabajo asíncrono por persona. En la fase 2 (entrevistas con clientes), el tiempo sube a 6–8 horas por semana de personas designadas. No requiere pausar el negocio.",
  },
  {
    q: "¿Pueden trabajar con una iniciativa que ya está en desarrollo?",
    a: "Sí, siempre que estén dispuestos a re-validar lo que ya construyeron. Si el equipo está convencido de que su solución es la correcta y solo quiere ayuda para venderla, este no es el programa. Si están abiertos a descubrir que el problema o el segmento podrían ser otros, sí tiene sentido.",
  },
  {
    q: "¿Sirve para B2B o solo para B2C?",
    a: "Los dos. La metodología es la misma: identificar el problema urgente, diseñar la oferta, validar con evidencia. La diferencia está en cómo se ejecutan las entrevistas y los experimentos de demanda. Lo adaptamos según el caso.",
  },
  {
    q: "¿Cómo eligen el segmento beachhead?",
    a: "En la fase 1. Trabajamos con la dirección para identificar el segmento más pequeño donde el problema es más urgente. La regla: 100 clientes que sufren mucho > 10.000 clientes que sufren un poco. El beachhead es donde empieza la validación, no donde termina el negocio.",
  },
  {
    q: "¿Qué pasa si el desafío que elegimos al inicio era el equivocado?",
    a: "Para eso existe la fase 1. Las primeras 4 semanas son específicamente para evitar ese riesgo: definir el desafío con precisión, alinear stakeholders y verificar que tiene las condiciones para resolverse en 12 semanas. Si en la fase 2 aparece evidencia de que el desafío original no era el correcto, lo ajustamos. Preferimos ajustar en la semana 5 que descubrirlo en la semana 11.",
  },
];

export default function FAQs() {
  return (
    <section className="bg-novo-cream-50 py-[80px] md:py-[128px]">
      <div className="mx-auto max-w-[720px] px-8">
        <SectionHeader
          eyebrow="FAQS"
          title="Preguntas que repetimos en cada diagnóstico."
        />

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
