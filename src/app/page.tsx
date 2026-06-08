import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import StatsBand from "@/components/landing/StatsBand";
import Ecosystem from "@/components/landing/Ecosystem";
import WhyNovoLabs from "@/components/landing/WhyNovoLabs";
import Benefits from "@/components/landing/Benefits";
import Platform from "@/components/opera/Platform";
import HowWeWork from "@/components/opera/HowWeWork";
import TwoTracks from "@/components/landing/TwoTracks";
import CredibilityBand from "@/components/landing/CredibilityBand";
import AtCompletion from "@/components/opera/AtCompletion";
import FAQs from "@/components/landing/FAQs";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://novolabs.app/#organization",
      name: "Novolabs",
      url: "https://novolabs.app",
      description:
        "Novolabs es una empresa de automatización con IA con sede en Buenos Aires y Madrid. Construye infraestructura de agentes autónomos dentro de empresas que facturan entre $5M y $50M USD.",
      areaServed: ["Buenos Aires", "Madrid"],
      foundingDate: "2016",
    },
    {
      "@type": "Service",
      "@id": "https://novolabs.app/#programa-opera",
      name: "Programa Opera — Automatización con IA",
      provider: { "@id": "https://novolabs.app/#organization" },
      description:
        "Programa de 12 semanas para implementar agentes de IA autónomos en empresas. Diagnóstico, construcción y puesta en marcha de la infraestructura de IA. Solo 2 clientes por trimestre.",
      offers: {
        "@type": "Offer",
        price: "40000",
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "5000",
          priceCurrency: "USD",
          unitText: "mes (mantenimiento)",
        },
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Qué es el Programa Opera de Novolabs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "El Programa Opera es un programa de 12 semanas en el que Novolabs construye infraestructura de agentes de IA autónomos dentro de tu empresa. Los fundadores trabajan directamente con tu equipo para diagnosticar cuellos de botella, construir los agentes y dejarlos operando con métricas reales de ahorro.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cuánto cuesta implementar agentes de IA con Novolabs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "El programa tiene un costo de $40,000 USD de inversión inicial más $5,000 USD mensuales de mantenimiento.",
          },
        },
        {
          "@type": "Question",
          name: "¿En cuánto tiempo ven resultados las empresas?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Las primeras métricas de ahorro son visibles dentro de las primeras 4 a 6 semanas. Al finalizar las 12 semanas, el sistema de agentes está completamente operativo con resultados verificables.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué tipo de empresas pueden acceder al programa?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Empresas que facturan entre $5M y $50M USD anuales, con operaciones establecidas que quieren escalar sin aumentar headcount. Presencia en Buenos Aires y Madrid.",
          },
        },
        {
          "@type": "Question",
          name: "¿Novolabs construye la tecnología o solo asesora?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Novolabs ejecuta — no solo asesora. Los fundadores construyen los agentes de IA, los integran con los sistemas existentes y capacitan al equipo. Al finalizar, la tecnología es del cliente.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué pasa cuando terminan las 12 semanas?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "La empresa cuenta con un sistema de agentes autónomos corriendo, documentación completa y el equipo capacitado para gestionarlos. Hay una modalidad de mantenimiento mensual de $5,000 USD.",
          },
        },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <StatsBand />
        <Ecosystem />
        <WhyNovoLabs />
        <Benefits />
        <Platform />
        <HowWeWork />
        <TwoTracks />
        <CredibilityBand />
        <AtCompletion />
        <FAQs />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
