import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import CredibilityBand from "@/components/landing/CredibilityBand";
import TwoTracks from "@/components/landing/TwoTracks";
import WhyNovoLabs from "@/components/landing/WhyNovoLabs";
import Method from "@/components/landing/Method";
import Ecosystem from "@/components/landing/Ecosystem";
import HowWeCharge from "@/components/landing/HowWeCharge";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

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
        <Ecosystem />
        <HowWeCharge />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
