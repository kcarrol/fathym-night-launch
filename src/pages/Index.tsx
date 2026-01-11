import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import OrbitalDiagram from "@/components/OrbitalDiagram";
import ProblemSection from "@/components/ProblemSection";
import NoContractSection from "@/components/NoContractSection";
import SolutionSection from "@/components/SolutionSection";
import RuntimeSection from "@/components/RuntimeSection";
import SynapticSection from "@/components/SynapticSection";
import BenefitsSection from "@/components/BenefitsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <OrbitalDiagram />
      <ProblemSection />
      <NoContractSection />
      <SolutionSection />
      <RuntimeSection />
      <SynapticSection />
      <BenefitsSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
