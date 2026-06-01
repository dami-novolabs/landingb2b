import type { Metadata } from "next";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import Hero from "@/components/innova/Hero";
import ForWhom from "@/components/innova/ForWhom";
import TheProblem from "@/components/innova/TheProblem";
import HowWeWork from "@/components/innova/HowWeWork";
import AtCompletion from "@/components/innova/AtCompletion";
import NotIncluded from "@/components/innova/NotIncluded";
import Investment from "@/components/innova/Investment";
import FAQs from "@/components/innova/FAQs";
import FinalCTA from "@/components/innova/FinalCTA";

export const metadata: Metadata = {
  title: "Innova — Novo Labs | Programa de innovación estratégica para empresas $5M+",
  description:
    "Construimos el sistema de innovación que tu empresa necesita para lanzar nuevas líneas de negocio en 12 semanas. Con criterio de éxito firmado y garantía del 50%.",
  openGraph: {
    title: "Innova — Novo Labs",
    description: "Nuevas líneas de negocio en 12 semanas. 50% reembolsable.",
    type: "website",
    locale: "es_AR",
  },
};

export default function InnovaPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ForWhom />
        <TheProblem />
        <HowWeWork />
        <AtCompletion />
        <NotIncluded />
        <Investment />
        <FAQs />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
