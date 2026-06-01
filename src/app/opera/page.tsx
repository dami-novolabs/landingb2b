import Header from "@/components/landing/Header";
import Hero from "@/components/opera/Hero";
import ForWhom from "@/components/opera/ForWhom";
import TheProblem from "@/components/opera/TheProblem";
import HowWeWork from "@/components/opera/HowWeWork";

export default function OperaPage() {
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
