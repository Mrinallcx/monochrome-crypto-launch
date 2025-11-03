import { Shield, Lock, Zap, Globe, TrendingUp, Users, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TiaToken() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-light mb-6 tracking-tight">
            $TIA Token
          </h1>
          
          <p className="text-xl md:text-2xl text-black/70 mb-12 max-w-2xl mx-auto font-normal">
            Revolutionizing digital asset ownership through blockchain tokenization
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-black text-white hover:bg-black/90 transition-all duration-300 group rounded-full"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-black text-black hover:bg-black hover:text-white transition-all duration-300 rounded-full"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Advantages of Tokenization */}
      <section className="py-20 px-4">
        <div className="max-w-[700px] mx-auto">
          <h2 className="text-4xl font-light text-center mb-4">Advantages of Tokenization</h2>
          <p className="text-center text-black/60 mb-12 font-light">Unlock the power of blockchain technology</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-black/20 p-6 rounded-lg hover:border-black/40 transition-colors">
              <Shield className="w-8 h-8 mb-4" />
              <h3 className="text-xl font-light mb-2">Enhanced Security</h3>
              <p className="text-black/60 font-light">Blockchain technology ensures your assets are protected with military-grade encryption</p>
            </div>
            
            <div className="border border-black/20 p-6 rounded-lg hover:border-black/40 transition-colors">
              <Zap className="w-8 h-8 mb-4" />
              <h3 className="text-xl font-light mb-2">Instant Transactions</h3>
              <p className="text-black/60 font-light">Transfer assets globally in seconds with minimal fees and maximum efficiency</p>
            </div>
            
            <div className="border border-black/20 p-6 rounded-lg hover:border-black/40 transition-colors">
              <Globe className="w-8 h-8 mb-4" />
              <h3 className="text-xl font-light mb-2">Global Access</h3>
              <p className="text-black/60 font-light">Access your tokenized assets from anywhere in the world, 24/7</p>
            </div>
            
            <div className="border border-black/20 p-6 rounded-lg hover:border-black/40 transition-colors">
              <Lock className="w-8 h-8 mb-4" />
              <h3 className="text-xl font-light mb-2">Full Ownership</h3>
              <p className="text-black/60 font-light">True ownership and control over your digital assets with blockchain verification</p>
            </div>
          </div>
        </div>
      </section>

      {/* TIA Token: Secure Your Digital Assets Today */}
      <section className="py-20 px-4 bg-black/5">
        <div className="max-w-[700px] mx-auto">
          <h2 className="text-4xl font-light text-center mb-4">TIA Token: Secure Your Digital Assets Today | Tiamonds</h2>
          <p className="text-center text-black/60 mb-12 font-light">The future of digital asset management</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-background border border-black/20 p-6 rounded-lg hover:border-black/40 transition-colors">
              <TrendingUp className="w-8 h-8 mb-4" />
              <h3 className="text-xl font-light mb-2">Growth Potential</h3>
              <p className="text-black/60 font-light">Benefit from the expanding tokenization market</p>
            </div>
            
            <div className="bg-background border border-black/20 p-6 rounded-lg hover:border-black/40 transition-colors">
              <Users className="w-8 h-8 mb-4" />
              <h3 className="text-xl font-light mb-2">Community Driven</h3>
              <p className="text-black/60 font-light">Join a global community of token holders</p>
            </div>
            
            <div className="bg-background border border-black/20 p-6 rounded-lg hover:border-black/40 transition-colors">
              <Award className="w-8 h-8 mb-4" />
              <h3 className="text-xl font-light mb-2">Premium Benefits</h3>
              <p className="text-black/60 font-light">Exclusive rewards and governance rights</p>
            </div>
          </div>
        </div>
      </section>

      {/* Special Feature Box */}
      <section className="py-20 px-4">
        <div className="max-w-[700px] mx-auto">
          <div className="border-2 border-black p-8 rounded-lg text-center">
            <h3 className="text-3xl font-light mb-4">Why Choose TIA Token?</h3>
            <p className="text-lg text-black/70 mb-6 font-light">
              TIA Token represents the next generation of digital assets, combining cutting-edge blockchain technology 
              with real-world utility. Our platform offers unparalleled security, transparency, and efficiency for 
              tokenizing and managing digital assets.
            </p>
            <Button 
              size="lg" 
              className="bg-black text-white hover:bg-black/90 transition-all duration-300 rounded-full"
            >
              Discover More
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

