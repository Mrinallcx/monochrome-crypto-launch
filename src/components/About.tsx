const About = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-[700px] mx-auto">
        <div className="mb-4">
          <span className="text-sm tracking-widest uppercase text-black/50 font-light">About</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-light mb-8">
          What is TOTO?
        </h2>

        <div className="space-y-6 text-black/70 text-lg leading-relaxed font-light">
          <p>
            TOTO is a revolutionary cryptocurrency token designed to redefine the standards of 
            decentralized finance. Built on cutting-edge blockchain technology, TOTO offers 
            unparalleled security, transparency, and efficiency.
          </p>
          
          <p>
            Our mission is to create a sustainable ecosystem that empowers users with complete 
            control over their digital assets. Through innovative smart contract mechanisms and 
            community-driven governance, TOTO represents the next evolution in digital currency.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
            <div className="border border-black/10 p-6 hover:border-black/30 transition-colors">
              <h3 className="text-2xl font-light text-black mb-2">Secure</h3>
              <p className="text-black/60 text-sm font-light">
                Advanced cryptographic protocols ensure maximum security for all transactions.
              </p>
            </div>
            
            <div className="border border-black/10 p-6 hover:border-black/30 transition-colors">
              <h3 className="text-2xl font-light text-black mb-2">Fast</h3>
              <p className="text-black/60 text-sm font-light">
                Lightning-fast transaction speeds with minimal fees for optimal efficiency.
              </p>
            </div>
            
            <div className="border border-black/10 p-6 hover:border-black/30 transition-colors">
              <h3 className="text-2xl font-light text-black mb-2">Transparent</h3>
              <p className="text-black/60 text-sm font-light">
                Complete transparency through open-source code and on-chain verification.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
