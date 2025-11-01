import { Shield, Lock, Zap, Globe, TrendingUp, Users, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import TiaTokenStats from "@/components/TiaTokenStats";
import Footer from "@/components/Footer";

const TiaToken = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="inline-block mb-6 px-4 py-2 border border-black/20 rounded-full">
            <span className="text-sm tracking-wider uppercase text-black/80">Tokenization Platform</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            $TIA Token
          </h1>
          
          <p className="text-xl md:text-2xl text-black/70 mb-12 max-w-2xl mx-auto">
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
          <h2 className="text-4xl font-bold text-center mb-4">Advantages of Tokenization</h2>
          <p className="text-center text-black/60 mb-12">Unlock the power of blockchain technology</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-black/20 p-6 rounded-lg hover:border-black/40 transition-colors">
              <Shield className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Enhanced Security</h3>
              <p className="text-black/60">Blockchain technology ensures your assets are protected with military-grade encryption</p>
            </div>
            
            <div className="border border-black/20 p-6 rounded-lg hover:border-black/40 transition-colors">
              <Zap className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Instant Transactions</h3>
              <p className="text-black/60">Transfer assets globally in seconds with minimal fees and maximum efficiency</p>
            </div>
            
            <div className="border border-black/20 p-6 rounded-lg hover:border-black/40 transition-colors">
              <Globe className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Global Access</h3>
              <p className="text-black/60">Access your tokenized assets from anywhere in the world, 24/7</p>
            </div>
            
            <div className="border border-black/20 p-6 rounded-lg hover:border-black/40 transition-colors">
              <Lock className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Full Ownership</h3>
              <p className="text-black/60">True ownership and control over your digital assets with blockchain verification</p>
            </div>
          </div>
        </div>
      </section>

      {/* TIA Token: Secure Your Digital Assets Today */}
      <section className="py-20 px-4 bg-black/5">
        <div className="max-w-[700px] mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">TIA Token: Secure Your Digital Assets Today | Tiamonds</h2>
          <p className="text-center text-black/60 mb-12">The future of digital asset management</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-background border border-black/20 p-6 rounded-lg hover:border-black/40 transition-colors">
              <TrendingUp className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Growth Potential</h3>
              <p className="text-black/60">Benefit from the expanding tokenization market</p>
            </div>
            
            <div className="bg-background border border-black/20 p-6 rounded-lg hover:border-black/40 transition-colors">
              <Users className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Community Driven</h3>
              <p className="text-black/60">Join a global community of token holders</p>
            </div>
            
            <div className="bg-background border border-black/20 p-6 rounded-lg hover:border-black/40 transition-colors">
              <Award className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Premium Benefits</h3>
              <p className="text-black/60">Exclusive rewards and governance rights</p>
            </div>
          </div>
        </div>
      </section>

      {/* Special Feature Box */}
      <section className="py-20 px-4">
        <div className="max-w-[700px] mx-auto">
          <div className="border-2 border-black p-8 rounded-lg text-center">
            <h3 className="text-3xl font-bold mb-4">Why Choose TIA Token?</h3>
            <p className="text-lg text-black/70 mb-6">
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

      {/* Live Token Stats */}
      <TiaTokenStats />

      {/* Trade TIA on Top Platforms */}
      <section className="py-20 px-4 bg-black/5">
        <div className="max-w-[700px] mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Trade TIA on Top Platforms</h2>
          <p className="text-center text-black/60 mb-12">Available on leading cryptocurrency exchanges</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-background border border-black/20 p-8 rounded-lg hover:border-black/40 transition-colors text-center">
              <div className="text-4xl font-bold mb-2">Binance</div>
              <p className="text-black/60 mb-4">World's largest exchange</p>
              <Button variant="outline" size="sm" className="rounded-full border-black text-black hover:bg-black hover:text-white">
                Trade Now
              </Button>
            </div>
            
            <div className="bg-background border border-black/20 p-8 rounded-lg hover:border-black/40 transition-colors text-center">
              <div className="text-4xl font-bold mb-2">Coinbase</div>
              <p className="text-black/60 mb-4">Trusted by millions</p>
              <Button variant="outline" size="sm" className="rounded-full border-black text-black hover:bg-black hover:text-white">
                Trade Now
              </Button>
            </div>
            
            <div className="bg-background border border-black/20 p-8 rounded-lg hover:border-black/40 transition-colors text-center">
              <div className="text-4xl font-bold mb-2">Kraken</div>
              <p className="text-black/60 mb-4">Secure and reliable</p>
              <Button variant="outline" size="sm" className="rounded-full border-black text-black hover:bg-black hover:text-white">
                Trade Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TiaToken;
