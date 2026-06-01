import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import CredibilityBand from "@/components/landing/CredibilityBand";
import TwoTracks from "@/components/landing/TwoTracks";
import WhyNovoLabs from "@/components/landing/WhyNovoLabs";
import Method from "@/components/landing/Method";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CredibilityBand />
        <TwoTracks />
        <WhyNovoLabs />
        <Method />
      </main>
    </>
  );
}
