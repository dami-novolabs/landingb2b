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
