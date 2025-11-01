import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="inline-block mb-6 px-4 py-2 border border-black/20 rounded-full">
          <span className="text-sm tracking-wider uppercase text-black/80">Next Generation Token</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
          TOTO
        </h1>
        
        <p className="text-xl md:text-2xl text-black/70 mb-12 max-w-2xl mx-auto">
          The future of decentralized finance, built on transparency and innovation.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-black text-white hover:bg-black/90 transition-all duration-300 group"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-black text-black hover:bg-black hover:text-white transition-all duration-300"
          >
          View Documentation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
