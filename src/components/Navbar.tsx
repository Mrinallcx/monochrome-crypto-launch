import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
      <div className="w-full max-w-[700px] bg-background border border-border rounded-full px-6 h-14 flex items-center justify-between shadow-sm">
        <Link to="/" className="text-2xl font-medium text-foreground hover:opacity-80 transition-opacity">
          TOTO
        </Link>
        
        <div className="flex items-center gap-6">
          <Link 
            to="/" 
            className={`text-sm font-medium transition-colors ${
              location.pathname === "/" ? "text-foreground" : "text-foreground/60 hover:text-foreground"
            }`}
          >
            Home
          </Link>
          <Link 
            to="/tia-token" 
            className={`text-sm font-medium transition-colors ${
              location.pathname === "/tia-token" ? "text-foreground" : "text-foreground/60 hover:text-foreground"
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
