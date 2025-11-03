import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Tokenomics from "@/components/Tokenomics";
import TokenStats from "@/components/TokenStats";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Tokenomics />
      <TokenStats />
      <FAQ />
      <Footer />
    </div>
  );
}

