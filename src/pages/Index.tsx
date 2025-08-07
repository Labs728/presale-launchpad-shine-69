import Hero from "@/components/Hero";
import TokenPurchase from "@/components/TokenPurchase";
import Roadmap from "@/components/Roadmap";
import FAQ from "@/components/FAQ";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <TokenPurchase />
      <Roadmap />
      <FAQ />
    </div>
  );
};

export default Index;
