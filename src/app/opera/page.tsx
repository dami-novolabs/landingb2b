import type { Metadata } from "next";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import Hero from "@/components/opera/Hero";
import ForWhom from "@/components/opera/ForWhom";
import TheProblem from "@/components/opera/TheProblem";
import HowWeWork from "@/components/opera/HowWeWork";
import AtCompletion from "@/components/opera/AtCompletion";
import Stack from "@/components/opera/Stack";
import NotIncluded from "@/components/opera/NotIncluded";
import Investment from "@/components/opera/Investment";
import FAQs from "@/components/opera/FAQs";
import FinalCTA from "@/components/opera/FinalCTA";

export const metadata: Metadata = {
  title: "Opera — Novo Labs | Transformación operativa para empresas $5M+",
  description:
    "Rediseñamos los procesos críticos de tu empresa para eliminar cuellos de botella y multiplicar la capacidad operativa en 12 semanas. Con criterio de éxito firmado y garantía del 50%.",
  openGraph: {
    title: "Opera — Novo Labs",
    description: "Transformación operativa en 12 semanas. 50% reembolsable.",
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
        <ForWhom />
        <TheProblem />
        <HowWeWork />
        <AtCompletion />
        <Stack />
        <NotIncluded />
        <Investment />
        <FAQs />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
