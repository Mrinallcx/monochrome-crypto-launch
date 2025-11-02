import { Twitter, Github, Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-black/10">
      <div className="max-w-[700px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-medium mb-4">TOTO</h3>
            <p className="text-black/60 text-sm font-light">
              Building the future of decentralized finance, one block at a time.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider mb-4 text-black/80">
              Resources
            </h4>
            <ul className="space-y-2 text-sm font-light">
              <li>
                <a href="#" className="text-black/60 hover:text-black transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-black/60 hover:text-black transition-colors">
                  Whitepaper
                </a>
              </li>
              <li>
                <a href="#" className="text-black/60 hover:text-black transition-colors">
                  Audit Report
                </a>
              </li>
              <li>
                <a href="#" className="text-black/60 hover:text-black transition-colors">
                  Brand Kit
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider mb-4 text-black/80">
              Community
            </h4>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 border border-black/20 flex items-center justify-center hover:border-black hover:bg-black hover:text-white transition-all"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 border border-black/20 flex items-center justify-center hover:border-black hover:bg-black hover:text-white transition-all"
                aria-label="Telegram"
              >
                <Send className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 border border-black/20 flex items-center justify-center hover:border-black hover:bg-black hover:text-white transition-all"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-black/40 font-light">
          <p>© 2024 TOTO Token. All rights reserved.</p>
          <div className="flex gap-6 font-light">
            <a href="#" className="hover:text-black transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-black transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
