import type { Metadata } from "next";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

// Sección 1
import Hero from "@/components/opera/Hero";
// Sección 2
import TheProblem from "@/components/opera/TheProblem";
// Sección 2b
import Solution from "@/components/opera/Solution";
// Sección 4
import Platform from "@/components/opera/Platform";
// Sección 5
import HowWeWork from "@/components/opera/HowWeWork";
// Sección 6
import Security from "@/components/opera/Security";
// Sección 7
import AtCompletion from "@/components/opera/AtCompletion";
// Sección 8
import Credibility from "@/components/opera/Credibility";
// Sección 9
import Investment from "@/components/opera/Investment";
// Sección 10
import FAQs from "@/components/opera/FAQs";
// Sección 11
import FinalCTA from "@/components/opera/FinalCTA";
// Sección 12
import ClosingCTA from "@/components/opera/ClosingCTA";

export const metadata: Metadata = {
  title: "Opera — Novo Labs | Escalado operativo con agentes de IA",
  description:
    "En 12 semanas construimos la capa de agentes que multiplica la capacidad de tu equipo. Medido en horas liberadas y costo operativo evitado, no en informes.",
  openGraph: {
    title: "Opera — Novo Labs",
    description: "Escalado operativo con agentes de IA en 12 semanas.",
    type: "website",
    locale: "es_AR",
  },
};

export default function OperaPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TheProblem />
        <Platform />
        <Solution />
        <HowWeWork />
        <Security />
        <AtCompletion />
        <Credibility />
        <Investment />
        <FAQs />
        <FinalCTA />
        <ClosingCTA />
      </main>
      <Footer />
    </>
  );
}
