import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Geometric background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 border border-white/10 rotate-45" />
        <div className="absolute bottom-20 right-10 w-96 h-96 border border-white/5 rotate-12" />
        <div className="absolute top-1/2 left-1/4 w-32 h-32 border border-white/20" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="inline-block mb-6 px-4 py-2 border border-white/20 rounded-full">
          <span className="text-sm tracking-wider uppercase text-white/80">Next Generation Token</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
          TOTO
        </h1>
        
        <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-2xl mx-auto">
          The future of decentralized finance, built on transparency and innovation.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-white text-black hover:bg-white/90 transition-all duration-300 group"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-black transition-all duration-300"
          >
            View Documentation
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
