import Header from "@/components/landing/Header";
import Hero from "@/components/opera/Hero";
import ForWhom from "@/components/opera/ForWhom";
import TheProblem from "@/components/opera/TheProblem";
import HowWeWork from "@/components/opera/HowWeWork";
import AtCompletion from "@/components/opera/AtCompletion";
import Stack from "@/components/opera/Stack";
import NotIncluded from "@/components/opera/NotIncluded";
import Investment from "@/components/opera/Investment";

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
      </main>
    </>
  );
}
