import Header from "@/components/landing/Header";
import Hero from "@/components/innova/Hero";
import ForWhom from "@/components/innova/ForWhom";
import TheProblem from "@/components/innova/TheProblem";
import HowWeWork from "@/components/innova/HowWeWork";

export default function InnovaPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ForWhom />
        <TheProblem />
        <HowWeWork />
      </main>
    </>
  );
}
