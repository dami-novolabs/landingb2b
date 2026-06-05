import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import CredibilityBand from "@/components/landing/CredibilityBand";
import TwoTracks from "@/components/landing/TwoTracks";
import WhyNovoLabs from "@/components/landing/WhyNovoLabs";
import Ecosystem from "@/components/landing/Ecosystem";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Ecosystem />
        <CredibilityBand />
        <WhyNovoLabs />
        <TwoTracks />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
