import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const CATEGORIES = [
  {
    label: "AGENTES E INTEGRACIONES",
    tools: "n8n · Make · Zapier · Claude API · OpenAI API · Vapi",
  },
  {
    label: "BASES DE CONOCIMIENTO Y RAG",
    tools: "Notion · Airtable · Supabase pgvector · Pinecone",
  },
  {
    label: "COMUNICACIÓN Y CRM",
    tools: "HubSpot · Slack · WhatsApp Business API · Twilio",
  },
  {
    label: "OPERACIONES Y DOCUMENTOS",
    tools: "Google Workspace · Notion · Procesamiento de documentos con IA",
  },
  {
    label: "ANÁLISIS Y REPORTES",
    tools: "Looker Studio · Dashboards con IA para síntesis de datos",
  },
];

export default function Stack() {
  return (
    <section className="bg-novo-cream-50 py-[80px] md:py-[128px]">
      <div className="mx-auto max-w-[880px] px-8">
        <SectionHeader
          eyebrow="STACK"
          title={
            <>
              Las herramientas que usamos
              <br />
              no son el secreto. La arquitectura sí.
            </>
          }
          lead="La stack específica se define en el diagnóstico, según la realidad de cada empresa. Esto es la caja de herramientas con la que trabajamos habitualmente:"
        />

        <div>
          {CATEGORIES.map((cat, i) => (
            <React.Fragment key={cat.label}>
              {i > 0 && <hr className="my-12 border-novo-line" />}
              <div>
                <p className="mb-4 font-mono text-mono-s uppercase text-novo-graphite">
                  {cat.label}
                </p>
                <p className="text-[18px] text-novo-black">{cat.tools}</p>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
