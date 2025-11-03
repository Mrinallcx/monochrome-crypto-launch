"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
      <div className="w-full max-w-[700px] bg-background/80 backdrop-blur-md border border-border/50 rounded-full px-6 h-14 flex items-center justify-between shadow-lg shadow-black/5">
        <Link href="/" className="text-2xl font-medium text-foreground hover:opacity-80 transition-opacity">
          TOTO
        </Link>
        
        <div className="flex items-center gap-6">
          <Link 
            href="/" 
            className={`text-sm font-medium transition-colors ${
              pathname === "/" ? "text-foreground" : "text-foreground/60 hover:text-foreground"
            }`}
          >
            Home
          </Link>
          <Link 
            href="/tia-token" 
            className={`text-sm font-medium transition-colors ${
              pathname === "/tia-token" ? "text-foreground" : "text-foreground/60 hover:text-foreground"
            }`}
          >
            $TIA Token
          </Link>
          <Button variant="default" size="sm" className="rounded-full">
            Buy Now
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
